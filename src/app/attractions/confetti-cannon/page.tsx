import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import ShareButton from "@/components/ShareButton";
import { BLUR_DATA_URL } from "@/lib/blur";

export const metadata: Metadata = {
  title: "קונפטי לאירועים — תותחי קונפטי לחתונות ובר מצווה | יקיר כהן הפקות",
  description:
    "תותחי קונפטי לחתונות, בר/בת מצווה וימי הולדת — פיצוץ של שמחה בדיוק ברגע הנכון. צבעים לפי האירוע. חלק מחבילות האטרקציות מ-1,750 ₪.",
  alternates: { canonical: "https://www.yakircohen.com/attractions/confetti-cannon" },
  openGraph: {
    title: "קונפטי לאירועים | יקיר כהן הפקות",
    description: "תותחי קונפטי — פיצוץ שמחה בצבעים של האירוע שלכם. מ-1,750 ₪.",
    url: "https://www.yakircohen.com/attractions/confetti-cannon",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "תותחי קונפטי לאירועים — יקיר כהן הפקות",
  "description": "תותחי קונפטי לחתונות ואירועים — פיצוץ שמחה בדיוק ברגע הנכון. מ-1,750 ₪.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "יקיר כהן הפקות",
    "telephone": "+972-58-7555456",
    "address": { "@type": "PostalAddress", "addressLocality": "מודיעין-מכבים-רעות", "addressCountry": "IL" },
  },
  "offers": { "@type": "Offer", "price": "1750", "priceCurrency": "ILS" },
};

const moments = [
  { emoji: "🎊", t: "פיצוץ הפתעה", d: "ספירה לאחור, פיצוץ קונפטי — כולם קופצים, כולם מצלמים." },
  { emoji: "🥂", t: "ריקוד ראשון", d: "קונפטי שנופל בדיוק כשהשיר מגיע לשיא. תמונה שנשארת לנצח." },
  { emoji: "🎂", t: "חיתוך עוגה", d: "פיצוץ ורוד, לבן או בצבעי האירוע — בדיוק ברגע הנכון." },
  { emoji: "🏆", t: "הכרזה", d: "ספורטאי, עסקה גדולה, סיום — קונפטי מסמן שזה רגע מיוחד." },
];

const otherAttractions = [
  { href: "/attractions/cold-fireworks", label: "זיקוקים קרים", desc: "ניצוצות שלא שורפים" },
  { href: "/attractions/wedding-smoking-machine", label: "עשן כבד", desc: "אפקט ריקוד מרהיב" },
  { href: "/attractions/bubble-machine", label: "בועות סבון", desc: "רומנטי לכל גיל" },
  { href: "/attractions/giant-balloons", label: "בלוני ענק", desc: "אטרקציה ויזואלית" },
];

export default function ConfettiPage() {
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
          קונפטי לאירועים.
          <br />
          <span className="text-[#D42B2B]">פיצוץ של שמחה.</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8">
          תותחי קונפטי בצבעים שבוחרים. בדיוק ברגע הנכון. חלק מחבילות האטרקציות.
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
            { src: "/assets/images/confetti/Confetti%20Canon%20Blast.webp", alt: "פיצוץ תותח קונפטי בחתונה — יקיר כהן הפקות" },
            { src: "/assets/images/confetti/Colorful%20Confetti.webp", alt: "קונפטי צבעוני לאירוע שמחה" },
            { src: "/assets/images/confetti/Confetti%20at%20Ceremony.webp", alt: "קונפטי בטקס חתונה" },
            { src: "/assets/images/confetti/Confetti_Hit.webp", alt: "רגע פיצוץ קונפטי — תמונת שיא האירוע" },
            { src: "/assets/images/confetti/Colorful%20Confetti%20Shower%20(1).webp", alt: "גשם קונפטי צבעוני בבר מצווה" },
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
                  src="https://www.youtube.com/embed/SkBHvqC-S2Q"
                  title="הסבר על קונפטי"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <figcaption className="text-sm text-zinc-500 text-center mt-2">הסבר על קונפטי</figcaption>
            </figure>
            <figure>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900">
                <iframe
                  src="https://www.youtube.com/embed/btBx-cw16Js"
                  title="קונפטי בקליפ של חנן בן ארי"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <figcaption className="text-sm text-zinc-500 text-center mt-2">קונפטי בקליפ של חנן בן ארי — יקיר כהן הפקות</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Color customization */}
      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold mb-6">צבעים לפי האירוע שלכם</h2>
          <p className="text-zinc-500 leading-relaxed mb-8">
            הקונפטי מגיע בצבעים שבוחרים — לבן וזהב לחתונה, כחול ולבן לבר מצווה, ורוד לבת מצווה, ובכל צבע אחר לפי הצלחת. בזמן ההזמנה בוחרים את הצבעים.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["לבן + זהב", "כחול + לבן", "ורוד + לבן", "אדום + שחור", "צבעי קשת", "לפי בחירה"].map((color) => (
              <span key={color} className="bg-white border border-zinc-300 text-zinc-700 text-sm font-bold px-4 py-2 rounded-full">
                {color}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto w-full text-center">
        <h2 className="font-serif text-2xl font-bold mb-4">חבילות אטרקציות</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {[
            { t: "אטרקציה אחת", p: "1,750", d: "קונפטי בלבד" },
            { t: "חבילה כפולה", p: "3,200", d: "קונפטי + אטרקציה נוספת", popular: true },
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
        <h2 className="font-serif text-xl font-bold mb-6">משלבים קונפטי עם</h2>
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
        <h2 className="font-serif text-2xl font-bold mb-3">רוצים קונפטי באירוע?</h2>
        <p className="text-zinc-400 mb-6">שלחו תאריך, אירוע וצבעים מועדפים.</p>
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
        <ShareButton title="קונפטי לאירועים. פיצוץ של שמחה." />
      </div>

      <RelatedPages
        title="אטרקציות נוספות"
        pages={[
          { label: "זיקוקים קרים", href: "/attractions/cold-fireworks", desc: "ניצוצות שלא שורפים — לריקוד הסלואו" },
          { label: "עשן כבד", href: "/attractions/wedding-smoking-machine", desc: "אפקט עשן מרהיב לרצפת ריקוד" },
          { label: "DJ לאירועים", href: "/events/dj-events", desc: "המוזיקה שמכניסה את כל האפקטים להקשר" },
        ]}
      />
    </div>
  );
}
