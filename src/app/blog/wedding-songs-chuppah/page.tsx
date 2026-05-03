import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import YouTube from "@/components/ui/YouTube";

export const metadata: Metadata = {
  title: "שירים לכניסה לחופה — המדריך המלא 2026 | יקיר כהן הפקות",
  description:
    "איך בוחרים שיר לכניסה לחופה? שיר ידוע מול שיר מקורי, ריקוד סלואו, כניסת חתן וכלה — כל מה שצריך לדעת. כולל אפשרות הקלטה מקצועית במודיעין.",
  alternates: { canonical: "https://www.yakircohen.com/blog/wedding-songs-chuppah" },
  openGraph: {
    title: "שירים לכניסה לחופה — המדריך המלא 2026",
    description: "איך בוחרים שיר לחופה? מדריך מקיף עם טיפים מקצועיים.",
    url: "https://www.yakircohen.com/blog/wedding-songs-chuppah",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "שירים לכניסה לחופה — המדריך המלא 2026",
  "description": "כל מה שצריך לדעת על בחירת שיר לכניסה לחופה, ריקוד סלואו ושירים מקוריים.",
  "author": { "@type": "Person", "name": "יקיר כהן" },
  "publisher": { "@type": "Organization", "name": "יקיר כהן הפקות", "url": "https://www.yakircohen.com" },
  "datePublished": "2026-01-01",
  "dateModified": "2026-04-01",
  "mainEntityOfPage": "https://www.yakircohen.com/blog/wedding-songs-chuppah",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "איך בוחרים שיר לכניסה לחופה?",
      "acceptedAnswer": { "@type": "Answer", "text": "בוחרים שיר שמרגש את שניכם — לא בהכרח מה שמודאי עכשיו. כדאי לשמוע אותו כמה פעמים ולשאול: האם הוא מתאים לקצב ההליכה? האם הוא מדבר עלינו?" },
    },
    {
      "@type": "Question",
      "name": "מה ההבדל בין שיר לכניסה לריקוד סלואו?",
      "acceptedAnswer": { "@type": "Answer", "text": "שיר הכניסה הוא מה שמלווה אתכם בהליכה לחופה — לרוב 2-3 דקות. ריקוד הסלואו הוא הריקוד הראשון של הזוג בסיום הטקס — לרוב שיר אחר, אינטימי יותר." },
    },
    {
      "@type": "Question",
      "name": "האם אפשר להקליט עיבוד מיוחד לשיר?",
      "acceptedAnswer": { "@type": "Answer", "text": "כן. באולפן יקיר כהן אפשר לקחת שיר מוכר ולהכניס לו עיבוד מותאם אישית — קצב, כלים, רגש. בסיום מקבלים קובץ מוכן לחתונה." },
    },
  ],
};

const sections = [
  {
    title: "למה שיר הכניסה כל כך חשוב?",
    content: `רגע הכניסה לחופה הוא הרגע שכולם מחכים לו. הצלם מכוון, האורחים מתרוממים, ואז — המוזיקה. השיר הנכון הופך רגע יפה לרגע שנשאר בזיכרון לעולם.

אנשים לא תמיד זוכרים את הנאום. הם כן זוכרים את השיר שנגן כשנכנסתם.`,
  },
  {
    title: "שיר ידוע לעומת שיר מקורי",
    content: `שיר ידוע מביא איתו זיכרונות — של האורחים, של שניכם. יש בו ביטחון: אתם יודעים שהוא עובד.

שיר מקורי הוא הצהרה אחרת לגמרי. זה "הלחנו את השיר שלנו, זה אנחנו". זה משהו שלא שמעתם אותו בחתונה של אף אחד אחר, ולא תשמעו.

אין נכון ולא נכון. השאלה היא מה מרגיש לכם אותנטי.`,
  },
  {
    title: "כניסת חתן, כניסת כלה — שיר שונה?",
    content: `חלק מהזוגות בוחרים שיר אחד לשניהם. חלק רוצים שיר נפרד לכל אחד.

שיר לכניסת החתן לרוב יותר ריתמי, עם אנרגיה. שיר הכניסה של הכלה — לרוב רגשי, אולי כולל ליווי כלים אקוסטיים.

אם בוחרים שניים — כדאי לוודא שהם שייכים לאותו "עולם מוזיקלי" כדי שהמעבר ירגיש טבעי.`,
  },
  {
    title: "ריקוד הסלואו — איך בוחרים?",
    content: `ריקוד הסלואו הוא הריקוד הראשון של הזוג לאחר הטקס. זה הרגע האינטימי ביותר מבין כל הרגעים המוסיקליים בחתונה.

כמה שאלות שעוזרות לבחור:
• מה השיר שמזכיר לנו את ההתחלה שלנו?
• מה השיר שנרצה לשמוע בגיל 80 ולזכור?
• האם קצב השיר מתאים לריקוד זוגי נוח?

אל תלכו רק לפי מה שמודאי. לכו לפי מה שמרגש.`,
  },
  {
    title: "הכינו עיבוד אישי לשיר שלכם",
    content: `אפשרות שהרבה זוגות לא מכירים: לקחת שיר ידוע ולהכין לו עיבוד מותאם אישית.

זה אומר: אותה מנגינה, אבל עם הקצב שמתאים לכם, עם הכלים שאוהבים, עם אווירה ייחודית. אפשר להוסיף ברכה מוקלטת בתחילת השיר, שם, משפט.

זה מה שאנחנו עושים באולפן — לוקחים שיר שאוהבים ומכניסים לו את הרגש שלכם.`,
  },
];

