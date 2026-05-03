import React from "react";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import StudioRecordsSVG from "@/components/StudioRecordsSVG";

export const metadata: Metadata = {
  title: "תנאי השירות",
  description: "תנאי השירות של יקיר כהן הפקות - ביטול אירועים, נגישות, והגבלות אחריות.",
  alternates: {
    canonical: "https://www.yakircohen.com/terms",
  },
};

const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "תנאי השירות - יקיר כהן הפקות",
  "description": "תנאי השירות וההגבלות החוקיות של יקיר כהן הפקות",
  "lastModified": "2026-04-29",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col py-24 px-6 max-w-4xl mx-auto" dir="rtl">
      <StructuredData data={termsSchema} />

      {/* Dynamic Glassmorphism Hero */}
      <div className="relative mb-16 rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <StudioRecordsSVG />
        </div>
        <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-md p-12 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4 italic text-white">תנאי השירות</h1>
          <p className="text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
            אנחנו מחויבים לשקיפות מלאה, הוגנות ולעבודה איכותית. אם משהו לא ברור — דברו איתנו.
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif text-5xl font-bold mb-2 italic">תנאי השירות</h1>
        <p className="text-zinc-500 text-sm">
          עדכון אחרון: 29 באפריל, 2026
        </p>
      </div>

      {/* Intro */}
      <section className="mb-12 text-zinc-700">
        <p className="mb-4">
          האתר <strong>yakircohen.com</strong> (להלן: "האתר") מופעל על ידי <strong>יקיר כהן הפקות</strong> (להלן: "אנחנו"). 
          השימוש באתר והזמנת השירותים שלנו מהווים הסכמה לתנאים להלן.
        </p>
        <p>
          אנחנו מחויבים לשקיפות מלאה, הוגנות ולעבודה איכותית. אם משהו לא ברור — דברו איתנו.
        </p>
      </section>

      {/* Section 1: ביטול לפי חוק הגנת הצרכן */}
      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold mb-6">1. ביטול והחזר כספי – זכויות הצרכן</h2>

        <div className="bg-blue-50 border-r-4 border-blue-500 p-6 mb-6 rounded-sm">
          <p className="font-bold text-blue-900 mb-2">🛡️ זכויותיכם לפי חוק הגנת הצרכן, התשכ"א–1981</p>
          <p className="text-blue-800 text-sm">
            ביטול הזמנה מעוטר בזכויות צרכן חוקיות. אנחנו פועלים בהתאם לחוק.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-3">✅ ביטול מצדכם – לפחות 14 יום לפני האירוע</h3>
            <p className="text-zinc-700 mb-3">
              החזר כספי <strong>מלא ומיידי</strong> בהתאם לזכות הצרכן ולחוק הגנת הצרכן.
            </p>
            <p className="text-zinc-600 text-sm">
              זוהי זכות צרכנית בסיסית. אין צורך בנימוקים או בירוקרטיה.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">🌟 מדיניות פנימית – מעל 40 יום לפני האירוע</h3>
            <p className="text-zinc-700 mb-3">
              אנו שואפים להעניק גמישות נוספת, ומאמינים באחריות לקוח. במקרים מוקדמים במיוחד, נהיה שמחים להציע החזר מלא.
            </p>
            <p className="text-zinc-600 text-sm">
              זו התחייבות שירות פנימית שנועדה לחזק את האמון שלנו בכם.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">⚠️ ביטול מצדכם – פחות מ-14 יום לפני האירוע</h3>
            <p className="text-zinc-700 mb-3">
              אנחנו נשקול כל בקשה בנפרד. אם התאריך כבר הוקצה והזמנתם מאנשים — נדבר על פתרון הוגן.
            </p>
            <ul className="text-zinc-700 text-sm space-y-2 ms-4">
              <li>• אם נוכל למצוא הזמנה חלופית — נעשה זאת בחינם.</li>
              <li>• אם לא — נשקול זיכוי או החזר חלקי לפי נסיבות.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">🔄 שינוי תאריך</h3>
            <p className="text-zinc-700">
              לא ביטול — <strong>שינוי תאריך</strong>. נעשה כל מאמץ למצוא למכם תאריך חלופי בכפוף לזמינות. 
              ללא דמי ביטול או החלפה.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">❌ ביטול מצדנו (יוצא דופן)</h3>
            <p className="text-zinc-700 mb-3">
              במקרה נדיר שבו אנחנו נאלצים לבטל (מחלה, אי־התאמה מהותית, חירום):
            </p>
            <ul className="text-zinc-700 text-sm space-y-2 ms-4">
              <li>• <strong>החזר כספי מלא ומיידי</strong></li>
              <li>• עזרה במציאת חלופה דרך קולגות שלנו</li>
              <li>• תמיכה מלאה בתהליך</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: נגישות WCAG AA */}
      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold mb-6">2. הצהרת נגישות</h2>

        <div className="bg-green-50 border-r-4 border-green-500 p-6 mb-6 rounded-sm">
          <p className="font-bold text-green-900 mb-2">♿ אנחנו מחויבים לנגישות</p>
          <p className="text-green-800 text-sm">
            האתר שלנו ותוכן השירותים שלנו תוכננו להיות נגישים לכל אדם, ללא קשר ליכולות שלו.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-3">🌐 נגישות אתר (WCAG 2.1 Level AA)</h3>
            <p className="text-zinc-700 mb-3">
              האתר yakircohen.com עומד בתקן נגישות אתר בינלאומי <strong>WCAG 2.1 Level AA</strong>:
            </p>
            <ul className="text-zinc-700 text-sm space-y-2 ms-4">
              <li>✅ ניווט מלא בעזרת מקלדת</li>
              <li>✅ תצוגה מגבילה לקוראי מסך (Screen Readers)</li>
              <li>✅ קונטרסט טקסט מוגבר</li>
              <li>✅ טקסט חלופי לכל תמונה (alt text)</li>
              <li>✅ תיבות טופס סימנו ותיוג לבנות</li>
              <li>✅ תמיכה בהגדלת אותיות ודפדפן ללא סגנונות</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">🏢 נגישות פיזית – אולפנים</h3>
            <p className="text-zinc-700 mb-3">
              למתקני יקיר כהן הפקות תמיכה בנגישות פיזית:
            </p>

            <div className="bg-zinc-50 p-4 rounded mb-4 ms-4">
              <p className="font-bold mb-2">📍 מודיעין</p>
              <ul className="text-zinc-700 text-sm space-y-1">
                <li>✅ כניסה נגישה לכיסאות גלגלים</li>
                <li>✅ חניה קרובה</li>
                <li>✅ שירותים נגישים</li>
                <li>✅ תיאום מראש מומלץ</li>
              </ul>
            </div>

            <div className="bg-zinc-50 p-4 rounded ms-4">
              <p className="font-bold mb-2">📍 ירושלים</p>
              <ul className="text-zinc-700 text-sm space-y-1">
                <li>✅ כניסה נגישה לכיסאות גלגלים</li>
                <li>✅ חניה קרובה</li>
                <li>✅ שירותים נגישים</li>
                <li>✅ תיאום מראש מומלץ</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">🎙️ נגישות שירותים</h3>
            <p className="text-zinc-700 mb-3">
              אם יש לכם צרכים נגישות מיוחדים:
            </p>
            <ul className="text-zinc-700 text-sm space-y-2 ms-4">
              <li>• <strong>התקשרו מראש</strong> כדי להתאים את השירות</li>
              <li>• אנחנו עובדים עם אנשי מקצוע בנגישות</li>
              <li>• אנחנו משדרגים כל הזמן את שירותינו</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">📞 דיווח על בעיות נגישות</h3>
            <p className="text-zinc-700">
              אם מצאתם בעיה בנגישות — נשמח לשמוע. כתבו ל:
            </p>
            <p className="font-bold text-brand-red mt-2">
              Mail@yakircohen.com
            </p>
            <p className="text-zinc-600 text-sm mt-2">
              נתקנה את הבעיה כל שנוכל.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: הגבלת אחריות */}
      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold mb-6">3. הגבלת אחריות – ציוד ותקלות</h2>

        <div className="bg-amber-50 border-r-4 border-amber-500 p-6 mb-6 rounded-sm">
          <p className="font-bold text-amber-900 mb-2">⚖️ אחריות משותפת</p>
          <p className="text-amber-800 text-sm">
            אנחנו מחויבים לשירות חצוצוני, אך כמו בכל תחום טכני — גורמים חיצוניים יכולים להשפיע.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-3">🔧 תפעול ציוד – על ידי הצוות שלנו בלבד</h3>
            <p className="text-zinc-700 mb-3">
              ציוד מושכר או בשימושנו מופעל רק על ידי צוות יקיר כהן הפקות. אין לגעת, להזיז או להפעיל ציוד ללא אישור מפורש.
            </p>
            <p className="text-zinc-700 mb-3">
              <strong>אחריות:</strong> נזק שנגרם עקב שימוש חיצוני או אי־ציות להנחיות — באחריות מי שנגע בציוד.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">⚡ תקלות טכניות</h3>
            <p className="text-zinc-700 mb-3">
              אנחנו מגיעים עם ציוד מקצועי וגיבוי. אבל:
            </p>
            <ul className="text-zinc-700 text-sm space-y-2 ms-4">
              <li>✅ תקלות נקודתיות (ניתוק כבל, restart) — יש גיבוי</li>
              <li>✅ הפסקת חשמל חיצונית, שיבוש אלקטרוני בלתי צפוי — <strong>לא באחריותנו</strong></li>
              <li>⚠️ תקלה קטלנית (לא ניתן להפעיל כלל) — בדיקה מיידית + הערכה</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">💰 מדיניות החזר בגין תקלה</h3>
            <p className="text-zinc-700 mb-3">
              במקרה חריג שבו <strong>לא ניתן</strong> להפעיל את השירות כלל:
            </p>
            <ul className="text-zinc-700 text-sm space-y-2 ms-4">
              <li>• בדיקה מיידית בשטח</li>
              <li>• הערכת הנסיבות</li>
              <li>• החזר מחצית מהתשלום (עד לשיקול דעתנו)</li>
            </ul>
            <p className="text-zinc-600 text-sm mt-3 italic">
              אין החזר מלא בגין תקלה טכנית, אלא אם יוחלט אחרת לפי שיקול דעתנו בנסיבות חריגות.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">🌧️ מזג אוויר ותנאים מיוחדים</h3>
            <p className="text-zinc-700 mb-3">
              בחלק מהשירותים (בועות סבון בחוץ, עשן, תאורה) — מזג אוויר עלול להשפיע.
            </p>
            <ul className="text-zinc-700 text-sm space-y-2 ms-4">
              <li>✅ אנחנו מעדכנים מראש</li>
              <li>✅ נעשה את המקסימום בשטח</li>
              <li>⚠️ האחריות לבדוק תנאים בסיסיים — של הלקוח</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">🛡️ אחריות כללית</h3>
            <p className="text-zinc-700">
              <strong>סך הסיכום:</strong> אנחנו מחויבים לביצוע מקצועי, ונעשה הכל כדי להימנע מתקלות. 
              אבל כמו בכל תחום, יש גורמים שלא בשליטתנו. אנחנו פועלים בטוב טעם ובשקיפות מלאה.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-12 bg-zinc-50 p-8 rounded-lg">
        <h2 className="font-serif text-2xl font-bold mb-4">❓ שאלות?</h2>
        <p className="text-zinc-700 mb-4">
          אנחנו כאן לכל הבהרה או שאלה חוקית.
        </p>
        <div className="space-y-2 text-zinc-700">
          <p>
            <strong>טלפון / וואטסאפ:</strong> 058-7555456
          </p>
          <p>
            <strong>מייל:</strong> Mail@yakircohen.com
          </p>
        </div>
      </section>

      {/* Footer note */}
      <div className="border-t pt-6 text-zinc-500 text-sm">
        <p>
          תנאים אלה תקפים החל מ־29 באפריל 2026. עדכונים עתידיים יפורסמו בעמוד זה.
        </p>
      </div>
    </div>
  );
}
