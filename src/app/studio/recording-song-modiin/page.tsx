import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconClock,
  IconDownload,
  IconMic,
  IconMusic,
  IconStar,
} from "@/components/icons";
import StructuredData from "@/components/StructuredData";
import AudioCompare from "@/components/AudioCompare";
import RelatedPages from "@/components/RelatedPages";
import {
  VideoSection,
  BeforeAfterSlider,
  CTABanner,
  SocialShare,
} from "@/components/sections";
import { BLUR_DATA_URL } from "@/lib/blur";
import StudioVsHomeComparison from "@/components/StudioVsHomeComparison";

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

const stepIcons = [IconClock, IconMic, IconDownload] as const;

const services = [
  {
    icon: <IconMic size={24} aria-hidden />,
    title: "שיר לחתונה",
    desc: "לוקחים שיר שאוהבים ומכניסים לו את הרגש שלכם. כניסה לחופה, ריקוד סלואו, מתנה לבן/בת הזוג.",
  },
  {
    icon: <IconMusic size={24} aria-hidden />,
    title: "ברכות ואירועים",
    desc: "ברכה לבר מצווה, שיר לסיום כיתה, ברכה להורים. הדבר האמיתי שנשאר אחרי כל אירוע.",
  },
  {
    icon: <IconStar size={24} aria-hidden />,
    title: "שיר מקורי",
    desc: "כתבתם מילים? יש לכם לחן? מביאים אותו לאולפן ויוצאים עם שיר שנשמע כמו ברדיו.",
  },
];

const features = [
  "חדר הקלטה אקוסטי ומטופל",
  "ליווי טכנאי לאורך כל הסשן",
  "תיקון זיופים ומיקס כלולים",
  "מסירה מהירה של הקבצים",
];

const steps = [
  { n: "01", title: "שיחה קצרה ותיאום", desc: "מבינים מה הסגנון, בוחרים תאריך וסוג מסלול." },
  { n: "02", title: "הקלטה באולפן", desc: "נכנסים לתהליך ממוקד עם ליווי מלא עד טייק נכון." },
  { n: "03", title: "עיבוד ומסירה", desc: "תיקון, מיקס והעברת קבצים מוכנים לשיתוף." },
];

const sectionSlides = [
  { src: "/assets/images/recording-studio/1.webp", alt: "האולפן הראשי במודיעין" },
  { src: "/assets/images/recording-studio/2.webp", alt: "חדר הקלטה אקוסטי מקצועי" },
  { src: "/assets/images/recording-studio/3.webp", alt: "עמדת עריכה וסאונד" },
];

const galleryItems = [
  { src: "/assets/images/recording-studio/1.webp", alt: "אולפן הקלטות יקיר כהן הפקות מודיעין" },
  { src: "/assets/images/recording-studio/2.webp", alt: "חדר הקלטות אקוסטי — אולפן מקצועי מודיעין" },
  { src: "/assets/images/recording-studio/3.webp", alt: "ציוד הקלטה מקצועי — מיקרופון ומוניטורים" },
  { src: "/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F%20%D7%94%D7%94%D7%A7%D7%9C%D7%98%D7%94%20%D7%99%D7%A7%D7%99%D7%A8%20%D7%9B%D7%94%D7%9F.webp", alt: "אולפן ההקלטה יקיר כהן — ראיה כללית" },
  { src: "/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F%20%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA%20%D7%9E%D7%A7%D7%A6%D7%95%D7%A2%D7%99.webp", alt: "אולפן הקלטות מקצועי מודיעין — יקיר כהן הפקות" },
];

const sectionTiers = [
  {
    name: "הקלטת שיר",
    price: "990",
    tag: null,
    includes: ["סשן באולפן", "תיקון זיופים", "מיקס מהיר", "MP3 + WAV"],
    missing: ["קליפ וידאו מלא"],
    cta: "התחל הקלטה",
  },
  {
    name: "שיר + קליפ",
    price: "2,800",
    tag: "הכי נבחר",
    includes: ["כלול מסלול הקלטה", "צילום 4K", "עריכת קליפ", "הכנה לדיגיטל"],
    missing: [],
    cta: "רוצה חבילה מלאה",
  },
  {
    name: "שיר מקורי",
    price: "3,900",
    tag: null,
    includes: ["כתיבה/הלחנה בסיסית", "הקלטה מלאה", "מיקס + מאסטר", "ליווי הפקה"],
    missing: [],
    cta: "בואו ניצור שיר",
  },
  {
    name: "פרויקט מתקדם",
    price: "8,500",
    tag: "פרימיום",
    includes: ["כמה סשנים", "מפיק צמוד", "עיבוד מתקדם", "תוצרים לכל הפלטפורמות"],
    missing: [],
    cta: "דברו איתנו",
  },
];

