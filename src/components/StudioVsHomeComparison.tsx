import { IconCheck, IconX } from "@/components/icons";

type Row = {
  feature: string;
  home: string;
  studio: string;
};

/** טקסט לפי humanizer.mdc: בלי מקף ארוך, משפטים קצרים */
const ROWS: Row[] = [
  {
    feature: "איכות סאונד",
    home: "משתנה. הרבה פעמים יש רעש רקע וצליל טלפון בסיסי.",
    studio: "חדר מבודד וציוד מקצועי. הקלטה נקייה יותר לפני עריכה.",
  },
  {
    feature: "ליווי",
    home: "עושים לבד. בלי מישהו שמכוון טייק וסשן.",
    studio: "אנחנו שם איתכם. טייקים, כיוון, ובניית סשן שמתאימה למה שבאתם לעשות.",
  },
  {
    feature: "עיבוד מוזיקלי",
    home: "לפעמים רק פלייבק מהטלפון. בלי התאמה מלאה לפרויקט.",
    studio: "עריכה והתאמה לפי הסגנון ולפי מה שסיכמנו.",
  },
  {
    feature: "חוויה",
    home: "בבית. הרבה פעמים הסחות דעת ורעש מהסביבה.",
    studio: "חדר שמיועד לאוזן. קל יותר להתמקד בקול ובביצוע.",
  },
  {
    feature: "מה יוצא בסוף",
    home: "לפעמים רק קובץ גולמי. עדיין צריך לטפל בו אחר כך.",
    studio: "קבצים מסודרים ומוכנים לשיתוף, לפי מה שסגרנו מראש.",
  },
];

export default function StudioVsHomeComparison() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-zinc-700">
        זו השוואה כללית.
        <br />
        בתכלס זה תלוי ברעש בבית, בציוד ובמה שאתם צריכים.
        <br />
        נדבר רגע ונבין יחד מה הכי מתאים לכם.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {ROWS.map(({ feature, home, studio }) => (
          <article
            key={feature}
            className="cloud-card cloud-card--flush divide-y divide-zinc-200"
          >
            <header className="px-5 py-4">
              <h3 className="font-serif text-lg font-bold text-zinc-900">{feature}</h3>
            </header>
            <div className="flex gap-3 p-5">
              <span className="shrink-0 text-rose-600">
                <IconX size={20} aria-hidden />
              </span>
              <div>
                <p className="text-xs font-bold text-zinc-500">בבית</p>
                <p className="mt-1 text-sm text-zinc-700">{home}</p>
              </div>
            </div>
            <div className="flex gap-3 bg-brand-red/[0.03] p-5">
              <span className="shrink-0 text-emerald-600">
                <IconCheck size={20} aria-hidden />
              </span>
              <div>
                <p className="text-xs font-bold text-brand-red">באולפן שלנו</p>
                <p className="mt-1 text-sm text-zinc-700">{studio}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
