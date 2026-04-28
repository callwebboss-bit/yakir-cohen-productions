import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalAssistant from "@/components/GalAssistant";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "יקיר כהן הפקות | אולפן הקלטות וקליניקה לקול",
  description: "אולפן הקלטות מקצועי במודיעין, פיתוח קול, הפקת אירועים ואקדמיה לסאונד.",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "יקיר כהן הפקות | אולפן הקלטות וקליניקה לקול",
    description: "אולפן הקלטות מקצועי במודיעין, פיתוח קול, הפקת אירועים ואמרנות.",
    url: "https://www.yakircohen.com",
    siteName: "יקיר כהן הפקות",
    images: [
      {
        url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop",
        width: 1200,
        height: 630,
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "יקיר כהן הפקות",
    description: "מומחה קול וסאונד במודיעין",
    images: ["https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop"],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "יקיר כהן הפקות",
  "url": "https://www.yakircohen.com",
  "logo": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+972-52-8701918",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://facebook.com/yakircohen",
    "https://instagram.com/yakircohen",
    "https://youtube.com/yakircohen"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&family=Heebo:wght@100..900&family=Platypi:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
        <StructuredData data={orgSchema} />
      </head>
      <body className="antialiased bg-white text-zinc-900 font-sans">
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
