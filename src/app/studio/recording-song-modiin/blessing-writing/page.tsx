import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "כתיבת ברכה מקצועית — לכל אירוע | יקיר כהן הפקות",
  description:
    "לא יודעים מה לכתוב? אנחנו כותבים עבורכם ברכה מותאמת אישית לחתונה, בר מצווה, יום הולדת — ומקליטים אותה באולפן. מ-990 ₪.",
  alternates: { canonical: "https://www.yakircohen.com/studio/recording-song-modiin/blessing-writing" },
  openGraph: {
    title: "כתיבת ברכה מקצועית | יקיר כהן הפקות",
    description: "ברכה מותאמת אישית — כתובה ומוקלטת. מ-990 ₪.",
    url: "https://www.yakircohen.com/studio/recording-song-modiin/blessing-writing",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "כתיבת ברכה מקצועית — יקיר כהן הפקות",
  "description": "כתיבת ברכה מותאמת אישית לכל אירוע + הקלטה באולפן. מ-990 ₪.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
  "offers": { "@type": "Offer", "price": "990", "priceCurrency": "ILS" },
};

const occasions = [
  { emoji: "💍", t: "חתונה", d: "ברכה לחתן וכלה שמשלבת את הסיפור שלהם, ציטוט, ומילים שנשמעות אמיתיות — לא קלישאות." },
  { emoji: "🎉", t: "בר ובת מצווה", d: "ברכה מהורים, מסבא וסבתא, מחברים — כתובה בגוף ראשון, בשפה שמרגישה שלהם." },
  { emoji: "🎂", t: "יום הולדת עגול", d: "50, 60, 70 — ברכה שמסכמת דרך חיים בכמה משפטים שיגרמו לדמעות." },
  { emoji: "💼", t: "אירוע עסקי", d: "פרישה לגמלאות, קידום, סיום פרויקט — ברכה רשמית שמרגישה אישית." },
];

const process = [
  { n: "01", t: "שולחים פרטים", d: "שם המברך, שם מקבל הברכה, קשר, רגעים שחשוב לכם לציין." },
  { n: "02", t: "אנחנו כותבים", d: "תוך 48 שעות תקבלו טיוטה. עד 2 סבבי תיקונים כלולים." },
  { n: "03", t: "מגיעים לאולפן", d: "קובעים סשן, מקליטים בחדר אקוסטי עם טכנאי." },
  { n: "04", t: "מקבלים קובץ", d: "WAV + MP3 מוכן להשמעה באירוע או לשמירה לנצח." },
];

export default function BlessingWritingPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · שירות כתיבה
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-zinc-900"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          כתיבת ברכה מקצועית.
          <br />
          <span className="text-[#D42B2B]">כשאין מילים — אנחנו מוצאים אותן.</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8">
          ברכה שנכתבת בדיוק עבורכם, בדיוק עבור האירוע, בדיוק בגוף הנכון — ואז מוקלטת באולפן מקצועי.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            התחילו כאן
          </Link>
          <Link
            href="/studio/blessings"
            className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all"
          >
            כל סוגי הברכות
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">לאיזה אירוע?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {occasions.map(({ emoji, t, d }) => (
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
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">איך זה עובד?</h2>
          <div className="flex flex-col gap-8">
            {process.map(({ n, t, d }) => (
              <div key={n} className="flex items-start gap-6">
                <span className="font-serif text-5xl font-black text-[#D42B2B] opacity-25 shrink-0 leading-none">
                  {n}
                </span>
                <div className="pt-1">
                  <h3 className="font-serif text-lg font-bold mb-1">{t}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto w-full text-center">
        <h2 className="font-serif text-2xl font-bold mb-6">מחיר</h2>
        <div className="bg-zinc-900 text-white rounded-2xl p-8 max-w-sm mx-auto">
          <p className="text-5xl font-serif font-black text-[#D42B2B] mb-2">990 ₪</p>
          <p className="text-zinc-400 text-sm mb-6">כתיבה + הקלטה + מיקס</p>
          <ul className="flex flex-col gap-2 text-sm text-right">
            {[
              "כתיבת ברכה מותאמת אישית",
              "עד 2 סבבי תיקון",
              "הקלטה בחדר אקוסטי",
              "טכנאי סאונד",
              "מיקס גמור",
              "WAV + MP3",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 justify-end">
                <span className="text-zinc-300">{f}</span>
                <CheckCircle2 size={14} className="text-[#D42B2B] shrink-0" />
              </li>
            ))}
          </ul>
          <p className="text-zinc-600 text-xs mt-4">לא כולל מע&quot;מ (18%)</p>
        </div>
        <p className="text-zinc-500 text-sm mt-6 max-w-sm mx-auto">
          רוצים רק כתיבה, בלי הקלטה? צרו קשר — נמצא פתרון מתאים.
        </p>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">מתחילים בשליחת הפרטים</h2>
        <p className="text-zinc-400 mb-6">שלחו וואטסאפ עם שם האירוע, תאריך, ועל מי הברכה.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors"
          >
            058-7-555-456 וואטסאפ
          </Link>
          <Link
            href="/studio/recording-song-modiin/songwriting-service"
            className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors"
          >
            כתיבת שיר מקורי
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותי כתיבה והקלטה"
        pages={[
          { label: "כתיבת שיר מקורי", href: "/studio/recording-song-modiin/songwriting-service", desc: "שיר שנכתב עליכם — מ-990 ₪" },
          { label: "ברכות לכל אירוע", href: "/studio/blessings", desc: "חתונה, בר מצווה, יום הולדת" },
          { label: "מחירון האולפן", href: "/studio/pricing", desc: "כל המחירים בשקיפות מלאה" },
        ]}
      />
    </div>
  );
}
