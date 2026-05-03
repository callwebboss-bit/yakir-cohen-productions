import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "חגיגת גן — מוזיקה ואטרקציות לסיום גן | יקיר כהן הפקות",
  description:
    "מוזיקה, קונפטי, בלוני ענק ושיר מקורי לסיום שנת הגן — איך הופכים טקס פרידה לחוויה שהילדים יזכרו. מדריך הורים ומורים.",
  alternates: { canonical: "https://www.yakircohen.com/blog/back-to-kindergarten" },
  openGraph: {
    title: "חגיגת גן — מוזיקה לסיום שנת הגן | יקיר כהן הפקות",
    description: "שיר מקורי, קונפטי, בלוני ענק — מדריך לחגיגת הגן.",
    url: "https://www.yakircohen.com/blog/back-to-kindergarten",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "חגיגת גן — מוזיקה ואטרקציות לסיום שנת הגן",
  "author": { "@type": "Person", "name": "יקיר כהן" },
  "publisher": { "@type": "Organization", "name": "יקיר כהן הפקות", "url": "https://www.yakircohen.com" },
  "datePublished": "2026-01-01",
  "mainEntityOfPage": "https://www.yakircohen.com/blog/back-to-kindergarten",
};

const checklist = [
  { item: "שיר מקורי לגן", href: "/studio/recording-song-modiin/original-song", desc: "שיר עם שמות הילדים — שנשמע ב-Spotify" },
  { item: "בלוני ענק", href: "/attractions/giant-balloons", desc: "ויזואל שכולם מצלמים" },
  { item: "קונפטי לפרידה", href: "/attractions/confetti-cannon", desc: "פיצוץ שמחה לרגע הנכון" },
  { item: "ברכה מוקלטת מגננת", href: "/studio/blessings", desc: "מילים שנשארות לנצח" },
];

const sections = [
  {
    title: "שיר מקורי — מתנה לכל חייהם",
    content: `שיר שנכתב עם שמות כל ילדי הגן הוא אחת המתנות שהורים מספרים עליהן גם עשרים שנה אחר כך.

לא שיר קיים. לא "שירי ילדות" שכולם מכירים. שיר חדש — עם השם של כל ילד, עם מה שקרה השנה בגן, עם הגננת ועם הקסם שהיה.

הגננת מספרת, אנחנו כותבים ומקליטים — ויוצא שיר שיושמע בטקס ויישמר לנצח.`,
  },
  {
    title: "אטרקציות שעובדות עם ילדים",
    content: `לא כל אטרקציה מתאימה לגן. יש כמה כללים שעוזרים:

בטיחות — זיקוקים קרים (Cold Spark) בטוחים לילדים, אבל מגניבים לא פחות. עשן כבד — עדיף לא בגן, יכול להפחיד.

ויזואל מיידי — קונפטי ובלוני ענק עובדים מיד. אין זמן "טכני", הכל קורה בשנייה.

זיכרון — מה שמצלמים הוא מה שנזכרים. קונפטי + בלוני ענק = תמונות שמציפות את ה-WhatsApp של ההורים.`,
  },
  {
    title: "לוח זמנים לטקס מוצלח",
    content: `טקסי גן קצרים — בין 30 ל-60 דקות. הנה מבנה שעובד:

פתיחה (5 דקות): שיר פתיחה ידוע, כדי שהילדים "יתכנסו".
מרכז (20 דקות): מילים מהגננת, הענקת תעודות, רגעים אישיים.
שיא (2 דקות): השיר המקורי + קונפטי — זה הרגע שנצלם.
סיום (10 דקות): בלוני ענק, צילום משפחתי, חופשי.

הסוד: שיא אחד ממוקד עדיף על הרבה "רגעים מיוחדים" שמרגישים דחוסים.`,
  },
];

export default function BackToKindergartenPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-yellow-50 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">סיום גן</span>
            <span className="text-zinc-400 text-xs">5 דקות קריאה</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-900"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            חגיגת גן
            <br />
            <span className="text-[#D42B2B]">מוזיקה ואטרקציות לסיום שנה</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto">
            שיר מקורי עם שמות הילדים, קונפטי, בלוני ענק — כל מה שהופך טקס פרידה לזיכרון שנשאר.
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

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold mb-6 text-zinc-900">רשימת תיוג לטקס</h2>
          <div className="flex flex-col gap-3">
            {checklist.map(({ item, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center justify-between p-5 bg-white border border-zinc-200 rounded-xl hover:border-zinc-900 transition-all"
              >
                <span className="text-xs font-bold text-[#D42B2B] group-hover:translate-x-1 transition-transform">
                  ← פרטים
                </span>
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
        title="שירותים לאירועי ילדים"
        pages={[
          { label: "שיר מקורי לאירוע", href: "/studio/recording-song-modiin/original-song", desc: "מ-990 ₪" },
          { label: "בלוני ענק", href: "/attractions/giant-balloons", desc: "ויזואל שכולם מצלמים" },
          { label: "קונפטי לאירועים", href: "/attractions/confetti-cannon", desc: "פיצוץ שמחה מ-900 ₪" },
        ]}
      />
    </div>
  );
}
