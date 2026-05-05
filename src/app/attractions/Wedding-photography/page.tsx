import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { Camera, CheckCircle2, Clock, MessageCircle, Phone, Star } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "צלם חתונות לאירועים קטנים | יקיר כהן הפקות",
  description:
    "צלם חתונות דתי ומקצועי לאירועים קטנים ואינטימיים. מחירים שקופים מ-3,500 ₪, כולל מע\"מ ועריכה. 48 שעות לתמונות הראשונות.",
  alternates: {
    canonical: `${SITE_URL}/attractions/Wedding-photography`,
  },
  openGraph: {
    title: "צלם חתונות לאירועים קטנים | יקיר כהן הפקות",
    description:
      "צילום מקצועי לחתונות דתיות ואירועים אינטימיים. מחיר הוגן, ללא הפתעות, תמונות אמיתיות.",
    url: `${SITE_URL}/attractions/Wedding-photography`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "צילום חתונות לאירועים קטנים — יקיר כהן הפקות",
  description:
    "צלם חתונות דתי ומקצועי לאירועים קטנים ואינטימיים. מחיר מ-3,500 ₪ כולל מע\"מ ועריכה בסיסית.",
  provider: {
    "@type": "LocalBusiness",
    name: "יקיר כהן הפקות",
    telephone: "+972-58-7555456",
    url: `${SITE_URL}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "עמק איילון 34/5",
      addressLocality: "מודיעין",
      addressCountry: "IL",
    },
  },
  offers: {
    "@type": "Offer",
    price: "3500",
    priceCurrency: "ILS",
    description: "צילום חתונה מלא — כולל מע\"מ ועריכה בסיסית",
  },
};

const faq = [
  {
    q: "כמה זמן מראש צריך להזמין צלם לחתונה?",
    a: "מומלץ להזמין לפחות 3-4 חודשים מראש, במיוחד לעונת החתונות (אפריל–אוקטובר). לתאריכים מבוקשים — כדאי אפילו חצי שנה מראש.",
  },
  {
    q: "האם אתם מצלמים גם אירועים דתיים?",
    a: "כן, זו ההתמחות העיקרית שלנו. אנחנו מכבדים את המסורת ויודעים מתי לצלם ומתי לתת לרגע להיות פרטי.",
  },
  {
    q: "מה כלול במחיר הצילום?",
    a: "כל המחירים כוללים מע\"מ, צילום מלא של האירוע ועריכה בסיסית של התמונות הנבחרות. אלבומים והדפסות בתוספת תשלום.",
  },
  {
    q: "האם ניתן לשלם בתשלומים?",
    a: "כן, אנחנו מציעים אפשרות לתשלום ב-3 עד 6 תשלומים ללא ריבית, בתיאום מראש.",
  },
  {
    q: "כמה זמן לוקח לקבל את התמונות?",
    a: "התמונות הראשונות נשלחות תוך 48 שעות מהאירוע. הגלריה המלאה תוך 2-3 שבועות, תלוי בגודל האירוע.",
  },
  {
    q: "האם אתם מגיעים גם לאירועים קטנים?",
    a: "בהחלט — אירועים קטנים הם ההתמחות שלנו. כל אירוע, קטן או גדול, זקוק ליחס אישי ומלא.",
  },
];

const packages = [
  {
    name: "בסיסי",
    price: "מ-3,500 ₪",
    hours: "עד 4 שעות",
    features: [
      "צילום מלא של האירוע",
      "עריכה בסיסית",
      "גלריה דיגיטלית מלאה",
      "48 שעות — תמונות ראשונות",
      "כולל מע\"מ",
    ],
  },
  {
    name: "מורחב",
    price: "מ-5,500 ₪",
    hours: "עד 6 שעות",
    features: [
      "צילום מלא של האירוע",
      "עריכה מתקדמת + ריטוש",
      "גלריה דיגיטלית מלאה",
      "48 שעות — תמונות ראשונות",
      "100 תמונות נבחרות מודפסות",
      "כולל מע\"מ",
    ],
    featured: true,
  },
  {
    name: "פרימיום",
    price: "מ-7,500 ₪",
    hours: "יום שלם",
    features: [
      "צילום מקדים + יום האירוע",
      "עריכה יצירתית + סגנון אישי",
      "גלריה דיגיטלית + USB",
      "48 שעות — תמונות ראשונות",
      "אלבום מודפס (30×30 ס\"מ)",
      "כולל מע\"מ",
    ],
  },
];

export default function WeddingPhotographyPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      {/* Header */}
      <header className="py-20 px-6 bg-white border-b border-zinc-100 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-zinc-200" />
          אטרקציות ושירותי אירועים
          <span className="inline-block w-5 h-px bg-zinc-200" />
        </p>
        <h1
          className="font-bold text-zinc-900 leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          צלם לחתונה.
          <br />
          <span className="text-[#D42B2B]">מקצועי. אישי. כנה.</span>
        </h1>
        <p className="text-zinc-500 text-base max-w-2xl mx-auto mb-8">
          חתונה קטנה זה לא אומר להתפשר על הזיכרונות. כל רגע נצבע בצבעים הנכונים — בלי לביים ובלי לאלץ. אתם פשוט תהיו אתם, והצלם ידאג שהתמונות יספרו את הסיפור האמיתי שלכם.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg flex items-center gap-2"
          >
            <MessageCircle size={18} />
            שלחו לי הצעת מחיר
          </Link>
          <Link
            href="tel:+972-58-7555456"
            className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all flex items-center gap-2"
          >
            <Phone size={18} />
            התקשרו עכשיו
          </Link>
        </div>
        <div className="flex flex-wrap gap-6 justify-center mt-8 text-sm text-zinc-500">
          {["מחירים שקופים — ללא הפתעות", "48 שעות לתמונות הראשונות", "3–6 תשלומים ללא ריבית"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#D42B2B]" />
              {item}
            </span>
          ))}
        </div>
      </header>

      {/* Why choose */}
      <section className="py-20 px-6 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">למה לבחור צלם אירועים מאיתנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="w-6 h-6" />,
                title: "מתמחים באירועים קטנים",
                desc: "ניסיון של שנים בחתונות דתיות ואירועים אינטימיים. יודעים איך להיות נוכחים בלי להפריע.",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "צילום שמספר סיפור",
                desc: "לא תמונות פוזה — צילום דוקומנטרי שתופס את הרגעים האמיתיים: צחוק, דמעות, חיבוקים.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "מהיר ואמין",
                desc: "תמונות ראשונות תוך 48 שעות. גלריה מלאה תוך 2-3 שבועות. מחיר סגור מראש.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-4 text-center p-6 bg-white rounded-2xl border border-zinc-100">
                <div className="w-14 h-14 bg-[#D42B2B] text-white rounded-2xl flex items-center justify-center">
                  {icon}
                </div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">מחירון שקוף</h2>
          <p className="text-zinc-500 text-center mb-12 max-w-xl mx-auto">
            אני מאמין בשקיפות מלאה. אין מחירונים מבלבלים או תוספות נסתרות. מה שאתם רואים — זה מה שמשלמים. כל המחירים כוללים מע&quot;מ ועריכה בסיסית.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col gap-4 p-8 rounded-2xl border-2 transition-colors ${
                  pkg.featured
                    ? "border-[#D42B2B] bg-[#D42B2B]/5"
                    : "border-zinc-200 bg-white hover:border-[#D42B2B]"
                }`}
              >
                {pkg.featured && (
                  <span className="text-xs font-black uppercase tracking-widest text-[#D42B2B]">
                    הכי פופולרי
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-[#D42B2B]">{pkg.price}</p>
                  <p className="text-sm text-zinc-500 mt-0.5">{pkg.hours}</p>
                </div>
                <ul className="flex flex-col gap-3 flex-grow">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={15} className="text-[#D42B2B] mt-0.5 shrink-0" />
                      <span className="text-zinc-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact/whatsapp"
                  className={`mt-4 text-center px-6 py-3 rounded font-bold text-sm transition-colors ${
                    pkg.featured
                      ? "bg-[#D42B2B] text-white hover:bg-red-700"
                      : "border border-zinc-300 hover:border-[#D42B2B] hover:text-[#D42B2B]"
                  }`}
                >
                  קבלו הצעה מותאמת
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-zinc-400 text-sm mt-8">
            יש לכם אירוע מיוחד? צרו קשר ואשמח להתאים לכם חבילה אישית לפי התקציב והצרכים.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">שאלות נפוצות על צילום חתונות</h2>
          <div className="flex flex-col gap-0 divide-y divide-zinc-200">
            {faq.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-zinc-900">
                  {q}
                  <span className="text-[#D42B2B] text-xl group-open:rotate-45 transition-transform duration-200 shrink-0 ms-4">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-zinc-600 leading-relaxed text-sm">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#D42B2B] text-white text-center">
        <h2 className="font-bold mb-3" style={{ fontFamily: '"Frank Ruhl Libre", serif' }}>
          מוכנים לשמור את הזיכרונות?
        </h2>
        <p className="text-lg mb-8 opacity-90">שלחו לנו בוואטסאפ — נחזיר תוך שעות עם הצעה מדויקת</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-white text-[#D42B2B] px-8 py-4 rounded font-bold hover:bg-zinc-100 transition-colors"
          >
            שלחו הודעה בוואטסאפ
          </Link>
          <Link
            href="tel:+972-58-7555456"
            className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors"
          >
            התקשרו עכשיו
          </Link>
        </div>
      </section>

      <div className="flex justify-center py-6 border-t border-zinc-100">
        <ShareButton title="צלם חתונות לאירועים קטנים — יקיר כהן הפקות" />
      </div>

      <RelatedPages
        title="שירותים קשורים"
        pages={[
          { label: "אטרקציות לאירועים", href: "/attractions", desc: "זיקוקים, קונפטי, עשן כבד ועוד" },
          { label: "עמדת לד", href: "/events/led-booth", desc: "עמדת לד ניידת לאירועים" },
          { label: "DJ לאירועים", href: "/events/dj-events", desc: "מוזיקה מקצועית לחתונות ובני מצווה" },
          { label: "שירי חתונה", href: "/weddings/songs", desc: "שיר כניסה לחופה ושירים מקוריים" },
        ]}
      />
    </div>
  );
}
