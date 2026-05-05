import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "5 טיפים לפני שנכנסים לאולפן בפעם הראשונה | יקיר כהן הפקות",
  description:
    "מה לעשות יום לפני, מה להביא לאולפן, ואיך לקבל את התוצאה הטובה ביותר מסשן ההקלטה הראשון שלכם.",
  alternates: { canonical: `${SITE_URL}/blog/Studio-Tips` },
  openGraph: {
    title: "5 טיפים לאולפן ההקלטות | יקיר כהן הפקות",
    description: "מה לעשות לפני, מה להביא, ואיך לקבל תוצאה מקסימלית.",
    url: `${SITE_URL}/blog/Studio-Tips`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "5 טיפים לפני שנכנסים לאולפן בפעם הראשונה",
  "author": { "@type": "Person", "name": "יקיר כהן" },
  "publisher": { "@type": "Organization", "name": "יקיר כהן הפקות", "url": `${SITE_URL}` },
  "datePublished": "2026-01-01",
  "mainEntityOfPage": `${SITE_URL}/blog/Studio-Tips`,
};

const tips = [
  {
    n: "01",
    title: "תרגלו את השיר עד שתוכלו לשיר אותו בשינה",
    content: `האולפן הוא לא מקום לתרגל שיר — הוא מקום להקליט אותו. ככל שאתם שולטים יותר בחומר, כך הסשן יהיה קל יותר ויקר פחות.

תרגלו לפחות שבוע לפני. שירו מול מראה. שירו בקול רם. הכירו כל מילה, כל מעבר, כל פרמטה.

אם אתם לא בטוחים במילים — הדפיסו ובואו איתן. אבל עדיף לדעת בעל פה.`,
  },
  {
    n: "02",
    title: "הקול שלכם הוא כלי נגינה — טפלו בו",
    content: `יום לפני הסשן: שתו הרבה מים, ישנו מספיק, אל תצעקו.

ביום הסשן: אל תשתו קפה (מייבש את מיתרי הקול), אל תאכלו שומני יתר, הביאו מים בטמפרטורת החדר.

אם אתם חולים — דחו את הסשן. אין טעם להקליט כשהקול לא בשיא.`,
  },
  {
    n: "03",
    title: "הגיעו בזמן — אל תגיעו לחוצים",
    content: `אולפן הקלטות הוא מקום שדורש נוכחות מנטלית. אם הגעתם מסחרר, תועו בדרך, ועם דופק מוגבר — זה ישמע בהקלטה.

הגיעו 10-15 דקות לפני. תנו לעצמכם זמן להסתדר, לשתות מים, ולהתמקד.

קניון עזריאלי מודיעין — חניה חינם, לא צריך לחפש מקום.`,
  },
  {
    n: "04",
    title: "תנו לעצמכם הרשאה לא להיות מושלמים בניסיון הראשון",
    content: `הניסיון הראשון הוא לחימום. זה נורמלי. אף אחד לא מקליט את הטייק הגמור בניסיון הראשון.

אל תשפטו את עצמכם אחרי כל טייק. הטכנאי שם — תנו לו לומר מה צריך לשפר.

כמה טייקים יסשן? תלוי בשיר ובנגן, אבל בין 3 ל-10 זה נורמלי לחלוטין.`,
  },
  {
    n: "05",
    title: "סמכו על הטכנאי — הוא יודע מה ישמע טוב",
    content: `הטכנאי שומע דרך ציוד מקצועי מה שהאוזן הרגילה לא תשמע. אם הוא מבקש שתנסו עוד פעם — יש לזה סיבה.

שאלו שאלות. "מה לא עבד בטייק האחרון?" — זה שאלה לגיטימית לחלוטין.

הסשן הוא שיתוף פעולה, לא ביצוע חד-כיווני.`,
  },
];

export default function StudioTipsPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-zinc-100 text-zinc-700 text-xs font-bold px-3 py-1 rounded-full">טיפים לאולפן</span>
            <span className="text-zinc-400 text-xs">4 דקות קריאה</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-900" style={{ fontFamily: '"Frank Ruhl Libre", serif' }}>
            5 טיפים
            <br />
            <span className="text-[#D42B2B]">לפני שנכנסים לאולפן בפעם הראשונה</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto">
            מה לעשות יום לפני, מה להביא, ואיך לקבל את התוצאה הטובה ביותר מסשן ההקלטה שלכם.
          </p>
        </div>
      </header>

      <article className="py-16 px-6 max-w-3xl mx-auto w-full">
        <div className="flex flex-col gap-10">
          {tips.map(({ n, title, content }) => (
            <section key={n} className="flex gap-6">
              <span className="font-serif text-5xl font-black text-[#D42B2B] opacity-30 shrink-0 leading-none">{n}</span>
              <div>
                <h2 className="font-serif text-xl font-bold mb-4 text-zinc-900">{title}</h2>
                {content.split("\n\n").map((p, i) => (
                  <p key={i} className="text-zinc-600 leading-relaxed mb-3 text-right">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 p-8 bg-zinc-900 text-white rounded-2xl text-center">
          <h2 className="font-serif text-xl font-bold mb-3">מוכנים לסשן הראשון?</h2>
          <p className="text-zinc-400 text-sm mb-5">קניון עזריאלי מודיעין. חניה חינם. מ-990 ₪.</p>
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-3 rounded font-bold hover:bg-red-700 transition-colors">
            קבעו סשן עכשיו
          </Link>
        </div>
        <p className="text-zinc-400 text-xs text-center mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </article>

      <RelatedPages
        title="שירותי האולפן"
        pages={[
          { label: "הקלטת שירים מקצועית", href: "/studio/recording-song-modiin", desc: "מ-990 ₪ כולל הכל" },
          { label: "שאלות נפוצות", href: "/about/faq", desc: "כל מה שצריך לדעת לפני ההגעה" },
          { label: "ביקורות לקוחות", href: "/about/reviews", desc: "מה אומרים לקוחות שכבר הקליטו" },
        ]}
      />
    </div>
  );
}
