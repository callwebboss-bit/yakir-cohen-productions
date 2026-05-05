import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import ShareButton from "@/components/ShareButton";
import { BLUR_DATA_URL } from "@/lib/blur";

export const metadata: Metadata = {
  title: "בלוני ענק לאירועים — אטרקציה שעוצרת את הנשימה | יקיר כהן הפקות",
  description:
    "בלוני ענק לאירועים: חתונות, בר/בת מצווה, ימי הולדת. אטרקציה ויזואלית שכולם מצלמים. חלק מחבילות האטרקציות מ-1,750 ₪.",
  alternates: { canonical: `${SITE_URL}/attractions/giant-balloons` },
  openGraph: {
    title: "בלוני ענק לאירועים | יקיר כהן הפקות",
    description: "אטרקציה ויזואלית לאירועים — חלק מחבילות האטרקציות מ-1,750 ₪.",
    url: `${SITE_URL}/attractions/giant-balloons`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "בלוני ענק לאירועים — יקיר כהן הפקות",
  "description": "בלוני ענק לחתונות, בר/בת מצווה ואירועים. חלק מחבילות האטרקציות.",
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
  "offers": { "@type": "Offer", "price": "1750", "priceCurrency": "ILS", "description": "חבילת אטרקציה בודדת" },
};

const eventTypes = [
  { emoji: "💍", title: "חתונה", desc: "בלון ענק בכניסה, ליד עמדת הצילום, או כרקע לריקוד הסלואו. רגע שכולם מצלמים." },
  { emoji: "✡️", title: "בר/בת מצווה", desc: "בלון עם שם הבר/בת מצווה, בצבעי האירוע. אטרקציה שמדברת בלי מילים." },
  { emoji: "🎂", title: "יום הולדת", desc: "שלושה מטר בלון ושם הילד — פחות מדקה והכל מצלמים. פשוט עובד." },
  { emoji: "🎉", title: "אירוע פרטי", desc: "ימי הולדת לחברה, מסיבות סיום, אירועי קיץ. בלון ענק שמגדיר את המרחב." },
];

export default function GiantBalloonsPage() {
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
          בלוני ענק לאירועים.
          <br />
          <span className="text-[#D42B2B]">כולם עוצרים לצלם.</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          אטרקציה ויזואלית שיוצרת רגע. חלק מחבילות האטרקציות — מ-1,750 ₪.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            בדקו זמינות לתאריך
          </Link>
          <Link href="/attractions" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            כל האטרקציות
          </Link>
        </div>
      </header>

      {/* Event types */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">לאיזה אירוע?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eventTypes.map(({ emoji, title, desc }) => (
            <div key={title} className="flex items-start gap-5 p-7 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all">
              <span className="text-3xl shrink-0">{emoji}</span>
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-4 px-6 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {[
            { src: "/assets/images/giant-balloons/Giant%20Balloons%20Dance%20Floor.webp", alt: "בלוני ענק על רחבת הריקוד — יקיר כהן הפקות" },
            { src: "/assets/images/giant-balloons/Ballroom%20Close%20Up%20Decor.webp", alt: "עיצוב אולם עם בלוני ענק לאירוע" },
            { src: "/assets/images/giant-balloons/%D7%91%D7%9C%D7%95%D7%A0%D7%99-%D7%A2%D7%A0%D7%A7-%D7%9C%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D.webp", alt: "בלוני ענק לאירועים — חתונות ובר מצווה מודיעין" },
            { src: "/assets/images/giant-balloons/%D7%91%D7%9C%D7%95%D7%A0%D7%99%20%D7%A2%D7%A0%D7%A7%20%D7%9C%D7%A8%D7%97%D7%91%D7%94(1).webp", alt: "בלוני ענק ברחבה — אטרקציה ויזואלית לאירוע" },
            { src: "/assets/images/giant-balloons/%D7%91%D7%9C%D7%95%D7%A0%D7%99%20%D7%A2%D7%A0%D7%A7%20%D7%9C%D7%A8%D7%97%D7%91%D7%94.webp", alt: "בלון ענק בכניסה לחתונה" },
          ].map(({ src, alt }) => (
            <div key={alt} className="relative aspect-square overflow-hidden rounded-xl bg-zinc-900">
              <Image src={src} alt={alt} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">חבילות אטרקציות</h2>
          <p className="text-zinc-500 mb-10">בלוני ענק הם חלק ממכלול. שלבו עם אטרקציות נוספות לחוויה מלאה.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "אטרקציה אחת", p: "1,750", desc: "בלוני ענק בלבד" },
              { t: "חבילה כפולה", p: "3,200", desc: "בלוני ענק + אטרקציה נוספת", popular: true },
              { t: "חבילת 4+", p: "מ-5,500", desc: "4 אטרקציות + קליפ מתנה" },
            ].map(({ t, p, desc, popular }) => (
              <div key={t} className={`rounded-2xl p-7 border ${popular ? "bg-zinc-900 text-white border-zinc-700 md:scale-105" : "bg-white border-zinc-200"}`}>
                {popular && <span className="block text-xs font-black text-[#D42B2B] uppercase mb-2">הכי מבוקש</span>}
                <h3 className={`font-serif text-lg font-bold mb-1 ${popular ? "text-white" : "text-zinc-900"}`}>{t}</h3>
                <p className={`text-3xl font-serif font-black mb-2 text-[#D42B2B]`}>₪{p}</p>
                <p className={`text-sm ${popular ? "text-zinc-400" : "text-zinc-500"}`}>{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-zinc-400 text-xs mt-6">המחירים אינם כוללים מע&quot;מ (18%)</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">רוצים בלוני ענק באירוע?</h2>
        <p className="text-zinc-400 mb-6">שלחו את התאריך והאירוע — נחזור עם הצעה.</p>
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
        <ShareButton title="בלוני ענק לאירועים. כולם עוצרים לצלם." />
      </div>

      <RelatedPages
        title="אטרקציות נוספות"
        pages={[
          { label: "עשן כבד לחתונה", href: "/attractions/wedding-smoking-machine", desc: "אפקט עשן כבד לריקוד ולכניסה" },
          { label: "זיקוקים קרים", href: "/attractions/cold-fireworks", desc: "ניצוצות קרים — בטוחים לכל מקום" },
          { label: "DJ לאירועים", href: "/events/dj-events", desc: "מוזיקה מקצועית לכל האירוע" },
        ]}
      />
    </div>
  );
}
