import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Video, Tv, Megaphone, BookOpen } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "קריינות לסרטוני תדמית ופרסומות — קול מקצועי לעסקים | יקיר כהן הפקות",
  description:
    "קריינות מקצועית לסרטוני תדמית, פרסומות, e-learning והדרכות. קול שמשדר מה שאתם רוצים שישדר. הצעת מחיר תוך שעות.",
  alternates: { canonical: "https://www.yakircohen.com/business/professional-voiceover/corporate-voiceover" },
  openGraph: {
    title: "קריינות לסרטוני תדמית | יקיר כהן הפקות",
    description: "סרטון הסבר, פרסומת, e-learning. קול מקצועי לעסקים.",
    url: "https://www.yakircohen.com/business/professional-voiceover/corporate-voiceover",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "קריינות לסרטוני תדמית — יקיר כהן הפקות",
  "description": "קריינות מקצועית לסרטוני תדמית, פרסומות, e-learning.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
};

const services = [
  { icon: <Video size={22} />, t: "סרטון הסבר (Explainer)", d: "הסברת מוצר, שירות, או תהליך — קריין שמוביל צופה מנקודה A לנקודה B." },
  { icon: <Tv size={22} />, t: "וידאו תדמית", d: "מי אנחנו, מה אנחנו עושים, למה לעבוד איתנו. קול שמשקף את ערכי המותג." },
  { icon: <Megaphone size={22} />, t: "פרסומת / קמפיין", d: "ספוט 15/30 שניות, קמפיין דיגיטלי, פרסומת לרדיו. קצב, אנרגיה, מסר." },
  { icon: <BookOpen size={22} />, t: "e-Learning / הדרכה", d: "קורס מקוון, הדרכת עובדים, תוכן פנים-ארגוני. קול ברור שמעביר מידע." },
];

const deliveryProcess = [
  { n: "01", t: "שולחים סקריפט", d: "שולחים את הטקסט + הנחיות טון ומהירות. אנחנו מוסיפים הנחיות קריאה במידת הצורך." },
  { n: "02", t: "הקלטה + עריכה", d: "מקליטים, מנקים רעשים, מוסיפים מוזיקת רקע אם נדרש. שולחים לאישורכם." },
  { n: "03", t: "מסירה", d: "WAV + MP3 בכל פורמט שנדרש. תוך 24-48 שעות." },
];

export default function CorporateVoiceoverPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-900 text-white text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · קריינות לעסקים
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          קריינות לסרטוני תדמית.
          <br />
          <span className="text-[#D42B2B]">קול שמשדר בדיוק מה שרציתם.</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8">
          סרטון הסבר, וידאו תדמית, e-learning — קריין שמבין עסקים, לא רק קורא טקסט.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            שלחו סקריפט לדוגמה
          </Link>
          <Link href="/business/professional-voiceover" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">
            כל שירותי הקריינות
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">סוגי סרטונים</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ icon, t, d }) => (
            <div key={t} className="flex items-start gap-5 p-7 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all">
              <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-700 shrink-0">{icon}</div>
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">{t}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-10">מה כולל השירות?</h2>
          <ul className="flex flex-col gap-4">
            {[
              "הקלטה בחדר אקוסטי — ללא רעשי רקע",
              "עריכה וניקוי שמע (iZotope RX)",
              "התאמה לטון המותג — רשמי, ידידותי, מכירתי",
              "מוזיקת רקע אם נדרש (ברישיון מסחרי)",
              "עד 2 סבבי תיקונים",
              "מסירה בכל פורמט — WAV, MP3, Opus",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 justify-end">
                <span className="text-zinc-700">{item}</span>
                <CheckCircle2 size={16} className="text-[#D42B2B] shrink-0" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-10">תהליך העבודה</h2>
        <div className="flex flex-col gap-4">
          {deliveryProcess.map(({ n, t, d }) => (
            <div key={n} className="flex items-start gap-6 p-6 bg-white border border-zinc-100 rounded-2xl">
              <span className="font-serif text-3xl font-black text-[#D42B2B] opacity-50 shrink-0">{n}</span>
              <div>
                <h3 className="font-bold mb-1">{t}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">מוכנים לשדרג את הסרטון?</h2>
        <p className="text-zinc-400 mb-6">שלחו סקריפט — נחזור עם הצעת מחיר תוך שעות.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">058-7-555-456 וואטסאפ</Link>
          <Link href="/business/professional-voiceover/phone-voiceover" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">קריינות לטלפון</Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותים קשורים"
        pages={[
          { label: "קריינות לטלפון", href: "/business/professional-voiceover/phone-voiceover", desc: "הודעת קבלה, שלוחות, נעדר" },
          { label: "שיפור קול אונליין", href: "/online/vocal-fix", desc: "ניקוי רעשים ומיקסינג — מ-79 ₪" },
          { label: "הפקת פודקאסט", href: "/podcast/podcast-production", desc: "לא רק סרטונים — גם פודקאסט" },
        ]}
      />
    </div>
  );
}
