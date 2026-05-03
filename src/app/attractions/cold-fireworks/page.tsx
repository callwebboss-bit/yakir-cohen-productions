import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import ShareButton from "@/components/ShareButton";
import { BLUR_DATA_URL } from "@/lib/blur";

export const metadata: Metadata = {
  title: "זיקוקים קרים לאירועים — ניצוצות בטוחים לכל מקום | יקיר כהן הפקות",
  description:
    "זיקוקים קרים לחתונות, בר/בת מצווה ואירועים — ניצוצות קרים שבטוחים לכל מקום סגור. אפקט מרהיב לריקוד הסלואו ולכניסה לחופה. חלק מחבילות האטרקציות מ-1,750 ₪.",
  alternates: { canonical: "https://www.yakircohen.com/attractions/cold-fireworks" },
  openGraph: {
    title: "זיקוקים קרים לאירועים | יקיר כהן הפקות",
    description: "ניצוצות קרים, בטוחים לכל מקום. מ-1,750 ₪.",
    url: "https://www.yakircohen.com/attractions/cold-fireworks",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "זיקוקים קרים לאירועים — יקיר כהן הפקות",
  "description": "זיקוקים קרים לחתונות ואירועים — ניצוצות שבטוחים לכל מקום סגור. מ-1,750 ₪.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "יקיר כהן הפקות",
    "telephone": "+972-58-7555456",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "מודיעין-מכבים-רעות",
      "addressCountry": "IL",
    },
  },
  "offers": { "@type": "Offer", "price": "1750", "priceCurrency": "ILS" },
};

const moments = [
  { emoji: "💃", t: "ריקוד הסלואו", d: "ניצוצות שמתפרצים בדיוק בשיא הרגש. הרגע שכולם מצלמים." },
  { emoji: "🚪", t: "כניסה לחופה", d: "מסדרון ניצוצות לאורחים — חתן וכלה שנכנסים בתוך אש קרה." },
  { emoji: "🎂", t: "חיתוך עוגה", d: "ניצוצות בדיוק ברגע שחותכים — רגע קטן שהופך לתמונה גדולה." },
  { emoji: "🎉", t: "כניסת החתן", d: "כניסה דרמטית עם ניצוצות משני צדדים — נשכרת לנצח." },
];

const safetyPoints = [
  "טמפרטורת הניצוצות — קרים לגמרי, לא שורפים",
  "מאושר לשימוש בחללים סגורים כגון אולמות",
  "לא משאיר עשן ולא מפעיל גלאי עשן",
  "מופעל ע\"י טכנאי מוסמך בלבד",
  "ציוד מבוטח ועומד בתקני בטיחות",
];

const otherAttractions = [
  { href: "/attractions/wedding-smoking-machine", label: "עשן כבד", desc: "אפקט עשן מרהיב לריקוד" },
  { href: "/attractions/bubble-machine", label: "בועות סבון", desc: "רומנטי ומרגש לכל גיל" },
  { href: "/attractions/confetti-cannon", label: "קונפטי", desc: "פיצוץ של שמחה" },
  { href: "/attractions/giant-balloons", label: "בלוני ענק", desc: "אטרקציה ויזואלית" },
];

