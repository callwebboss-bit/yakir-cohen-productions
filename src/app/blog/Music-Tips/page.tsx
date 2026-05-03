import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "5 טיפים לשיפור הקול שלכם — לפני ובמהלך ההקלטה | יקיר כהן הפקות",
  description:
    "טיפים מעשיים לשיפור ביצועי שירה: חימום, נשימה, מיקרופון טכניק, הדמעות, ועוד — ממה שטכנאים שמועים שוב ושוב.",
  alternates: { canonical: "https://www.yakircohen.com/blog/Music-Tips" },
  openGraph: {
    title: "5 טיפים לשיפור הקול | יקיר כהן הפקות",
    description: "טיפים מעשיים לשירה טובה יותר — מהאולפן.",
    url: "https://www.yakircohen.com/blog/Music-Tips",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "5 טיפים לשיפור הקול שלכם — לפני ובמהלך ההקלטה",
  "author": { "@type": "Person", "name": "יקיר כהן" },
  "publisher": { "@type": "Organization", "name": "יקיר כהן הפקות", "url": "https://www.yakircohen.com" },
  "datePublished": "2026-01-01",
  "mainEntityOfPage": "https://www.yakircohen.com/blog/Music-Tips",
};

const tips = [
  {
    n: "01",
    title: "חממו את הקול — לא רק את הגרון",
    content: `חימום קול לא מתחיל בגרגור. הוא מתחיל בגוף: כפות הרגליים על הרצפה, כתפיים למטה, לסת רפויה.

הקול הוא שריר — ושרירים קרים לא מופיעים טוב. 10 דקות חימום לפני הסשן יכולות לחסוך שעה של טייקים.

טיפ קונקרטי: התחילו מhum — אחר כך עיצורי "מ" ו"נ", אחר כך סולמות עולים ויורדים. קצר, ורטיקלי, לפני שאתם שרים אפילו תו אחד מהשיר.`,
  },
  {
    n: "02",
    title: "הנשימה היא הכלי — לא הקול",
    content: `זמרים חושבים על הקול. טכנאים שומעים את הנשימה.

כשהנשימה לא נשלטת — הפרזות יוצאות לא אחידות, הצלילים הגבוהים נשברים, ויש "נפילה" בסוף שורות.

תרגול פשוט: שירו כל שורה כאילו יש לכם עוד נשימה מאחוריה — לא כאילו אתם מרוקנים את הריאות. הטכנאי יבחין בהבדל מיד.`,
  },
  {
    n: "03",
    title: "מרחק מהמיקרופון — כלל האגודל",
    content: `מרחק קבוע מהמיקרופון = עוצמה אחידה = פחות עבודה בעריכה.

הכלל הבסיסי: אגודל + אצבע = 10–12 ס"מ. לצלילים גבוהים — התרחקו קצת. לפרזות רכות — התקרבו.

אל תזוזו ימינה ושמאלה — הזזה לצדדים שוברת את הצליל. רק קדימה/אחורה.`,
  },
  {
    n: "04",
    title: "הדמעה (vibrato) — לא בוטון שמפעילים",
    content: `הדמעה שנשמעת מאומצת בהקלטה — נשמעת מאומצת לנצח.

הדמעה טובה מגיעה מתנועת סרעפת, לא מלסת. אם אתם "מכריחים" את הדמעה — הטכנאי יבחין, ויהיה לכם טייק נוסף.

הפתרון: שירו את הצליל ישר, ותנו לדמעה לצמוח מעצמה. אם היא לא באה — אין בעיה. ישר לפעמים עדיף.`,
  },
  {
    n: "05",
    title: "שמעו את עצמכם — באוזן אחת",
    content: `אוזניות שתי אוזניים באולפן = בועה. אתם מנותקים מהחדר, מהטכנאי, ומהביצוע.

שמעו את הבק-טרק באוזן אחת — ושאירו את האוזן השנייה פתוחה. ככה שומעים את עצמכם אקוסטית, משתמשים פחות בפידבק מלאכותי, ושרים יותר טבעי.

זה מרגיש מוזר בהתחלה — ואחרי שני טייקים זה הרבה יותר נוח.`,
  },
];

export default function MusicTipsPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full">טיפים לשירה</span>
            <span className="text-zinc-400 text-xs">5 דקות קריאה</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-900"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            5 טיפים לשיפור הקול
            <br />
            <span className="text-[#D42B2B]">לפני ובמהלך ההקלטה</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto">
            מה ששומעים שוב ושוב מטכנאים — ומה שיכול לשנות את איכות הסשן שלכם בצורה מיידית.
          </p>
        </div>
      </header>

      <article className="py-16 px-6 max-w-3xl mx-auto w-full">
        <div className="flex flex-col gap-10">
          {tips.map(({ n, title, content }) => (
            <section key={n} className="flex gap-6">
              <span className="font-serif text-5xl font-black text-[#D42B2B] opacity-30 shrink-0 leading-none">
                {n}
              </span>
              <div>
                <h2 className="font-serif text-xl font-bold mb-4 text-zinc-900">{title}</h2>
                {content.split("\n\n").map((p, i) => (
                  <p key={i} className="text-zinc-600 leading-relaxed mb-3 text-right">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 p-8 bg-zinc-900 text-white rounded-2xl text-center">
          <h2 className="font-serif text-xl font-bold mb-3">מוכנים ליישם?</h2>
          <p className="text-zinc-400 text-sm mb-5">קניון עזריאלי מודיעין. מ-990 ₪ לסשן הראשון.</p>
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-3 rounded font-bold hover:bg-red-700 transition-colors"
          >
            קבעו סשן עכשיו
          </Link>
        </div>
        <p className="text-zinc-400 text-xs text-center mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </article>

      <RelatedPages
        title="טיפים ואולפן"
        pages={[
          { label: "5 טיפים לאולפן הראשון", href: "/blog/Studio-Tips", desc: "מה להביא ואיך להתכונן" },
          { label: "הקלטת שירים מקצועית", href: "/studio/recording-song-modiin", desc: "מ-990 ₪ כולל הכל" },
          { label: "שאלות נפוצות", href: "/about/faq", desc: "כל מה שרצית לדעת לפני" },
        ]}
      />
    </div>
  );
}
