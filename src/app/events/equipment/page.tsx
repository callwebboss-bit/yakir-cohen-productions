import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "ציוד הגברה לאירועים — השכרה ומכירה | יקיר כהן הפקות",
  description:
    "ציוד הגברה מקצועי לאירועים: מערכות PA, מיקסרים, מיקרופונים אלחוטיים, מוניטורים — השכרה לערב יחיד או חבילה מלאה. מ-1,200 ₪.",
  alternates: { canonical: `${SITE_URL}/events/equipment` },
  openGraph: {
    title: "ציוד הגברה לאירועים | יקיר כהן הפקות",
    description: "מערכות PA, מיקסרים, מיקרופונים — השכרה מ-1,200 ₪.",
    url: `${SITE_URL}/events/equipment`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ציוד הגברה לאירועים — יקיר כהן הפקות",
  "description": "השכרת ציוד הגברה מקצועי לאירועים — PA, מיקסר, מיקרופונים. מ-1,200 ₪.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
  "offers": { "@type": "Offer", "price": "1200", "priceCurrency": "ILS" },
};

const categories = [
  {
    emoji: "🔊",
    t: "מערכות PA",
    d: "רמקולים פעילים מ-1,000W לאולמות קטנים ועד Line Array לאירועים גדולים. JBL, QSC, d&b.",
  },
  {
    emoji: "🎚️",
    t: "מיקסרים ועיבוד",
    d: "מיקסרים דיגיטליים Yamaha CL/TF, Allen & Heath — עם טכנאי סאונד לפי דרישה.",
  },
  {
    emoji: "🎤",
    t: "מיקרופונים אלחוטיים",
    d: "מיקרופוני Shure, Sennheiser — לנואמים, מנחים, זמרים. חבילה ל-2, 4 או 8 ערוצים.",
  },
  {
    emoji: "📡",
    t: "מוניטורים ואוזניות",
    d: "מוניטורי במה לזמרים וכלי נגינה — In-Ear (IEM) ומוניטורי רצפה.",
  },
  {
    emoji: "🎸",
    t: "הגברת כלי נגינה",
    d: "ציוד ייעודי להגברת גיטרות, קלידים, כלי קשת ותזמורות חיות.",
  },
  {
    emoji: "📦",
    t: "חבילה מלאה",
    d: "PA + מיקסר + מיקרופונים + כבלים + הקמה ופירוק — בתמחור אחיד לאירוע.",
  },
];

const packages = [
  {
    name: "קטן",
    desc: "עד 80 איש",
    price: "1,200",
    dark: false,
    items: ["2 רמקולי PA פעילים", "מיקסר 12 ערוצים", "2 מיקרופונים אלחוטיים", "כבלים והקמה"],
  },
  {
    name: "בינוני",
    desc: "עד 200 איש",
    price: "2,800",
    dark: true,
    items: ["4 רמקולי PA + Subs", "מיקסר דיגיטלי 32ch", "4 מיקרופונים אלחוטיים", "2 מוניטורי במה", "טכנאי סאונד"],
  },
  {
    name: "גדול",
    desc: "200+ איש",
    price: "לפי הצעה",
    dark: false,
    items: ["Line Array מלא", "FOH + Stage Mix נפרד", "8 ערוצי אלחוטי", "IEM לאמנים", "Stage Manager"],
  },
];

export default function EventEquipmentPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · ציוד אירועים
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-zinc-900"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          ציוד הגברה לאירועים.
          <br />
          <span className="text-[#D42B2B]">כשהצליל חייב להיות נכון.</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8">
          השכרת ציוד הגברה מקצועי לאירועים — מכנסים, חתונות, ימי גיבוש, הרצאות. עם הקמה ופירוק.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            קבלו הצעת מחיר
          </Link>
          <Link
            href="/events/dj-events"
            className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all"
          >
            DJ לאירועים
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">מה משכירים?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ emoji, t, d }) => (
            <div
              key={t}
              className="flex flex-col gap-3 p-6 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all"
            >
              <span className="text-3xl">{emoji}</span>
              <h3 className="font-serif text-base font-bold">{t}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">חבילות</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map(({ name, desc, price, dark, items }) => (
              <div
                key={name}
                className={`rounded-2xl p-7 ${dark ? "bg-zinc-900 text-white" : "bg-white border border-zinc-200"}`}
              >
                <p className={`text-sm font-bold mb-1 ${dark ? "text-zinc-400" : "text-zinc-400"}`}>{name}</p>
                <p className="text-4xl font-serif font-black text-[#D42B2B] mb-1">
                  {price}{price !== "לפי הצעה" ? " ₪" : ""}
                </p>
                <p className={`text-xs mb-5 ${dark ? "text-zinc-500" : "text-zinc-400"}`}>{desc}</p>
                <ul className="flex flex-col gap-2 text-sm text-right">
                  {items.map((f) => (
                    <li key={f} className="flex items-center gap-2 justify-end">
                      <span className={dark ? "text-zinc-300" : "text-zinc-600"}>{f}</span>
                      <CheckCircle2 size={13} className="text-[#D42B2B] shrink-0" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-zinc-400 text-xs text-center mt-6">המחירים אינם כוללים מע&quot;מ (18%)</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">קבלו הצעת מחיר</h2>
        <p className="text-zinc-400 mb-6">שלחו וואטסאפ עם תאריך, סוג האירוע ומספר האורחים.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors"
          >
            058-7-555-456 וואטסאפ
          </Link>
          <Link
            href="/events/stage-led-dj"
            className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors"
          >
            DJ עם במה ו-LED
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותי אירועים"
        pages={[
          { label: "DJ לאירועים", href: "/events/dj-events", desc: "חבילות DJ מ-7,500 ₪" },
          { label: "DJ עם במה ו-LED", href: "/events/stage-led-dj", desc: "הפקה מלאה מ-15,500 ₪" },
          { label: "אטרקציות לאירועים", href: "/attractions", desc: "עשן, זיקוקים, קונפטי" },
        ]}
      />
    </div>
  );
}