export default function ColdFireworksPage() {
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
          זיקוקים קרים.
          <br />
          <span className="text-[#D42B2B]">ניצוצות שלא שורפים. רגע שנשאר.</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8">
          בטוחים לכל חלל סגור. לא מפעילים גלאי עשן. מרהיבים לצילום. חלק מחבילות האטרקציות.
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

      {/* When to use */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">לאיזה רגע?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {moments.map(({ emoji, t, d }) => (
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

      {/* Gallery */}
      <section className="py-4 px-6 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {[
            { src: "/assets/images/cold-fireworks/Cold%20Spark%20Entrance%20Effect.webp", alt: "זיקוקים קרים בכניסה לחופה — ניצוצות מרהיבים באולם אירועים" },
            { src: "/assets/images/cold-fireworks/Cold%20Spark%20Machine%20-%20Close-up.webp", alt: "מכונת זיקוקים קרים — Cold Sparkular מקרוב" },
            { src: "/assets/images/cold-fireworks/Cold%20Sparkler%20Entrance.webp", alt: "כניסה לחופה עם זיקוקים קרים — יקיר כהן הפקות מודיעין" },
            { src: "/assets/images/cold-fireworks/Sparklers%20Stage%20Setup.webp", alt: "הכנת זיקוקים קרים על הבמה לאירוע" },
            { src: "/assets/images/cold-fireworks/Sparklers%20on%20Dance%20Floor.webp", alt: "ניצוצות קרים על רצפת הריקוד לריקוד הסלואו" },
          ].map(({ src, alt }) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-xl bg-zinc-900">
              <Image src={src} alt={alt} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
            </div>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-8">ראו בפועל</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900">
                <iframe
                  src="https://www.youtube.com/embed/FMZY-Ck0clo"
                  title="הזיקוקים הקרים שלנו"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <figcaption className="text-sm text-zinc-500 text-center mt-2">הזיקוקים הקרים שלנו</figcaption>
            </figure>
            <figure>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900">
                <iframe
                  src="https://www.youtube.com/embed/PRHjvcsZqLU"
                  title="ככה נראים על במה"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <figcaption className="text-sm text-zinc-500 text-center mt-2">ככה נראים על במה</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-10">בטיחות — למה "קר" חשוב?</h2>
          <p className="text-zinc-500 text-center mb-8 leading-relaxed">
            זיקוקים קרים (Cold Sparklers / Sparkular) שונים לחלוטין מזיקוקים חמים. הניצוצות יוצאים בטמפרטורה נמוכה — לא שורפים, לא מסוכנים, ולא מפעילים מערכות כיבוי אש. מאושרים לשימוש בתוך אולמות אירועים.
          </p>
          <ul className="flex flex-col gap-3 max-w-lg mx-auto">
            {safetyPoints.map((pt) => (
              <li key={pt} className="flex items-center gap-3 justify-end">
                <span className="text-zinc-700 text-sm">{pt}</span>
                <CheckCircle2 size={16} className="text-[#D42B2B] shrink-0" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full text-center">
        <h2 className="font-serif text-2xl font-bold mb-4">חבילות אטרקציות</h2>
        <p className="text-zinc-500 mb-10">זיקוקים קרים הם חלק ממכלול. שלבו עם אטרקציות נוספות לחוויה מלאה.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            { t: "אטרקציה אחת", p: "1,750", d: "זיקוקים קרים בלבד" },
            { t: "חבילה כפולה", p: "3,200", d: "זיקוקים + אטרקציה נוספת", popular: true },
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

      {/* Other attractions mesh */}
      <section className="py-10 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-xl font-bold mb-6">אטרקציות שמשתלבות עם זיקוקים קרים</h2>
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
        <h2 className="font-serif text-2xl font-bold mb-3">רוצים זיקוקים קרים באירוע?</h2>
        <p className="text-zinc-400 mb-6">שלחו תאריך ואירוע — נחזור עם הצעה.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            058-7-555-456 וואטסאפ
          </Link>
          <Link href="/attractions" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            כל האטרקציות
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <div className="flex justify-center py-6 border-t border-zinc-100">
        <ShareButton title="זיקוקים קרים. ניצוצות שלא שורפים. רגע שנשאר." />
      </div>

      <RelatedPages
        title="אטרקציות נוספות"
        pages={[
          { label: "עשן כבד לחתונה", href: "/attractions/wedding-smoking-machine", desc: "משלים זיקוקים לאפקט כפול" },
          { label: "קונפטי", href: "/attractions/confetti-cannon", desc: "פיצוץ שמחה לכל גיל" },
          { label: "DJ לאירועים", href: "/events/dj-events", desc: "מוזיקה שמכניסה את האפקט להקשר" },
        ]}
      />
    </div>
  );
}
