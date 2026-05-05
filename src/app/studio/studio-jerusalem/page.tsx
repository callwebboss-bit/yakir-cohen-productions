import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  CheckCircle2,
  Clock,
  Gift,
  Heart,
  MapPin,
  Mic,
  Music,
  Navigation,
  Train,
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import ShareButton from "@/components/ShareButton";
import StudioVsHomeComparison from "@/components/StudioVsHomeComparison";
import YouTube from "@/components/ui/YouTube";
import { BLUR_DATA_URL } from "@/lib/blur";

const PAGE_SHELL = "w-full max-w-7xl mx-auto px-6 sm:px-8";

/** סרטוני יוטיוב בעמוד (כותרות אפשר לעדכן לפי השם ביוטיוב) */
const PAGE_VIDEOS = [
  {
    url: "https://www.youtube.com/watch?v=r8Xk2_m9FJ8",
    title: "סשן הקלטה באולפן יקיר כהן הפקות מודיעין",
    description: "חוויית הקלטה באולפן. מתאים גם למי שמגיע מירושלים והסביבה.",
  },
  {
    url: "https://www.youtube.com/watch?v=PCmsH0BLcXg",
    title: "סרטון 1 מהאולפן",
    description: "וידאו מהשטח באולפן יקיר כהן הפקות.",
  },
  {
    url: "https://www.youtube.com/watch?v=KeOlkJ7S_Yw",
    title: "סרטון 2 מהאולפן",
    description: "וידאו מהשטח באולפן יקיר כהן הפקות.",
  },
  {
    url: "https://www.youtube.com/watch?v=RLTzgsRk1vk",
    title: "סרטון 3 מהאולפן",
    description: "וידאו מהשטח באולפן יקיר כהן הפקות.",
  },
] as const;

const HERO_IMAGE =
  "/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%94%D7%A7%D7%9C%D7%98%D7%94-%D7%99%D7%A7%D7%99%D7%A8-%D7%9B%D7%94%D7%9F.webp";

const WAZE_URL =
  "https://waze.com/ul?q=%D7%A2%D7%9E%D7%A7+%D7%90%D7%99%D7%99%D7%9C%D7%95%D7%9F+34+%D7%9E%D7%95%D7%93%D7%99%D7%A2%D7%99%D7%9F&navigate=yes";

