"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (localStorage.getItem("exitDismissed")) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 8) setShow(true);
    };

    document.addEventListener("mouseleave", onMouseLeave);
    timerRef.current = setTimeout(() => setShow(true), 45_000);

    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const dismiss = () => {
    setShow(false);
    localStorage.setItem("exitDismissed", "1");
  };

  const submit = () => {
    if (!name.trim()) return;
    const msg = encodeURIComponent(
      `היי יקיר, קוראים לי ${name.trim()}${phone.trim() ? `, מספרי ${phone.trim()}` : ""}. הגעתי מהאתר ואשמח לשמוע עוד.`
    );
    window.open(`https://wa.me/972587555456?text=${msg}`, "_blank");
    dismiss();
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-label="לפני שהולכים"
      dir="rtl"
      onClick={(e) => e.target === e.currentTarget && dismiss()}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 relative">
        <button
          onClick={dismiss}
          className="absolute top-4 left-4 text-zinc-400 hover:text-zinc-700 transition-colors"
          aria-label="סגור"
        >
          <X size={20} />
        </button>

        <h2
          className="font-serif text-2xl font-bold mb-2 text-zinc-900"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          רגע לפני שהולכים
        </h2>
        <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
          השאירו שם ומספר — נחזור אליכם עם הצעה מותאמת.
        </p>

        <div className="flex flex-col gap-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="שם ראשון"
            className="w-full border border-zinc-300 rounded-lg px-4 py-2.5 text-sm text-right focus:outline-none focus:border-zinc-600"
            autoFocus
            aria-label="שם ראשון"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="טלפון (אופציונלי)"
            type="tel"
            className="w-full border border-zinc-300 rounded-lg px-4 py-2.5 text-sm text-right focus:outline-none focus:border-zinc-600"
            aria-label="מספר טלפון"
          />
          <button
            onClick={submit}
            disabled={!name.trim()}
            className="w-full bg-[#D42B2B] text-white py-3 rounded-lg font-bold text-sm hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            שלחו הודעה בוואטסאפ
          </button>
          <button
            onClick={dismiss}
            className="text-xs text-zinc-400 hover:text-zinc-600 text-center transition-colors"
          >
            לא תודה, אמשיך לגלוש
          </button>
        </div>
      </div>
    </div>
  );
}
