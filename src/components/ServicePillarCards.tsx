"use client";

import Link from "next/link";
import { trackWaClick } from "@/lib/analytics";

type Pillar = {
  title: string;
  desc: string;
  href: string;
  cta: string;
  waText: string;
};

const PILLARS: Pillar[] = [
  {
    title: "אולפן ההקלטות",
    desc: "המקום שבו הקול והסאונד מקבלים טיפול רציני. קאברים, שירי מתנה וברכות, עם ליווי צעד אחר צעד.",
    href: "/studio",
    cta: "היכנסו לאולפן שלנו",
    waText: "היי יקיר, גלשתי בדף הבית ואשמח לשמוע על הקלטה באולפן.",
  },
  {
    title: "תקליטן וחתונות",
    desc: "מוזיקה שמחברת קהל מעורב. מהקבלה ועד הריקוד האחרון, עם תיאום ושקט נפשי.",
    href: "/events/dj-events",
    cta: "בואו נרים לכם אירוע",
    waText: "היי יקיר, מחפשים דיג'יי לחתונה שמבין בקהל מעורב.",
  },
  {
    title: "אטרקציות והשכרת ציוד",
    desc: "עמדות LED, עשן, קונפטי וזיקוקים קרים. משלימים את הרחבה בצורה מסודרת ובטיחותית לפי האולם.",
    href: "/attractions",
    cta: "לקטלוג האטרקציות",
    waText: "היי יקיר, רואים את האטרקציות בדף הבית ונשמח להצעה לאירוע שלנו.",
  },
  {
    title: "פודקאסטים וקריינות",
    desc: "הפקה קולית לעסקים: פודקאסט, ג'ינגלים וקריינות שמרגישים טוב ברדיו ובטלפון.",
    href: "/business",
    cta: "פתרונות סאונד לעסקים",
    waText: "היי יקיר, מחפשים פתרון קולי לעסק (פודקאסט או קריינות).",
  },
];

export default function ServicePillarCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
      {PILLARS.map((p) => (
        <article
          key={p.href}
          className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm flex flex-col gap-4 hover:border-zinc-300 transition-colors"
        >
          <h3 className="font-serif text-xl md:text-2xl font-bold text-zinc-900">{p.title}</h3>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed flex-grow">{p.desc}</p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href={p.href}
              className="inline-flex justify-center rounded-2xl bg-zinc-900 text-white px-6 py-3 text-sm font-bold hover:bg-brand-red transition-colors text-center"
            >
              {p.cta}
            </Link>
            <a
              href={`https://wa.me/972587555456?text=${encodeURIComponent(p.waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWaClick("home_service_pillar", p.title)}
              className="inline-flex justify-center rounded-2xl border border-[color-mix(in_srgb,var(--accent-gold)_50%,#000_50%)] bg-[color-mix(in_srgb,var(--accent-gold)_25%,#fff_75%)] px-6 py-3 text-sm font-bold text-zinc-900 hover:brightness-95 transition-[filter] text-center"
            >
              וואטסאפ מהיר
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
