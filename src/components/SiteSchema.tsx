import { SITE_URL } from "@/lib/site-url";
const BASE_URL = SITE_URL;
const OG_IMAGE = `${BASE_URL}/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp`;
const PHONE = "+972587555456";
const EMAIL = "office@yakircohen.com";
const SOCIAL_LINKS = [
  "https://www.instagram.com/yakir.cohen.official",
  "https://www.tiktok.com/@yakir.cohen.offical",
  "https://www.youtube.com/user/kikosh",
  "https://www.facebook.com/dj.yakir.cohen",
];

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "עמק איילון 34",
  addressLocality: "מודיעין-מכבים-רעות",
  addressRegion: "מרכז",
  postalCode: "7170000",
  addressCountry: "IL",
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "יקיר כהן הפקות",
      description: "אולפן הקלטות פרמיום, קליניקה לקול והפקות מוסיקה לאירועים במודיעין",
      inLanguage: "he-IL",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "יקיר כהן הפקות",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: OG_IMAGE,
        width: 1200,
        height: 630,
      },
      sameAs: SOCIAL_LINKS,
      email: EMAIL,
      telephone: PHONE,
      foundingDate: "2010",
      address: ADDRESS,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE,
        email: EMAIL,
        contactType: "customer service",
        areaServed: "IL",
        availableLanguage: ["Hebrew", "English"],
      },
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#founder`,
      name: "יקיר כהן",
      jobTitle: "מפיק מוזיקלי ומדריך קול",
      url: `${BASE_URL}/about`,
      sameAs: SOCIAL_LINKS,
      worksFor: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": ["LocalBusiness", "EntertainmentBusiness", "MusicRecordingStudio"],
      "@id": `${BASE_URL}/#localbusiness`,
      name: "יקיר כהן הפקות",
      alternateName: ["Yakir Cohen Productions", "יקיר כהן הפקות מוזיקה"],
      url: BASE_URL,
      image: OG_IMAGE,
      telephone: PHONE,
      email: EMAIL,
      priceRange: "₪₪",
      currenciesAccepted: "ILS",
      paymentAccepted: "Cash, Credit Card, Bank Transfer, Bit",
      address: ADDRESS,
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.901,
        longitude: 35.013,
      },
      hasMap: "https://maps.google.com/?q=מודיעין+עמק+איילון+34",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "10:00",
          closes: "22:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "10:00",
          closes: "16:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: "מודיעין-מכבים-רעות" },
        { "@type": "City", name: "ירושלים" },
        { "@type": "City", name: "תל אביב" },
        { "@type": "AdministrativeArea", name: "מרכז" },
      ],
      makesOffer: [
        {
          "@type": "Offer",
          name: "הקלטת שיר לאירוע",
          description: "הקלטה, מיקס ועריכת שיר לחתונה, בר מצווה ואירועים",
          price: "990",
          priceCurrency: "ILS",
          url: `${BASE_URL}/studio/recording-song-modiin`,
          seller: { "@id": `${BASE_URL}/#organization` },
        },
        {
          "@type": "Offer",
          name: "DJ ועיצוב לאירועים",
          description: "מערכות לד, DJ מקצועי ואטרקציות לחתונות ואירועים",
          price: "2500",
          priceCurrency: "ILS",
          url: `${BASE_URL}/events/dj-events`,
          seller: { "@id": `${BASE_URL}/#organization` },
        },
        {
          "@type": "Offer",
          name: "הפקת פודקאסט",
          description: "הקלטה, עריכה והפקה מלאה לפודקאסטים",
          price: "950",
          priceCurrency: "ILS",
          url: `${BASE_URL}/podcast/podcast-production`,
          seller: { "@id": `${BASE_URL}/#organization` },
        },
        {
          "@type": "Offer",
          name: "קורסי DJ ומוזיקה",
          description: "לימודי DJ, אקדמיה למוזיקה ופיתוח קול",
          price: "480",
          priceCurrency: "ILS",
          url: `${BASE_URL}/academy`,
          seller: { "@id": `${BASE_URL}/#organization` },
        },
        {
          "@type": "Offer",
          name: "שיפור סאונד AI",
          description: "ניקוי רעשים, נרמול וולום ושיפור אודיו עם בינה מלאכותית",
          price: "79",
          priceCurrency: "ILS",
          url: `${BASE_URL}/online/vocal-fix`,
          seller: { "@id": `${BASE_URL}/#organization` },
        },
        {
          "@type": "Offer",
          name: "הפרדת גזעי אודיו (StemSplit)",
          description: "הפרדת קול מלווי בטכנולוגיית AI",
          price: "0",
          priceCurrency: "ILS",
          url: `${BASE_URL}/online/vocal-fix/stem-split`,
          seller: { "@id": `${BASE_URL}/#organization` },
        },
      ],
      founder: { "@id": `${BASE_URL}/#founder` },
      parentOrganization: { "@id": `${BASE_URL}/#organization` },
    },
  ],
};

export default function SiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
