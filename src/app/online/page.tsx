import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import StudioRecordsSVG from "@/components/StudioRecordsSVG";

export const metadata: Metadata = {
  title: "שירותים אונליין — עריכת קול ותמונה מהבית | יקיר כהן הפקות",
  description:
    "ניקוי רעשים, תיקון זיופים, מיקס, תיקון עוצמה, שחזור אודיו ושיפור תמונות — שולחים קובץ, מקבלים מוכן תוך 24 שעות. ללא פגישה.",
  alternates: { canonical: `${SITE_URL}/online` },
  openGraph: {
    title: "שירותים אונליין | יקיר כהן הפקות",
    description: "עריכת קול ותמונה מהבית — שולחים, מקבלים. מ-29 ₪.",
    url: `${SITE_URL}/online`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "שירותים אונליין — יקיר כהן הפקות",
  "description": "ניקוי רעשים, תיקון זיופים, מיקס ומאסטרינג, שיפור תמונות — עריכה מקצועית אונליין.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
};

const services = [
  {
    emoji: "🔇",
    title: "ניקוי רעשים",
    href: "/online/vocal-fix/ניקוי-רעשים",
    price: "79 ₪",
    turnaround: "12 שעות",
    desc: "הסרת רעשי מזגן, הד, HVAC — iZotope RX. לברכות, הרצאות, פודקאסטים.",
  },
  {
    emoji: "🎵",
    title: "תיקון זיופים",
    href: "/online/vocal-fix/pitch-correction",
    price: "149 ₪",
    turnaround: "24 שעות",
    desc: "Melodyne Studio — תיקון טבעי לצלילים שקצת יצאו, בלי אפקט רובוטי.",
  },
  {
    emoji: "🎚️",
    title: "מיקס ומאסטרינג",
    href: "/online/vocal-fix/mixing",
    price: "290 ₪",
    turnaround: "48 שעות",
    desc: "EQ, קומפרסיה, Reverb, מאסטרינג לפלטפורמה — שיר שנשמע מוכן.",
  },
  {
    emoji: "📊",
    title: "תיקון עוצמה",
    href: "/online/vocal-fix/volume-fix",
    price: "49 ₪",
    turnaround: "6 שעות",
    desc: "נורמליזציה ל-LUFS הנכון — Spotify, YouTube, פודקאסט, TikTok.",
  },
  {
    emoji: "🔧",
    title: "שחזור אודיו",
    href: "/online/vocal-fix/audio-repair",
    price: "149 ₪",
    turnaround: "24 שעות",
    desc: "De-Clip, De-Click, הסרת רעשים ספקטרליים — iZotope RX Advanced.",
  },
  {
    emoji: "🖼️",
    title: "שיפור תמונות",
    href: "/online/vocal-fix/photo-enhance",
    price: "29 ₪",
    turnaround: "24 שעות",
    desc: "תאורה, צבע, חידוד, רטוש עדין, הסרת אלמנטים — תמונות מאירועים.",
  },
  {
    emoji: "🎚️",
    title: "פיצול ערוצים",
    href: "/online/vocal-fix/stem-split",
    price: "199 ₪",
    turnaround: "24 שעות",
    desc: "הפרדת שיר לווקאל ובס נפרדים עם StemSplit — מוכן למיקס או להשמעה.",
  },
];

const howItWorks = [
  { n: "01", t: "שולחים קובץ", d: "וואטסאפ עם הקובץ ותיאור קצר מה צריך לתקן." },
  { n: "02", t: "מקבלים הצעה", d: "מחיר + זמן ביצוע — לפני שמתחילים. ללא הפתעות." },
  { n: "03", t: "מאשרים ומשלמים", d: "ביט / העברה בנקאית. מתחילים מיד לאחר אישור." },
  { n: "04", t: "מקבלים מוכן", d: "קובץ גמור בתיבת הוואטסאפ — WAV + MP3." },
];

export default function OnlinePage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      {/* Dynamic Glassmorphism Hero */}
      <div className="relative mb-16 rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <StudioRecordsSVG />
        </div>
        <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-md p-12 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4 italic text-white">שירותים אונליין</h1>
          <p className="text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
            עריכת קול ותמונה מהבית. שולחים קובץ, מקבלים מוכן תוך 24 שעות.
          </p>
        </div>
      </div>

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · שירותים אונליין
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-zinc-900"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          עריכה מקצועית — מהבית.
          <br />
          <span className="text-[#D42B2B]">שולחים קובץ, מקבלים מוכן.</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8">
          ניקוי רעשים, תיקון זיופים, מיקס, שיפור תמונות — ללא הגעה לאולפן, ללא פגישה.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            שלחו קובץ עכשיו
          </Link>
          <Link
            href="/online/online-ai-pricing"
            className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all"
          >
            מחירון מלא
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">כל השירותים</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ emoji, title, href, price, turnaround, desc }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-4 p-7 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl">{emoji}</span>
                <div className="text-left">
                  <p className="text-xl font-serif font-black text-[#D42B2B]">{price}</p>
                  <p className="text-xs text-zinc-400">{turnaround}</p>
                </div>
              </div>
              <h3 className="font-serif text-lg font-bold">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed flex-grow">{desc}</p>
              <p className="text-xs font-bold text-[#D42B2B] group-hover:underline">פרטים ←</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">איך זה עובד?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {howItWorks.map(({ n, t, d }) => (
              <div key={n} className="bg-white border border-zinc-200 rounded-2xl p-6">
                <p className="font-serif text-4xl font-black text-[#D42B2B] opacity-25 mb-2">{n}</p>
                <h3 className="font-bold text-zinc-900 mb-1">{t}</h3>
                <p className="text-zinc-500 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto w-full text-center">
        <h2 className="font-serif text-2xl font-bold mb-4">פורמטים נתמכים</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto text-right">
          {[
            { label: "אודיו", value: "WAV, MP3, AIFF, FLAC, AAC, OGG" },
            { label: "וידאו (עם אודיו)", value: "MP4, MOV, AVI — נשלח חזרה כאודיו" },
            { label: "תמונות", value: "JPG, PNG, HEIC, RAW (CR2, NEF, ARW)" },
            { label: "הפלט", value: "תמיד WAV + MP3 / JPG ברזולוציה מלאה" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-zinc-50 border border-zinc-200 rounded-xl p-4">
              <p className="font-bold text-zinc-800 text-sm mb-1">{label}</p>
              <p className="text-zinc-500 text-xs">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-6">
          {["תשלום בביט", "אין קריינות", "לא צריך ניסיון"].map((item) => (
            <span key={item} className="flex items-center gap-2 text-sm text-zinc-600">
              <CheckCircle2 size={15} className="text-[#D42B2B]" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">שלחו קובץ עכשיו</h2>
        <p className="text-zinc-400 mb-6">וואטסאפ — מגיבים תוך שעה בשעות הפעילות.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors"
          >
            058-7-555-456 וואטסאפ
          </Link>
          <Link
            href="/online/online-ai-pricing"
            className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors"
          >
            מחירון מלא
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותי האולפן"
        pages={[
          { label: "StemSplit", href: "/stemsplit", desc: "פיצול ערוצים מהיר לשירים ומיקסים" },
          { label: "הקלטת שירים", href: "/studio/recording-song-modiin", desc: "מ-990 ₪ — האולפן שלנו" },
          { label: "מחירון אולפן", href: "/studio/pricing", desc: "כל שירותי ההקלטה" },
          { label: "קריינות לעסקים", href: "/business/professional-voiceover", desc: "מ-490 ₪ לסקריפט" },
        ]}
      />
    </div>
  );
}
