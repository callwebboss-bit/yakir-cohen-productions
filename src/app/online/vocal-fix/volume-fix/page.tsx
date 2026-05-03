import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "נרמול עוצמה ו-Loudness — LUFS תקני לכל פלטפורמה | יקיר כהן הפקות",
  description:
    "נרמול עוצמה מקצועי: LUFS תקני ל-Spotify, YouTube, Apple Music, רדיו. Compression ו-Limiting. שולחים קובץ, מקבלים עוצמה אחידה. מ-79 ₪.",
  alternates: { canonical: "https://www.yakircohen.com/online/vocal-fix/volume-fix" },
  openGraph: {
    title: "נרמול עוצמה LUFS | יקיר כהן הפקות",
    description: "LUFS תקני לכל פלטפורמה. מ-79 ₪.",
    url: "https://www.yakircohen.com/online/vocal-fix/volume-fix",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "נרמול עוצמה — יקיר כהן הפקות",
  "description": "נרמול עוצמה מקצועי: LUFS תקני לכל פלטפורמה. מ-79 ₪.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
  "offers": { "@type": "Offer", "price": "79", "priceCurrency": "ILS" },
};

const platforms = [
  { name: "Spotify", lufs: "-14 LUFS", color: "bg-green-50 text-green-700" },
  { name: "YouTube", lufs: "-14 LUFS", color: "bg-red-50 text-red-700" },
  { name: "Apple Music", lufs: "-16 LUFS", color: "bg-zinc-100 text-zinc-700" },
  { name: "רדיו ישראל", lufs: "-23 LUFS", color: "bg-blue-50 text-blue-700" },
  { name: "TikTok", lufs: "-14 LUFS", color: "bg-purple-50 text-purple-700" },
  { name: "Podcast", lufs: "-16 LUFS", color: "bg-amber-50 text-amber-700" },
];

export default function VolumeFixPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-white border-b border-zinc-100 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-zinc-200" />
          יקיר כהן הפקות · נרמול עוצמה
          <span className="inline-block w-5 h-px bg-zinc-200" />
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          נרמול עוצמה מקצועי.
          <br />
          <span className="text-[#D42B2B]">LUFS תקני לכל פלטפורמה. מ-79 ₪.</span>
        </h1>
        <p className="text-zinc-500 max-w-lg mx-auto mb-6 leading-relaxed">
          הפרש עוצמה בין שירים, פרקים שלא עומדים בתקן — מתקנים כדי שהתוכן ישמע נכון בכל מקום שיפורסם.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            שלחו קובץ לנרמול
          </Link>
          <Link href="/online/vocal-fix" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
            כל שירותי שיפור הקול
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-4">תקני LUFS לפי פלטפורמה</h2>
        <p className="text-center text-zinc-500 mb-10 text-sm">כל פלטפורמה מנרמלת את האודיו — ידיעת התקן מונעת עיוות.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {platforms.map(({ name, lufs, color }) => (
            <div key={name} className={`rounded-2xl p-5 text-center ${color}`}>
              <p className="font-bold">{name}</p>
              <p className="text-2xl font-serif font-black mt-1">{lufs}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-8">מה כולל השירות?</h2>
          <ul className="flex flex-col gap-4">
            {[
              "נרמול LUFS לתקן הפלטפורמה המבוקשת",
              "Compression לשמירת דינמיקה טבעית",
              "True Peak Limiting — מניעת עיוות ב-DAW",
              "מסירה ב-WAV + MP3 מוכן לפרסום",
              "ייעוץ על תקן מתאים אם לא בטוחים",
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
        <h2 className="font-serif text-2xl font-bold text-center mb-10">מחירון</h2>
        <div className="flex flex-col divide-y divide-zinc-100 border border-zinc-200 rounded-2xl overflow-hidden">
          {[
            { t: "קובץ אחד", p: "79", d: "נרמול LUFS + True Peak Limiting" },
            { t: "אלבום / EP (עד 10 שירים)", p: "350", d: "נרמול אחיד לכל האלבום — LUFS עקבי" },
          ].map(({ t, p, d }) => (
            <div key={t} className="flex items-center justify-between gap-4 p-6 bg-white hover:bg-zinc-50 transition-colors">
              <div className="text-right">
                <p className="font-bold text-zinc-900">{t}</p>
                <p className="text-zinc-400 text-xs">{d}</p>
              </div>
              <span className="font-serif text-xl font-black text-[#D42B2B] shrink-0">₪{p}</span>
            </div>
          ))}
        </div>
        <p className="text-zinc-400 text-xs mt-3">המחירים אינם כוללים מע&quot;מ. זמן מסירה: 24 שעות.</p>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">מוכנים לנרמל?</h2>
        <p className="text-zinc-400 mb-6">שלחו קובץ + שם הפלטפורמה שמפרסמים עליה.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">058-7-555-456 וואטסאפ</Link>
          <Link href="/online/vocal-fix/mixing" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">גם צריכים מיקסינג?</Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותי שיפור קול נוספים"
        pages={[
          { label: "מיקסינג מקצועי", href: "/online/vocal-fix/mixing", desc: "EQ, Compression, Reverb — מ-350 ₪" },
          { label: "ניקוי רעשים", href: "/online/vocal-fix/ניקוי-רעשים", desc: "לפני נרמול — נקו את הקובץ" },
          { label: "תיקון שמע", href: "/online/vocal-fix/audio-repair", desc: "Clipping, קליקים, קטיעות" },
        ]}
      />
    </div>
  );
}
