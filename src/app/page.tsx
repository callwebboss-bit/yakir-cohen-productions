import { SITE_URL } from "@/lib/site-url";
import React from "react";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import GoogleReviewsEmbed from "@/components/embeds/GoogleReviewsEmbed";
import ElfsightInstagramFeed from "@/components/embeds/ElfsightInstagramFeed";
import {
  HeroSection,
  ServiceGrid,
  LegacyTimeline,
  EquipmentMarquee,
  ProcessSteps,
  CTABanner,
  SearchBar
} from "@/components/sections";

const HOME_IMAGES = {
  portrait: "/assets/images/recording-studio/יקיר כהן הפקות באולפן.webp",
  workStudio: "/assets/images/recording-studio/אולפן ההקלטה יקיר כהן.webp",
  workPodcast: "/assets/images/podcast/אולפן פודקאסט - יקיר כהן הפקות.webp",
  workEvents: "/assets/images/cold-fireworks/זיקוקים קרים לחופה.webp",
} as const;

export const metadata: Metadata = {
  title: "אולפן הקלטות במודיעין | הקלטה, פודקאסט, אונליין ואירועים",
  description:
    "יקיר כהן הפקות — אולפן במודיעין להקלטת שירים וברכות, הפקת פודקאסט, שירותי עריכת קול אונליין, DJ ואטרקציות. מבנה ברור משיחה ראשונה ועד קבצים מוכנים.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "יקיר כהן הפקות | אולפן הקלטות במודיעין",
    description:
      "הקלטה, מיקס, פודקאסט, שירותים דיגיטליים ואירועים — תהליך מסודר ותוצאה מקצועית.",
    url: SITE_URL,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "יקיר כהן הפקות",
    url: SITE_URL,
    description:
      "אולפן הקלטות במודיעין, שירותי עריכת קול אונליין, DJ ואטרקציות לאירועים.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "יקיר כהן הפקות",
    url: SITE_URL,
    image: `${SITE_URL}/assets/images/logo.png`,
    description:
      "אולפן הקלטות והפקות במודיעין — הקלטה, מיקס, פודקאסט, שירותים אונליין וציוד לאירועים.",
    telephone: "+972-58-7555456",
    address: {
      "@type": "PostalAddress",
      streetAddress: "קניון עזריאלי",
      addressLocality: "מודיעין",
      postalCode: "71700",
      addressCountry: "IL",
    },
    sameAs: [
      "https://www.instagram.com/yakir.cohen.official",
      "https://www.youtube.com/user/kikosh",
      "https://www.facebook.com/dj.yakir.cohen",
      "https://www.tiktok.com/@yakir.cohen.offical",
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={homeSchema} />

      <HeroSection
        title="יקיר כהן הפקות"
        subtitle="המקום שבו סאונד אגדי פוגש דיוק מודרני. בית ההפקה וההקלטות המוביל במודיעין."
        ctaText="כניסה לאולפן"
        ctaLink="/studio"
        backgroundImage={HOME_IMAGES.workStudio}
      />

      <div className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-4xl">
           <SearchBar />
        </div>
      </div>

      <EquipmentMarquee />

      <ServiceGrid />

      <LegacyTimeline />

      <section className="bg-white py-24 border-y border-zinc-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <ProcessSteps />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-zinc-50 border-t border-zinc-200" aria-labelledby="home-google-reviews-heading">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-10 px-1 text-start">
            <h2 id="home-google-reviews-heading" className="font-sans text-3xl md:text-4xl font-black uppercase tracking-tighter text-balance mb-3">
              מה אומרים עלינו
            </h2>
            <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">
               אמנים ואנשי מקצוע כבר בחרו
            </p>
          </div>
          <GoogleReviewsEmbed />
        </div>
      </section>

      <CTABanner
        title="מוכנים להתחיל בפרויקט?"
        subtitle="צרו קשר היום לייעוץ ראשוני ללא התחייבות ובואו נפיח חיים בחזון שלכם."
      />

      <section className="py-16 md:py-24 bg-white border-t border-zinc-200" aria-labelledby="home-instagram-heading">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-10 px-1 text-start">
            <h2 id="home-instagram-heading" className="font-sans text-3xl md:text-4xl font-black uppercase tracking-tighter text-balance mb-3">
              בתוך האולפן
            </h2>
            <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">
              עקבו אחרינו באינסטגרם לעדכונים
            </p>
          </div>
          <ElfsightInstagramFeed />
        </div>
      </section>
    </div>
  );
}
