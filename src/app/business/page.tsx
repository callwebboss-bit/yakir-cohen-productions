import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import StudioRecordsSVG from "@/components/StudioRecordsSVG";

export const metadata: Metadata = {
  title: "שירותים לעסקים — קריינות, הגברה, הפקת תוכן | יקיר כהן הפקות",
  description:
    "קריינות מקצועית, הפקת סרטוני תדמית, הגברה לכנסים וימי גיבוש — שירותי אודיו ואירועים לחברות ועסקים בכל הארץ.",
  alternates: { canonical: "https://www.yakircohen.com/business" },
  openGraph: {
    title: "שירותים לעסקים | יקיר כהן הפקות",
    description: "קריינות, הגברה, הפקת תוכן — לחברות ועסקים.",
    url: "https://www.yakircohen.com/business",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "שירותים לעסקים — יקיר כהן הפקות",
  "description": "קריינות מקצועית, הגברה לכנסים, הפקת תוכן — לחברות ועסקים.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
};

const services = [
  {
    emoji: "🎙️",
    title: "קריינות מקצועית",
    href: "/business/professional-voiceover",
    desc: "קריינות לסרטוני תדמית, מצגות, IVR וטלפוניה — בעברית ובאנגלית. סקריפט + הקלטה + מיקס.",
    tag: "פופולרי",
  },
  {
    emoji: "�",
    title: "ניהול סושיאל מדיה",
    href: "/business/social-media-management",
    desc: "ניהול מלא של חשבונות סושיאל — תוכן יומי, עיצוב premium, ביצועים גבוהים. מ-₪1,500/חודש.",
    tag: "חדש",
  },
  {
    emoji: "�📞",
    title: "קריינות לטלפוניה",
    href: "/business/professional-voiceover/phone-voiceover",
    desc: "\"ברוכים הבאים לחברת X\" — תפריט IVR, הודעות ממתינים, הכוונה קולית. תוך 24 שעות.",
    tag: "",
  },
  {
    emoji: "🏢",
    title: "קריינות קורפורטיבית",
    href: "/business/professional-voiceover/corporate-voiceover",
    desc: "סרטוני אונבורדינג, הדרכה, תדמית — קול שמייצג את המותג שלכם בצורה המדויקת.",
    tag: "",
  },
  {
    emoji: "🔊",
    title: "הגברה לכנסים וגיבושים",
    href: "/events/equipment",
    desc: "מערכות PA לכנסים, ימי גיבוש, אירועי MICE — עם הקמה, פירוק וטכנאי סאונד.",
    tag: "",
  },
  {
    emoji: "🎬",
    title: "הפקת פודקאסט לחברה",
    href: "/podcast/podcast-production",
    desc: "פודקאסט פנים-ארגוני או שיווקי — מהקונספט לאוויר. תוכן שבונה אמון.",
    tag: "",
  },
  {
    emoji: "✏️",
    title: "כתיבת סקריפטים",
    href: "/studio/recording-song-modiin/blessing-writing",
    desc: "כתיבת טקסט לסרטון, IVR, מצגת — שפה שמדברת בשפת הלקוח שלכם.",
    tag: "",
  },
];

const clients = [
  "חברות טכנולוגיה",
  "בתי חולים ומרפאות",
  "רשויות מקומיות",
  "בתי ספר ואוניברסיטאות",
  "חברות ביטוח ופיננסים",
  "מותגי קמעונאות",
];

export default function BusinessPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      {/* Dynamic Glassmorphism Hero */}
      <div className="relative mb-16 rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <StudioRecordsSVG />
        </div>
        <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-md p-12 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4 italic text-white">שירותים לעסקים</h1>
          <p className="text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
            קריינות מקצועית, הגברה לכנסים, הפקת תוכן — שירותי אודיו ואירועים לחברות ועסקים בכל הארץ.
          </p>
        </div>
      </div>

      <header className="py-20 px-6 bg-zinc-900 border-b border-zinc-800 text-white text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
          יקיר כהן הפקות · B2B
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          שירותים לעסקים.
          <br />
          <span className="text-[#D42B2B]">קול שמייצג אתכם נכון.</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">
          קריינות, הגברה לכנסים, פודקאסט ארגוני — שירותי אודיו ואירועים לחברות ועסקים מכל הגדלים.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            בקשו הצעת מחיר
          </Link>
          <Link
            href="/business/professional-voiceover"
            className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors"
          >
            קריינות מקצועית
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">שירותים לעסקים</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ emoji, title, href, desc, tag }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-4 p-7 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{emoji}</span>
                {tag && (
                  <span className="text-xs font-bold bg-[#D42B2B]/10 text-[#D42B2B] px-2 py-1 rounded-full">
                    {tag}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-lg font-bold">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed flex-grow">{desc}</p>
              <p className="text-xs font-bold text-[#D42B2B] group-hover:underline">פרטים ←</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold mb-8">עם מי עובדים</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {clients.map((c) => (
              <span
                key={c}
                className="bg-white border border-zinc-200 text-zinc-700 text-sm font-medium px-4 py-2 rounded-full"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-zinc-500 text-sm mt-8 max-w-lg mx-auto">
            מספקים חשבונית מס, ניתן לחייב דרך ספק מאושר. זמן תגובה להצעת מחיר: עד 4 שעות עסקיות.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">בקשו הצעת מחיר</h2>
        <p className="text-zinc-400 mb-6">שלחו פרטים על הפרויקט — נחזור עם הצעה תוך 4 שעות עסקיות.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors"
          >
            058-7-555-456 וואטסאפ
          </Link>
          <Link
            href="/contact"
            className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors"
          >
            טופס יצירת קשר
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותים נוספים"
        pages={[
          { label: "קריינות מקצועית", href: "/business/professional-voiceover", desc: "לסרטונים, IVR, תדמית" },
          { label: "הגברה לאירועים", href: "/events/equipment", desc: "כנסים וגיבושים — מ-1,200 ₪" },
          { label: "הפקת פודקאסט", href: "/podcast/podcast-production", desc: "פודקאסט ארגוני מקצה לקצה" },
        ]}
      />
    </div>
  );
}
