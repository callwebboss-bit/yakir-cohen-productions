import { Metadata } from "next";
import SingerKidsClient from "./SingerKidsClient";

export const metadata: Metadata = {
  title: "הזמנה לשיר לילדים",
  description: "טופס הזמנה לשיר לילדים ואירועים. בחרו חבילה, תוספות וקבעו תקשורת ישירה עם יקיר.",
  alternates: {
    canonical: "https://www.yakircohen.com/singerkids",
  },
  openGraph: {
    title: "הזמנה לשיר לילדים",
    description: "טופס הזמנה לשיר לילדים ואירועים במודיעין. שירות אישי, מיקרופונים מקצועיים וזמן אולפן מותאם.",
    url: "https://www.yakircohen.com/singerkids",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://www.yakircohen.com/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp",
        width: 1200,
        height: 630,
        alt: "הזמנה לשיר ילדים - יקיר כהן הפקות",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "הזמנה לשיר לילדים",
    description: "טופס הזמנה לשיר לילדים ואירועים במודיעין.",
    images: ["https://www.yakircohen.com/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp"],
  },
};

export default function SingerKidsPage() {
  return <SingerKidsClient />;
}
