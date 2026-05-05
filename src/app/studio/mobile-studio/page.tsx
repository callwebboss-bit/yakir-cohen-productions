import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Zap, Shield } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "אולפן הקלטות נייד — מגיעים אליכם | יקיר כהן הפקות",
  description:
    "אולפן הקלטות נייד שמגיע לכל מקום — אירוע, בית, משרד. הקלטת שירים, ברכות, פודקאסט. ציוד מקצועי שמגיע לאיפה שנוח לכם.",
  alternates: { canonical: `${SITE_URL}/studio/mobile-studio` },
  openGraph: {
    title: "אולפן הקלטות נייד | יקיר כהן הפקות",
    description: "ציוד מקצועי שמגיע לאיפה שנוח לכם — אירוע, בית, משרד.",
    url: `${SITE_URL}/studio/mobile-studio`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "אולפן הקלטות נייד — יקיר כהן הפקות",
  "description": "אולפן הקלטות נייד שמגיע לכל מקום — אירוע, בית, משרד. הקלטה מקצועית בכל מיקום.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "יקיר כהן הפקות",
    "telephone": "+972-58-7555456",
    "areaServed": ["מודיעין", "ירושלים", "תל אביב", "מרכז", "כל הארץ"],
  },
};

const useCases = [
  { emoji: "🎂", title: "יום הולדת ואירועים", desc: "מגיעים לאירוע, מקליטים ברכות מהאורחים. זיכרון שנשאר לנצח." },
  { emoji: "🏠", title: "הקלטה בבית", desc: "לא רוצים להגיע לאולפן? האולפן מגיע אליכם. בפרטיות, בנוחות." },
  { emoji: "🏢", title: "אירועי חברה", desc: "הקלטת ברכות לפרישה, קידום, ימי הולדת לעובדים. תוכן שמחזק תרבות." },
  { emoji: "🎓", title: "סיום כיתה", desc: "שיר שיר, ברכה מהמחנך, זיכרון מהכיתה. מגיעים, מקליטים, מסיימים." },
];

const features = [
  { icon: <MapPin size={20} />, t: "מגיעים לכל מקום", d: "כל הארץ — עם תיאום מראש." },
  { icon: <Zap size={20} />, t: "הגדרה מהירה", d: "15 דקות הגדרה, ומתחילים להקליט." },
  { icon: <Shield size={20} />, t: "ציוד מקצועי", d: "אותו ציוד כמו באולפן. תוצאה זהה." },
];

export default function MobileStudioPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-900 text-white text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · אולפן נייד
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          האולפן בא אליכם.
          <br />
          <span className="text-[#D42B2B]">לא אתם לאולפן.</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          ציוד הקלטה מקצועי שמגיע לכל אירוע, בית או משרד. תוצאה של אולפן — בנוחות שלכם.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            בדקו זמינות לתאריך שלכם
          </Link>
          <Link href="/studio" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            אולפן קבוע במודיעין
          </Link>
        </div>
      </header>

      {/* Use cases */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">מתי מזמינים אולפן נייד?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map(({ emoji, title, desc }) => (
            <article key={title} className="flex items-start gap-5 p-7 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all">
              <span className="text-3xl shrink-0">{emoji}</span>
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-10">למה אולפן נייד עובד?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {features.map(({ icon, t, d }) => (
              <div key={t} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-zinc-900 text-white rounded-xl flex items-center justify-center">{icon}</div>
                <h3 className="font-bold">{t}</h3>
                <p className="text-zinc-500 text-sm">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-white border border-zinc-200 rounded-2xl">
            <p className="text-zinc-600 text-sm leading-relaxed text-center">
              <strong>הבדל חשוב:</strong> האולפן הנייד מתאים להקלטות דיבור, ברכות ופודקאסט. להקלטת שירה בסטנדרט מקסימלי — האולפן הקבוע במודיעין מציע בידוד אקוסטי שלא ניתן לשחזר בשטח.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-10">מה מגיע איתנו?</h2>
        <ul className="flex flex-col gap-4">
          {["מיקרופון מקצועי + Pre-amp", "ממשק הקלטה + מחשב", "אוזניות לניטור", "כבלים ואביזרים נלווים", "תוכנת הקלטה מקצועית", "עריכה בסיסית בשטח"].map((item) => (
            <li key={item} className="flex items-center gap-3 justify-end">
              <span className="text-zinc-700">{item}</span>
              <CheckCircle2 size={16} className="text-[#D42B2B] shrink-0" />
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">מתעניינים באולפן נייד?</h2>
        <p className="text-zinc-400 mb-6 max-w-md mx-auto">שלחו לנו את התאריך, המיקום וסוג ההקלטה — נחזור עם הצעת מחיר.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            058-7-555-456 וואטסאפ
          </Link>
          <Link href="/studio/mobile-studio/home-phone-blessings" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            ברכות לטלפון הבית
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותים קשורים"
        pages={[
          { label: "אולפן הקלטות מודיעין", href: "/studio/recording-song-modiin", desc: "לתוצאה המקסימלית — הגיעו לאולפן" },
          { label: "ברכות מוקלטות", href: "/studio/blessings", desc: "לכל אירוע, מ-990 ₪" },
          { label: "אולפן פודקאסט", href: "/podcast/podcast-studio", desc: "ציוד מקצועי, מיקום קבוע" },
        ]}
      />
    </div>
  );
}
