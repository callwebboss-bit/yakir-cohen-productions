import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import AudioCompare from "@/components/AudioCompare";

export const metadata: Metadata = {
  title: "ברכת חתן וכלה — הקלטה מקצועית לחופה | יקיר כהן הפקות",
  description:
    "הקלטת ברכה מהחתן לכלה ומהכלה לחתן — נדר קולי, הקדשה, מילות אהבה. מוקלט מקצועי ומושמע בחופה. מ-990 ₪.",
  alternates: { canonical: `${SITE_URL}/studio/blessings/bride-groom-blessing` },
  openGraph: {
    title: "ברכת חתן וכלה | יקיר כהן הפקות",
    description: "נדר קולי, הקדשה, מילות אהבה. מ-990 ₪.",
    url: `${SITE_URL}/studio/blessings/bride-groom-blessing`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ברכת חתן וכלה — יקיר כהן הפקות",
  "description": "הקלטת ברכה מהחתן לכלה ומהכלה לחתן — נדר קולי מוקלט מקצועי. מ-990 ₪.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
  "offers": { "@type": "Offer", "price": "990", "priceCurrency": "ILS" },
};

const ideas = [
  { emoji: "💍", t: "נדר לבן/בת הזוג", d: "אמרתם כבר לעצמכם מה תאמרו בחופה — עכשיו תגידו את זה בהקלטה, בקול שנשמע מושלם." },
  { emoji: "💌", t: "מכתב אהבה קולי", d: "מה שקשה לומר פנים אל פנים — קל יותר לאולפן. מוקלט, ומושמע בחופה בזמן הנכון." },
  { emoji: "🎵", t: "שיר ייעודי לבן/בת הזוג", d: "שיר שנכתב עליהם, עם שמם, עם הסיפור שלכם — הפתעה שתגרום לדמעות." },
  { emoji: "📖", t: "ציטוט / פסוק אישי", d: "פסוק שמשמעותי לשניכם — מוקלט בקול, עם ליווי מוזיקלי, לרגע הנכון בחופה." },
];

export default function BrideGroomBlessingPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · ברכות לחתונה
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-zinc-900" style={{ fontFamily: '"Frank Ruhl Libre", serif' }}>
          ברכת חתן וכלה.
          <br />
          <span className="text-[#D42B2B]">מה שבלב — נשמע נכון.</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8">
          נדר קולי, מכתב אהבה, שיר ייעודי — ברכה מוקלטת מקצועית שמושמעת בחופה ונשארת לנצח.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            הזמינו ברכה
          </Link>
          <Link href="/studio/blessings" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
            כל סוגי הברכות
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">מה אפשר להקליט?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ideas.map(({ emoji, t, d }) => (
            <div key={t} className="flex items-start gap-5 p-7 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all">
              <span className="text-3xl shrink-0">{emoji}</span>
              <div>
                <h3 className="font-serif text-lg font-bold mb-2">{t}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">למה באולפן ולא לבד?</h2>
          <p className="text-zinc-500 leading-relaxed mb-8">
            ניסיתם להקליט ברכה בסלולרי — ויצא עם רעש מזגן, הד חדר, ועוצמה לא אחידה. באולפן מקבלים קובץ שנשמע כמו שהרגש מרגיש — נקי, ברור, מרגש.
          </p>
          <ul className="flex flex-col gap-3 max-w-md mx-auto text-right">
            {[
              "חדר אקוסטי — אפס רעשי רקע",
              "מיקרופון מקצועי שמרים כל ניואנס",
              "עריכה שמוסיפה עומק ורגש",
              "קובץ מוכן להשמעה מהרגע שמתחברים לAUX",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 justify-end">
                <span className="text-zinc-700">{item}</span>
                <CheckCircle2 size={16} className="text-[#D42B2B] shrink-0" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Audio demos */}
      <section className="py-16 px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold mb-2 text-center">שמעו את ההבדל בעצמכם</h2>
        <p className="text-zinc-500 text-sm text-center mb-10">
          הקלטות אמיתיות מהאולפן — כך נשמעת ברכה לפני ואחרי עריכה מקצועית
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AudioCompare
            beforeSrc="/assets/audio/brahot-Before.mp3"
            afterSrc="/assets/audio/brahot-AFTER.mp3"
            title="ברכה מקצועית"
            beforeLabel="לפני עריכה"
            afterLabel="אחרי עריכה"
            beforeDesc="קול גולמי — כמו שנקלט בטלפון"
            afterDesc="אחרי ניקוי, EQ ומיקס באולפן"
          />
          <AudioCompare
            beforeSrc="/assets/audio/Birkat-Cala-Before.mp3"
            afterSrc="/assets/audio/Birkat-Cala-AFTER.mp3"
            title="ברכת כלה"
            beforeLabel="לפני עריכה"
            afterLabel="אחרי עריכה"
            beforeDesc="הקלטה גולמית של ברכת הכלה"
            afterDesc="לאחר עריכה — נקי, רגשי, מוכן לחופה"
          />
        </div>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto w-full text-center">
        <h2 className="font-serif text-2xl font-bold mb-6">מחיר</h2>
        <div className="bg-zinc-900 text-white rounded-2xl p-8 max-w-sm mx-auto">
          <p className="text-5xl font-serif font-black text-[#D42B2B] mb-2">990 ₪</p>
          <p className="text-zinc-400 text-sm mb-6">לברכה / שיר אחד</p>
          <ul className="flex flex-col gap-2 text-sm text-right">
            {["הקלטה בחדר אקוסטי", "טכנאי סאונד", "תיקון זיופים לשיר", "מיקס גמור", "WAV + MP3"].map((f) => (
              <li key={f} className="flex items-center gap-2 justify-end">
                <span className="text-zinc-300">{f}</span>
                <CheckCircle2 size={14} className="text-[#D42B2B] shrink-0" />
              </li>
            ))}
          </ul>
          <p className="text-zinc-600 text-xs mt-4">לא כולל מע&quot;מ (18%)</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">הזמינו ברכה לחתן/כלה</h2>
        <p className="text-zinc-400 mb-6">שלחו הודעה עם התאריך ומה אתם רוצים להקליט.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">058-7-555-456 וואטסאפ</Link>
          <Link href="/studio/blessings/wedding-entrance" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">ברכה לכניסה לחופה</Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="ברכות וחתונה"
        pages={[
          { label: "ברכה לכניסה לחופה", href: "/studio/blessings/wedding-entrance", desc: "קול שמלווה את הכניסה" },
          { label: "שיר מקורי לחתונה", href: "/studio/recording-song-modiin/original-song", desc: "שיר שנכתב עליכם" },
          { label: "כל הברכות", href: "/studio/blessings", desc: "לכל אירוע וכל סוג" },
        ]}
      />
    </div>
  );
}
