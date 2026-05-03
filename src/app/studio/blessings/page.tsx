import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "ברכות מוקלטות מקצועיות — לכל אירוע | יקיר כהן הפקות",
  description:
    "הקלטת ברכות מקצועית לכל אירוע — בר מצווה, חתונה, בת מצווה, יום הולדת. מ-990 ₪ כולל הכל. קניון עזריאלי מודיעין.",
  alternates: { canonical: "https://www.yakircohen.com/studio/blessings" },
  openGraph: {
    title: "ברכות מוקלטות מקצועיות | יקיר כהן הפקות",
    description: "לבר מצווה, חתונה, בת מצווה ועוד. מ-990 ₪.",
    url: "https://www.yakircohen.com/studio/blessings",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "הקלטת ברכות מקצועית — יקיר כהן הפקות",
  "description": "הקלטת ברכות לכל אירוע — בר מצווה, חתונה, בת מצווה. מ-990 ₪.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "יקיר כהן הפקות",
    "telephone": "+972-58-7555456",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "עמק איילון 34/5",
      "addressLocality": "מודיעין-מכבים-רעות",
      "addressCountry": "IL",
    },
  },
  "offers": { "@type": "Offer", "price": "990", "priceCurrency": "ILS" },
};

const blessingTypes = [
  {
    href: "/studio/blessings/bar-mitzvah",
    emoji: "✡️",
    title: "ברכה לבר מצווה",
    desc: "ברכה של אמא, אבא, סבא, סבתא — הרגע שנשאר לנצח. כולל עזרה בנוסח.",
    cta: "פרטים על ברכת בר מצווה",
  },
  {
    href: "/studio/blessings/video-clip",
    emoji: "🎬",
    title: "קליפ וידאו בר/בת מצווה",
    desc: "קליפ וידאו מקצועי של הבר/בת מצווה. מוזיקה, עיצוב וחוויה קולית מדהימה.",
    cta: "לקליפ וידאו",
  },
  {
    href: "/studio/blessings/wedding-entrance",
    emoji: "💍",
    title: "ברכה לחתונה",
    desc: "ברכה לחתן ולכלה, הקדשה קולית, שיר לכניסה לחופה. רגעים שלא חוזרים.",
    cta: "לברכות חתונה",
  },
  {
    href: "/studio/blessings/bride-groom-blessing",
    emoji: "🌸",
    title: "ברכת חתן וכלה",
    desc: "ברכה משותפת, נדר ייחודי, מילים מהלב. נשמעת כמו אמנות. מרגישה כמו אהבה.",
    cta: "לברכת חתן וכלה",
  },
  {
    href: "/studio/recording-song-modiin",
    emoji: "🎵",
    title: "שיר מקורי",
    desc: "כתבתם מילים? יש לכם לחן? מביאים אותו לאולפן ויוצאים עם שיר מוכן.",
    cta: "לשירים מקוריים",
  },
  {
    href: "/studio/blessings/sermon-recording",
    emoji: "📖",
    title: "הקלטת דרשה",
    desc: "הקלטה מקצועית לדרשה, הרצאה או הקדשה קולית. איכות ברדיו, בנוחות האולפן.",
    cta: "לפרטי הקלטת דרשה",
  },
  {
    href: "/voucher",
    emoji: "🎁",
    title: "שובר מתנה",
    desc: "לא יודעים מה לקנות? שובר מתנה להקלטה באולפן — מתנה שנשארת לנצח.",
    cta: "לשוברי מתנה",
  },
];

export default function BlessingsPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · ברכות ואירועים
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-zinc-900"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          ברכות מוקלטות מקצועיות
          <br />
          <span className="text-[#D42B2B]">לכל אירוע. מ-990 ₪.</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8">
          יש רגעים שמחפשים להישמר. קול שמרגש. מילה שנאמרת. ברכה שנשארת.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            הזמינו ברכה
          </Link>
          <Link href="/studio/pricing" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
            מחירון מלא
          </Link>
        </div>
      </header>

      <main className="py-20 px-6 max-w-6xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">
          איזה סוג ברכה מחפשים?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blessingTypes.map(({ href, emoji, title, desc, cta }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-4 p-8 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 hover:shadow-lg transition-all"
            >
              <span className="text-3xl">{emoji}</span>
              <h3 className="font-serif text-xl font-bold text-zinc-900 group-hover:text-[#D42B2B] transition-colors">
                {title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed flex-grow">{desc}</p>
              <span className="text-xs font-bold text-[#D42B2B] mt-auto">
                {cta} ←
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-10 bg-zinc-900 text-white rounded-2xl text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">לא בטוחים מה מתאים?</h2>
          <p className="text-zinc-400 mb-6">שלחו הודעה עם האירוע שמתכננים — נעזור לבחור את הברכה הנכונה.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
              058-7-555-456 וואטסאפ
            </Link>
            <Link href="/about/faq" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
              שאלות נפוצות
            </Link>
          </div>
        </div>
      </main>

      <RelatedPages
        title="שירותים קשורים"
        pages={[
          { label: "הקלטת שירים מקצועית", href: "/studio/recording-song-modiin", desc: "שיר לחתונה ושיר מקורי מ-990 ₪" },
          { label: "מחירון אולפן", href: "/studio/pricing", desc: "כל המחירים במקום אחד" },
          { label: "שובר מתנה", href: "/voucher", desc: "הקלטה כמתנה לכל אירוע" },
        ]}
      />
    </div>
  );
}
