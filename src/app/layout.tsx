import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalAssistant from "@/components/GalAssistant";
import MobileCtaBar from "@/components/MobileCtaBar";
import ExitIntent from "@/components/ExitIntent";
import StructuredData from "@/components/StructuredData";
import Logo from "@/components/Logo";
import ClientSchema from "@/components/ClientSchema";
import DynamicHero from "@/components/DynamicHero";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import IdleGhostButton from "@/components/IdleGhostButton";
import ClipboardAttribution from "@/components/ClipboardAttribution";

const DEFAULT_BASE_URL = "https://www.yakircohen.com";
const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_BASE_URL;
let BASE_URL = DEFAULT_BASE_URL;
try {
  BASE_URL = new URL(rawBaseUrl).toString();
} catch (error) {
  console.warn(`Invalid NEXT_PUBLIC_SITE_URL value: ${rawBaseUrl}. Using default ${DEFAULT_BASE_URL}.`, error);
}
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
const OG_IMAGE = `${BASE_URL}/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp`;
const PHONE = "+972587555456";
const EMAIL = "office@yakircohen.com";
const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/yakir.cohen.official",
  tiktok: "https://www.tiktok.com/@yakir.cohen.offical",
  youtube: "https://www.youtube.com/user/kikosh",
  facebook: "https://www.facebook.com/dj.yakir.cohen",
};

const buildTitle = (pageTitle?: string) =>
  pageTitle
    ? `${pageTitle} | יקיר כהן הפקות`
    : "יקיר כהן הפקות - אולפן הקלטות פרמיום ומרכז קול במודיעין";

const buildDescription = (pageDescription?: string) =>
  pageDescription ||
  "אולפן הקלטות פרמיום וקליניקה לקול במודיעין. הפקה, הקלטה, מיקס ושדרוג קול לאירועים, פודקאסטים ולימודים באזור המרכז.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: buildTitle(),
    template: "%s | יקיר כהן הפקות",
  },
  description: buildDescription(),
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
        <link rel="preload" href={OG_IMAGE} as="image" type="image/webp" />
        <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&family=Frank+Ruhl+Libre:wght@300..900&family=Heebo:wght@100..900&family=Platypi:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
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
        <div className="sr-only" aria-hidden="true">
          <Logo />
        </div>
        <Navigation />
        <DynamicHero />
        <main className="min-h-screen pt-20 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <GalAssistant />
        <MobileCtaBar />
        <ExitIntent />
        <WhatsAppFloat />
        <IdleGhostButton />
        <ClipboardAttribution />
      </body>
    </html>
  );
}
