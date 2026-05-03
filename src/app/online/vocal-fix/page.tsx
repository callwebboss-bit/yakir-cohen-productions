import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Upload, Zap, Download } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "שיפור קול אונליין — ניקוי רעשים, תיקון זיופים, מיקסינג | יקיר כהן הפקות",
  description:
    "שירותי שיפור קול אונליין: ניקוי רעשים, תיקון זיופים (Melodyne), נרמול עוצמה, מיקסינג ושיפור תמונה. שולחים קובץ, מקבלים תוצאה. מ-79 ₪.",
  alternates: { canonical: "https://www.yakircohen.com/online/vocal-fix" },
  openGraph: {
    title: "שיפור קול אונליין | יקיר כהן הפקות",
    description: "ניקוי רעשים, תיקון זיופים, מיקסינג. שולחים קובץ, מקבלים תוצאה. מ-79 ₪.",
    url: "https://www.yakircohen.com/online/vocal-fix",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "שיפור קול אונליין — יקיר כהן הפקות",
  "description": "שיפור קול אונליין: ניקוי רעשים, תיקון זיופים, מיקסינג. מ-79 ₪.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "יקיר כהן הפקות",
    "telephone": "+972-58-7555456",
    "url": "https://www.yakircohen.com",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "שירותי שיפור קול",
    "itemListElement": [
      { "@type": "Offer", "name": "ניקוי רעשים", "price": "79", "priceCurrency": "ILS" },
      { "@type": "Offer", "name": "תיקון זיופים", "price": "150", "priceCurrency": "ILS" },
      { "@type": "Offer", "name": "מיקסינג", "price": "350", "priceCurrency": "ILS" },
    ],
  },
};

const services = [
  {
    href: "/online/vocal-fix/ניקוי-רעשים",
    title: "ניקוי רעשים",
    price: "מ-79 ₪",
    desc: "מסירים רעש רקע, הד, ונשימות לא רצויות. מקבלים קובץ נקי ומקצועי.",
    tags: ["רעש מזגן", "הד חדר", "נשימות"],
  },
  {
    href: "/online/vocal-fix/pitch-correction",
    title: "תיקון זיופים",
    price: "מ-150 ₪",
    desc: "תיקון זיופי שירה עם Melodyne. שומרים על הטבעיות, מתקנים את מה שמפריע.",
    tags: ["Melodyne", "Auto-Tune טבעי", "שמירת טבעיות"],
  },
  {
    href: "/online/vocal-fix/volume-fix",
    title: "נרמול עוצמה",
    price: "מ-79 ₪",
    desc: "כל החלקים בעוצמה אחידה. לא חזק מדי, לא שקט מדי. Loudness LUFS תקני.",
    tags: ["LUFS", "Compression", "עוצמה אחידה"],
  },
  {
    href: "/online/vocal-fix/mixing",
    title: "מיקסינג",
    price: "מ-350 ₪",
    desc: "כל הכלים יחד — EQ, Reverb, Balance. תוצאה שנשמעת כמו אולפן.",
    tags: ["EQ", "Reverb", "Balance"],
  },
  {
    href: "/online/vocal-fix/audio-repair",
    title: "תיקון שמע",
    price: "מ-120 ₪",
    desc: "קטיעות, Clipping, נפילות — מה שנשמע שבור, אנחנו מתקנים.",
    tags: ["Clipping", "קטיעות", "שחזור"],
  },
  {
    href: "/online/vocal-fix/photo-enhance",
    title: "שיפור תמונה AI",
    price: "מ-79 ₪",
    desc: "שיפור תמונות עם AI — רזולוציה, ניקיון, הסרת רעש. מהיר ומקצועי.",
    tags: ["AI", "רזולוציה", "ניקיון"],
  },
];

const steps = [
  { icon: <Upload size={24} />, title: "שולחים קובץ", desc: "שולחים לנו את הקובץ בוואטסאפ או במייל עם הוראות." },
  { icon: <Zap size={24} />, title: "עובדים על זה", desc: "הצוות מטפל בקובץ בהתאם לשירות שנבחר." },
  { icon: <Download size={24} />, title: "מקבלים תוצאה", desc: "מקבלים קובץ מעובד תוך 24-48 שעות." },
];

export default function VocalFixPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-white border-b border-zinc-100 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-zinc-200" />
          יקיר כהן הפקות · שירותים אונליין
          <span className="inline-block w-5 h-px bg-zinc-200" />
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          שיפור קול אונליין.
          <br />
          <span className="text-[#D42B2B]">שולחים קובץ. מקבלים תוצאה.</span>
        </h1>
        <p className="text-zinc-500 text-base max-w-lg mx-auto mb-6 leading-relaxed">
          לא צריך להגיע לאולפן. שולחים את הקובץ, אנחנו מטפלים, מקבלים קובץ גמור תוך 24-48 שעות.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            שלחו קובץ עכשיו
          </Link>
          <Link href="/online/online-ai-pricing" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
            מחירון מלא
          </Link>
        </div>
      </header>

      {/* Example Video */}
      <section className="py-16 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold mb-6">ראו דוגמה — לפני ואחרי</h2>
          <p className="text-zinc-500 text-base mb-8 max-w-2xl mx-auto">
            שמעו איך אנחנו משפרים קול: ניקוי רעשים, תיקון זיופים, מיקסינג מקצועי.
          </p>
          <div className="aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/2apMsrmEsDs"
              title="דוגמה לשיפור קול — יקיר כהן הפקות"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-10">איך זה עובד?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-3 text-center">
                <div className="w-14 h-14 bg-zinc-900 text-white rounded-2xl flex items-center justify-center">
                  {icon}
                </div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">השירותים שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ href, title, price, desc, tags }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-4 p-8 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-xl font-bold text-zinc-900 group-hover:text-[#D42B2B] transition-colors">
                  {title}
                </span>
                <span className="font-bold text-[#D42B2B] text-sm">{price}</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed flex-grow">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="bg-zinc-100 text-zinc-600 text-xs px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs font-bold text-[#D42B2B] mt-auto">פרטים ← </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 p-6 bg-zinc-50 border border-zinc-200 rounded-2xl flex items-start gap-3">
          <CheckCircle2 size={18} className="text-[#D42B2B] mt-0.5 shrink-0" />
          <p className="text-zinc-600 text-sm leading-relaxed text-right">
            כל המחירים אינם כוללים מע&quot;מ (18%). זמן טיפול: 24-48 שעות עסקים.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">מוכנים לשלוח קובץ?</h2>
        <p className="text-zinc-400 mb-6">שלחו לנו בוואטסאפ — נחזור אליכם עם הצעת מחיר תוך שעות.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            058-7-555-456 וואטסאפ
          </Link>
          <Link href="/studio/recording-song-modiin" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            מעדיפים להקליט באולפן?
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותים קשורים"
        pages={[
          { label: "הקלטת שירים באולפן", href: "/studio/recording-song-modiin", desc: "תוצאה מקסימלית — מגיעים לאולפן" },
          { label: "הפקת פודקאסט", href: "/podcast/podcast-production", desc: "מ-950 ₪ — הקלטה, עריכה, הפצה" },
          { label: "מחירון", href: "/studio/pricing", desc: "כל המחירים במקום אחד" },
        ]}
      />
    </div>
  );
}
