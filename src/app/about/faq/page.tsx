import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "שאלות נפוצות — אולפן הקלטות יקיר כהן הפקות",
  description: "כל מה שרצית לדעת על האולפן: מחירים, תנאי ביטול, נגישות, שעות פעילות ואיך להגיע. תשובות ישירות לשאלות הכי נפוצות.",
  alternates: {
    canonical: `${SITE_URL}/about/faq`,
  },
  openGraph: {
    title: "שאלות נפוצות | יקיר כהן הפקות",
    description: "מחירים, ביטול, נגישות ועוד — כל התשובות במקום אחד.",
    url: `${SITE_URL}/about/faq`,
  },
};

const faqs = [
  {
    q: "כמה עולה הקלטת שיר באולפן?",
    a: "הקלטת שיר מתחילה מ-990 ₪ וכוללת טכנאי סאונד, תיקון זיופים ומיקס גמור מוכן לשיתוף. לחבילות עם קליפ 4K ולהפקה מלאה — ראו את עמוד המחירון.",
    link: { href: "/studio/pricing", label: "למחירון המלא" },
  },
  {
    q: "מה מדיניות הביטול?",
    a: "אם אנחנו לא יכולים לעמוד בתאריך שנקבע מסיבה כלשהי — תקבלו החזר כספי מלא ומיידי. לביטול מצד הלקוח, פנו אלינו בהקדם האפשרי ונמצא פתרון מתאים.",
    link: { href: "/contact", label: "צרו קשר" },
  },
  {
    q: "האם האולפן נגיש לאנשים עם מוגבלויות?",
    a: "האולפן ממוקם בקניון עזריאלי מודיעין, הכולל מעליות, רמפות וחניית נכים. לשאלות ספציפיות לגבי הנגישות בחדר ההקלטות עצמו — פנו אלינו לפני ההגעה.",
    link: null,
  },
  {
    q: "כמה משתתפים יכולים להיות בסשן?",
    a: "חדר ההקלטות מתאים לסשן עם מספר משתתפים. כדי לתכנן את הסשן בהתאם לגודל הצוות שלכם — מומלץ ליצור קשר מראש.",
    link: { href: "/contact", label: "שאלו אותנו" },
  },
  {
    q: "באיזה פורמט אקבל את קבצי ההקלטה?",
    a: "הקלטות מועברות ב-WAV באיכות גבוהה ו-MP3 מוכן לפרסום. הקבצים מועברים בסיום הסשן או לאחר עריכה, בהתאם לחבילה שנבחרה.",
    link: null,
  },
  {
    q: "האם צריך ניסיון קודם בהקלטה?",
    a: "לא. האולפן מתאים למתחילים ומקצועיים כאחד. הצוות מלווה אתכם לאורך כל הסשן — מהכניסה ועד לקובץ הגמור.",
    link: null,
  },
  {
    q: "מה שעות הפעילות?",
    a: "הסשנים נקבעים בתיאום אישי ומתאימים לו לוח זמנים. לבדיקת זמינות ותיאום מועד — שלחו הודעה בוואטסאפ או מלאו את טופס הקשר.",
    link: { href: "/contact/whatsapp", label: "וואטסאפ ישיר" },
  },
  {
    q: "איך מגיעים? יש חניה?",
    a: "האולפן ממוקם בקניון עזריאלי מודיעין — חניה חינם בתוך הקניון. ניתן להגיע גם בתחבורה ציבורית עם קווי אוטובוס ישירים מתל אביב, ירושלים ואזור המרכז.",
    link: null,
  },
  {
    q: "האם אפשר לשמוע דוגמאות לפני ההזמנה?",
    a: "כן. ניתן לצפות בדוגמאות עבודה בערוץ היוטיוב של יקיר כהן הפקות ולשמוע את רמת הייצור לפני ההחלטה.",
    link: { href: "https://www.youtube.com/user/kikosh", label: "לערוץ היוטיוב" },
  },
  {
    q: "האם יקיר כהן הפקות עוזר גם בהפצת הפודקאסט?",
    a: "אנו מציעים שירותי הפקה הכוללים עריכה ועיבוד שמע. לפרטים על שירותי הפצה ופרסום — צרו קשר לבירור החבילות הזמינות.",
    link: { href: "/podcast", label: "שירותי פודקאסט" },
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a },
  })),
};

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      <StructuredData data={faqSchema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">יקיר כהן הפקות</p>
        <h1 className="font-serif text-5xl font-bold mb-4">שאלות נפוצות</h1>
        <p className="text-zinc-500 max-w-xl mx-auto text-lg">
          כל מה שרצית לדעת לפני שמזמינים — תשובות ישירות, ללא בלה-בלה.
        </p>
      </header>

      <main className="py-20 px-6 max-w-3xl mx-auto w-full">
        <div className="flex flex-col divide-y divide-zinc-100">
          {faqs.map(({ q, a, link }, i) => (
            <details key={i} className="group py-8 cursor-pointer list-none">
              <summary className="flex justify-between items-center gap-4 font-serif text-xl font-bold select-none">
                {q}
                <span className="text-brand-red shrink-0 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
              </summary>
              <div className="mt-4 text-zinc-600 leading-relaxed text-base">
                <p>{a}</p>
                {link && (
                  <Link
                    href={link.href}
                    className="inline-block mt-3 text-sm font-bold border-b-2 border-brand-red pb-0.5 hover:text-brand-red transition-colors"
                  >
                    {link.label} ←
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-16 p-10 bg-zinc-900 text-white rounded-2xl text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">לא מצאתם תשובה?</h2>
          <p className="text-zinc-400 mb-6">שלחו הודעה ישירה — נחזור אליכם תוך שעות ספורות.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact/whatsapp" className="bg-brand-red text-white px-8 py-3 rounded font-bold hover:bg-red-700 transition-colors">
              וואטסאפ ישיר
            </Link>
            <Link href="/contact" className="border border-white/30 text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition-all">
              טופס יצירת קשר
            </Link>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-zinc-400">
          *תוכן זה נוצר בסיוע בינה מלאכותית
        </p>
      </main>
    </div>
  );
}
