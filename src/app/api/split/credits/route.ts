import { NextResponse } from "next/server";

const API_BASE = process.env.STEMSPLIT_API_BASE ?? "https://api.stemsplit.io/v1";

// GET /api/split/credits → { credits: number }
export async function GET() {
  if (!process.env.STEMSPLIT_API_KEY) {
    return NextResponse.json({ credits: null }, { status: 200 });
  }

  try {
    const res = await fetch(`${API_BASE}/account`, {
      headers: {
        Authorization: `Bearer ${process.env.STEMSPLIT_API_KEY}`,
        Accept: "application/json",
      },
      next: { revalidate: 60 }, // cache for 60s
    });

    if (!res.ok) return NextResponse.json({ credits: null });

    const data = await res.json();
    const credits = data.credits ?? data.balance ?? data.creditsRemaining ?? null;

    return NextResponse.json({ credits });
  } catch {
    return NextResponse.json({ credits: null });
  }
}
