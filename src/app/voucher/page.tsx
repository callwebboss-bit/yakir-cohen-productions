import React from "react";
import { Metadata } from "next";
import VoucherContent from "@/components/VoucherContent";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "שובר מתנה מוזיקלי",
  description: "העניקו מתנה של פעם בחיים. עצבו שובר מתנה להקלטת שיר, סדנת סאונד או טיפול קולי באולפני יקיר כהן.",
  alternates: {
    canonical: "https://www.yakircohen.com/voucher",
  },
};

const voucherSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "שובר מתנה מוזיקלי",
  "description": "שובר מתנה לחוויות מוזיקליות באולפן או בקליניקה של יקיר כהן.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "ILS",
    "availability": "https://schema.org/InStock"
  }
};

export default function VoucherPage() {
  return (
    <>
      <StructuredData data={voucherSchema} />
      <VoucherContent />
    </>
  );
}
