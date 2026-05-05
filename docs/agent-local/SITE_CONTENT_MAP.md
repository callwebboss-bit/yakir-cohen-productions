# מפת תוכן ושירותים — יקיר כהן הפקות

מסמך פנימי לארגון היררכיית המידע (עומד בפרוטוקול SEO/UX). מקור URL מומלץ: `src/app/sitemap.ts` + ניווט ב־`Navigation.tsx`.

---

## 1. שורש

| נתיב | תפקיד |
|------|--------|
| `/` | דף בית — כניסות לשירותים, מחירון לדוגמה, קישורים פנימיים |

---

## 2. אולפן והקלטה (`/studio`)

| נתיב | תיאור קצר |
|------|------------|
| `/studio` | דף על — אולפן, סאונד, שירותים |
| `/studio/recording-song-modiin` | הקלטת שירים (מודיעין) |
| `/studio/recording-song-modiin/original-song` | שיר מקורי |
| `/studio/recording-song-modiin/blessing-writing` | כתיבת ברכה |
| `/studio/recording-song-modiin/songwriting-service` | שירות כתיבה |
| `/studio/studio-jerusalem` | סניף/שירות ירושלים |
| `/studio/pricing` | מחירון אולפן |
| `/studio/blessings` | ברכות — על |
| `/studio/blessings/*` | בר מצווה, חתן כלה, כניסה, דרשה, קליפ |
| `/studio/mobile-studio` | אולפן נייד |
| `/studio/mobile-studio/home-phone-blessings` | ברכות טלפון בבית |

---

## 3. פודקאסט (`/podcast`)

| נתיב | תיאור קצר |
|------|------------|
| `/podcast` | דף על |
| `/podcast/podcast-production` | הפקה מלאה |
| `/podcast/podcast-studio` | אולפן פודקאסט |
| `/podcast/mobile-studio` | אולפן נייד |
| `/podcast/podcast-equipment` | ציוד |

---

## 4. שירותים אונליין (`/online`)

| נתיב | תיאור קצר |
|------|------------|
| `/online` | דף על — עריכת קול/תמונה מרחוק |
| `/online/vocal-fix` | שיפור קול — על |
| `/online/vocal-fix/stem-split` | פיצול ערוצים |
| `/online/vocal-fix/audio-repair` | שחזור אודיו |
| `/online/vocal-fix/mixing` | מיקס |
| `/online/vocal-fix/pitch-correction` | תיקון זיופים |
| `/online/vocal-fix/volume-fix` | תיקון עוצמה |
| `/online/vocal-fix/photo-enhance` | שיפור תמונה |
| `/online/vocal-fix/ניקוי-רעשים` | ניקוי רעשים |
| `/online/online-ai-pricing` | מחירון אונליין |

**כלי נפרד:** `/stemsplit` — ממשק StemSplit.

---

## 5. אירועים, DJ, אטרקציות

| נתיב | תיאור קצר |
|------|------------|
| `/events/dj-events` | DJ לאירועים |
| `/events/stage-led-dj` | במה + לד + DJ |
| `/events/led-booth` | עמדת לד |
| `/events/equipment` | ציוד |
| `/attractions` | אטרקציות — על + מחשבון |
| `/attractions/*` | בועות, זיקוקים, עשן, קונפטי, צילום חתונות וכו' |
| `/dj-events/cities` | DJ לפי עיר |
| `/dj-events/cities/[city]` | דפי עיר |
| `/photography` | צילום אירועים |

---

## 6. אקדמיה ולימודים

| נתיב | תיאור קצר |
|------|------------|
| `/academy` | האקדמיה — על |
| `/academy/home-studio` | אולפן ביתי |
| `/courses` | קורסים (אם קיים כנתיב נפרד) |

---

## 7. עסקים

| נתיב | תיאור קצר |
|------|------------|
| `/business` | שירותים לעסקים |
| `/business/professional-voiceover` | קריינות |
| `/business/professional-voiceover/corporate-voiceover` | קורפורייט |
| `/business/professional-voiceover/phone-voiceover` | טלפון/IVR |
| `/business/social-media-management` | ניהול רשתות |

---

## 8. קול, בריאות ומיוחדים

| נתיב | תיאור קצר |
|------|------------|
| `/clinic` | קליניקה לקול |
| `/stuttering` | גמגום — שיטה |
| `/singerkids` | שיר לילדים |
| `/weddings/songs` | שירי חתונה |

---

## 9. בלוג (`/blog`)

מאמרים לפי נושא: מוזיקה, אולפן, חתונות, אטרקציות, הוצאה לאור וכו' — רשימה מלאה ב־`sitemap.ts`.

---

## 10. אודות, משפטי, קשר

| נתיב | תפקיד |
|------|--------|
| `/about` | אודות |
| `/about/faq` | שאלות נפוצות |
| `/about/reviews` | ביקורות |
| `/contact` | יצירת קשר |
| `/portfolio` | תיק עבודות |
| `/vip` | פורטל VIP |
| `/voucher` | שוברים |
| `/search` | חיפוש פנימי |
| `/site-map` | מפת אתר למשתמש |
| `/terms` | תנאי שימוש |
| `/privacy` | פרטיות (אם קיים) |
| `/accessibility` | נגישות |

---

## 11. כללי תחזוקה לסוכן

1. לפני הוספת דף: עדכן `sitemap.ts` + קישור מדף על או מפוטר.  
2. כותרת (title) + תיאור (description) ייחודיים לכל דף ניתן לאינדוקס.  
3. H1 יחיד; כותרות משנה בלי דילוג רמות.  
4. לא לשבץ `aggregateRating` ב-JSON-LD בלי מקור מאומת (למשל סנכרון רשמי מבעל העסק בגוגל).

---

*עודכן יחד עם שיפור דף הבית והפרוטוקול הפנימי.*
