import Link from "next/link";
import { Navigation as NavIcon, Instagram, Youtube, Facebook, Phone } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTokIcon";

const WAZE_URL      = "https://waze.com/ul?q=%D7%A2%D7%9E%D7%A7+%D7%90%D7%99%D7%99%D7%9C%D7%95%D7%9F+34+%D7%9E%D7%95%D7%93%D7%99%D7%A2%D7%99%D7%9F&navigate=yes";
const INSTAGRAM_URL = "https://www.instagram.com/yakir.cohen.official";
const TIKTOK_URL    = "https://www.tiktok.com/@yakir.cohen.offical";
const YOUTUBE_URL   = "https://www.youtube.com/user/kikosh";
const FACEBOOK_URL  = "https://www.facebook.com/dj.yakir.cohen";
const WHATSAPP_URL  = "https://wa.me/972587555456";

/* Native <ul>/<li> carry list semantics — no role="list/listitem" overrides needed */
const paymentMethods = [
  { label: "bit",       bg: "#FF6B00", color: "#fff"             },
  { label: "PayBox",    bg: "#0066CC", color: "#fff"             },
  { label: "PayPal",    bg: "#003087", color: "#fff"             },
  { label: "VISA",      bg: "#1A1F71", color: "#fff"             },
  { label: "MC",        bg: "#EB001B", color: "#fff"             },
  { label: "G Pay",     bg: "#f8f8f8", color: "#444", border: true },
  { label: "Apple Pay", bg: "#000",    color: "#fff"             },
];

const studioLinks = [
  { label: "הקלטת שירים",    href: "/studio/recording-song-modiin", title: "הקלטת שיר מקצועית במודיעין — מ-990 ₪" },
  { label: "ברכות מקצועיות", href: "/studio/blessings",             title: "הקלטת ברכות לחתונה ובר מצווה — מ-990 ₪" },
  { label: "שיר לילדים",     href: "/singerkids",                    title: "הקלטת שיר לילדים ואירועים במודיעין" },
  { label: "DJ לאירועים",    href: "/events/dj-events",              title: "DJ מקצועי לחתונות ובר מצוות — מ-7,500 ₪" },
  { label: "עמדת לד",        href: "/events/led-booth",              title: "עמדת לד ניידת להשכרה ולמכירה" },
  { label: "אטרקציות",       href: "/attractions",                   title: "עשן כבד, זיקוקים קרים וקונפטי לאירועים" },
];

const moreLinks = [
  { label: "הפקת פודקאסט",   href: "/podcast/podcast-production",       title: "הפקת פודקאסט מקצועית מרעיון לשידור — מ-1,500 ₪" },
  { label: "אולפן נייד",      href: "/podcast/mobile-studio",            title: "אולפן הקלטות ניד שמגיע אליכם" },
  { label: "שירותים לעסקים", href: "/business",                          title: "קריינות, הגברה והפקת תוכן לעסקים" },
  { label: "הבלוג",           href: "/blog",                              title: "מדריכים וטיפים על מוזיקה, DJ והפקה" },
  { label: "שוברים לאירועים", href: "/voucher",                           title: "שוברי מתנה להקלטות ולאירועים" },
  { label: "פורטל VIP",       href: "/vip",                               title: "אזור VIP — לקוחות יקיר כהן הפקות" },
];

