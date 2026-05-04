/**
 * Structured logger — writes to console (captured by Vercel) and
 * fires a non-blocking POST to BetterStack when LOGTAIL_SOURCE_TOKEN is set.
 *
 * Usage:
 *   import { log } from "@/lib/logger";
 *   log.info("webhook.received", { jobId, type });
 *   log.warn("signature.mismatch", { ip, path });
 *   log.error("split.failed", { jobId, error: err.message });
 */

import { Logtail } from "@logtail/node";

type Level = "debug" | "info" | "warn" | "error";

interface LogContext {
  [key: string]: unknown;
}

const logtail = process.env.LOGTAIL_SOURCE_TOKEN
  ? new Logtail(process.env.LOGTAIL_SOURCE_TOKEN)
  : undefined;

function send(level: Level, event: string, ctx: LogContext = {}): void {
  const payload = {
    level,
    event,
    service: "yakircohen-api",
    env: process.env.NODE_ENV ?? "production",
    dt: new Date().toISOString(),
    ...ctx,
  };

  // Always write to stdout — Vercel surfaces these in the Function logs tab
  const fn = level === "error" ? console.error
           : level === "warn"  ? console.warn
           : console.info;
  fn(`[${level.toUpperCase()}] ${event}`, ctx);

  if (!logtail) {
    return;
  }

  logtail
    .log(payload.event, level, payload)
    .catch(() => {
      // Logging must never break the app
    });
}

export const log = {
  debug: (event: string, ctx?: LogContext) => send("debug", event, ctx),
  info:  (event: string, ctx?: LogContext) => send("info",  event, ctx),
  warn:  (event: string, ctx?: LogContext) => send("warn",  event, ctx),
  error: (event: string, ctx?: LogContext) => send("error", event, ctx),
};