export default function WeddingSongsBlogPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />

      {/* Article Header */}
      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-rose-50 text-rose-700 text-xs font-bold px-3 py-1 rounded-full">חתונות</span>
            <span className="text-zinc-400 text-xs">6 דקות קריאה</span>
            <span className="text-zinc-400 text-xs">עודכן 2026</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-900"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            שירים לכניסה לחופה
            <br />
            <span className="text-[#D42B2B]">המדריך המלא 2026</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto">
            בחירת שיר לחופה היא אחת ההחלטות המוזיקליות החשובות ביותר בחתונה. המדריך הזה יעזור לכם לבחור נכון.
          </p>
        </div>
      </header>

      {/* Article Body */}
      <article className="py-16 px-6 max-w-3xl mx-auto w-full">
        {sections.map(({ title, content }) => (
          <section key={title} className="mb-12">
            <h2
              className="font-serif text-2xl font-bold mb-4 text-zinc-900"
            >
              {title}
            </h2>
            <div className="prose prose-zinc max-w-none text-right">
              {content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-zinc-600 leading-relaxed mb-4 text-right">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        {/* Video */}
        <section className="my-12">
          <h2 className="font-serif text-2xl font-bold mb-3 text-zinc-900 text-center">
            ראו איך זה נראה באולפן
          </h2>
          <p className="text-center text-zinc-500 mb-4 text-sm">
            לוקחים שיר מוכר ומכניסים לו את הרגש שלכם — לחופה
          </p>
          <YouTube
            url="https://www.youtube.com/watch?v=r8Xk2_m9FJ8"
            title="הקלטת שיר לכניסה לחופה — יקיר כהן הפקות"
          />
        </section>

        {/* FAQ section */}
        <section className="mt-12 border-t border-zinc-100 pt-12">
          <h2 className="font-serif text-2xl font-bold mb-8">שאלות נפוצות</h2>
          <dl className="flex flex-col divide-y divide-zinc-100">
            {[
              { q: "איך בוחרים שיר לכניסה לחופה?", a: "בוחרים שיר שמרגש את שניכם — לא בהכרח מה שמודאי עכשיו. שמעו אותו כמה פעמים ושאלו: האם הוא מתאים לקצב ההליכה? האם הוא מדבר עלינו?" },
              { q: "האם אפשר להקליט עיבוד מיוחד לשיר?", a: "כן. באולפן אפשר לקחת שיר מוכר ולהכין עיבוד מותאם אישית — קצב, כלים, רגש. בסיום מקבלים קובץ מוכן לחתונה." },
              { q: "כמה זמן לפני החתונה כדאי להכין את השיר?", a: "מומלץ לפחות חודש לפני — כדי שיהיה זמן לשינויים אם צריך. אבל גם שבועיים לפני אפשר לעשות הפקה בסיסית." },
            ].map(({ q, a }) => (
              <div key={q} className="py-5">
                <dt className="font-bold mb-2 text-right">{q}</dt>
                <dd className="text-zinc-500 text-sm leading-relaxed text-right">{a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </article>

      {/* CTA Banner */}
      <div className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">רוצים להכין שיר לחופה?</h2>
        <p className="text-zinc-400 mb-6 max-w-md mx-auto">
          מגיעים לאולפן, לוקחים שיר שאוהבים, ויוצאים עם קובץ מוכן לחתונה.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/studio/recording-song-modiin" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            לעמוד הקלטת שירים
          </Link>
          <Link href="/contact/whatsapp" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            058-7-555-456 וואטסאפ
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </div>

      <RelatedPages
        title="קראו עוד"
        pages={[
          { label: "הקלטת שיר לחתונה", href: "/studio/recording-song-modiin", desc: "מ-990 ₪ — שיר מוכן ביום ההקלטה" },
          { label: "DJ לחתונה", href: "/events/dj-events", desc: "מוזיקה לכל שלבי הערב" },
          { label: "כל המאמרים", href: "/blog", desc: "עוד תוכן מקצועי" },
        ]}
      />
    </div>
  );
}
