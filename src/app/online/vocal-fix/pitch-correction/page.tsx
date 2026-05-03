import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "תיקון זיופים מקצועי — Melodyne ביד מנוסה | יקיר כהן הפקות",
  description:
    "תיקון זיופים מקצועי עם Melodyne — שמירת הטבעיות, תיקון מה שמפריע. שולחים קובץ, מקבלים שירה שנשמעת כמו שצריך. מ-150 ₪.",
  alternates: { canonical: "https://www.yakircohen.com/online/vocal-fix/pitch-correction" },
  openGraph: {
    title: "תיקון זיופים עם Melodyne | יקיר כהן הפקות",
    description: "Melodyne ביד מנוסה — טבעי, מדויק. מ-150 ₪.",
    url: "https://www.yakircohen.com/online/vocal-fix/pitch-correction",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "תיקון זיופים מקצועי — יקיר כהן הפקות",
  "description": "תיקון זיופים עם Melodyne — שמירת הטבעיות, תיקון מה שמפריע. מ-150 ₪.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
  "offers": { "@type": "Offer", "price": "150", "priceCurrency": "ILS" },
};

const naturalVsRobot = [
  {
    type: "Auto-Tune אוטומטי (רובוטי)",
    bad: true,
    points: [
      "מחליק את כל הפיצ'ים בכוח",
      "מסיר את אנושיות השירה",
      "נשמע מלאכותי ו'מקצב'",
      "מתאים לאפקט — לא לאלבום",
    ],
  },
  {
    type: "Melodyne ידני (יקיר כהן)",
    bad: false,
    points: [
      "תיקון נקודתי של מה שמפריע",
      "שמירת הווייברטו הטבעי",
      "הקול נשמע כמו שלכם — רק יותר מדויק",
      "לא ייסיקו 'תוקן' — יחשבו 'קול מדהים'",
    ],
  },
];

const pricing = [
  { t: "שיר אחד (עד 4 דקות)", p: "150", d: "תיקון זיופים + שמירת טבעיות" },
  { t: "שיר מורכב / להקה", p: "250", d: "כמה ערוצי קול בו-זמנית" },
  { t: "EP / מיני-אלבום (3-6 שירים)", p: "לפי הצעה", d: "מחיר מוזל לפרויקט" },
];

export default function PitchCorrectionPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-white border-b border-zinc-100 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-zinc-200" />
          יקיר כהן הפקות · תיקון זיופים
          <span className="inline-block w-5 h-px bg-zinc-200" />
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          תיקון זיופים עם Melodyne.
          <br />
          <span className="text-[#D42B2B]">נשמע כמו שלכם — רק מושלם יותר.</span>
        </h1>
        <p className="text-zinc-500 max-w-lg mx-auto mb-6 leading-relaxed">
          לא Auto-Tune רובוטי. תיקון ידני, נקודתי, שמשמר את הווייברטו שלכם ומתקן רק מה שמפריע.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            שלחו קובץ לתיקון
          </Link>
          <Link href="/online/vocal-fix" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
            כל שירותי שיפור הקול
          </Link>
        </div>
      </header>

      {/* Natural vs robot */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-12">ההבדל שנשמע</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {naturalVsRobot.map(({ type, bad, points }) => (
            <div key={type} className={`rounded-2xl p-8 border ${bad ? "bg-zinc-50 border-zinc-200" : "bg-zinc-900 text-white border-zinc-700"}`}>
              <h3 className={`font-bold mb-4 ${bad ? "text-zinc-500" : "text-white"}`}>{type}</h3>
              <ul className="flex flex-col gap-3">
                {points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 justify-end text-sm">
                    <span className={bad ? "text-zinc-400 line-through" : "text-zinc-300"}>{pt}</span>
                    <span className={`shrink-0 ${bad ? "text-zinc-300" : "text-[#D42B2B]"}`}>
                      {bad ? "✗" : "✓"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* What we fix */}
      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-10">מה מתקנים בדיוק?</h2>
          <ul className="flex flex-col gap-4">
            {[
              { t: "נוטות שיוצאות מהסולם", d: "תיקון נקודתי בלי לפגוע בנוטות שמסביב" },
              { t: "ווייברטו לא מבוקר", d: "מיצוב הווייברטו בלי להסיר אותו לגמרי" },
              { t: "כפילות קול (Double tracks)", d: "יישור בין שני ערוצי קול לזמירה הרמונית" },
              { t: "מעברים חלקים בין נוטות", d: "glide שנשמע טבעי ומלוטש" },
            ].map(({ t, d }) => (
              <li key={t} className="flex items-start gap-4 p-5 bg-white border border-zinc-200 rounded-xl">
                <CheckCircle2 size={16} className="text-[#D42B2B] mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-sm mb-0.5">{t}</p>
                  <p className="text-zinc-500 text-xs">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-10">מחירון תיקון זיופים</h2>
        <div className="flex flex-col divide-y divide-zinc-100 border border-zinc-200 rounded-2xl overflow-hidden">
          {pricing.map(({ t, p, d }) => (
            <div key={t} className="flex items-center justify-between gap-4 p-6 bg-white hover:bg-zinc-50 transition-colors">
              <div className="text-right">
                <p className="font-bold text-zinc-900">{t}</p>
                <p className="text-zinc-400 text-xs">{d}</p>
              </div>
              <span className="font-serif text-xl font-black text-[#D42B2B] shrink-0">₪{p}</span>
            </div>
          ))}
        </div>
        <p className="text-zinc-400 text-xs mt-3">המחירים אינם כוללים מע&quot;מ. זמן מסירה: 24-48 שעות.</p>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">מוכנים לתקן את השיר?</h2>
        <p className="text-zinc-400 mb-6">שלחו קובץ בוואטסאפ — נחזור עם הצעה תוך שעות.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            058-7-555-456 וואטסאפ
          </Link>
          <Link href="/studio/recording-song-modiin" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            מעדיפים להקליט מחדש?
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותי שיפור קול נוספים"
        pages={[
          { label: "ניקוי רעשים", href: "/online/vocal-fix/ניקוי-רעשים", desc: "מזגן, הד, נשימות — מ-79 ₪" },
          { label: "מיקסינג מקצועי", href: "/online/vocal-fix/mixing", desc: "EQ, Reverb, Balance — מ-350 ₪" },
          { label: "הקלטה מחדש באולפן", href: "/studio/recording-song-modiin", desc: "פעמים רבות עדיף להקליט מחדש" },
        ]}
      />
    </div>
  );
}
