import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "תיקון שמע מקצועי — קליקים, Clipping, קטיעות | יקיר כהן הפקות",
  description:
    "תיקון שמע מקצועי: קליקים, Clipping, קטיעות, נפילות — מה שנשמע שבור, אנחנו מתקנים. שולחים קובץ, מקבלים תוצאה. מ-120 ₪.",
  alternates: { canonical: `${SITE_URL}/online/vocal-fix/audio-repair` },
  openGraph: {
    title: "תיקון שמע | יקיר כהן הפקות",
    description: "קליקים, Clipping, קטיעות. מ-120 ₪.",
    url: `${SITE_URL}/online/vocal-fix/audio-repair`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "תיקון שמע מקצועי — יקיר כהן הפקות",
  "description": "תיקון שמע: קליקים, Clipping, קטיעות. מ-120 ₪.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
  "offers": { "@type": "Offer", "price": "120", "priceCurrency": "ILS" },
};

const problems = [
  { emoji: "⚡", t: "Clipping", d: "עוצמה שעלתה מדי — הקול 'נשרף'. מחזירים אותו לחיים עם iZotope De-Clip." },
  { emoji: "🖱️", t: "קליקים ופצפוצים", d: "קליקים חשמליים, קלוד-פה, פיצוץ P/B — מסירים אחד אחד בלי לפגוע בשאר." },
  { emoji: "✂️", t: "קטיעות וחורים", d: "חלקים שנעלמו מהקלטה, silence לא מכוון — מחברים בצורה חלקה." },
  { emoji: "📉", t: "נפילות עוצמה", d: "מילים שנבלעו, דינמיקה שבורה — מאזנים ומחזירים עקביות לאורך כל הקובץ." },
  { emoji: "🔄", t: "הכפלות ו-Reverb לא רצוי", d: "הד שנכנס בטעות, reverb חדר שמקלקל — מסירים בדיוק גבוה." },
  { emoji: "🎙️", t: "בעיות מיקרופון", d: "Handling noise, פצפוץ ממגע, רעש מכני — מה שנכנס ממנגנון המיקרופון עצמו." },
];

const pricing = [
  { t: "קובץ אחד — תיקון בסיסי", p: "120", d: "עד 5 דקות, סוג תקלה אחד" },
  { t: "קובץ אחד — תיקון מלא", p: "220", d: "עד 30 דקות, כמה סוגי תקלות" },
  { t: "פרויקט מרובה קבצים", p: "לפי הצעה", d: "אלבום / סדרת פרקים — מחיר מוזל" },
];

export default function AudioRepairPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-white border-b border-zinc-100 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-zinc-200" />
          יקיר כהן הפקות · תיקון שמע
          <span className="inline-block w-5 h-px bg-zinc-200" />
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          תיקון שמע מקצועי.
          <br />
          <span className="text-[#D42B2B]">מה שנשמע שבור — אנחנו מתקנים. מ-120 ₪.</span>
        </h1>
        <p className="text-zinc-500 max-w-lg mx-auto mb-6 leading-relaxed">
          קליקים, Clipping, קטיעות, נפילות — עם iZotope RX מתקנים מה שנדמה שאי אפשר לתקן.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            שלחו קובץ לתיקון
          </Link>
          <Link href="/online/vocal-fix" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
            כל שירותי שיפור הקול
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">אילו תקלות מתקנים?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map(({ emoji, t, d }) => (
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

      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">iZotope RX — תקן התעשייה</h2>
          <p className="text-zinc-500 leading-relaxed mb-6">
            iZotope RX היא תוכנת תיקון השמע המקצועית ביותר בשוק — משמשת אולפנים, הפקות סרטים, רדיו ונטפליקס. עם iZotope RX אפשר לתקן תקלות שבעבר דרשו הקלטה מחדש.
          </p>
          <ul className="flex flex-col gap-3 max-w-lg mx-auto text-right">
            {["De-Clip — שחזור Clipping", "De-Click — הסרת קליקים", "Spectral Repair — שחזור קטעים", "De-Reverb — הסרת הד"].map((item) => (
              <li key={item} className="flex items-center gap-3 justify-end">
                <span className="text-zinc-700 text-sm">{item}</span>
                <CheckCircle2 size={16} className="text-[#D42B2B] shrink-0" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-10">מחירון תיקון שמע</h2>
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
        <p className="text-zinc-400 text-xs mt-3">המחירים אינם כוללים מע&quot;מ. זמן מסירה: 24-48 שעות.</p>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">יש לכם קובץ בעייתי?</h2>
        <p className="text-zinc-400 mb-6">שלחו — נבדוק ונחזור עם הערכה.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">058-7-555-456 וואטסאפ</Link>
          <Link href="/online/vocal-fix/ניקוי-רעשים" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">גם ניקוי רעשים?</Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותי שיפור קול נוספים"
        pages={[
          { label: "ניקוי רעשים", href: "/online/vocal-fix/ניקוי-רעשים", desc: "מזגן, הד, נשימות — מ-79 ₪" },
          { label: "תיקון זיופים", href: "/online/vocal-fix/pitch-correction", desc: "Melodyne ידני — מ-150 ₪" },
          { label: "מיקסינג", href: "/online/vocal-fix/mixing", desc: "EQ, Compression, Reverb — מ-350 ₪" },
        ]}
      />
    </div>
  );
}
