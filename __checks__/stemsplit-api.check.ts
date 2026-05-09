import { ApiCheck, AssertionBuilder, Frequency } from "checkly/constructs";

const BASE =
  process.env.PRODUCTION_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  "http://localhost:3000";

/**
 * API Check 1 — /api/split responds and is configured.
 *
 * Does NOT actually submit audio (costs credits) — instead checks:
 *  1. Route is reachable (200 range or 4xx, not 5xx/timeout)
 *  2. No "STEMSPLIT_API_KEY not configured" error (503)
 *  3. Credits endpoint is healthy
 */
new ApiCheck("stemsplit-credits-check", {
  name:         "StemSplit — Credits API health",
  activated:    true,
  frequency:    Frequency.EVERY_10M,
  locations:    ["eu-west-1"],
  tags:         ["stemsplit", "api"],

  request: {
    method: "GET",
    url:    `${BASE}/api/split/credits`,
    headers: [],
    queryParameters: [],
    assertions: [
      // Must respond — not timeout, not 503 (key missing)
      AssertionBuilder.statusCode().not().equals(503),
      AssertionBuilder.statusCode().not().equals(502),
      AssertionBuilder.statusCode().not().equals(504),
      // Response time under 5 seconds
      AssertionBuilder.responseTime().lessThan(5000),
      // Body is valid JSON with a "credits" field (null is OK if key is absent)
      AssertionBuilder.jsonBody("$.credits").isDefined(),
    ],
  },
});

/**
 * API Check 2 — Reject unauthenticated uploads gracefully (not 500).
 *
 * Posts an empty body — expects 400 Bad Request, not 500/503.
 * Confirms the route is alive and error-handling is working.
 */
new ApiCheck("stemsplit-split-health", {
  name:         "StemSplit — /api/split reachable",
  activated:    true,
  frequency:    Frequency.EVERY_10M,
  locations:    ["eu-west-1"],
  tags:         ["stemsplit", "api"],

  request: {
    method:  "POST",
    url:     `${BASE}/api/split`,
    headers: [{ key: "Content-Type", value: "application/json" }],
    body:    "{}",
    assertions: [
      // 400 = route alive, validation working. 503 = key missing (alert!). 500 = bug (alert!).
      AssertionBuilder.statusCode().equals(400),
      AssertionBuilder.responseTime().lessThan(5000),
    ],
  },
});

/**
 * API Check 3 — Webhook endpoint accepts POST and returns 401 on bad sig.
 * Confirms the route is deployed and signature verification is active.
 */
new ApiCheck("stemsplit-webhook-health", {
  name:         "StemSplit — Webhook endpoint alive",
  activated:    true,
  frequency:    Frequency.EVERY_10M,
  locations:    ["eu-west-1"],
  tags:         ["stemsplit", "webhook"],

  request: {
    method:  "POST",
    url:     `${BASE}/api/webhook/stemsplit`,
    headers: [{ key: "Content-Type", value: "application/json" }],
    body:    JSON.stringify({ type: "ping" }),
    assertions: [
      // 401 = signature check active. 404/503/500 = alert!
      AssertionBuilder.statusCode().equals(401),
      AssertionBuilder.responseTime().lessThan(3000),
    ],
  },
});
