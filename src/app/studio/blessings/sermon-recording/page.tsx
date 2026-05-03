import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mic } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "הקלטת דרשה ודברי תורה באולפן | יקיר כהן הפקות",
  description:
    "הקלטת דרשה, שיעור תורה, חדושים, הספד — באולפן אקוסטי. קובץ נקי, ברור, מוכן להפצה בפודקאסט, ביוטיוב או בוואטסאפ. מ-490 ₪.",
  alternates: { canonical: "https://www.yakircohen.com/studio/blessings/sermon-recording" },
  openGraph: {
    title: "הקלטת דרשה ודברי תורה | יקיר כהן הפקות",
    description: "הקלטה מקצועית לדרשות ושיעורי תורה. מ-490 ₪.",
    url: "https://www.yakircohen.com/studio/blessings/sermon-recording",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "הקלטת דרשה ודברי תורה — יקיר כהן הפקות",
  "description": "הקלטת דרשה, שיעור תורה, חדושים — חדר אקוסטי, מיקרופון מקצועי, קובץ נקי. מ-490 ₪.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
  "offers": { "@type": "Offer", "price": "490", "priceCurrency": "ILS" },
};

const types = [
  { emoji: "📖", t: "שיעור תורה", d: "חדושי פרשה, הלכה, סיפורי צדיקים — מוקלטים בבהירות מלאה לפצה בפודקאסט או ביוטיוב." },
  { emoji: "🕍", t: "דרשת שבת / חג", d: "דרשה שכבר נאמרה או עתידה להיאמר — מוקלטת מראש לרמת שמע מקצועית." },
  { emoji: "🕯️", t: "הספד", d: "הספד שנשמר לנצח — לא כהקלטת סלולרי, אלא כקובץ ברמה שמכבדת את הרגע." },
  { emoji: "🎙️", t: "פודקאסט תורני", d: "רוצים להפיץ תוכן תורני בצורה קבועה? נסדר לכם תהליך הקלטה שבועי." },
];

const features = [
  "חדר אקוסטי — אפס רעשי רקע",
  "מיקרופון קרדיואידי לקול מדבר",
  "הסרת מלמולים ורעשים",
  "נורמליזציה לרמת LUFS לפודקאסט",
  "MP3 + WAV מוכן להפצה",
  "אפשרות לפרקים מרובים — מחיר מוזל",
];

export default function SermonRecordingPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · הקלטות מיוחדות
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-zinc-900"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          הקלטת דרשה ודברי תורה.
          <br />
          <span className="text-[#D42B2B]">בהירות שמכבדת את התוכן.</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8">
          שיעורי תורה, דרשות, חדושים, הספדים — מוקלטים באולפן אקוסטי ויוצאים בקובץ נקי ומקצועי.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            קבעו סשן
          </Link>
          <Link
            href="/studio/blessings"
            className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all"
          >
            כל הברכות וההקלטות
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">מה מקליטים?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {types.map(({ emoji, t, d }) => (
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
          <div className="flex items-center justify-center gap-3 mb-8">
            <Mic size={24} className="text-[#D42B2B]" />
            <h2 className="font-serif text-2xl font-bold">למה באולפן ולא בסלולרי?</h2>
          </div>
          <p className="text-zinc-500 text-center leading-relaxed mb-10 max-w-2xl mx-auto">
            הקלטת טלפון סובלת מהד חדר, רעשי מזגן ופסקים לא אחידים. תוכן שנוצר בקפידה — ראוי שיישמע בקפידה.
          </p>
          <ul className="flex flex-col gap-3 max-w-md mx-auto text-right">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 justify-end">
                <span className="text-zinc-700">{f}</span>
                <CheckCircle2 size={16} className="text-[#D42B2B] shrink-0" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto w-full text-center">
        <h2 className="font-serif text-2xl font-bold mb-6">מחיר</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white border border-zinc-200 rounded-2xl p-7">
            <p className="text-4xl font-serif font-black text-[#D42B2B] mb-1">490 ₪</p>
            <p className="text-zinc-500 text-sm font-bold mb-4">עד שעה · פרק בודד</p>
            <ul className="flex flex-col gap-2 text-sm text-right">
              {["הקלטה בחדר אקוסטי", "עריכה ונורמליזציה", "MP3 + WAV"].map((f) => (
                <li key={f} className="flex items-center gap-2 justify-end">
                  <span className="text-zinc-600">{f}</span>
                  <CheckCircle2 size={13} className="text-[#D42B2B] shrink-0" />
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-zinc-900 text-white rounded-2xl p-7">
            <p className="text-4xl font-serif font-black text-[#D42B2B] mb-1">1,800 ₪</p>
            <p className="text-zinc-400 text-sm font-bold mb-4">5 פרקים · חבילה</p>
            <ul className="flex flex-col gap-2 text-sm text-right">
              {["5 סשנים של עד שעה", "עריכה לכולם", "תג פודקאסט (ID3)", "RSS לפצה ישירה"].map((f) => (
                <li key={f} className="flex items-center gap-2 justify-end">
                  <span className="text-zinc-300">{f}</span>
                  <CheckCircle2 size={13} className="text-[#D42B2B] shrink-0" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-zinc-400 text-xs mt-6">המחירים אינם כוללים מע&quot;מ (18%)</p>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">קבעו סשן הקלטה</h2>
        <p className="text-zinc-400 mb-6">שלחו וואטסאפ עם סוג ההקלטה ואורך השיעור המשוער.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors"
          >
            058-7-555-456 וואטסאפ
          </Link>
          <Link
            href="/podcast/podcast-production"
            className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors"
          >
            הפקת פודקאסט מלאה
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="הקלטות וברכות"
        pages={[
          { label: "ברכות לבר מצווה", href: "/studio/blessings/bar-mitzvah", desc: "הקלטה מרגשת — 990 ₪" },
          { label: "הפקת פודקאסט", href: "/podcast/podcast-production", desc: "מהרעיון לשידור — חבילה מלאה" },
          { label: "כל הברכות", href: "/studio/blessings", desc: "לכל אירוע וכל סוג" },
        ]}
      />
    </div>
  );
}
