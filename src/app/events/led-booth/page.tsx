import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import ShareButton from "@/components/ShareButton";
import { BLUR_DATA_URL } from "@/lib/blur";

export const metadata: Metadata = {
  title: "עמדת לד ניידת לאירועים — השכרה ומכירה | יקיר כהן הפקות מודיעין",
  description:
    "עמדת לד ניידת שמשנה את חוויית האירוע ויזואלית. השכרה ומכירה לחתונות, בר מצוות ואירועי חברה. מודיעין, Modi'in.",
  alternates: { canonical: "https://www.yakircohen.com/events/led-booth" },
  openGraph: {
    title: "עמדת לד ניידת לאירועים | יקיר כהן הפקות מודיעין",
    description: "עמדת לד ניידת עם מסכים מובנים — מיתוג בזמן אמת, DJ, שידורים. להשכרה ולמכירה.",
    url: "https://www.yakircohen.com/events/led-booth",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://www.yakircohen.com/assets/images/led-booth/%D7%A2%D7%9E%D7%93%D7%AA%20%D7%9C%D7%93%20%D7%99%D7%A7%D7%99%D7%A8%D7%9B%D7%94%D7%9F%20-%20%D7%94%D7%9B%D7%99%20%D7%99%D7%A4%D7%94%20%D7%91%D7%90%D7%A8%D7%A5.webp",
        width: 1200,
        height: 630,
        alt: "עמדת לד ניידת לאירועים — יקיר כהן הפקות",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "עמדת לד ניידת לאירועים",
    description: "מיתוג בזמן אמת, DJ ושידורים. להשכרה ולמכירה — מודיעין.",
    images: ["https://www.yakircohen.com/assets/images/led-booth/%D7%A2%D7%9E%D7%93%D7%AA%20%D7%9C%D7%93%20%D7%99%D7%A7%D7%99%D7%A8%D7%9B%D7%94%D7%9F%20-%20%D7%94%D7%9B%D7%99%20%D7%99%D7%A4%D7%94%20%D7%91%D7%90%D7%A8%D7%A5.webp"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "עמדת לד ניידת לאירועים — יקיר כהן הפקות",
  description: "עמדת לד ניידת להשכרה ולמכירה. מתאימה לאירועי חברה, חתונות, בר מצוות ושידורים.",
  provider: {
    "@type": "LocalBusiness",
    name: "יקיר כהן הפקות",
    telephone: "+972-58-7555456",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Modi'in",
      addressCountry: "IL",
    },
  },
  areaServed: "Modi'in",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "ILS",
    offerCount: "2",
    description: "השכרה ומכירה",
  },
};

const sections = [
  {
    title: "מה זה עמדת לד בעצם",
    content: `תחשבו על דוכן DJ רגיל. עכשיו תוסיפו לו מסכי לד מובנים שמקיפים אותו מכל הכיוונים.

זה מה שעמדת הלד עושה. היא לא סתם תאורה. היא הבמה עצמה.

הגולש שנכנס לאולם רואה מסך פעיל שמציג תוכן: שם הזוג, לוגו החברה, שם הבר מצווה. הכל בזמן אמת, בשליטה מלאה מהמחשב של האמן.`,
  },
  {
    title: "מתי זה שווה את ההשקעה",
    content: `ישנם שלושה סוגי אירועים שבהם עמדת הלד מייצרת ערך ממשי.

אירועי חברה וכנסים: כשצריך להציג לוגו של המותג כל הערב, לשלב סרטוני פרזנטציה בין המסגרות המוזיקליות, או לשדר חי מהמקום. זה בדיוק מה שהקמנו ל-102FM בטרמינל.

חתונות ובר מצוות: השם של הזוג על המסך בקוקטייל, התמונות הסרוקות שרצות ברקע בזמן שמישהו נואם.

מקומות עם מגבלות מרחב: אולמות קטנים שבהם במת LED של 5 מטר פשוט לא נכנסת. העמדה תופסת שטח של חצי מטר ונותנת אפקט ויזואלי מלא.`,
  },
  {
    title: "מיתוג בזמן אמת — מקרה הבוחן של 102FM",
    content: `כשתחנת הרדיו הגיעה לאירוע, הדרישה הייתה פשוטה: לשדר מהמקום כאילו זה אולפן.

הקמנו את העמדה, חיברנו את מערכת הסאונד, ועל המסכים רצו בו-זמנית הלוגו של התחנה, שם התוכנית ושם המגיש.

העמדה הפכה את האירוע לסט של שידור. הצופים בבית ראו תמונה מקצועית. המשתתפים באולם הרגישו שהם חלק מהפקה.

זה מה שמסך פעיל עושה שתאורה רגילה לא יכולה לעשות.`,
  },
  {
    title: "ההבדל מבמת LED גדולה",
    content: `במת LED גדולה (Stage L, Stage XL שלנו) מתאימה לאירועים מעל 150 איש עם תקציב מעל 15,000 שקלים.

עמדת הלד פועלת בלוגיקה אחרת. היא ניידת, מתקינים אותה ב-20 דקות, עובדת בחלל של 50 מ&quot;ר בדיוק כמו ב-1,000 מ&quot;ר.

אם האירוע שלכם קטן או בינוני, ואתם רוצים הבדל ויזואלי שאנשים ישימו לב אליו, העמדה היא הכלי הנכון.`,
  },
];

