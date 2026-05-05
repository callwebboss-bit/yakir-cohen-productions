import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "DJ עם במה ותאורת LED לאירועים | יקיר כהן הפקות",
  description:
    "חבילת DJ עם במת תצוגה ותאורת LED מקצועית — לחתונות, בר/בת מצווה, ימי הולדת גדולים. מחיר הכל כלול. מ-15,500 ₪.",
  alternates: { canonical: `${SITE_URL}/events/stage-led-dj` },
  openGraph: {
    title: "DJ עם במה ותאורת LED | יקיר כהן הפקות",
    description: "חבילה מלאה עם במה ו-LED לאירועים גדולים. מ-15,500 ₪.",
    url: `${SITE_URL}/events/stage-led-dj`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "DJ עם במה ותאורת LED — יקיר כהן הפקות",
  "description": "חבילת DJ + במת תצוגה + תאורת LED לאירועים גדולים. מ-15,500 ₪.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
  "offers": { "@type": "Offer", "price": "15500", "priceCurrency": "ILS" },
};

const ledFeatures = [
  { emoji: "🎯", t: "פאנלי LED", d: "מסך LED אחורי ברוחב 3-6 מטר עם תוכן ויזואלי מותאם לאירוע." },
  { emoji: "💡", t: "Moving Heads", d: "ראשי אור נעים — תאורת שטח דינמית שזזה לפי קצב המוזיקה." },
  { emoji: "🌈", t: "פסי LED ותאורת שטח", d: "תאורת אווירה לכל פינות האולם, בצבעי האירוע שלכם." },
  { emoji: "🎮", t: "ויזואלים מותאמים", d: "תוכן ויזואלי עם שמות הזוג / שם הבר מצווה — על מסך ה-LED." },
];

const packages = [
  {
    name: "Stage M",
    price: "15,500",
    desc: "עד 150 איש",
    dark: false,
    items: [
      "DJ מקצועי — ערב מלא",
      "מסך LED 3 מטר",
      "4 Moving Heads",
      "מערכת סאונד עד 150 איש",
      "תאורת אווירה",
    ],
  },
  {
    name: "Stage L",
    price: "21,000",
    desc: "עד 300 איש",
    dark: true,
    items: [
      "DJ מקצועי — ערב מלא",
      "מסך LED 5 מטר",
      "8 Moving Heads",
      "מערכת סאונד Line Array",
      "תאורת שטח מלאה",
      "ויזואלים מותאמים לאירוע",
    ],
  },
  {
    name: "Stage XL",
    price: "לפי הצעה",
    desc: "300+ איש",
    dark: false,
    items: [
      "הכל מ-Stage L",
      "מסך LED 6+ מטר",
      "Hazers + אפקטים",
      "Stage Manager באירוע",
      "רנדר 3D מראש",
    ],
  },
];

export default function StageLedDjPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-900 border-b border-zinc-800 text-center text-white">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
          יקיר כהן הפקות · DJ ותאורה
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          DJ עם במה ו-LED.
          <br />
          <span className="text-[#D42B2B]">אירוע שנראה כמו הפקה.</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">
          חבילת DJ + מסך LED + Moving Heads + תאורת שטח — כל מה שהופך אירוע מ"טוב" ל"מדהים".
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
            className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors"
          >
            DJ בלי במה — מ-7,500 ₪
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">מה כלול ב-LED Stage?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ledFeatures.map(({ emoji, t, d }) => (
            <div
              key={t}
              className="flex items-start gap-5 p-7 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all"
            >
              <span className="text-3xl shrink-0">{emoji}</span>
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">{t}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">חבילות</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map(({ name, price, desc, dark, items }) => (
              <div
                key={name}
                className={`rounded-2xl p-7 ${dark ? "bg-zinc-900 text-white" : "bg-white border border-zinc-200"}`}
              >
                <p className={`text-sm font-bold mb-1 ${dark ? "text-zinc-400" : "text-zinc-400"}`}>{name}</p>
                <p className="text-4xl font-serif font-black text-[#D42B2B] mb-1">{price} {price !== "לפי הצעה" ? "₪" : ""}</p>
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

      {/* Video */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-8">ראו בפועל</h2>
          <figure>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900">
              <iframe
                src="https://www.youtube.com/embed/nBtKa0JZfL0"
                title="DJ עם במה ו-LED — יקיר כהן הפקות"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <figcaption className="text-sm text-zinc-500 text-center mt-2">DJ עם במה ו-LED — יקיר כהן הפקות</figcaption>
          </figure>
        </div>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto w-full text-center">
        <h2 className="font-serif text-2xl font-bold mb-4">למי זה מתאים?</h2>
        <p className="text-zinc-500 leading-relaxed mb-8">
          חבילות Stage מתאימות לאירועים שרוצים להרשים — חתונות מעל 120 איש, בני מצווה בגדול, ערבי חברה, ימי הולדת עגולים עם תקציב.
          אם האולם הוא מעל 200 מ&quot;ר — Stage הוא הדרך לגרום לו להיראות מלא ומוארח.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto text-right">
          {["חתונות (120–400 איש)", "בר ובת מצווה גדולים", "ערבי חברה ואירועי MICE", "ימי הולדת 50/60/70"].map((item) => (
            <div key={item} className="flex items-center gap-3 justify-end p-4 bg-zinc-50 rounded-xl border border-zinc-200">
              <span className="text-zinc-700 text-sm font-medium">{item}</span>
              <CheckCircle2 size={15} className="text-[#D42B2B] shrink-0" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">קבלו הצעת מחיר לאירוע שלכם</h2>
        <p className="text-zinc-400 mb-6">שלחו וואטסאפ עם תאריך, מספר אורחים ואולם — נחזור עם הצעה.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors"
          >
            058-7-555-456 וואטסאפ
          </Link>
          <Link
            href="/events/dj-events"
            className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors"
          >
            חבילות DJ רגילות
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="אטרקציות ואירועים"
        pages={[
          { label: "עמדת לד ניידת", href: "/events/led-booth", desc: "לאירועים קטנים ובינוניים" },
          { label: "DJ לאירועים", href: "/events/dj-events", desc: "חבילות מ-7,500 ₪" },
          { label: "עשן כבד", href: "/attractions/wedding-smoking-machine", desc: "אפקט הריקוד הכי מבוקש" },
        ]}
      />
    </div>
  );
}
