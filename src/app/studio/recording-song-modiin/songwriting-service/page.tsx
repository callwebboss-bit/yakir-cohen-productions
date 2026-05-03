import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "שירות כתיבת שירים — מילים לשיר מקצועי | יקיר כהן הפקות",
  description:
    "שירות כתיבת מילים לשירים — לחתונה, בר מצווה, שיר מקורי. כותב מקצועי שמוציא מכם את הסיפור האמיתי. צרו קשר לפרטים.",
  alternates: { canonical: "https://www.yakircohen.com/studio/recording-song-modiin/songwriting-service" },
  openGraph: {
    title: "כתיבת שירים מקצועית | יקיר כהן הפקות",
    description: "מילים לשיר לחתונה, בר מצווה, שיר מקורי. צרו קשר לפרטים.",
    url: "https://www.yakircohen.com/studio/recording-song-modiin/songwriting-service",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "שירות כתיבת שירים — יקיר כהן הפקות",
  "description": "כתיבת מילים לשירים: חתונה, בר מצווה, שיר מקורי. מקצועי, אישי, עובד.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
};

const services = [
  { emoji: "💍", t: "שיר לחתונה", d: "מילים שמספרות את הסיפור שלכם — לכניסה לחופה, לריקוד הסלואו, כהפתעה לבן/בת הזוג." },
  { emoji: "✡️", t: "שיר לבר/בת מצווה", d: "שיר שמדבר על הילד/ה — על מי שהם, על מה שאתם מרגישים עליהם." },
  { emoji: "🎵", t: "שיר מקורי", d: "יש לכם רגש, נושא, או חוויה שרוצים להפוך לשיר — אנחנו מוציאים ממכם את הסיפור." },
  { emoji: "🎂", t: "שיר ליום הולדת", d: "מתנה שלא קונים בחנות — שיר עם שם, עם זיכרונות, עם אהבה." },
];

const process = [
  { n: "01", t: "שיחת פתיחה", d: "מדברים על האירוע, על האדם, על מה שחשוב לכם שיצא. 20-30 דקות." },
  { n: "02", t: "טיוטה ראשונה", d: "שולחים לכם טיוטת מילים — מקשיבים לפידבק, מתקנים עד שזה מרגיש נכון." },
  { n: "03", t: "גמר", d: "המילים הגמורות, מוכנות להקלטה. אפשר גם להוסיף לחן ולהקליט." },
];

export default function SongwritingServicePage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · כתיבת שירים
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-zinc-900"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          כתיבת מילים לשיר.
          <br />
          <span className="text-[#D42B2B]">כי לפעמים המילים לא יוצאות לבד.</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8">
          אתם מביאים את הסיפור, את הרגש, את מי שאתם כותבים עליו — אנחנו מוצאים את המילים שמתאימות.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            ספרו לנו על השיר שרוצים
          </Link>
          <Link href="/studio/recording-song-modiin/original-song" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
            הפקת שיר מקורי
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">לאיזה שיר?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ emoji, t, d }) => (
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

      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto">
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
        </div>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-6">מה שחשוב לדעת</h2>
        <ul className="flex flex-col gap-4">
          {[
            "כל שיר הוא ייחודי — לא עובדים עם תבניות",
            "כתיבה בעברית — סגנון מותאם לאירוע ולאדם",
            "כולל עד 2 סבבי תיקונים לאחר הטיוטה הראשונה",
            "אפשר להוסיף לחן ולהקליט — חבילה מלאה",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 justify-end p-4 bg-white border border-zinc-200 rounded-xl">
              <span className="text-zinc-700 text-sm">{item}</span>
              <CheckCircle2 size={16} className="text-[#D42B2B] shrink-0" />
            </li>
          ))}
        </ul>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">רוצים שנכתוב את השיר שלכם?</h2>
        <p className="text-zinc-400 mb-6">שלחו הודעה עם פרטי האירוע — נחזור עם הצעה.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">058-7-555-456 וואטסאפ</Link>
          <Link href="/studio/recording-song-modiin" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">כל שירותי ההקלטה</Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותים קשורים"
        pages={[
          { label: "הפקת שיר מקורי", href: "/studio/recording-song-modiin/original-song", desc: "מכתיבה להקלטה — חבילה מלאה" },
          { label: "הקלטת שירים", href: "/studio/recording-song-modiin", desc: "מגיעים לאולפן עם שיר — יוצאים עם הקלטה" },
          { label: "שירים לחתונה", href: "/blog/wedding-songs-chuppah", desc: "מדריך שירים לכניסה לחופה" },
        ]}
      />
    </div>
  );
}
