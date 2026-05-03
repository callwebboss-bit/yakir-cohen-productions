import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { log } from "@/lib/logger";

export async function POST(req: NextRequest) {
  const secret    = process.env.STEMSPLIT_WEBHOOK_SECRET;
  const requestId = req.headers.get("x-request-id") ?? crypto.randomUUID();

  const rawBody = await req.text();
  let event: { type: string; jobId?: string; data?: Record<string, unknown> };

  // ── Parse JSON first (we need it regardless of signature) ────────────────────
  try {
    event = JSON.parse(rawBody);
  } catch {
    log.warn("webhook.parse_error", { requestId, bodySnippet: rawBody.slice(0, 120) });
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // ── Signature verification ────────────────────────────────────────────────────
  if (secret) {
    const rawSig  = req.headers.get("x-stemsplit-signature") ??
                    req.headers.get("x-webhook-signature") ?? "";
    const incoming = rawSig.startsWith("sha256=") ? rawSig.slice(7) : rawSig;

    const expected = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    // Double-HMAC comparison — equal-length 32-byte buffers, timing-safe
    const toHash = (v: string) =>
      crypto.createHmac("sha256", secret).update(v).digest();

    const isValid = (() => {
      try { return crypto.timingSafeEqual(toHash(incoming), toHash(expected)); }
      catch { return false; }
    })();

    if (!isValid) {
      log.warn("webhook.signature_invalid", {
        requestId,
        eventType: event.type,
        jobId: event.jobId,
        sigPresent: rawSig.length > 0,
      });
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }
  }

  // ── Log every verified webhook payload ───────────────────────────────────────
  log.info("webhook.received", {
    requestId,
    eventType: event.type,
    jobId:     event.jobId,
    // Log the full payload for debugging — visible in BetterStack with full search
    payload:   event.data ?? {},
  });

  return handleEvent(event, requestId);
}

function handleEvent(
  event: { type: string; jobId?: string; data?: Record<string, unknown> },
  requestId: string,
) {
  const { type, jobId, data } = event;

  switch (type) {
    case "job.completed":
      log.info("job.completed", {
        requestId,
        jobId,
        vocalsUrl:        (data?.vocals_url  ?? data?.vocals        ?? "—") as string,
        instrumentalUrl:  (data?.instrumental_url ?? data?.instrumental ?? "—") as string,
      });
      // TODO: persist stems to DB, notify user via email/websocket, etc.
      break;

    case "job.failed":
      log.error("job.failed", {
        requestId,
        jobId,
        reason: (data?.error ?? data?.message ?? "unknown") as string,
        data,
      });
      break;

    default:
      log.info("webhook.unhandled_event", { requestId, eventType: type, data });
  }

  return NextResponse.json({ received: true });
}
