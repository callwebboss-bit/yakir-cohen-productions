import { SITE_URL } from "@/lib/site-url";
import React from "react";
import Link from "next/link";
import { Mic, Volume2, Music, Radio, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";
import WorkCard from "@/components/WorkCard";
import ShareButton from "@/components/ShareButton";
import RelatedPages from "@/components/RelatedPages";
import { BLUR_DATA_URL } from "@/lib/blur";

// Sections Library
import { SectionWrapper, Eyebrow, Btn } from "@/components/sections/_shared";
import FeatureList from "@/components/sections/FeatureList";
import PricingTable from "@/components/sections/PricingTable";
import ProcessSteps from "@/components/sections/ProcessSteps";

const STUDIO_HERO = "/assets/images/recording-studio/אולפן ההקלטה יקיר כהן.webp";
const STUDIO_WORK = "/assets/images/recording-studio/מתחם יקיר כהן הפקות.webp";
const PODCAST_WORK = "/assets/images/podcast/אולפן פודקאסט - יקיר כהן הפקות.webp";

export const metadata: Metadata = {
  title: "אולפן הקלטות במודיעין | הקלטת שירים והפקה",
  description: "אולפן הקלטות מקצועי במודיעין. שירים, פודקאסטים, מיקס, מאסטרינג וליווי מלא בתוך מקום אחד מסודר.",
  alternates: {
    canonical: `${SITE_URL}/studio`,
  },
  openGraph: {
    title: "אולפן הקלטות במודיעין",
    description: "אולפן הקלטות מקצועי במודיעין עם ליווי מלא, מיקס ומאסטרינג.",
    url: `${SITE_URL}/studio`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%94%D7%A7%D7%9C%D7%98%D7%94-%D7%99%D7%A7%D7%99%D7%A8-%D7%9B%D7%94%D7%9F.webp`,
        width: 1200,
        height: 630,
        alt: "אולפן ההקלטות של יקיר כהן במודיעין",
      },
    ],
  },
};

const studioSchema = {
  "@context": "https://schema.org",
  "@type": "MusicRecordingStudio",
  name: "יקיר כהן הפקות",
  image: `${SITE_URL}/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%94%D7%A7%D7%9C%D7%98%D7%94-%D7%99%D7%A7%D7%99%D7%A8-%D7%9B%D7%94%D7%9F.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "רחוב היובל 15",
    addressLocality: "מודיעין-מכבים-רעות",
    addressRegion: "מרכז",
    postalCode: "7170000",
    addressCountry: "IL",
  },
  url: `${SITE_URL}/studio`,
};

export default function StudioPage() {
  return (
    <div className="flex flex-col">
      <StructuredData data={studioSchema} />

      <section className="relative min-h-[80vh] flex items-center justify-center bg-zinc-900 border-b border-white/10 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={STUDIO_HERO}
            alt="אולפן ההקלטות של יקיר כהן במודיעין"
            fill
            priority
            className="w-full h-full object-cover opacity-40"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-zinc-900" />
        </div>

        <div className="relative z-10 text-center flex flex-col items-center gap-8 max-w-4xl px-6 py-20">
          <div className="inline-flex items-center gap-2 bg-[#D42B2B] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            אולפן במודיעין
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
            סאונד מדויק.
            <br />
            עבודה שמחזיקה גם אחרי הסשן.
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl leading-relaxed">
            שירים, פודקאסטים, מיקס ומאסטרינג בתוך אולפן מסודר, עם אוזן אחת על התוצאה ואוזן שנייה על מי שנמצא מולנו.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Btn asChild>
              <Link href="#services">לשירותי האולפן</Link>
            </Btn>
            <Btn variant="ghost" dark asChild>
              <Link href="/contact?topic=studio">קביעת שיחה</Link>
            </Btn>
          </div>
        </div>
      </section>

      <FeatureList
        features={[
          {
            icon: <Mic size={20} />,
            title: 'הקלטה מדויקת',
            description: 'שירים, ברכות וקריינות בחדר אקוסטי מסודר עם ציוד פרימיום.',
          },
          {
            icon: <Volume2 size={20} />,
            title: 'מיקס ומאסטרינג',
            description: 'ניקוי, איזון ועומק. יוצאים עם תוצאה שמוכנה לשידור.',
          },
          {
            icon: <Music size={20} />,
            title: 'הפקה ועיבוד',
            description: 'ליווי אמנותי משלב הרעיון ועד לעיבוד מוזיקלי מלא.',
          },
          {
            icon: <Radio size={20} />,
            title: 'הקלטת פודקאסט',
            description: 'עמדת פודקאסט ייעודית עם עריכה והכנה להפצה.',
          },
        ]}
      />

      <ProcessSteps
        steps={[
          {
            title: 'תכנון וייעוץ',
            description: 'מבינים מה אתם צריכים — משיר אישי ועד פודקאסט עסקי.',
          },
          {
            title: 'יום ההקלטה',
            description: 'עבודה באולפן עם ליווי מקצועי של יקיר והצוות.',
          },
          {
            title: 'עריכה ומיקס',
            description: 'הופכים את חומרי הגלם למוצר סופי, נקי ומרשים.',
          },
          {
            title: 'מסירה סופית',
            description: 'קבלת הקבצים בכל הפורמטים הנדרשים.',
          }
        ]}
      />

      <SectionWrapper className="bg-white">
        <div className="flex justify-between items-end mb-12">
          <div>
            <Eyebrow>תיק עבודות</Eyebrow>
            <h2 className="font-serif text-4xl font-bold text-right mt-2">עבודות נבחרות</h2>
            <p className="text-zinc-500 mt-2 text-right">תמונות מתוך האולפן והעבודה בפועל.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <WorkCard title="האולפן الראשי" category="הקלטה והפקה" image={STUDIO_WORK} />
          <WorkCard title="עמדת פודקאסט" category="פודקאסט ועסקים" image={PODCAST_WORK} />
        </div>
      </SectionWrapper>

      <PricingTable
        tiers={[
          {
            name: 'הקלטת שיר',
            price: '990',
            tag: null,
            includes: ['הקלטה בחדר אקוסטי', 'טכנאי סאונד מקצועי', 'תיקון זיופים', 'מיקס מוכן למסירה'],
            missing: [],
            cta: 'הזמן הקלטה',
          },
          {
            name: 'שיר + קליפ 4K',
            price: '2,800',
            tag: 'הכי נבחר',
            includes: ['הכל מחבילת השיר', 'צילום קליפ 4K', 'עריכת וידאו', 'מסירה דיגיטלית מלאה'],
            missing: [],
            cta: 'בואו נתקדם',
          },
          {
            name: 'הפקה מלאה',
            price: '7,800',
            tag: 'פרימיום',
            includes: ['זמן אולפן גמיש', 'הפקה ועיבוד', 'קליפ 4K פרימיום', 'ליווי אישי מלא'],
            missing: [],
            cta: 'דברו איתנו',
          }
        ]}
      />

      <div className="flex justify-center py-6 border-t border-zinc-100">
        <ShareButton title="אולפן ההקלטות" />
      </div>

      <RelatedPages
        title="מסלולי אולפן קשורים"
        pages={[
          { label: "הקלטת שיר במודיעין", href: "/studio/recording-song-modiin", desc: "הקלטה, תיקון זיופים, מיקס ומסירה" },
          { label: "אולפן הקלטות בירושלים", href: "/studio/studio-jerusalem", desc: "פתרון קרוב ללקוחות מירושלים והסביבה" },
          { label: "מחירון אולפן", href: "/studio/pricing", desc: "חבילות הקלטה, קליפ והפקה מלאה" },
        ]}
      />
    </div>
  );
}

function PricingCard({
  title,
  price,
  unit,
  features,
  href,
  isPopular,
}: {
  title: string;
  price: string;
  unit: string;
  features: string[];
  href: string;
  isPopular?: boolean;
}) {
  return (
    <div className={`relative p-10 rounded-2xl transition-colors flex flex-col min-h-[500px] ${isPopular ? "bg-zinc-900 text-white border border-zinc-900 shadow-2xl md:scale-105 z-10" : "bg-white border border-zinc-200 hover:border-black shadow-sm"}`}>
      {isPopular && (
        <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-xs font-black tracking-widest whitespace-nowrap">
          הכי מבוקש
        </div>
      )}
      <div className="mb-10 border-b border-zinc-100 pb-8 h-32 flex flex-col justify-center text-right">
        <h3 className="font-serif text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline justify-end gap-1">
          <span className="text-4xl font-serif font-black">{price} ש"ח</span>
          <span className={`text-sm font-bold ${isPopular ? "text-zinc-400" : "text-zinc-500"}`}>/ {unit}</span>
        </div>
      </div>
      <ul className="flex flex-col gap-5 flex-grow">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-4 justify-end text-right">
            <span className="text-sm font-medium leading-tight">{f}</span>
            <CheckCircle2 size={18} className="text-brand-red shrink-0" />
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={`w-full py-4 rounded font-bold mt-10 transition-colors text-center ${isPopular ? "bg-brand-red text-white hover:bg-white hover:text-black" : "border border-black hover:bg-black hover:text-white"}`}
      >
        {isPopular ? "בואו נתקדם" : "לפרטים נוספים"}
      </Link>
    </div>
  );
}
