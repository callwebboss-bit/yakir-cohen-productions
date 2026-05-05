// Lighthouse CI — hard gatekeeper for Performance, Accessibility, SEO, Best Practices.
// CI pipeline: npm run build → lhci autorun
// Local verification: npx lhci autorun --config=lighthouserc.js

/** @type {import('@lhci/utils/src/types').LighthouseRcData} */
module.exports = {
  ci: {
    /* ── 1. COLLECT ─────────────────────────────────────────────────────────
     * Spin up the production server, run 3 audits per URL to reduce variance,
     * and collect the median run for assertion.
     * ─────────────────────────────────────────────────────────────────────── */
    collect: {
      // Start the production Next.js server (requires `npm run build` first)
      startServerCommand: "npm run start",

      // Pattern to confirm the server is ready before Lighthouse starts
      startServerReadyPattern: "ready on|started server on|Listening on",

      // Milliseconds to wait for the server if no ready-pattern is matched
      startServerReadyTimeout: 30_000,

      // URLs to audit — home page + two high-traffic routes
      url: [
        "http://localhost:3000",
        "http://localhost:3000/studio",
        "http://localhost:3000/online/vocal-fix/stem-split",
      ],

      // 3 runs per URL — LHCI uses the median, reducing measurement noise
      numberOfRuns: 3,

      settings: {
        // Only run the four scored categories; skip PWA (irrelevant here)
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
        ],

        // Desktop preset gives stable, deterministic performance scores in CI
        // Switch to "mobile" if real-device mobile scores are the target
        preset: "desktop",

        // CPU/network simulation (consistent across CI machines)
        throttlingMethod: "simulate",
        throttling: {
          rttMs:                40,
          throughputKbps:       10_240,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs:     0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps:   0,
        },

        // Skip the service-worker / PWA audit (not relevant to this site)
        skipAudits: ["service-worker", "installable-manifest", "is-on-https"],

        // Capture the full page (not just above-the-fold)
        screenEmulation: {
          mobile:            false,
          width:             1350,
          height:            940,
          deviceScaleFactor: 1,
          disabled:          false,
        },

        // Stable user-agent avoids bot-detection redirects
        emulatedUserAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) " +
          "AppleWebKit/537.36 (KHTML, like Gecko) " +
          "Chrome/124.0.0.0 Safari/537.36",
      },
    },

    /* ── 2. ASSERT ───────────────────────────────────────────────────────────
     * minScore: 1 = 100%.
     * "error" severity causes a non-zero exit code → CI build fails.
     * "warn"  severity logs a warning but lets the build pass.
     *
     * To loosen a gate temporarily, change "error" → "warn" or
     * lower minScore (e.g. 0.95 = 95 %).
     * ─────────────────────────────────────────────────────────────────────── */
    assert: {
      // Aggregate strategy: use the MEDIAN run (most representative)
      aggregationMethod: "optimistic",

      assertions: {
        /* ── Scored categories (hard gates) ─────────────────────────────── */
        "categories:performance":    ["error", { minScore: 1 }],
        "categories:accessibility":  ["error", { minScore: 1 }],
        "categories:seo":            ["error", { minScore: 1 }],
        "categories:best-practices": ["error", { minScore: 1 }],

        /* ── Core Web Vitals (hard gates) ────────────────────────────────
         * These are the actual field-metric thresholds, not just the CWV
         * pass/fail flag.  Values are the "Good" thresholds from web.dev.
         * ─────────────────────────────────────────────────────────────── */
        "first-contentful-paint":    ["error", { maxNumericValue: 1_800 }],  // ≤ 1.8 s
        "largest-contentful-paint":  ["error", { maxNumericValue: 2_500 }],  // ≤ 2.5 s
        "total-blocking-time":       ["error", { maxNumericValue: 200 }],    // ≤ 200 ms
        "cumulative-layout-shift":   ["error", { maxNumericValue: 0.1  }],   // ≤ 0.1
        "speed-index":               ["error", { maxNumericValue: 3_400 }],  // ≤ 3.4 s
        "interactive":               ["error", { maxNumericValue: 3_800 }],  // ≤ 3.8 s

        /* ── A11y hard-fail audits (score 0 = instant CI failure) ────────
         * These are the most impactful individual accessibility checks.
         * ─────────────────────────────────────────────────────────────── */
        "color-contrast":            ["error", { minScore: 1 }],
        "document-title":            ["error", { minScore: 1 }],
        "html-has-lang":             ["error", { minScore: 1 }],
        "html-lang-valid":           ["error", { minScore: 1 }],
        "image-alt":                 ["error", { minScore: 1 }],
        "label":                     ["error", { minScore: 1 }],
        "link-name":                 ["error", { minScore: 1 }],
        "meta-description":          ["error", { minScore: 1 }],

        /* ── SEO hard-fail audits ─────────────────────────────────────── */
        "canonical":                 ["error", { minScore: 1 }],
        "robots-txt":                ["error", { minScore: 1 }],
        "structured-data":           ["warn",  { minScore: 1 }],  // warn until JSON-LD stabilises

        /* ── Security / Best-Practices ───────────────────────────────── */
        "no-vulnerable-libraries":   ["error", { minScore: 1 }],
        "is-on-https":               "off",   // localhost is HTTP — skip
        "uses-http2":                "off",   // not testable on localhost
      },
    },

    /* ── 3. UPLOAD ───────────────────────────────────────────────────────────
     * Publishes HTML reports to Lighthouse CI's free temporary storage.
     * Reports are public and expire after ~7 days — do NOT include secrets.
     * Replace with { target: "lhci", serverBaseUrl: "..." } when you set up
     * a private LHCI server.
     * ─────────────────────────────────────────────────────────────────────── */
    upload: {
      target: "temporary-public-storage",
    },
  },
};
