import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "מיקסינג מקצועי אונליין — EQ, Compression, Reverb | יקיר כהן הפקות",
  description:
    "מיקסינג מקצועי אונליין: EQ, Compression, Reverb, Balance. שולחים קבצים, מקבלים מיקס שנשמע כמו אולפן. מ-350 ₪.",
  alternates: { canonical: "https://www.yakircohen.com/online/vocal-fix/mixing" },
  openGraph: {
    title: "מיקסינג מקצועי אונליין | יקיר כהן הפקות",
    description: "EQ, Compression, Reverb, Balance. מ-350 ₪.",
    url: "https://www.yakircohen.com/online/vocal-fix/mixing",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "מיקסינג מקצועי אונליין — יקיר כהן הפקות",
  "description": "מיקסינג מקצועי: EQ, Compression, Reverb, Balance. מ-350 ₪.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
  "offers": { "@type": "Offer", "price": "350", "priceCurrency": "ILS" },
};

const mixingElements = [
  { t: "EQ — איזון תדרים", d: "מסירים עכירות, מוסיפים אוויר. כל כלי תופס את המקום הנכון בתמונת הסאונד." },
  { t: "Compression — דינמיקה", d: "שומרים על עקביות העוצמה. לא חזק מדי, לא חלש מדי — כל הזמן." },
  { t: "Reverb & Delay", d: "מוסיפים עומק ומרחב. הקול מרגיש 'בחדר' ולא 'יבש' מדי." },
  { t: "Panning — מיקום בסטריאו", d: "כל כלי ממוקם בחלל הסטריאו — שמאל, ימין, מרכז. מוזיקה תלת-ממדית." },
  { t: "Automation — תנועה", d: "עוצמות שמשתנות בדיוק במקום הנכון. גשר שעולה, כניסה שמתגברת." },
  { t: "Mastering בסיסי", d: "נרמול לאחר מיקסינג — LUFS תקני, מוכן ל-Spotify, YouTube, Apple Music." },
];

const pricing = [
  { t: "שיר אחד — מיקסינג בסיסי", p: "350", d: "עד 16 ערוצים, מסירה ב-WAV" },
  { t: "שיר אחד — מיקסינג מלא + מאסטרינג", p: "550", d: "EQ + Compression + Reverb + מאסטרינג" },
  { t: "EP (3-6 שירים)", p: "לפי הצעה", d: "מחיר מוזל לפרויקט" },
];

export default function MixingPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-white border-b border-zinc-100 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-zinc-200" />
          יקיר כהן הפקות · מיקסינג
          <span className="inline-block w-5 h-px bg-zinc-200" />
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          מיקסינג מקצועי אונליין.
          <br />
          <span className="text-[#D42B2B]">כל הכלים בהרמוניה. מ-350 ₪.</span>
        </h1>
        <p className="text-zinc-500 max-w-lg mx-auto mb-6 leading-relaxed">
          שולחים את הקבצים הגולמיים. מקבלים מיקס שנשמע כמו שיצא מאולפן מקצועי. EQ, Compression, Reverb, Balance.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            שלחו קבצים למיקסינג
          </Link>
          <Link href="/online/vocal-fix" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
            כל שירותי שיפור הקול
          </Link>
        </div>
      </header>

      {/* Elements */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">מה כולל המיקסינג?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mixingElements.map(({ t, d }) => (
            <div key={t} className="flex items-start gap-3 p-6 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all">
              <CheckCircle2 size={16} className="text-[#D42B2B] mt-0.5 shrink-0" />
              <div>
                <h3 className="font-bold text-sm mb-1">{t}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to send */}
      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-8">מה שולחים?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-zinc-200 rounded-2xl p-6">
              <h3 className="font-bold mb-3">אידיאלי לשלוח</h3>
              <ul className="flex flex-col gap-2 text-sm text-zinc-600">
                {["Stems / ערוצים נפרדים (WAV)", "קובץ פרויקט DAW (Logic, ProTools, Ableton)", "תיאור של הסאונד שרוצים", "דוגמה של שיר בסגנון המבוקש"].map((i) => (
                  <li key={i} className="flex items-center gap-2 justify-end">
                    <span>{i}</span><CheckCircle2 size={12} className="text-[#D42B2B] shrink-0" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-900 text-white rounded-2xl p-6">
              <h3 className="font-bold mb-3">גם אפשר לשלוח</h3>
              <ul className="flex flex-col gap-2 text-sm text-zinc-300">
                {["קובץ מיקס גולמי בודד (WAV)", "MP3 איכותי (320kbps)", "הקלטה ביתית ללא עריכה", "כמה גרסאות לבחירה"].map((i) => (
                  <li key={i} className="flex items-center gap-2 justify-end">
                    <span>{i}</span><CheckCircle2 size={12} className="text-[#D42B2B] shrink-0" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-10">מחירון מיקסינג</h2>
        <div className="flex flex-col divide-y divide-zinc-100 border border-zinc-200 rounded-2xl overflow-hidden">
          {pricing.map(({ t, p, d }) => (
            <div key={t} className="flex items-center justify-between gap-4 p-6 bg-white hover:bg-zinc-50 transition-colors">
              <div className="text-right">
                <p className="font-bold text-zinc-900">{t}</p>
                <p className="text-zinc-400 text-xs">{d}</p>
              </div>
              <span className="font-serif text-xl font-black text-[#D42B2B] shrink-0">₪{p}</span>
            </div>
          ))}
        </div>
        <p className="text-zinc-400 text-xs mt-3">המחירים אינם כוללים מע&quot;מ. זמן מסירה: 48-72 שעות.</p>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">מוכנים לשלוח לגמר?</h2>
        <p className="text-zinc-400 mb-6">שלחו קבצים בוואטסאפ — נחזור עם הצעה תוך שעות.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            058-7-555-456 וואטסאפ
          </Link>
          <Link href="/studio/recording-song-modiin" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            עדיף להקליט באולפן?
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותים משלימים"
        pages={[
          { label: "ניקוי רעשים", href: "/online/vocal-fix/ניקוי-רעשים", desc: "לפני מיקסינג — נקו את הקובץ" },
          { label: "תיקון זיופים", href: "/online/vocal-fix/pitch-correction", desc: "Melodyne לפני שמיקסים" },
          { label: "הקלטה באולפן", href: "/studio/recording-song-modiin", desc: "מיקס טוב מתחיל בהקלטה טובה" },
        ]}
      />
    </div>
  );
}
