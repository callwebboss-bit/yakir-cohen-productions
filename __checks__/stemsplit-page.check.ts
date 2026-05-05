import { BrowserCheck, Frequency } from "@checkly/cli/constructs";

const BASE =
  process.env.PRODUCTION_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  "http://localhost:3000";

/**
 * Browser Check — /stemsplit page loads and LCP element is visible.
 *
 * Uses Playwright under the hood (Checkly runs it in a headless browser).
 * Verifies:
 *  - Page loads without JS errors
 *  - H1 "StemSplit AI" is visible (the LCP element — server-rendered)
 *  - Upload tab is visible after hydration
 *  - No console errors containing "failed" or "Error"
 */
new BrowserCheck("stemsplit-page-browser", {
  name:      "StemSplit — Page loads & LCP visible",
  activated:  true,
  frequency:  Frequency.EVERY_10M,
  locations:  ["eu-west-1"],
  tags:       ["stemsplit", "browser", "lcp"],

  code: {
    entrypoint: "./__checks__/stemsplit-page.spec.ts",
  },
});
