import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "ברכה לבר מצווה — הקלטה מקצועית מהלב | יקיר כהן הפקות",
  description:
    "הקלטת ברכה לבר מצווה מקצועית — 990 ₪ כולל הכל. כתיבת נוסח, הקלטה, מיקס. מתנה שנשארת לנצח. מודיעין, נגיש מכל הארץ.",
  alternates: { canonical: `${SITE_URL}/studio/blessings/bar-mitzvah` },
  openGraph: {
    title: "ברכה לבר מצווה — הקלטה מקצועית | יקיר כהן הפקות",
    description: "990 ₪ כולל הכל. ברכה שנשמעת כמו ברדיו, רגש שנשאר לנצח.",
    url: `${SITE_URL}/studio/blessings/bar-mitzvah`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "הקלטת ברכה לבר מצווה — יקיר כהן הפקות",
  "description": "הקלטת ברכה לבר מצווה מקצועית. כתיבה, הקלטה ומיקס. מ-990 ₪.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "יקיר כהן הפקות",
    "telephone": "+972-58-7555456",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "עמק איילון 34/5",
      "addressLocality": "מודיעין-מכבים-רעות",
      "addressCountry": "IL",
    },
  },
  "offers": {
    "@type": "Offer",
    "price": "990",
    "priceCurrency": "ILS",
    "description": "ברכה לבר מצווה — הקלטה, תיקון זיופים ומיקס",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "מה כולל שירות הקלטת ברכה לבר מצווה?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "הסשן כולל עזרה בנוסח הברכה, הקלטה מקצועית, תיקון זיופים ומיקס גמור. יוצאים עם קובץ WAV ו-MP3.",
      },
    },
    {
      "@type": "Question",
      "name": "כמה זמן מראש צריך להזמין?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "מומלץ להזמין לפחות שבוע לפני האירוע. בתיאום מראש אפשר לקבל גם תאריכים קרובים יותר.",
      },
    },
    {
      "@type": "Question",
      "name": "האם ניתן לקבל את הקובץ מוכן לפני האירוע?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "כן. הקובץ מועבר תוך 24 שעות מסיום ההקלטה, בדרך כלל מוכן הרבה לפני האירוע.",
      },
    },
  ],
};

const included = [
  "עזרה בכתיבת נוסח הברכה",
  "הקלטה בחדר אקוסטי מקצועי",
  "תיקון זיופים (Melodyne)",
  "מיקס ומאסטרינג גמור",
  "קבצי WAV ו-MP3",
  "מסירה תוך 24 שעות",
];

export default function BarMitzvahBlessingPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />
      <StructuredData data={faqSchema} />

      {/* Hero */}
      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · ברכות ואירועים
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-zinc-900"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          ברכה לבר מצווה
          <br />
          <span className="text-[#D42B2B]">שנשמעת מהלב. ונשארת לנצח.</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          הילד שלכם הוא הכוכב. אנחנו רק בונים לו את הבמה המושלמת.
          <br />
          ברכה מוקלטת מקצועית — 990 ₪ כולל הכל.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            הזמינו עכשיו בוואטסאפ
          </Link>
          <Link
            href="/voucher"
            className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all"
          >
            קנו כמתנה
          </Link>
        </div>
      </header>

      {/* Emotional copy */}
      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl font-bold leading-snug">
              רגע שהיה. קול שיישאר.
            </h2>
            <p className="text-zinc-500 leading-relaxed">
              יש רגעים שמחפשים להישמר. ברכה של אמא. מילה של אבא. משפט שלא תמיד יודעים לומר כשעומדים מול כולם.
            </p>
            <p className="text-zinc-500 leading-relaxed">
              באולפן — הכל הרבה יותר פשוט. אתם אומרים מה שבלב, אנחנו דואגים שזה ייצא כמו שצריך.
            </p>
          </div>
          <div className="bg-zinc-900 text-white rounded-2xl p-8 flex flex-col gap-4">
            <h3 className="font-serif text-xl font-bold mb-2">מה כלול ב-990 ₪?</h3>
            <ul className="flex flex-col gap-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 justify-end text-sm">
                  <span className="text-zinc-300">{item}</span>
                  <CheckCircle2 size={16} className="text-[#D42B2B] shrink-0" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-10">
            שלושה שלבים — ובר מצווה שנשמע מדהים
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { n: "01", t: "מתאמים תאריך", d: "שולחים הודעה בוואטסאפ. בוחרים מועד שמתאים. לא צריך ניסיון קודם." },
              { n: "02", t: "מגיעים לאולפן", d: "מודיעין, קניון עזריאלי. חניה חינם. נכנסים, מתיישבים, מתחילים לדבר." },
              { n: "03", t: "מקבלים את הברכה", d: "יוצאים עם קובץ שמוכן להשמעה באירוע. WAV ו-MP3. תוך 24 שעות." },
            ].map(({ n, t, d }) => (
              <div key={n} className="flex items-start gap-6 bg-white border border-zinc-100 rounded-2xl p-6">
                <span className="font-serif text-3xl font-black text-[#D42B2B] opacity-50 shrink-0">{n}</span>
                <div>
                  <h3 className="font-bold mb-1">{t}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold mb-8">שאלות נפוצות</h2>
        <dl className="flex flex-col divide-y divide-zinc-100">
          {[
            { q: "כמה זמן מראש צריך להזמין?", a: "שבוע לפני האירוע הוא אידיאלי. בתיאום מראש אפשר גם קרוב יותר." },
            { q: "האם אפשר להביא ילדים לאולפן?", a: "כן. האולפן מתאים גם לקבוצות קטנות. ניתן להביא כמה ילדים לסשן משותף." },
            { q: "מה אם אני לא יודע לשיר?", a: "הצוות עוזר לכולם — גם למי שלא שר ביום-יום. תיקון זיופים מעשה נסים." },
          ].map(({ q, a }) => (
            <div key={q} className="py-6">
              <dt className="font-bold mb-2">{q}</dt>
              <dd className="text-zinc-500 text-sm leading-relaxed">{a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">הזמינו ברכה לבר מצווה</h2>
        <p className="text-zinc-400 mb-6 max-w-md mx-auto">
          שלחו הודעה בוואטסאפ ונקבע תאריך. מחיר 990 ₪ לא כולל מע&quot;מ.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            058-7-555-456 וואטסאפ
          </Link>
          <Link href="/studio/blessings" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            כל סוגי הברכות
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>
    </div>
  );
}
