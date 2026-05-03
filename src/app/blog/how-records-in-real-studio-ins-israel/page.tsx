import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "איך מקליטים באולפן אמיתי בישראל — המדריך המלא | יקיר כהן הפקות",
  description:
    "מה ההבדל בין אולפן ביתי לאולפן מקצועי, מה קורה בסשן הקלטה, כמה עולה, ואיך מוצאים אולפן שמתאים לסגנון שלכם — מדריך 2026.",
  alternates: { canonical: "https://www.yakircohen.com/blog/how-records-in-real-studio-ins-israel" },
  openGraph: {
    title: "איך מקליטים באולפן אמיתי בישראל | יקיר כהן הפקות",
    description: "מה קורה בסשן הקלטה, כמה עולה, ואיך בוחרים אולפן — 2026.",
    url: "https://www.yakircohen.com/blog/how-records-in-real-studio-ins-israel",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "איך מקליטים באולפן אמיתי בישראל — המדריך המלא 2026",
  "author": { "@type": "Person", "name": "יקיר כהן" },
  "publisher": { "@type": "Organization", "name": "יקיר כהן הפקות", "url": "https://www.yakircohen.com" },
  "datePublished": "2026-01-01",
  "mainEntityOfPage": "https://www.yakircohen.com/blog/how-records-in-real-studio-ins-israel",
};

const sections = [
  {
    title: "אולפן מקצועי מול אולפן ביתי — מה ההבדל?",
    content: `אולפן ביתי = חדר שמישהו "עיצב" עם קצף סכין. אולפן מקצועי = חדר שנבנה מאפס עם אקוסטיקה מחושבת.

ההבדל לא נשמע ב-SoundCloud. הוא נשמע כשהשיר עולה ל-Spotify ואנשים שומעים אותו ברמקולים אמיתיים.

שלושה הבדלים עיקריים: (1) RT60 — זמן ריברב של החדר. אולפן מקצועי: 0.2–0.4 שניה. בית רגיל: 0.6–1.2 שניה. (2) מיקרופון — רכישה של 5,000$ שתפקידה אחד. (3) מוניטורינג — כשהטכנאי שומע מה שהמיקס ישמע בכל מקום, הוא מקבל החלטות טובות יותר.`,
  },
  {
    title: "מה קורה בסשן הקלטה?",
    content: `שלב 1 — Line Check: הטכנאי בודק שהמיקרופון עובד, מכווין את הגיין, בודק שאין רעשים. 10 דקות.

שלב 2 — חימום: שרים את השיר כמה פעמים בלי ללחוץ "הקלטה". מתרגלים את החדר.

שלב 3 — הקלטה: בממוצע 3–8 טייקים לשיר שלם. הטכנאי בוחר את הטובים, ומרכיב "composite" מהחלקים הכי טובים.

שלב 4 — Punch-In: מקליטים שורות ספציפיות מחדש — בלי לחזור על כל השיר.

שלב 5 — מיקס ומאסטרינג: בסוף או בסשן נפרד — תלוי בחבילה.`,
  },
  {
    title: "כמה עולה?",
    content: `בישראל: מחיר לסשן נע בין 300 ₪/שעה (אולפן בסיסי) ל-1,200 ₪/שעה (אולפן A-List ת"א).

אולפן שמוכר חבילה (הקלטה + מיקס + מאסטרינג) = בדרך כלל עסקה יותר טובה ממחיר לשעה.

בואו לא עם ציפיה ל-"ניגן ונראה" — זה יעלה הרבה יותר. בואו עם שיר מוכן, מלות בעל-פה, ובסשן של 2-3 שעות תצאו עם שיר גמור.`,
  },
  {
    title: "איך בוחרים אולפן?",
    content: `שאלות לשאול לפני שמזמינים:

מה הציוד? מיקרופון, קונסולה, DAW — שמות ספציפיים. "ציוד מקצועי" זו לא תשובה.

שמעו דוגמאות עבודה. לא מה שהאולפן הפיק — מה שהוקלט שם על ידי אמנים אחרים, בסגנון שלכם.

האם יש טכנאי סאונד, או שאתם לבד? אולפן Self-Service הוא לא אולפן הקלטות — הוא חדר עם מיקרופון.

מה כלול? האם מיקס ומאסטרינג זה חלק מהחבילה, או עלות נוספת?`,
  },
];

export default function HowRecordsInRealStudioPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-zinc-100 text-zinc-700 text-xs font-bold px-3 py-1 rounded-full">מדריך אולפן</span>
            <span className="text-zinc-400 text-xs">9 דקות קריאה</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-900"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            איך מקליטים
            <br />
            <span className="text-[#D42B2B]">באולפן אמיתי בישראל</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto">
            ההבדל בין אולפן ביתי למקצועי, מה קורה בסשן, כמה עולה, ואיך לבחור נכון — מדריך 2026.
          </p>
        </div>
      </header>

      <article className="py-16 px-6 max-w-3xl mx-auto w-full">
        {sections.map(({ title, content }) => (
          <section key={title} className="mb-12">
            <h2 className="font-serif text-2xl font-bold mb-4 text-zinc-900">{title}</h2>
            {content.split("\n\n").map((p, i) => (
              <p key={i} className="text-zinc-600 leading-relaxed mb-4 text-right">
                {p}
              </p>
            ))}
          </section>
        ))}

        <div className="mt-4 p-8 bg-zinc-900 text-white rounded-2xl text-center">
          <h2 className="font-serif text-xl font-bold mb-3">בואו לאולפן שלנו — מודיעין</h2>
          <p className="text-zinc-400 text-sm mb-5">
            הקלטה + מיקס + מאסטרינג — הכל כלול מ-990 ₪. קניון עזריאלי מודיעין. חניה חינם.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact/whatsapp"
              className="bg-[#D42B2B] text-white px-6 py-3 rounded font-bold text-sm hover:bg-red-700 transition-colors"
            >
              קבעו סשן
            </Link>
            <Link
              href="/studio/recording-song-modiin"
              className="border border-white/30 text-white px-6 py-3 rounded font-bold text-sm hover:bg-white/10 transition-colors"
            >
              פרטים על האולפן
            </Link>
          </div>
        </div>
        <p className="text-zinc-400 text-xs text-center mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </article>

      <RelatedPages
        title="המשיכו לקרוא"
        pages={[
          { label: "5 טיפים לאולפן הראשון", href: "/blog/Studio-Tips", desc: "מה להביא ואיך להתכונן" },
          { label: "הקלטת שירים מקצועית", href: "/studio/recording-song-modiin", desc: "האולפן שלנו — מ-990 ₪" },
          { label: "מחירון אולפן", href: "/studio/pricing", desc: "כל המחירים בשקיפות" },
        ]}
      />
    </div>
  );
}
