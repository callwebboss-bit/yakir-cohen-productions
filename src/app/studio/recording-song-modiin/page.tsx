import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Mic, Music, Star } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import YouTube from "@/components/ui/YouTube";
import PriceReveal from "@/components/PriceReveal";
import AudioCompare from "@/components/AudioCompare";
import ShareButton from "@/components/ShareButton";
import RelatedPages from "@/components/RelatedPages";
import { BLUR_DATA_URL } from "@/lib/blur";

export const metadata: Metadata = {
  title: "הקלטת שירים מקצועית במודיעין | יקיר כהן הפקות — מ-990 ₪",
  description:
    "הקלטת שיר מקצועית במודיעין — 990 ₪ כולל טכנאי, תיקון זיופים ומיקס. שיר לחתונה, ברכות, שיר מקורי. נגיש מתל אביב וירושלים. תוצאה ביום אחד.",
  alternates: { canonical: `${SITE_URL}/studio/recording-song-modiin` },
  openGraph: {
    title: "הקלטת שירים במודיעין | יקיר כהן הפקות",
    description: "990 ₪ כולל הכל. שיר לחתונה, ברכות, שיר מקורי. תוצאה ביום אחד.",
    url: `${SITE_URL}/studio/recording-song-modiin`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "הקלטת שירים מקצועית — יקיר כהן הפקות",
  "description": "הקלטת שיר מקצועית במודיעין כולל טכנאי, תיקון זיופים ומיקס. מ-990 ₪.",
  "provider": {
    "@type": "MusicRecordingStudio",
    "name": "יקיר כהן הפקות",
    "telephone": "+972-58-7555456",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "עמק איילון 34/5",
      "addressLocality": "מודיעין-מכבים-רעות",
      "addressCountry": "IL",
    },
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "חבילות הקלטת שיר",
    "itemListElement": [
      { "@type": "Offer", "name": "הקלטת שיר בסיסית", "price": "990", "priceCurrency": "ILS" },
      { "@type": "Offer", "name": "שיר + קליפ 4K", "price": "2800", "priceCurrency": "ILS" },
    ],
  },
  "areaServed": ["מודיעין", "ירושלים", "תל אביב", "מרכז הארץ"],
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "הקלטת שיר מקצועית באולפן יקיר כהן הפקות מודיעין",
  "description": "סשן הקלטה באולפן יקיר כהן הפקות — מודיעין. מ-990 ₪ כולל טכנאי, תיקון זיופים ומיקס גמור.",
  "thumbnailUrl": "https://img.youtube.com/vi/r8Xk2_m9FJ8/maxresdefault.jpg",
  "uploadDate": "2024-01-01",
  "embedUrl": "https://www.youtube.com/embed/r8Xk2_m9FJ8",
  "url": "https://www.youtube.com/watch?v=r8Xk2_m9FJ8",
  "publisher": { "@type": "Organization", "name": "יקיר כהן הפקות", "url": `${SITE_URL}` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "כמה עולה הקלטת שיר?",
      "acceptedAnswer": { "@type": "Answer", "text": "הקלטת שיר מ-990 ₪ כולל טכנאי, תיקון זיופים ומיקס גמור." },
    },
    {
      "@type": "Question",
      "name": "כמה זמן לוקחת הקלטת שיר?",
      "acceptedAnswer": { "@type": "Answer", "text": "סשן הקלטה בסיסי נמשך 2-3 שעות. הקובץ המוכן מועבר בסיום הסשן או תוך 24 שעות." },
    },
    {
      "@type": "Question",
      "name": "האם מתאים גם למי שלא הקליט מעולם?",
      "acceptedAnswer": { "@type": "Answer", "text": "לחלוטין. הצוות מלווה אתכם מהכניסה עד לקובץ הגמור, ללא תלות בניסיון קודם." },
    },
  ],
};

const services = [
  { icon: <Mic size={24} />, title: "שיר לחתונה", desc: "לוקחים שיר שאוהבים ומכניסים לו את הרגש שלכם. כניסה לחופה, ריקוד סלואו, מתנה לבן/בת הזוג." },
  { icon: <Music size={24} />, title: "ברכות ואירועים", desc: "ברכה לבר מצווה, שיר לסיום כיתה, ברכה להורים. הדבר האמיתי שנשאר אחרי כל אירוע." },
  { icon: <Star size={24} />, title: "שיר מקורי", desc: "כתבתם מילים? יש לכם לחן? מביאים אותו לאולפן ויוצאים עם שיר שנשמע כמו ברדיו." },
];

