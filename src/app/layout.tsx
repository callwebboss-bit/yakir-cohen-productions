import { SITE_URL } from "@/lib/site-url";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalAssistant from "@/components/GalAssistant";
import MobileCtaBar from "@/components/MobileCtaBar";
import ExitIntent from "@/components/ExitIntent";
import Logo from "@/components/Logo";
import ClientSchema from "@/components/ClientSchema";
import SiteSchema from "@/components/SiteSchema";
import DynamicHero from "@/components/DynamicHero";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import IdleGhostButton from "@/components/IdleGhostButton";
import ClipboardAttribution from "@/components/ClipboardAttribution";

// Sections Library Globals
import NotificationBar from '@/components/sections/NotificationBar';
import FloatingButton from '@/components/sections/FloatingButton';
import CookieConsent from '@/components/sections/CookieConsent';

const BASE_URL = SITE_URL;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
const OG_IMAGE = `${BASE_URL}/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp`;

const buildTitle = (pageTitle?: string) =>
  pageTitle
    ? `${pageTitle} | יקיר כהן הפקות`
    : "יקיר כהן הפקות - אולפן הקלטות פרמיום ומרכז קול במודיעין";

const buildDescription = (pageDescription?: string) =>
  pageDescription ||
  "אולפן הקלטות במודיעין: שירים, ברכות, פודקאסט, שירותי אונליין לעריכת קול, DJ ואטרקציות לאירועים. מענה מסודר ותוצאה מקצועית.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: buildTitle(),
    template: "%s | יקיר כהן הפקות",
  },
  description: buildDescription(),
  keywords: [
    "אולפן הקלטות מודיעין",
    "הקלטת שיר לאירוע",
    "הפקת פודקאסט",
    "DJ לחתונה",
    "פיתוח קול",
    "שיפור סאונד AI",
    "אטרקציות לאירועים",
    "לימודי DJ",
    "קליניקה לגמגום",
    "יקיר כהן הפקות",
  ],
  category: "music",
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "יקיר כהן הפקות | אולפן הקלטות וקליניקה לקול במודיעין",
    description: buildDescription(),
    url: BASE_URL,
    siteName: "יקיר כהן הפקות",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "אולפן הקלטות פרמיום במודיעין - יקיר כהן הפקות",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "יקיר כהן הפקות",
    description: buildDescription(),
    images: [OG_IMAGE],
  },
  appleWebApp: {
    capable: true,
    title: "יקיר כהן הפקות",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111827",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: import("react").ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://elfsightcdn.com" />
        <link rel="preload" href={OG_IMAGE} as="image" type="image/webp" />
        <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&family=Frank+Ruhl+Libre:wght@300..900&family=Heebo:wght@100..900&family=Platypi:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
        <SiteSchema />
        <ClientSchema />
      </head>
      <body className="antialiased bg-[#FAFAF8] text-[#1A1A1A] font-sans">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}', { page_path: window.location.pathname });`}
            </Script>
          </>
        )}
        {/* Elfsight — אינסטגרם / ווידג'טים; לא חוסם LCP */}
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        {/* Skip-to-content: visible on keyboard focus, hidden otherwise */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[9999] focus:bg-white focus:text-[#D42B2B] focus:px-4 focus:py-2 focus:rounded-md focus:font-bold focus:text-sm focus:shadow-lg"
        >
          דלג לתוכן הראשי
        </a>
        <div className="sr-only" aria-hidden="true">
          <Logo />
        </div>
        <NotificationBar />
        <Navigation />
        <DynamicHero />
        <main id="main-content" className="min-h-screen pt-20 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <GalAssistant />
        <MobileCtaBar />
        <ExitIntent />
        <WhatsAppFloat />
        <IdleGhostButton />
        <ClipboardAttribution />
        <FloatingButton />
        <CookieConsent />
      </body>
    </html>
  );
}
