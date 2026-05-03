import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import YouTube from "@/components/ui/YouTube";

export const metadata: Metadata = {
  title: "DJ עם AI: הטכנולוגיה שמשנה את הסאונד של אירועים | יקיר כהן הפקות",
  description:
    "איך AI הפך את עבודת ה-DJ — זיהוי קצבים, מיקס חכם בזמן אמת, והתאמה אוטומטית לקהל. מה זה אומר לחתונות ובר מצוות בישראל.",
  alternates: { canonical: "https://www.yakircohen.com/blog/ai-dj-music" },
  openGraph: {
    title: "DJ עם AI: הטכנולוגיה שמשנה את הסאונד של אירועים",
    description: "איך AI שינה את מה שאפשרי מאחורי דוכן ה-DJ — ומה זה אומר לאירוע שלכם.",
    url: "https://www.yakircohen.com/blog/ai-dj-music",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "article",
    images: [
      {
        url: "https://www.yakircohen.com/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp",
        width: 1200,
        height: 630,
        alt: "DJ עם AI — יקיר כהן הפקות",
      },
    ],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "DJ עם AI: הטכנולוגיה שמשנה את הסאונד של אירועים",
  author: { "@type": "Person", name: "יקיר כהן" },
  publisher: { "@type": "Organization", name: "יקיר כהן הפקות", url: "https://www.yakircohen.com" },
  datePublished: "2026-05-01",
  mainEntityOfPage: "https://www.yakircohen.com/blog/ai-dj-music",
  keywords: "DJ AI, בינה מלאכותית מוזיקה, DJ לחתונה, DJ בר מצווה, יקיר כהן מודיעין",
};

const sections = [
  {
    title: "מה השתנה בשלוש השנים האחרונות",
    content: `לפני כמה שנים, DJ טוב היה בן אדם עם אוזן מוזיקלית ועשרות אלפי שירים בראש. היום הוא עדיין זה. אבל עכשיו יש לו שותף.

מודלי AI מנתחים קצב, טונאליות ואנרגיה של שיר תוך שברירי שנייה. הם מציעים את המעבר הבא. הם מזהים מתי הקהל עייף ומתי הוא מוכן לשיא. הם זוכרים כל שיר שרץ, בכל אירוע, ולומדים מה עבד.

ה-DJ עדיין מחליט. ה-AI רק עושה אותו מהיר ומדויק יותר.`,
  },
  {
    title: "ה-AI שעובד מאחורי הקלעים",
    content: `ישנן כמה טכנולוגיות שאפשר לראות בפועל בדוכן DJ מקצועי היום.

זיהוי BPM ומפתח בזמן אמת מאפשר מעבר חלק בין שירים שמעולם לא רצו ביחד. מנועי המלצות שמבוססים על רגש הקהל — לא רק ז'אנר — מציעים את השיר הבא לפי מה שה-A/V cameras רואות על רחבת הריקוד. ועיבוד סאונד מבוסס AI שמנרמל עוצמות ומותאם אקוסטית לכל חלל.

זה לא רובוט שמנגן לבד. זה כלי שמגביר את שיקול הדעת של האדם שמאחוריו.`,
  },
  {
    title: "מה זה אומר לאירוע שלכם",
    content: `בחתונה, הרגע בין שיר הכניסה לחופה לבין ריקוד הסלואו יכול לשבור או לבנות את כל הלילה. עם AI, המעבר הזה מחושב, מתוזמן ונבנה שתי שניות לפני שצריך לבצע אותו.

בבר מצווה, כשיש בערב גיל 8 ואנשים בגיל 70 ביחד, ה-AI עוזר לנווט בין שכבות שונות של קהל בלי שמישהו יצא לאכול.

הסאונד לא מרגיש חכם. הוא מרגיש טבעי. וזה בדיוק הרעיון.`,
  },
  {
    title: "כך זה נשמע בפועל",
    content: `בסרטון שלהלן תראו ריצה של DJ עם כלי AI פעיל בזמן אמת. שימו לב לאיך המעברים בין השירים מרגישים — לא מחוברים, אלא ממשיכים.`,
  },
];

export default function AiDjMusicPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-violet-50 text-violet-700 text-xs font-bold px-3 py-1 rounded-full">בינה מלאכותית</span>
            <span className="text-zinc-400 text-xs">6 דקות קריאה</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-900"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            DJ עם AI
            <br />
            <span className="text-[#D42B2B]">הטכנולוגיה שמשנה את הסאונד של אירועים</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto">
            מה שקורה מאחורי הדוכן בשנתיים האחרונות — ואיך זה מרגיש לקהל שלא יודע שזה קורה.
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

        {/* YouTube demo */}
        <section className="mb-12">
          <YouTube
            url="https://www.youtube.com/watch?v=lmYykgKAdUg"
            title="DJ עם AI בזמן אמת — יקיר כהן הפקות"
          />
        </section>

        {/* CTA */}
        <div className="mt-4 p-8 bg-zinc-900 text-white rounded-2xl text-center">
          <h2 className="font-serif text-xl font-bold mb-3">
            רוצים DJ שעובד ברמה הזו לאירוע שלכם
          </h2>
          <p className="text-zinc-400 text-sm mb-5">
            בדקו זמינות לתאריך — מודיעין ואזור המרכז.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-6 py-3 rounded font-bold text-sm hover:bg-red-700 transition-colors">
              בדקו זמינות
            </Link>
            <Link href="/events/dj-events" className="border border-white/30 text-white px-6 py-3 rounded font-bold text-sm hover:bg-white/10 transition-colors">
              חבילות DJ
            </Link>
          </div>
        </div>
        <p className="text-zinc-400 text-xs text-center mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </article>

      <RelatedPages
        title="המשיכו לקרוא"
        pages={[
          { label: "DJ לאירועים", href: "/events/dj-events", desc: "חבילות לחתונות ובר מצוות" },
          { label: "DJ עם במה ו-LED", href: "/events/stage-led-dj", desc: "הפקות גדולות מ-15,500 ₪" },
          { label: "הפקת שיר מקורי", href: "/blog/original-song-production-behind-the-scenes", desc: "כך הופך רעיון לסינגל" },
        ]}
      />
    </div>
  );
}
