import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import {
  PricingTable,
  VideoSection,
  FeatureList,
  ProcessSteps,
  CTABanner,
  SocialShare,
} from '@/components/sections';
import { SectionWrapper, Eyebrow } from "@/components/sections/_shared";

export const metadata: Metadata = {
  title: "DJ לאירועים — חתונות, בר מצווה ואירועים פרטיים | יקיר כהן הפקות",
  description:
    "DJ מקצועי לחתונה מ-12,650 ₪, בר/בת מצווה מ-7,500 ₪. מודיעין ואזור המרכז. ציוד מקצועי, שירי כניסה, ריקוד סלואו — שולטים בכל רגע.",
  alternates: { canonical: `${SITE_URL}/events/dj-events` },
  openGraph: {
    title: "DJ לאירועים | יקיר כהן הפקות",
    description: "חתונה מ-12,650 ₪, בר מצווה מ-7,500 ₪. מודיעין ואזור המרכז.",
    url: `${SITE_URL}/events/dj-events`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "DJ לאירועים — יקיר כהן הפקות",
  "description": "שירותי DJ מקצועי לחתונות, בר/בת מצווה ואירועים פרטיים. מ-7,500 ₪.",
  "provider": {
    "@type": "LocalBusiness",
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
    "itemListElement": [
      { "@type": "Offer", "name": "DJ לחתונה", "price": "12650", "priceCurrency": "ILS" },
      { "@type": "Offer", "name": "DJ לבר/בת מצווה", "price": "7500", "priceCurrency": "ILS" },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "כמה עולה DJ לחתונה?",
      "acceptedAnswer": { "@type": "Answer", "text": "DJ לחתונה מ-12,650 ₪ כולל ציוד מלא, שירי כניסה, ריקוד סלואו ותיאום מוסיקלי מלא. לפרטים — צרו קשר." },
    },
    {
      "@type": "Question",
      "name": "מה כלול בחבילת DJ לבר מצווה?",
      "acceptedAnswer": { "@type": "Answer", "text": "DJ לבר/בת מצווה מ-7,500 ₪ כולל ציוד מקצועי, מוזיקה לכל שלבי האירוע ותיאום מלא עם הצוות." },
    },
    {
      "@type": "Question",
      "name": "האם DJ יקיר כהן עובד עם מנגינות ספציפיות?",
      "acceptedAnswer": { "@type": "Answer", "text": "כן. נבנה יחד רשימת שירים מותאמת לכם — שירי כניסה לחופה, ריקוד סלואו, שירי ריקודים. הכל בתיאום מלא." },
    },
  ],
};

const DJ_TIERS = [
  {
    name: "DJ לבר/בת מצווה",
    price: "7,500",
    tag: null,
    includes: ["ציוד הגברה ותאורה", "מוזיקה לכל שלבי האירוע", "תיאום מלא עם ההורים", "שירים לפי בקשה"],
    missing: ["שירי כניסה מופקים", "עמדת לד פרימיום"],
    cta: "בדקו זמינות",
  },
  {
    name: "DJ לחתונה",
    price: "12,650",
    tag: "הכי נבחר",
    includes: ["הפקה מוזיקלית מלאה", "שירי כניסה וסלואו", "ציוד ותאורה היקפית", "גיבוי ציוד מלא", "תיאום מול אולם"],
    missing: [],
    cta: "מתאים לי",
  },
];

export default function DJEventsPage() {
  return (
    <main dir="rtl" className="flex flex-col bg-surface">
      <StructuredData data={schema} />
      <StructuredData data={faqSchema} />

      <SectionWrapper dark pad="py-24">
        <div className="text-center">
          <Eyebrow muted>יקיר כהן הפקות · תקליטן לאירועים</Eyebrow>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 mt-4"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            DJ לאירועים.
            <br />
            <span className="text-[#D42B2B]">כי המוזיקה היא מה שנשאר.</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            חתונה, בר מצווה, אירוע פרטי. אנחנו מטפלים בכל הרגעים המוזיקליים — מהכניסה עד הריקוד האחרון.
          </p>
        </div>
      </SectionWrapper>

      <FeatureList
        features={[
          { icon: '🎧', title: "20+ שנות ניסיון", description: "אירועים ממגוון תרבויות ומסורות. יודעים לקרוא כל קהל." },
          { icon: '🔊', title: "ציוד מקצועי", description: "ציוד ראשי ועתודה מלאה. לא מסתמכים על המזל." },
          { icon: '🤝', title: "תיאום מלא", description: "עובדים עם כל ספקי האירוע — צלם, קייטרינג, אולם." },
          { icon: '🪄', title: "AI בזמן אמת", description: "שילוב טכנולוגיה חכמה למיקסים מושלמים ומדויקים." },
          { icon: '💃', title: "ניהול רחבה", description: "אנחנו יודעים מתי להרים ומתי לתת לרגע לדבר." },
          { icon: '✨', title: "אטרקציות", description: "אפשרות לשלב זיקוקים, עשן ולד בחבילה אחת." },
        ].map(f => ({ ...f, icon: <span className="text-xl">{f.icon}</span> }))}
      />

      <VideoSection
        videoSrc="https://www.youtube.com/watch?v=TF8DcK6M6jw"
        title="איך אנחנו מנהלים את המוזיקה באירוע שלכם"
      />

      <PricingTable tiers={DJ_TIERS} />

      <ProcessSteps
        steps={[
          { title: 'פגישת היכרות', description: 'יושבים על הקפה, מבינים את הסגנון שלכם ושל האורחים.' },
          { title: 'בניית פלייליסט', description: 'בוחרים שירי כניסה, סלואו ודגשים מוזיקליים.' },
          { title: 'תיאום ספקים', description: 'אנחנו מדברים עם האולם והצלמים כדי שהכל יזרום.' },
          { title: 'האירוע עצמו', description: 'אנחנו שם מהרגע הראשון ועד שאחרון האורחים הולך.' },
        ]}
      />

      <CTABanner />

      <SectionWrapper className="bg-white">
        <div className="flex justify-center">
          <SocialShare title="DJ לאירועים - יקיר כהן הפקות" />
        </div>
      </SectionWrapper>
    </main>
  );
}
