import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Train } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "אולפן הקלטות ירושלים — שווה להגיע מהקריות ומהדרום | יקיר כהן הפקות",
  description:
    "אולפן הקלטות מקצועי ב-20 דקות מירושלים — קניון עזריאלי מודיעין. הקלטת שיר מ-990 ₪ כולל הכל. נגיש ברכבת ובכביש.",
  alternates: { canonical: "https://www.yakircohen.com/studio/studio-jerusalem" },
  openGraph: {
    title: "אולפן הקלטות ירושלים | יקיר כהן הפקות",
    description: "20 דקות מירושלים, קניון עזריאלי מודיעין. הקלטת שיר מ-990 ₪.",
    url: "https://www.yakircohen.com/studio/studio-jerusalem",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MusicRecordingStudio",
  "name": "יקיר כהן הפקות — אולפן הקלטות סמוך לירושלים",
  "description": "אולפן הקלטות מקצועי 20 דקות מירושלים. הקלטת שיר, ברכות ופודקאסט.",
  "telephone": "+972-58-7555456",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "עמק איילון 34/5",
    "addressLocality": "מודיעין-מכבים-רעות",
    "addressRegion": "מרכז",
    "postalCode": "7170000",
    "addressCountry": "IL",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "31.898", "longitude": "35.010" },
  "areaServed": ["ירושלים", "בית שמש", "מודיעין", "בני ברק", "מרכז הארץ"],
};

const travelTimes = [
  { city: "ירושלים מרכז", time: "20 דקות", via: "כביש 1 / רכבת" },
  { city: "בית שמש", time: "15 דקות", via: "כביש 38" },
  { city: "רחובות", time: "20 דקות", via: "כביש 431" },
  { city: "תל אביב", time: "30 דקות", via: "כביש 1" },
  { city: "ראשון לציון", time: "25 דקות", via: "כביש 431" },
  { city: "בני ברק", time: "35 דקות", via: "כביש 1" },
];

const whyComeFromJerusalem = [
  "ציוד אקוסטי מבודד שלא קיים ברוב האולפנים",
  "מפיק מנוסה עם 20+ שנות ניסיון",
  "מחירים שקופים — 990 ₪ שיר כולל הכל",
  "חניה חינם בקניון עזריאלי",
  "נגיש ברכבת ובתחבורה ציבורית",
  "תוצאה מוכנה בסיום הסשן",
];

export default function StudioJerusalemPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-900 text-white text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · מודיעין — 20 דקות מירושלים
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          אולפן הקלטות ירושלים.
          <br />
          <span className="text-[#D42B2B]">20 דקות. שווה להגיע.</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          מירושלים ובית שמש מגיעים לאולפן במודיעין — 20 דקות בלבד. חניה חינם, ציוד מקצועי, תוצאה ביום אחד.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            קבעו סשן
          </Link>
          <Link href="/studio/recording-song-modiin" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            שירותי הקלטה
          </Link>
        </div>
      </header>

      {/* Travel times */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-4">כמה זמן לוקח להגיע?</h2>
        <p className="text-center text-zinc-500 mb-12">קניון עזריאלי מודיעין — עם חניה חינם</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {travelTimes.map(({ city, time, via }) => (
            <div key={city} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 text-center">
              <p className="font-serif text-2xl font-black text-[#D42B2B] mb-1">{time}</p>
              <p className="font-bold text-zinc-900 text-sm">{city}</p>
              <p className="text-zinc-400 text-xs mt-1">{via}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transport options */}
      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-10">איך מגיעים?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <MapPin size={20} />, t: "בכביש", d: "כביש 1, יציאת מודיעין, קניון עזריאלי מודיעין. חניה חינם מתחת לקניון." },
              { icon: <Train size={20} />, t: "ברכבת", d: "רכבת ישראל לתחנת מודיעין, ומשם 5 דקות ברגל לקניון." },
              { icon: <Clock size={20} />, t: "בתחבורה ציבורית", d: "קווי אוטובוס ישירים מירושלים ורחובות עם עצירה ליד הקניון." },
            ].map(({ icon, t, d }) => (
              <div key={t} className="flex flex-col items-center gap-3 text-center p-6 bg-white border border-zinc-200 rounded-2xl">
                <div className="w-12 h-12 bg-zinc-900 text-white rounded-xl flex items-center justify-center">{icon}</div>
                <h3 className="font-bold">{t}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why come */}
      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-10">למה שווה לנסוע?</h2>
        <ul className="flex flex-col gap-4">
          {whyComeFromJerusalem.map((item) => (
            <li key={item} className="flex items-center gap-3 justify-end">
              <span className="text-zinc-700">{item}</span>
              <CheckCircle2 size={16} className="text-[#D42B2B] shrink-0" />
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">מגיעים מירושלים? מעולה.</h2>
        <p className="text-zinc-400 mb-6 max-w-md mx-auto">
          קבעו סשן, הגיעו לקניון עזריאלי מודיעין, חנו בחינם — ויוצאים עם הקלטה גמורה.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            058-7-555-456 וואטסאפ
          </Link>
          <Link href="/studio/pricing" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            מחירון
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותי האולפן"
        pages={[
          { label: "הקלטת שירים מקצועית", href: "/studio/recording-song-modiin", desc: "מ-990 ₪ כולל טכנאי, תיקון ומיקס" },
          { label: "ברכות מוקלטות", href: "/studio/blessings", desc: "לבר מצווה, חתונה ואירועים" },
          { label: "שאלות נפוצות", href: "/about/faq", desc: "כל מה שצריך לדעת לפני ההגעה" },
        ]}
      />
    </div>
  );
}
