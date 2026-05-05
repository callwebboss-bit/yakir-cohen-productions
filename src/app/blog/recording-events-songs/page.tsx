import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import YouTube from "@/components/ui/YouTube";

export const metadata: Metadata = {
  title: "הקלטת שירים לאירועים: כיצד AI הפך את זה לנגיש | יקיר כהן הפקות",
  description:
    "מה זה אומר להקליט שיר לאירוע בעידן AI — תיקון זיופים אוטומטי, עיבוד סאונד חכם, ואולפן שמגיע אליכם. מודיעין.",
  alternates: { canonical: `${SITE_URL}/blog/recording-events-songs` },
  openGraph: {
    title: "הקלטת שירים לאירועים: AI ואולפן שמגיע אליכם",
    description: "תיקון זיופים, עיבוד חכם, ואולפן ניד — הקלטת שיר לאירוע בעידן החדש.",
    url: `${SITE_URL}/blog/recording-events-songs`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "article",
    images: [
      {
        url: `${SITE_URL}/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp`,
        width: 1200,
        height: 630,
        alt: "הקלטת שיר לאירוע — יקיר כהן הפקות",
      },
    ],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "הקלטת שירים לאירועים: כיצד AI הפך את זה לנגיש",
  author: { "@type": "Person", name: "יקיר כהן" },
  publisher: {
    "@type": "Organization",
    name: "יקיר כהן הפקות",
    url: `${SITE_URL}`,
    address: { "@type": "PostalAddress", addressLocality: "Modi'in", addressCountry: "IL" },
  },
  datePublished: "2026-05-01",
  mainEntityOfPage: `${SITE_URL}/blog/recording-events-songs`,
};

const sections = [
  {
    title: "מה זה הקלטת שיר לאירוע",
    content: `פעם, הקלטת שיר הייתה שייכת לזמרים מקצועיים עם תקציב. היום, כל מי שרוצה להקליט ברכה, שיר לחתונה, שיר לבר מצווה או שיר לפרידה מהגן — יכול לקבל תוצר שנשמע ברדיו.

הסיבה היא לא שהציוד נעשה זול יותר. הסיבה היא שהתוכנה חכמה יותר.`,
  },
  {
    title: "מה AI עושה בתהליך ההקלטה",
    content: `הדבר הכי מפחיד אנשים לפני שמקליטים הוא שהם לא שרים מושלם. זה לגמרי בסדר. זה בדיוק מה שתיקון זיופים פותר.

תוכנות מבוססות AI — Melodyne, Auto-Tune AI, ועוד — מזהות את הגובה המדויק שכיוונתם אליו, ומתקנות את הסטייה בלי לפגוע בצבע הקול. הקול נשמע כמו שלכם. רק יותר מדויק.

מעבר לזה, עיבוד רעשים מבוסס AI מסיר הד חדר, צליל מזגן, וכל מה שנכנס מהרחוב — גם אם הקלטתם לא בתנאים מושלמים.`,
  },
  {
    title: "הקלטה באולפן מול הקלטה מחוץ לאולפן",
    content: `האולפן הוא עדיין הבחירה הטובה ביותר לתוצאה המדויקת ביותר. חדר אקוסטי, מיקרופון קרדיואידי, ומהנדס שמקשיב — אלה שלושת הדברים שעושים הקלטה לנשמע כמו שהרגש מרגיש.

אבל לאירועים שצריכים להקליט במקום — ברכה בשדה, שיר מפתעה בחתונה, הופעה קצרה — יש עכשיו פתרונות ניידים שמביאים את רמת האולפן אל השטח.

הסרטון שלהלן מדגים הקלטת שיר לאירוע. שימו לב לאיכות הסאונד ביחס לסביבה שבה זה הוקלט.`,
  },
  {
    title: "כמה זמן לוקח",
    content: `סשן הקלטה בסיסי — שיר אחד, הקלטה ועריכה — נמשך 2 עד 3 שעות. הקובץ המוגמר מועבר ביום ההקלטה או תוך 24 שעות.

לאירועים שצריכים ביצוע מהיר יותר, יש מסלולי עריכה בשעות. מספרים לנו מה הלחץ ומתאימים.`,
  },
];

export default function RecordingEventsSongsPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-zinc-100 text-zinc-700 text-xs font-bold px-3 py-1 rounded-full">אולפן הקלטות</span>
            <span className="text-zinc-400 text-xs">5 דקות קריאה</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-900"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            הקלטת שירים לאירועים
            <br />
            <span className="text-[#D42B2B]">כיצד AI הפך את זה לנגיש</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto">
            תיקון זיופים אוטומטי, עיבוד סאונד חכם, ואולפן שמגיע אליכם.
            כך נשמעת הקלטת שיר לאירוע בעידן החדש.
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

        {/* YouTube */}
        <section className="mb-12">
          <YouTube
            url="https://www.youtube.com/watch?v=mWU9WimpAaw"
            title="הקלטת שיר לאירוע — יקיר כהן הפקות"
          />
        </section>

        {/* CTA */}
        <div className="mt-4 p-8 bg-zinc-900 text-white rounded-2xl text-center">
          <h2 className="font-serif text-xl font-bold mb-3">
            יש לכם שיר שמחכה להיקלט
          </h2>
          <p className="text-zinc-400 text-sm mb-5">
            שלחו הודעה עם התאריך ואנחנו נתאם. אולפן הקלטות מודיעין.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-6 py-3 rounded font-bold text-sm hover:bg-red-700 transition-colors">
              קבעו סשן
            </Link>
            <Link href="/studio/recording-song-modiin" className="border border-white/30 text-white px-6 py-3 rounded font-bold text-sm hover:bg-white/10 transition-colors">
              פרטים על ההקלטה
            </Link>
          </div>
        </div>
        <p className="text-zinc-400 text-xs text-center mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </article>

      <RelatedPages
        title="המשיכו לקרוא"
        pages={[
          { label: "הקלטת שירים מקצועית", href: "/studio/recording-song-modiin", desc: "מ-990 ₪ כולל הכל" },
          { label: "שיר לילדים", href: "/singerkids", desc: "הקלטה לילדים ואירועי גן" },
          { label: "הפקת שיר מקורי", href: "/blog/original-song-production-behind-the-scenes", desc: "5 שלבים מהרעיון לסינגל" },
        ]}
      />
    </div>
  );
}
