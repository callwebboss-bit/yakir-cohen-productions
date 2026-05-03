"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import StructuredData from './StructuredData';

const BASE_URL = "https://www.yakircohen.com";
const OG_IMAGE = `${BASE_URL}/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp`;
const PHONE = "+972587555456";
const EMAIL = "office@yakircohen.com";
const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/yakir.cohen.official",
  tiktok: "https://www.tiktok.com/@yakir.cohen.offical",
  youtube: "https://www.youtube.com/user/kikosh",
  facebook: "https://www.facebook.com/dj.yakir.cohen",
};

export default function ClientSchema() {
  const pathname = usePathname() ?? "/";

  let entityType = "ProfessionalService";
  if (pathname.startsWith("/studio")) entityType = "MusicRecordingStudio";
  else if (pathname.startsWith("/attractions") || pathname.startsWith("/events")) entityType = "EntertainmentBusiness";

  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": "יקיר כהן הפקות",
        "url": BASE_URL,
        "logo": OG_IMAGE,
        "sameAs": Object.values(SOCIAL_LINKS),
        "email": EMAIL,
        "telephone": PHONE,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "עמק איילון 34",
          "addressLocality": "מודיעין-מכבים-רעות",
          "addressRegion": "מרכז",
          "postalCode": "7170000",
          "addressCountry": "IL",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 31.9010,
          "longitude": 35.0130,
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "מודיעין-מכבים-רעות",
          },
          {
            "@type": "State",
            "name": "מרכז",
          },
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": PHONE,
            "email": EMAIL,
            "contactType": "Customer Service",
            "areaServed": ["ישראל", "מרכז"],
            "availableLanguage": ["Hebrew", "English"],
          },
        ],
        "potentialAction": {
          "@type": "ReserveAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://wa.me/972587555456?text=שלום%20יקיר%2C%20אני%20מעוניין%20להזמין%20שירות",
            "inLanguage": "he-IL",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
              "http://schema.org/IOSPlatform",
              "http://schema.org/AndroidPlatform"
            ]
          },
          "result": {
            "@type": "Reservation",
            "name": "הזמנת שירות"
          }
        },
      },
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#founder`,
        "name": "יקיר כהן",
        "jobTitle": "מפיק מוזיקלי ומדריך קול",
        "url": `${BASE_URL}/about`,
        "worksFor": {
          "@id": `${BASE_URL}/#organization`,
        },
      },
      {
        "@type": entityType,
        "@id": `${BASE_URL}/#${entityType.toLowerCase()}`,
        "name": "יקיר כהן הפקות",
        "url": BASE_URL,
        "provider": {
          "@id": `${BASE_URL}/#organization`,
        },
        "serviceType": [
          "הקלטת שירים לאירועים",
          "הפקת פודקאסטים",
          "קליפים לאירועים",
          "אטרקציות לאירועים",
          "לימודי מוזיקה",
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "מודיעין-מכבים-רעות",
          },
          {
            "@type": "State",
            "name": "מרכז",
          },
          {
            "@type": "Country",
            "name": "ישראל",
          },
        ],
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": BASE_URL,
          "availableLanguage": ["Hebrew", "English"],
        },
        "description": "אולפן הקלטות פרמיום, קליניקה לקול והפקות מוסיקה לאירועים במודיעין ובמרכז.",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".hero h1", ".hero p:first-of-type"]
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "בית",
            "item": BASE_URL,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "אולפן",
            "item": `${BASE_URL}/studio`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "אקדמיה",
            "item": `${BASE_URL}/academy`,
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "אטרקציות",
            "item": `${BASE_URL}/attractions`,
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "צור קשר",
            "item": `${BASE_URL}/contact`,
          },
        ],
      },
    ],
  };

  return <StructuredData data={siteSchema} />;
}