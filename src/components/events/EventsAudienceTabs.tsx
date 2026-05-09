"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import WaMeTrackedLink from "@/components/WaMeTrackedLink";

const TABS = [
  {
    id: "wedding",
    label: "חתונות וקהל מעורב",
    body:
      "חתונה זה פאזל של רגעים. המוזיקה צריכה לשרת גם את הריקוד וגם את הרגעים העדינים. אנחנו מתאימים את הסט לקהל שלכם ומתאמים מראש עם האולם והספקים.",
  },
  {
    id: "bm",
    label: "בר ובת מצווה",
    body:
      "ילדים ובני נוער רוצים להרגיש שהערב שלהם. משלבים מה שחם עכשיו עם מה שמתאים למשפחה ולמבוגרים, בלי לאבד שליטה על הרחבה.",
  },
  {
    id: "boutique",
    label: "אירועי בוטיק וחינות",
    body:
      "אירועים עם גוון משפחתי צריכים פלייליסט רחב ורגישות לפרטים קטנים. נבנה יחד ציר מוזיקלי שמכבד את המסורת וגם מזיז את הרחבה.",
  },
] as const;

export default function EventsAudienceTabs({ className }: { className?: string }) {
  const [active, setActive] = useState<(typeof TABS)[number]["id"]>("wedding");

  const tab = TABS.find((t) => t.id === active)!;

  return (
    <section className={cn("py-16 px-6 bg-white border-y border-zinc-200", className)} aria-labelledby="audience-tabs-heading">
      <div className="max-w-4xl mx-auto w-full">
        <h2 id="audience-tabs-heading" className="font-serif text-2xl md:text-3xl font-bold mb-2 text-center">
          סוג האירוע שלכם
        </h2>
        <p className="text-center text-zinc-500 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
          בוחרים קטגוריה ומקבלים הסבר קצר איך ניגשים למוזיקה ולסאונד בשטח.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="סוג אירוע">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-bold transition-colors border",
                active === t.id
                  ? "bg-zinc-900 text-white border-zinc-900"
                  : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-400"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-zinc-700 leading-relaxed text-center md:text-start min-h-[140px]"
        >
          {tab.body}
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mt-8">
          <WaMeTrackedLink
            section="dj_events_audience_tabs"
            linkLabel="מתחתנים בקרוב"
            href={`https://wa.me/972587555456?text=${encodeURIComponent("היי יקיר, מתחתנים בקרוב ומחפשים דיג'יי שמבין בקהל מעורב.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded-2xl bg-[#D42B2B] text-white px-6 py-3 font-bold hover:bg-red-700 transition-colors text-sm"
          >
            מתחתנים בקרוב? תפסו תאריך
          </WaMeTrackedLink>
          <WaMeTrackedLink
            section="dj_events_audience_tabs"
            linkLabel="שריון עמדת LED"
            href={`https://wa.me/972587555456?text=${encodeURIComponent("היי יקיר, רוצים עמדת LED לאירוע.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded-2xl border border-zinc-300 bg-white px-6 py-3 font-bold text-sm hover:border-brand-red transition-colors"
          >
            שריון עמדת LED
          </WaMeTrackedLink>
          <WaMeTrackedLink
            section="dj_events_audience_tabs"
            linkLabel="אפקטים לחופה"
            href={`https://wa.me/972587555456?text=${encodeURIComponent("היי יקיר, מתעניינים בעשן כבד ואפקטים לחופה.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded-2xl border border-zinc-300 bg-white px-6 py-3 font-bold text-sm hover:border-brand-red transition-colors"
          >
            אפקטים לחופה
          </WaMeTrackedLink>
        </div>
      </div>
    </section>
  );
}
