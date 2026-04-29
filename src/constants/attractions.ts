export interface Attraction {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  seoDesc: string;
  metaKeywords: string[];
  category: AttractionCategory;
  icon: string;
  badge?: string;
  recommended?: boolean;
}

export type AttractionCategory =
  | 'atmosphere'
  | 'pyro'
  | 'tech'
  | 'production';

export interface AttractionCategory_Meta {
  id: AttractionCategory;
  label: string;
}

export const ATTRACTION_CATEGORIES: AttractionCategory_Meta[] = [
  { id: 'atmosphere', label: 'אפקטי אווירה' },
  { id: 'pyro', label: 'פירוטכניקה וגשם קונפטי' },
  { id: 'tech', label: 'טכנולוגיה ותוכן' },
  { id: 'production', label: 'הפקה משלימה' },
];

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'smoke',
    slug: 'heavy-smoke',
    name: 'עשן כבד לרחבה',
    shortDesc: 'ערפל מרהיב שיוצר תמונות שיישארו לכל החיים',
    seoDesc:
      'עשן כבד לרחבה הוא אחד האפקטים האהובים ביותר בחתונות ובר מצווה. הערפל הלבן הסמיך יוצר אווירה קסומה ורגע של שתיקה לפני כניסת הזוג. מומלץ לאירועים גדולים, לסלו-מוציה ולאפקט חופה.',
    metaKeywords: ['עשן כבד', 'ערפל לחתונה', 'אפקט חופה', 'עשן לרחבה'],
    category: 'atmosphere',
    icon: '🌫',
    recommended: true,
    badge: 'מומלץ',
  },
  {
    id: 'co2',
    slug: 'co2-cannons',
    name: 'תותחי עשן CO₂',
    shortDesc: 'עשן לחץ חזק — הרגע שכולם מצלמים',
    seoDesc:
      'תותחי CO₂ יורים עשן לחץ חזק לגובה של מטרים ויוצרים את הרגע הכי מצולם באירוע. מתאים לשבירת כוס, לכניסת זוג ולרגעי שיא שאתם רוצים שיישמרו לנצח.',
    metaKeywords: ['תותח CO2', 'תותח עשן', 'אפקט עשן לחץ', 'שבירת כוס'],
    category: 'atmosphere',
    icon: '💨',
  },
  {
    id: 'bubbles',
    slug: 'bubble-system',
    name: 'מערכת בועות עשן Cinematic',
    shortDesc: 'בועות ענק שיוצרות קסם ומרגשות כל גיל',
    seoDesc:
      'מערכת בועות עשן Cinematic מייצרת בועות ענק עם עשן בפנים. הן מתפוצצות ומשאירות ענן קטן של עשן. מושלם לאירועי ילדים, בר מצווה ולכל מי שרוצה רגע שלא נשכח.',
    metaKeywords: ['בועות עשן', 'בועות לאירועים', 'אפקט בועות', 'מערכת בועות'],
    category: 'atmosphere',
    icon: '🫧',
  },
  {
    id: 'sparks',
    slug: 'cold-fireworks',
    name: 'זיקוקים קרים בטוחים',
    shortDesc: 'ניצוצות קרים מרהיבים — לרגע כניסת הזוג',
    seoDesc:
      'זיקוקים קרים בטוחים מייצרים מפל של ניצוצות לבנים ומבריקים ללא חום. בטוחים לחלוטין בסביבה סגורה, מתאימים לכניסת הזוג לחופה או לרחבה ולכל רגע שיא שאתם רוצים לצלם.',
    metaKeywords: ['זיקוקים קרים', 'ניצוצות לחתונה', 'אפקט זיקוקים', 'Cold Spark'],
    category: 'pyro',
    icon: '✨',
  },
  {
    id: 'confetti',
    slug: 'confetti-rain',
    name: 'גשם של קונפטי יוקרתי',
    shortDesc: 'הרגע הכי מצולם — שכולם עוצרים לתמונה',
    seoDesc:
      'תותח קונפטי מפצץ אלפי פיסות נייר צבעוניות לאוויר ויוצר גשם של אושר. הרגע הזה הוא אחד הצילומים הכי ויראליים מאירועים. זמין בנייר לבן, צבעוני, וב-1 או 2 תותחים.',
    metaKeywords: ['תותח קונפטי', 'גשם קונפטי', 'קונפטי לחתונה', 'אפקט קונפטי'],
    category: 'pyro',
    icon: '🎊',
  },
  {
    id: 'backstage',
    slug: 'backstage-booth',
    name: 'תא הקלטה Backstage',
    shortDesc: 'האורחים מברכים — החוגג מקבל סרטון ערוך',
    seoDesc:
      'תא הקלטה Backstage הוא המתנה שאורחים זוכרים שנים. האורחים נכנסים, מברכים על המצלמה, ובסוף האירוע החוגג מקבל סרטון ערוך עם מוזיקה וסאונד מקצועי. הלהיט של העונה.',
    metaKeywords: ['תא הקלטה', 'אטרקציה הקלטה', 'ברכות וידאו', 'Backstage Booth'],
    category: 'tech',
    icon: '🎙',
    badge: 'הלהיט',
  },
  {
    id: 'podcast',
    slug: 'live-podcast',
    name: 'פודקאסט לייב מהרחבה',
    shortDesc: 'שיחות ורגעים מוקלטים בזמן אמת — תוכן לשיתוף',
    seoDesc:
      'הפודקאסט הלייב מביא אולפן הקלטות ישירות לאירוע. ראיונות עם האורחים, שיחות ורגעים מתועדים בסאונד מקצועי. תוכן שאפשר לשתף ולשמור לנצח.',
    metaKeywords: ['פודקאסט לאירועים', 'הקלטה לייב', 'אטרקציה דיגיטלית'],
    category: 'tech',
    icon: '🎧',
  },
  {
    id: 'led',
    slug: 'led-screen',
    name: 'עמדת LED — לוגו ואנימציות',
    shortDesc: 'הלוגו שלכם מוקרן על מסך LED לאורך כל הערב',
    seoDesc:
      'מסך LED גדול מציג את הלוגו, שמות הזוג, ספירה לאחור ואנימציות מותאמות אישית. יוצר תפאורה מרהיבה ומוסיף ממד ויזואלי לאירוע שלכם.',
    metaKeywords: ['מסך LED לאירוע', 'לוגו על מסך', 'אנימציה לאירוע', 'LED אירועים'],
    category: 'tech',
    icon: '📺',
  },
  {
    id: 'sound',
    slug: 'professional-sound',
    name: 'הגברה מקצועית מלאה',
    shortDesc: '2 RCF + סאב · עד 250 איש · התקנה כלולה',
    seoDesc:
      'מערכת הגברה מקצועית עם 2 רמקולי RCF ו-סאב-וופר מבטיחה סאונד מושלם עד 250 אורחים. ההתקנה, הכיוון והרס כלולים. מתאים לכניסות, לברכות ולפלייליסטים.',
    metaKeywords: ['הגברה לאירוע', 'מערכת סאונד', 'RCF לאירועים', 'הגברה מקצועית'],
    category: 'production',
    icon: '🔊',
  },
  {
    id: 'studio',
    slug: 'studio-recording',
    name: 'הקלטת שיר / קליפ באולפן',
    shortDesc: 'תוצר מקצועי שיישמע ברדיו — מתנה שלא נשכחת',
    seoDesc:
      'הקלטת שיר מקצועית באולפן יקיר כהן — מתנה שהחוגג ישמור לכל החיים. כולל הקלטה, עריכה, מיקס ומסירת קובץ דיגיטלי. ניתן להוסיף קליפ וידאו.',
    metaKeywords: ['הקלטת שיר לאירוע', 'מתנת אולפן', 'הקלטה מקצועית', 'קליפ מתנה'],
    category: 'production',
    icon: '🎵',
  },
];

