import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import StemSplitClient from "./StemSplitClient";

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
  alternates: {
    canonical: "https://www.yakircohen.com/stemsplit",
  },
  openGraph: {
    title: "StemSplit AI - הפרדת ווקאל וכלים | יקיר כהן הפקות",
    description:
      "הפרידו כל שיר לווקאל ופלייבק מלא — בינה מלאכותית. כלי מקצועי לאולפנים ויוצרי מוזיקה.",
    url: "https://www.yakircohen.com/stemsplit",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "StemSplit AI — יקיר כהן הפקות",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  description:
    "כלי AI להפרדת ווקאל ופלייבק משירים. מאפשר ליוצרים ואולפנים לקבל ווקאל נקי ופלייבק מלא מכל קובץ אודיו.",
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
    {
      "@type": "HowToStep",
      name: "העלו קובץ אודיו",
      text: "גררו קובץ MP3, WAV, FLAC או M4A לאזור ההעלאה, או הדביקו קישור URL לקובץ.",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "לחצו על הפרד ערוצים",
      text: "לחצו על הכפתור ובינה המלאכותית תנתח את השיר ותפריד את הווקאל מהכלים.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "הורידו את הקבצים",
      text: "הורידו את קובץ הווקאל הנקי ואת קובץ הפלייבק המלא בנפרד.",
      position: 3,
    },
  ],
};

export default function StemSplitPage() {
  return (
    <>
      <StructuredData data={softwareSchema} />
      <StructuredData data={howToSchema} />
      <StemSplitClient />
    </>
  );
}
