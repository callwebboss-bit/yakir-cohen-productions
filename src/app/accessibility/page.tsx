import React from "react";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import StudioRecordsSVG from "@/components/StudioRecordsSVG";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: "הצהרת נגישות של יקיר כהן הפקות - WCAG 2.1 AA, תמיכה במקלדת, נגישות פיזית במודיעין וירושלים.",
  alternates: {
    canonical: "https://www.yakircohen.com/accessibility",
  },
};

const accessibilitySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "הצהרת נגישות - יקיר כהן הפקות",
  description: "עקרונות הנגישות באתר ובמתקנים הפיזיים של יקיר כהן הפקות.",
  lastModified: "2026-04-29",
};

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col py-24 px-6 max-w-5xl mx-auto" dir="rtl">
      <StructuredData data={accessibilitySchema} />

      {/* Dynamic Glassmorphism Hero */}
      <div className="relative mb-16 rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <StudioRecordsSVG />
        </div>
        <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-md p-12 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4 italic text-white">הצהרת נגישות</h1>
          <p className="text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
            אנחנו מחויבים להנגיש את השירותים והתוכן לכל אדם, בכל מקום.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h1 className="font-serif text-5xl font-bold mb-3">הצהרת נגישות</h1>
        <p className="text-zinc-500 text-sm">
          עמוד זה מסביר אילו צעדים נקטנו כדי להנגיש את השירותים, האולפנים והתוכן באתר.
        </p>
      </div>

      <section className="mb-12 text-zinc-700 space-y-4">
        <p>
          יקיר כהן הפקות שמחים להנגיש את התוכן והשירותים באתר ובשירותי התקשורת שלנו. מטרת העמוד הזה היא להסביר אילו חלקים נגישים כיום, אילו שיפורים עדיין בתהליך, ואיך ניתן לקבל סיוע או גרסה חלופית של תוכן.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold mb-6">סטנדרטים ויעד נגישות</h2>
        <div className="bg-zinc-50 p-6 rounded-lg border border-zinc-200">
          <p className="mb-4">
            אנו מתמקדים בעמידה ב‑<strong>WCAG 2.1 ברמת AA</strong> ככל הניתן, הן באתר והן בשירותים המתקיימים במתקנים שלנו.
          </p>
          <p className="text-zinc-600 text-sm">
            חלק מהתכנים עדיין עשויים להיות בעבודה. בפרק הבא תמצאו פירוט של היכן אנו עומדים כיום ומה הנושאים שעליהם אנו ממשיכים לעבוד.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold mb-6">מה נגיש כיום</h2>
        <ul className="space-y-3 text-zinc-700 list-disc ps-5">
          <li>מבנה כותרות תקין (H1–H3) וניווט באמצעות קישורי עוגן.</li>
          <li>טפסים עם תוויות (label) מקושרות ושגיאות טקסטואליות ברורות.</li>
          <li>כפתורי CTA בעלי יחס ניגודיות גבוה ותגיות ARIA מתאימות.</li>
          <li>תמונות עם טקסט חלופי (alt) תיאורי.</li>
          <li>תמיכה בניווט מקלדת (Tab, Enter, Esc) בכל רכיבי הטופס והמודל.</li>
          <li>תמיכה בקריאת מסך עבור דפי יצירת קשר ומדיניות פרטיות.</li>
          <li>וידאו ואודיו יגיעו עם כתוביות או תיאור קצר כאשר הדבר מעשי.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold mb-6">בעיות ידועות ומגבלות</h2>
        <ul className="space-y-3 text-zinc-700 list-disc ps-5">
          <li>חלק מהתכנים המוטבעים מצד שלישי (widgets/iframes) עשויים שלא לעמוד ב‑WCAG במלואם.</li>
          <li>תמונות מסוימות בעמודים ישנים עלולות להכיל טקסט בתוך התמונה ללא חלופה טקסטואלית מלאה.</li>
          <li>ממשקי צד שלישי (כגון קישורי תשלום חיצוניים) כפופים לנגישות של הספקים החיצוניים.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold mb-6">כיצד להשתמש באתר בצורה נגישה</h2>
        <ul className="space-y-3 text-zinc-700 list-disc ps-5">
          <li>ניווט מקלדת: השתמשו ב‑Tab כדי לעבור בין קישורים ושדות; Esc לסגירת מודלים.</li>
          <li>הגדלת טקסט: ניתן להגדיל טקסט בדפדפן (Ctrl/Cmd + +) ללא פגיעה בתפקוד הטופס.</li>
          <li>קריאת מסך: דפי הטופס מסומנים עם תיאורי ARIA. מומלץ להשתמש בגרסה עדכנית של קורא המסך.</li>
          <li>כפתור WhatsApp: פותח חלון שיחה חיצוני; אם אינכם יכולים להשתמש בו — השתמשו בכפתור "שלח טופס בלבד" או פנו בדוא&quot;ל.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold mb-6">נגישות מדיה (וידאו/אודיו)</h2>
        <ul className="space-y-3 text-zinc-700 list-disc ps-5">
          <li>כל וידאו שמפורסם באתר יכלול כתוביות בעברית כאשר הדבר מעשי.</li>
          <li>קבצי אודיו חשובים יגיעו עם תמלול טקסטואלי לפי בקשה.</li>
          <li>אם נדרש תיאור חזותי (audio description) לפרויקט ספציפי — פנו אלינו ונשקול פתרון מותאם.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold mb-6">נגישות טפסים וקבצים להורדה</h2>
        <ul className="space-y-3 text-zinc-700 list-disc ps-5">
          <li>טפסים כוללים תוויות ברורות, הודעות שגיאה טקסטואליות והנחיות מילוי.</li>
          <li>קבצים להורדה (PDF/Word) ייסרקו וננסה לספק גרסה נגישה לפי בקשה.</li>
          <li>ציינו בפנייה את הקובץ הרצוי ואת סוג הגרסה החלופית המבוקשת.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold mb-6">פרטיות ואחסון נתונים בהקשר לנגישות</h2>
        <ul className="space-y-3 text-zinc-700 list-disc ps-5">
          <li>בקשות נגישות עשויות לכלול פרטים מזהים; נשמור אותם אך ורק לצורך מענה לבקשה.</li>
          <li>לא נשמור פרטי כרטיס אשראי: תשלומים מתבצעים דרך ספקים חיצוניים.</li>
          <li>נשתמש בפרטי הקשר רק כדי להגיב ולספק את השירות המבוקש.</li>
        </ul>
      </section>

      <section className="mb-12 bg-zinc-50 p-8 rounded-lg border border-zinc-200">
        <h2 className="font-serif text-3xl font-bold mb-4">איך לדווח על בעיית נגישות / לבקש סיוע</h2>
        <p className="text-zinc-700 mb-4">
          אם מצאתם קושי או רציתם תמיכה מותאמת — נשמח לסייע.
        </p>
        <div className="space-y-3 text-zinc-700">
          <p>
            <strong>דוא&quot;ל:</strong> Mail@yakircohen.com – נושא ההודעה: "בקשת נגישות".
          </p>
          <p>
            <strong>WhatsApp:</strong> 0587555456 – כתבו "נגישות".
          </p>
          <p className="text-zinc-600 text-sm">
            בבקשה ציינו: שם, כתובת דוא&quot;ל, כתובת הדף הבעייתי, תיאור הבעיה ומהי הפורמט החלופי המבוקש.
          </p>
        </div>
      </section>

      <div className="border-t pt-6 text-zinc-500 text-sm">
        <p>
          דף זה עודכן ב־29 באפריל 2026. אנו עובדים באופן מתמשך על שיפור הנגישות של האתר והשירותים.
        </p>
      </div>
    </div>
  );
}
