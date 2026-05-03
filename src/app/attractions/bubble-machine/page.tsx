import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "בועות סבון לאירועים — מכונת בועות לחתונות ובר מצווה | יקיר כהן הפקות",
  description:
    "מכונת בועות סבון לאירועים: חתונות, בר/בת מצווה, ימי הולדת. אטרקציה שמרגישה כמו חלום — לכל גיל. חלק מחבילות האטרקציות מ-1,750 ₪.",
  alternates: { canonical: "https://www.yakircohen.com/attractions/bubble-machine" },
  openGraph: {
    title: "בועות סבון לאירועים | יקיר כהן הפקות",
    description: "מכונת בועות סבון לחתונות ואירועים. מ-1,750 ₪.",
    url: "https://www.yakircohen.com/attractions/bubble-machine",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "מכונת בועות סבון לאירועים — יקיר כהן הפקות",
  "description": "בועות סבון לחתונות, בר/בת מצווה ואירועים. מ-1,750 ₪.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "יקיר כהן הפקות",
    "telephone": "+972-58-7555456",
    "address": { "@type": "PostalAddress", "addressLocality": "מודיעין-מכבים-רעות", "addressCountry": "IL" },
  },
  "offers": { "@type": "Offer", "price": "1750", "priceCurrency": "ILS" },
};

const variants = [
  { href: "/attractions/bubble-machine/smoke-bubble-machine-events", emoji: "🫧", t: "בועות + עשן", d: "הגרסה המרהיבה ביותר — בועות שמתמלאות בעשן. כמו חלום, נראות לא מהעולם הזה." },
  { emoji: "🧼", t: "בועות רגילות", d: "קסם פשוט ויפה. מתאים לכל גיל — ילדים, מבוגרים, כולם מושיטים יד." },
];

const eventFit = [
  { emoji: "💍", t: "חתונה", d: "ריקוד הסלואו בתוך ים בועות — רומנטי, שקט, מרגש." },
  { emoji: "✡️", t: "בר/בת מצווה", d: "הכנסת השמחה בבועות — ילדים מבאסים, מבוגרים מחייכים." },
  { emoji: "🎂", t: "יום הולדת", d: "עמדת בועות שמפתיעה כל אורח שנכנס לאולם." },
  { emoji: "🌸", t: "ברית / בריתה", d: "עדין, יפה, קסום — מתאים לאווירה המיוחדת של הרגע." },
];

const otherAttractions = [
  { href: "/attractions/cold-fireworks", label: "זיקוקים קרים", desc: "ניצוצות שלא שורפים" },
  { href: "/attractions/wedding-smoking-machine", label: "עשן כבד", desc: "אפקט ריקוד דרמטי" },
  { href: "/attractions/confetti-cannon", label: "קונפטי", desc: "פיצוץ של שמחה" },
  { href: "/attractions/giant-balloons", label: "בלוני ענק", desc: "אטרקציה ויזואלית" },
];

export default function BubbleMachinePage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header
        className="py-20 px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · אטרקציות לאירועים
        </p>
        <h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          בועות סבון לאירועים.
          <br />
          <span className="text-[#D42B2B]">קסם שכולם נגעים בו.</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8">
          אטרקציה שמרגישה כמו חלום. מכונת בועות לחתונות, בר/בת מצווה וכל אירוע. חלק מחבילות האטרקציות.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            בדקו זמינות לתאריך
          </Link>
          <Link href="/attractions" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            כל חבילות האטרקציות
          </Link>
        </div>
      </header>

      {/* Variants */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">שתי גרסאות — שתיהן מרהיבות</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {variants.map(({ href, emoji, t, d }) => (
            <div key={t} className="flex flex-col gap-4 p-8 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all">
              <span className="text-4xl">{emoji}</span>
              <h3 className="font-serif text-xl font-bold">{t}</h3>
              <p className="text-zinc-500 leading-relaxed">{d}</p>
              {href && (
                <Link href={href} className="text-sm font-bold text-[#D42B2B] hover:underline">
                  פרטים על בועות + עשן ←
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Event fit */}
      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-12">לאיזה אירוע מתאים?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventFit.map(({ emoji, t, d }) => (
              <div key={t} className="flex items-start gap-5 p-6 bg-white border border-zinc-200 rounded-2xl">
                <span className="text-3xl shrink-0">{emoji}</span>
                <div>
                  <h3 className="font-bold mb-1">{t}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto w-full text-center">
        <h2 className="font-serif text-2xl font-bold mb-4">חבילות אטרקציות</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {[
            { t: "אטרקציה אחת", p: "1,750", d: "מכונת בועות בלבד" },
            { t: "חבילה כפולה", p: "3,200", d: "בועות + אטרקציה נוספת", popular: true },
            { t: "4+ אטרקציות", p: "מ-5,500", d: "קליפ היילייטס מתנה" },
          ].map(({ t, p, d, popular }) => (
            <div key={t} className={`rounded-2xl p-7 border ${popular ? "bg-zinc-900 text-white border-zinc-700 md:scale-105" : "bg-white border-zinc-200"}`}>
              {popular && <span className="block text-xs font-black text-[#D42B2B] uppercase mb-2">הכי מבוקש</span>}
              <h3 className={`font-serif text-lg font-bold mb-1 ${popular ? "" : "text-zinc-900"}`}>{t}</h3>
              <p className="text-3xl font-serif font-black text-[#D42B2B] mb-2">₪{p}</p>
              <p className={`text-sm ${popular ? "text-zinc-400" : "text-zinc-500"}`}>{d}</p>
            </div>
          ))}
        </div>
        <p className="text-zinc-400 text-xs">המחירים אינם כוללים מע&quot;מ (18%)</p>
      </section>

      <section className="py-10 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-xl font-bold mb-6">משלבים בועות עם</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {otherAttractions.map(({ href, label, desc }) => (
            <Link key={href} href={href} className="group flex flex-col gap-2 p-5 bg-zinc-50 border border-zinc-200 rounded-xl hover:border-zinc-900 transition-all text-center">
              <span className="font-bold text-sm text-zinc-900 group-hover:text-[#D42B2B] transition-colors">{label}</span>
              <span className="text-zinc-400 text-xs">{desc}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">רוצים בועות באירוע?</h2>
        <p className="text-zinc-400 mb-6">שלחו תאריך ואירוע — נחזור עם הצעה.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">058-7-555-456 וואטסאפ</Link>
          <Link href="/attractions" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">כל האטרקציות</Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <div className="flex justify-center py-6 border-t border-zinc-100">
        <ShareButton title="בועות סבון לאירועים. קסם שכולם נגעים בו." />
      </div>

      <RelatedPages
        title="אטרקציות נוספות"
        pages={[
          { label: "עשן כבד לחתונה", href: "/attractions/wedding-smoking-machine", desc: "משלים בועות לאפקט כפול" },
          { label: "זיקוקים קרים", href: "/attractions/cold-fireworks", desc: "ניצוצות לריקוד הסלואו" },
          { label: "DJ לאירועים", href: "/events/dj-events", desc: "המוזיקה שמכניסה הכל להקשר" },
        ]}
      />
    </div>
  );
}
