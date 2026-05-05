import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";

type SiteGroup = {
  title: string;
  pages: { href: string; label: string; desc: string }[];
};

export const metadata: Metadata = {
  title: "מפת אתר",
  description: "מפת אתר אנושית לניווט, קראול וגילוי עמודי השירות והתוכן של יקיר כהן הפקות.",
  alternates: { canonical: `${SITE_URL}/site-map` },
};

const groups: SiteGroup[] = [
  {
    title: "אולפן",
    pages: [
      { href: "/studio", label: "אולפן הקלטות", desc: "עמוד האב של שירותי האולפן" },
      { href: "/studio/recording-song-modiin", label: "הקלטת שירים", desc: "hub של מסלולי ההקלטה" },
      { href: "/studio/blessings", label: "ברכות מקצועיות", desc: "hub לברכות, דרשות ושירי אירוע" },
      { href: "/studio/pricing", label: "מחירון אולפן", desc: "כל החבילות במקום אחד" },
      { href: "/studio/studio-jerusalem", label: "אולפן ירושלים", desc: "מסלול מותאם ללקוחות ירושלים" },
    ],
  },
  {
    title: "פודקאסט",
    pages: [
      { href: "/podcast", label: "פודקאסט", desc: "עמוד האב של שירותי הפודקאסט" },
      { href: "/podcast/podcast-production", label: "הפקת פודקאסט", desc: "הפקה, עריכה והפצה" },
      { href: "/podcast/podcast-studio", label: "אולפן פודקאסט", desc: "סביבת הקלטה מקצועית" },
      { href: "/podcast/mobile-studio", label: "אולפן נייד", desc: "הקלטה מחוץ לאולפן" },
      { href: "/podcast/podcast-equipment", label: "ציוד פודקאסט", desc: "מיקרופונים, מצלמות ותאורה" },
    ],
  },
  {
    title: "אירועים",
    pages: [
      { href: "/attractions", label: "אטרקציות לאירועים", desc: "hub של עשן, קונפטי, זיקוקים ועוד" },
      { href: "/events/dj-events", label: "DJ לאירועים", desc: "שירותי DJ לחתונות ואירועים" },
      { href: "/dj-events/cities", label: "DJ לפי עיר", desc: "עמודי נחיתה לערים" },
      { href: "/events/led-booth", label: "עמדת לד", desc: "עמדת לד ניידת לאירועים" },
      { href: "/photography", label: "צילום אירועים", desc: "עמוד האב של שירותי הצילום" },
    ],
  },
  {
    title: "אונליין",
    pages: [
      { href: "/online", label: "שירותים אונליין", desc: "hub של כל שירותי העריכה מרחוק" },
      { href: "/online/vocal-fix", label: "שיפור קול", desc: "hub של ניקוי רעשים, מיקס ותיקון" },
      { href: "/online/vocal-fix/stem-split", label: "Stem Split", desc: "פיצול ערוצים והפרדת ווקאל" },
      { href: "/online/online-ai-pricing", label: "מחירון אונליין", desc: "מחירים וזמני טיפול" },
      { href: "/stemsplit", label: "StemSplit", desc: "עמוד ייעודי לכלי הפיצול" },
    ],
  },
  {
    title: "עסקים ואקדמיה",
    pages: [
      { href: "/business", label: "שירותים לעסקים", desc: "hub לקריינות, תוכן והגברה" },
      { href: "/business/professional-voiceover", label: "קריינות מקצועית", desc: "עמוד האב של הקריינות" },
      { href: "/business/social-media-management", label: "ניהול סושיאל", desc: "שירות תוכן וניהול ערוצים" },
      { href: "/academy", label: "אקדמיה", desc: "עמוד האב של מסלולי הלימוד" },
      { href: "/academy/home-studio", label: "אולפן ביתי", desc: "הדרכה להקמת סביבת עבודה בבית" },
    ],
  },
  {
    title: "מידע ותוכן",
    pages: [
      { href: "/blog", label: "בלוג", desc: "עמוד האב של התוכן" },
      { href: "/about", label: "אודות", desc: "מידע על העסק ועל יקיר כהן" },
      { href: "/about/faq", label: "שאלות נפוצות", desc: "FAQ רוחבי לאתר" },
      { href: "/portfolio", label: "תיק עבודות", desc: "דוגמאות ופרויקטים" },
      { href: "/contact", label: "צור קשר", desc: "פנייה ישירה וזמינות" },
    ],
  },
];

export default function SiteMapPage() {
  return (
    <div className="flex flex-col bg-white" dir="rtl">
      <header className="border-b border-zinc-200 bg-zinc-50 px-6 py-16 text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-400">ניווט וקראול</p>
        <h1 className="mb-4 text-4xl font-bold text-zinc-900" style={{ fontFamily: '"Frank Ruhl Libre", serif' }}>
          מפת אתר
        </h1>
        <p className="mx-auto max-w-2xl text-zinc-500">
          דפי hub ראשיים ועמודי spoke מרכזיים לפי אשכולות תוכן. המטרה כאן היא גילוי, ניווט והקטנת עומק הסריקה.
        </p>
      </header>

      <main className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2">
        {groups.map((group) => (
          <section key={group.title} className="rounded-2xl border border-zinc-200 bg-white p-8">
            <h2 className="mb-6 text-2xl font-bold text-zinc-900" style={{ fontFamily: '"Frank Ruhl Libre", serif' }}>
              {group.title}
            </h2>
            <div className="flex flex-col gap-4">
              {group.pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="rounded-xl border border-zinc-100 bg-zinc-50 px-5 py-4 transition-colors hover:border-zinc-900 hover:bg-white"
                >
                  <div className="mb-1 font-bold text-zinc-900">{page.label}</div>
                  <div className="text-sm text-zinc-500">{page.desc}</div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
