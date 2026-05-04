"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";

export default function ExitIntent() {
  const [show, setShow]   = useState(false);
  const [name, setName]   = useState("");
  const [phone, setPhone] = useState("");
  const timerRef          = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firstInputRef     = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (localStorage.getItem("exitDismissed")) return;

    const onMouseLeave = (e: MouseEvent) => { if (e.clientY <= 8) setShow(true); };
    document.addEventListener("mouseleave", onMouseLeave);
    timerRef.current = setTimeout(() => setShow(true), 45_000);

    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  /* Move focus to the first input when dialog opens */
  useEffect(() => {
    if (show) firstInputRef.current?.focus();
  }, [show]);

  const dismiss = useCallback(() => {
    setShow(false);
    localStorage.setItem("exitDismissed", "1");
  }, []);

  /* Escape key closes the dialog — standard dialog keyboard contract */
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") dismiss();

    /* Focus trap — Tab wraps within the dialog */
    if (e.key === "Tab") {
      const dialog   = e.currentTarget as HTMLElement;
      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'input, button, [href], select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled"));

      if (!focusable.length) return;
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
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
    /* Backdrop — click outside to dismiss */
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50"
      onClick={(e) => e.target === e.currentTarget && dismiss()}
    >
      {/*
        role="dialog" + aria-modal="true" + aria-labelledby points to the <h2> id.
        Using aria-labelledby is preferred over aria-label when a visible heading exists.
      */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-dialog-title"
        aria-describedby="exit-dialog-desc"
        dir="rtl"
        className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 relative"
        onKeyDown={onKeyDown}
      >
        {/* Close button — icon-only, aria-label required */}
        <button
          onClick={dismiss}
          aria-label="סגור את חלון הצעת הקשר"
          className="absolute top-4 start-4 text-zinc-400 hover:text-zinc-700 transition-colors p-1 rounded"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {/* id referenced by aria-labelledby above */}
        <h2
          id="exit-dialog-title"
          className="font-serif text-2xl font-bold mb-2 text-zinc-900"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          רגע לפני שהולכים
        </h2>

        {/* id referenced by aria-describedby above */}
        <p id="exit-dialog-desc" className="text-zinc-500 text-sm mb-6 leading-relaxed">
          השאירו שם ומספר — נחזור אליכם עם הצעה מותאמת.
        </p>

        <div className="flex flex-col gap-3">

          {/* aria-required communicates mandatory field to AT */}
          <label htmlFor="exit-name" className="sr-only">שם ראשון (חובה)</label>
          <input
            id="exit-name"
            ref={firstInputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="שם ראשון"
            aria-required="true"
            className="w-full border border-zinc-300 rounded-lg px-4 py-2.5 text-sm text-right focus:outline-none focus:border-zinc-600"
          />

          <label htmlFor="exit-phone" className="sr-only">מספר טלפון (אופציונלי)</label>
          <input
            id="exit-phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="טלפון (אופציונלי)"
            type="tel"
            className="w-full border border-zinc-300 rounded-lg px-4 py-2.5 text-sm text-right focus:outline-none focus:border-zinc-600"
          />

          {/* aria-disabled when name is empty — communicates state without removing focus */}
          <button
            onClick={submit}
            disabled={!name.trim()}
            aria-disabled={!name.trim()}
            className="w-full bg-[#D42B2B] text-white py-3 rounded-lg font-bold text-sm hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            שלחו הודעה בוואטסאפ
          </button>

          <button
            onClick={dismiss}
            className="text-xs text-zinc-400 hover:text-zinc-600 text-center transition-colors py-1"
          >
            לא תודה, אמשיך לגלוש
          </button>
        </div>
      </div>
    </div>
  );
}
