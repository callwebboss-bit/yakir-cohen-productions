import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Home } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "הקלטת ברכות בבית — אולפן נייד מגיע אליכם | יקיר כהן הפקות",
  description:
    "לא יכולים להגיע לאולפן? אנחנו מגיעים אליכם. הקלטת ברכות לחתונה, בר מצווה, יום הולדת — בבית, בחדר השינה, בגן. מ-690 ₪.",
  alternates: { canonical: "https://www.yakircohen.com/studio/mobile-studio/home-phone-blessings" },
  openGraph: {
    title: "הקלטת ברכות בבית | יקיר כהן הפקות",
    description: "אולפן נייד מגיע אליכם — הקלטת ברכות מקצועית בבית. מ-690 ₪.",
    url: "https://www.yakircohen.com/studio/mobile-studio/home-phone-blessings",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "הקלטת ברכות בבית — יקיר כהן הפקות",
  "description": "אולפן נייד מגיע לבית הלקוח להקלטת ברכות — חתונה, בר מצווה, יום הולדת. מ-690 ₪.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
  "offers": { "@type": "Offer", "price": "690", "priceCurrency": "ILS" },
};

const useCases = [
  {
    emoji: "🧓",
    t: "סבא וסבתא שלא זזים",
    d: "מגיעים לבית. מקליטים ברכה לנכד/נכדה עם הקול, הניב, הטעם האישי — בלי לנסוע.",
  },
  {
    emoji: "🛏️",
    t: "חולים ומאושפזים",
    d: "ברכה לאירוע שחשוב מאוד להיות בו — גם כשאי אפשר פיזית. מגיעים לבית חולים, לבית, לכל מקום.",
  },
  {
    emoji: "👶",
    t: "תינוק בבית",
    d: "לא זזים בגלל תינוק קטן? אנחנו מגיעים ומקליטים בשעה שנוחה — בשקט, בלי לערבב שגרה.",
  },
  {
    emoji: "🏠",
    t: "קבוצת ברכה",
    d: "רוצים שכל המשפחה תברך יחד מהסלון? מגיעים עם ציוד, מקליטים כולם — ארכיב אחד מסודר.",
  },
];

const gear = [
  "מיקרופון Shure SM7B נייד",
  "אינטרפייס אודיו + Laptop",
  "חיסום חדר פשוט (reflection filter)",
  "עיבוד והקלטה בזמן אמת",
  "קובץ WAV + MP3 ביום הסשן",
];

export default function HomePhoneBlessingsPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · אולפן נייד
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-zinc-900"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          הקלטה בבית.
          <br />
          <span className="text-[#D42B2B]">האולפן מגיע אליכם.</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8">
          לא תמיד אפשר לנסוע לאולפן. לכן אנחנו מגיעים — עם ציוד, עם טכנאי, ומקליטים ברכה מקצועית ממש בבית.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            קבעו ביקור בבית
          </Link>
          <Link
            href="/studio/mobile-studio"
            className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all"
          >
            האולפן הנייד
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">למי זה מיועד?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map(({ emoji, t, d }) => (
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
            <Home size={22} className="text-[#D42B2B]" />
            <h2 className="font-serif text-2xl font-bold">מה מגיע איתנו</h2>
          </div>
          <ul className="flex flex-col gap-3 max-w-md mx-auto text-right">
            {gear.map((item) => (
              <li key={item} className="flex items-center gap-3 justify-end">
                <span className="text-zinc-700">{item}</span>
                <CheckCircle2 size={16} className="text-[#D42B2B] shrink-0" />
              </li>
            ))}
          </ul>
          <p className="text-zinc-500 text-sm text-center mt-8 max-w-lg mx-auto">
            הקלטה ביתית עם ציוד נייד תשמע טוב יותר מהקלטת סלולרי — אבל לא תהיה זהה לאולפן מושלם. מסבירים בפירוש לפני כל ביקור.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto w-full text-center">
        <h2 className="font-serif text-2xl font-bold mb-6">מחיר</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
          <div className="bg-white border border-zinc-200 rounded-2xl p-7">
            <p className="text-sm font-bold text-zinc-400 mb-1">ביקור בית</p>
            <p className="text-4xl font-serif font-black text-[#D42B2B] mb-1">690 ₪</p>
            <p className="text-xs text-zinc-400 mb-5">עד 3 ברכות · גוש דן</p>
            <ul className="flex flex-col gap-2 text-sm text-right">
              {["הגעה לבית", "עד 3 ברכות קצרות", "WAV + MP3"].map((f) => (
                <li key={f} className="flex items-center gap-2 justify-end">
                  <span className="text-zinc-600">{f}</span>
                  <CheckCircle2 size={13} className="text-[#D42B2B] shrink-0" />
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-zinc-900 text-white rounded-2xl p-7">
            <p className="text-sm font-bold text-zinc-400 mb-1">ביקור מורחב</p>
            <p className="text-4xl font-serif font-black text-[#D42B2B] mb-1">1,100 ₪</p>
            <p className="text-xs text-zinc-500 mb-5">עד 6 ברכות · כל הארץ</p>
            <ul className="flex flex-col gap-2 text-sm text-right">
              {["הגעה לכל מקום בארץ", "עד 6 ברכות", "עריכה בסיסית", "WAV + MP3"].map((f) => (
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
        <h2 className="font-serif text-2xl font-bold mb-3">קבעו ביקור בית</h2>
        <p className="text-zinc-400 mb-6">שלחו וואטסאפ עם כתובת, תאריך האירוע ומספר המברכים.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors"
          >
            058-7-555-456 וואטסאפ
          </Link>
          <Link
            href="/studio/blessings"
            className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors"
          >
            כל הברכות באולפן
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="ברכות והקלטות"
        pages={[
          { label: "ברכות לכל אירוע", href: "/studio/blessings", desc: "חתונה, בר מצווה, יום הולדת" },
          { label: "האולפן הנייד", href: "/studio/mobile-studio", desc: "כל שירותי האולפן הנייד" },
          { label: "ברכות לבר מצווה", href: "/studio/blessings/bar-mitzvah", desc: "מ-990 ₪ באולפן" },
        ]}
      />
    </div>
  );
}