const galleryImages = [
  {
    src: "/assets/images/led-booth/עמדת לד יקירכהן - הכי יפה בארץ.webp",
    alt: "עמדת לד — יקיר כהן הפקות",
  },
  {
    src: "/assets/images/led-booth/אירוע חברה עם מיתוג.webp",
    alt: "עמדת לד באירוע חברה עם מיתוג",
  },
  {
    src: "/assets/images/led-booth/אולפן 102FM - הקמת עמדת לד לאולפן רדיו נייד.webp",
    alt: "עמדת לד — שידור 102FM",
  },
  {
    src: "/assets/images/led-booth/עמדת לד באירועים.webp",
    alt: "עמדת לד בפעולה באירוע",
  },
];

export default function LedBoothPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-zinc-100 text-zinc-700 text-xs font-bold px-3 py-1 rounded-full">אירועים</span>
            <span className="text-zinc-400 text-xs">6 דקות קריאה</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-900"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            עמדת לד ניידת
            <br />
            <span className="text-[#D42B2B]">השדרוג שהופך אירוע</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto">
            לא תאורה. לא עיצוב. מסך פעיל שמקרין תוכן בזמן אמת ומוסיף שכבה ויזואלית שאנשים זוכרים.
            להשכרה ולמכירה. מודיעין.
          </p>
        </div>
      </header>

      <article className="py-16 px-6 max-w-3xl mx-auto w-full">

        {/* Magazine sections */}
        {sections.map(({ title, content }) => (
          <section key={title} className="mb-12">
            <h2 className="font-serif text-2xl font-bold mb-4 text-zinc-900">{title}</h2>
            {content.split("\n\n").map((p, i) => (
              <p key={i} className="text-zinc-600 leading-relaxed mb-4 text-right">
                {p}
              </p>
            ))}
          </section>
        ))}

        {/* Gallery */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold mb-6 text-zinc-900">תמונות מהשטח</h2>
          <div className="grid grid-cols-2 gap-3">
            {galleryImages.map(({ src, alt }) => (
              <div key={src} className="relative aspect-video overflow-hidden rounded-xl bg-zinc-100">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 350px"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Videos */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold mb-6 text-zinc-900">ראו בפועל</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900">
                <iframe
                  src="https://www.youtube.com/embed/rsZjbz1rld0"
                  title="עמדת לד ניידת — יקיר כהן הפקות"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <figcaption className="text-sm text-zinc-500 text-center mt-2">עמדת לד ניידת — יקיר כהן הפקות</figcaption>
            </figure>
            <figure>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900">
                <iframe
                  src="https://www.youtube.com/embed/PLV1otfoRo0"
                  title="עמדת לד — שידור לרדיו 102FM"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <figcaption className="text-sm text-zinc-500 text-center mt-2">עמדת לד — שידור לרדיו 102FM</figcaption>
            </figure>
          </div>
        </section>

        {/* Options */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold mb-6 text-zinc-900">השכרה ומכירה</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-xl flex flex-col gap-3">
              <span className="text-xs font-bold text-[#D42B2B] uppercase tracking-wider">השכרה לאירוע</span>
              <p className="text-zinc-600 text-sm leading-relaxed text-right">
                עמדה מלאה כולל הקמה, תפעול וסגירה. מתאים לאירוע חד-פעמי.
                פנו לקבלת הצעת מחיר לפי תאריך ומיקום.
              </p>
              <Link
                href="/contact/whatsapp"
                className="mt-auto inline-block text-center bg-[#D42B2B] text-white px-5 py-2.5 rounded font-bold text-sm hover:bg-red-700 transition-colors"
              >
                פנו להצעת מחיר
              </Link>
            </div>
            <div className="p-6 bg-zinc-900 text-white rounded-xl flex flex-col gap-3">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">רכישה</span>
              <p className="text-zinc-400 text-sm leading-relaxed text-right">
                עמדת לד לרכישה — מתאים לאולמות, חברות אירועים, עמותות ועסקים שרוצים נוכחות ויזואלית קבועה.
              </p>
              <Link
                href="/contact/whatsapp"
                className="mt-auto inline-block text-center border border-white/30 text-white px-5 py-2.5 rounded font-bold text-sm hover:bg-white/10 transition-colors"
              >
                פרטים על רכישה
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 bg-zinc-900 text-white rounded-2xl text-center">
          <h2 className="font-serif text-xl font-bold mb-3">
            רוצים לראות אותה בפעולה
          </h2>
          <p className="text-zinc-400 text-sm mb-5">
            שלחו וואטסאפ עם פרטי האירוע — נחזור תוך שעה.
            אולפן הקלטות מודיעין, Modi&apos;in.
          </p>
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-3 rounded font-bold text-sm hover:bg-red-700 transition-colors"
          >
            058-7-555-456 וואטסאפ
          </Link>
        </div>
        <p className="text-zinc-400 text-xs text-center mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </article>

      <div className="flex justify-center py-6 border-t border-zinc-100">
        <ShareButton title="עמדת לד ניידת" />
      </div>

      <RelatedPages
        title="שירותים קשורים"
        pages={[
          { label: "DJ עם במה ותאורת LED", href: "/events/stage-led-dj", desc: "הפקות גדולות מ-15,500 ₪" },
          { label: "DJ לאירועים", href: "/events/dj-events", desc: "חבילות DJ מ-7,500 ₪" },
          { label: "אטרקציות לאירועים", href: "/attractions", desc: "קונפטי, עשן, זיקוקים קרים" },
        ]}
      />
    </div>
  );
}