export default function Footer() {
  return (
    /* <footer> has an implicit contentinfo landmark — no aria-label needed */
    <footer dir="rtl" className="bg-zinc-50 border-t border-zinc-200">

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              title="יקיר כהן הפקות — אולפן הקלטות מודיעין"
              className="font-serif font-black text-2xl text-zinc-900 hover:text-[#D42B2B] transition-colors"
            >
              יקיר כהן הפקות
            </Link>

            <p className="text-zinc-600 text-sm leading-relaxed">
              חיים את המוזיקה, נושמים יצירתיות ומביאים את כל הלב לכל פרויקט ואירוע.
            </p>

            <p className="text-zinc-500 text-sm leading-relaxed">
              שירות אישי, הבנה והגשמת חלומות.
              <br />
              זה מה שאנחנו עושים הכי טוב.
            </p>

            {/* Visible phone text — no aria-label override needed */}
            <a
              href={WHATSAPP_URL}
              title="שלחו הודעה בוואטסאפ ליקיר כהן הפקות"
              className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-[#D42B2B] transition-colors"
            >
              <Phone size={15} aria-hidden="true" />
              <span>058-7-555-456</span>
            </a>

            {/* Visible slogan — screen reader reads text directly, no override */}
            <p className="text-zinc-400 text-xs italic mt-auto">
              מי שלא מכיר – יקיר.
            </p>
          </div>

          {/* Col 2 — האולפן ואירועים */}
          <nav aria-label="האולפן ואירועים">
            {/* h3: footer columns are subordinate to h1/h2 of the page */}
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
              האולפן ואירועים
            </h3>
            <ul className="flex flex-col gap-2.5">
              {studioLinks.map(({ label, href, title }) => (
                <li key={href}>
                  <Link href={href} title={title}
                    className="text-sm text-zinc-600 hover:text-[#D42B2B] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3 — פודקאסט ועוד */}
          <nav aria-label="פודקאסט ושירותים נוספים">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
              פודקאסט ועוד
            </h3>
            <ul className="flex flex-col gap-2.5">
              {moreLinks.map(({ label, href, title }) => (
                <li key={href}>
                  <Link href={href} title={title}
                    className="text-sm text-zinc-600 hover:text-[#D42B2B] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4 — שעות, מיקום, תשלום */}
          <div className="flex flex-col gap-6">

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
                שעות פעילות
              </h3>
              <p className="text-sm text-zinc-600">ראשון עד חמישי — 10:00 עד 22:00</p>
              <p className="text-sm text-zinc-400 mt-1">שישי ושבת — האולפן סגור</p>
              <p className="text-xs text-zinc-400 mt-1">חוזרים ביום ראשון מ-9:00</p>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">זמינים בווטסאפ — עונים כשאפשר.</p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                מיקום
              </h3>
              <p className="text-sm text-zinc-600 mb-1">אולפן הקלטות מודיעין — קניון עזריאלי</p>
              <a
                href={WAZE_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="ניווט לאולפן הקלטות יקיר כהן מודיעין"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-500 hover:text-[#D42B2B] transition-colors"
              >
                <NavIcon size={13} aria-hidden="true" />
                <span>פתח ב-Waze</span>
              </a>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
                אמצעי תשלום
              </h3>
              {/* Semantic <ul>/<li> — no div+role="list" needed */}
              <ul className="flex flex-wrap gap-1.5">
                {paymentMethods.map(({ label, bg, color, border }) => (
                  <li key={label}>
                    <span
                      className="px-2 py-0.5 rounded text-[11px] font-bold"
                      style={{ backgroundColor: bg, color, border: border ? "1px solid #e4e4e7" : undefined }}
                    >
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-zinc-400 text-xs mt-2">חשבונית ירוקה — GROW</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-zinc-200 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">

          <p className="text-center md:text-right">
            אנחנו מכבדים כל אדם וכל קול.
            <span className="hidden sm:inline"> האתר מונגש ומותאם לכולם.</span>
          </p>

          {/* Icon-only social links — aria-label required (no visible text) */}
          <nav aria-label="רשתות חברתיות">
            <ul className="flex items-center gap-4">
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                   aria-label="אינסטגרם — יקיר כהן הפקות"
                   className="text-zinc-400 hover:text-zinc-700 transition-colors inline-flex p-1">
                  <Instagram size={16} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer"
                   aria-label="יוטיוב — יקיר כהן הפקות"
                   className="text-zinc-400 hover:text-zinc-700 transition-colors inline-flex p-1">
                  <Youtube size={16} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer"
                   aria-label="פייסבוק — יקיר כהן הפקות"
                   className="text-zinc-400 hover:text-zinc-700 transition-colors inline-flex p-1">
                  <Facebook size={16} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer"
                   aria-label="טיקטוק — יקיר כהן הפקות"
                   className="text-zinc-400 hover:text-zinc-700 transition-colors inline-flex p-1">
                  <TikTokIcon size={16} />
                </a>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-center">
            <span>&copy; 2025 כל הזכויות שמורות ליקיר כהן</span>
            <span className="text-zinc-300 hidden sm:inline" aria-hidden="true">|</span>
            <Link href="/terms"         className="hover:text-zinc-700 transition-colors">תנאי שימוש</Link>
            <Link href="/accessibility" className="hover:text-zinc-700 transition-colors">נגישות</Link>
            <Link href="/privacy"       className="hover:text-zinc-700 transition-colors">פרטיות</Link>
          </div>

        </div>

        <p className="text-zinc-300 text-xs text-center mt-3">
          אולפן הקלטות במודיעין · Modi&apos;in Recording Studio · יקיר כהן הפקות
        </p>
      </div>
    </footer>
  );
}
