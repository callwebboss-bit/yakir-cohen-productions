import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "בלוג | יקיר כהן הפקות — מוזיקה, הפקה ואירועים",
  description:
    "מדריכים, טיפים ותוכן מקצועי על הקלטת שירים, הפקת פודקאסט, DJ לאירועים ואטרקציות. מבית יקיר כהן הפקות.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "הבלוג של יקיר כהן הפקות",
    description: "מדריכים מקצועיים על מוזיקה, הפקה ואירועים.",
    url: `${SITE_URL}/blog`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "הבלוג של יקיר כהן הפקות",
  "url": `${SITE_URL}/blog`,
  "description": "מדריכים, טיפים ותוכן מקצועי על מוזיקה, הפקה ואירועים.",
  "publisher": {
    "@type": "Organization",
    "name": "יקיר כהן הפקות",
    "url": `${SITE_URL}`,
  },
};

const posts = [
  {
    slug: "ai-dj-music",
    category: "בינה מלאכותית",
    title: "DJ עם AI: הטכנולוגיה שמשנה את הסאונד של אירועים",
    desc: "איך AI שינה את מה שאפשרי מאחורי דוכן ה-DJ — מיקס חכם, זיהוי קהל, ומה זה אומר לחתונה שלכם.",
    readTime: "6 דקות קריאה",
  },
  {
    slug: "recording-events-songs",
    category: "אולפן הקלטות",
    title: "הקלטת שירים לאירועים: כיצד AI הפך את זה לנגיש",
    desc: "תיקון זיופים אוטומטי, עיבוד סאונד חכם, ואולפן שמגיע אליכם. כך נשמעת הקלטת שיר בעידן החדש.",
    readTime: "5 דקות קריאה",
  },
  {
    slug: "viral-5m-views",
    category: "ויראלי",
    title: "5 מיליון צפיות — הסרטון שכבש את הרשת",
    desc: "חצה 5M צפיות בכל הפלטפורמות. מה גרם לו לפרוץ ומה AI עשה עם ההפצה שלו.",
    readTime: "4 דקות קריאה",
  },
  {
    slug: "wedding-songs-chuppah",
    category: "חתונות",
    title: "שירים לכניסה לחופה — המדריך המלא 2026",
    desc: "איך בוחרים שיר לכניסה לחופה? מה ההבדל בין שיר ידוע לשיר מקורי? כל מה שצריך לדעת לפני הרגע הגדול.",
    readTime: "6 דקות קריאה",
  },
  {
    slug: "magazine-wedding",
    category: "חתונות",
    title: "מוזיקה בחתונה — המדריך המלא לתכנון נכון",
    desc: "DJ מול נגינה חיה, שיר כניסה, ריקוד סלואו — כל השלבים המוזיקליים בחתונה ואיך לתכנן אותם.",
    readTime: "8 דקות קריאה",
  },
  {
    slug: "bar-bat-mitzvah",
    category: "בר ובת מצווה",
    title: "בר ובת מצווה — מדריך מוזיקה, ברכות ואטרקציות",
    desc: "שיר מקורי, ברכה מוקלטת, DJ, עשן כבד וקונפטי — כל מה שהופך בר/בת מצווה לחוויה שנזכרים בה.",
    readTime: "7 דקות קריאה",
  },
  {
    slug: "Studio-Tips",
    category: "אולפן הקלטות",
    title: "5 טיפים לפני שנכנסים לאולפן בפעם הראשונה",
    desc: "מה לעשות יום לפני, מה להביא לאולפן, ואיך לקבל את התוצאה הטובה ביותר מסשן ההקלטה.",
    readTime: "4 דקות קריאה",
  },
  {
    slug: "Music-Tips",
    category: "מוזיקה",
    title: "5 טיפים לשיפור הקול — לפני ובמהלך ההקלטה",
    desc: "חימום קול, נשימה, מרחק מהמיקרופון, הדמעה — מה שטכנאים שומעים שוב ושוב ורוצים שתדעו.",
    readTime: "5 דקות קריאה",
  },
  {
    slug: "RECORDS",
    category: "הוצאה לאור",
    title: "Records — הוצאת לאור עצמאית בישראל",
    desc: "מהקלטה ועד Spotify — ISRC, הפצה (DistroKid/TuneCore), ACUM, ושיווק. המדריך המלא.",
    readTime: "8 דקות קריאה",
  },
  {
    slug: "original-song-production-behind-the-scenes",
    category: "הפקה מוזיקלית",
    title: "מאחורי הקלעים של יצירה: המכניקה של הפקת שיר מקורי",
    desc: "5 השלבים שהופכים רעיון קטן לסינגל מוגמר — מכתיבת המילים ועד הפצה ברשתות. כולל דוגמת AI מהאולפן.",
    readTime: "7 דקות קריאה",
  },
  {
    slug: "how-records-in-real-studio-ins-israel",
    category: "אולפן הקלטות",
    title: "איך מקליטים באולפן אמיתי בישראל — המדריך 2026",
    desc: "מה ההבדל בין אולפן ביתי למקצועי, מה קורה בסשן, כמה עולה, ואיך בוחרים נכון.",
    readTime: "9 דקות קריאה",
  },
  {
    slug: "back-to-kindergarten",
    category: "אירועים",
    title: "חגיגת גן — מוזיקה ואטרקציות לסיום שנה",
    desc: "שיר מקורי עם שמות הילדים, קונפטי, בלוני ענק — כל מה שהופך טקס פרידה לזיכרון שנשאר.",
    readTime: "5 דקות קריאה",
  },
  {
    slug: "Attractions",
    category: "אטרקציות",
    title: "אטרקציות לאירועים 2026 — מה שווה ומה לא",
    desc: "עשן כבד, זיקוקים קרים, קונפטי — מה באמת עושה אפקט ומה רק נראה טוב בתמונות?",
    readTime: "4 דקות קריאה",
  },
];

