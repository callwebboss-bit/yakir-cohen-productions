import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import ShareButton from "@/components/ShareButton";
import { BLUR_DATA_URL } from "@/lib/blur";

export const metadata: Metadata = {
  title: "בועות סבון עשן לסלואו חתונה מודיעין 2026 | השכרת מכונת בועות לאירועים",
  description:
    "השכרת מכונת בועות סבון לאירועים ב-2026: סלואו חתונה, בר/בת מצווה ותאורה LED. שליטה אלחוטית, נוזלים היפואלרגניים, ניקוי מהיר וניסיון של 20 שנה.",
  alternates: { canonical: "https://www.yakircohen.com/attractions/bubble-machine" },
  openGraph: {
    title: "בועות סבון עשן לחתונה במודיעין | יקיר כהן הפקות",
    description:
      "מכונת בועות LED לאירועים עם נוזל היפואלרגני, שליטה אלחוטית ותיאום מלא עם ה-DJ. מתאים לכל רגע מיוחד.",
    url: "https://www.yakircohen.com/attractions/bubble-machine",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "השכרת מכונת בועות סבון לאירועים",
  description:
    "מכונת בועות סבון לאירועים עם LED, עשן, שליטה אלחוטית ונוזל היפואלרגני. חבילות ל-חתונות, בר/בת מצווה, ימי הולדת ואירועי חברה.",
  provider: {
    "@type": "LocalBusiness",
    name: "יקיר כהן הפקות",
    telephone: "+972-58-7555456",
    address: {
      "@type": "PostalAddress",
      addressLocality: "מודיעין-מכבים-רעות",
      addressCountry: "IL",
    },
  },
  serviceType: "השכרת מכונת בועות סבון",
  offers: {
    "@type": "Offer",
    priceCurrency: "ILS",
    availability: "https://schema.org/InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "האם בועות הסבון בטוחות לילדים?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "כן. הנוזל שלנו היפואלרגני, נוזל מים עדין ובטוח למגע. מתאים לכל גיל.",
      },
    },
    {
      "@type": "Question",
      name: "האם הבועות מחליקות על הרצפה?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "אין החלקה. הנוזל מתייבש במהירות ולא משאיר סימני רטיבות. בטיחות זו חובה עבורנו.",
      },
    },
    {
      "@type": "Question",
      name: "האם אפשר לשלב את הבועות עם תאורה ו-DJ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "כמובן. אנחנו מתאימים את שליטת הבועות למוזיקה ולקונספט התאורה של ה-DJ, כולל LED ואפקטים ויזואליים.",
      },
    },
    {
      "@type": "Question",
      name: "כמה זמן נמשך האפקט של בועות סבון באירוע?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ניתן להפעיל בועות בכמה מקטעים לאורך האירוע, מ-30 שניות ועד מספר דקות בכל הפעלה.",
      },
    },
    {
      "@type": "Question",
      name: "האם יש צורך בהתקנה מיוחדת בחללים סגורים?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "אין בעיה. אנו מתקינים את המערכת כך שהבועות יזרמו בצורה מבוקרת גם באולמות סגורים ובגנים מצומצמים.",
      },
    },
    {
      "@type": "Question",
      name: "האם אפשר להזמין גם עמדת LED או רכישת ציוד למסיבות?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "כן. בנוסף להשכרת בועות סבון, יש לנו עמדת LED ופתרון רכישה לספקים, תקליטנים ואולמות.",
      },
    },
    {
      "@type": "Question",
      name: "האם הבועות פוגעות בציוד אלקטרוני?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "לא. הנוזל שלנו אינו שומני, מתייבש במהירות ולא מזיק לריהוט או לציוד מצלמות ותאורה.",
      },
    },
    {
      "@type": "Question",
      name: "מתי כדאי להזמין מכונת בועות לאירוע?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "במיוחד בעונות החמות והעומס של 2026 מומלץ להזמין חודשיים מראש כדי להבטיח מכונה, מפעיל וציוד LED לתזמון מדויק.",
      },
    },
  ],
};

const galleryImages = [
  { src: "/assets/images/led-booth/עמדת לד באירועים.webp", alt: "מכונת בועות סבון באירוע עם תאורת LED" },
  { src: "/assets/images/led-booth/עמדת-לד-השכרות-1024x576.webp", alt: "מכונת בועות סבון ועמדת LED מקצועית" },
  { src: "/assets/images/led-booth/אירוע חברה עם מיתוג.webp", alt: "אירוע חברה עם אפקטים ויזואליים של בועות ו-LED" },
  { src: "/assets/images/led-booth/עמדה ותאורה יקירכהן באירוע.webp", alt: "התקנת בועות סבון ותאורת LED לאירוע" },
];

