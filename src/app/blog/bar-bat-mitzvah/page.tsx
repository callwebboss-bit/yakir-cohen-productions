import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "בר ובת מצווה — המדריך למוזיקה, ברכות ואטרקציות | יקיר כהן הפקות",
  description:
    "כל מה שצריך לדעת על מוזיקה ואטרקציות לבר/בת מצווה: שיר מקורי, ברכה מוקלטת, DJ, עשן כבד, קונפטי. מדריך מקיף.",
  alternates: { canonical: "https://www.yakircohen.com/blog/bar-bat-mitzvah" },
  openGraph: {
    title: "בר ובת מצווה — מדריך מוזיקה ואטרקציות",
    description: "שיר מקורי, ברכה, DJ, עשן, קונפטי — מדריך מקיף.",
    url: "https://www.yakircohen.com/blog/bar-bat-mitzvah",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "בר ובת מצווה — מדריך מוזיקה, ברכות ואטרקציות",
  "author": { "@type": "Person", "name": "יקיר כהן" },
  "publisher": { "@type": "Organization", "name": "יקיר כהן הפקות", "url": "https://www.yakircohen.com" },
  "datePublished": "2026-01-01",
  "mainEntityOfPage": "https://www.yakircohen.com/blog/bar-bat-mitzvah",
};

const checklist = [
  { item: "שיר מקורי לבר/בת מצווה", href: "/studio/recording-song-modiin/original-song", desc: "שיר שנכתב עליהם, על מי שהם" },
  { item: "ברכה מוקלטת מהורים / סבים", href: "/studio/blessings/bar-mitzvah", desc: "רגע שנשאר לנצח — 990 ₪" },
  { item: "DJ מקצועי לאירוע", href: "/events/dj-events", desc: "מוזיקה לכל שלבי הערב — מ-7,500 ₪" },
  { item: "עשן כבד לריקוד", href: "/attractions/wedding-smoking-machine", desc: "אפקט שכולם מצלמים" },
  { item: "זיקוקים קרים", href: "/attractions/cold-fireworks", desc: "ניצוצות בטוחים לכל מקום" },
  { item: "קונפטי", href: "/attractions/confetti-cannon", desc: "פיצוץ שמחה בצבעי האירוע" },
];

const sections = [
  {
    title: "שיר מקורי — המתנה שנשארת",
    content: `שיר שנכתב על הבן/בת שלכם הוא אחת המתנות המשמעותיות ביותר שאפשר לתת. לא שיר שקנו — שיר שנוצר.

יש שתי גישות: שיר שנכתב עליהם, על מי שהם, על הדרך שהגיעו עד כאן. או שיר שהם עצמם מבצעים — עם הקלטה מקצועית באולפן.

שניהם שווים — ושניהם גורמים לאולם לבכות.`,
  },
  {
    title: "ברכה מוקלטת — מה שנשמע גם עוד 30 שנה",
    content: `הורים שרוצים לברך, סבא וסבתא שרוצים לומר משהו — ברכה קולית מוקלטת מקצועית היא דרך לשמר את הרגע.

מגיעים לאולפן, מקליטים, ויוצאים עם קובץ שאפשר לנגן באירוע, להעלות לסושיאל, לשמור לנצח.

לא צריך ניסיון. לא צריך קול מיוחד. צריך להגיד מה שבלב.`,
  },
  {
    title: "אטרקציות — מה עושה אפקט ומה לא",
    content: `עשן כבד לריקוד — הקלאסיקה. מרהיב, מצולם, עובד. כמעט לכל אירוע בר/בת מצווה יש עשן.

זיקוקים קרים — ניצוצות שלא שורפים. פחות נפוץ, יותר דרמטי. משלים עשן בצורה מושלמת.

קונפטי — בדיוק ברגע הנכון. פיצוץ שמסמן את שיא האירוע.

בלוני ענק — ויזואלי, נצלם עם כולם, זזם שם כל הלילה.`,
  },
];

export default function BarBatMitzvahBlogPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">בר ובת מצווה</span>
            <span className="text-zinc-400 text-xs">7 דקות קריאה</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-900" style={{ fontFamily: '"Frank Ruhl Libre", serif' }}>
            בר ובת מצווה
            <br />
            <span className="text-[#D42B2B]">מדריך מוזיקה, ברכות ואטרקציות</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto">
            שיר מקורי, ברכה מוקלטת, DJ, עשן כבד וקונפטי — כל מה שהופך בר/בת מצווה לחוויה שנזכרים בה.
          </p>
        </div>
      </header>

      <article className="py-16 px-6 max-w-3xl mx-auto w-full">
        {sections.map(({ title, content }) => (
          <section key={title} className="mb-12">
            <h2 className="font-serif text-2xl font-bold mb-4 text-zinc-900">{title}</h2>
            {content.split("\n\n").map((p, i) => (
              <p key={i} className="text-zinc-600 leading-relaxed mb-4 text-right">{p}</p>
            ))}
          </section>
        ))}

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold mb-6 text-zinc-900">רשימת תיוג — מה לתכנן</h2>
          <div className="flex flex-col gap-3">
            {checklist.map(({ item, href, desc }) => (
              <Link key={href} href={href} className="group flex items-center justify-between p-5 bg-white border border-zinc-200 rounded-xl hover:border-zinc-900 transition-all">
                <span className="text-xs font-bold text-[#D42B2B] group-hover:translate-x-1 transition-transform">← פרטים</span>
                <div className="text-right">
                  <p className="font-bold text-zinc-900">{item}</p>
                  <p className="text-zinc-400 text-xs">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <p className="text-zinc-400 text-xs text-center">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </article>

      <RelatedPages
        title="שירותים לבר/בת מצווה"
        pages={[
          { label: "ברכה לבר מצווה", href: "/studio/blessings/bar-mitzvah", desc: "הקלטה מקצועית מ-990 ₪" },
          { label: "DJ לאירועים", href: "/events/dj-events", desc: "חבילות מ-7,500 ₪" },
          { label: "אטרקציות לאירועים", href: "/attractions", desc: "עשן, זיקוקים, קונפטי" },
        ]}
      />
    </div>
  );
}
