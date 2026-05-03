import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "מחירון אולפן הקלטות — שקיפות מלאה | יקיר כהן הפקות",
  description:
    "מחירון שקוף לכל שירותי האולפן: הקלטת שיר מ-990 ₪, פודקאסט מ-950 ₪, DJ לחתונה מ-12,650 ₪. ללא הפתעות. כל המחירים במקום אחד.",
  alternates: { canonical: "https://www.yakircohen.com/studio/pricing" },
  openGraph: {
    title: "מחירון אולפן | יקיר כהן הפקות",
    description: "הקלטת שיר מ-990 ₪, פודקאסט מ-950 ₪, DJ מ-7,500 ₪. שקיפות מלאה.",
    url: "https://www.yakircohen.com/studio/pricing",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "מחירון שירותי יקיר כהן הפקות",
  "url": "https://www.yakircohen.com/studio/pricing",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "הקלטת שיר", "url": "https://www.yakircohen.com/studio/recording-song-modiin" },
    { "@type": "ListItem", "position": 2, "name": "הפקת פודקאסט", "url": "https://www.yakircohen.com/podcast/podcast-production" },
    { "@type": "ListItem", "position": 3, "name": "DJ לאירועים", "url": "https://www.yakircohen.com/events/dj-events" },
    { "@type": "ListItem", "position": 4, "name": "אטרקציות לאירועים", "url": "https://www.yakircohen.com/attractions" },
  ],
};

const pricingCategories = [
  {
    category: "🎤 אולפן הקלטות",
    href: "/studio/recording-song-modiin",
    items: [
      { name: "הקלטת שיר", price: "990", unit: "שיר", note: "כולל טכנאי, תיקון זיופים, מיקס WAV+MP3" },
      { name: "שיר + קליפ 4K", price: "מ-2,800", unit: "פרויקט", note: "שיר + צילום + עריכת וידאו מקצועית" },
      { name: "הפקה מלאה", price: "מ-7,800", unit: "פרויקט", note: "הפקה, עיבוד, קליפ 4K פרימיום" },
    ],
  },
  {
    category: "🎙️ הפקת פודקאסט",
    href: "/podcast/podcast-production",
    items: [
      { name: "הקלטה בלבד", price: "950", unit: "פרק", note: "הקלטה, ניקוי רעשים, WAV+MP3" },
      { name: "הקלטה + עריכה", price: "1,500", unit: "פרק", note: "הכל + עריכת תוכן + מוזיקת רקע" },
      { name: "מכונת תוכן סושיאל", price: "2,800", unit: "פרק", note: "הכל + וידאו מולטי-קאם + קליפי סושיאל" },
    ],
  },
  {
    category: "🎧 DJ ואירועים",
    href: "/events/dj-events",
    items: [
      { name: "DJ לבר/בת מצווה", price: "מ-7,500", unit: "אירוע", note: "ציוד מקצועי, תיאום מלא, שירים לפי בקשה" },
      { name: "DJ לחתונה", price: "מ-12,650", unit: "אירוע", note: "הפקה מוזיקלית מלאה כולל גיבוי ציוד" },
    ],
  },
  {
    category: "✨ אטרקציות לאירועים",
    href: "/attractions",
    items: [
      { name: "אטרקציה בודדת", price: "1,750", unit: "אירוע", note: "עשן כבד, זיקוקים קרים, קונפטי או בועות" },
      { name: "חבילה כפולה", price: "3,200", unit: "אירוע", note: "2 אטרקציות לבחירה" },
      { name: "4+ אטרקציות", price: "מ-5,500", unit: "אירוע", note: "כולל קליפ היילייטס מתנה" },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-900 text-white text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · שקיפות מחירים
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          מחירון שקוף.
          <br />
          <span className="text-[#D42B2B]">ללא הפתעות בסוף.</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-xl mx-auto">
          כל המחירים כאן, מראש, ברורים. כי מי שמחפש איכות לא צריך להסתיר מחיר.
        </p>
      </header>

      <main className="py-20 px-6 max-w-5xl mx-auto w-full">
        <div className="flex flex-col gap-16">
          {pricingCategories.map(({ category, href, items }) => (
            <section key={category}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl font-bold">{category}</h2>
                <Link href={href} className="text-sm font-bold text-[#D42B2B] hover:underline">
                  פרטים נוספים ←
                </Link>
              </div>
              <div className="border border-zinc-200 rounded-2xl overflow-hidden">
                {items.map(({ name, price, unit, note }, i) => (
                  <div
                    key={name}
                    className={`flex items-center justify-between gap-4 p-6 ${i < items.length - 1 ? "border-b border-zinc-100" : ""} hover:bg-zinc-50 transition-colors`}
                  >
                    <div className="flex flex-col gap-1 text-right flex-grow">
                      <span className="font-bold text-zinc-900">{name}</span>
                      <span className="text-zinc-400 text-xs">{note}</span>
                    </div>
                    <div className="text-left shrink-0">
                      <span className="font-serif text-xl font-black text-zinc-900">₪{price}</span>
                      <span className="text-zinc-400 text-xs ms-1">/ {unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8 p-6 bg-zinc-50 border border-zinc-200 rounded-2xl flex items-start gap-3">
          <CheckCircle2 size={18} className="text-[#D42B2B] mt-0.5 shrink-0" />
          <p className="text-zinc-600 text-sm leading-relaxed text-right">
            <strong>הערת מע&quot;מ:</strong> כל המחירים המוצגים אינם כוללים מע&quot;מ (18%). המחיר הסופי יכלול מע&quot;מ בחשבונית.
          </p>
        </div>

        <div className="mt-16 text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">לא מצאתם מה שחיפשתם?</h2>
          <p className="text-zinc-500 mb-6">שלחו הודעה ונבנה הצעת מחיר מותאמת.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
              058-7-555-456 וואטסאפ
            </Link>
            <Link href="/contact" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
              טופס יצירת קשר
            </Link>
          </div>
        </div>
      </main>

      <RelatedPages
        title="שירותים מפורטים"
        pages={[
          { label: "הקלטת שירים", href: "/studio/recording-song-modiin", desc: "כל הפרטים על הקלטת שיר — מה כלול ואיך זה עובד" },
          { label: "הפקת פודקאסט", href: "/podcast/podcast-production", desc: "שלושה מסלולים לבחירה — מהקלטה בלבד עד מכונת תוכן" },
          { label: "DJ לאירועים", href: "/events/dj-events", desc: "חתונות, בר/בת מצווה — מה כלול בכל חבילה" },
        ]}
      />
    </div>
  );
}
