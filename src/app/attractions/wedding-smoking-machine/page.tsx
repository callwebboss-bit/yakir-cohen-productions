import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import ShareButton from "@/components/ShareButton";
import { BLUR_DATA_URL } from "@/lib/blur";

export const metadata: Metadata = {
  title: "עשן כבד לחתונה — אפקט ריקוד מרהיב | יקיר כהן הפקות",
  description:
    "עשן כבד לחתונה ולריקוד הסלואו — אפקט שנשאר על רצפת ריקוד ויוצר תמונות מדהימות. בטוח ומקצועי. חלק מחבילות האטרקציות מ-1,750 ₪.",
  alternates: { canonical: `${SITE_URL}/attractions/wedding-smoking-machine` },
  openGraph: {
    title: "עשן כבד לחתונה | יקיר כהן הפקות",
    description: "אפקט עשן כבד לריקוד הסלואו. מ-1,750 ₪.",
    url: `${SITE_URL}/attractions/wedding-smoking-machine`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "עשן כבד לחתונה — יקיר כהן הפקות",
  "description": "עשן כבד לריקוד הסלואו בחתונה — אפקט מרהיב שנשאר על רצפת הריקוד. מ-1,750 ₪.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "יקיר כהן הפקות",
    "telephone": "+972-58-7555456",
    "address": { "@type": "PostalAddress", "addressLocality": "מודיעין-מכבים-רעות", "addressCountry": "IL" },
  },
  "offers": { "@type": "Offer", "price": "1750", "priceCurrency": "ILS" },
};

const moments = [
  { emoji: "💃", t: "ריקוד הסלואו", d: "רגע האפקט הקלאסי — ריקוד ראשון בתוך ענן עשן. הצלם אוהב, הזוג אוהב, כולם אוהבים." },
  { emoji: "🚪", t: "כניסה לחופה", d: "חתן וכלה שנכנסים דרך ענן עשן — כניסה דרמטית שמתחילה את הערב בגדול." },
  { emoji: "🎭", t: "הכרזת זוג חתן-כלה", d: "רגע ההכרזה בסיום החופה — עשן שממלא את הבמה ויוצר תמונה בלתי נשכחת." },
  { emoji: "🏆", t: "כניסת הזוג לחתונה", d: "הזוג המחותן/ת נכנסים לאולם לפני הכניסה הגדולה — עם עשן שמציין את הרגע." },
];

const safetyPoints = [
  "עשן קר — לא חם, לא מסוכן",
  "לא מפעיל גלאי עשן (Dry Ice effect)",
  "נשאר על רצפת הריקוד בלבד",
  "מופעל ע\"י טכנאי מוסמך",
  "מאושר לשימוש בחללים סגורים",
];

const otherAttractions = [
  { href: "/attractions/cold-fireworks", label: "זיקוקים קרים", desc: "ניצוצות לריקוד הסלואו" },
  { href: "/attractions/bubble-machine", label: "בועות סבון", desc: "רומנטי ומרגש" },
  { href: "/attractions/confetti-cannon", label: "קונפטי", desc: "פיצוץ שמחה" },
  { href: "/attractions/giant-balloons", label: "בלוני ענק", desc: "אטרקציה ויזואלית" },
];

