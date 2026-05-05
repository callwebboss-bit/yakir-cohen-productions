import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "קריינות לטלפון — הודעת ברוכים הבאים מקצועית | יקיר כהן הפקות",
  description:
    "קריינות מקצועית לטלפון: הודעת קבלה, תפריט שלוחות, הודעת נעדר. הרושם הראשון של העסק שלכם נוצר כאן. הצעת מחיר תוך שעות.",
  alternates: { canonical: `${SITE_URL}/business/professional-voiceover/phone-voiceover` },
  openGraph: {
    title: "קריינות לטלפון | יקיר כהן הפקות",
    description: "הודעת קבלה, שלוחות, נעדר — קול מקצועי לעסק שלכם.",
    url: `${SITE_URL}/business/professional-voiceover/phone-voiceover`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "קריינות לטלפון — יקיר כהן הפקות",
  "description": "קריינות מקצועית לטלפון: הודעת קבלה, תפריט שלוחות, הודעת נעדר.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
};

const phoneServices = [
  {
    emoji: "👋",
    t: "הודעת קבלה (ברוכים הבאים)",
    d: 'המשפט הראשון שמישהו שומע כשמתקשר לעסק שלכם. "הגעתם ל..." — בקול שמשדר מקצועיות מיד.',
    example: '"הגעתם לחברת X. לנוחיותכם, שיחתנו מוקלטת..."',
  },
  {
    emoji: "📱",
    t: "תפריט שלוחות (IVR)",
    d: '"לשירות לקוחות — לחץ 1. למכירות — לחץ 2." — ניווט ברור, קול אחיד, חוויה מקצועית.',
    example: '"ללחץ מכירות, לחצו 1. לתמיכה טכנית, לחצו 2..."',
  },
  {
    emoji: "📵",
    t: 'הודעת נעדר / "שעות פעילות"',
    d: "מה שמישהו שומע כשמתקשר מחוץ לשעות. קול שמשאיר רושם חיובי גם כשאתם לא זמינים.",
    example: '"כרגע לא ניתן לענות. שעות פעילות שלנו..."',
  },
  {
    emoji: "🎵",
    t: "מוזיקת המתנה",
    d: "מה שמישהו שומע בזמן שמחכה. מוזיקת רקע + הודעות שיווקיות — נשמר בחינם.",
    example: '"שניה... בזמן ההמתנה, ידעתם ש..."',
  },
];

const whyMatters = [
  "הרושם הראשון נוצר תוך 3 שניות מתחילת ההודעה",
  "קריין לא מקצועי = הלקוח מניח שהעסק לא מקצועי",
  "קול אחיד בכל ההודעות = מיתוג מסוים ומקצועי",
  "עלות חד-פעמית — ההודעות עובדות שנים",
];

const deliveryFormats = ["WAV 16bit/44.1kHz", "MP3 192kbps", "Opus (לטלפוניה IP)", "כל פורמט שמערכת הטלפוניה דורשת"];

export default function PhoneVoiceoverPage() {
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
          קריינות לטלפון.
          <br />
          <span className="text-[#D42B2B]">הרושם הראשון מתחיל כאן.</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          הודעת קבלה, תפריט שלוחות, הודעת נעדר — קול מקצועי שמשדר שהעסק שלכם ברמה אחרת.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            קבלו הצעת מחיר
          </Link>
          <Link href="/business/professional-voiceover" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            כל שירותי הקריינות
          </Link>
        </div>
      </header>

      {/* Services */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">מה מקליטים?</h2>
        <div className="flex flex-col gap-6">
          {phoneServices.map(({ emoji, t, d, example }) => (
            <div key={t} className="flex items-start gap-5 p-7 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all">
              <span className="text-3xl shrink-0 mt-1">{emoji}</span>
              <div className="flex-grow">
                <h3 className="font-serif text-lg font-bold mb-2">{t}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-3">{d}</p>
                <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-3">
                  <p className="text-zinc-600 text-xs font-mono text-right">{example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-10">למה זה חשוב?</h2>
          <ul className="flex flex-col gap-4">
            {whyMatters.map((item) => (
              <li key={item} className="flex items-center gap-3 justify-end p-4 bg-white border border-zinc-200 rounded-xl">
                <span className="text-zinc-700 text-sm">{item}</span>
                <CheckCircle2 size={16} className="text-[#D42B2B] shrink-0" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-8">פורמטי מסירה</h2>
        <p className="text-center text-zinc-500 mb-8">מגיע בכל פורמט שמערכת הטלפוניה שלכם דורשת.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deliveryFormats.map((fmt) => (
            <div key={fmt} className="text-center p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
              <Phone size={16} className="text-[#D42B2B] mx-auto mb-2" />
              <p className="font-bold text-xs text-zinc-700">{fmt}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">מוכנים לשדרג את הטלפון?</h2>
        <p className="text-zinc-400 mb-6 max-w-md mx-auto">שלחו לנו את הטקסט — נחזור עם הצעת מחיר תוך שעות.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            058-7-555-456 וואטסאפ
          </Link>
          <Link href="/business/professional-voiceover/corporate-voiceover" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            קריינות לסרטוני תדמית
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותים קשורים"
        pages={[
          { label: "קריינות לסרטון תדמית", href: "/business/professional-voiceover/corporate-voiceover", desc: "פרומו, הסבר, שיווק" },
          { label: "כל שירותי הקריינות", href: "/business/professional-voiceover", desc: "הודעות, סרטונים, הדרכות" },
          { label: "שיפור קול אונליין", href: "/online/vocal-fix", desc: "ניקוי רעשים ומיקסינג — מ-79 ₪" },
        ]}
      />
    </div>
  );
}
