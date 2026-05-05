import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Upload, Zap, Download } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "ניקוי רעשים מקצועי — שולחים קובץ, מקבלים שקט | יקיר כהן הפקות",
  description:
    "ניקוי רעשים מקצועי: מסירים רעש מזגן, הד חדר, ונשימות לא רצויות. שולחים קובץ, מקבלים קובץ נקי תוך 24 שעות. מ-79 ₪.",
  alternates: { canonical: `${SITE_URL}/online/vocal-fix/ניקוי-רעשים` },
  openGraph: {
    title: "ניקוי רעשים מקצועי | יקיר כהן הפקות",
    description: "מסירים רעש מזגן, הד, נשימות. מ-79 ₪ תוך 24 שעות.",
    url: `${SITE_URL}/online/vocal-fix/ניקוי-רעשים`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ניקוי רעשים מקצועי — יקיר כהן הפקות",
  "description": "ניקוי רעשים מקצועי: מזגן, הד, נשימות. שולחים קובץ, מקבלים תוצאה תוך 24 שעות. מ-79 ₪.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "יקיר כהן הפקות",
    "telephone": "+972-58-7555456",
    "url": `${SITE_URL}`,
  },
  "offers": { "@type": "Offer", "price": "79", "priceCurrency": "ILS", "description": "ניקוי רעשים בסיסי לקובץ אחד" },
};

const noiseTypes = [
  { emoji: "❄️", t: "רעש מזגן / HVAC", d: "הרעש הכי נפוץ בהקלטות בית. מסירים לגמרי בלי לפגוע בקול." },
  { emoji: "🔄", t: "הד חדר", d: "חדר שאינו מבודד אקוסטית — ניקוי הד שמשאיר את הקול עצמו ברור." },
  { emoji: "💨", t: "נשימות", d: "נשימות בין משפטים — מסירים את מה שמסיח, שומרים את מה שטבעי." },
  { emoji: "⚡", t: "הום חשמלי (Hum)", d: "50Hz/60Hz שמגיע מחשמל — מסנן בדיוק גבוה בלי לפגוע בקול." },
  { emoji: "🎵", t: "קליקים ופצפוצים", d: "קליקים של מיקרופון, plosives חזקים, כל מה ש'קופץ' לאוזן." },
  { emoji: "📻", t: "רעש רקע כללי", d: "עוברים ברחוב, טלפון, כלב — מה שנמצא ברקע ולא אמור להיות שם." },
];

const steps = [
  { icon: <Upload size={22} />, t: "שולחים קובץ", d: "קובץ WAV / MP3 / M4A — בוואטסאפ, במייל, או בכל אמצעי נוח." },
  { icon: <Zap size={22} />, t: "מנקים", d: "משתמשים ב-iZotope RX — התוכנה המקצועית ביותר לניקוי שמע." },
  { icon: <Download size={22} />, t: "מקבלים", d: "קובץ נקי תוך 24 שעות. WAV + MP3. מוכן להמשך עריכה או לפרסום." },
];

const pricing = [
  { t: "קובץ אחד — ניקוי בסיסי", p: "79", desc: "עד 5 דקות, סוג רעש אחד." },
  { t: "קובץ אחד — ניקוי מלא", p: "150", desc: "עד 30 דקות, כמה סוגי רעשים." },
  { t: "פרויקט / אלבום", p: "לפי הצעה", desc: "כמה קבצים — מחיר מוזל לפרויקט." },
];

export default function NoiseRemovalPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-white border-b border-zinc-100 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-zinc-200" />
          יקיר כהן הפקות · ניקוי שמע
          <span className="inline-block w-5 h-px bg-zinc-200" />
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          ניקוי רעשים מקצועי.
          <br />
          <span className="text-[#D42B2B]">שולחים קובץ. מקבלים שקט. מ-79 ₪.</span>
        </h1>
        <p className="text-zinc-500 max-w-lg mx-auto mb-6 leading-relaxed">
          רעש מזגן, הד חדר, נשימות, הום חשמלי — מה שמפריע לאוזן, אנחנו מסירים. בלי לגעת בקול עצמו.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            שלחו קובץ עכשיו
          </Link>
          <Link href="/online/vocal-fix" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
            כל שירותי שיפור הקול
          </Link>
        </div>
      </header>

      {/* Noise types */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">אילו רעשים מסירים?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {noiseTypes.map(({ emoji, t, d }) => (
            <div key={t} className="flex items-start gap-4 p-6 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all">
              <span className="text-2xl shrink-0">{emoji}</span>
              <div>
                <h3 className="font-bold mb-1 text-sm">{t}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-10">שלושה שלבים</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {steps.map(({ icon, t, d }) => (
              <div key={t} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-zinc-900 text-white rounded-2xl flex items-center justify-center">{icon}</div>
                <h3 className="font-bold">{t}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-zinc-400 text-xs mt-8">
            תוכנת עבודה: iZotope RX — תקן התעשייה לניקוי שמע מקצועי
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-10">מחירון ניקוי רעשים</h2>
        <div className="flex flex-col divide-y divide-zinc-100 border border-zinc-200 rounded-2xl overflow-hidden">
          {pricing.map(({ t, p, desc }) => (
            <div key={t} className="flex items-center justify-between gap-4 p-6 bg-white hover:bg-zinc-50 transition-colors">
              <div className="text-right">
                <p className="font-bold text-zinc-900">{t}</p>
                <p className="text-zinc-400 text-xs">{desc}</p>
              </div>
              <div className="shrink-0 text-left">
                <span className="font-serif text-xl font-black text-[#D42B2B]">₪{p}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-start gap-2">
          <CheckCircle2 size={14} className="text-[#D42B2B] mt-0.5 shrink-0" />
          <p className="text-zinc-400 text-xs">כל המחירים אינם כוללים מע&quot;מ (18%). זמן מסירה: עד 24 שעות עסקים.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">מוכנים לנקות את הקובץ?</h2>
        <p className="text-zinc-400 mb-6">שלחו לנו קובץ בוואטסאפ — נחזור עם הצעה תוך שעות.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            058-7-555-456 וואטסאפ
          </Link>
          <Link href="/online/vocal-fix/pitch-correction" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            גם צריכים תיקון זיופים?
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותי שיפור קול נוספים"
        pages={[
          { label: "תיקון זיופים", href: "/online/vocal-fix/pitch-correction", desc: "Melodyne — שירה שנשמעת כמו שצריך" },
          { label: "מיקסינג", href: "/online/vocal-fix/mixing", desc: "כל הכלים בהרמוניה, מ-350 ₪" },
          { label: "כל שירותי שיפור הקול", href: "/online/vocal-fix", desc: "כל מה שאפשר לעשות אונליין" },
        ]}
      />
    </div>
  );
}
