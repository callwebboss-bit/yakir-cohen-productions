import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import YouTube from "@/components/ui/YouTube";

export const metadata: Metadata = {
  title: "אולפן פודקאסט נייד — מגיע אליכם | יקיר כהן הפקות מודיעין",
  description:
    "אולפן הקלטות ניד שמגיע למשרד, לבית או לאולם. Sony 4K, Shure SM7B, עיבוד AI. תוצר מוגמר תוך 24-48 שעות. Modi'in.",
  alternates: { canonical: "https://www.yakircohen.com/podcast/mobile-studio" },
  openGraph: {
    title: "אולפן פודקאסט נייד — מגיע אליכם | יקיר כהן הפקות",
    description: "Sony 4K, Shure SM7B, עיבוד AI. תוצר מוגמר תוך 24-48 שעות.",
    url: "https://www.yakircohen.com/podcast/mobile-studio",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "אולפן פודקאסט נייד — יקיר כהן הפקות",
  description: "אולפן הקלטות ניד שמגיע אליכם. Sony 4K, Shure SM7B/EV RE20, עיבוד AI אקוסטי. מ-Modi'in.",
  provider: {
    "@type": "LocalBusiness",
    name: "יקיר כהן הפקות",
    telephone: "+972-58-7555456",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Modi'in",
      addressCountry: "IL",
    },
  },
  areaServed: "Israel",
};

const features = [
  {
    title: "איכות קולנועית",
    desc: "מערך מצלמות Sony 4K עם תאורה מקצועית. אותה תמונה שרואים בנטפליקס — אצלכם בסביבה הטבעית.",
  },
  {
    title: "סאונד ברמת שידור",
    desc: "מיקרופוני קצה Shure SM7B ו-EV RE20. בידוד אקוסטי מבוסס AI שמנקה רעשים ומשמר את הרגש הטבעי.",
  },
  {
    title: "לא צריך לנסוע",
    desc: "לוח זמנים צפוף? אתם רק יושבים ומדברים. אנחנו מביאים הכל ומסדרים — ויוצאים כשהתוצר מוכן.",
  },
  {
    title: "אספקה מהירה",
    desc: "חומרי הגלם אצלכם בסוף הסשן. תוצר מוגמר — תוך 24 עד 48 שעות.",
  },
];

export default function MobileStudioPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-zinc-900 text-white text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
          יקיר כהן הפקות · פודקאסט נייד
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          האולפן מגיע אליכם
          <br />
          <span className="text-[#D42B2B]">בלי לצאת מהמשרד.</span>
        </h1>
        <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          אנחנו מביאים את חוויית האולפן המלאה עד פתח הדלת — Sony 4K, Shure SM7B, עיבוד AI.
          אתם רק צריכים לשבת ולדבר.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            קבעו סשן נייד
          </Link>
          <Link href="/podcast/podcast-production" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            אולפן קבוע במודיעין
          </Link>
        </div>
      </header>

      {/* Features */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">מה מגיע אליכם</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map(({ title, desc }) => (
            <div key={title} className="p-7 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-900 transition-all">
              <h3 className="font-serif text-lg font-bold mb-3 text-zinc-900">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio video */}
      <section className="py-10 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-center mb-2">
            ככה זה נראה בפועל
          </h2>
          <p className="text-center text-zinc-500 mb-6 text-sm">
            סשן הקלטה ניד — סביבה אמיתית, איכות אולפן
          </p>
          <YouTube
            url="https://www.youtube.com/watch?v=UECS5GpAck4"
            title="אולפן פודקאסט נייד — יקיר כהן הפקות"
          />
        </div>
      </section>

      {/* For whom */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-2xl font-bold text-center mb-10">למי זה מתאים</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: "בעלי עסקים ומנכ\"לים", d: "ראיון, מאמר מדובר, הרצאה מוקלטת — בלי לצאת מהמשרד." },
            { t: "פודקאסטרים", d: "הפיקו מכל מקום. ביתי, קפה, אולפן שוכרים — אנחנו מסתגלים לחלל." },
            { t: "חברות ומוסדות", d: "תוכן פנים-ארגוני, ראיונות עובדים, הדרכות — בסטנדרט שידור." },
          ].map(({ t, d }) => (
            <div key={t} className="p-6 bg-zinc-50 border border-zinc-200 rounded-2xl flex flex-col gap-3">
              <h3 className="font-serif text-lg font-bold text-zinc-900">{t}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-6 bg-zinc-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold mb-10">מה כלול בסשן</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-right max-w-lg mx-auto">
            {[
              "הגעה, הקמה וסגירה",
              "מצלמות Sony 4K רב-זוויתיות",
              "מיקרופון Shure SM7B / EV RE20",
              "תאורה מקצועית",
              "ניקוי רעשים AI בזמן אמת",
              "חומרי גלם בסוף הסשן",
              "תוצר מוגמר תוך 24-48 שעות",
              "MP3 + WAV + קבצי וידאו",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 justify-end">
                <span className="text-zinc-300 text-sm">{item}</span>
                <CheckCircle2 size={14} className="text-[#D42B2B] shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-zinc-50 border-t border-zinc-200 text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">לזיכרון שלכם אין הזדמנות שנייה</h2>
        <p className="text-zinc-500 mb-6 text-sm leading-relaxed max-w-md mx-auto">
          אנחנו כאן כדי להבטיח שהוא יהיה מושלם.
          שלחו הודעה עם תיאור הפרויקט ואנחנו נחזור עם הצעה.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            058-7-555-456 וואטסאפ
          </Link>
        </div>
        <p className="text-zinc-400 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותים קשורים"
        pages={[
          { label: "הפקת פודקאסט", href: "/podcast/podcast-production", desc: "אולפן קבוע במודיעין" },
          { label: "אולפן הפודקאסט", href: "/podcast/podcast-studio", desc: "ציוד ומפרט טכני" },
          { label: "שירותים לעסקים", href: "/business", desc: "קריינות, הגברה, הפקת תוכן" },
        ]}
      />
    </div>
  );
}
