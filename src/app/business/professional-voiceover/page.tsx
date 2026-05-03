import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, Video, BookOpen, Radio } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "קריינות מקצועית לעסקים — קול שמייצג אתכם | יקיר כהן הפקות",
  description:
    "קריינות מקצועית לעסקים: הודעות טלפון, סרטוני תדמית, פרסומות, הדרכות. קול שמשדר מקצועיות ומותאם לזהות המותג שלכם.",
  alternates: { canonical: "https://www.yakircohen.com/business/professional-voiceover" },
  openGraph: {
    title: "קריינות מקצועית לעסקים | יקיר כהן הפקות",
    description: "הודעות טלפון, סרטוני תדמית, פרסומות. קול מקצועי לעסקים.",
    url: "https://www.yakircohen.com/business/professional-voiceover",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "קריינות מקצועית לעסקים — יקיר כהן הפקות",
  "description": "קריינות מקצועית: הודעות טלפון, סרטוני תדמית, הדרכות, פרסומות.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "יקיר כהן הפקות",
    "telephone": "+972-58-7555456",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "עמק איילון 34/5",
      "addressLocality": "מודיעין-מכבים-רעות",
      "addressCountry": "IL",
    },
  },
};

const services = [
  {
    href: "/business/professional-voiceover/phone-voiceover",
    icon: <Phone size={24} />,
    title: "קריינות לטלפון",
    desc: "הודעת המתנה, תפריט שלוחות, הודעת נעדר. הרושם הראשון של העסק שלכם נוצר כאן.",
    examples: ["הודעת קבלה", "תפריט שלוחות", "הודעת נעדר"],
  },
  {
    href: "/business/professional-voiceover/corporate-voiceover",
    icon: <Video size={24} />,
    title: "קריינות לסרטון תדמית",
    desc: "סרטון הסבר, וידאו פרומו, תוכן שיווקי. קריין שיודע לקרוא טקסט ולהפוך אותו לחוויה.",
    examples: ["סרטון הסבר", "וידאו פרומו", "רילס שיווקי"],
  },
  {
    href: "/business/professional-voiceover",
    icon: <BookOpen size={24} />,
    title: "קריינות להדרכה",
    desc: "תוכן e-learning, הדרכת עובדים, קורסים דיגיטליים. קול ברור ומדויק שמעביר מידע.",
    examples: ["e-learning", "הדרכת עובדים", "קורסים"],
  },
  {
    href: "/business/professional-voiceover",
    icon: <Radio size={24} />,
    title: "פרסומות ורדיו",
    desc: "ספוט רדיו, פרסומת דיגיטלית, קמפיין שמע. קריין עם טונים שמתאים לכל קהל יעד.",
    examples: ["ספוט רדיו", "פרסומת", "קמפיין"],
  },
];

const process = [
  { n: "01", t: "שולחים טקסט", d: "שולחים את הטקסט לקריינות — אנחנו מוסיפים הנחיות קריאה במידת הצורך." },
  { n: "02", t: "הפקה ואישור", d: "מקליטים, עורכים, מוסיפים מוזיקת רקע אם נדרש. שולחים לאישורכם." },
  { n: "03", t: "מסירה", d: "מקבלים קובץ WAV ו-MP3 מוכן לשימוש — תוך 24-48 שעות." },
];

export default function ProfessionalVoiceoverPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-900 text-white text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · שירותי עסקים
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          קריינות מקצועית לעסקים.
          <br />
          <span className="text-[#D42B2B]">קול שמייצג אתכם נכון.</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          הודעות טלפון, סרטוני תדמית, הדרכות, פרסומות. קול מקצועי שמשדר מה שאתם רוצים שישדר.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            קבלו הצעת מחיר
          </Link>
          <Link href="/contact" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            שלחו טקסט לדוגמה
          </Link>
        </div>
      </header>

      {/* Services */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">סוגי קריינות</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ icon, title, desc, examples }) => (
            <article key={title} className="bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col gap-4 hover:border-zinc-900 transition-all">
              <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-700">
                {icon}
              </div>
              <h3 className="font-serif text-xl font-bold">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed flex-grow">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {examples.map((ex) => (
                  <span key={ex} className="bg-zinc-100 text-zinc-600 text-xs px-2.5 py-1 rounded-full">{ex}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why professional matters */}
      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold mb-6">למה קריין מקצועי?</h2>
          <p className="text-zinc-500 leading-relaxed mb-8">
            הרושם הראשון של עסק נוצר לרוב בשמיעה — לא בראייה. הודעת המתנה הטלפונית, הסרטון שמסביר מי אתם, הפרסומת שמגיעה לאוזניים. קריין שלא מקצועי — אנשים מרגישים את זה מיד. לא ממשיכים.
          </p>
          <ul className="flex flex-col gap-4 text-right max-w-lg mx-auto">
            {[
              "קול ברור, ניסוח מדויק, קצב נכון",
              "הקלטה ברמת אולפן — ללא רעשי רקע",
              "התאמה לטון המותג שלכם",
              "מסירה תוך 24-48 שעות",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 justify-end">
                <span className="text-zinc-700 text-sm">{item}</span>
                <CheckCircle2 size={16} className="text-[#D42B2B] shrink-0" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-10">איך זה עובד?</h2>
        <div className="flex flex-col gap-4">
          {process.map(({ n, t, d }) => (
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

      {/* Sub-services links */}
      <section className="py-10 px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-xl font-bold mb-6">שירותים ספציפיים</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { href: "/business/professional-voiceover/phone-voiceover", label: "קריינות לטלפון", desc: "הודעות קבלה, שלוחות, נעדר" },
            { href: "/business/professional-voiceover/corporate-voiceover", label: "קריינות לסרטוני תדמית", desc: "פרומו, הסבר, שיווק" },
          ].map(({ href, label, desc }) => (
            <Link key={href} href={href} className="flex items-center justify-between p-5 bg-zinc-50 border border-zinc-200 rounded-xl hover:border-zinc-900 transition-all group">
              <span className="text-xs font-bold text-[#D42B2B] group-hover:translate-x-1 transition-transform">← </span>
              <div className="text-right">
                <p className="font-bold text-zinc-900">{label}</p>
                <p className="text-zinc-400 text-xs">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">מוכנים לשדרג את הקול של העסק?</h2>
        <p className="text-zinc-400 mb-6">שלחו טקסט לדוגמה ונחזור עם הצעה תוך שעות.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            058-7-555-456 וואטסאפ
          </Link>
          <Link href="/contact" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            טופס יצירת קשר
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותים קשורים"
        pages={[
          { label: "שיפור קול אונליין", href: "/online/vocal-fix", desc: "ניקוי רעשים, תיקון זיופים — מ-79 ₪" },
          { label: "הפקת פודקאסט", href: "/podcast/podcast-production", desc: "הקלטה, עריכה, הפצה — מ-950 ₪" },
          { label: "שאלות נפוצות", href: "/about/faq", desc: "כל מה שצריך לדעת לפני ההזמנה" },
        ]}
      />
    </div>
  );
}