const steps = [
  { n: "01", title: "תיאום ותכנון", desc: "שולחים הודעה, בוחרים תאריך. מספרים לנו מה רוצים להשיג." },
  { n: "02", title: "ההקלטה", desc: "מגיעים לאולפן, הצוות דואג לכל השאר. שרים, מקליטים, עד שזה מרגיש נכון." },
  { n: "03", title: "מקבלים את הקובץ", desc: "יוצאים עם WAV ו-MP3 מוכנים. תיקוני זיופים ומיקס כלולים במחיר." },
];

export default function RecordingSongModiinPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={videoSchema} />

      {/* Hero */}
      <header className="bg-zinc-900 text-white py-20 px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · מודיעין
        </p>
        <h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          הקלטת שירים מקצועית
          <br />
          <span className="text-[#D42B2B]">במודיעין. מ-990 ₪.</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          שיר לחתונה, ברכה לבר מצווה, שיר מקורי. יוצאים עם קובץ גמור ביום אחד.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            קבעו סשן בוואטסאפ
          </Link>
          <Link
            href="/studio/pricing"
            className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all"
          >
            מחירון מלא
          </Link>
        </div>
        <p className="text-zinc-500 text-xs mt-4">כל המחירים אינם כוללים מע&quot;מ</p>
      </header>

      {/* Services */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">
          מה מקליטים אצלנו?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon, title, desc }) => (
            <article
              key={title}
              className="bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col gap-4 hover:border-zinc-900 transition-all"
            >
              <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900">
                {icon}
              </div>
              <h3 className="font-serif text-xl font-bold">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Studio Gallery */}
      <section className="py-4 px-6 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {[
            { src: "/assets/images/recording-studio/1.webp", alt: "אולפן הקלטות יקיר כהן הפקות מודיעין" },
            { src: "/assets/images/recording-studio/2.webp", alt: "חדר הקלטות אקוסטי — אולפן מקצועי מודיעין" },
            { src: "/assets/images/recording-studio/3.webp", alt: "ציוד הקלטה מקצועי — מיקרופון ומוניטורים" },
            { src: "/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F%20%D7%94%D7%94%D7%A7%D7%9C%D7%98%D7%94%20%D7%99%D7%A7%D7%99%D7%A8%20%D7%9B%D7%94%D7%9F.webp", alt: "אולפן ההקלטה יקיר כהן — ראיה כללית" },
            { src: "/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F%20%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA%20%D7%9E%D7%A7%D7%A6%D7%95%D7%A2%D7%99.webp", alt: "אולפן הקלטות מקצועי מודיעין — יקיר כהן הפקות" },
          ].map(({ src, alt }) => (
            <div key={alt} className="relative aspect-square overflow-hidden rounded-xl bg-zinc-900">
              <Image src={src} alt={alt} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="py-10 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-2">
            ככה נראית הקלטת שיר לחתונה
          </h2>
          <p className="text-center text-zinc-500 mb-6 text-sm">אווירה מהאולפן — שיר שהפך לרגע שנשאר לנצח</p>
          <YouTube
            url="https://www.youtube.com/watch?v=r8Xk2_m9FJ8"
            title="הקלטת שיר לחתונה — יקיר כהן הפקות"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">איך זה עובד?</h2>
        <div className="flex flex-col gap-6">
          {steps.map(({ n, title, desc }) => (
            <div key={n} className="flex items-start gap-6 p-6 bg-white border border-zinc-100 rounded-2xl">
              <span className="font-serif text-4xl font-black text-[#D42B2B] opacity-60 shrink-0">{n}</span>
              <div>
                <h3 className="font-serif text-lg font-bold mb-1">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-zinc-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-10">מחירון הקלטה</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-white/20 rounded-2xl p-8 flex flex-col gap-4">
              <h3 className="font-serif text-xl font-bold">הקלטת שיר</h3>
              <PriceReveal price="990 ₪" service="הקלטת שיר" dark />
              <ul className="flex flex-col gap-2 text-sm text-zinc-300 text-right">
                {["הקלטה בחדר אקוסטי", "טכנאי סאונד מקצועי", "תיקון זיופים", "מיקס גמור"].map((f) => (
                  <li key={f} className="flex items-center gap-2 justify-end">
                    <span>{f}</span>
                    <CheckCircle2 size={14} className="text-[#D42B2B] shrink-0" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-2 border-[#D42B2B] rounded-2xl p-8 flex flex-col gap-4 relative">
              <span className="absolute -top-3 right-1/2 translate-x-1/2 bg-[#D42B2B] text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                הכי פופולרי
              </span>
              <h3 className="font-serif text-xl font-bold">שיר + קליפ 4K</h3>
              <PriceReveal price="מ-2,800 ₪" service="שיר + קליפ 4K" dark />
              <ul className="flex flex-col gap-2 text-sm text-zinc-300 text-right">
                {["הכל מחבילת הקלטת שיר", "צילום קליפ 4K", "עריכת וידאו מקצועית", "מסירה דיגיטלית מלאה"].map((f) => (
                  <li key={f} className="flex items-center gap-2 justify-end">
                    <span>{f}</span>
                    <CheckCircle2 size={14} className="text-[#D42B2B] shrink-0" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-zinc-500 text-xs mt-6">המחירים אינם כוללים מע&quot;מ (18%)</p>
        </div>
      </section>

      {/* Audio compare */}
      <section className="py-10 px-6 max-w-3xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold mb-6 text-center">שמעו את ההבדל</h2>
        <AudioCompare />
        <p className="text-xs text-zinc-400 text-center mt-3">
          הקלטה אמיתית מהאולפן — לפני ואחרי תיקון זיופים ומיקס
        </p>
      </section>

      {/* Voice sample CTA */}
      <section className="py-4 px-6 max-w-3xl mx-auto w-full">
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right">
            <p className="font-bold text-zinc-900 mb-1">לא בטוחים?</p>
            <p className="text-zinc-500 text-sm leading-relaxed">
              שלחו הקלטה קצרה של 30 שניות בווטסאפ — נחזור עם המלצה אישית בחינם.
            </p>
          </div>
          <Link
            href="/contact/whatsapp"
            className="shrink-0 bg-zinc-900 text-white px-6 py-2.5 rounded font-bold text-sm hover:bg-[#D42B2B] transition-colors whitespace-nowrap"
          >
            שלחו דגימת קול
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold mb-8">שאלות נפוצות</h2>
        <dl className="flex flex-col divide-y divide-zinc-100">
          {[
            { q: "כמה זמן לוקחת הקלטת שיר?", a: "סשן בסיסי נמשך 2-3 שעות. הקובץ מועבר בסיום הסשן או תוך 24 שעות." },
            { q: "מה כולל המחיר של 990 ₪?", a: "הקלטה בחדר אקוסטי, טכנאי סאונד, תיקון זיופים ומיקס גמור. WAV ו-MP3." },
            { q: "האם צריך להגיע עם שיר מוכן?", a: "לא חייבים. אפשר להגיע עם רעיון ולעבוד עליו יחד באולפן. יש גם שירות כתיבת מילים." },
          ].map(({ q, a }) => (
            <div key={q} className="py-6">
              <dt className="font-bold mb-2">{q}</dt>
              <dd className="text-zinc-500 text-sm leading-relaxed">{a}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4 text-left">
          <Link href="/about/faq" className="text-sm font-bold border-b-2 border-[#D42B2B] pb-0.5 hover:text-[#D42B2B] transition-colors">
            לכל השאלות הנפוצות ←
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-zinc-50 border-t border-zinc-200 text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">מוכנים להקליט?</h2>
        <p className="text-zinc-500 mb-6">שלחו הודעה ונקבע תאריך שמתאים לכם.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            058-7-555-456 וואטסאפ
          </Link>
          <Link href="/studio/blessings" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
            עמוד ברכות
          </Link>
        </div>
      </section>

      <div className="flex justify-center py-6 border-t border-zinc-100">
        <ShareButton title="הקלטת שיר במודיעין" />
      </div>
      <RelatedPages
        title="מסלולי הקלטה קשורים"
        pages={[
          { label: "שיר מקורי", href: "/studio/recording-song-modiin/original-song", desc: "פיתוח שיר מלא מרעיון להקלטה" },
          { label: "כתיבת ברכה", href: "/studio/recording-song-modiin/blessing-writing", desc: "עזרה בניסוח טקסט לאירוע" },
          { label: "שירות כתיבת שיר", href: "/studio/recording-song-modiin/songwriting-service", desc: "בניית מילים ולחן בהתאמה" },
        ]}
      />
    </div>
  );
}
