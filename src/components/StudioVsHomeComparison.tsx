import { Headphones, Mic2, Music, Sparkles, type LucideIcon } from "lucide-react";

type Row = {
  feature: string;
  home: string;
  studio: string;
  StudioIcon: LucideIcon;
};

/** טקסט לפי humanizer.mdc: בלי מקף ארוך, משפטים קצרים */
const ROWS: Row[] = [
  {
    feature: "איכות סאונד",
    home: "משתנה. הרבה פעמים יש רעש רקע וצליל טלפון בסיסי.",
    studio: "חדר מבודד וציוד מקצועי. הקלטה נקייה יותר לפני עריכה.",
    StudioIcon: Mic2,
  },
  {
    feature: "ליווי",
    home: "עושים לבד. בלי מישהו שמכוון טייק וסשן.",
    studio: "אנחנו שם איתכם. טייקים, כיוון, ובניית סשן שמתאימה למה שבאתם לעשות.",
    StudioIcon: Headphones,
  },
  {
    feature: "עיבוד מוזיקלי",
    home: "לפעמים רק פלייבק מהטלפון. בלי התאמה מלאה לפרויקט.",
    studio: "עריכה והתאמה לפי הסגנון ולפי מה שסיכמנו.",
    StudioIcon: Music,
  },
  {
    feature: "חוויה",
    home: "בבית. הרבה פעמים הסחות דעת ורעש מהסביבה.",
    studio: "חדר שמיועד לאוזן. קל יותר להתמקד בקול ובביצוע.",
    StudioIcon: Sparkles,
  },
  {
    feature: "מה יוצא בסוף",
    home: "לפעמים רק קובץ גולמי. עדיין צריך לטפל בו אחר כך.",
    studio: "קבצים מסודרים ומוכנים לשיתוף, לפי מה שסגרנו מראש.",
    StudioIcon: Music,
  },
];

function ComparisonCardsMobile() {
  return (
    <div className="md:hidden space-y-5">
      {ROWS.map(({ feature, home, studio, StudioIcon }) => (
        <article
          key={feature}
          className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm space-y-4"
        >
          <h4 className="font-serif text-lg font-bold text-zinc-900 leading-snug">{feature}</h4>
          <div className="rounded-2xl bg-zinc-50 px-4 py-3 space-y-2 border border-zinc-100">
            <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">בטלפון בבית</p>
            <p className="text-sm text-zinc-700 leading-7">{home}</p>
          </div>
          <div className="rounded-2xl bg-brand-red/[0.07] border border-brand-red/20 px-4 py-3 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-red flex items-center gap-2">
              <StudioIcon className="size-3.5 shrink-0" aria-hidden />
              אצלנו באולפן
            </p>
            <p className="text-sm font-medium text-zinc-800 leading-7">{studio}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ComparisonTableDesktop() {
  return (
    <div className="hidden md:block w-full rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
      <table className="w-full table-fixed border-collapse text-start">
        <caption className="sr-only">
          השוואה בין הקלטת סמארטפון ביתית להקלטה באולפן יקיר כהן במודיעין
        </caption>
        <colgroup>
          <col className="w-[22%] lg:w-[20%]" />
          <col className="w-[36%] lg:w-[38%]" />
          <col />
        </colgroup>
        <thead>
          <tr className="bg-zinc-100">
            <th
              scope="col"
              className="border-b border-zinc-200 px-4 py-4 text-start text-sm font-bold text-zinc-900 align-bottom"
            >
              תכונה
            </th>
            <th
              scope="col"
              className="border-b border-zinc-200 px-4 py-4 text-start text-sm font-bold text-zinc-700 align-bottom"
            >
              הקלטה ביתית
              <span className="block text-xs font-normal text-zinc-500 mt-1 font-sans">סמארטפון</span>
            </th>
            <th
              scope="col"
              className="border-b border-zinc-200 px-4 py-4 text-start text-sm font-bold bg-brand-red/10 text-brand-red align-bottom"
            >
              אולפן יקיר כהן
              <span className="block text-xs font-normal text-brand-red/90 mt-1 font-sans">
                מודיעין, ליד ירושלים
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(({ feature, home, studio, StudioIcon }) => (
            <tr key={feature} className="even:bg-zinc-50/70">
              <th
                scope="row"
                className="border-b border-zinc-200 px-4 py-4 text-sm font-semibold text-zinc-900 align-top"
              >
                {feature}
              </th>
              <td className="border-b border-zinc-200 px-4 py-4 text-sm text-zinc-600 leading-7 align-top">
                {home}
              </td>
              <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-800 bg-brand-red/[0.04] leading-7 align-top">
                <span className="inline-flex items-start gap-2">
                  <StudioIcon className="size-4 shrink-0 mt-1 text-brand-red" aria-hidden />
                  <span>{studio}</span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StudioVsHomeComparison() {
  return (
    <div className="w-full max-w-6xl xl:max-w-[72rem] 2xl:max-w-[80rem] mx-auto rounded-3xl border border-zinc-200 bg-white p-5 sm:p-8 xl:p-10 shadow-sm">
      <p className="text-center text-sm text-zinc-600 mb-8 leading-7 max-w-2xl mx-auto space-y-3">
        זו השוואה כללית.
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        בתכלס הכל תלוי ברעש בבית, בציוד ובמה שאתם צריכים.
        <br />
        נדבר רגע ונבין יחד מה הכי מתאים לכם.
      </p>

      <ComparisonCardsMobile />
      <ComparisonTableDesktop />
    </div>
  );
}
