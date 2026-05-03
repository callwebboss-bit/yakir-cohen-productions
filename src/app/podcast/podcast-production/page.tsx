import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mic, Edit3, Share2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import YouTube from "@/components/ui/YouTube";
import PriceReveal from "@/components/PriceReveal";

export const metadata: Metadata = {
  title: "הפקת פודקאסט מקצועית — מרעיון לשידור | יקיר כהן הפקות",
  description:
    "הפקת פודקאסט מקצועית במודיעין — הקלטה, עריכה, עיצוב סאונד והפצה. מ-1,500 ₪. ציוד Sphere L22. עסקים, מומחים ויוצרי תוכן.",
  alternates: { canonical: "https://www.yakircohen.com/podcast/podcast-production" },
  openGraph: {
    title: "הפקת פודקאסט מקצועית | יקיר כהן הפקות",
    description: "מ-1,500 ₪. הקלטה, עריכה, הפצה. אולפן מודיעין.",
    url: "https://www.yakircohen.com/podcast/podcast-production",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "הפקת פודקאסט מקצועית — יקיר כהן הפקות מודיעין",
  "description": "מה כולל תהליך הפקת פודקאסט מלא? הקלטה, עריכה, עיצוב סאונד והפצה — מ-1,500 ₪.",
  "thumbnailUrl": "https://img.youtube.com/vi/1O0isV7Zljg/maxresdefault.jpg",
  "uploadDate": "2024-01-01",
  "embedUrl": "https://www.youtube.com/embed/1O0isV7Zljg",
  "url": "https://www.youtube.com/watch?v=1O0isV7Zljg",
  "publisher": { "@type": "Organization", "name": "יקיר כהן הפקות", "url": "https://www.yakircohen.com" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "מה כלול בהפקת פודקאסט?",
      "acceptedAnswer": { "@type": "Answer", "text": "הקלטה, עריכה, מיקס ומאסטרינג — מוכן להעלאה ל-Spotify וכל הפלטפורמות. מחיר מלא גלוי לאחר פנייה." },
    },
    {
      "@type": "Question",
      "name": "כמה פרקים אפשר להקליט בסשן אחד?",
      "acceptedAnswer": { "@type": "Answer", "text": "בממוצע 2–3 פרקים של 30 דקות בסשן יחיד." },
    },
    {
      "@type": "Question",
      "name": "האם צריך ניסיון קודם?",
      "acceptedAnswer": { "@type": "Answer", "text": "לא. מלווים אתכם מתחילת הפרק הראשון ועד להפצה — ללא תלות בניסיון." },
    },
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "הפקת פודקאסט מקצועית — יקיר כהן הפקות",
  "description": "הפקת פודקאסט מקצועית — הקלטה, עריכה, עיצוב סאונד והפצה. מ-1,500 ₪.",
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
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "חבילות פודקאסט",
    "itemListElement": [
      { "@type": "Offer", "name": "הקלטה בלבד", "price": "950", "priceCurrency": "ILS" },
      { "@type": "Offer", "name": "הקלטה + עריכה", "price": "1500", "priceCurrency": "ILS" },
      { "@type": "Offer", "name": "מכונת תוכן סושיאל", "price": "2800", "priceCurrency": "ILS" },
    ],
  },
};

const phases = [
  {
    icon: <Mic size={28} />,
    title: "הפקה מוקדמת",
    items: ["תכנון מבנה הפרק", "הכנת שאלות ונושאים", "ייעוץ אמנותי"],
  },
  {
    icon: <Edit3 size={28} />,
    title: "הקלטה ועריכה",
    items: ["הקלטה בציוד Sphere L22", "ניקוי רעשים ו-EQ", "עריכת תוכן + הסרת שגיאות"],
  },
  {
    icon: <Share2 size={28} />,
    title: "עיצוב והפצה",
    items: ["מוזיקת רקע ו-jingles", "שלדה מוכנה להפצה", "קבצי MP3 + WAV"],
  },
];

