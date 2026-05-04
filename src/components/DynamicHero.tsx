"use client";

import { usePathname } from "next/navigation";

const ROUTE_COPY: Record<string, { headline: string; sub: string }> = {
  "/podcast":    { headline: "בואו ניצור את הפודקאסט שכולם ידברו עליו", sub: "הפקה מלאה, ציוד מקצועי, תוצאה שנשמעת ברדיו" },
  "/studio":     { headline: "מוזיקה שנשמעת בדיוק כמו שדמיינתם אותה",   sub: "הקלטה, מיקס ומסירה — מ-990 ₪" },
  "/attractions":{ headline: "הרגעים שאנשים מצלמים ושולחים הלאה",        sub: "אטרקציות לאירועים שהופכות ערב רגיל להפקה" },
  "/events":     { headline: "אירועים שנראים כמו הפקה",                    sub: "DJ, לד, אטרקציות — הכל ממקום אחד" },
  "/weddings":   { headline: "חתונה שנשמרת בזיכרון לתמיד",                 sub: "מוזיקה מקצועית ואטרקציות שיהפכו כל רגע לקסום" },
  "/stuttering": { headline: "הקול שלכם, ללא מכשולים",                      sub: "קליניקה מקצועית לטיפול בגמגום במודיעין" },
  "/academy":    { headline: "תהפכו לDJ הבא שכולם רוצים",                   sub: "קורסים מקצועיים מהבסיס ועד ההופעה הראשונה" },
  "/blog":       { headline: "מאמרים שעוזרים לכם ליצור טוב יותר",          sub: "טיפים, השראה ומאחורי הקלעים" },
  "/business":   { headline: "פתרונות אודיו ותוכן לעסקים",                  sub: "קריינות, פודקאסט, הגברה — כמו שאתם זוכרים אותנו" },
};

function getGreeting(): { text: string; emoji: string } {
  const h = new Date().getHours();
  if (h < 12) return { text: "בוקר טוב",       emoji: "✨" };
  if (h < 18) return { text: "צהריים טובים",   emoji: "✨" };
  return        { text: "ערב טוב",              emoji: "✨" };
}

function getRouteCopy(pathname: string) {
  for (const [route, copy] of Object.entries(ROUTE_COPY)) {
    if (pathname === route || pathname.startsWith(route + "/")) return copy;
  }
  return null;
}

interface DynamicHeroProps {
  showGreeting?: boolean;
  className?: string;
}

/**
 * Route-aware, time-aware contextual banner.
 * Uses <aside> — supplementary content, not the primary page heading.
 * Returns null for unmatched routes, so it adds zero bytes to those pages.
 */
export default function DynamicHero({ showGreeting = true, className = "" }: DynamicHeroProps) {
  const pathname = usePathname() ?? "/";
  const copy     = getRouteCopy(pathname);
  if (!copy) return null;

  const greeting = getGreeting();

  return (
    /* <aside> = supplementary to main content; labelled by its own text */
    <aside
      aria-label={copy.headline}
      className={`border-b border-zinc-100 bg-zinc-50/60 py-3 px-6 text-center ${className}`}
    >
      {showGreeting && (
        <p className="text-xs font-black uppercase tracking-widest text-[#D42B2B] mb-0.5">
          {/* Emoji is decorative — hidden from AT; text conveys the greeting */}
          {greeting.text}
          <span aria-hidden="true"> {greeting.emoji}</span>
        </p>
      )}
      {/* p instead of h2 — this is not a page heading, it's contextual copy */}
      <p
        className="font-bold text-zinc-900 leading-snug"
        style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
      >
        {copy.headline}
      </p>
      <p className="text-xs text-zinc-500 mt-0.5">{copy.sub}</p>
    </aside>
  );
}
