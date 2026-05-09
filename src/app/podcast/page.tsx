import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import PodcastCalculator from '@/features/podcast/PodcastCalculator';
import StudioRecordsSVG from '@/components/StudioRecordsSVG';
import RelatedPages from '@/components/RelatedPages';

// Sections Library
import { SectionWrapper, Eyebrow } from "@/components/sections/_shared";

export const metadata: Metadata = {
  title: 'הפקת פודקאסט מקצועית במודיעין | יקיר כהן הפקות',
  description:
    'הפקת פודקאסט מקצועית — הקלטה, עריכה והפצה. שלוש חבילות מ-950 ₪. אולפן מודיעין, נגיש מכל הארץ. ציוד Sphere L22 מקצועי.',
  alternates: {
    canonical: `${SITE_URL}/podcast`,
  },
  openGraph: {
    title: 'הפקת פודקאסט מקצועית | יקיר כהן הפקות',
    description:
      'הפקת פודקאסט מקצועית במודיעין — הקלטה, עריכה והפצה. מ-950 ₪.',
    url: `${SITE_URL}/podcast`,
    images: [
      {
        url: `${SITE_URL}/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp`,
        width: 1200,
        height: 630,
        alt: 'אולפן פודקאסטים במודיעין - יקיר כהן הפקות',
      },
    ],
  },
};

const podcastSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'שירותי פודקאסט — יקיר כהן הפקות',
  provider: {
    '@type': 'LocalBusiness',
    name: 'יקיר כהן הפקות',
    telephone: '+972587555456',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'רחוב היובל 15',
      addressLocality: 'מודיעין-מכבים-רעות',
      postalCode: '7170000',
      addressCountry: 'IL',
    },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'חבילות פודקאסט',
    itemListElement: [
      { '@type': 'Offer', name: 'Audio Podcast', price: '950', priceCurrency: 'ILS' },
      { '@type': 'Offer', name: 'Video Podcast', price: '1650', priceCurrency: 'ILS' },
      { '@type': 'Offer', name: 'Full Social Machine', price: '2800', priceCurrency: 'ILS' },
    ],
  },
};

const TAGS = ['הקלטה בלבד', 'וידאו מולטי-קאם', 'מכונת תוכן סושיאל', 'עריכה והפצה'];

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] flex flex-col">
      <StructuredData data={podcastSchema} />

      {/* Dynamic Glassmorphism Hero */}
      <SectionWrapper containerClass="max-w-7xl mx-auto px-4 md:px-0">
        <div className="relative rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0">
            <StudioRecordsSVG />
          </div>
          <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-md p-12 text-center w-full h-full flex flex-col justify-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 italic text-white">הפקת פודקאסט מקצועית</h1>
            <p className="text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
              הפודקאסט שלי ייצר נוכחות, אמון ולידים. אני דואג לכל השאר.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Content Header */}
      <SectionWrapper className="bg-white border-y border-zinc-100 text-center" pad="py-16 md:py-20">
        <Eyebrow muted>יקיר כהן הפקות · מודיעין</Eyebrow>

        <h1
          className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-4 mt-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          הפקת פודקאסט מקצועית במודיעין.
          <br />
          <span className="text-[#D42B2B]">המקום שבו מומחים הופכים לאוטוריטה.</span>
        </h1>

        <p className="text-[#6B6560] text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          הפודקאסט שלי ייצר נוכחות, אמון ולידים. אני דואג לכל השאר.
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="border border-zinc-200 px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-500 bg-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-[11px] text-zinc-400">כל המחירים אינם כוללים מע"מ (18%)</p>
      </SectionWrapper>

      {/* Calculator */}
      <SectionWrapper pad="py-12 md:py-16">
        <div className="text-center mb-10">
          <Eyebrow>בחירת מסלול</Eyebrow>
          <h2 className="font-serif text-3xl font-bold mt-2">מחשבון עלויות הפקה</h2>
        </div>
        <PodcastCalculator />
      </SectionWrapper>

      <RelatedPages
        title="מסלולי פודקאסט קשורים"
        pages={[
          { label: "הפקת פודקאסט", href: "/podcast/podcast-production", desc: "תכנון, הקלטה, עריכה והפצה" },
          { label: "אולפן פודקאסט", href: "/podcast/podcast-studio", desc: "הקלטת אודיו ווידאו בסביבה מקצועית" },
          { label: "ציוד פודקאסט", href: "/podcast/podcast-equipment", desc: "מיקרופונים, מצלמות ותאורה להפקה" },
        ]}
      />
    </div>
  );
}
