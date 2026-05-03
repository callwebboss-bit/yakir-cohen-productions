import React from "react";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import StudioRecordsSVG from "@/components/StudioRecordsSVG";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description: "מדיניות פרטיות של יקיר כהן הפקות - איסוף מידע, שימוש בנתונים, וספקי שירות חיצוניים.",
  alternates: {
    canonical: "https://www.yakircohen.com/privacy",
  },
};

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "מדיניות פרטיות - יקיר כהן הפקות",
  description: "כללי פרטיות ושימוש במידע באתר יקיר כהן הפקות.",
  lastModified: "2026-04-29",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col py-24 px-6 max-w-5xl mx-auto" dir="rtl">
      <StructuredData data={privacySchema} />

      {/* Dynamic Glassmorphism Hero */}
      <div className="relative mb-16 rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <StudioRecordsSVG />
        </div>
        <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-md p-12 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4 italic text-white">מדיניות פרטיות</h1>
          <p className="text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
            אנחנו מכבדים את פרטיותכם ומחויבים לשקיפות מלאה באיסוף ושימוש במידע.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h1 className="font-serif text-5xl font-bold mb-3">מדיניות פרטיות</h1>
        <p className="text-zinc-500 text-sm">
          באתר של יקיר כהן הפקות אנחנו מכבדים את פרטיותכם וזוכים את המידע בצורה שקופה ובטוחה.
        </p>
      </div>

      <section className="mb-12 text-zinc-700 space-y-4">
        <p>
          המידע שנאסף באתר משמש רק כדי לענות לפניות, לתאם שירותים ולשפר את חוויית השימוש. אין אנו שומרים פרטי כרטיס אשראי באתר, והתשלומים מתבצעים דרך ספקים חיצוניים מאובטחים.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold mb-6">איזה מידע אנו אוספים</h2>
        <ul className="space-y-3 text-zinc-700 list-disc ps-5">
          <li>פרטי קשר שהזנתם בטפסים: שם, טלפון, דוא&quot;ל ומידע על השירות.</li>
          <li>פרטים שמסרתם בעת שליחת הודעת WhatsApp או בקשת שירות.</li>
          <li>מידע טכני בסיסי שנאסף על ידי הדפדפן להבטחת תפקוד האתר.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold mb-6">לשם מה אנו משתמשים במידע</h2>
        <ul className="space-y-3 text-zinc-700 list-disc ps-5">
          <li>להגיב לפניות ולהתקשר אליכם בהקדם.</li>
          <li>לתאם עםכם שירותים, תאריכים והצעות מחיר.</li>
          <li>לשפר את חוויית השימוש באתר ולוודא שהטפסים והקישורים פועלים כראוי.</li>
          <li>לטפל בבקשות נגישות או בקשות פרטיות מיוחדות.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold mb-6">תשלומים וספקים חיצוניים</h2>
        <div className="bg-zinc-50 p-6 rounded-lg border border-zinc-200 text-zinc-700">
          <p className="mb-3">
            אנו משתמשים בספקי תשלום חיצוניים לאחסון ולעיבוד פרטי כרטיסי אשראי. אנחנו לא שומרים פרטי אשראי באתר.
          </p>
          <p className="text-zinc-600 text-sm">
            קישורי תשלום ומערכות סליקה כפופים למדיניות הפרטיות של אותם ספקים.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold mb-6">נתונים בקשר לנגישות</h2>
        <ul className="space-y-3 text-zinc-700 list-disc ps-5">
          <li>בקשות נגישות עשויות לכלול פרטים מזהים. נשמור אותם אך ורק לצורך מענה לבקשה.</li>
          <li>לא נשמור מידע זה מעבר לצורך המתמשך של הטיפול בבקשה, אלא אם נקבל הסכמה מפורשת.</li>
          <li>ניתן לבקש הסרה של המידע עבור בקשת נגישות בכל זמן באמצעות יצירת קשר.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold mb-6">קישורים וחיצוניים</h2>
        <p className="text-zinc-700 mb-3">
          האתר מכיל קישורים לאתרים חיצוניים ושירותים של צד שלישי. איננו אחראים למדיניות הפרטיות שלהם.
        </p>
        <p className="text-zinc-600 text-sm">
          מומלץ לקרוא את מדיניות הפרטיות של ספקים חיצוניים לפני שימוש בשירותים שלהם.
        </p>
      </section>

      <section className="mb-12 bg-zinc-50 p-8 rounded-lg border border-zinc-200">
        <h2 className="font-serif text-3xl font-bold mb-4">איך ליצור קשר</h2>
        <p className="text-zinc-700 mb-4">
          נשמח לענות על שאלות פרטיות או לבקשות להסרת מידע.
        </p>
        <div className="space-y-3 text-zinc-700">
          <p>
            <strong>דוא&quot;ל:</strong> Mail@yakircohen.com
          </p>
          <p>
            <strong>WhatsApp:</strong> 0587555456
          </p>
        </div>
      </section>

      <div className="border-t pt-6 text-zinc-500 text-sm">
        <p>
          מדיניות זו עודכנה ב־29 באפריל 2026. שינויים עתידיים יפורסמו בעמוד זה.
        </p>
      </div>
    </div>
  );
}
