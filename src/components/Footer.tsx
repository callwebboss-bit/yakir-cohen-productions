import Link from "next/link";
import { Navigation as NavIcon, Instagram, Youtube, Facebook, Phone, MapPin } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTokIcon";
import PaymentMethodBadges from "@/components/PaymentMethodBadges";
import TrustBadgesFooter from "@/components/TrustBadgesFooter";
import WaMeTrackedLink from "@/components/WaMeTrackedLink";
import { SEO_FOOTER_LINKS } from "@/data/seo-footer-links";

const WAZE_URL      = "https://waze.com/ul?q=%D7%A2%D7%9E%D7%A7+%D7%90%D7%99%D7%99%D7%9C%D7%95%D7%9F+34+%D7%9E%D7%95%D7%93%D7%99%D7%A2%D7%99%D7%9F&navigate=yes";
const INSTAGRAM_URL = "https://www.instagram.com/yakir.cohen.official";
const TIKTOK_URL    = "https://www.tiktok.com/@yakir.cohen.offical";
const YOUTUBE_URL   = "https://www.youtube.com/user/kikosh";
const FACEBOOK_URL  = "https://www.facebook.com/dj.yakir.cohen";
const WHATSAPP_URL  = "https://wa.me/972587555456";

/* Native <ul>/<li> carry list semantics — no role="list/listitem" overrides needed */
const studioLinks = [
  { label: "הקלטת שירים",    href: "/studio/recording-song-modiin", title: "הקלטת שיר מקצועית במודיעין — מ-990 ₪" },
  { label: "ברכות מקצועיות", href: "/studio/blessings",             title: "הקלטת ברכות לחתונה ובר מצווה — מ-990 ₪" },
  { label: "אולפן נייד לבית", href: "/studio/mobile-studio",         title: "אולפן הקלטות נייד לברכות, שירים והקלטות בבית" },
  { label: "אולפן בירושלים", href: "/studio/studio-jerusalem",      title: "הקלטת שיר וברכה ללקוחות מירושלים" },
  { label: "אולפן ביתי",      href: "/academy/home-studio",          title: "בניית אולפן ביתי ללימוד והקלטה" },
  { label: "שירי חתונה",     href: "/weddings/songs",               title: "שיר כניסה לחופה ושירים מקוריים לחתונה" },
  { label: "שיר לילדים",     href: "/singerkids",                    title: "הקלטת שיר לילדים ואירועים במודיעין" },
  { label: "DJ לאירועים",    href: "/events/dj-events",              title: "DJ מקצועי לחתונות ובר מצוות — מ-7,500 ₪" },
  { label: "עמדת לד",        href: "/events/led-booth",              title: "עמדת לד ניידת להשכרה ולמכירה" },
  { label: "אטרקציות",       href: "/attractions",                   title: "עשן כבד, זיקוקים קרים וקונפטי לאירועים" },
  { label: "צילום אירועים",  href: "/photography",                   title: "צילום אירועים קטנים וחתונות" },
  { label: "צילום חתונות",   href: "/attractions/Wedding-photography", title: "צילום חתונות ואירועים קטנים" },
];

const moreLinks = [
  { label: "הפקת פודקאסט",   href: "/podcast/podcast-production",       title: "הפקת פודקאסט מקצועית מרעיון לשידור — מ-1,500 ₪" },
  { label: "אולפן נייד",      href: "/podcast/mobile-studio",            title: "אולפן הקלטות נייד שמגיע אליכם" },
  { label: "ציוד פודקאסט",    href: "/podcast/podcast-equipment",        title: "ציוד להקלטת פודקאסט ושידור" },
  { label: "חיפוש באתר",      href: "/search",                           title: "עמוד חיפוש פנימי למציאת שירותים ותוכן" },
  { label: "שירותים לעסקים", href: "/business",                          title: "קריינות, הגברה והפקת תוכן לעסקים" },
  { label: "ניהול סושיאל",   href: "/business/social-media-management",   title: "ניהול תוכן וסושיאל לעסקים" },
  { label: "StemSplit",       href: "/stemsplit",                         title: "פיצול ערוצים לשירים ומיקסים" },
  { label: "גמגום",           href: "/stuttering",                        title: "שיטת עבודה לדיבור וגמגום" },
  { label: "אודות",           href: "/about",                            title: "אודות יקיר כהן הפקות" },
  { label: "הבלוג",           href: "/blog",                              title: "מדריכים וטיפים על מוזיקה, DJ והפקה" },
  { label: "תיק עבודות",      href: "/portfolio",                         title: "תיק עבודות ודוגמאות מהאולפן" },
  { label: "שוברים לאירועים", href: "/voucher",                           title: "שוברי מתנה להקלטות ולאירועים" },
  { label: "פורטל VIP",       href: "/vip",                               title: "אזור VIP — לקוחות יקיר כהן הפקות" },
];

/** קישורים פנימיים קצרים — ניווט מהיר מעל הפס התחתון */
const footerQuickLinks = [
  { label: "צור קשר", href: "/contact", title: "יצירת קשר — טלפון, וואטסאפ וטופס" },
  { label: "ביקורות", href: "/about/reviews", title: "ביקורות לקוחות ומה אומרים עלינו" },
  { label: "שירותים אונליין", href: "/online", title: "עריכת קול, תיקונים וכלים דיגיטליים" },
  { label: "מפת אתר", href: "/site-map", title: "מפת אתר ורשימת עמודים" },
  { label: "תיק עבודות", href: "/portfolio", title: "תיק עבודות" },
  { label: "שוברים", href: "/voucher", title: "שוברי מתנה" },
  { label: "נגישות", href: "/accessibility", title: "הצהרת נגישות" },
  { label: "פרטיות", href: "/privacy", title: "מדיניות פרטיות" },
] as const;

