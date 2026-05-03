import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import YouTube from "@/components/ui/YouTube";

export const metadata: Metadata = {
  title: "מאחורי הקלעים של יצירה: המכניקה של הפקת שיר מקורי | יקיר כהן הפקות מודיעין",
  description:
    "איך הופך רעיון קטן לסינגל מוגמר. 5 השלבים של הפקת שיר מקורי באולפן הקלטות מודיעין — מכתיבת המילים ועד הפצה ברשתות.",
  alternates: { canonical: "https://www.yakircohen.com/blog/original-song-production-behind-the-scenes" },
  openGraph: {
    title: "המכניקה של הפקת שיר מקורי | יקיר כהן הפקות מודיעין",
    description: "5 השלבים שהופכים רעיון לשיר מוגמר — מכתיבה ועד הפצה. אולפן הקלטות מודיעין.",
    url: "https://www.yakircohen.com/blog/original-song-production-behind-the-scenes",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "article",
    images: [
      {
        url: "https://www.yakircohen.com/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp",
        width: 1200,
        height: 630,
        alt: "הפקת שיר מקורי — יקיר כהן הפקות מודיעין",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "המכניקה של הפקת שיר מקורי",
    description: "5 שלבים מהרעיון ועד הסינגל המוגמר. אולפן הקלטות מודיעין.",
    images: ["https://www.yakircohen.com/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "מאחורי הקלעים של יצירה: המכניקה של הפקת שיר מקורי",
  author: { "@type": "Person", "name": "יקיר כהן" },
  publisher: {
    "@type": "Organization",
    name: "יקיר כהן הפקות",
    url: "https://www.yakircohen.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Modi'in",
      addressCountry: "IL",
    },
  },
  datePublished: "2026-04-30",
  mainEntityOfPage: "https://www.yakircohen.com/blog/original-song-production-behind-the-scenes",
  keywords: "הפקת שיר מקורי, אולפן הקלטות מודיעין, הפקה מוזיקלית AI, הקלטת ילדים, שיר מקורי לילדים",
};

const steps = [
  {
    number: "01",
    title: "חקר המילים והסיפור",
    content: `הבסיס לכל הפקה הוא הסיפור.

אנחנו יושבים יחד כדי לפצח את הקונספט. מבינים מה המסר, איזה רגש אנחנו רוצים להציף, וכותבים את המילים שיהוו את השלד של היצירה כולה.`,
  },
  {
    number: "02",
    title: "מבנה, חריזה וזרימה",
    content: `מילים יפות זה נהדר, אבל שיר דורש מכניקה של קצב.

בשלב הזה אנחנו לוקחים את הטקסט הגולמי ויוצקים אותו לתבניות של בתים ופזמון. מסדרים את החריזה ומוודאים שהטקסט זורם בטבעיות על הלשון ומתיישב נכון על התדר.`,
  },
  {
    number: "03",
    title: "מציאת הלחן",
    content: `כאן השלד מקבל חיים.

אנחנו מתאימים מלודיה שמשרתת את הטקסט ומעצימה אותו. כזו שתגרום למאזין להרגיש בדיוק את מה שהתכוונו אליו כשישבנו לכתוב את המילים.`,
  },
  {
    number: "04",
    title: "פיצוח ווקאלי והכנה להקלטה",
    content: `שיר מקצועי הוא שיר שמרגיש טבעי לבצע אותו.

אנחנו מנתחים את היכולות הווקאליות ומתאימים את הסולם ואת המבנה למכניקת הקול הייחודית של המבצע. התהליך כולל עבודת הכנה באולפן, פיתוח קול ולימודי ריתמיקה שנועדו לדייק את הביצוע עד למילימטר.

השיר נבנה סביבכם, לא אתם סביבו.`,
  },
  {
    number: "05",
    title: "מסלול הפקת AI מהיר",
    content: `זה השלב שבו הטכנולוגיה פוגשת את חזון האמן.

פיתחנו מסלול הפקה מהיר שמבוסס על מודלי AI מתקדמים שמתרגמים רעיונות לסאונד ברמת אולפן.

נניח שאתם שומעים בראש תפקיד של תופים אלקטרוניים או סולו גיטרה. אתם ניגשים למיקרופון, מייצרים את הצליל עם הקול שלכם, ומהנדסי הסאונד שלנו מתרגמים את הדגימה האנושית לכל כלי נגינה שתרצו. הכל קורה בזמן אמת, בשליטה מלאה שלכם.`,
  },
];

const packages = [
  {
    name: "ניצן",
    price: "2,400",
    desc: "שיר מקורי ראשון. מילים, לחן, הקלטה ומיקס.",
  },
  {
    name: "שיר",
    price: "3,600",
    desc: "הפקה מלאה עם עיבוד AI, וידאו אחד לרשתות.",
  },
  {
    name: "להיט",
    price: "5,200",
    desc: "ליווי אישי מלא, תוכן לרשתות וקמפיין הפצה ראשוני.",
  },
];

export default function OriginalSongProductionPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-rose-50 text-rose-700 text-xs font-bold px-3 py-1 rounded-full">הפקה מוזיקלית</span>
            <span className="text-zinc-400 text-xs">7 דקות קריאה</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-900"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            מאחורי הקלעים של יצירה
            <br />
            <span className="text-[#D42B2B]">המכניקה של הפקת שיר מקורי</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto">
            זה מתחיל בדרך כלל מרעיון קטן. אולי משפט שיושב לכם בראש, אולי תדר שזמזמתם בטעות.
            הפער בין הרעיון הזה לבין סינגל מוגמר יכול להיראות מורכב. אז הנה מה שקורה בפועל.
          </p>
        </div>
      </header>

      <article className="py-16 px-6 max-w-3xl mx-auto w-full">

        {/* 5 Steps */}
        {steps.map(({ number, title, content }) => (
          <section key={number} className="mb-14">
            <div className="flex items-start gap-4 mb-4">
              <span
                className="text-5xl font-black text-zinc-100 leading-none select-none"
                aria-hidden="true"
                style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
              >
                {number}
              </span>
              <h2 className="font-serif text-2xl font-bold text-zinc-900 mt-2">{title}</h2>
            </div>
            {content.split("\n\n").map((p, i) => (
              <p key={i} className="text-zinc-600 leading-relaxed mb-4 text-right">
                {p}
              </p>
            ))}
          </section>
        ))}

        {/* YouTube — cover song with AI production */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl font-bold mb-3 text-zinc-900">
            ככה זה נשמע בפועל
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-2 text-right">
            שיר קאבר עם עיבוד AI מלא. הטקסט הקיים, הלחן המוכר, ועיבוד שנבנה מאפס בתוך האולפן.
          </p>
          <p className="text-zinc-500 text-sm text-right mb-6">
            כל כלי נגינה בסאונד הזה עבר דרך המיקרופון, ממש כמו שתיארנו בשלב 5.
          </p>
          <YouTube
            url="https://www.youtube.com/watch?v=r8Xk2_m9FJ8"
            title="שיר קאבר עם הפקת AI — יקיר כהן הפקות מודיעין"
          />
        </section>

        {/* Packages */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl font-bold mb-2 text-zinc-900">
            מעטפת מלאה, מתחילים ועד מקצוענים
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-8 text-right">
            יצרנו שלוש רמות של הפקה מקורית מבוססת AI, כדי שכל אחד ימצא את המסלול המדויק עבורו.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {packages.map(({ name, price, desc }) => (
              <div
                key={name}
                className="p-6 bg-zinc-50 border border-zinc-200 rounded-xl flex flex-col gap-3"
              >
                <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">{name}</span>
                <span
                  className="text-3xl font-black text-zinc-900"
                  style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
                >
                  {price} ₪
                </span>
                <p className="text-zinc-500 text-sm leading-relaxed text-right">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed mt-6 text-right">
            הביטחון שלנו בתוצר הוא מוחלט. עבור הפקות נבחרות במסלולי ה-AI, בנינו מודל שלפיו יצירה שמגיעה ל-5,000 האזנות מזכה את האמן במענק חזרה של 2,500 ₪ ישירות מהאולפן.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-4 p-8 bg-zinc-900 text-white rounded-2xl text-center">
          <h2 className="font-serif text-xl font-bold mb-3">
            הרעיון כבר אצלכם בראש
          </h2>
          <p className="text-zinc-400 text-sm mb-5">
            אנחנו כאן רק כדי לבנות לו את הבמה. אולפן הקלטות מודיעין, Modi&apos;in.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact/whatsapp"
              className="bg-[#D42B2B] text-white px-6 py-3 rounded font-bold text-sm hover:bg-red-700 transition-colors"
            >
              בואו נדבר
            </Link>
            <Link
              href="/studio/recording-song-modiin"
              className="border border-white/30 text-white px-6 py-3 rounded font-bold text-sm hover:bg-white/10 transition-colors"
            >
              פרטים על האולפן
            </Link>
          </div>
        </div>
        <p className="text-zinc-400 text-xs text-center mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </article>

      <RelatedPages
        title="המשיכו לקרוא"
        pages={[
          { label: "הקלטת שיר לילדים", href: "/singerkids", desc: "בחרו חבילה ותקבעו סשן ישירות עם יקיר" },
          { label: "אולפן הקלטות מודיעין", href: "/studio/recording-song-modiin", desc: "הסטודיו שלנו — מ-990 ₪" },
          { label: "איך מקליטים באולפן אמיתי", href: "/blog/how-records-in-real-studio-ins-israel", desc: "מדריך מלא לסשן הקלטה" },
        ]}
      />
    </div>
  );
}
