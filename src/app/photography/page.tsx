import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import PhotographyCalculator from '@/features/photography/PhotographyCalculator';
import StudioRecordsSVG from '@/components/StudioRecordsSVG';

export const metadata: Metadata = {
  title: 'צילום בוטיק — Studio Lumière',
  description:
    'סטודיו לומייר — צילום בוטיק באירועים. תעריף שקוף: 980 ₪ לשעת צלם. שלושה מסלולים: המהות, הסיפור המלא, המורשת. AI Glow — ריטוש מאסטר וקליפ AI.',
  alternates: {
    canonical: `${SITE_URL}/photography`,
  },
  openGraph: {
    title: 'צילום בוטיק | יקיר כהן הפקות',
    description: 'צרו את הסיפור המושלם שלכם. תעריף אחיד ושקוף: 980 ₪ לשעת צלם.',
    url: `${SITE_URL}/photography`,
  },
};

const photoSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'צילום בוטיק — Studio Lumière',
  provider: {
    '@type': 'LocalBusiness',
    name: 'יקיר כהן הפקות',
    telephone: '+972587555456',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'מודיעין-מכבים-רעות',
      addressCountry: 'IL',
    },
  },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '980',
      priceCurrency: 'ILS',
      unitText: 'שעה',
    },
  },
};

const TAGS = ['צילום סטילס', 'וידאו 4K', 'AI Glow', 'מגנטים Fine-Art', 'ריטוש מאסטר'];

export default function PhotographyPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <StructuredData data={photoSchema} />

      {/* Dynamic Glassmorphism Hero */}
      <div className="relative mb-16 rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <StudioRecordsSVG />
        </div>
        <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-md p-12 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4 italic text-white">צילום בוטיק</h1>
          <p className="text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
            צרו את הסיפור המושלם שלכם. תעריף אחיד ושקוף: 980 ₪ לשעת צלם.
          </p>
        </div>
      </div>

      {/* Hero */}
      <header className="bg-white border-b border-zinc-100 text-center py-14 px-4">
        <p className="text-[11px] font-bold uppercase tracking-[1.4px] text-zinc-400 mb-5 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-zinc-200" aria-hidden="true" />
          Studio Lumière · יקיר כהן הפקות
          <span className="inline-block w-5 h-px bg-zinc-200" aria-hidden="true" />
        </p>

        <h1
          className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-3"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          dir="rtl"
        >
          צרו את{' '}
          <span className="text-[#8B0000]">הסיפור המושלם</span>{' '}
          שלכם
        </h1>

        <p className="text-zinc-500 text-base max-w-sm mx-auto mb-2 leading-relaxed" dir="rtl">
          תעריף אחיד ושקוף. 980 ₪ לשעת צלם, ללא הפתעות, ניתן לפריסה ל-12 תשלומים.
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-4 mt-5">
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
          בנו את החבילה שלכם
        </p>
        <PhotographyCalculator />
      </section>
    </div>
  );
}
