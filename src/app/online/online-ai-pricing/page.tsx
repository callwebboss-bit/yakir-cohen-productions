import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "מחירון שירותים אונליין — עריכת קול ותמונה | יקיר כהן הפקות",
  description:
    "מחירון מלא לכל שירותי האונליין: ניקוי רעשים, תיקון זיופים, מיקס, תיקון עוצמה, שיפור תמונות — שליחה מהבית, קבלה תוך 24 שעות.",
  alternates: { canonical: `${SITE_URL}/online/online-ai-pricing` },
  openGraph: {
    title: "מחירון שירותים אונליין | יקיר כהן הפקות",
    description: "ניקוי רעשים, מיקס, תיקון זיופים, שיפור תמונות — מ-29 ₪.",
    url: `${SITE_URL}/online/online-ai-pricing`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "מחירון שירותים אונליין — יקיר כהן הפקות",
  "description": "כל שירותי העריכה אונליין עם מחיר, מה כלול וזמן ביצוע.",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ניקוי רעשים", "url": `${SITE_URL}/online/vocal-fix/ניקוי-רעשים` },
    { "@type": "ListItem", "position": 2, "name": "תיקון זיופים", "url": `${SITE_URL}/online/vocal-fix/pitch-correction` },
    { "@type": "ListItem", "position": 3, "name": "מיקס ומאסטרינג", "url": `${SITE_URL}/online/vocal-fix/mixing` },
    { "@type": "ListItem", "position": 4, "name": "תיקון עוצמה", "url": `${SITE_URL}/online/vocal-fix/volume-fix` },
    { "@type": "ListItem", "position": 5, "name": "שחזור אודיו", "url": `${SITE_URL}/online/vocal-fix/audio-repair` },
    { "@type": "ListItem", "position": 6, "name": "שיפור תמונות", "url": `${SITE_URL}/online/vocal-fix/photo-enhance` },
  ],
};

const services = [
  {
    title: "ניקוי רעשים",
    href: "/online/vocal-fix/ניקוי-רעשים",
    price: "79",
    unit: "לקובץ",
    turnaround: "עד 12 שעות",
    includes: ["הסרת רעש מזגן / HVAC", "הסרת הד", "De-hiss ו-De-hum", "iZotope RX"],
    tag: "נפוץ",
  },
  {
    title: "תיקון זיופים",
    href: "/online/vocal-fix/pitch-correction",
    price: "149",
    unit: "לשיר",
    turnaround: "עד 24 שעות",
    includes: ["Melodyne Studio", "תיקון טבעי — לא רובוטי", "עד 4 דקות"],
    tag: "",
  },
  {
    title: "מיקס ומאסטרינג",
    href: "/online/vocal-fix/mixing",
    price: "290",
    unit: "לשיר",
    turnaround: "עד 48 שעות",
    includes: ["EQ, קומפרסיה, Reverb", "מאסטרינג לפלטפורמה", "Stem Mix — 490 ₪"],
    tag: "מלא",
  },
  {
    title: "תיקון עוצמה",
    href: "/online/vocal-fix/volume-fix",
    price: "49",
    unit: "לקובץ",
    turnaround: "עד 6 שעות",
    includes: ["נורמליזציה ל-LUFS נכון", "לכל פלטפורמה (Spotify, YouTube...)", "WAV + MP3"],
    tag: "מהיר",
  },
  {
    title: "שחזור אודיו",
    href: "/online/vocal-fix/audio-repair",
    price: "149",
    unit: "לקובץ",
    turnaround: "עד 24 שעות",
    includes: ["De-Clip, De-Click", "הסרת רעשים ספקטרליים", "iZotope RX Advanced"],
    tag: "",
  },
  {
    title: "שיפור תמונות",
    href: "/online/vocal-fix/photo-enhance",
    price: "29",
    unit: "לתמונה",
    turnaround: "עד 24 שעות",
    includes: ["תאורה וצבע", "חידוד", "רטוש עדין"],
    tag: "",
  },
];

export default function OnlineAiPricingPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · שירותים אונליין
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-zinc-900"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          מחירון שירותים אונליין.
          <br />
          <span className="text-[#D42B2B]">שולחים מהבית, מקבלים מוכן.</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8">
          ניקוי רעשים, תיקון זיופים, מיקס, שיפור תמונות — עריכה מקצועית בלי להגיע לאולפן.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            שלחו קובץ עכשיו
          </Link>
          <Link
            href="/online"
            className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all"
          >
            מה זה כולל?
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">כל השירותים</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, href, price, unit, turnaround, includes, tag }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col bg-white border border-zinc-200 rounded-2xl p-7 hover:border-zinc-900 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-lg font-bold text-zinc-900">{title}</h3>
                {tag && (
                  <span className="text-xs font-bold bg-[#D42B2B]/10 text-[#D42B2B] px-2 py-1 rounded-full">
                    {tag}
                  </span>
                )}
              </div>
              <p className="text-3xl font-serif font-black text-[#D42B2B] mb-1">{price} ₪</p>
              <p className="text-zinc-400 text-xs mb-4">
                {unit} · {turnaround}
              </p>
              <ul className="flex flex-col gap-1.5 text-sm text-right mt-auto">
                {includes.map((f) => (
                  <li key={f} className="flex items-center gap-2 justify-end">
                    <span className="text-zinc-600">{f}</span>
                    <CheckCircle2 size={13} className="text-[#D42B2B] shrink-0" />
                  </li>
                ))}
              </ul>
              <p className="text-xs font-bold text-[#D42B2B] mt-5 group-hover:underline text-left">פרטים ← </p>
            </Link>
          ))}
        </div>
        <p className="text-zinc-400 text-xs text-center mt-8">כל המחירים אינם כוללים מע&quot;מ (18%)</p>
      </section>

      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">איך מזמינים?</h2>
          <p className="text-zinc-500 leading-relaxed mb-8">
            שלחו וואטסאפ עם הקובץ ומה צריך לתקן. תקבלו אישור + מחיר סופי לפני שמתחילים. תשלום דרך ביט / העברה בנקאית.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
            {[
              { n: "01", t: "שולחים קובץ", d: "וואטסאפ עם הקובץ ותיאור קצר מה צריך" },
              { n: "02", t: "מקבלים הצעה", d: "מחיר + זמן ביצוע — לפני שמתחילים" },
              { n: "03", t: "מקבלים מוכן", d: "קובץ עלך לאחר אישורכם" },
            ].map(({ n, t, d }) => (
              <div key={n} className="bg-white border border-zinc-200 rounded-xl p-5">
                <p className="font-serif text-3xl font-black text-[#D42B2B] opacity-30 mb-2">{n}</p>
                <p className="font-bold text-zinc-900 mb-1">{t}</p>
                <p className="text-zinc-500 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">שלחו קובץ עכשיו</h2>
        <p className="text-zinc-400 mb-6">וואטסאפ — מגיבים תוך שעה בשעות הפעילות.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors"
          >
            058-7-555-456 וואטסאפ
          </Link>
          <Link
            href="/studio/pricing"
            className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors"
          >
            מחירון אולפן
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותי האולפן"
        pages={[
          { label: "הקלטת שירים", href: "/studio/recording-song-modiin", desc: "מ-990 ₪ — האולפן שלנו" },
          { label: "מחירון אולפן", href: "/studio/pricing", desc: "כל שירותי ההקלטה" },
          { label: "שיפור קול אונליין", href: "/online/vocal-fix", desc: "כל שירותי הקול" },
        ]}
      />
    </div>
  );
}
