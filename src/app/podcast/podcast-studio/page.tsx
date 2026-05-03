import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Clock, Wifi } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import YouTube from "@/components/ui/YouTube";

export const metadata: Metadata = {
  title: "אולפן פודקאסט מקצועי במודיעין | יקיר כהן הפקות — ציוד Sphere L22",
  description:
    "אולפן פודקאסט מקצועי במודיעין — ציוד Sphere L22, וידאו מולטי-קאם, עריכה מלאה. מ-950 ₪ לפרק. נגיש מתל אביב וירושלים.",
  alternates: { canonical: "https://www.yakircohen.com/podcast/podcast-studio" },
  openGraph: {
    title: "אולפן פודקאסט במודיעין | יקיר כהן הפקות",
    description: "ציוד Sphere L22, וידאו מולטי-קאם, עריכה מלאה. מ-950 ₪.",
    url: "https://www.yakircohen.com/podcast/podcast-studio",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "אולפן פודקאסט — יקיר כהן הפקות",
  "description": "אולפן פודקאסט מקצועי במודיעין עם ציוד Sphere L22 ווידאו מולטי-קאם. מ-950 ₪.",
  "telephone": "+972-58-7555456",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "עמק איילון 34/5",
    "addressLocality": "מודיעין-מכבים-רעות",
    "addressCountry": "IL",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "31.898", "longitude": "35.010" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "itemListElement": [
      { "@type": "Offer", "name": "השכרת ציוד בלבד", "price": "500", "priceCurrency": "ILS" },
      { "@type": "Offer", "name": "אולפן + הקלטה", "price": "950", "priceCurrency": "ILS" },
    ],
  },
};

const specs = [
  { t: "מיקרופון Sphere L22", d: "מיקרופון רב-כיווני עם דגם קול ייחודי לכל מגיש" },
  { t: "וידאו מולטי-קאם", d: "עד 3 מצלמות 4K בו-זמנית — לתוכן סושיאל מוכן" },
  { t: "חדר אקוסטי מבודד", d: "ללא רעשי רקע, קול צלול וברור בכל הקלטה" },
  { t: "אינטרנט מהיר + מוניטורים", d: "אפשרות להקלטה עם אורח מרחוק בלי השהיה" },
];

const features = [
  { icon: <MapPin size={20} />, t: "מיקום מרכזי", d: "קניון עזריאלי מודיעין, חניה חינם, נגיש מכל הארץ" },
  { icon: <Clock size={20} />, t: "גמישות בשעות", d: "סשנים בתיאום אישי — גם ערב, גם סוף שבוע" },
  { icon: <Wifi size={20} />, t: "אורח מרחוק", d: "מחברים אורחים מכל העולם בלי השהיה" },
];

export default function PodcastStudioPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      {/* Hero */}
      <header className="bg-zinc-900 text-white py-20 px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · אולפן פודקאסט
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          אולפן פודקאסט מקצועי
          <br />
          <span className="text-[#D42B2B]">במודיעין. ציוד Sphere L22.</span>
        </h1>
        <p className="text-zinc-300 text-base max-w-lg mx-auto mb-8 leading-relaxed">
          השתדרגו ממיקרופון USB לאולפן מקצועי. ההבדל נשמע מהפרק הראשון.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            קבעו סשן
          </Link>
          <Link href="/podcast" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            מחירון פודקאסט
          </Link>
        </div>
      </header>

      {/* Specs */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">הציוד שבאולפן</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map(({ t, d }) => (
            <div key={t} className="flex items-start gap-4 p-6 bg-zinc-50 border border-zinc-200 rounded-2xl">
              <CheckCircle2 size={20} className="text-[#D42B2B] mt-1 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">{t}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="py-10 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-2">
            השכרת אולפן + פודקאסט נייד
          </h2>
          <p className="text-center text-zinc-500 mb-6 text-sm">
            ראו מה כלול בכל אפשרות ואיפה זה מתאים לכם
          </p>
          <YouTube
            url="https://www.youtube.com/watch?v=zjoXk7QuLzY"
            title="אולפן פודקאסט ופודקאסט נייד — יקיר כהן הפקות"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-10">למה מגיעים מכל הארץ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon, t, d }) => (
            <div key={t} className="text-center flex flex-col items-center gap-3 p-6">
              <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-700">
                {icon}
              </div>
              <h3 className="font-bold">{t}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">מוכנים להקליט?</h2>
        <p className="text-zinc-400 mb-6">
          קניון עזריאלי מודיעין. חניה חינם. מגיעים, מקליטים, יוצאים עם תוכן.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            058-7-555-456 וואטסאפ
          </Link>
          <Link href="/podcast/podcast-production" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            שירותי הפקה מלאה
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>
    </div>
  );
}