const featureCards = [
  { title: "בטיחות מלאה", text: "נוזלים היפואלרגניים, חומר נגד החלקה ובדיקה מקצועית לפני כל הפעלה." },
  { title: "תזמון אונליין", text: "שלט אלחוטי שיכול לעבוד עם ה-DJ, מוזיקה ותאורות וידאו בו זמנית." },
  { title: "כל חלל אפשרי", text: "אולמות, גני אירועים, חופות על שפת הבריכה, בתים פרטיים וכל לוקיישן מיוחד." },
  { title: "ניקוי מהיר", text: "לא משאיר לכלוך או כתמים. הכל מתייבש במהירות ונקי בסיום האירוע." },
];

const serviceSteps = [
  { title: "שלב 1: תכנון הרגעים", description: "נבנה יחד את לוח הזמנים של נגיעות הבועה, לריקוד הסלואו, כניסה לחופה ומחיאות כפיים." },
  { title: "שלב 2: התקנה מקצועית", description: "הצוות מגיע עם כל הציוד, בודק ציוד, בונה עמדת בועות LED ומתחבר ל-DJ או למערכת התאורה.", },
  { title: "שלב 3: הפעלה חיה", description: "הטכנאי מפעיל בדיוק לפי השיר, נותן בועות מושלמות בכל זמן ולא משאיר אחריו כלים פתוחים." },
];

const otherAttractions = [
  { href: "/attractions/cold-fireworks", label: "זיקוקים קרים", desc: "ניצוצות בשליטה" },
  { href: "/attractions/wedding-smoking-machine", label: "עשן כבד", desc: "אפקט ריקוד דרמטי" },
  { href: "/attractions/confetti-cannon", label: "קונפטי", desc: "פיצוץ של צבע" },
  { href: "/attractions/giant-balloons", label: "בלוני ענק", desc: "ואוו ויזואלי" },
];

