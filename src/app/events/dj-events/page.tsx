import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import YouTube from "@/components/ui/YouTube";
import PriceReveal from "@/components/PriceReveal";

export const metadata: Metadata = {
  title: "DJ לאירועים — חתונות, בר מצווה ואירועים פרטיים | יקיר כהן הפקות",
  description:
    "DJ מקצועי לחתונה מ-12,650 ₪, בר/בת מצווה מ-7,500 ₪. מודיעין ואזור המרכז. ציוד מקצועי, שירי כניסה, ריקוד סלואו — שולטים בכל רגע.",
  alternates: { canonical: "https://www.yakircohen.com/events/dj-events" },
  openGraph: {
    title: "DJ לאירועים | יקיר כהן הפקות",
    description: "חתונה מ-12,650 ₪, בר מצווה מ-7,500 ₪. מודיעין ואזור המרכז.",
    url: "https://www.yakircohen.com/events/dj-events",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "DJ לאירועים — יקיר כהן הפקות",
  "description": "שירותי DJ מקצועי לחתונות, בר/בת מצווה ואירועים פרטיים. מ-7,500 ₪.",
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
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "itemListElement": [
      { "@type": "Offer", "name": "DJ לחתונה", "price": "12650", "priceCurrency": "ILS" },
      { "@type": "Offer", "name": "DJ לבר/בת מצווה", "price": "7500", "priceCurrency": "ILS" },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "כמה עולה DJ לחתונה?",
      "acceptedAnswer": { "@type": "Answer", "text": "DJ לחתונה מ-12,650 ₪ כולל ציוד מלא, שירי כניסה, ריקוד סלואו ותיאום מוסיקלי מלא. לפרטים — צרו קשר." },
    },
    {
      "@type": "Question",
      "name": "מה כלול בחבילת DJ לבר מצווה?",
      "acceptedAnswer": { "@type": "Answer", "text": "DJ לבר/בת מצווה מ-7,500 ₪ כולל ציוד מקצועי, מוזיקה לכל שלבי האירוע ותיאום מלא עם הצוות." },
    },
    {
      "@type": "Question",
      "name": "האם DJ יקיר כהן עובד עם מנגינות ספציפיות?",
      "acceptedAnswer": { "@type": "Answer", "text": "כן. נבנה יחד רשימת שירים מותאמת לכם — שירי כניסה לחופה, ריקוד סלואו, שירי ריקודים. הכל בתיאום מלא." },
    },
  ],
};

const packages = [
  {
    name: "DJ לחתונה",
    price: "12,650",
    desc: "הפקה מוזיקלית מלאה לליל שבת, מן הכניסה ועד להיפרד",
    features: [
      "ציוד מקצועי ותאורה",
      "שירי כניסה לחופה",
      "ריקוד סלואו מותאם אישית",
      "תיאום עם כל ספקי האירוע",
      "גיבוי ציוד מלא",
    ],
    popular: true,
  },
  {
    name: "DJ לבר/בת מצווה",
    price: "7,500",
    desc: "יום שנשאר בזיכרון — מוזיקה שמרגשת כל דור",
    features: [
      "מוזיקה לכל שלבי האירוע",
      "שירים לפי בקשת הבר/בת מצווה",
      "ציוד מקצועי",
      "תיאום מלא עם ההורים",
    ],
    popular: false,
  },
];

