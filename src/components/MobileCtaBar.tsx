"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { useMemo } from "react";

type Status = "open" | "closed" | "shabbat" | "early-sunday";

function getStatus(): Status {
  const now  = new Date();
  const day  = now.getDay();
  const hour = now.getHours();
  if (day === 6)               return "shabbat";
  if (day === 5 && hour >= 16) return "shabbat";
  if (day === 0 && hour < 9)   return "early-sunday";
  if (hour < 10 || hour >= 22) return "closed";
  return "open";
}

const BAR_BASE = "fixed bottom-0 inset-x-0 z-40 lg:hidden";

export default function MobileCtaBar() {
  const status = useMemo(() => getStatus(), []);

  /* role="status" + aria-live="polite" — announces availability change to AT */
  if (status !== "open") {
    const messages: Record<Exclude<Status, "open">, string> = {
      shabbat:        "האולפן סגור — שבת שלום",
      "early-sunday": "חוזרים היום מ-9:00 — אפשר להשאיר הודעה",
      closed:         "שעות פעילות: ראשון–חמישי 10:00–22:00",
    };
    return (
      <div
        role="status"
        aria-live="polite"
        className={`${BAR_BASE} bg-zinc-900 text-zinc-400 border-t border-zinc-700 py-3 px-4 text-center text-sm`}
      >
        {messages[status]}
      </div>
    );
  }

  return (
    <div
      className={`${BAR_BASE} bg-[#FAFAF8] border-t-[1.5px] border-[#1A1A1A] px-3 py-2.5 flex gap-2`}
    >
      {/*
        WCAG 2.5.5 — minimum tap target 44×44 css-px.
        min-h-[44px] + flex alignment satisfies this without fixed height.
        Visible text carries full meaning — no aria-label override needed.
      */}
      <a
        href="tel:0587555456"
        className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] rounded-none border-[1.5px] border-[#1A1A1A] bg-[#FAFAF8] text-[#1A1A1A] font-bold text-sm hover:bg-[#1A1A1A] hover:text-[#FAFAF8] transition-colors min-w-0"
      >
        <Phone size={15} aria-hidden="true" className="shrink-0" />
        <span className="truncate">058-7-555-456</span>
      </a>

      <Link
        href="/contact/whatsapp"
        className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] rounded-none border-[1.5px] border-[#D42B2B] bg-[#D42B2B] text-white font-bold text-sm hover:bg-[#1A1A1A] hover:border-[#1A1A1A] transition-colors min-w-0"
      >
        <MessageCircle size={15} aria-hidden="true" className="shrink-0" />
        <span>קבעו עכשיו</span>
      </Link>
    </div>
  );
}
