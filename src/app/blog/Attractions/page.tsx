import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "אטרקציות לאירועים 2026 — מה שווה ומה לא | יקיר כהן הפקות",
  description:
    "עשן כבד, זיקוקים קרים, קונפטי, בועות סבון — מה באמת עושה אפקט לאירוע ומה רק נראה טוב בתמונות. המדריך המעשי.",
  alternates: { canonical: `${SITE_URL}/blog/Attractions` },
  openGraph: {
    title: "אטרקציות לאירועים 2026 — מה שווה ומה לא",
    description: "עשן כבד, זיקוקים קרים, קונפטי — מה באמת עושה אפקט ומה רק נראה טוב בתמונות.",
    url: `${SITE_URL}/blog/Attractions`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "אטרקציות לאירועים 2026 — מה שווה ומה לא",
  author: { "@type": "Person", name: "יקיר כהן" },
  publisher: {
    "@type": "Organization",
    name: "יקיר כהן הפקות",
    url: `${SITE_URL}`,
    address: { "@type": "PostalAddress", addressLocality: "Modi'in", addressCountry: "IL" },
  },
  datePublished: "2026-01-01",
  mainEntityOfPage: `${SITE_URL}/blog/Attractions`,
};

const attractions = [
  {
    name: "עשן כבד",
    worth: true,
    why: "הכי מצולם. הכי מדובר. ריקוד הסלואו בתוך ענן לבן נשמר בזיכרון. לחתונות ובר מצוות — ה-ROI הכי גבוה מכל האטרקציות.",
    tip: "חשוב שה-DJ יעצור את המוזיקה שנייה לפני ההכנסה. השקט מגביר את הרגע.",
  },
  {
    name: "זיקוקים קרים",
    worth: true,
    why: "אפקט ויזואלי חזק שעובד גם בפנים. קרים — לא שורפים. מתאים לכניסת זוג, לגמר שיר, לרגע השיא.",
    tip: "שימו 2 עמודים ב-1.2 מטר מהצד. ל-30 שניות זה מספיק — אחרי 45 שניות הם נראים כמו עמוד עשן.",
  },
  {
    name: "קונפטי",
    worth: true,
    why: "בכניסת זוג, פתיחת מחרוזת, או סיום ריקוד — קונפטי מוסיף אנרגיה שקשה להשיג אחרת. הצבע חשוב: לבן/זהב נראה יוקרתי, צבעוני נראה כמו יום הולדת.",
    tip: "פנו לאולם מראש. יש אולמות שלא מאפשרים קונפטי בגלל עלויות ניקיון.",
  },
  {
    name: "בועות סבון",
    worth: false,
    why: "נראה טוב בתמונות, לא עושה רגע. בועות נפוצות מהר ונעלמות. הקהל לא מגיב אליהן כמו לעשן או לזיקוקים.",
    tip: "מתאים לאירועי ילדים. לחתונה או בר מצווה — השקיעו את התקציב במשהו אחר.",
  },
  {
    name: "לד במה",
    worth: true,
    why: "הופכת אולם קטן לנראה מקצועי. תאורה נכונה מעלה את כל האירוע — גם בצילומים וגם בתחושה.",
    tip: "עמדת לד ניידת מתאימה לאירועים קטנים. לחתונות מעל 150 איש — תסתכלו על Stage L.",
  },
];

export default function AttractionsPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">אטרקציות</span>
            <span className="text-zinc-400 text-xs">4 דקות קריאה</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-900"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            אטרקציות לאירועים 2026
            <br />
            <span className="text-[#D42B2B]">מה שווה ומה לא</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto">
            עשן כבד, זיקוקים קרים, קונפטי, בועות סבון. כולם נראים מגניב בסרטוני פרומו.
            אבל מה באמת עושה רגע לאירוע — ומה רק עולה כסף.
          </p>
        </div>
      </header>

      <article className="py-16 px-6 max-w-3xl mx-auto w-full">
        <div className="flex flex-col gap-10">
          {attractions.map(({ name, worth, why, tip }) => (
            <section key={name} className="border-b border-zinc-100 pb-10 last:border-0">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    worth ? "bg-green-50 text-green-700" : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {worth ? "שווה" : "לא חובה"}
                </span>
                <h2 className="font-serif text-2xl font-bold text-zinc-900">{name}</h2>
              </div>
              <p className="text-zinc-600 leading-relaxed mb-3 text-right">{why}</p>
              <p className="text-zinc-400 text-sm leading-relaxed text-right bg-zinc-50 rounded-xl px-4 py-3">
                <span className="font-bold text-zinc-600">טיפ: </span>{tip}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-8 p-8 bg-zinc-900 text-white rounded-2xl text-center">
          <h2 className="font-serif text-xl font-bold mb-3">
            רוצים לתכנן את האטרקציות לאירוע שלכם
          </h2>
          <p className="text-zinc-400 text-sm mb-5">
            שלחו הודעה עם פרטי האירוע — נחזור עם מה שמתאים לכם ולתקציב.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-6 py-3 rounded font-bold text-sm hover:bg-red-700 transition-colors">
              בואו נדבר
            </Link>
            <Link href="/attractions" className="border border-white/30 text-white px-6 py-3 rounded font-bold text-sm hover:bg-white/10 transition-colors">
              כל האטרקציות
            </Link>
          </div>
        </div>
        <p className="text-zinc-400 text-xs text-center mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </article>

      <RelatedPages
        title="המשיכו לקרוא"
        pages={[
          { label: "עמדת לד ניידת", href: "/events/led-booth", desc: "להשכרה לאירועים" },
          { label: "DJ עם במה ו-LED", href: "/events/stage-led-dj", desc: "הפקות גדולות מ-15,500 ₪" },
          { label: "DJ לאירועים", href: "/events/dj-events", desc: "חתונות ובר מצוות" },
        ]}
      />
    </div>
  );
}
