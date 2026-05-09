"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const QUOTES = [
  {
    text: "נכנסתי עם סקיצה קטנה ויצאתי עם שיר שמרגיש שלי. הכל היה ברור, נעים ומדויק.",
    author: "שירה כהן, זמרת",
  },
  {
    text: "מהרגע שסגרנו ידענו שיש על מי לסמוך. המוזיקה עבדה, הרחבה נשארה חיה, והאטרקציות באו בזמן.",
    author: "מאיה וצביקה, חתונה",
  },
  {
    text: "לא רק שהאולפן נשמע טוב, גם קיבלנו כיוון ברור. זה חסך לנו ניסוי וטעייה והזיז את הפודקאסט קדימה.",
    author: "דני גביאל, פודקאסט עסקי",
  },
] as const;

export default function HomeTestimonialCarousel({ className = "" }: { className?: string }) {
  const [i, setI] = useState(0);
  const len = QUOTES.length;

  const next = useCallback(() => setI((x) => (x + 1) % len), [len]);
  const prev = useCallback(() => setI((x) => (x - 1 + len) % len), [len]);

  useEffect(() => {
    const t = window.setInterval(next, 9000);
    return () => window.clearInterval(t);
  }, [next]);

  const q = QUOTES[i];

  return (
    <div className={`relative ${className}`}>
      <figure className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-sm text-center md:text-start min-h-[200px] flex flex-col justify-center">
        <blockquote className="text-zinc-800 text-lg md:text-xl leading-relaxed font-medium">&quot;{q.text}&quot;</blockquote>
        <figcaption className="mt-4 text-sm font-bold text-brand-red">{q.author}</figcaption>
      </figure>
      <div className="flex justify-center md:justify-start gap-2 mt-6">
        <button
          type="button"
          onClick={prev}
          className="inline-flex items-center justify-center rounded-full border border-zinc-200 size-11 hover:bg-zinc-50"
          aria-label="ציטוט קודם"
        >
          <ChevronRight className="size-5 rotate-180" aria-hidden />
        </button>
        <button
          type="button"
          onClick={next}
          className="inline-flex items-center justify-center rounded-full border border-zinc-200 size-11 hover:bg-zinc-50"
          aria-label="ציטוט הבא"
        >
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
      <div className="flex justify-center gap-1.5 mt-4" role="tablist" aria-label="מצביעי ציטוט">
        {QUOTES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={idx === i}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-brand-red" : "w-2 bg-zinc-300"}`}
            aria-label={`ציטוט ${idx + 1}`}
          />
        ))}
      </div>
      <p className="text-xs text-zinc-500 mt-6 text-center md:text-start leading-relaxed">
        ציטוטים לדוגמה להמחשת חוויית לקוחות. לעוד המלצות — עמוד הביקורות באתר.
      </p>
    </div>
  );
}
