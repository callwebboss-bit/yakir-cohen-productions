import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { Layers, Sparkles, ArrowRight } from "lucide-react";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "פיצול ערוצים אונליין | StemSplit | יקיר כהן הפקות",
  description:
    "פיצול ערוצים מקצועי אונליין: ווקאל ובס נפרדים מתוך השיר שלך. שירות StemSplit עם תוצאה מוכנה לעיבוד, מיקס או הופעה חיה.",
  alternates: { canonical: `${SITE_URL}/online/vocal-fix/stem-split` },
  openGraph: {
    title: "פיצול ערוצים אונליין | StemSplit | יקיר כהן הפקות",
    description: "הפרדת שיר לווקאל ובס נפרדים עם StemSplit — שירות פיצול ערוצים מהיר ומרוכז.",
    url: `${SITE_URL}/online/vocal-fix/stem-split`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "פיצול ערוצים אונליין — StemSplit",
  description: "שירות פיצול ערוצים מקצועי: ווקאל ובס נפרדים מתוך שירים וקבצי אודיו.",
  provider: {
    "@type": "LocalBusiness",
    name: "יקיר כהן הפקות",
    telephone: "+972-58-7555456",
    url: `${SITE_URL}`,
  },
  serviceType: "StemSplit Audio Separation",
};

export default function StemSplitPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-white text-center rounded-b-3xl shadow-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-4">שירותים אונליין / פיצול ערוצים</p>
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">פיצול ערוצים מקצועי עם StemSplit</h1>
        <p className="max-w-3xl mx-auto text-zinc-300 text-base md:text-lg leading-relaxed">
          הפרדה מהירה של חצאי השיר ל־Vocals ו־Instrumental. קבלו קבצים נפרדים שמוכנים למיקס, הפקה או שימוש בביצועים חיים.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] px-8 py-4 rounded-full font-bold shadow-lg hover:bg-red-700 transition-colors"
          >
            שלחו קובץ עכשיו
          </Link>
          <Link
            href="/online/online-ai-pricing"
            className="border border-zinc-600 px-8 py-4 rounded-full font-bold text-white hover:border-white transition-all"
          >
            בדקו מחירון
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] items-start">
          <div className="space-y-8">
            <div className="rounded-3xl bg-white border border-zinc-200 p-10 shadow-sm">
              <div className="flex items-center gap-3 text-[#D42B2B] mb-6">
                <Layers size={28} />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">היתרון של StemSplit</p>
                  <h2 className="text-2xl font-bold text-zinc-900">ערוצים נפרדים באיכות גבוהה</h2>
                </div>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                אנחנו משתמשים ב־StemSplit כדי להפריד את הווקאל מהכלים, ליצור קבצי WAV נפרדים ולתת לכם גמישות מלאה בעיבוד.
                השירות מתאים לשירים, דיבוב, פודקאסטים ופסקולים.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-zinc-200 p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">מה תקבלו?</h2>
              <ul className="space-y-4 text-zinc-600">
                {[
                  "קובץ וווקאל נפרד",
                  "קובץ אינסטרומנטל נפרד",
                  "תאימות ל‑Logic, Pro Tools, Ableton, Cubase",
                  "קבצים מוכנים למיקסינג, הופעה או ניתוח מוזיקלי",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Sparkles size={18} className="mt-1 text-[#D42B2B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-zinc-50 border border-zinc-200 p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">איך זה עובד?</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "01", label: "שולחים קובץ", desc: "העלאת שיר או דוגמת אודיו ותקבלו קבצים נפרדים." },
                  { title: "02", label: "מפרידים ערוצים", desc: "StemSplit מפרק את הווקאל מהכלים במדויק." },
                  { title: "03", label: "יוצאים קבצים", desc: "ואוקאל ובס נשלחים אליכם כ־WAV נפרד." },
                  { title: "04", label: "עוגן מקצועי", desc: "לקבלת מיקס או שימוש בהופעה חיה." },
                ].map((step) => (
                  <div key={step.label} className="rounded-3xl bg-white p-6 border border-zinc-200">
                    <div className="text-[#D42B2B] font-black text-3xl mb-3">{step.title}</div>
                    <p className="font-bold text-zinc-900 mb-2">{step.label}</p>
                    <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-zinc-950 text-white p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-4">מחיר סטנדרטי</p>
              <p className="text-5xl font-black mb-4">מ-199 ₪</p>
              <p className="text-zinc-300 leading-relaxed">
                מחיר השקה לשירות פרימיום. המחיר מתייחס לשירות בודד, כולל ייצוא ב‑WAV.
              </p>
              <div className="mt-8 space-y-3 text-sm text-zinc-300">
                <p>✔ תוצאה מהירה בתוך 24 שעות</p>
                <p>✔ תמיכה ב‑WAV, MP3, FLAC, M4A</p>
                <p>✔ תמיכה בעברית ובגלובלית</p>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-zinc-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">עוד שירותים אונליין</h3>
              <ul className="space-y-3 text-zinc-600">
                <li className="flex items-center gap-3">
                  <ArrowRight size={16} className="text-[#D42B2B]" />
                  <Link href="/online/vocal-fix/ניקוי-רעשים" className="font-semibold hover:text-[#D42B2B]">ניקוי רעשים</Link>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight size={16} className="text-[#D42B2B]" />
                  <Link href="/online/vocal-fix/pitch-correction" className="font-semibold hover:text-[#D42B2B]">תיקון זיופים</Link>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight size={16} className="text-[#D42B2B]" />
                  <Link href="/online/vocal-fix/volume-fix" className="font-semibold hover:text-[#D42B2B]">נרמול עוצמה</Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
