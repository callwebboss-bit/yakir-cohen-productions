import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ImageIcon } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "שיפור תמונות אונליין — עריכה ורטוש מקצועי | יקיר כהן הפקות",
  description:
    "שיפור תמונות מאירועים: תאורה, חידוד, הסרת אלמנטים מפריעים, רטוש — בשליחה אונליין. מ-29 ₪ לתמונה.",
  alternates: { canonical: "https://www.yakircohen.com/online/vocal-fix/photo-enhance" },
  openGraph: {
    title: "שיפור תמונות אונליין | יקיר כהן הפקות",
    description: "עריכה ורטוש מקצועי לתמונות מאירועים. מ-29 ₪.",
    url: "https://www.yakircohen.com/online/vocal-fix/photo-enhance",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "שיפור תמונות אונליין — יקיר כהן הפקות",
  "description": "עריכה ורטוש מקצועי לתמונות מאירועים — שליחה אונליין, קבלה תוך 24 שעות. מ-29 ₪.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
  "offers": { "@type": "Offer", "price": "29", "priceCurrency": "ILS" },
};

const fixes = [
  {
    emoji: "🌅",
    t: "תאורה ואקספוזיציה",
    d: "תמונה כהה מדי, בהירה מדי, או עם צל על הפנים — מתוקנת לרמה שנראית טבעית.",
  },
  {
    emoji: "✨",
    t: "חידוד ופוקוס",
    d: "תמונה קצת מטושטשת מקבלת חיזוק חדות — בגבולות הסביר, בלי לפגוע באיכות.",
  },
  {
    emoji: "🎨",
    t: "עיבוד צבע",
    d: "גוני עור לא טבעיים, תאורת ניאון שצובעת את הפנים — מנורמלים לצבע שנראה אמיתי.",
  },
  {
    emoji: "🗑️",
    t: "הסרת אלמנטים",
    d: "מכונית ברקע, קיר כתוב, אדם לא רצוי — מוסרים עם AI ועריכה ידנית.",
  },
  {
    emoji: "💆",
    t: "רטוש עדין",
    d: "פצעים זמניים, אדמומיות, עייפות — רטוש שמשפר בלי לשנות את האדם.",
  },
  {
    emoji: "📐",
    t: "יישור וחיתוך",
    d: "אופק עקום, קומפוזיציה לא מאוזנת — מיושרים לתמונה שנראית מכוונת.",
  },
];

const tiers = [
  {
    name: "בסיסי",
    price: "29",
    unit: "לתמונה",
    includes: ["תיקון חשיפה ותאורה", "עיבוד צבע", "חידוד"],
    dark: false,
  },
  {
    name: "מלא",
    price: "59",
    unit: "לתמונה",
    includes: ["הכל מ'בסיסי'", "הסרת אלמנטים", "רטוש עדין", "יישור וחיתוך"],
    dark: true,
  },
  {
    name: "חבילה",
    price: "199",
    unit: "5 תמונות",
    includes: ["עריכה מלאה ל-5 תמונות", "עדיפות 12 שעות", "סגנון עקבי לכולן"],
    dark: false,
  },
];

export default function PhotoEnhancePage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · שירות אונליין
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-zinc-900"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          שיפור תמונות אונליין.
          <br />
          <span className="text-[#D42B2B]">תמונה אחת שווה את הרגע.</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8">
          שולחים תמונה, מקבלים גרסה מוגמרת תוך 24 שעות — ללא תוכנה, ללא ניסיון, ללא פגישה.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            שלחו תמונה עכשיו
          </Link>
          <Link
            href="/online"
            className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all"
          >
            כל שירותי האונליין
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">מה מתקנים?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {fixes.map(({ emoji, t, d }) => (
            <div
              key={t}
              className="flex flex-col gap-3 p-6 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all"
            >
              <span className="text-3xl">{emoji}</span>
              <h3 className="font-serif text-base font-bold">{t}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-10">
            <ImageIcon size={22} className="text-[#D42B2B]" />
            <h2 className="font-serif text-2xl font-bold">מחירון</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map(({ name, price, unit, includes, dark }) => (
              <div
                key={name}
                className={`rounded-2xl p-7 ${dark ? "bg-zinc-900 text-white" : "bg-white border border-zinc-200"}`}
              >
                <p className="text-sm font-bold mb-2 text-zinc-400">{name}</p>
                <p className={`text-4xl font-serif font-black mb-1 text-[#D42B2B]`}>{price} ₪</p>
                <p className={`text-xs mb-5 ${dark ? "text-zinc-500" : "text-zinc-400"}`}>{unit}</p>
                <ul className="flex flex-col gap-2 text-sm text-right">
                  {includes.map((f) => (
                    <li key={f} className="flex items-center gap-2 justify-end">
                      <span className={dark ? "text-zinc-300" : "text-zinc-600"}>{f}</span>
                      <CheckCircle2 size={13} className="text-[#D42B2B] shrink-0" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-zinc-400 text-xs text-center mt-6">המחירים אינם כוללים מע&quot;מ (18%)</p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto w-full text-center">
        <h2 className="font-serif text-2xl font-bold mb-4">איך שולחים?</h2>
        <p className="text-zinc-500 leading-relaxed mb-6">
          שלחו וואטסאפ עם התמונה + מה אתם רוצים לתקן. תקבלו מחיר סופי + אישור לפני שמתחילים.
          לאחר אישור — זמן עיבוד עד 24 שעות. חבילות — עד 48 שעות.
        </p>
        <div className="bg-zinc-100 rounded-2xl p-6 text-right max-w-md mx-auto">
          <p className="font-bold text-zinc-800 mb-2">פורמטים נתמכים:</p>
          <p className="text-zinc-500 text-sm">JPG, PNG, HEIC, RAW (CR2, NEF, ARW)</p>
          <p className="font-bold text-zinc-800 mt-4 mb-2">הפלט:</p>
          <p className="text-zinc-500 text-sm">JPG ברזולוציה מלאה (זהה לקלט)</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">שלחו תמונה לשיפור</h2>
        <p className="text-zinc-400 mb-6">וואטסאפ — עם התמונה ותיאור קצר מה לתקן.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors"
          >
            058-7-555-456 וואטסאפ
          </Link>
          <Link
            href="/online/vocal-fix"
            className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors"
          >
            שיפור קול אונליין
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותים אונליין נוספים"
        pages={[
          { label: "ניקוי רעשים", href: "/online/vocal-fix/ניקוי-רעשים", desc: "הקלטה נקייה — 79 ₪" },
          { label: "תיקון זיופים", href: "/online/vocal-fix/pitch-correction", desc: "Melodyne אונליין" },
          { label: "מיקס ומאסטרינג", href: "/online/vocal-fix/mixing", desc: "מ-290 ₪ לשיר" },
        ]}
      />
    </div>
  );
}