export default function PodcastProductionPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />
      <StructuredData data={videoSchema} />
      <StructuredData data={faqSchema} />

      {/* Hero */}
      <header className="bg-white border-b border-zinc-100 text-center py-16 px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-zinc-200" />
          יקיר כהן הפקות · מודיעין
          <span className="inline-block w-5 h-px bg-zinc-200" />
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          הפקת פודקאסט מקצועית.
          <br />
          <span className="text-[#D42B2B]">מרעיון לשידור — בלי כאב ראש.</span>
        </h1>
        <p className="text-zinc-500 text-base max-w-lg mx-auto mb-6 leading-relaxed">
          מומחים, בעלי עסקים ויוצרי תוכן — הפודקאסט שלכם יוצר נוכחות, אמון ולידים.
          אנחנו דואגים לכל השאר.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            קבעו פגישת ייעוץ
          </Link>
          <Link href="/podcast" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
            מחירון פודקאסט
          </Link>
        </div>
        <p className="text-xs text-zinc-400 mt-4">כל המחירים אינם כוללים מע&quot;מ</p>
      </header>

      {/* Phases */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">
          הפקה מקצה לקצה — שלושה שלבים
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map(({ icon, title, items }) => (
            <article key={title} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-zinc-900 text-white rounded-xl flex items-center justify-center">
                {icon}
              </div>
              <h3 className="font-serif text-xl font-bold">{title}</h3>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 justify-end text-sm text-zinc-600">
                    <span>{item}</span>
                    <CheckCircle2 size={14} className="text-[#D42B2B] shrink-0" />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* For whom */}
      <section className="py-20 px-6 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">למי זה מתאים?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { t: "בעלי עסקים", d: "הפודקאסט שלכם הוא ערוץ שיווק ישיר. מדברים עם לקוחות, יוצרים אמון, סוגרים עסקאות." },
              { t: "מומחים ויועצים", d: "הופכים ידע לתוכן שאנשים מחפשים. Thought Leadership שמשרת אתכם 24/7." },
              { t: "ארגונים ומוסדות", d: "תוכן פנים-ארגוני, השתלמויות, ראיונות עם מנהלים. הכל בפורמט מקצועי." },
              { t: "יוצרי תוכן", d: "עלו לרמה הבאה. ממיקרופון USB לאולפן מקצועי — ההבדל נשמע בפרק הראשון." },
            ].map(({ t, d }) => (
              <div key={t} className="border border-white/10 rounded-2xl p-6">
                <h3 className="font-serif text-lg font-bold mb-2">{t}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-2">
            אמת על תמחור פודקאסט
          </h2>
          <p className="text-center text-zinc-500 mb-6 text-sm">
            אותו מוצר, מחיר שונה לכל לקוח — ולמה זה בסדר גמור
          </p>
          <YouTube
            url="https://www.youtube.com/watch?v=1O0isV7Zljg"
            title="אמת על תמחור פודקאסט — יקיר כהן הפקות"
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-10">חבילות הפקת פודקאסט</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: "הקלטה בלבד", p: "950", u: "פרק", f: ["הקלטה מקצועית", "ניקוי רעשים", "קובץ WAV + MP3"] },
            { t: "הקלטה + עריכה", p: "1,500", u: "פרק", f: ["הכל מחבילת הקלטה", "עריכת תוכן", "מוזיקת רקע"], popular: true },
            { t: "מכונת תוכן", p: "2,800", u: "פרק", f: ["הכל מחבילת עריכה", "וידאו מולטי-קאם", "קליפי סושיאל"] },
          ].map(({ t, p, u, f, popular }) => (
            <div
              key={t}
              className={`rounded-2xl p-8 flex flex-col gap-4 border ${
                popular
                  ? "bg-zinc-900 text-white border-zinc-900 md:scale-105 relative"
                  : "bg-white border-zinc-200"
              }`}
            >
              {popular && (
                <span className="absolute -top-3 right-1/2 translate-x-1/2 bg-[#D42B2B] text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                  הכי פופולרי
                </span>
              )}
              <h3 className="font-serif text-xl font-bold">{t}</h3>
              <PriceReveal price={`₪${p} / ${u}`} service={t} dark={!!popular} />
              <ul className="flex flex-col gap-2">
                {f.map((item) => (
                  <li key={item} className="flex items-center gap-2 justify-end text-sm">
                    <span className={popular ? "text-zinc-300" : "text-zinc-600"}>{item}</span>
                    <CheckCircle2 size={14} className="text-[#D42B2B] shrink-0" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-zinc-400 mt-6">המחירים אינם כוללים מע&quot;מ (18%)</p>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-zinc-50 border-t border-zinc-200 text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">מוכנים להתחיל?</h2>
        <p className="text-zinc-500 mb-6">שלחו הודעה ונקבע פגישת ייעוץ קצרה.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            058-7-555-456 וואטסאפ
          </Link>
          <Link href="/podcast/podcast-studio" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
            לאולפן הפודקאסט
          </Link>
        </div>
        <p className="text-zinc-400 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>
    </div>
  );
}
