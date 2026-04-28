import React from "react";
import { Metadata } from "next";
import AttractionsContent from "@/components/AttractionsContent";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "מחשבון אטרקציות לאירועים | יקיר כהן הפקות",
  description: "תכננו את אירוע החלומות שלכם. מחשבון אטרקציות לבריתות, בר/בת מצווה וחתונות במודיעין. ככל שתבחרו יותר, תחסכו יותר.",
  alternates: {
    canonical: "https://www.yakircohen.com/attractions",
  },
};

const attractionsSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "חבילת אטרקציות לאירועים",
  "description": "חבילות אטרקציות מותאמות אישית לאירועים הכוללות עשן כבד, מגנטים, זיקוקים ועוד.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "ILS",
    "price": "1750",
    "availability": "https://schema.org/InStock"
  }
};

export default function AttractionsPage() {
  return (
    <>
      <StructuredData data={attractionsSchema} />
      <AttractionsContent />
    </>
  );
}