// Pricing tiers (bundle logic)
export const BUNDLE_PRICES: Record<number, number> = {
  1: 1750,
  2: 3200,
  3: 4450,
};
export const BUNDLE_PRICE_4PLUS = 5500;
export const GIFT_THRESHOLD = 4; // free highlights clip from here

// Geographic surcharges
export const GEO_FEES = {
  center: { label: 'מרכז (ללא תוספת)', fee: 0 },
  north_south: { label: 'צפון / דרום (+800 ₪)', fee: 800 },
  eilat: { label: 'אילת / גולן (+1,800 ₪)', fee: 1800 },
} as const;
export type GeoKey = keyof typeof GEO_FEES;

/** Converts a Hebrew attraction name to a URL-safe slug */
export function toSlug(name: string): string {
  const map: Record<string, string> = {
    עשן: 'smoke',
    כבד: 'heavy',
    תותחי: 'cannons',
    זיקוקים: 'fireworks',
    קרים: 'cold',
    קונפטי: 'confetti',
    גשם: 'rain',
    הקלטה: 'recording',
    הגברה: 'sound',
    בועות: 'bubbles',
    פודקאסט: 'podcast',
    לייב: 'live',
    לוגו: 'logo',
    אנימציות: 'animations',
    שיר: 'song',
    קליפ: 'clip',
  };

  return name
    .toLowerCase()
    .split(/[\s_]+/)
    .map((word) => map[word] ?? word.replace(/[^\w]/g, ''))
    .filter(Boolean)
    .join('-');
}

/** Returns the bundle price for a given count of selected attractions */
export function getBundlePrice(count: number): number {
  if (count <= 0) return 0;
  if (count >= GIFT_THRESHOLD) return BUNDLE_PRICE_4PLUS;
  return BUNDLE_PRICES[count] ?? count * 1750;
}

/** Returns true if the count qualifies for the free highlights clip gift */
export function qualifiesForGift(count: number): boolean {
  return count >= GIFT_THRESHOLD;
}
