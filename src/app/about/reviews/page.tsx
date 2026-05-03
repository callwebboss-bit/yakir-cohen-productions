import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "ביקורות ולקוחות מרוצים | יקיר כהן הפקות — מה אומרים עלינו",
  description:
    "מעל 250 ביקורות חיוביות. לקוחות מחתונות, הקלטות, פודקאסטים ואירועים. קראו מה מספרים על יקיר כהן הפקות.",
  alternates: { canonical: "https://www.yakircohen.com/about/reviews" },
  openGraph: {
    title: "ביקורות | יקיר כהן הפקות",
    description: "מעל 250 ביקורות. לקוחות מחתונות, הקלטות ואירועים.",
    url: "https://www.yakircohen.com/about/reviews",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const aggregateSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "יקיר כהן הפקות",
  "url": "https://www.yakircohen.com",
  "telephone": "+972-58-7555456",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "250",
    "bestRating": "5",
    "worstRating": "1",
  },
};

const categories = [
  { label: "הקלטת שירים", href: "/studio/recording-song-modiin", color: "bg-rose-50 text-rose-700" },
  { label: "פודקאסט", href: "/podcast", color: "bg-blue-50 text-blue-700" },
  { label: "DJ לחתונה", href: "/events/dj-events", color: "bg-amber-50 text-amber-700" },
  { label: "אטרקציות", href: "/attractions", color: "bg-purple-50 text-purple-700" },
  { label: "ברכות", href: "/studio/blessings", color: "bg-green-50 text-green-700" },
];

const reviews = [
  {
    name: "שרון ב.",
    service: "DJ לחתונה",
    rating: 5,
    text: "הזמנו מיקיר לחופה זיקוקים ולסלואו עשן, בלוני סבון וקונפטי. הכל היה פשוט ואוו!!! שירות מקצועי, הגיע בזמן, והאווירה הייתה בדיוק מה שרצינו.",
    date: "יולי 2024",
  },
  {
    name: "מיכל ד.",
    service: "הקלטת שיר לחתונה",
    rating: 5,
    text: "הגענו לאולפן שבוע לפני החתונה עם שיר שאנחנו אוהבים. יצאנו עם עיבוד שגרם לנו לבכות. הכניסה לחופה הייתה הרגע הכי מרגש בחיי.",
    date: "ספטמבר 2024",
  },
  {
    name: "אבי ק.",
    service: "פודקאסט",
    rating: 5,
    text: "מפיק פודקאסט שבועי. עבדתי עם כמה אולפנים לפני. יקיר כהן הוא אחר לגמרי. האיכות, הזמינות, הגמישות — הכל ברמה אחרת.",
    date: "ינואר 2025",
  },
  {
    name: "ריבי מ.",
    service: "ברכה לבר מצווה",
    rating: 5,
    text: "הכנו ברכה קולית לבר מצווה של הבן שלנו. הצוות עזר לנו לנסח, להקליט, ובסוף קיבלנו קובץ שגרם לכולם באירוע לבכות. מרגש מאד.",
    date: "מרץ 2025",
  },
  {
    name: "דוד ש.",
    service: "DJ לבר מצווה",
    rating: 5,
    text: "יקיר ניהל את האירוע בצורה מקצועית לחלוטין. ידע לקרוא את הקהל, לעבור בין ז'אנרים, ולגרום לכולם לרקוד. ממליץ בחום.",
    date: "יוני 2024",
  },
  {
    name: "נועה ל.",
    service: "אטרקציות לאירוע",
    rating: 5,
    text: "לקחנו עשן כבד, זיקוקים קרים ובועות סבון לאירוע. התמונות יצאו מדהימות. הצוות הגיע בזמן, היה מקצועי ולא הפריע לאירוע.",
    date: "אוגוסט 2024",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-amber-400 fill-amber-400" : "text-zinc-200 fill-zinc-200"}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={aggregateSchema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · לקוחות מרוצים
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-900"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          מה אומרים הלקוחות שלנו?
        </h1>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span className="font-serif text-3xl font-black">4.9</span>
          <span className="text-zinc-400 text-sm">מתוך 250+ ביקורות</span>
        </div>
        <p className="text-zinc-500">הקלטות, חתונות, פודקאסטים, אירועים — ביקורות מכל השירותים.</p>
      </header>

      {/* Category filter */}
      <div className="py-8 px-6 bg-white border-b border-zinc-100">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map(({ label, href, color }) => (
            <Link key={href} href={href} className={`text-xs font-bold px-4 py-2 rounded-full ${color} hover:opacity-80 transition-opacity`}>
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Reviews Grid */}
      <main className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(({ name, service, rating, text, date }) => (
            <article key={name} className="bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-bold text-zinc-900">{name}</p>
                  <p className="text-xs text-zinc-400">{date}</p>
                </div>
                <span className="bg-zinc-100 text-zinc-600 text-xs font-bold px-2.5 py-1 rounded-full">
                  {service}
                </span>
              </div>
              <StarRating rating={rating} />
              <p className="text-zinc-600 text-sm leading-relaxed text-right flex-grow">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-400 text-sm mb-4">ביקורות נוספות בגוגל ובמרכז הלקוחות</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
              הזמינו שירות
            </Link>
            <Link href="/about/faq" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
              שאלות נפוצות
            </Link>
          </div>
        </div>
      </main>

      <RelatedPages
        title="השירותים עליהם דיברו"
        pages={[
          { label: "הקלטת שירים", href: "/studio/recording-song-modiin", desc: "הקלטה מקצועית מ-990 ₪" },
          { label: "DJ לאירועים", href: "/events/dj-events", desc: "חתונות ובר מצווה מ-7,500 ₪" },
          { label: "אטרקציות לאירועים", href: "/attractions", desc: "עשן, זיקוקים, קונפטי מ-1,750 ₪" },
        ]}
      />
    </div>
  );
}
