"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { useMemo } from "react";

type Status = "open" | "closed" | "shabbat" | "early-sunday";

function getStatus(): Status {
  const now = new Date();
  const day = now.getDay(); // 0=Sun … 5=Fri, 6=Sat
  const hour = now.getHours();

  if (day === 6) return "shabbat";
  if (day === 5 && hour >= 16) return "shabbat";
  if (day === 0 && hour < 9) return "early-sunday";
  if (hour < 10 || hour >= 22) return "closed";
  return "open";
}

export default function MobileCtaBar() {
  const status = useMemo(() => getStatus(), []);

  if (status === "shabbat") {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-zinc-900 text-zinc-400 border-t border-zinc-700 py-3 px-4 text-center text-sm">
        האולפן סגור — שבת שלום
      </div>
    );
  }

  if (status === "early-sunday") {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-zinc-900 text-zinc-400 border-t border-zinc-700 py-3 px-4 text-center text-sm">
        חוזרים היום מ-9:00 — אפשר להשאיר הודעה
      </div>
    );
  }

  if (status === "closed") {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-zinc-900 text-zinc-400 border-t border-zinc-700 py-3 px-4 text-center text-sm">
        שעות פעילות: ראשון–חמישי 10:00–22:00
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/80 backdrop-blur-md border-t border-white/60 shadow-[0_-4px_24px_0_rgba(0,0,0,0.06)] px-3 py-2.5 flex gap-2">
      <a
        href="tel:0587555456"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-zinc-100 text-zinc-900 font-bold text-sm hover:bg-zinc-200 transition-colors min-w-0"
        aria-label="התקשרו עכשיו — 058-7-555-456"
      >
        <Phone size={15} aria-hidden="true" className="shrink-0" />
        <span className="truncate">058-7-555-456</span>
      </a>
      <Link
        href="/contact/whatsapp"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#D42B2B] text-white font-bold text-sm hover:bg-red-700 transition-colors min-w-0"
        aria-label="שלחו הודעה בוואטסאפ"
      >
        <MessageCircle size={15} aria-hidden="true" className="shrink-0" />
        <span>קבעו עכשיו</span>
      </Link>
    </div>
  );
}
