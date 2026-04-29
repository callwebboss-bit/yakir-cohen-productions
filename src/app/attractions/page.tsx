import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import AttractionsCalculator from "@/features/attractions/AttractionsCalculator";

export const metadata: Metadata = {
  title: "אטרקציות לאירועים — פיק מומנטס",
  description:
    "עצבו את רגעי השיא שלכם. עשן כבד, זיקוקים קרים, קונפטי ותא הקלטה לאירועים במודיעין. חבילה מ-1,750 ₪ — ב-4 אטרקציות תקבלו קליפ היילייטס מתנה.",
  alternates: {
    canonical: "https://www.yakircohen.com/attractions",
  },
  openGraph: {
    title: "אטרקציות לאירועים | יקיר כהן הפקות",
    description: "עשן כבד, זיקוקים קרים, קונפטי ועוד — חבילות מ-1,750 ₪",
    url: "https://www.yakircohen.com/attractions",
  },
};

const attractionsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "פיק מומנטס — יקיר כהן הפקות",
  description:
    "הפקת אטרקציות ואפקטים פרימיום לאירועים — עשן כבד, זיקוקים קרים, תותחי קונפטי, תא הקלטה ועוד",
  telephone: "+972-52-8701918",
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
          <span className="text-[#B80000]">רגעי השיא</span>{" "}
          שלכם
        </h1>

        <p className="text-white/50 text-base max-w-sm mx-auto mb-6 leading-relaxed">
          בחרו אטרקציות, קבלו הצעה מיידית ושריינו תאריך. ב-4 אטרקציות תקבלו קליפ היילייטס מתנה.
        </p>

        <p className="text-[11px] text-white/30">כל המחירים אינם כוללים מע&quot;מ (18%)</p>
      </header>

      <main>
        <AttractionsCalculator />
      </main>
    </div>
  );
}
