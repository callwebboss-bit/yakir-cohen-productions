import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// POST /api/webhook/stemsplit
// Verifies StemSplit webhook signature and handles job events.
// Add STEMSPLIT_WEBHOOK_SECRET to your environment variables.
export async function POST(req: NextRequest) {
  const secret = process.env.STEMSPLIT_WEBHOOK_SECRET;

  // ── Signature verification ──
  if (secret) {
    const rawSig = req.headers.get("x-stemsplit-signature") ??
                   req.headers.get("x-webhook-signature") ?? "";
    const rawBody = await req.text();

    // Strip "sha256=" prefix if present — accept both formats
    const incoming = rawSig.startsWith("sha256=") ? rawSig.slice(7) : rawSig;

    const expected = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    // Hash both through the same HMAC so buffers are always 32 bytes —
    // timingSafeEqual throws when lengths differ.
    const toHash = (v: string) =>
      crypto.createHmac("sha256", secret).update(v).digest();

    const isValid = (() => {
      try {
        return crypto.timingSafeEqual(toHash(incoming), toHash(expected));
      } catch {
        return false;
      }
    })();

    if (!isValid) {
      console.warn("[StemSplit webhook] invalid signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    // Parse body after verification
    let event: { type: string; jobId?: string; data?: Record<string, unknown> };
    try {
      event = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    return handleEvent(event);
  }

  // ── No secret configured — parse and handle anyway (dev mode) ──
  const event = await req.json();
  return handleEvent(event);
}

function handleEvent(event: { type: string; jobId?: string; data?: Record<string, unknown> }) {
  const { type, jobId, data } = event;

  switch (type) {
    case "job.completed":
      // TODO: persist stems URLs to your database, notify user, etc.
      console.info(`[StemSplit] job ${jobId} completed`, data);
      break;

    case "job.failed":
      console.error(`[StemSplit] job ${jobId} failed`, data);
      break;

    default:
      console.info(`[StemSplit] unhandled event: ${type}`);
  }

  return NextResponse.json({ received: true });
}
