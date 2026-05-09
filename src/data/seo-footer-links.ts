/** קישורי זנב SEO פנימיים — Additive only; כל href חייב להיות עמוד קיים באתר */

export type SeoFooterLink = {
  label: string;
  href: string;
  title?: string;
};

export const SEO_FOOTER_LINKS: SeoFooterLink[] = [
  {
    label: "אולפן הקלטות במרכז",
    href: "/studio/recording-song-modiin",
    title: "הקלטת שירים במודיעין ובמרכז",
  },
  {
    label: "תקליטן לחתונה בירושלים",
    href: "/dj-events/cities/jerusalem",
    title: "DJ לאירועים בירושלים והסביבה",
  },
  {
    label: "קורס דיג'יי במודיעין",
    href: "/academy",
    title: "אקדמיה וקורסי DJ",
  },
  {
    label: "הקלטת ברכת כלה",
    href: "/studio/blessings/bride-groom-blessing",
    title: "ברכות חתן כלה מוקלטות",
  },
  {
    label: "אולפן הקלטות בירושלים",
    href: "/studio/studio-jerusalem",
    title: "הקלטות לקהל מירושלים והסביבה",
  },
  {
    label: "תקליטן דתי וקהל מעורב",
    href: "/events/dj-events",
    title: "DJ לאירועים וחתונות",
  },
  {
    label: "עמדת לד להשכרה",
    href: "/events/led-booth",
    title: "עמדת DJ LED לאירועים",
  },
  {
    label: "אטרקציות לאירועים",
    href: "/attractions",
    title: "זיקוקים, עשן, קונפטי ועוד",
  },
  {
    label: "הפקת פודקאסט לעסקים",
    href: "/podcast/podcast-production",
    title: "הפקת פודקאסט מקצה לקצה",
  },
  {
    label: "קריינות מקצועית",
    href: "/business/professional-voiceover",
    title: "קריינות טלפון, וידאו ומותג",
  },
];
