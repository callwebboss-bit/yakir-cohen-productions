import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import StemSplitLoader from "./StemSplitLoader";

// ─── SEO ──────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "StemSplit AI - הפרדת ווקאל וכלים אונליין | אולפן יקיר כהן",
  description:
    "הפרידו שירים לווקאל ופלייבק באיכות הגבוהה ביותר בעזרת בינה מלאכותית. כלי מקצועי לאולפנים ויוצרי מוזיקה. מודיעין, כל הארץ.",
  keywords: [
    "הפרדת ערוצים בשיר AI",
    "Stem Splitter Online 2026",
    "אולפן מודיעין יקיר כהן",
    "הפרדת ווקאל",
    "vocal remover",
    "karaoke maker",
    "stem split",
    "פלייבק לשיר",
    "AI music separation",
  ],
  alternates: { canonical: "https://www.yakircohen.com/stemsplit" },
  openGraph: {
    title: "StemSplit AI - הפרדת ווקאל וכלים | יקיר כהן הפקות",
    description: "הפרידו כל שיר לווקאל ופלייבק מלא — בינה מלאכותית. כלי מקצועי לאולפנים ויוצרי מוזיקה.",
    url: "https://www.yakircohen.com/stemsplit",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

// ─── Schema ───────────────────────────────────────────────────────────────────
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "StemSplit AI — יקיר כהן הפקות",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  description: "כלי AI להפרדת ווקאל ופלייבק משירים. מאפשר ליוצרים ואולפנים לקבל ווקאל נקי ופלייבק מלא מכל קובץ אודיו.",
  url: "https://www.yakircohen.com/stemsplit",
  provider: {
    "@type": "LocalBusiness",
    name: "יקיר כהן הפקות",
    url: "https://www.yakircohen.com",
    telephone: "+972-58-7555456",
    address: {
      "@type": "PostalAddress",
      streetAddress: "עמק איילון 34/5",
      addressLocality: "מודיעין",
      addressCountry: "IL",
    },
  },
  offers: {
    "@type": "Offer",
    price: "29",
    priceCurrency: "ILS",
    description: "10 קרדיטים לחבילת Starter",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "כיצד להפריד ווקאל מפלייבק בעזרת StemSplit AI",
  description: "מדריך שלב אחר שלב להפרדת ערוצי אודיו בעזרת בינה מלאכותית",
  totalTime: "PT3M",
  step: [
    { "@type": "HowToStep", name: "העלו קובץ אודיו", text: "גררו קובץ MP3, WAV, FLAC או M4A לאזור ההעלאה, או הדביקו קישור URL לקובץ.", position: 1 },
    { "@type": "HowToStep", name: "לחצו על הפרד ערוצים", text: "לחצו על הכפתור ובינה המלאכותית תנתח את השיר ותפריד את הווקאל מהכלים.", position: 2 },
    { "@type": "HowToStep", name: "הורידו את הקבצים", text: "הורידו את קובץ הווקאל הנקי ואת קובץ הפלייבק המלא בנפרד.", position: 3 },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function StemSplitPage() {
  return (
    <div className="min-h-screen bg-[#0D0D14] text-white" dir="rtl">
      <StructuredData data={softwareSchema} />
      <StructuredData data={howToSchema} />

      {/*
        ── Hero — fully server-rendered, zero JS required ──────────────────────
        This section is the LCP candidate. It arrives as plain HTML → Google
        measures it instantly. No client bundle needed to display the H1.
      */}
      <section className="relative pt-28 pb-12 px-6 text-center overflow-hidden">
        {/* Background glow — pure CSS, no JS */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 600px 300px at 50% 120px, rgba(123,47,190,0.18) 0%, transparent 70%)",
          }}
        />

        {/* ── LCP element ── */}
        <h1
          className="text-5xl md:text-6xl font-black mb-4 leading-tight relative"
          style={{
            fontFamily: '"Frank Ruhl Libre", serif',
            background: "linear-gradient(135deg, #9B4FDE, #C9A84C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          StemSplit AI
        </h1>

        <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-8 relative">
          הפרידו כל שיר לווקאל נקי ופלייבק מלא — בבינה מלאכותית.
          <br className="hidden md:block" />
          כלי מקצועי לאולפנים, יוצרים ו-DJs.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-white/40 relative" aria-label="יתרונות השירות">
          {[
            "איכות הגבוהה ביותר",
            "עד 50MB לקובץ",
            "MP3 / WAV / FLAC",
            "מאובטח ופרטי",
          ].map((b) => (
            <span key={b} className="flex items-center gap-1.5">
              <span className="text-[#7B2FBE]" aria-hidden="true">✓</span>
              {b}
            </span>
          ))}
        </div>
      </section>

      {/*
        ── Interactive tool — loads after first paint ───────────────────────────
        dynamic({ ssr: false }) means no JS bundle for this component is sent
        before the page is visible. Upload, polling, and audio players all
        initialise only after the LCP hero is already painted.
      */}
      <StemSplitLoader />
    </div>
  );
}
