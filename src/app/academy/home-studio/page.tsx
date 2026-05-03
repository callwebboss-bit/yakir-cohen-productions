import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "בניית אולפן ביתי — ייעוץ ותוכנית אקוסטית | יקיר כהן הפקות",
  description:
    "רוצים להקים אולפן ביתי? ייעוץ אקוסטי, רשימת ציוד, בחירת DAW, תכנון חדר — מ-490 ₪ לייעוץ. מגיעים אליכם או ב-Zoom.",
  alternates: { canonical: "https://www.yakircohen.com/academy/home-studio" },
  openGraph: {
    title: "בניית אולפן ביתי | יקיר כהן הפקות",
    description: "ייעוץ אקוסטי + תוכנית ציוד לאולפן ביתי. מ-490 ₪.",
    url: "https://www.yakircohen.com/academy/home-studio",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "בניית אולפן ביתי — יקיר כהן הפקות",
  "description": "ייעוץ אקוסטי ותכנון אולפן ביתי — רשימת ציוד, DAW, עיצוב חדר. מ-490 ₪.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
  "offers": { "@type": "Offer", "price": "490", "priceCurrency": "ILS" },
};

const topics = [
  {
    emoji: "📐",
    t: "תכנון אקוסטי",
    d: "איזה חדר מתאים, כיצד לטפל ב-RT60, מה מוסיפים לקירות — בלי להפוך את הדירה לסטודיו.",
  },
  {
    emoji: "🎛️",
    t: "בחירת DAW",
    d: "Logic, Ableton, Pro Tools, Reaper — מה מתאים לכם לפי הסגנון, התקציב וסוג ההקלטה.",
  },
  {
    emoji: "🎤",
    t: "ציוד לפי תקציב",
    d: "מיקרופון, אינטרפייס, מוניטורים, קינטרולר — מה לקנות ראשון ומה אפשר להמתין.",
  },
  {
    emoji: "🔌",
    t: "חיבורים ותקשורת",
    d: "XLR, USB, TRS, MIDI — מה מחובר למה, ואיך עורכים בלי רעשים וסיבוכים.",
  },
  {
    emoji: "📦",
    t: "טיפול ב-Gain Staging",
    d: "הסיבה מס' 1 להקלטות שנשמעות כמו בית — מה זה Gain Staging ואיך מגדירים נכון.",
  },
  {
    emoji: "💡",
    t: "Workflow מקצועי",
    d: "Routing, Templates, Naming — איך מגדירים את ה-DAW פעם אחת ועובדים חלק בכל סשן.",
  },
];

const packages = [
  {
    name: "ייעוץ ראשוני",
    price: "490",
    desc: "שעה אחת · Zoom",
    dark: false,
    items: [
      "שאלון לפני הפגישה",
      "המלצת ציוד לתקציב שלכם",
      "תשובות על שאלות פתוחות",
      "סיכום כתוב אחרי",
    ],
  },
  {
    name: "תכנון מלא",
    price: "990",
    desc: "2 שעות + תוכנית",
    dark: true,
    items: [
      "ביקור בבית / Zoom מפורט",
      "תוכנית אקוסטית לחדר",
      "רשימת ציוד מפורטת",
      "הגדרת DAW מותאמת",
      "שעת follow-up לאחר חודש",
    ],
  },
];

export default function HomeStudioPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · האקדמיה
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-zinc-900"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          אולפן ביתי.
          <br />
          <span className="text-[#D42B2B]">מהחדר שלכם לצליל שמתחרה.</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8">
          ייעוץ אקוסטי, בחירת ציוד, הגדרת DAW — תוכנית מסודרת לאולפן ביתי שבאמת עובד.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            קבעו ייעוץ
          </Link>
          <Link
            href="/academy"
            className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all"
          >
            כל האקדמיה
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">מה מכסים בייעוץ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map(({ emoji, t, d }) => (
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
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">חבילות ייעוץ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {packages.map(({ name, price, desc, dark, items }) => (
              <div
                key={name}
                className={`rounded-2xl p-7 ${dark ? "bg-zinc-900 text-white" : "bg-white border border-zinc-200"}`}
              >
                <p className={`text-sm font-bold mb-1 ${dark ? "text-zinc-400" : "text-zinc-400"}`}>{name}</p>
                <p className="text-4xl font-serif font-black text-[#D42B2B] mb-1">{price} ₪</p>
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
        <h2 className="font-serif text-2xl font-bold mb-3">מתחילים בשיחה</h2>
        <p className="text-zinc-400 mb-6">ספרו לנו על החדר, התקציב, ומה אתם מתכננים להקליט.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors"
          >
            058-7-555-456 וואטסאפ
          </Link>
          <Link
            href="/studio/recording-song-modiin"
            className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors"
          >
            אולפן מקצועי במודיעין
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="לימוד ופיתוח מקצועי"
        pages={[
          { label: "האקדמיה", href: "/academy", desc: "קורסים ולימודי סאונד" },
          { label: "אולפן הקלטות מודיעין", href: "/studio/recording-song-modiin", desc: "לפני שבונים — מקליטים אצלנו" },
          { label: "5 טיפים לאולפן", href: "/blog/Studio-Tips", desc: "להבין איך אולפן עובד" },
        ]}
      />
    </div>
  );
}
