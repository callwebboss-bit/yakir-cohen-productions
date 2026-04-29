import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalAssistant from "@/components/GalAssistant";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "יקיר כהן הפקות",
    template: "%s | יקיר כהן הפקות",
  },
  description: "אולפן הקלטות מקצועי וקליניקה לקול במודיעין. הפקה, טיפול קולי ושירותי סאונד מותאמים אישית.",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "יקיר כהן הפקות",
    description: "אולפן הקלטות מקצועי וקליניקה לקול במודיעין. הפקה, טיפול קולי ושירותי סאונד מותאמים אישית.",
    url: "https://www.yakircohen.com",
    siteName: "יקיר כהן הפקות",
    images: [
      {
        url: "https://www.yakircohen.com/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp",
        width: 1200,
        height: 630,
        alt: "אולפן הקלטות במודיעין - יקיר כהן הפקות",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "יקיר כהן הפקות",
    description: "אולפן הקלטות מקצועי וקליניקה לקול במודיעין",
    images: ["https://www.yakircohen.com/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "יקיר כהן הפקות",
    "image": [
      "https://www.yakircohen.com/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp"
    ],
    "telephone": "+972-52-8701918",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "רחוב היובל 15",
      "addressLocality": "מודיעין-מכבים-רעות",
      "addressRegion": "מרכז",
      "postalCode": "7170000",
      "addressCountry": "IL"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "10:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday"],
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "url": "https://www.yakircohen.com"
  };

  const musicStudioSchema = {
    "@context": "https://schema.org",
    "@type": "MusicRecordingStudio",
    "name": "יקיר כהן הפקות",
    "url": "https://www.yakircohen.com/studio",
    "image": "https://www.yakircohen.com/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "רחוב היובל 15",
      "addressLocality": "מודיעין-מכבים-רעות",
      "addressRegion": "מרכז",
      "postalCode": "7170000",
      "addressCountry": "IL"
    },
    "telephone": "+972-52-8701918"
  };

  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&family=Frank+Ruhl+Libre:wght@300..900&family=Heebo:wght@100..900&family=Platypi:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
        <StructuredData data={[localBusinessSchema, musicStudioSchema]} />
      </head>
      <body className="antialiased bg-[#FAFAF8] text-[#1A1A1A] font-sans">
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <GalAssistant />
      </body>
    </html>
  );
}