const categoryColors: Record<string, string> = {
  "חתונות": "bg-rose-50 text-rose-700",
  "בר ובת מצווה": "bg-blue-50 text-blue-700",
  "אטרקציות": "bg-amber-50 text-amber-700",
  "אולפן הקלטות": "bg-zinc-100 text-zinc-700",
  "מוזיקה": "bg-green-50 text-green-700",
  "הוצאה לאור": "bg-purple-50 text-purple-700",
  "הפקה מוזיקלית": "bg-rose-50 text-rose-700",
  "אירועים": "bg-yellow-50 text-yellow-700",
  "בינה מלאכותית": "bg-violet-50 text-violet-700",
  "ויראלי": "bg-red-50 text-red-600",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · תוכן מקצועי
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-zinc-900"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          הבלוג שלנו
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto">
          מדריכים, טיפים ותוכן מקצועי — כדי שתגיעו לאולפן מוכנים.
        </p>
      </header>

      <main className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(({ slug, category, title, desc, readTime }) => (
            <article key={slug} className="bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-900 transition-all group flex flex-col">
              <div className="p-8 flex flex-col gap-4 flex-grow">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[category] ?? "bg-zinc-100 text-zinc-600"}`}>
                    {category}
                  </span>
                  <span className="text-xs text-zinc-400">{readTime}</span>
                </div>
                <h2 className="font-serif text-xl font-bold leading-snug text-right">
                  {title}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed text-right flex-grow">
                  {desc}
                </p>
                <Link
                  href={`/blog/${slug}`}
                  className="text-sm font-bold text-[#D42B2B] group-hover:underline text-right mt-auto"
                >
                  {`קראו על ${title} ←`}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <RelatedPages
        title="שירותים שיכולים לעניין אתכם"
        pages={[
          { label: "הקלטת שירים מקצועית", href: "/studio/recording-song-modiin", desc: "מ-990 ₪ כולל הכל" },
          { label: "DJ לאירועים", href: "/events/dj-events", desc: "חתונות ובר/בת מצווה" },
          { label: "הפקת פודקאסט", href: "/podcast/podcast-production", desc: "מרעיון לשידור" },
        ]}
      />
    </div>
  );
}