export default function DJEventsPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />
      <StructuredData data={faqSchema} />

      {/* Hero */}
      <header
        className="py-20 px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · תקליטן לאירועים
        </p>
        <h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          DJ לאירועים.
          <br />
          <span className="text-[#D42B2B]">כי המוזיקה היא מה שנשאר.</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          חתונה, בר מצווה, אירוע פרטי. אנחנו מטפלים בכל הרגעים המוזיקליים — מהכניסה עד הריקוד האחרון.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            בדקו זמינות לתאריך שלכם
          </Link>
          <Link href="/attractions" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            הוסיפו אטרקציות
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">זמינות מוגבלת — כדאי לבדוק מוקדם</p>
      </header>

      {/* Packages */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">חבילות DJ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map(({ name, price, desc, features, popular }) => (
            <article
              key={name}
              className={`rounded-2xl p-8 flex flex-col gap-6 border ${
                popular ? "bg-zinc-900 text-white border-zinc-700 shadow-2xl" : "bg-white border-zinc-200"
              }`}
            >
              {popular && (
                <span className="bg-[#D42B2B] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider w-fit">
                  הכי מבוקש
                </span>
              )}
              <div>
                <h3 className="font-serif text-2xl font-bold mb-1">{name}</h3>
                <p className={`text-sm ${popular ? "text-zinc-400" : "text-zinc-500"}`}>{desc}</p>
              </div>
              <PriceReveal price={`מ-₪${price}`} service={name} dark={popular} />
              <ul className="flex flex-col gap-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 justify-end text-sm">
                    <span className={popular ? "text-zinc-300" : "text-zinc-600"}>{f}</span>
                    <CheckCircle2 size={14} className="text-[#D42B2B] shrink-0" />
                  </li>
                ))}
              </ul>
              <Link
                href="/contact/whatsapp"
                className={`w-full text-center py-3 rounded font-bold transition-all ${
                  popular
                    ? "bg-[#D42B2B] text-white hover:bg-white hover:text-black"
                    : "border border-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
                }`}
              >
                קבעו פגישה
              </Link>
            </article>
          ))}
        </div>
        <p className="text-center text-xs text-zinc-400 mt-6">המחירים אינם כוללים מע&quot;מ (18%)</p>
      </section>

      {/* Video */}
      <section className="py-10 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-2">
            איך עובדת הנחיית האירוע?
          </h2>
          <p className="text-center text-zinc-500 mb-6 text-sm">סרטון שמסביר את כל הפרטים</p>
          <YouTube
            url="https://www.youtube.com/watch?v=TF8DcK6M6jw"
            title="הנחיית אירועים — DJ יקיר כהן הפקות"
          />
        </div>
      </section>

      {/* Portfolio divider + AI DJ demo */}
      <div className="border-t-4 border-zinc-100" />
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 text-center mb-2">
            תיק עבודות
          </p>
          <h2 className="font-serif text-2xl font-bold text-center mb-2">
            AI בזמן אמת — ככה זה נשמע
          </h2>
          <p className="text-center text-zinc-500 mb-6 text-sm">
            מיקס חכם מבוסס AI — חתונה אמיתית, קהל אמיתי
          </p>
          <YouTube
            url="https://www.youtube.com/watch?v=lmYykgKAdUg"
            title="DJ יקיר כהן עם AI בזמן אמת — תיק עבודות"
          />
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-10">למה בוחרים ביקיר?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { t: "20+ שנות ניסיון", d: "אירועים ממגוון תרבויות ומסורות. יודעים לקרוא כל קהל." },
            { t: "ציוד מקצועי + גיבוי", d: "ציוד ראשי ועתודה מלאה. לא מסתמכים על המזל." },
            { t: "תיאום מלא", d: "עובדים עם כל ספקי האירוע — צלם, קייטרינג, אולם." },
          ].map(({ t, d }) => (
            <div key={t} className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">{t}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-8">שאלות נפוצות</h2>
          <dl className="flex flex-col divide-y divide-zinc-200">
            {[
              { q: "מה כולל המחיר של חבילת חתונה?", a: "ציוד מקצועי, תאורה, שירי כניסה לחופה, ריקוד סלואו, תיאום עם ספקים וגיבוי ציוד. הכל במחיר אחד." },
              { q: "כמה מראש צריך להזמין?", a: "לחתונות — מומלץ להזמין 6-12 חודשים מראש. לבר/בת מצווה — לפחות 3 חודשים." },
              { q: "האם אפשר לבקש שירים ספציפיים?", a: "בהחלט. בונים יחד רשימת שירים מותאמת אישית — שיר כניסה, שירי ריקוד, שיר לסיום." },
            ].map(({ q, a }) => (
              <div key={q} className="py-6">
                <dt className="font-bold mb-2">{q}</dt>
                <dd className="text-zinc-500 text-sm leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-[#D42B2B] text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">מחפשים DJ בעיר שלכם?</h2>
        <p className="text-white/90 mb-6">אנחנו משרתים את כל ישראל — בחרו את העיר שלכם.</p>
        <Link href="/dj-events/cities" className="inline-block bg-white text-[#D42B2B] px-8 py-4 rounded font-bold hover:bg-zinc-100 transition-colors">
          חפשו DJ בעיר
        </Link>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">בדקו זמינות לתאריך שלכם</h2>
        <p className="text-zinc-400 mb-6">שלחו הודעה עם התאריך ונחזור אליכם תוך שעות.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            058-7-555-456 וואטסאפ
          </Link>
          <Link href="/attractions" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            אטרקציות לאירוע
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>
    </div>
  );
}
