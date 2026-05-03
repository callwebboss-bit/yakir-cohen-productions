"use client";

import { useState } from "react";
import { Lock } from "lucide-react";

interface PriceRevealProps {
  price: string;
  service: string;
  dark?: boolean;
  className?: string;
}

export default function PriceReveal({ price, service, dark = false, className = "" }: PriceRevealProps) {
  const [name, setName] = useState("");
  const [revealed, setRevealed] = useState(false);

  const reveal = () => {
    if (!name.trim()) return;
    setRevealed(true);
    const msg = encodeURIComponent(
      `היי יקיר, קוראים לי ${name.trim()} ואני מעוניין/ת לשמוע על ${service}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/972587555456?text=${msg}`, "_blank");
    }, 600);
  };

  if (revealed) {
    return (
      <p className={`text-4xl font-serif font-black text-[#D42B2B] ${className}`}>
        {price}
      </p>
    );
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <span
          className={`text-3xl font-serif font-black select-none blur-sm ${
            dark ? "text-zinc-500" : "text-zinc-300"
          }`}
          aria-hidden="true"
        >
          {price}
        </span>
        <Lock
          size={14}
          className={dark ? "text-zinc-500" : "text-zinc-400"}
          aria-hidden="true"
        />
      </div>
      <div className="flex gap-2" role="form" aria-label="גלו מחיר">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && reveal()}
          placeholder="שם ראשון"
          className={`flex-1 text-sm rounded px-3 py-1.5 text-right focus:outline-none ${
            dark
              ? "bg-zinc-800 border border-zinc-600 text-white placeholder:text-zinc-500 focus:border-zinc-400"
              : "bg-white border border-zinc-300 text-zinc-900 focus:border-zinc-600"
          }`}
          aria-label="שם ראשון לגלות מחיר"
        />
        <button
          onClick={reveal}
          disabled={!name.trim()}
          className="text-xs font-bold bg-[#D42B2B] text-white px-3 py-1.5 rounded hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          גלה
        </button>
      </div>
      <p className={`text-xs ${dark ? "text-zinc-500" : "text-zinc-400"}`}>
        כתבו שם ראשון לגלות מחיר
      </p>
    </div>
  );
}
