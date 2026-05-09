import { defineConfig } from "checkly";

const SITE_URL =
  process.env.PRODUCTION_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://TEMPORARY_DEPLOYMENT_HOST";

/**
 * Checkly monitoring configuration.
 *
 * Setup (one time):
 *   npm install --save-dev checkly
 *   npx checkly login
 *   npx checkly deploy
 *
 * Run locally:
 *   npx checkly test --record
 *
 * CI (GitHub Actions — see .github/workflows/checkly.yml):
 *   Runs on every deploy to main, alerts via Slack/email if checks fail.
 *
 * Required env vars:
 *   CHECKLY_API_KEY        — from app.checklyhq.com → Settings → API Keys
 *   CHECKLY_ACCOUNT_ID     — from app.checklyhq.com → Settings → General
 */
export default defineConfig({
  projectName: "yakircohen.com",
  logicalId:   "yakircohen-production",

  checks: {
    activated:   true,
    muted:       false,
    runtimeId:   "2024.02",
    frequency:   10,          // minutes between checks
    locations:   ["eu-west-1", "us-east-1"],
    tags:        ["production", "stemsplit"],
    alertChannels: [],        // add channel IDs from Checkly dashboard

    checkMatch:  "**/__checks__/**/*.check.ts",

    environmentVariables: [
      {
        key:    "PRODUCTION_URL",
        value:  SITE_URL,
        locked: false,
      },
    ],
  },

  cli: {
    runLocation: "eu-west-1",
  },
});