export const metadata: Metadata = {
  title: "אולפן הקלטות ליד ירושלים | מודיעין, כ־חצי שעה נסיעה | יקיר כהן הפקות",
  description:
    "מחפשים אולפן הקלטות ליד ירושלים? יקיר כהן הפקות במודיעין: בערך חצי שעה ממרכז ירושלים בכביש 1. הקלטת שירים, ברכות וקליפים. מתאים גם לקהל דתי. קניון עזריאלי.",
  alternates: { canonical: `${SITE_URL}/studio/studio-jerusalem` },
  keywords: [
    "אולפן הקלטות ירושלים",
    "אולפן הקלטות במודיעין",
    "הקלטת שיר ליד ירושלים",
    "ברכות הקלטה ירושלים",
    "יקיר כהן הפקות",
    "Modi'in recording studio near Jerusalem",
  ],
  openGraph: {
    title: "אולפן הקלטות לירושלמים במודיעין | יקיר כהן הפקות",
    description:
      "בערך חצי שעה מירושלים: הקלטת שירים, ברכות וקליפים באולפן מקצועי. נגיש מכביש 1.",
    url: `${SITE_URL}/studio/studio-jerusalem`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const studioSchema = {
  "@context": "https://schema.org",
  "@type": "MusicRecordingStudio",
  name: "יקיר כהן הפקות, אולפן הקלטות סמוך לירושלים (מודיעין)",
  description:
    "אולפן הקלטות במודיעין לקהל מירושלים והסביבה. נסיעה טיפוסית של כ־חצי שעה ממרכז ירושלים. הקלטת שירים, ברכות ופודקאסט.",
  telephone: "+972-58-7555456",
  address: {
    "@type": "PostalAddress",
    streetAddress: "עמק איילון 34/5",
    addressLocality: "מודיעין-מכבים-רעות",
    addressRegion: "מרכז",
    postalCode: "7170000",
    addressCountry: "IL",
  },
  geo: { "@type": "GeoCoordinates", latitude: "31.898", longitude: "35.010" },
  areaServed: ["ירושלים", "בית שמש", "מודיעין", "גוש עציון", "מרכז הארץ"],
};

function youtubeId(u: string) {
  try {
    const x = new URL(u);
    if (x.hostname.includes("youtu.be")) return x.pathname.slice(1);
    return x.searchParams.get("v") ?? "";
  } catch {
    return "";
  }
}

function videoSchemaEntry(video: (typeof PAGE_VIDEOS)[number]) {
  const id = youtubeId(video.url);
  if (!id) return null;
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    uploadDate: "2024-01-01",
    embedUrl: `https://www.youtube.com/embed/${id}`,
    url: video.url,
    publisher: { "@type": "Organization", name: "יקיר כהן הפקות", url: SITE_URL },
  };
}

const faqItems = [
  {
    q: "האם האולפן נמצא פיזית בירושלים?",
    a: "האולפן במודיעין, קניון עזריאלי. ממרכז ירושלים זה בדרך כלל כ־חצי שעה בכביש. זה חלק מהחוויה: להגיע, להפריד מהרעש של הבית, ולהקליט בשקט. רוצים בלי נסיעה? יש גם אולפן נייד עד הבית בירושלים.",
  },
  {
    q: "האם צריך ניסיון בשירה כדי להקליט?",
    a: "לא חובה. רוב האנשים לא זמרים מקצועיים. נראה מה מתאים בטייקים, נכוון את הקול, ונשמיע אתכם בדרך עד שמרגישים טוב.",
  },
  {
    q: "כמה עולה להקליט שיר?",
    a: "יש כמה חבילות. נפרט לכם לפני שמתחילים מה כלול ומה העלות, כדי שלא תיפתחו באמצע עם הפתעה. למספרים המלאים תגלו בעמוד המחירון ובעמוד הקלטת השיר.",
  },
  {
    q: "איך הגישה שלכם לילדים עם צרכים מיוחדים?",
    a: "אנחנו מאוד אוהבים את העבודה הזו. יושבים בקצב של הילד, מסבירים צעד אחר צעד, ובלי צורך למהר. המטרה היא שהוא ייצא עם משהו שהוא גאה בו וגם המשפחה מתרגשת.",
  },
  {
    q: "מה ההבדל בין פלייבק לקריוקי?",
    a: "לפעמים מתכוונים לאותו דבר בערך: ליווי בלי קול מוביל. קריוקי הרבה פעמים זה גם עם מילים על המסך. מה שנכון לכם נקבע בסשן.",
  },
  {
    q: "האם יש התאמה לקהל הדתי?",
    a: "כן. יקיר ירושלמי במקור ומכיר טוב את מה שחשוב בשיח ובטון. תגידו לנו מה האירוע ונתאים.",
  },
  {
    q: "כמה עולה פלייבק והאם צריך להשיג אותו?",
    a: "אם יש קובץ חוקי וזמין ברשת, לפעמים אין עלות על השימוש עצמו. אם צריך לבנות ליווי חדש מהכלים, המחיר תלוי במה שנכנס לפרויקט. תקבלו הצעה לפני שנוגעים בעבודה.",
  },
  {
    q: "איך מקבלים את הקובץ הסופי?",
    a: "וווטסאפ, מייל, או דיסק און קי מעוצב. מה שנוח לכם, בתיאום.",
  },
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const travelTimes = [
  { city: "ירושלים מרכז", time: "כ־30 דק׳", via: "כביש 1 או רכבת" },
  { city: "בית שמש", time: "כ־15 דק׳", via: "כביש 38" },
  { city: "גוש עציון", time: "משתנה", via: "תלוי במסלול. תשאלו בתיאום." },
  { city: "מודיעין", time: "במרכז העיר", via: "קניון עזריאלי" },
  { city: "תל אביב", time: "כ־30 דק׳", via: "כביש 1" },
  { city: "בני ברק", time: "כ־35 דק׳", via: "כביש 1" },
];

const whyJerusalemChoosesUs = [
  "בלי ניסיון? בסדר גמור. נקליט צעד אחר צעד עד שזה יושב.",
  "ציוד וסאונד ברמה של אולפן. לא צריך להבין בזה מראש.",
  "מרכז ירושלים למודיעין זה זמן קצר בכביש. חניה בקניון.",
  "בסוף תקבלו קבצים מוכנים. ווטסאפ, מייל, או דיסק. מה שנוח.",
  "רוצים גם קליפ או מצגת? נדבר על זה לפני ונשלב.",
  "קהל דתי? זה מוכר לנו. מכבדים, מתכוננים מראש לפי הצורך.",
];

const howItWorks = [
  { step: "1", title: "קובעים תאריך", desc: "כותבים או מתקשרים. בוחרים יום ושעה שנוחים לכם." },
  { step: "2", title: "מגיעים לאולפן", desc: "קצת הסבר לפני. לא צריך לחכות עם חולצה רותחת." },
  { step: "3", title: "מקליטים", desc: "טייקים, קול, והכוונה בזמן אמת. באווירה רגועה." },
  { step: "4", title: "מקבלים קבצים", desc: "עיבוד ומיקס. שולחים אליכם באופן שסגרנו." },
];

const popularServices = [
  {
    icon: Music,
    title: "הקלטת שירים וברכות",
    desc: "מתנה שמרגישים אותה הרבה אחרי האירוע. שיר או ברכה מהלב.",
    href: "/studio/blessings",
    cta: "לעמוד הברכות",
  },
  {
    icon: Heart,
    title: "שיר כניסה לחופה",
    desc: "שיר שאתם באמת מתחברים אליו לרגע הזה. נבנה את זה יחד לפני.",
    href: "/weddings/songs",
    cta: "שירי חתונה",
  },
  {
    icon: Mic,
    title: "הקלטת דרשה לבר מצווה",
    desc: "הכנה לדרשה, הקלטה נקייה ושילוב ברקע מוזיקלי עדין כשמתאים.",
    href: "/studio/blessings/bar-mitzvah",
    cta: "בר מצווה",
  },
  {
    icon: Gift,
    title: "שיר במתנה",
    desc: "לא בטוחים מה לקנות? שיר או קליפ במתנה הוא פתרון מקורי ואישי.",
    href: "/studio/recording-song-modiin",
    cta: "הקלטת שיר",
  },
];

const transportCards = [
  {
    icon: MapPin,
    t: "בכביש",
    d: "כביש 1 לכיוון מודיעין, יציאה לקניון עזריאלי. החניה לפי מה שמוצג בכניסה לחניון.",
  },
  {
    icon: Train,
    t: "ברכבת",
    d: "רכבת ישראל לתחנת מודיעין. משם כמה דקות ברגל לקניון.",
  },
  {
    icon: Clock,
    t: "בתחבורה ציבורית",
    d: "יש קווים מירושלים ומהמרכז. לפני יציאה כדאי לבדוק באפליקציה מה עובד היום.",
  },
] as const;

export default function StudioJerusalemPage() {
  return (
    <div className="flex flex-col bg-surface" dir="rtl">
      <StructuredData data={studioSchema} />
      {PAGE_VIDEOS.map((v) => {
        const s = videoSchemaEntry(v);
        return s ? <StructuredData key={v.url} data={s} /> : null;
      })}
      <StructuredData data={faqSchema} />

      <header className="relative min-h-[72vh] flex flex-col justify-end md:justify-center border-b border-zinc-900/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="אולפן ההקלטות של יקיר כהן במודיעין, שירות גם לקהל מירושלים והסביבה"
            fill
            priority
            className="object-cover object-center opacity-45 scale-[1.02]"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/85 to-zinc-950" />
        </div>

        <div
          className={`relative z-10 ${PAGE_SHELL} py-16 md:py-24 text-white flex flex-col gap-8 text-center md:text-start md:items-start items-center`}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            יקיר כהן הפקות · מודיעין · כ־30 דק׳ ממרכז ירושלים
          </p>

          <div className="max-w-3xl space-y-5">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.12] text-balance">
              אולפן הקלטות לירושלמים
              <span className="block mt-1 text-3xl md:text-4xl lg:text-5xl text-zinc-200">במודיעין</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-zinc-100 leading-relaxed">
              מחפשים אולפן הקלטות בירושלים?
              <br />
              <span className="text-brand-red font-semibold">יקיר כהן הפקות</span> נמצא במודיעין. ממרכז ירושלים זה בערך
              חצי שעה נסיעה.
              <br />
              שירים, ברכות וקליפים. גם כשצריך התאמה לקהל דתי ומשפחות.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              תגיעו רגועים.
              <br />
              נטפל במיקרופון, בצליל ובקבצים בסוף.
            </p>
          </div>

          <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start md:max-w-none">
            <Link
              href="/contact/whatsapp"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-red px-8 py-4 text-base font-bold text-white shadow-lg shadow-black/25 transition-colors hover:bg-red-700"
            >
              דברו איתנו בוווטסאפ
            </Link>
            <Link
              href="/studio/recording-song-modiin"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/35 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/12"
            >
              הקלטת שירים ומחירים
            </Link>
            <a
              href={WAZE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="פתיחת ניווט ב-Waze לאולפן יקיר כהן הפקות במודיעין"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/35 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/12"
            >
              <Navigation className="size-4 shrink-0" aria-hidden />
              פתח ב-Waze
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 md:justify-start">
            <ShareButton
              title="אולפן הקלטות ליד ירושלים, יקיר כהן הפקות"
              text="אולפן במודיעין, כ־חצי שעה מירושלים. הקלטות שירים וברכות."
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-4 py-2 text-sm font-bold !text-white hover:!text-white hover:bg-white/10"
            />
          </div>
        </div>
      </header>

      <>
        <section className="py-16 md:py-24 bg-white border-b border-zinc-100" aria-labelledby="intro-heading">
          <div className={`${PAGE_SHELL} max-w-3xl mx-auto`}>
            <h2 id="intro-heading" className="sr-only">
              מדוע אולפן במודיעין לירושלמים
            </h2>
            <p className="font-serif text-2xl md:text-3xl font-bold text-zinc-900 leading-snug mb-6">
              אני ירושלמי במקור.
              <br />
              אני מכיר את מה שחשוב למשפחות ולקהילה כאן.
            </p>
            <p className="text-zinc-600 leading-8 text-lg space-y-4">
              <span className="block">
                באולפן תוכלו להקליט שיר, ברכה או קליפ בלי להרגיש שאתם ב&quot;משרד&quot;.
              </span>
              <span className="block">נגיע יחד למה שמתאים לכם, ונצא עם משהו שאפשר לשמוח ממנו.</span>
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-zinc-50 border-b border-zinc-200" aria-labelledby="video-heading">
          <div className={PAGE_SHELL}>
            <div className="section-heading mb-10 md:mb-14">
              <h2 id="video-heading" className="font-serif text-3xl md:text-4xl font-bold text-zinc-900">
                תראו קצת מהאווירה באולפן
              </h2>
              <span className="section-heading__bar" aria-hidden />
              <p className="text-center text-zinc-500 max-w-2xl mx-auto mt-2 leading-8">
                קצת מהאולפן במודיעין.
                <br />
                מתאים במיוחד למי שנוסע מירושלים והסביבה.
              </p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-x-14 xl:gap-y-12 max-w-6xl xl:max-w-[76rem] 2xl:max-w-[82rem] mx-auto justify-items-center">
              {PAGE_VIDEOS.map(({ url, title }, i) => (
                <YouTube
                  key={url}
                  url={url}
                  title={title}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="my-0 w-full max-w-xl lg:max-w-lg xl:max-w-xl 2xl:max-w-[36rem] mx-auto"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white border-b border-zinc-100" aria-labelledby="comparison-heading">
          <div className={PAGE_SHELL}>
            <div className="section-heading mb-10 md:mb-12">
              <h2 id="comparison-heading" className="font-serif text-3xl md:text-4xl font-bold text-zinc-900">
                השוואה: הקלטה ביתית מול אולפן יקיר כהן
              </h2>
              <span className="section-heading__bar" aria-hidden />
            </div>
            <StudioVsHomeComparison />
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white" aria-labelledby="why-heading">
          <div className={PAGE_SHELL}>
            <div className="section-heading mb-12 md:mb-16">
              <h2 id="why-heading" className="font-serif text-3xl md:text-4xl font-bold text-zinc-900">
                למה ירושלמים בוחרים להקליט אצלנו?
              </h2>
              <span className="section-heading__bar" aria-hidden />
              <p className="text-center text-zinc-500 max-w-2xl mx-auto mt-2 leading-8">
                נסיעה קצרה מכביש 1.
                <br />
                מגיעים לשקט. יוצאים עם משהו מוכן.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
              {whyJerusalemChoosesUs.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-3xl border border-zinc-200 bg-zinc-50/80 p-6 shadow-sm text-start"
                >
                  <CheckCircle2 className="size-6 text-brand-red shrink-0 mt-0.5" aria-hidden />
                  <span className="text-zinc-700 leading-8">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-zinc-50 border-y border-zinc-200" aria-labelledby="how-heading">
          <div className={PAGE_SHELL}>
            <div className="section-heading mb-12 md:mb-16">
              <h2 id="how-heading" className="font-serif text-3xl md:text-4xl font-bold text-zinc-900">
                איך זה עובד?
              </h2>
              <span className="section-heading__bar" aria-hidden />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map(({ step, title, desc }) => (
                <div key={step} className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
                  <p className="font-serif text-4xl font-black text-brand-red/90 mb-3 tabular-nums">{step}</p>
                  <h3 className="font-bold text-lg text-zinc-900 mb-2">{title}</h3>
                  <p className="text-zinc-600 text-sm leading-8">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white" aria-labelledby="origin-heading">
          <div className={`${PAGE_SHELL} max-w-3xl mx-auto`}>
            <div className="section-heading section-heading--start mb-8 items-start">
              <h2 id="origin-heading" className="font-serif text-3xl md:text-4xl font-bold text-zinc-900">
                ירושלמי במקור.
                <span className="block mt-1 text-2xl md:text-3xl">מבין מה חשוב לכם.</span>
              </h2>
              <span className="section-heading__bar" aria-hidden />
            </div>
            <div className="space-y-6 text-zinc-600 leading-8 text-lg">
              <p>
                האולפן נולד מאהבה לעיר ולקהילה.
                <br />
                למי שגר בירושלים, מודיעין זה עוד לא עולם אחר. זה מקום שקט להקליט בלי לחץ.
              </p>
              <p>
                בר מצווה, חתונה, או סתם משהו שחלמתם עליו שנים.
                <br />
                נדבר בשפה פשוטה.
              </p>
              <p>
                רוצים בלי לנסוע? יש{" "}
                <Link href="/studio/mobile-studio" className="font-semibold text-brand-red hover:underline">
                  אולפן נייד עד הבית
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-zinc-900 text-white" aria-labelledby="biz-heading">
          <div className={PAGE_SHELL}>
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 max-w-5xl mx-auto">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-brand-red/20 text-brand-red ring-2 ring-brand-red/40">
                <Briefcase className="size-8" aria-hidden />
              </div>
              <div className="space-y-4 flex-1">
                <h2 id="biz-heading" className="font-serif text-2xl md:text-3xl font-bold">
                  לעסקים, מורים ותקליטנים
                </h2>
                <p className="text-zinc-300 leading-8">
                  מורים לנגינה, בתי ספר, תקליטנים, יוצרי תוכן.
                  <br />
                  אם תרצו להביא קבוצה לאולפן, נשב על זה ביחד.
                  <br />
                  כתבו בוווטסאפ ונזוז משם.
                </p>
                <Link
                  href="/contact/whatsapp"
                  className="inline-flex rounded-2xl bg-brand-red px-8 py-4 font-bold transition-colors hover:bg-red-700"
                >
                  תיאום שיתוף פעולה
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white border-b border-zinc-100" aria-labelledby="services-heading">
          <div className={PAGE_SHELL}>
            <div className="section-heading mb-12 md:mb-16">
              <h2 id="services-heading" className="font-serif text-3xl md:text-4xl font-bold text-zinc-900">
                מה מקליטים אצלנו?
              </h2>
              <span className="section-heading__bar" aria-hidden />
              <p className="text-center text-zinc-500 max-w-2xl mx-auto mt-2 leading-8">
                זה מה שאנשים מהסביבה הזמינו אצלנו הכי הרבה לאחרונה.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {popularServices.map(({ icon: Icon, title, desc, href, cta }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex flex-col rounded-3xl border border-zinc-200 bg-zinc-50/80 p-8 shadow-sm transition-all hover:border-zinc-400 hover:shadow-md text-start"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-zinc-900 text-white mb-4 ring-4 ring-brand-red/15">
                    <Icon size={22} aria-hidden />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-zinc-900 mb-2 group-hover:text-brand-red transition-colors">
                    {title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed flex-grow mb-4">{desc}</p>
                  <span className="text-sm font-bold text-brand-red">{cta} ←</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-zinc-50 border-y border-zinc-200" aria-labelledby="travel-heading">
          <div className={PAGE_SHELL}>
            <div className="section-heading mb-12 md:mb-16">
              <h2 id="travel-heading" className="font-serif text-3xl md:text-4xl font-bold text-zinc-900">
                כמה זמן לוקח להגיע?
              </h2>
              <span className="section-heading__bar" aria-hidden />
              <p className="text-center text-zinc-500 max-w-lg mx-auto leading-8 mt-2">
                קניון עזריאלי במודיעין. קל להגיע מכביש 1.
                <br />
                הזמנים משוערים ומשתנים לפי שעה ובעומס בדרכים.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {travelTimes.map(({ city, time, via }) => (
                <div
                  key={city}
                  className="flex flex-col rounded-3xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <p className="font-serif text-2xl md:text-3xl font-black text-brand-red mb-2 tabular-nums">{time}</p>
                  <p className="font-bold text-zinc-900">{city}</p>
                  <p className="text-zinc-500 text-sm mt-2 leading-relaxed">{via}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white" aria-labelledby="transport-heading">
          <div className={PAGE_SHELL}>
            <div className="section-heading mb-12 md:mb-16">
              <h2 id="transport-heading" className="font-serif text-3xl md:text-4xl font-bold text-zinc-900">
                איך מגיעים?
              </h2>
              <span className="section-heading__bar" aria-hidden />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {transportCards.map(({ icon: Icon, t, d }) => (
                <div
                  key={t}
                  className="flex flex-col items-center gap-4 rounded-3xl border border-zinc-200 bg-zinc-50/80 p-8 text-center shadow-sm"
                >
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-zinc-900 text-white ring-4 ring-brand-red/15">
                    <Icon size={22} aria-hidden />
                  </div>
                  <h3 className="font-bold text-lg text-zinc-900">{t}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-zinc-50 border-t border-zinc-200" aria-labelledby="faq-heading">
          <div className={`${PAGE_SHELL} max-w-3xl`}>
            <div className="section-heading mb-10 md:mb-12">
              <h2 id="faq-heading" className="font-serif text-3xl md:text-4xl font-bold text-zinc-900">
                שאלות נפוצות
                <span className="block text-xl md:text-2xl font-semibold text-zinc-600 mt-2">
                  אולפן ליד ירושלים
                </span>
              </h2>
              <span className="section-heading__bar" aria-hidden />
            </div>
            <div className="space-y-3">
              {faqItems.map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-2xl border border-zinc-200 bg-white p-1 shadow-sm open:shadow-md transition-shadow"
                >
                  <summary className="cursor-pointer list-none rounded-xl px-5 py-4 font-bold text-zinc-900 flex items-center justify-between gap-4 text-start [&::-webkit-details-marker]:hidden">
                    <span>{q}</span>
                    <span className="text-brand-red text-xl shrink-0 group-open:rotate-180 transition-transform">⌄</span>
                  </summary>
                  <div className="px-5 pb-4 pt-0 text-zinc-600 text-sm leading-8 border-t border-zinc-100 mt-1 pt-4 space-y-3">
                    <p>{a}</p>
                    {q.startsWith("האם האולפן נמצא") ? (
                      <p className="mt-3">
                        <Link href="/studio/mobile-studio" className="font-semibold text-brand-red hover:underline">
                          עמוד האולפן הנייד: פרטים והזמנה
                        </Link>
                      </p>
                    ) : null}
                  </div>
                </details>
              ))}
            </div>
            <p className="text-sm text-zinc-500 mt-8 text-center md:text-start">
              יש עוד שאלות? גם בעמוד{" "}
              <Link href="/about/faq" className="font-semibold text-brand-red hover:underline">
                שאלות נפוצות כלליות
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-zinc-900 text-white">
          <div className={`${PAGE_SHELL} text-center max-w-2xl mx-auto`}>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">מוכנים להקליט את השיר שלכם?</h2>
            <p className="text-zinc-400 mb-8 leading-8">
              תאמו כמה ימים לפני אם אפשר.
              <br />
              ככה נשאר מרווח רגוע לסשן שלכם.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <Link
                href="/contact/whatsapp"
                className="inline-flex rounded-2xl bg-brand-red px-8 py-4 font-bold transition-colors hover:bg-red-700"
              >
                058-7-555-456 · וואטסאפ
              </Link>
              <Link
                href="/studio/pricing"
                className="inline-flex rounded-2xl border border-white/30 px-8 py-4 font-bold transition-colors hover:bg-white/10"
              >
                מחירון
              </Link>
            </div>
            <p className="font-bold text-zinc-200 mb-3">ראו מה לקוחות מירושלים והסביבה אומרים</p>
            <Link
              href="/about/reviews"
              className="inline-flex rounded-2xl border border-white/35 px-8 py-3 font-bold hover:bg-white/10 transition-colors"
            >
              לעמוד הביקורות והמשובים
            </Link>
          </div>
        </section>

        <section className="py-10 bg-zinc-950 text-center border-t border-white/10">
          <p className={`${PAGE_SHELL} text-zinc-500 text-xs leading-relaxed`} dir="rtl">
            *תוכן זה נוצר בסיוע בינה מלאכותית
          </p>
        </section>

        <RelatedPages
          title="המשך גלישה באולפן"
          pages={[
            {
              label: "אולפן נייד עד הבית",
              href: "/studio/mobile-studio",
              desc: "ירושלים והסביבה: הקלטה בלי לנסוע אלינו",
            },
            {
              label: "הקלטת שירים מקצועית",
              href: "/studio/recording-song-modiin",
              desc: "מ־990 ₪. מה כלול ובמה לבחור",
            },
            {
              label: "ביקורות לקוחות",
              href: "/about/reviews",
              desc: "משובים מהשטח לפני שמחליטים",
            },
          ]}
        />
      </>
    </div>
  );
}