export default function WeddingSmokingMachinePage() {
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
          עשן כבד לחתונה.
          <br />
          <span className="text-[#D42B2B]">ריקוד שנשאר בתמונות.</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8">
          אפקט עשן שנשאר על רצפת הריקוד — לא עולה, לא מפריע. הצלם אוהב. הזוג אוהב. כולם אוהבים.
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
            { src: "/assets/images/heavy-smoke/%D7%A2%D7%A9%D7%9F%20%D7%9B%D7%91%D7%93%20%D7%91%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D.webp", alt: "עשן כבד לאירועים — יקיר כהן הפקות מודיעין" },
            { src: "/assets/images/heavy-smoke/%D7%9B%D7%A9%D7%9F%20%D7%9C%D7%A1%D7%9C%D7%95%D7%90%D7%95.webp", alt: "עשן כבד לריקוד הסלואו — אפקט מרהיב לחתונה" },
            { src: "/assets/images/heavy-smoke/%D7%90%D7%A4%D7%A9%D7%A8%D7%98%20%D7%A2%D7%A9%D7%9F%20%D7%9B%D7%91%D7%93%20%D7%91%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D.webp", alt: "אפשרויות עשן כבד לאירועים" },
            { src: "/assets/images/heavy-smoke/%D7%90%D7%98%D7%A8%D7%A7%D7%A6%D7%99%D7%94%20-%20%D7%A2%D7%A9%D7%9F%20%D7%A2%D7%91%D7%93%20%D7%9C%D7%90%D7%99%D7%A8%D7%95%D7%A2.webp", alt: "אטרקציית עשן כבד לאירוע" },
            { src: "/assets/images/heavy-smoke/%D7%9E%D7%9B%D7%95%D7%A0%D7%AA%20%D7%A7%D7%A8%D7%97%20%D7%99%D7%91%D7%A9%20%D7%9C%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D.webp", alt: "מכונת קרח יבש לאירועים — יקיר כהן הפקות" },
          ].map(({ src, alt }) => (
            <div key={alt} className="relative aspect-square overflow-hidden rounded-xl bg-zinc-900">
              <Image src={src} alt={alt} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
            </div>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-8">ראו בפועל</h2>
          <figure className="mb-6">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900">
              <iframe
                src="https://www.youtube.com/embed/O4MwVBjL2v8"
                title="עשן כבד לחתונה — ריקוד הסלואו"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <figcaption className="text-sm text-zinc-500 text-center mt-2">עשן כבד לחתונה — ריקוד הסלואו</figcaption>
          </figure>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: "tLxvSRgOwGM", caption: "הסבר על עשן כבד" },
              { id: "Hggvb8jmNU8", caption: "ככה זה נראה (הפרימיום)" },
              { id: "WYg81S29A-k", caption: "העשן הכבד הכי משודרג שלנו" },
            ].map(({ id, caption }) => (
              <figure key={id}>
                <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={caption}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
                <figcaption className="text-sm text-zinc-500 text-center mt-2">{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Safety section */}
      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-8">למה עשן כבד ולא עשן רגיל?</h2>
          <p className="text-zinc-500 text-center mb-8 leading-relaxed">
            עשן כבד (Low Fog / Dry Ice) שונה מעשן מכונת עשן רגיל — הוא נשאר על הרצפה, לא עולה לאוויר, לא מכסה את הפנים, ולא מפריע לנשימה. האפקט הוא ענן שמרחף בגובה הרגליים — ציורי ומיוחד.
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

      {/* Sub-page link */}
      <section className="py-10 px-6 max-w-4xl mx-auto w-full">
        <Link
          href="/attractions"
          className="flex items-center justify-between p-6 bg-zinc-900 text-white rounded-2xl hover:bg-zinc-800 transition-all group"
        >
          <span className="text-xs font-bold text-[#D42B2B] group-hover:translate-x-1 transition-transform">← </span>
          <div className="text-right">
            <p className="font-bold">עשן כבד לאירועים גדולים</p>
            <p className="text-zinc-400 text-sm">לאולמות גדולים — כמה מכונות בו-זמנית. כיסוי מלא לרחבת ריקוד ענקית.</p>
          </div>
        </Link>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto w-full text-center">
        <h2 className="font-serif text-2xl font-bold mb-4">חבילות אטרקציות</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {[
            { t: "אטרקציה אחת", p: "1,750", d: "עשן כבד בלבד" },
            { t: "חבילה כפולה", p: "3,200", d: "עשן + אטרקציה נוספת", popular: true },
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
        <h2 className="font-serif text-xl font-bold mb-6">משלבים עשן כבד עם</h2>
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
        <h2 className="font-serif text-2xl font-bold mb-3">רוצים עשן כבד בחתונה?</h2>
        <p className="text-zinc-400 mb-6">שלחו תאריך ומיקום האולם — נחזור עם הצעה.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">058-7-555-456 וואטסאפ</Link>
          <Link href="/attractions" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">כל האטרקציות</Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <div className="flex justify-center py-6 border-t border-zinc-100">
        <ShareButton title="עשן כבד לחתונה. ריקוד שנשאר בתמונות." />
      </div>

      <RelatedPages
        title="אטרקציות נוספות"
        pages={[
          { label: "זיקוקים קרים", href: "/attractions/cold-fireworks", desc: "משלים עשן כבד לאפקט כפול" },
          { label: "בועות סבון", href: "/attractions/bubble-machine", desc: "בועות שמשלימות ענן עשן" },
          { label: "DJ לחתונה", href: "/events/dj-events", desc: "ריקוד הסלואו שאתם תזכרו" },
        ]}
      />
    </div>
  );
}
