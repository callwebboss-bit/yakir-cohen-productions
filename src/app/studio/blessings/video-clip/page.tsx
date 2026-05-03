import type { Metadata } from "next";
import Link from "next/link";
import { Video, CheckCircle2, Star, Zap } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "קליפ בר/בת מצווה — וידאו מקצועי מרגש | יקיר כהן הפקות",
  description:
    "קליפ בר/בת מצווה מקצועי - וידאו מרגש שמסכם את הרגע המיוחד. תצילום, עריכה, מוזיקה וקול. מ-₪1500. מודיעין, מכל הארץ.",
  alternates: { canonical: "https://www.yakircohen.com/studio/blessings/video-clip" },
  openGraph: {
    title: "קליפ בר/בת מצווה — וידאו מקצועי | יקיר כהן הפקות",
    description: "וידאו בר/בת מצווה שנהפך להיות סיפור. תצילום, עריכה, מוזיקה מקצועית.",
    url: "https://www.yakircohen.com/studio/blessings/video-clip",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "קליפ בר/בת מצווה — יקיר כהן הפקות",
  "description": "קליפ וידאו מקצועי לבר/בת מצווה. צילום, עריכה וערוץ קול. מ-₪1500.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "יקיר כהן הפקות",
    "telephone": "+972-58-7555456",
    "url": "https://www.yakircohen.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "עמק איילון 34/5",
      "addressLocality": "מודיעין",
      "addressCountry": "IL",
    },
  },
  "offers": {
    "@type": "Offer",
    "price": "1500",
    "priceCurrency": "ILS",
    "description": "קליפ בר/בת מצווה — צילום, עריכה וערוץ קול",
  },
};

const packages = [
  {
    name: "קליפ בסיסי",
    price: "₪1,500",
    duration: "2-3 דקות",
    features: [
      "צילום בחדר או מגרש",
      "עריכה וטרנזיציות",
      "מוזיקה רויאלטי-פרי",
      "ערוץ קול בסיסי",
      "קובץ MP4 ו-HD",
    ],
  },
  {
    name: "קליפ פרימיום",
    price: "₪2,500",
    duration: "4-5 דקות",
    features: [
      "צילום + תמונות מהמטבח",
      "עריכה מתקדמת + אנימציות",
      "מוזיקה מקורית או בחירה מאוספנו",
      "ערוץ קול דרמטי + תאורה",
      "קובץ 4K + עריכת צבעים",
    ],
  },
  {
    name: "קליפ אולטימטיבי",
    price: "₪3,500",
    duration: "5-7 דקות",
    features: [
      "צילום מרובה זוויות + סטנדי קאם",
      "עריכה creative בטיול בתיל אביב",
      "מוזיקה עריכה משלנו או שלך",
      "ערוץ קול סינמטי דרמטי",
      "סרט teaser + קובץ 4K",
    ],
  },
];

const whyChoose = [
  {
    icon: <Video className="w-6 h-6" />,
    title: "וידאו שמספר סיפור",
    desc: "לא רק קליפ — זיכרון חי שמסכם את הרגע המיוחד שלך.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "איכות בולטת",
    desc: "4K, עריכה creative, מוזיקה מקורית וקול דרמטי.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "מהיר וקל",
    desc: "צילום קצר, עריכה בשבוע, קובץ מוכן לפני האירוע.",
  },
];

export default function VideoClipPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      {/* Header */}
      <header className="py-20 px-6 bg-white border-b border-zinc-100 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-zinc-200" />
          בר/בת מצווה
          <span className="inline-block w-5 h-px bg-zinc-200" />
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-4" style={{ fontFamily: '"Frank Ruhl Libre", serif' }}>
          קליפ וידאו מרגש.
          <br />
          <span className="text-[#D42B2B]">זיכרון שנשאר לנצח.</span>
        </h1>
        <p className="text-zinc-500 text-base max-w-2xl mx-auto mb-8">
          וידאו חדש מהצד הראשון ועד לעריכה פרופסיונלית. מ-₪1,500 ובתוך שבוע קובץ מוכן.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            הזמנו עכשיו
          </Link>
          <Link href="/studio/blessings" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
            חזרה לברכות
          </Link>
        </div>
      </header>

      {/* Why Choose */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">למה להזמין קליפ אצלנו?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-4 text-center p-6">
                <div className="w-14 h-14 bg-[#D42B2B] text-white rounded-2xl flex items-center justify-center">
                  {icon}
                </div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-zinc-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">חבילות קליפ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className="flex flex-col gap-4 p-8 bg-white border-2 border-zinc-200 rounded-2xl hover:border-[#D42B2B] transition-colors">
                <div>
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-[#D42B2B] mb-1">{pkg.price}</p>
                  <p className="text-sm text-zinc-500">{pkg.duration}</p>
                </div>
                <ul className="flex flex-col gap-3 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} className="text-[#D42B2B] mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact/whatsapp" className="mt-4 bg-[#D42B2B] text-white px-6 py-3 rounded font-bold hover:bg-red-700 transition-colors text-center">
                  הזמנו
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">התהליך</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "התייעצות", desc: "בואו נדבר על הוויژן שלך" },
              { num: "2", title: "צילום", desc: "תצילום קצר בחדר או בחוץ" },
              { num: "3", title: "עריכה", desc: "עריכה creative בשבוע" },
              { num: "4", title: "מסירה", desc: "קובץ מוכן לשימוש" },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-[#D42B2B] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {num}
                </div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm text-zinc-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#D42B2B] text-white text-center">
        <h2 className="text-3xl font-bold mb-3">מוכנים לקליפ החדש שלכם?</h2>
        <p className="text-lg mb-8 opacity-90">שלחו לנו בוואטסאפ - נחזור אליכם תוך שעות</p>
        <Link href="/contact/whatsapp" className="inline-block bg-white text-[#D42B2B] px-8 py-4 rounded font-bold hover:bg-zinc-100 transition-colors">
          יצירת קשר
        </Link>
      </section>

      <RelatedPages
        title="שירותים קשורים"
        pages={[
          { label: "ברכה לבר מצווה", href: "/studio/blessings/bar-mitzvah", desc: "הקלטת ברכה מקצועית לבר מצווה" },
          { label: "כל הברכות", href: "/studio/blessings", desc: "לכל אירוע וכל סוג" },
          { label: "האולפן", href: "/studio", desc: "כל שירותי ההקלטה — מ-990 ₪" },
        ]}
      />
    </div>
  );
}