export default function BubbleMachinePage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={[serviceSchema, faqSchema]} />

      <header
        className="py-20 px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · בועות סבון לאירועים
        </p>
        <h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          בועות סבון עשן לסלואו חתונה מודיעין 2026.
          <br />
          <span className="text-[#D42B2B]">האטרקציה שממלאת את הרחבה באור וחום.</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          השכרת מכונת בועות LED לאירועים עם שליטה אלחוטית, חומרים היפואלרגניים ותאום מלא עם ה-DJ.
          אנו מביאים את ההפעלה המתוזמנת לרגעים הכי מרגשים של האירוע.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            בדקו זמינות למודיעין
          </Link>
          <Link href="/attractions" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            חבילות אטרקציות מלאות
          </Link>
        </div>
      </header>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#D42B2B] mb-4">בוק סבון סנסציה</p>
            <h2 className="font-serif text-3xl font-bold mb-5">החוויה שמזכירה הופעה חיה</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              בועות סבון לאירועים ב-2026 נראות אחרת. הן מגיעות עם תאורת LED, עשן קר ופתרון ניקוי שנשאר נקי.
              זה לא רק אפקט תמונה — זו חוויה שמחברת בין ריקוד, מוזיקה וקהל.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-4">
              בתקופה שבה כל רגע חשוב, אנחנו בוחרים לרתק את הקהל עם בועות שמתנהגות כמו מופע רחוק מהבית.
              ניקיון, בטיחות ושליטה אלחוטית הופכים את הבועה לחלק מהסיפור שלכם.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-zinc-900 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-zinc-400 mb-2">20 שנות ניסיון</p>
                <p className="font-serif text-2xl font-black">1,800+ אירועים</p>
              </div>
              <div className="rounded-3xl bg-zinc-900 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-zinc-400 mb-2">ביקורות 5 כוכבים</p>
                <p className="font-serif text-2xl font-black">280+ המלצות</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden bg-zinc-900">
            <Image
              src="/assets/images/led-booth/עמדת לד באירועים.webp"
              alt="אירוע עם אפקט בועות סבון ותאורת LED"
              width={720}
              height={540}
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">מה מקבלים בחבילה של בועות סבון לאירוע</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {featureCards.map(({ title, text }) => (
              <div key={title} className="rounded-3xl bg-white p-8 shadow-sm border border-zinc-200">
                <h3 className="font-serif text-xl font-bold mb-3">{title}</h3>
                <p className="text-zinc-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">איך זה עובד ב-2026</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {serviceSteps.map(({ title, description }) => (
            <div key={title} className="rounded-3xl bg-zinc-900 text-white p-7">
              <h3 className="font-serif text-xl font-bold mb-3">{title}</h3>
              <p className="text-zinc-300 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">מקרי בוחן מהשטח</h2>
          <div className="space-y-8">
            <article className="rounded-3xl bg-white border border-zinc-200 p-8">
              <h3 className="font-serif text-2xl font-bold mb-3">חתונה במודיעין מול הים</h3>
              <p className="text-zinc-600 leading-relaxed mb-4">
                לכניסה לחופה הוספנו בועות LED ואפקט עשן קר. התמונה שנוצרה הייתה שטופת אור ורומנטיקה,
                והצילום נראה כאילו נלקח מסרט פריים-טיים.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                הלקוחות כתבו לנו אחרי: "רק בקושי ראינו את הבועה, אבל כולנו הרגשנו את התחושה.
                זו הייתה הפתעה מושלמת לרגע הסלואו.".
              </p>
            </article>
            <article className="rounded-3xl bg-white border border-zinc-200 p-8">
              <h3 className="font-serif text-2xl font-bold mb-3">בר/בת מצווה צבעונית</h3>
              <p className="text-zinc-600 leading-relaxed mb-4">
                שילבנו בועות סבון צבעוניות עם מוזיקת DJ וקליפים על מסך LED.
                כל הילדים רצו לרקוד בתוך העננים וההורים הצליחו לצלם את הרגעים הטובים ביותר.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                אחרי האירוע קיבלנו תיאור אישי: "כולם דיברו על הבועות, גם המחווה של הסבים והסבתות.
                זה נתן לאירוע תחושה של חוויה שלמה ולא רק פיצ'ר אחד.".
              </p>
            </article>
            <article className="rounded-3xl bg-white border border-zinc-200 p-8">
              <h3 className="font-serif text-2xl font-bold mb-3">אירוע חברה נקי ואלגנטי</h3>
              <p className="text-zinc-600 leading-relaxed mb-4">
                במופע חברה של לקוח עסקי בחרנו בועות לבנות עם תאורה עדינה.
                האפקט הוסיף עניין בלי להסיח את דעת הרצאות והפרזנטציות.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                הלקוח דיבר על זה כעל "תוספת מקצועית".
                זה לא היה השוס, זה היה השדרוג שגרם לאירוע להרגיש יקר ונשלט.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">איך אנו מתאימים את האפקט לכל חלל</h2>
          <p className="text-zinc-600 leading-relaxed mb-4">
            לפני כל אירוע אנחנו מודדים את החלל, בוחנים את האקוסטיקה ואת התאורה ומחשבים את נקודת ההתקנה האופטימלית.
            בועות סבון הן אמנם אטרקציה רכה, אבל התכנון המדויק עושה את כל ההבדל בין אפקט יפה לאפקט מושלם.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4">
            אם האירוע נמצא במקלט או באולם קטן, אנו מצמצמים את הזרימה ומשתמשים בבועות עדינות.
            אם זה אירוע חיצוני גדול, אנו מגבירים את ההספק ומוסיפים תאורת LED חזקה כדי לשמור על קוהרנטיות בכל התמונה.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4">
            היכולת שלנו לעבוד עם כל סוגי ה-DJ ועמדות התאורה הופכת את הבועות לחלק בלתי נפרד מהציוד הטכני של האירוע.
            זו לא רק תוספת — זו שכבה ויזואלית שמתחברת לכל רגע.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            בסופו של דבר, בכדי לתת חוויה נקייה ונוחה, כל סצנה נשמרת בצורה שהצוות והאורחים מרגישים את הבועה בלי להרגיש עומס.
            זה בדיוק מה שמבדיל אותנו ב-2026 בעולמות הבועות סבון לאירועים.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="lg:w-1/2">
            <h2 className="font-serif text-3xl font-bold mb-6">מי אנחנו ומה מבדיל אותנו</h2>
            <p className="text-zinc-600 leading-relaxed mb-5">
              יקיר כהן הפקות מנהלת שירות בועות סבון לאירועים כבר שני עשורים.
              בכל שנה אנו מחדשים את הציוד, מביאים נוזלים מתקדמים ומתאימים את ההצעה לכל אירוע.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-5">
              מאז 2006 חיברנו בועות סבון למוזיקה, מסכי LED, תותחי קונפטי ועשן כבד.
              ב-1,800 אירועים ראינו את הבועה הופכת את הכניסה לחופה, את ריקוד הסלואו ואת רגע ההכרזה לרגע שישאר בתמונות.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              לקוחות מספרים על חוויה של פעם בחיים. זו לא רק מכונה — זו הפעלה שנבחרה ונבדקה.
              טכנאי מגיע כמה שעות לפני האירוע, בודק שנאי, מחבר שליטה אלחוטית ומוודא שהכל יעבוד בלי הפסקות.
            </p>
          </div>
          <div className="lg:w-1/2 rounded-3xl overflow-hidden bg-zinc-900">
            <Image
              src="/assets/images/led-booth/עמדת לד למכירה.webp"
              alt="מכונת بועות סבון עם עמדת LED מקצועית"
              width={720}
              height={540}
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">גלריית אירועים</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {galleryImages.map(({ src, alt }) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-900">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-center mb-10">ראו את בועות הסבון בפועל</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <figure className="rounded-3xl overflow-hidden bg-zinc-900">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/SkBHvqC-S2Q"
                title="הפעלה של בועות סבון לאירועים"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <figcaption className="text-sm text-zinc-500 text-center mt-3 p-4">הדגמה חיה של בועות סבון עם תאורת LED</figcaption>
          </figure>
          <figure className="rounded-3xl overflow-hidden bg-zinc-900">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/btBx-cw16Js"
                title="מכונת בועות סבון בר/בת מצווה"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <figcaption className="text-sm text-zinc-500 text-center mt-3 p-4">בועות סבון בכניסה לבר/בת מצווה</figcaption>
          </figure>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">חבילות ותוכן 2026</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
              <h3 className="font-serif text-2xl font-bold mb-3">חבילה קלאסית</h3>
              <p className="text-zinc-600 leading-relaxed mb-4">
                מכונת בועות סבון סטנדרטית עם התאמה אישית לצבעי האירוע, הפעלה מקצועית ונוזל בטוח.
              </p>
              <ul className="space-y-2 text-zinc-600 text-sm">
                <li>מפעיל צמוד לכל זמן האפקט</li>
                <li>שליטה אלחוטית עם קצב ותאורה</li>
                <li>נוזל היפואלרגני וניקוי מהיר</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
              <h3 className="font-serif text-2xl font-bold mb-3">חבילה מתקדמת</h3>
              <p className="text-zinc-600 leading-relaxed mb-4">
                חבילה שמכילה גם בועות עשן, תאורת LED ואפשרות לשילוב עם עמדת DJ.
              </p>
              <ul className="space-y-2 text-zinc-600 text-sm">
                <li>מכונת בועות עם עשן קר</li>
                <li>תאורת LED צבעונית לפי האירוע</li>
                <li>תאום עם תקליטן וצלם</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
              <h3 className="font-serif text-2xl font-bold mb-3">חבילת פרימיום</h3>
              <p className="text-zinc-600 leading-relaxed mb-4">
                הפקה מלאה של החוויה: בועות, LED, קונפטי, ועיצוב ויז'ואלי שמתאים לכל רגע מאורגן.
              </p>
              <ul className="space-y-2 text-zinc-600 text-sm">
                <li>תכנון לוח זמנים עם כל הספקים</li>
                <li>תיאום אפקטים ויזואליים</li>
                <li>קליפ היילייטס מתנה</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-8">במה בוחרים לקונספט שלכם</h2>
          <div className="space-y-8">
            <div className="rounded-3xl bg-white border border-zinc-200 p-8">
              <h3 className="font-serif text-2xl font-bold mb-3">בועות LED</h3>
              <p className="text-zinc-600 leading-relaxed mb-4">
                בועות סבון LED הן האפקט שהופך כל זווית לתמונה. הן מתאימות במיוחד לכניסות לחופה, לריקוד סלואו ולבר/בת מצווה.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                בניגוד לבועות רגילות, כאן יש תאורה פנימית שמשלבת צבעים עם המוזיקה ועם אפקט העשן, כך שכל צילום נראה כמו קמפיין וידאו.
              </p>
            </div>
            <div className="rounded-3xl bg-white border border-zinc-200 p-8">
              <h3 className="font-serif text-2xl font-bold mb-3">בועות עשן</h3>
              <p className="text-zinc-600 leading-relaxed mb-4">
                בועות סבון עשן מספקות עומק ותחושה מסתורית. הן שוקעות לאט, נראות מרחפות ומתאימות במיוחד לאולמות סגורים ולרגעי צילום שנקלטים היטב.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                גם כאן הדגש הוא על בטיחות: העשן קר, לא חם, והבועות נשארות עד שהן נעלמות מעצמן.
              </p>
            </div>
            <div className="rounded-3xl bg-white border border-zinc-200 p-8">
              <h3 className="font-serif text-2xl font-bold mb-3">רכישת ציוד לעסקים</h3>
              <p className="text-zinc-600 leading-relaxed mb-4">
                לא רק השכרה. ספקים, DJs ובעלי אולמות יכולים לרכוש מכונת בועות סבון מקצועית כולל הדרכה, חומר נוזלי ותמיכה טכנית.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                זה פתרון שמוסיף ערך לקטלוג השירותים שלכם ומאפשר להציע לקהל חוויה מוחשית ומלהיבה.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">שאלות נפוצות על בועות סבון לאירועים</h2>
          <div className="space-y-6">
            <article className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
              <h3 className="font-semibold text-xl mb-3">האם הבועות בטוחות לילדים?</h3>
              <p className="text-zinc-600 leading-relaxed">
                כן. הנוזל שלנו אינו רעיל, הוא היפואלרגני ומתאים למגע עדין. ילדים יכולים לרוץ בתוך הענן בלי חשש.
              </p>
            </article>
            <article className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
              <h3 className="font-semibold text-xl mb-3">האם הבועות מחליקות?</h3>
              <p className="text-zinc-600 leading-relaxed">
                לא. החומר מתייבש מהר מאוד, כך שהרצפה נשארת יבשה ולא מסוכנת. אנחנו מציבים חומרים נגד החלקה לפי הצורך.
              </p>
            </article>
            <article className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
              <h3 className="font-semibold text-xl mb-3">כמה זמן ממשיכה ההפעלה?</h3>
              <p className="text-zinc-600 leading-relaxed">
                ניתן להפעיל את המכונה בכמה מקטעים. כל מקטע יכול להיות עד מספר דקות, תלוי ברצון ובהקשר של שיר, כניסה או קבלת פנים.
              </p>
            </article>
            <article className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
              <h3 className="font-semibold text-xl mb-3">האם אפשר לשלב בועות עם אפקטים אחרים?</h3>
              <p className="text-zinc-600 leading-relaxed">
                בהחלט. אנחנו משלבים בועות עם קונפטי, עשן כבד, עמדות LED ותאורה כדי ליצור חוויה שלמה ורב-חושית.
              </p>
            </article>
            <article className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
              <h3 className="font-semibold text-xl mb-3">האם ניתן להתאים את צבע הבועה או הצבעים של התאורה?</h3>
              <p className="text-zinc-600 leading-relaxed">
                כן. התאורה סביב המכונה יכולה להיות מובנה צבעונית, כך שהבועות ייראו רומנטיות, דרמטיות או מודרניות בהתאם לרצון שלכם.
              </p>
            </article>
            <article className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
              <h3 className="font-semibold text-xl mb-3">מתי כדאי להזמין?</h3>
              <p className="text-zinc-600 leading-relaxed">
                מומלץ להזמין חודשיים מראש, במיוחד בעונות העמוסות של 2026. כך נבטיח את המפעיל, הציוד והזמינות לאירוע שלכם במודיעין.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-4">הפוך את האירוע לקסום ורגעי</h2>
          <p className="text-zinc-300 leading-relaxed mb-8">
            בועות סבון לאירועים הן הפתרון המושלם לכניסה דרמטית, לריקוד ראשון ולרגעים שכולם ידברו עליהם עוד שנים.
            נעזור לכם לבחור את האפקט המתאים ולבנות את הסיפור החזותי של הערב.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
              תיאום מיידי בוואטסאפ
            </Link>
            <Link href="/attractions" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
              חבילות נוספות באתר
            </Link>
          </div>
        </div>
      </section>

      <div className="flex justify-center py-6 border-t border-zinc-100">
        <ShareButton title="בועות סבון לאירועים. קסם שכולם נגעים בו." />
      </div>

      <RelatedPages
        title="אטרקציות נוספות"
        pages={otherAttractions.map((page) => ({ ...page, desc: page.desc }))}
      />
    </div>
  );
}
