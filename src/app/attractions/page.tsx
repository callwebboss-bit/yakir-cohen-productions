import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import AttractionsCalculator from "@/features/attractions/AttractionsCalculator";
import RelatedPages from "@/components/RelatedPages";
import AttractionsVisualImpact from "@/components/attractions/AttractionsVisualImpact";

export const metadata: Metadata = {
  title: "אטרקציות לאירועים | יקיר כהן הפקות — עשן כבד, זיקוקים קרים, קונפטי",
  description:
    "אטרקציות לאירועים: עשן כבד, זיקוקים קרים, קונפטי, בועות סבון ועוד. חבילה מ-1,750 ₪ — ב-4 אטרקציות קליפ היילייטס מתנה. מודיעין ואזור המרכז.",
  alternates: {
    canonical: `${SITE_URL}/attractions`,
  },
  openGraph: {
    title: "אטרקציות לאירועים | יקיר כהן הפקות",
    description: "עשן כבד, זיקוקים קרים, קונפטי, בועות סבון — חבילות מ-1,750 ₪",
    url: `${SITE_URL}/attractions`,
  },
};

const attractionsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "אטרקציות לאירועים — יקיר כהן הפקות",
  description:
    "הפקת אטרקציות ואפקטים פרימיום לאירועים — עשן כבד, זיקוקים קרים, תותחי קונפטי, תא הקלטה ועוד",
  telephone: "+972587555456",
  address: {
    "@type": "PostalAddress",
    addressLocality: "מודיעין-מכבים-רעות",
    addressCountry: "IL",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "חבילות אטרקציות",
    itemListElement: [
      { "@type": "Offer", name: "אטרקציה בודדת", price: "1750", priceCurrency: "ILS" },
      { "@type": "Offer", name: "חבילה כפולה", price: "3200", priceCurrency: "ILS" },
      { "@type": "Offer", name: "חבילה מורחבת", price: "4450", priceCurrency: "ILS" },
      {
        "@type": "Offer",
        name: "חבילת פרימיום 4+",
        price: "5500",
        priceCurrency: "ILS",
        description: "כולל קליפ היילייטס מתנה",
      },
    ],
  },
};

export default function AttractionsPage() {
  return (
    <div className="flex flex-col">
      <StructuredData data={attractionsSchema} />

      {/* Hero */}
      <header
        className="text-center py-14 px-4"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }}
        dir="rtl"
      >
        <p className="text-[11px] font-bold uppercase tracking-[1.4px] text-white/30 mb-5 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-white/20" aria-hidden="true" />
          פיק מומנטס · יקיר כהן הפקות
          <span className="inline-block w-5 h-px bg-white/20" aria-hidden="true" />
        </p>

        <h1
          className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          עצבו את{" "}
          <span className="text-[#B80000]">אטרקציות לאירועים</span>{" "}
          שישארו בזיכרון
        </h1>

        <p className="text-white/50 text-base max-w-sm mx-auto mb-6 leading-relaxed">
          בחרו אטרקציות, קבלו הצעה מיידית ושריינו תאריך. ב-4 אטרקציות תקבלו קליפ היילייטס מתנה.
        </p>

        <p className="text-[11px] text-white/30">כל המחירים אינם כוללים מע&quot;מ (18%)</p>
      </header>

      <AttractionsVisualImpact />

      <main>
        <AttractionsCalculator />
      </main>

      <RelatedPages
        title="אטרקציות ושירותי אירוע קשורים"
        pages={[
          { label: "עשן כבד לחתונה", href: "/attractions/wedding-smoking-machine", desc: "אפקט רחבה לריקוד סלואו וכניסה" },
          { label: "זיקוקים קרים", href: "/attractions/cold-fireworks", desc: "ניצוצות בטוחים לרגעי שיא" },
          { label: "צילום אירועים", href: "/photography", desc: "תיעוד מקצועי לאירועים קטנים וחתונות" },
        ]}
      />
    </div>
  );
}
