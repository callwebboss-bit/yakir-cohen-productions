import { SITE_URL } from "@/lib/site-url";
import React from "react";
import Link from "next/link";
import { Mic, Search, Music, School, Volume2, ArrowLeft, ArrowRight, Play } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";
import { BLUR_DATA_URL } from "@/lib/blur";
import GoogleReviewsEmbed from "@/components/embeds/GoogleReviewsEmbed";
import ElfsightInstagramFeed from "@/components/embeds/ElfsightInstagramFeed";

const HOME_IMAGES = {
  portrait: "/assets/images/recording-studio/יקיר כהן הפקות באולפן.webp",
  workStudio: "/assets/images/recording-studio/אולפן ההקלטה יקיר כהן.webp",
  workPodcast: "/assets/images/podcast/אולפן פודקאסט - יקיר כהן הפקות.webp",
  workEvents: "/assets/images/cold-fireworks/זיקוקים קרים לחופה.webp",
} as const;

/** רוחב קריא אחיד — פחות “שטח ריק” במסכים רחבים */
const PAGE_SHELL = "w-full max-w-7xl mx-auto px-6 sm:px-8";

export const metadata: Metadata = {
  title: "אולפן הקלטות במודיעין | הקלטה, פודקאסט, אונליין ואירועים",
  description:
    "יקיר כהן הפקות — אולפן במודיעין להקלטת שירים וברכות, הפקת פודקאסט, שירותי עריכת קול אונליין, DJ ואטרקציות. מבנה ברור משיחה ראשונה ועד קבצים מוכנים.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "יקיר כהן הפקות | אולפן הקלטות במודיעין",
    description:
      "הקלטה, מיקס, פודקאסט, שירותים דיגיטליים ואירועים — תהליך מסודר ותוצאה מקצועית.",
    url: SITE_URL,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "יקיר כהן הפקות",
    url: SITE_URL,
    description:
      "אולפן הקלטות במודיעין, שירותי עריכת קול אונליין, DJ ואטרקציות לאירועים.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "יקיר כהן הפקות",
    url: SITE_URL,
    image: `${SITE_URL}/assets/images/logo.png`,
    description:
      "אולפן הקלטות והפקות במודיעין — הקלטה, מיקס, פודקאסט, שירותים אונליין וציוד לאירועים.",
    telephone: "+972-58-7555456",
    address: {
      "@type": "PostalAddress",
      streetAddress: "קניון עזריאלי",
      addressLocality: "מודיעין",
      postalCode: "71700",
      addressCountry: "IL",
    },
    sameAs: [
      "https://www.instagram.com/yakir.cohen.official",
      "https://www.youtube.com/user/kikosh",
      "https://www.facebook.com/dj.yakir.cohen",
      "https://www.tiktok.com/@yakir.cohen.offical",
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <StructuredData data={homeSchema} />

      <header className="relative min-h-[520px] md:min-h-[580px] lg:min-h-[min(78vh,820px)] flex flex-col justify-center bg-surface overflow-hidden border-b border-zinc-200/80">
        <div
          className="absolute inset-0 bg-zinc-100/40"
          aria-hidden="true"
        />
        <div className={`relative z-10 ${PAGE_SHELL} py-12 md:py-16 lg:py-20`}>
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14 lg:items-center">
            <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-start gap-7 md:gap-9">
              <p className="text-xs font-bold tracking-widest text-zinc-500">
                יקיר כהן הפקות · מודיעין
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.08] max-w-3xl lg:max-w-none">
                אולפן הקלטות במודיעין
                <br />
                <span className="text-brand-red">ושירותים שמקיפים את כל מה שקורה אחרי ההקלטה.</span>
              </h1>

              <form action="/search" method="get" className="w-full relative group max-w-xl mx-auto lg:mx-0">
                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-brand-red transition-colors">
                  <Search size={22} aria-hidden="true" />
                </div>
                <input
                  id="global-search"
                  name="q"
                  className="w-full bg-white border border-zinc-300 rounded-full py-4 md:py-4 pe-14 ps-8 text-base md:text-lg font-sans placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-2 focus:ring-brand-red/15 shadow-sm"
                  placeholder="לדוגמה: הקלטת שיר, פודקאסט, stem split…"
                  aria-label="חיפוש שירותים באתר"
                />
                <button
                  type="submit"
                  className="absolute inset-y-2 inset-inline-start-2 bg-zinc-900 text-white rounded-full px-6 md:px-8 text-sm md:text-base font-bold hover:bg-brand-red transition-colors"
                  aria-label="חפש באתר"
                >
                  חיפוש
                </button>
              </form>

              <p className="text-zinc-600 max-w-lg lg:max-w-xl text-base md:text-lg leading-relaxed text-pretty mx-auto lg:mx-0">
                הקלטה, עריכה ומיקס באולפן, שירותי קול אונליין, והפקה לאירועים — כל אחד עם דף משלו ומחירון שקוף.
              </p>
            </div>

            <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end mt-0">
              <div className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white px-8 py-8 shadow-md">
                <p className="font-serif text-2xl xl:text-[1.65rem] text-zinc-800 leading-snug text-pretty text-start">
                  אותה שפה מקצועית — מאולפן דרך{" "}
                  <Link href="/online" className="text-brand-red font-semibold underline-offset-4 hover:underline">
                    שירות אונליין
                  </Link>{" "}
                  ועד{" "}
                  <Link href="/events/dj-events" className="text-brand-red font-semibold underline-offset-4 hover:underline">
                    ערב בשטח
                  </Link>
                  .
                </p>
                <ul className="mt-6 space-y-3 border-t border-zinc-200 pt-6 text-start text-sm text-zinc-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
                    <span>תהליך ברור: מה נכנס, מה יוצא, ומתי.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
                    <span>ציוד ואקוסטיקה — לא “בית ספר”, אלא עבודה.</span>
                  </li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-start">
                  <Link href="/studio" className="text-sm font-bold text-zinc-800 hover:text-brand-red transition-colors">
                    האולפן ←
                  </Link>
                  <Link href="/contact" className="text-sm font-bold text-zinc-800 hover:text-brand-red transition-colors">
                    צור קשר ←
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className={`py-16 md:py-20 ${PAGE_SHELL}`} aria-labelledby="services-hub-heading">
        <div className="section-heading mx-auto max-w-3xl">
          <h2 id="services-hub-heading" className="font-serif text-3xl md:text-4xl font-bold text-center text-balance">
            ארבעה כניסות ראשיות
          </h2>
          <span className="section-heading__bar" aria-hidden="true" />
        </div>
        <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10 md:mb-12 text-pretty leading-relaxed mt-2">
          בוחרים נושא — מגיעים לעמוד שמסביר את התהליך, מה כלול, ואיך ממשיכים משם.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          <CategoryCard
            id="cat-studio"
            icon={<Mic size={40} />}
            title="אולפן והקלטה"
            desc="שירים, ברכות, מיקס וליווי עד קובץ סופי."
            href="/studio"
          />
          <CategoryCard
            id="cat-events"
            icon={<Music size={40} />}
            title="אירועים ו-DJ"
            desc="מוזיקה, ציוד, אטרקציות ותיאום בשטח."
            href="/events/dj-events"
          />
          <CategoryCard
            id="cat-academy"
            icon={<School size={40} />}
            title="אקדמיה וקורסים"
            desc="DJ, סאונד ואולפן ביתי — לימוד מעשי."
            href="/academy"
          />
          <CategoryCard
            id="cat-clinic"
            icon={<Volume2 size={40} />}
            title="קליניקה לקול"
            desc="עבודה על דיבור, קול וביטחון — מחוץ לאולפן."
            href="/clinic"
            isSpecial
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-y border-zinc-200">
        <div className={`${PAGE_SHELL} grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center`}>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] max-w-sm mx-auto lg:max-w-none rounded-3xl overflow-hidden border border-zinc-200 bg-surface p-2 shadow-sm brand-shadow">
              <Image
                src={HOME_IMAGES.portrait}
                alt="יקיר כהן באולפן ההקלטות במודיעין"
                width={800}
                height={1067}
                className="w-full h-full object-cover rounded-2xl"
                priority
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
              <div className="absolute bottom-8 inline-end-8 bg-white/95 backdrop-blur-sm border border-zinc-200 px-4 py-2 flex items-center gap-2 rounded-full shadow-lg max-w-[min(90%,280px)]">
                <div className="w-2 h-2 rounded-full bg-brand-red shrink-0" aria-hidden="true" />
                <span className="text-[11px] font-bold tracking-wide text-zinc-800 leading-tight">
                  סאונד נקי, תהליך מסודר
                </span>
              </div>
            </div>
          </div>
          <article className="lg:col-span-7 flex flex-col gap-8 xl:pe-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-balance">
              אותו בית הפקה.
              <br />
              <span className="text-brand-red">פחות בלבול בין אולפן, אונליין ואירוע.</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand-red" aria-hidden="true" />
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl text-pretty">
              חלק מהלקוחות מגיעים לשיר או ברכה, חלק לפודקאסט, וחלק צריכים גם DJ וגם אטרקציה — כאן אפשר לפרק את זה לשלבים ברורים, בלי לאבד קבצים ובלי להסתבך עם ספקים מתחרים.
            </p>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl text-pretty">
              מדברים בעברית פשוטה, קובעים ציפיות, ואז עובדים. אם משהו לא מתאים — אומרים את זה לפני שמשקיעים זמן.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-zinc-100 pt-8">
              <div>
                <p className="text-4xl font-serif font-black">20+</p>
                <p className="text-zinc-500 font-bold">שנות ניסיון</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-black">1,500+</p>
                <p className="text-zinc-500 font-bold">פרויקטים שהוקלטו והופקו</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/contact" className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-red transition-colors flex items-center gap-2 group shadow-md hover:shadow-lg">
                בואו נתחיל
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/studio" className="border border-zinc-900/20 bg-white px-8 py-4 rounded-2xl font-bold hover:border-zinc-900 hover:bg-zinc-50/80 transition-colors shadow-sm">
                לראות את האולפן
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-red text-white" aria-labelledby="events-teaser-heading">
        <div className={PAGE_SHELL}>
          <h2 id="events-teaser-heading" className="font-serif text-3xl md:text-4xl font-bold mb-3 text-balance">
            אטרקציות וציוד לאירוע
          </h2>
          <p className="text-white/85 max-w-2xl mb-10 leading-relaxed text-pretty">
            בנוסף ל-DJ ולסאונד — אפשר להזמין זיקוקים קרים, עשן, בועות ועוד. פירוט מלא ומחשבון הערכה בעמוד האטרקציות.
          </p>
          <div className="w-16 h-1 bg-white/90 mb-10" aria-hidden="true" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white/15 p-6 rounded-2xl border border-white/25">
              <h3 className="font-bold text-lg mb-2">זיקוקים קרים</h3>
              <p className="text-white/90 text-sm leading-relaxed">רגעי כניסה וחופה — בטיחותי כשעובדים לפי הנחיות המקום.</p>
            </div>
            <div className="bg-white/15 p-6 rounded-2xl border border-white/25">
              <h3 className="font-bold text-lg mb-2">עשן ו-CO₂</h3>
              <p className="text-white/90 text-sm leading-relaxed">עומק בתמונה ובאווירה, עם תיאום מול אולם וחשמל.</p>
            </div>
            <div className="bg-white/15 p-6 rounded-2xl border border-white/25">
              <h3 className="font-bold text-lg mb-2">בועות סבון</h3>
              <p className="text-white/90 text-sm leading-relaxed">מתאים לכניסות, ילדים וצילומי משפחה.</p>
            </div>
            <div className="bg-white/15 p-6 rounded-2xl border border-white/25">
              <h3 className="font-bold text-lg mb-2">תאורה ואפקטים</h3>
              <p className="text-white/90 text-sm leading-relaxed">תומך ברחבה ובמסלול המוזיקה, לא מצליח על השיר.</p>
            </div>
          </div>
          <div className="mt-10">
            <Link
              href="/attractions"
              className="inline-flex items-center gap-2 font-bold text-white border-b-2 border-white/80 pb-1 hover:border-white transition-colors"
            >
              לעמוד האטרקציות והמחשבון
              <ArrowLeft size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" aria-labelledby="pricing-snapshot-heading">
        <div className={PAGE_SHELL}>
          <h2 id="pricing-snapshot-heading" className="font-serif text-3xl md:text-4xl font-bold mb-3 text-balance">
            נקודות פתיחה למחירון
          </h2>
          <p className="text-zinc-600 max-w-2xl mb-8 leading-relaxed text-pretty">
            המספרים להמחשה בלבד; סוג הפרויקט, זמן האולפן והליווי משפיעים על ההצעה הסופית. לפירוט מדויק — עמוד השירות או{" "}
            <Link href="/contact" className="font-bold text-brand-red underline-offset-2 hover:underline">
              צור קשר
            </Link>
            .
          </p>
          <div className="w-16 h-1 bg-brand-red mb-10" aria-hidden="true" />
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <table className="w-full text-right text-sm md:text-base">
              <thead>
                <tr className="border-b-2 border-zinc-200 bg-zinc-50/80">
                  <th scope="col" className="py-4 px-6 font-bold">שירות</th>
                  <th scope="col" className="py-4 px-6 font-bold">החל מ־</th>
                  <th scope="col" className="py-4 px-6 font-bold">מה בדרך כלל כלול</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 px-6">הקלטת שיר</td>
                  <td className="py-4 px-6 font-bold">990 ש"ח</td>
                  <td className="py-4 px-6 text-sm">טכנאי סאונד, תיקון זיופים ומיקס ראשוני</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 px-6">DJ ל-4 שעות</td>
                  <td className="py-4 px-6 font-bold">2,490 ש"ח</td>
                  <td className="py-4 px-6 text-sm">סאונד, תאורה, MC וניהול מוזיקלי מלא</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 px-6">זיקוקים קרים</td>
                  <td className="py-4 px-6 font-bold">1,500 ש"ח</td>
                  <td className="py-4 px-6 text-sm">ציוד, הקמה וליווי טכני</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 px-6">מכונת עשן</td>
                  <td className="py-4 px-6 font-bold">890 ש"ח</td>
                  <td className="py-4 px-6 text-sm">ציוד והפעלה לאורך האירוע</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">הפקת פודקאסט</td>
                  <td className="py-4 px-6 font-bold">3,990 ש"ח</td>
                  <td className="py-4 px-6 text-sm">הקלטה, עריכה, מיקס והכנה להפצה</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-zinc-100/50">
        <div className={`${PAGE_SHELL} text-center`}>
          <div className="mb-10">
            <div className="section-heading mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance">משובים (דוגמאות)</h2>
              <span className="section-heading__bar" aria-hidden="true" />
            </div>
            <div className="flex justify-center gap-1 mb-4 mt-6" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-3xl text-brand-red/90">
                  ★
                </span>
              ))}
            </div>
            <p className="text-zinc-600 text-base md:text-lg max-w-xl mx-auto text-pretty">
              ציטוטים לדוגמה. לעוד המלצות ושקיפות —{" "}
              <Link href="/about/reviews" className="font-bold text-brand-red underline-offset-2 hover:underline">
                עמוד הביקורות
              </Link>
              .
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            <div className="bg-white p-7 rounded-2xl border border-zinc-200 shadow-sm text-start md:text-center">
              <p className="text-brand-red font-bold mb-3">★★★★★</p>
              <p className="text-zinc-700 italic mb-4">"נכנסתי עם סקיצה קטנה ויצאתי עם שיר שמרגיש שלי. הכל היה ברור, נעים ומדויק."</p>
              <p className="font-bold text-sm">שירה כהן, זמרת</p>
            </div>
            <div className="bg-white p-7 rounded-2xl border border-zinc-200 shadow-sm text-start md:text-center">
              <p className="text-brand-red font-bold mb-3">★★★★★</p>
              <p className="text-zinc-700 italic mb-4">"מהרגע שסגרנו ידענו שיש על מי לסמוך. המוזיקה עבדה, הרחבה נשארה חיה, והאטרקציות באו בזמן."</p>
              <p className="font-bold text-sm">מאיה וצביקה, חתונה</p>
            </div>
            <div className="bg-white p-7 rounded-2xl border border-zinc-200 shadow-sm text-start md:text-center">
              <p className="text-brand-red font-bold mb-3">★★★★★</p>
              <p className="text-zinc-700 italic mb-4">"לא רק שהאולפן נשמע טוב, גם קיבלנו כיוון ברור. זה חסך לנו ניסוי וטעייה והזיז את הפודקאסט קדימה."</p>
              <p className="font-bold text-sm">דני גביאל, פודקאסט עסקי</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white border-t border-zinc-200" aria-labelledby="explore-more-heading">
        <div className={PAGE_SHELL}>
          <div className="section-heading section-heading--start mb-3 max-w-2xl">
            <h2 id="explore-more-heading" className="font-serif text-2xl md:text-3xl font-bold text-balance text-start w-full">
              ניווט מהיר לפי שירות
            </h2>
            <span className="section-heading__bar self-start" aria-hidden="true" />
          </div>
          <p className="text-zinc-600 mb-8 max-w-2xl text-sm md:text-base leading-relaxed text-pretty">
            כל קישור מוביל לעמוד ייעודי עם פירוט, מחירים כשהם רלוונטיים, ודרך ליצירת קשר.
          </p>
          <nav aria-label="קישורים לשירותים עיקריים" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-3 text-sm">
            <ul className="space-y-2">
              <li className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">אולפן</li>
              <li>
                <Link href="/studio/recording-song-modiin" className="text-zinc-700 hover:text-brand-red font-medium">
                  הקלטת שיר במודיעין
                </Link>
              </li>
              <li>
                <Link href="/studio/blessings" className="text-zinc-700 hover:text-brand-red font-medium">
                  ברכות לחתונה ואירועים
                </Link>
              </li>
              <li>
                <Link href="/online/vocal-fix" className="text-zinc-700 hover:text-brand-red font-medium">
                  שירותי קול אונליין
                </Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">אירועים ותוכן</li>
              <li>
                <Link href="/events/dj-events" className="text-zinc-700 hover:text-brand-red font-medium">
                  DJ לאירועים
                </Link>
              </li>
              <li>
                <Link href="/podcast/podcast-production" className="text-zinc-700 hover:text-brand-red font-medium">
                  הפקת פודקאסט
                </Link>
              </li>
              <li>
                <Link href="/business/professional-voiceover" className="text-zinc-700 hover:text-brand-red font-medium">
                  קריינות לעסקים
                </Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">כלים ומידע</li>
              <li>
                <Link href="/online/vocal-fix/stem-split" className="text-zinc-700 hover:text-brand-red font-medium">
                  פיצול ערוצים (Stem split)
                </Link>
              </li>
              <li>
                <Link href="/stemsplit" className="text-zinc-700 hover:text-brand-red font-medium">
                  StemSplit — כלי באתר
                </Link>
              </li>
              <li>
                <Link href="/site-map" className="text-zinc-700 hover:text-brand-red font-medium">
                  מפת אתר מלאה
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className={PAGE_SHELL}>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12 md:mb-16 px-1">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-balance">מתוך העבודה</h2>
              <div className="w-16 h-1 bg-brand-red" aria-hidden="true" />
            </div>
            <Link href="/studio" className="text-zinc-600 font-bold hover:text-black transition-colors flex items-center gap-2 shrink-0">
              לעמוד האולפן
              <ArrowLeft size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            <WorkCard
              id="work-1"
              img={HOME_IMAGES.workStudio}
              category="הפקה והקלטה"
              title="האולפן בזמן עבודה"
              artist="סשן הקלטה מתוך המתחם"
              href="/studio"
            />
            <WorkCard
              id="work-2"
              img={HOME_IMAGES.workPodcast}
              category="פודקאסט ועסקים"
              title="עמדת פודקאסט פעילה"
              artist="צילום מתוך אולפן הפודקאסט"
              href="/podcast"
            />
            <WorkCard
              id="work-3"
              img={HOME_IMAGES.workEvents}
              category="אירועים ואטרקציות"
              title="חופה עם זיקוקים קרים"
              artist="אפקט כניסה לאירוע"
              href="/attractions"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-zinc-50 border-t border-zinc-200" aria-labelledby="home-google-reviews-heading">
        <div className={PAGE_SHELL}>
          <div className="mb-10 px-1">
            <h2 id="home-google-reviews-heading" className="font-serif text-3xl md:text-4xl font-bold text-balance mb-3">
              מה אומרים עלינו בגוגל
            </h2>
            <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed">
              ביקורות חיות מהפרופיל בגוגל — נטען בעצלתיים כדי לא להאט את דף הבית.
            </p>
          </div>
          <GoogleReviewsEmbed />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-t border-zinc-200" aria-labelledby="home-instagram-heading">
        <div className={PAGE_SHELL}>
          <div className="mb-10 px-1">
            <h2 id="home-instagram-heading" className="font-serif text-3xl md:text-4xl font-bold text-balance mb-3">
              עקבו אחרינו באינסטגרם
            </h2>
            <p className="text-sm text-zinc-600 max-w-2xl leading-relaxed">
              עדכונים מהאולפן, מאחורי הקלעים ומהשטח — הפיד נטען כשמתקרבים אליו.
            </p>
          </div>
          <ElfsightInstagramFeed />
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ id, icon, title, desc, href, isSpecial }: { id: string; icon: React.ReactNode; title: string; desc: string; href: string; isSpecial?: boolean }) {
  return (
    <Link href={href} id={id} className="group block h-full">
      <div
        className={`h-full min-h-[240px] p-8 rounded-3xl border flex flex-col items-center justify-center text-center gap-4 transition-shadow ${
          isSpecial
            ? "bg-zinc-900 text-white border-zinc-800 shadow-sm group-hover:shadow-md"
            : "bg-white border-zinc-200 shadow-sm group-hover:shadow-md group-hover:border-zinc-300"
        }`}
      >
        <div className={isSpecial ? "text-brand-red" : "text-zinc-900"}>{icon}</div>
        <div>
          <h3 className="font-serif text-xl font-bold mb-2">{title}</h3>
          <p className={`text-sm leading-relaxed ${isSpecial ? "text-zinc-400" : "text-zinc-600"}`}>{desc}</p>
        </div>
      </div>
    </Link>
  );
}

function WorkCard({ id, img, category, title, artist, href }: { id: string; img: string; category: string; title: string; artist: string; href: string }) {
  return (
    <article id={id} className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-md transition-shadow flex flex-col group">
      <div className="aspect-[4/3] overflow-hidden relative bg-zinc-100">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white">
            <Play fill="currentColor" size={24} />
          </div>
        </div>
      </div>
      <div className="p-8 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
          <span className="text-[10px] font-black tracking-widest text-zinc-400">{category}</span>
        </div>
        <div>
          <h3 className="font-serif text-2xl font-bold mb-1">{title}</h3>
          <p className="text-zinc-500 font-bold text-sm tracking-tight">{artist}</p>
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs font-black tracking-widest border-b-2 border-brand-red pb-1 hover:gap-3 transition-all w-fit"
          aria-label={`מעבר אל ${title}`}
        >
          להמשך
          <ArrowRight size={12} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