export default function Footer() {
  return (
    /* <footer> has an implicit contentinfo landmark — no aria-label needed */
    <footer dir="rtl" className="bg-zinc-50 border-t border-zinc-200">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14">
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
              אולפן הקלטות, הפקות לאירועים ושירותים דיגיטליים — מקום אחד שמחבר בין קול, סאונד וחוויית קהל.
            </p>

            <p className="text-zinc-500 text-sm leading-relaxed">
              עובדים בשקט, מסבירים בצורה ברורה, ומסיימים עם קבצים מסודרים שאפשר לשחרר הלאה.
            </p>

            {/* Visible phone text — no aria-label override needed */}
            <WaMeTrackedLink
              section="footer"
              linkLabel="058-7-555-456"
              href={WHATSAPP_URL}
              title="שלחו הודעה בוואטסאפ ליקיר כהן הפקות"
              className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-[#D42B2B] transition-colors"
            >
              <Phone size={15} aria-hidden="true" />
              <span>058-7-555-456</span>
            </WaMeTrackedLink>

            <a
              href={WAZE_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="ניווט לאולפן: עמק איילון 34, מודיעין מכבים רעות"
              className="inline-flex items-start gap-2 text-sm text-zinc-600 hover:text-[#D42B2B] transition-colors max-w-xs text-start"
            >
              <MapPin size={16} className="shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                עמק איילון 34/5
                <br />
                מודיעין מכבים רעות · קניון עזריאלי
              </span>
            </a>

            <div className="mt-2">
              <TrustBadgesFooter />
            </div>

            {/* Visible slogan — screen reader reads text directly, no override */}
            <p className="text-zinc-400 text-xs italic mt-auto">
              מי שלא מכיר - יקיר.
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
              <PaymentMethodBadges />
              <p className="text-zinc-400 text-xs mt-2">חשבונית ירוקה — GROW</p>
            </div>
          </div>

        </div>

        <nav aria-label="קישורים מומלצים לחיפוש" className="mt-12 pt-10 border-t border-zinc-200">
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 text-center sm:text-start">
            ניווט SEO מהיר
          </h3>
          <ul className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 text-sm mb-10">
            {SEO_FOOTER_LINKS.map(({ label, href, title }) => (
              <li key={href}>
                <Link href={href} title={title} className="text-zinc-600 hover:text-[#D42B2B] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="קישורים פנימיים מהירים" className="mt-2 pt-10 border-t border-zinc-200">
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 text-center sm:text-start">
            קישורים מהירים
          </h3>
          <ul className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 text-sm">
            {footerQuickLinks.map(({ label, href, title }) => (
              <li key={href}>
                <Link href={href} title={title} className="text-zinc-600 hover:text-[#D42B2B] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-zinc-200 px-6 py-5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">

          <p className="text-center md:text-right">
            אנחנו מכבדים כל אדם וכל קול.
            <span className="hidden sm:inline"> האתר מונגש ומותאם לכולם.</span>
          </p>

          <nav aria-label="רשתות חברתיות">
            <ul className="flex flex-wrap items-center justify-center gap-2">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-bold text-zinc-600 shadow-sm hover:border-zinc-300 hover:text-zinc-900 transition-colors"
                >
                  <Instagram size={16} aria-hidden="true" />
                  <span>אינסטגרם</span>
                </a>
              </li>
              <li>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-bold text-zinc-600 shadow-sm hover:border-zinc-300 hover:text-zinc-900 transition-colors"
                >
                  <Youtube size={16} aria-hidden="true" />
                  <span>יוטיוב</span>
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-bold text-zinc-600 shadow-sm hover:border-zinc-300 hover:text-zinc-900 transition-colors"
                >
                  <Facebook size={16} aria-hidden="true" />
                  <span>פייסבוק</span>
                </a>
              </li>
              <li>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-bold text-zinc-600 shadow-sm hover:border-zinc-300 hover:text-zinc-900 transition-colors"
                >
                  <TikTokIcon size={16} />
                  <span>טיקטוק</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-center">
            <span>&copy; 2026 כל הזכויות שמורות ליקיר כהן</span>
            <span className="text-zinc-300 hidden sm:inline" aria-hidden="true">|</span>
            <Link href="/terms"         className="hover:text-zinc-700 transition-colors">תנאי שימוש</Link>
            <Link href="/accessibility" className="hover:text-zinc-700 transition-colors">נגישות</Link>
            <Link href="/privacy"       className="hover:text-zinc-700 transition-colors">פרטיות</Link>
            <Link href="/site-map"      className="hover:text-zinc-700 transition-colors">מפת אתר</Link>
          </div>

        </div>

        <p className="text-zinc-300 text-xs text-center mt-3">
          אולפן הקלטות במודיעין · Modi&apos;in Recording Studio · יקיר כהן הפקות
        </p>
      </div>
    </footer>
  );
}