const storyChapters = [
  { id: "hero", label: "פתיחה" },
  { id: "services", label: "מה מקליטים" },
  { id: "compare", label: "בית מול אולפן" },
  { id: "pricing", label: "מחירון" },
  { id: "faq", label: "שאלות נפוצות" },
];

const testimonials = [
  {
    name: "עדי ויואב",
    context: "שיר כניסה לחופה",
    quote: "באנו עם רעיון קטן ויצאנו עם שיר שכל האורחים דיברו עליו.",
  },
  {
    name: "משפחת כהן",
    context: "בר מצווה",
    quote: "הילד יצא מחויך, והסאונד היה ברמה שאי אפשר לטעות בה.",
  },
  {
    name: "שני",
    context: "שיר מקורי",
    quote: "ליווי מדויק באולפן. הרגשתי שיש מי שמוציא ממני את המקסימום.",
  },
];

export default function RecordingSongModiinPage() {
  return (
    <div className="flex flex-col bg-surface" dir="rtl">
      <StructuredData data={schema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={videoSchema} />

      {/* Cloud Design Section: Hero */}
      <header
        id="hero"
        className="cloud-reveal border-b border-zinc-200 bg-gradient-to-b from-white to-surface px-6 pb-24 pt-32"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-brand-red font-semibold tracking-wide">
            יקיר כהן הפקות · מודיעין
          </p>
          <h1 className="max-w-4xl font-serif text-5xl font-black leading-[1.08] text-zinc-900 md:text-6xl">
            הקלטת שירים מקצועית במודיעין
            <span className="block text-brand-red">מ-990 ₪ · תוצאה ביום אחד</span>
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-zinc-600 md:text-lg">
            שיר לחתונה, ברכה לבר מצווה או שיר מקורי. תהליך ברור, ליווי אישי ותוצר נקי ומוכן.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact/whatsapp"
              aria-label="קביעת סשן הקלטה בוואטסאפ"
              className="btn-cloud-primary brand-shadow-card"
            >
              קבעו סשן בוואטסאפ
            </Link>
            <Link
              href="/studio/pricing"
              aria-label="מעבר למחירון האולפן המלא"
              className="btn-cloud-secondary brand-shadow-card"
            >
              מחירון מלא
            </Link>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="cloud-card">
              <p className="text-[11px] text-zinc-500">זמן סשן ממוצע</p>
              <p className="font-serif text-2xl font-black text-zinc-900">2-3 שעות</p>
            </div>
            <div className="cloud-card">
              <p className="text-[11px] text-zinc-500">מחיר התחלה</p>
              <p className="font-serif text-2xl font-black text-brand-red">990 ₪</p>
            </div>
            <div className="cloud-card">
              <p className="text-[11px] text-zinc-500">מענה בוואטסאפ</p>
              <p className="font-serif text-2xl font-black text-zinc-900">מהיר</p>
            </div>
          </div>
        </div>
      </header>
      <section className="sticky top-0 z-20 border-y border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-6 py-4 text-xs">
          {storyChapters.map((chapter, index) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 font-bold text-zinc-700 transition-colors duration-200 hover:border-zinc-400 hover:text-zinc-900"
            >
              {index + 1}. {chapter.label}
            </a>
          ))}
        </div>
      </section>

      <main className="flex flex-col">
        {/* Cloud Design Section: Feature highlights */}
        <section className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="cloud-card cloud-card--lg grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-brand-red font-semibold tracking-wide">למה אצלנו</p>
              <h2 className="mt-6 font-serif text-3xl font-extrabold text-zinc-900">
                הקלטה מקצועית בלי כאב ראש
              </h2>
              <p className="mt-6 text-zinc-600">
                תהליך ברור, ליווי אישי ותוצאה נקייה. בדיוק מה שצריך כדי לצאת עם שיר שמרגיש נכון.
              </p>
            </div>
            <ul className="grid gap-3">
              {features.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cloud Design Section: Process */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="section-heading--accent">
            <h2>איך זה עובד?</h2>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {steps.map((step, index) => {
              const StepIcon = stepIcons[index] ?? IconMic;
              return (
                <article key={step.n} className="cloud-card">
                  <div className="icon-cloud mb-4">
                    <StepIcon size={24} aria-hidden />
                  </div>
                  <span className="inline-flex rounded-full bg-brand-red/10 px-3 py-1 text-sm font-semibold text-brand-red">
                    {step.n}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-zinc-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.desc}</p>
                </article>
              );
            })}
          </div>
        </section>

        <div className="py-24">
          <VideoSection
            videoSrc="https://www.youtube.com/watch?v=r8Xk2_m9FJ8"
            thumbnailSrc="/assets/images/recording-studio/אולפן ההקלטה יקיר כהן.webp"
            thumbnailAlt="אולפן ההקלטות של יקיר כהן במודיעין"
          />
        </div>
        <section className="py-24">
          <BeforeAfterSlider />
        </section>

        {/* Cloud Design Section: Pricing */}
        <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="section-heading--accent">
            <p className="text-brand-red font-semibold tracking-wide">מחירים שקופים</p>
            <h2>מחירון הקלטה</h2>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
            {sectionTiers.map((tier) => (
              <article key={tier.name} className="cloud-card relative">
                {tier.tag ? (
                  <span className="absolute -top-3 right-6 rounded-full bg-brand-red px-3 py-1 text-[10px] font-black text-white">
                    {tier.tag}
                  </span>
                ) : null}
                <h3 className="font-serif text-xl font-bold text-zinc-900">{tier.name}</h3>
                <p className="mt-2 text-4xl font-black text-brand-red">₪{tier.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                  {tier.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <Link
                  href="/contact/whatsapp"
                  className="btn-cloud-primary brand-shadow-card mt-6 inline-flex w-full justify-center text-center text-sm"
                >
                  {tier.cta}
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Cloud Design Section: Services */}
        <section id="services" className="mx-auto w-full max-w-6xl border-t border-zinc-100 px-6 py-24">
          <div className="section-heading--accent">
            <p className="text-brand-red font-semibold tracking-wide">סוגי פרויקטים</p>
            <h2>מה מקליטים אצלנו?</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {services.map(({ icon, title, desc }) => (
              <article key={title} className="cloud-card cloud-card--lg transition-colors duration-200 hover:border-zinc-300">
                <div className="icon-cloud mb-5">{icon}</div>
                <h3 className="font-serif text-xl font-bold text-zinc-900">{title}</h3>
                <p className="mt-6 text-sm leading-relaxed text-zinc-600">{desc}</p>
              </article>
            ))}
          </div>
        </section>
        {/* Cloud Design Section: Studio vs Home */}
        <section id="compare" className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="section-heading--accent">
            <p className="text-brand-red font-semibold tracking-wide">ביטחון החלטה</p>
            <h2>מה ההבדל לעומת הקלטה ביתית?</h2>
          </div>
          <div className="mt-10">
            <StudioVsHomeComparison />
          </div>
        </section>

        {/* Cloud Design Section: Social proof */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="cloud-card cloud-card--lg">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-brand-red font-semibold tracking-wide">הוכחה חברתית</p>
                <h2 className="mt-2 font-serif text-2xl font-extrabold text-zinc-900 md:text-3xl">
                  מה לקוחות מספרים אחרי הסשן
                </h2>
              </div>
              <div className="flex items-center gap-1 text-brand-red" aria-label="דירוג לקוחות">
                <IconStar size={14} aria-hidden />
                <IconStar size={14} aria-hidden />
                <IconStar size={14} aria-hidden />
                <IconStar size={14} aria-hidden />
                <IconStar size={14} aria-hidden />
                <span className="ms-2 text-xs font-bold text-zinc-700">4.9/5</span>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
                >
                  <p className="text-sm leading-relaxed text-zinc-700">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="mt-4 text-xs font-bold text-zinc-900">{testimonial.name}</p>
                  <p className="text-xs text-zinc-500">{testimonial.context}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 grid gap-8 text-center md:grid-cols-3 md:gap-10">
              <div className="rounded-2xl border border-zinc-200 bg-white py-5">
                <p className="font-serif text-2xl font-black text-zinc-900">1,400+</p>
                <p className="text-xs text-zinc-500">שירים שהוקלטו באולפן</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white py-5">
                <p className="font-serif text-2xl font-black text-zinc-900">20+</p>
                <p className="text-xs text-zinc-500">שנות ניסיון מקצועי</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white py-5">
                <p className="font-serif text-2xl font-black text-zinc-900">24h</p>
                <p className="text-xs text-zinc-500">עד קבלת תוצר ברוב המסלולים</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Design Section: Lightweight carousel (scroll-snap, no heavy JS) */}
        <section className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-serif text-2xl font-extrabold text-zinc-900 md:text-3xl">תמונות מהאולפן</h2>
            <p className="text-xs text-zinc-500">
              גלילה אופקית במובייל
              <span className="ms-2 font-medium text-zinc-600" dir="ltr">
                ← scroll
              </span>
            </p>
          </div>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [-webkit-overflow-scrolling:touch]">
            {galleryItems.map(({ src, alt }) => (
              <article
                key={alt}
                className="relative aspect-[4/5] w-[72%] shrink-0 snap-start overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900 md:w-[33%]"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </article>
            ))}
          </div>
        </section>

        {/* Cloud Design Section: Audio compare */}
        <section className="mx-auto w-full max-w-4xl px-6 py-24">
          <div className="cloud-card cloud-card--lg">
            <h2 className="mb-8 text-center font-serif text-2xl font-extrabold text-zinc-900 md:text-3xl">
              שמעו את ההבדל
            </h2>
            <AudioCompare />
          </div>
          <p className="mt-4 text-center text-xs text-zinc-400">
            הקלטה אמיתית מהאולפן — לפני ואחרי תיקון זיופים ומיקס
          </p>
        </section>

        {/* Cloud Design Section: Voice sample CTA */}
        <section className="mx-auto w-full max-w-3xl px-6 py-24">
          <div className="cloud-card flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-8">
            <div className="text-right">
              <p className="mb-1 font-bold text-zinc-900">לא בטוחים?</p>
              <p className="text-sm leading-relaxed text-zinc-500">
                שלחו הקלטה קצרה של 30 שניות בווטסאפ — נחזור עם המלצה אישית בחינם.
              </p>
            </div>
            <Link
              href="/contact/whatsapp"
              aria-label="שליחת דגימת קול בוואטסאפ"
              className="btn-cloud-primary brand-shadow-card shrink-0 whitespace-nowrap text-sm"
            >
              שלחו דגימת קול
            </Link>
          </div>
        </section>

        {/* Cloud Design Section: FAQ accordion */}
        <section id="faq" className="mx-auto w-full max-w-4xl border-t border-zinc-100 px-6 py-24">
          <div className="section-heading--accent mb-10">
            <h2>שאלות נפוצות</h2>
          </div>
          <div className="flex flex-col divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white px-2 md:px-4">
            {[
              { q: "כמה זמן לוקחת הקלטת שיר?", a: "סשן בסיסי נמשך 2-3 שעות. הקובץ מועבר בסיום הסשן או תוך 24 שעות." },
              { q: "מה כולל המחיר של 990 ₪?", a: "הקלטה בחדר אקוסטי, טכנאי סאונד, תיקון זיופים ומיקס גמור. WAV ו-MP3." },
              { q: "האם צריך להגיע עם שיר מוכן?", a: "לא חייבים. אפשר להגיע עם רעיון ולעבוד עליו יחד באולפן. יש גם שירות כתיבת מילים." },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group px-3 py-4 open:bg-zinc-50 md:px-4 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-red">
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block text-brand-red transition-transform group-open:rotate-45">
                      +
                    </span>
                    {q}
                  </span>
                </summary>
                <p className="mt-3 pe-4 text-sm leading-relaxed text-zinc-700">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-4 text-left">
            <Link
              href="/about/faq"
              aria-label="מעבר לכל השאלות הנפוצות"
              className="border-b-2 border-brand-red pb-0.5 text-sm font-bold transition-colors hover:text-brand-red"
            >
              לכל השאלות הנפוצות ←
            </Link>
          </div>
        </section>

        <CTABanner />
        <SocialShare
          url={`${SITE_URL}/studio/recording-song-modiin`}
          title="הקלטת שירים מקצועית במודיעין"
        />
        <RelatedPages
          title="מסלולי הקלטה קשורים"
          pages={[
            { label: "שיר מקורי", href: "/studio/recording-song-modiin/original-song", desc: "פיתוח שיר מלא מרעיון להקלטה" },
            { label: "כתיבת ברכה", href: "/studio/recording-song-modiin/blessing-writing", desc: "עזרה בניסוח טקסט לאירוע" },
            { label: "שירות כתיבת שיר", href: "/studio/recording-song-modiin/songwriting-service", desc: "בניית מילים ולחן בהתאמה" },
          ]}
        />
      </main>
    </div>
  );
}
