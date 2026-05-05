import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import YouTube from "@/components/ui/YouTube";

export const metadata: Metadata = {
  title: "5 מיליון צפיות: הסרטון שכבש את הרשת | יקיר כהן הפקות",
  description:
    "הסרטון הכי ויראלי שלנו — חצה 5 מיליון צפיות בכל הפלטפורמות. מה גרם לו לפרוץ, ומה AI עשה עם ההפצה שלו.",
  alternates: { canonical: `${SITE_URL}/blog/viral-5m-views` },
  openGraph: {
    title: "5 מיליון צפיות: הסרטון שכבש את הרשת",
    description: "הסרטון הכי ויראלי שלנו — 5M צפיות. מה גרם לו לפרוץ.",
    url: `${SITE_URL}/blog/viral-5m-views`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "article",
    images: [
      {
        url: "https://img.youtube.com/vi/1llizRSIx5s/maxresdefault.jpg",
        width: 1200,
        height: 630,
        alt: "הסרטון הויראלי — יקיר כהן הפקות",
      },
    ],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "5 מיליון צפיות: הסרטון שכבש את הרשת",
  author: { "@type": "Person", name: "יקיר כהן" },
  publisher: { "@type": "Organization", name: "יקיר כהן הפקות", url: `${SITE_URL}` },
  datePublished: "2026-05-01",
  mainEntityOfPage: `${SITE_URL}/blog/viral-5m-views`,
};

const socialLinks = [
  { platform: "TikTok",    url: "https://www.tiktok.com/@yakir.cohen.offical",   color: "bg-black",                                     label: "עקבו ב-TikTok"    },
  { platform: "Instagram", url: "https://www.instagram.com/yakir.cohen.official", color: "bg-gradient-to-br from-purple-500 to-pink-500", label: "עקבו ב-Instagram" },
  { platform: "YouTube",   url: "https://www.youtube.com/user/kikosh",             color: "bg-red-600",                                   label: "עקבו ב-YouTube"   },
  { platform: "Facebook",  url: "https://www.facebook.com/dj.yakir.cohen",        color: "bg-blue-600",                                  label: "עקבו ב-Facebook"  },
];

const sections = [
  {
    title: "מה קרה",
    content: `לא תמיד אפשר לדעת מראש מה יפרוץ. הסרטון הזה פורסם כמו עוד תוכן — בלי קמפיין, בלי תשלום לפרומו. הוא רץ לבד.

5 מיליון צפיות בכל הפלטפורמות. יוטיוב, טיקטוק, אינסטגרם, פייסבוק. אנשים שיתפו, העירו, שלחו לחברים.`,
  },
  {
    title: "למה תוכן מסוים פורץ",
    content: `אלגוריתמי ההמלצה של 2025 מבוססים על מדד אחד בעיקר: כמה זמן אנשים ממשיכים לצפות.

זה לא לייקים. זה לא שיתופים. זה retention. תוכן שגורם לאנשים להישאר — נדחף.

AI מנתח עשרות אלפי שיחים ביום כדי להבין מה מחזיק אנשים. אנחנו לא יכולים להתחרות בו ישירות, אבל אנחנו יכולים לבנות תוכן שמרגיש אנושי — ואלגוריתמים מכירים בזה.`,
  },
  {
    title: "מה זה אומר לאמנים ולעסקים",
    content: `אם יש לכם תוכן שנוגע באנשים — שיר, הופעה, רגע אמיתי — הוא שווה יותר מכל קמפיין ממומן.

הסרטון הזה הביא פניות חדשות, קהל חדש, ואנשים שמצאו אותנו בלי לחפש אותנו. זה מה שתוכן ויראלי עושה.

העקרון: אמיתי, קצר, ואנושי.`,
  },
];

export default function Viral5mViewsPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-900 text-white border-b border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-[#D42B2B] text-white text-xs font-bold px-3 py-1 rounded-full">ויראלי</span>
            <span className="text-zinc-400 text-xs">4 דקות קריאה</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            5 מיליון צפיות
            <br />
            <span className="text-[#D42B2B]">הסרטון שכבש את הרשת</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
            חצה 5 מיליון צפיות בכל הפלטפורמות. בלי קמפיין, בלי תשלום.
            מה גרם לו לפרוץ — ומה AI עשה עם ההפצה שלו.
          </p>
        </div>
      </header>

      <article className="py-16 px-6 max-w-3xl mx-auto w-full">

        {/* The viral video */}
        <section className="mb-12">
          <YouTube
            url="https://www.youtube.com/watch?v=1llizRSIx5s"
            title="הסרטון הויראלי — יקיר כהן הפקות | 5M צפיות"
          />
          <p className="text-zinc-400 text-xs text-center mt-3">
            5,000,000 צפיות ומעלה — יוטיוב, טיקטוק, אינסטגרם, פייסבוק
          </p>
        </section>

        {sections.map(({ title, content }) => (
          <section key={title} className="mb-12">
            <h2 className="font-serif text-2xl font-bold mb-4 text-zinc-900">{title}</h2>
            {content.split("\n\n").map((p, i) => (
              <p key={i} className="text-zinc-600 leading-relaxed mb-4 text-right">{p}</p>
            ))}
          </section>
        ))}

        {/* Social follow */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold mb-3 text-zinc-900">
            עקבו אחרינו לתוכן חדש
          </h2>
          <p className="text-zinc-500 text-sm mb-6 text-right leading-relaxed">
            אנחנו מפרסמים תוכן מאחורי הקלעים, הקלטות, ריצות חיות ואירועים.
            בחרו את הפלטפורמה שאתם הכי פעילים בה.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map(({ platform, url, color, label }) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} text-white py-3 px-4 rounded-xl font-bold text-sm text-center hover:opacity-90 transition-opacity`}
                aria-label={label}
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        <div className="mt-4 p-8 bg-zinc-50 border border-zinc-200 rounded-2xl text-center">
          <h2 className="font-serif text-xl font-bold mb-3 text-zinc-900">
            רוצים שנצלם גם אתכם
          </h2>
          <p className="text-zinc-500 text-sm mb-5">
            תוכן לרשתות, הקלטות, שירים — שלחו הודעה ונדבר.
          </p>
          <Link href="/contact/whatsapp" className="inline-block bg-[#D42B2B] text-white px-6 py-3 rounded font-bold text-sm hover:bg-red-700 transition-colors">
            דברו איתנו
          </Link>
        </div>
        <p className="text-zinc-400 text-xs text-center mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </article>

      <RelatedPages
        title="עוד תוכן שאוהבים"
        pages={[
          { label: "הקלטת שירים", href: "/studio/recording-song-modiin", desc: "מ-990 ₪ כולל הכל" },
          { label: "DJ לאירועים", href: "/events/dj-events", desc: "חתונות ובר מצוות" },
          { label: "הבלוג שלנו", href: "/blog", desc: "כל המאמרים" },
        ]}
      />
    </div>
  );
}
