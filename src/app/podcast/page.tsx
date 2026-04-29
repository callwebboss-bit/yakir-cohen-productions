import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import PodcastCalculator from '@/features/podcast/PodcastCalculator';

export const metadata: Metadata = {
  title: 'שירותי פודקאסט',
  description:
    'אולפן פודקאסטים B2B במודיעין. שלושה מסלולי Broadcast Quality — Audio, Video ו-Full Social Machine. נגיש בין ירושלים לתל אביב.',
  alternates: {
    canonical: 'https://www.yakircohen.com/podcast',
  },
  openGraph: {
    title: 'שירותי פודקאסט | יקיר כהן הפקות',
    description:
      'Broadcast Quality. המקום שבו מומחים הופכים לאוטוריטה. אולפן פודקאסטים מקצועי במודיעין.',
    url: 'https://www.yakircohen.com/podcast',
    images: [
      {
        url: 'https://www.yakircohen.com/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp',
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
    telephone: '+972-52-8701918',
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

const TAGS = ['Audio-Only', 'Multi-Cam Video', 'Full Social Machine', 'Content Repurposing'];

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <StructuredData data={podcastSchema} />

      {/* Hero */}
      <header className="bg-white border-b border-zinc-100 text-center py-14 px-4">
        <p className="text-[11px] font-bold uppercase tracking-[1.4px] text-zinc-400 mb-5 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-zinc-200" aria-hidden="true" />
          יקיר כהן הפקות · מודיעין
          <span className="inline-block w-5 h-px bg-zinc-200" aria-hidden="true" />
        </p>

        <h1
          className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-3"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          Broadcast Quality.
          <br />
          <span className="text-[#D42B2B]">המקום שבו מומחים הופכים לאוטוריטה.</span>
        </h1>

        <p className="text-[#6B6560] text-base max-w-sm mx-auto mb-6 leading-relaxed">
          הפודקאסט שלי ייצר נוכחות, אמון ולידים. אני דואג לכל השאר.
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="border border-zinc-200 px-2.5 py-1 rounded text-[11px] font-semibold text-zinc-500 bg-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-[11px] text-zinc-400">כל המחירים אינם כוללים מע&quot;מ (18%)</p>
      </header>

      {/* Calculator */}
      <section className="py-10">
        <p className="text-[10px] font-black uppercase tracking-[1.2px] text-zinc-400 text-center mb-6">
          בחרו מסלול
        </p>
        <PodcastCalculator />
      </section>
    </div>
  );
}
