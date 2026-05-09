import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { Mic, Phone, MonitorPlay, Speaker, Podcast, FileText } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import StudioRecordsSVG from "@/components/StudioRecordsSVG";
import WhatsAppTrackedLink from "@/components/WhatsAppTrackedLink";
import WaMeTrackedLink from "@/components/WaMeTrackedLink";

export const metadata: Metadata = {
  title: "שירותים לעסקים | קריינות, הגברה והפקת תוכן",
  description: "קריינות מקצועית, אודיו לעסקים, הגברה לאירועים והפקת תוכן לחברות וארגונים.",
  alternates: { canonical: `${SITE_URL}/business` },
  openGraph: {
    title: "שירותים לעסקים | יקיר כהן הפקות",
    description: "קריינות, אודיו לעסקים, הגברה והפקת תוכן.",
    url: `${SITE_URL}/business`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "שירותים לעסקים | יקיר כהן הפקות",
  description: "קריינות מקצועית, הגברה לכנסים והפקת תוכן לחברות ועסקים.",
  provider: { "@type": "LocalBusiness", name: "יקיר כהן הפקות", telephone: "+972-58-7555456" },
};

const services = [
  {
    Icon: Mic,
    title: "קריינות מקצועית",
    href: "/business/professional-voiceover",
    desc: "לסרטוני תדמית, מצגות, הדרכות ו-IVR. כתיבה, הקלטה ומסירה מסודרת.",
    tag: "מבוקש",
  },
  {
    Icon: MonitorPlay,
    title: "ניהול סושיאל מדיה",
    href: "/business/social-media-management",
    desc: "תוכן, וידאו וקצב עבודה שמתאים לעסק שרוצה להישאר נוכח בלי לנהל הכל לבד.",
    tag: "חדש",
  },
  {
    Icon: Phone,
    title: "קריינות לטלפוניה",
    href: "/business/professional-voiceover/phone-voiceover",
    desc: "ברוכים הבאים, הודעות המתנה, ניתובים קוליים ושפה אחידה למותג.",
    tag: "",
  },
  {
    Icon: Speaker,
    title: "קריינות לחברות",
    href: "/business/professional-voiceover/corporate-voiceover",
    desc: "סרטוני הדרכה, אונבורדינג, מצגות וסרטוני פנים ארגוניים.",
    tag: "",
  },
  {
    Icon: Podcast,
    title: "פודקאסט לעסק",
    href: "/podcast/podcast-production",
    desc: "מהקונספט ועד קובץ מוכן לפרסום. מתאים למותגים, מומחים וארגונים.",
    tag: "",
  },
  {
    Icon: FileText,
    title: "כתיבת סקריפטים",
    href: "/studio/recording-song-modiin/blessing-writing",
    desc: "טקסטים קצרים וברורים לסרטונים, קריינות, ברכות ותוכן קולי.",
    tag: "",
  },
];

const clients = [
  "חברות טכנולוגיה",
  "מרפאות ומרכזים רפואיים",
  "רשויות מקומיות",
  "בתי ספר ומכללות",
  "חברות ביטוח ופיננסים",
  "מותגים קמעונאיים",
];

export default function BusinessPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <div className="relative mb-16 rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <StudioRecordsSVG />
        </div>
        <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 p-12 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4 text-white">אולפן פודקאסטים והפקת סאונד לעסקים</h1>
          <p className="text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed mb-4">
            מיתוג קולי, פרסומות ופודקאסט. טון חד וברור שמתאים לקהל היעד שלכם.
          </p>
          <p className="text-zinc-300 text-sm max-w-2xl mx-auto leading-relaxed">
            כשצריך שהטלפון יצלצל אחרי הקול הנכון, משקיעים בפרוטוקול ברור: מה המטרה, מה ההקדמה לפרסום ומה הפורמט המסחרי שמתאים למסך הקטן או לרדיו.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <WaMeTrackedLink
              section="business_hero"
              linkLabel="פיילוט קריינות"
              href={`https://wa.me/972587555456?text=${encodeURIComponent("היי יקיר, רוצים פיילוט קריינות לעסק (IVR או פרסומת).")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-2xl bg-white text-zinc-900 px-6 py-3 font-bold hover:bg-zinc-100 transition-colors"
            >
              פיילוט קריינות — וואטסאפ
            </WaMeTrackedLink>
            <Link href="/podcast/podcast-production" className="inline-flex rounded-2xl border border-white/40 text-white px-6 py-3 font-bold hover:bg-white/10 transition-colors">
              הפקת פודקאסט
            </Link>
          </div>
        </div>
      </div>

      <header className="py-20 px-6 bg-zinc-900 border-b border-zinc-800 text-white text-center">
        <p className="text-xs font-bold tracking-widest text-zinc-500 mb-4">יקיר כהן הפקות • B2B</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: '"Frank Ruhl Libre", serif' }}>
          שירותים לעסקים.
          <br />
          <span className="text-[#D42B2B]">קול שמייצג אתכם נכון.</span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">
          קריינות, אודיו לעסק, פודקאסטים ותמיכה לאירועים. עבודה אחת מסודרת במקום לרדוף אחרי כמה ספקים.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <WhatsAppTrackedLink
            href="/contact/whatsapp"
            section="business_header_cta"
            linkLabel="בקשת הצעת מחיר"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            בקשת הצעת מחיר
          </WhatsAppTrackedLink>
          <Link href="/business/professional-voiceover" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">
            לעמוד הקריינות
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">שירותים לעסקים</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, href, desc, tag }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-4 p-7 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center">
                  <Icon size={22} />
                </div>
                {tag && (
                  <span className="text-xs font-bold bg-[#D42B2B]/10 text-[#D42B2B] px-2 py-1 rounded-full">
                    {tag}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-lg font-bold">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed flex-grow">{desc}</p>
              <p className="text-xs font-bold text-[#D42B2B] group-hover:underline">לפרטים</p>
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
            מוציאים חשבונית מס ופועלים מול עסקים, ארגונים ורשויות.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">רוצים הצעת מחיר?</h2>
        <p className="text-zinc-400 mb-6">שלחו לנו כמה שורות על הפרויקט ונחזור עם כיוון ראשוני בהקדם.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <WhatsAppTrackedLink
            href="/contact/whatsapp"
            section="business_footer_cta"
            linkLabel="058-7-555-456 ב-WhatsApp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors"
          >
            058-7-555-456 ב-WhatsApp
          </WhatsAppTrackedLink>
          <Link
            href="/contact"
            className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors"
          >
            טופס יצירת קשר
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">חלק מהתוכן באתר נוצר בסיוע בינה מלאכותית ועבר עריכה אנושית.</p>
      </section>

      <RelatedPages
        title="שירותים נוספים"
        pages={[
          { label: "קריינות מקצועית", href: "/business/professional-voiceover", desc: "לסרטונים, IVR ותדמית" },
          { label: "הגברה לאירועים", href: "/events/equipment", desc: "כנסים, ימי גיבוש ואירועי חברה" },
          { label: "הפקת פודקאסט", href: "/podcast/podcast-production", desc: "פודקאסט עסקי מקצה לקצה" },
        ]}
      />
    </div>
  );
}
