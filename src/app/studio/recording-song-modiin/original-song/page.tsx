import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import YouTube from "@/components/ui/YouTube";

export const metadata: Metadata = {
  title: "הפקת שיר מקורי — מרעיון לשיר גמור | יקיר כהן הפקות",
  description:
    "הפקת שיר מקורי מקצועית — כתיבת מילים, לחן, הקלטה ומיקס. יוצאים עם שיר שנשמע כמו שיצא מאולפן על. מ-990 ₪.",
  alternates: { canonical: `${SITE_URL}/studio/recording-song-modiin/original-song` },
  openGraph: {
    title: "הפקת שיר מקורי | יקיר כהן הפקות",
    description: "מרעיון לשיר גמור. כתיבה, הקלטה, מיקס. מ-990 ₪.",
    url: `${SITE_URL}/studio/recording-song-modiin/original-song`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "הפקת שיר מקורי — יקיר כהן הפקות",
  "description": "הפקת שיר מקורי: כתיבה, לחן, הקלטה ומיקס. מ-990 ₪.",
  "provider": {
    "@type": "MusicRecordingStudio",
    "name": "יקיר כהן הפקות",
    "telephone": "+972-58-7555456",
    "address": { "@type": "PostalAddress", "addressLocality": "מודיעין-מכבים-רעות", "addressCountry": "IL" },
  },
  "offers": { "@type": "Offer", "price": "990", "priceCurrency": "ILS" },
};

const whoIsItFor = [
  { emoji: "💍", t: "זוגות לחתונה", d: "שיר שנכתב עליכם, על הסיפור שלכם. נשמע בכניסה לחופה או בריקוד הסלואו." },
  { emoji: "👨‍👩‍👧", t: "שיר משפחתי", d: "שיר שמספר על המשפחה — להולדת ילד, לאירוע, למתנה לאחד ההורים." },
  { emoji: "🎂", t: "שיר ליום הולדת", d: "שיר עם שם, עם זיכרונות, עם אהבה. מתנה שלא קונים בחנות." },
  { emoji: "🎵", t: "אמן / יוצר", d: "יש לכם רעיון לשיר? מביאים אותו לאולפן ויוצאים עם הפקה מקצועית." },
];

const process = [
  { n: "01", t: "פגישת היכרות", d: "מדברים על הרעיון, הנושא, הסגנון. מבינים מה אתם רוצים שישמע." },
  { n: "02", t: "כתיבה ולחן", d: "כותבים מילים ומלחינים לחן מתאים — או עובדים עם מה שהבאתם." },
  { n: "03", t: "הקלטה ומיקס", d: "מגיעים לאולפן, מקליטים, מקבלים שיר גמור — WAV ו-MP3." },
];

export default function OriginalSongPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-900 text-white text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · שיר מקורי
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          הפקת שיר מקורי.
          <br />
          <span className="text-[#D42B2B]">מרעיון לשיר שנשמע בכל מקום.</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8">
          יש לכם רעיון, מילים, או רגש שרוצים להפוך לשיר — אנחנו מביאים אותו לחיים.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            ספרו לנו על הרעיון שלכם
          </Link>
          <Link href="/studio/recording-song-modiin" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">
            כל שירותי ההקלטה
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">למי זה מתאים?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whoIsItFor.map(({ emoji, t, d }) => (
            <div key={t} className="flex items-start gap-5 p-7 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all">
              <span className="text-3xl shrink-0">{emoji}</span>
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">{t}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-2">כותב הלהיטים אליה רוסיליו מסביר</h2>
          <p className="text-center text-zinc-500 mb-6 text-sm">איך כותבים לעומר אדם — ומה שאפשר ללמוד על כל כתיבת שיר</p>
          <YouTube url="https://www.youtube.com/watch?v=zkyPqV7m4Q8" title="איך כותבים שיר — כותב הלהיטים אליה רוסיליו" />
        </div>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-10">איך זה עובד?</h2>
        <div className="flex flex-col gap-4">
          {process.map(({ n, t, d }) => (
            <div key={n} className="flex items-start gap-6 p-6 bg-white border border-zinc-100 rounded-2xl">
              <span className="font-serif text-3xl font-black text-[#D42B2B] opacity-50 shrink-0">{n}</span>
              <div>
                <h3 className="font-bold mb-1">{t}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">מחירון</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              { t: "שיר מקורי בסיסי", p: "990", d: "כתיבה + הקלטה + תיקון זיופים + מיקס" },
              { t: "שיר + קליפ 4K", p: "מ-2,800", d: "הכל + צילום וידאו + עריכה מקצועית" },
            ].map(({ t, p, d }) => (
              <div key={t} className="border border-white/20 rounded-2xl p-6">
                <h3 className="font-bold mb-1">{t}</h3>
                <p className="text-3xl font-serif font-black text-[#D42B2B] mb-2">₪{p}</p>
                <p className="text-zinc-400 text-xs">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-xs mb-6">המחירים אינם כוללים מע&quot;מ (18%)</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">058-7-555-456 וואטסאפ</Link>
            <Link href="/studio/pricing" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">מחירון מלא</Link>
          </div>
          <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
        </div>
      </section>

      <RelatedPages
        title="שירותי אולפן קשורים"
        pages={[
          { label: "הקלטת שיר לחתונה", href: "/studio/recording-song-modiin", desc: "שיר ידוע עם עיבוד אישי מ-990 ₪" },
          { label: "כתיבת שירים", href: "/studio/recording-song-modiin/songwriting-service", desc: "עוזרים לכתוב את המילים שלכם" },
          { label: "ברכות מוקלטות", href: "/studio/blessings", desc: "ברכה קצרה לכל אירוע" },
        ]}
      />
    </div>
  );
}
