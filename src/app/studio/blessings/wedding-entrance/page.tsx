import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "ברכה לכניסת חתן וכלה לחופה — הקלטה מקצועית | יקיר כהן הפקות",
  description:
    "הקלטת ברכה לכניסה לחופה — קול מוקלט שמלווה את הכניסה, ברכה מהורים, שיר כניסה עם מילים. מ-990 ₪ כולל הכל.",
  alternates: { canonical: `${SITE_URL}/studio/blessings/wedding-entrance` },
  openGraph: {
    title: "ברכה לכניסה לחופה | יקיר כהן הפקות",
    description: "קול מוקלט לכניסה לחופה. מ-990 ₪.",
    url: `${SITE_URL}/studio/blessings/wedding-entrance`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ברכה לכניסת חתן וכלה לחופה — יקיר כהן הפקות",
  "description": "הקלטת ברכה לכניסה לחופה — קול מוקלט שמלווה את הכניסה. מ-990 ₪.",
  "provider": { "@type": "LocalBusiness", "name": "יקיר כהן הפקות", "telephone": "+972-58-7555456" },
  "offers": { "@type": "Offer", "price": "990", "priceCurrency": "ILS" },
};

const options = [
  { emoji: "🎤", t: "ברכה מוקלטת להשמעה", d: "ברכה מהורים, מחבר קרוב, מאיש שמשמעותי לזוג — מוקלטת ומושמעת בזמן הכניסה." },
  { emoji: "🎵", t: "שיר כניסה עם מילים", d: "שיר שנכתב על הזוג, עם שמות, עם הסיפור שלהם — נשמע בדיוק ברגע שנכנסים." },
  { emoji: "💬", t: "נדר / הקדשה קולית", d: "נדר שנאמר ומוקלט מראש — נשמע בחופה עם ליווי מוזיקלי מתאים." },
];

export default function WeddingEntranceBlessingPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-50 border-b border-zinc-200 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · ברכות לחתונה
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-zinc-900" style={{ fontFamily: '"Frank Ruhl Libre", serif' }}>
          ברכה לכניסה לחופה.
          <br />
          <span className="text-[#D42B2B]">קול שמלווה את הרגע הכי גדול.</span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-8">
          ברכה מוקלטת, שיר כניסה עם שמות, נדר קולי — מה שנשמע בזמן הכניסה לחופה ונחרט בזיכרון.
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

      <section className="py-20 px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">מה אפשר להקליט?</h2>
        <div className="flex flex-col gap-6">
          {options.map(({ emoji, t, d }) => (
            <div key={t} className="flex items-start gap-5 p-7 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all">
              <span className="text-3xl shrink-0">{emoji}</span>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2">{t}</h3>
                <p className="text-zinc-500 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold mb-6">מחיר ומה כלול</h2>
          <div className="bg-white border border-zinc-200 rounded-2xl p-8 mb-6 max-w-md mx-auto">
            <p className="text-5xl font-serif font-black text-[#D42B2B] mb-2">990 ₪</p>
            <p className="text-zinc-500 text-sm mb-4">לשיר / ברכה אחת</p>
            <ul className="flex flex-col gap-2 text-sm text-right">
              {["הקלטה בחדר אקוסטי", "טכנאי סאונד", "תיקון זיופים (לשיר)", "מיקס ומאסטרינג", "WAV + MP3 מוכן להשמעה באירוע"].map((f) => (
                <li key={f} className="flex items-center gap-2 justify-end">
                  <span className="text-zinc-600">{f}</span>
                  <CheckCircle2 size={14} className="text-[#D42B2B] shrink-0" />
                </li>
              ))}
            </ul>
          </div>
          <p className="text-zinc-400 text-xs">המחיר אינו כולל מע&quot;מ (18%)</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">הזמינו ברכה לכניסה לחופה</h2>
        <p className="text-zinc-400 mb-6">שלחו הודעה עם התאריך — נקבע סשן בהתאם.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">058-7-555-456 וואטסאפ</Link>
          <Link href="/studio/blessings/bride-groom-blessing" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">ברכת חתן וכלה</Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="ברכות וחתונה"
        pages={[
          { label: "ברכת חתן וכלה", href: "/studio/blessings/bride-groom-blessing", desc: "נדר ומילות אהבה מוקלטים" },
          { label: "שיר לחתונה", href: "/studio/recording-song-modiin", desc: "שיר מקורי לכניסה לחופה" },
          { label: "DJ לחתונה", href: "/events/dj-events", desc: "מוזיקה לכל הערב מ-12,650 ₪" },
        ]}
      />
    </div>
  );
}
