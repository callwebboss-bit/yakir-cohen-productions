import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "מוזיקה בחתונה — המדריך המלא לתכנון נכון | יקיר כהן הפקות",
  description:
    "שיר הכניסה, ריקוד הסלואו, שיר הכניסה לאולם, נגינה חיה מול DJ — כל מה שצריך לדעת לתכנן את המוזיקה בחתונה.",
  alternates: { canonical: "https://www.yakircohen.com/blog/magazine-wedding" },
  openGraph: {
    title: "מוזיקה בחתונה — המדריך המלא",
    description: "שיר כניסה, סלואו, DJ מול נגינה חיה. כל מה שצריך לדעת.",
    url: "https://www.yakircohen.com/blog/magazine-wedding",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "מוזיקה בחתונה — המדריך המלא לתכנון נכון",
  "author": { "@type": "Person", "name": "יקיר כהן" },
  "publisher": { "@type": "Organization", "name": "יקיר כהן הפקות", "url": "https://www.yakircohen.com" },
  "datePublished": "2026-01-01",
  "mainEntityOfPage": "https://www.yakircohen.com/blog/magazine-wedding",
};

const sections = [
  {
    title: "שלבי המוזיקה בחתונה",
    content: `חתונה מחולקת לכמה שלבים מוזיקליים מובחנים. כל שלב דורש אווירה שונה, קצב שונה, ולפעמים אפילו ז'אנר שונה.

הקבלת פנים — מוזיקת רקע, לרוב אינסטרומנטלית. לא חזק מדי — אנשים צריכים לדבר.

הכניסה לחופה — הרגע הדרמטי. שיר שמרגש, שקצבו מתאים להליכה, שאומר מי אתם.

הטקס — שקט ומכוון. אם יש נגינה חיה — מינורית ורגשית. אם DJ — volume נמוך.

הריקוד הראשון (סלואו) — אינטימי, לאט, שיר שמדבר עליכם.

הערב — אנרגיה, ריקודים, קצב שמשתנה בדיוק ברגע הנכון.`,
  },
  {
    title: "DJ מול נגינה חיה — מה מתאים לכם?",
    content: `אין תשובה אחת נכונה. יש שאלות שעוזרות לבחור.

נגינה חיה מביאה אנרגיה שונה — אנשים מרגישים את הנוכחות. אבל עולה יותר, דורש rehearsal, ויש גבולות למה שאפשר לנגן.

DJ יכול לנגן הכל — כל שיר, כל קצב, עם מעברים חלקים. הגמישות גבוהה מאד.

הרבה זוגות בוחרים שילוב: נגינה חיה בקבלת פנים ובחופה, DJ לשאר הערב. זה עובד מצוין.`,
  },
  {
    title: "שיר הכניסה לחופה — איך בוחרים?",
    content: `שיר הכניסה הוא אחת ההחלטות המוזיקליות החשובות בחתונה. כמה שאלות שעוזרות:

האם הקצב מתאים לקצב ההליכה? שיר שמהיר מדי יוצר אי-נוחות, שיר שאיטי מדי — תחושה של מתיחה.

האם שניכם מרגישים אותו? לא מספיק שאחד אוהב — שניכם צריכים להרגיש שזה שלכם.

האם האורחים יכירו אותו? זה לא חובה — אבל שיר מוכר יוצר תגובה מיידית.

שקלו גם שיר עם עיבוד אישי — אותה מנגינה, אבל מותאמת לרגע שלכם.`,
  },
  {
    title: "ריקוד הסלואו — הרגע האינטימי",
    content: `ריקוד הסלואו הוא הריקוד הראשון של הזוג לאחר הטקס. זה הרגע הכי אינטימי מבין כל הרגעים המוסיקליים.

כמה שאלות שעוזרות לבחור שיר:
מה השיר שמזכיר לנו את ההתחלה שלנו?
מה השיר שנרצה לשמוע בגיל 80 ולזכור?
האם קצב השיר מתאים לריקוד זוגי נוח?

אל תלכו רק לפי מה שמודאי. לכו לפי מה שמרגש.`,
  },
];

export default function MagazineWeddingPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={articleSchema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-rose-50 text-rose-700 text-xs font-bold px-3 py-1 rounded-full">חתונות</span>
            <span className="text-zinc-400 text-xs">8 דקות קריאה</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-900" style={{ fontFamily: '"Frank Ruhl Libre", serif' }}>
            מוזיקה בחתונה
            <br />
            <span className="text-[#D42B2B]">המדריך המלא לתכנון נכון</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto">
            מה ההבדל בין DJ לנגינה חיה, איך בוחרים שיר כניסה, ומה צריך לדעת על כל שלב מוזיקלי בחתונה.
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

        <div className="mt-12 p-8 bg-zinc-50 border border-zinc-200 rounded-2xl">
          <h2 className="font-serif text-xl font-bold mb-3">רוצים לשדרג את המוזיקה בחתונה?</h2>
          <p className="text-zinc-500 text-sm mb-5">הקלטת שיר אישי, DJ מקצועי, או שניהם — אנחנו כאן.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/studio/recording-song-modiin" className="bg-[#D42B2B] text-white px-6 py-3 rounded font-bold text-sm hover:bg-red-700 transition-colors">הקלטת שיר לחתונה</Link>
            <Link href="/events/dj-events" className="border border-zinc-300 px-6 py-3 rounded font-bold text-sm hover:border-zinc-900 transition-all">DJ לחתונה</Link>
          </div>
        </div>
        <p className="text-zinc-400 text-xs mt-4 text-center">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </article>

      <RelatedPages
        title="קראו עוד"
        pages={[
          { label: "שירים לכניסה לחופה", href: "/blog/wedding-songs-chuppah", desc: "המדריך המלא 2026" },
          { label: "DJ לחתונה", href: "/events/dj-events", desc: "חבילות מ-12,650 ₪" },
          { label: "הקלטת שיר לחתונה", href: "/studio/recording-song-modiin", desc: "שיר אישי מ-990 ₪" },
        ]}
      />
    </div>
  );
}
