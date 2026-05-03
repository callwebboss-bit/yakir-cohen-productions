import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "Records — הוצאת לאור עצמאית | יקיר כהן הפקות",
  description:
    "כל מה שצריך לדעת על הוצאת שיר עצמאית בישראל: הפצה לפלטפורמות, זכויות יוצרים, ISRC, DistroKid — מדריך מקיף למוזיקאים.",
  alternates: { canonical: "https://www.yakircohen.com/blog/RECORDS" },
  openGraph: {
    title: "Records — הוצאת לאור עצמאית | יקיר כהן הפקות",
    description: "הפצה עצמאית, ISRC, זכויות יוצרים — מדריך למוזיקאים.",
    url: "https://www.yakircohen.com/blog/RECORDS",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Records — הוצאת לאור עצמאית בישראל",
  "author": { "@type": "Person", "name": "יקיר כהן" },
  "publisher": { "@type": "Organization", "name": "יקיר כהן הפקות", "url": "https://www.yakircohen.com" },
  "datePublished": "2026-01-01",
  "mainEntityOfPage": "https://www.yakircohen.com/blog/RECORDS",
};

const steps = [
  {
    n: "01",
    title: "הקלטה ומיקס — הבסיס",
    content: `לפני שמוציאים שיר — צריך שיר שנשמע טוב. לא "טוב ביחס לבית" — טוב ביחס למה שישמע ב-Spotify לצד שירי A-List.

זה אומר: הקלטה בחדר אקוסטי, מיקס מקצועי, מאסטרינג ל-LUFS הנכון (-14 לספוטיפיי, -16 לפודקאסטים, -14 ליוטיוב).

השיר הכי חשוב בקריירה שלכם הוא הראשון שיצא — כי הוא מגדיר ציפיות.`,
  },
  {
    n: "02",
    title: "ISRC — מזהה השיר הבינלאומי",
    content: `ISRC (International Standard Recording Code) הוא ה-"מספר תעודת זהות" של ההקלטה שלכם.

בישראל ניתן לרשום דרך ACUM. זה חינם, לוקח כמה ימים, ונחוץ כדי לקבל תשלומי תמלוגים דרך פלטפורמות.

בלי ISRC — הפלטפורמה תנפיק קוד משלה, ואתם מאבדים שליטה על מעקב הסטרימינג.`,
  },
  {
    n: "03",
    title: "הפצה — DistroKid, TuneCore, או CD Baby?",
    content: `שלוש הפצות נפוצות למוזיקאים עצמאיים:

DistroKid — המהיר ביותר. 22$/שנה לשירים ללא הגבלה. מחלק 100% מהתמלוגים. מומלץ.

TuneCore — 14.99$ לשיר/שנה. ממשק ישן יותר, אבל עם יותר כלי מעקב.

CD Baby — עמלה חד-פעמית + 9% מהרווחים. מתאים אם לא תוציאו הרבה שירים.

הבחירה לרוב: DistroKid עם Musician Plus לניהול מתקדם.`,
  },
  {
    n: "04",
    title: "ACUM ושמירת זכויות",
    content: `אם כתבתם את השיר — אתם זכאים לתמלוגי ביצוע דרך ACUM.

תהליך ההצטרפות ל-ACUM לוקח 3-4 שבועות, ומצריך רישום שיר עם פרטי המחבר, מלחין ומבצע.

כשהשיר משוחק ברדיו, בפלטפורמות, בחנויות — ACUM אוסף ומחלק. בלי רישום — הכסף לא מגיע אליכם.`,
  },
  {
    n: "05",
    title: "שיווק — לפני ולא רק אחרי",
    content: `הטעות הנפוצה ביותר: מוציאים שיר, ורק אז מתחילים לדבר עליו.

Pre-save Spotify — שבועיים לפני. Teaser ב-TikTok/Reels עם קטע של 15 שניות. Press release לפלייליסטים ישראליים.

יום השחרור הוא לא הסוף — הוא ה"התחלה של הגל". לפחות 4 שבועות של פוסטים, Reels, Shorts לפי הצג.`,
  },
];

export default function RecordsPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">הוצאה לאור</span>
            <span className="text-zinc-400 text-xs">8 דקות קריאה</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-900"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            Records
            <br />
            <span className="text-[#D42B2B]">הוצאת לאור עצמאית — המדריך</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto">
            מהקלטה ועד Spotify — כל מה שצריך לדעת על הוצאת שיר עצמאית בישראל: ISRC, הפצה, ACUM, ושיווק.
          </p>
        </div>
      </header>

      <article className="py-16 px-6 max-w-3xl mx-auto w-full">
        <div className="flex flex-col gap-10">
          {steps.map(({ n, title, content }) => (
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

        <div className="mt-12 p-8 bg-zinc-50 border border-zinc-200 rounded-2xl">
          <h2 className="font-serif text-xl font-bold mb-3">מוכנים להתחיל?</h2>
          <p className="text-zinc-500 text-sm mb-5">
            הקלטה באולפן + מיקס + מאסטרינג — הכל כלול. מ-990 ₪.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/studio/recording-song-modiin"
              className="bg-[#D42B2B] text-white px-6 py-3 rounded font-bold text-sm hover:bg-red-700 transition-colors"
            >
              הקלטת שיר ראשון
            </Link>
            <Link
              href="/online/vocal-fix/mixing"
              className="border border-zinc-300 px-6 py-3 rounded font-bold text-sm hover:border-zinc-900 transition-all"
            >
              מיקס לשיר קיים
            </Link>
          </div>
        </div>
        <p className="text-zinc-400 text-xs text-center mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </article>

      <RelatedPages
        title="המשיכו לקרוא"
        pages={[
          { label: "הקלטת שיר מקורי", href: "/studio/recording-song-modiin/original-song", desc: "שיר שנכתב עליכם" },
          { label: "מיקס ומאסטרינג", href: "/online/vocal-fix/mixing", desc: "אונליין מ-290 ₪" },
          { label: "5 טיפים לאולפן", href: "/blog/Studio-Tips", desc: "לפני הסשן הראשון" },
        ]}
      />
    </div>
  );
}
