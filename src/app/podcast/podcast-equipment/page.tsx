import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "ציוד פודקאסט מקצועי — מה צריך? | יקיר כהן הפקות",
  description:
    "מה הציוד שצריך לפודקאסט מקצועי? Sphere L22, מיקרופונים, ממשקי הקלטה, מצלמות — מדריך ציוד פודקאסט + אפשרות הקלטה באולפן מודיעין.",
  alternates: { canonical: `${SITE_URL}/podcast/podcast-equipment` },
  openGraph: {
    title: "ציוד פודקאסט מקצועי | יקיר כהן הפקות",
    description: "Sphere L22, מיקרופונים, ממשקים, מצלמות. מדריך ציוד + אולפן מודיעין.",
    url: `${SITE_URL}/podcast/podcast-equipment`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "ציוד פודקאסט מקצועי — מה צריך באמת?",
  "description": "מדריך ציוד פודקאסט: מיקרופונים, ממשקים, מצלמות. Sphere L22 ועוד.",
  "author": { "@type": "Person", "name": "יקיר כהן" },
  "publisher": { "@type": "Organization", "name": "יקיר כהן הפקות", "url": `${SITE_URL}` },
};

const equipmentTiers = [
  {
    tier: "רמת כניסה",
    price: "300-1,500 ₪",
    color: "border-zinc-200",
    items: [
      { name: "מיקרופון USB", desc: "Audio-Technica AT2020 USB — מחובר ישירות למחשב. פשוט, עובד." },
      { name: "עמדת מיקרופון", desc: "זרוע גמישה לשולחן — שומרת על מרחק אחיד מהפה." },
      { name: "אוזניות ניטור", desc: "Sony MDR-7506 — קלאסיק. כל מי שמקליט צריך אוזניות סגורות." },
    ],
  },
  {
    tier: "רמה בינונית",
    price: "2,000-6,000 ₪",
    color: "border-zinc-300",
    items: [
      { name: "מיקרופון XLR", desc: "Shure SM7B — ה-podcast mic הנפוץ ביותר. קול חם, מוחלק, מקצועי." },
      { name: "ממשק הקלטה", desc: "Focusrite Scarlett 2i2 — מחבר את המיקרופון למחשב באיכות גבוהה." },
      { name: "Pre-amp", desc: "Cloudlifter CL-1 — מחזק את האות לפני הממשק. משנה את הקול לגמרי." },
    ],
  },
  {
    tier: "רמה מקצועית (האולפן שלנו)",
    price: "15,000-40,000 ₪",
    color: "border-[#D42B2B]",
    featured: true,
    items: [
      { name: "Sphere L22 (Townsend Labs)", desc: "המיקרופון שמשנה את הגדרת האולפן. מדמה כל מיקרופון קלאסי בתוכנה." },
      { name: "ממשק Neve / SSL", desc: "Pre-amps אנלוגיים שמוסיפים חום ועומק שאי אפשר לקבל בדיגיטל." },
      { name: "חדר אקוסטי מבודד", desc: "הציוד הכי חשוב שלא קונים — הוא בנוי. בידוד, diffusion, absorption." },
      { name: "וידאו מולטי-קאם 4K", desc: "2-3 מצלמות סימולטניות לפרק עם קליפי סושיאל מוכנים." },
    ],
  },
];

export default function PodcastEquipmentPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      <header className="py-20 px-6 bg-white border-b border-zinc-100 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-zinc-200" />
          יקיר כהן הפקות · מדריך ציוד
          <span className="inline-block w-5 h-px bg-zinc-200" />
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          ציוד פודקאסט מקצועי.
          <br />
          <span className="text-[#D42B2B]">מה צריך באמת?</span>
        </h1>
        <p className="text-zinc-500 text-base max-w-lg mx-auto mb-6 leading-relaxed">
          מיקרופון USB להשקעה מלאה — מדריך ציוד שעוזר לבחור. ואם רוצים לדלג על הכל — יש לנו אולפן.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/podcast/podcast-studio" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            לאולפן הפודקאסט שלנו
          </Link>
          <Link href="/podcast" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
            מחירון פודקאסט
          </Link>
        </div>
      </header>

      {/* Equipment tiers */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-4">שלוש רמות ציוד</h2>
        <p className="text-center text-zinc-500 mb-12">הציוד לא עושה את הפודקאסט — אבל הוא מגדיר את תקרת האיכות.</p>
        <div className="flex flex-col gap-8">
          {equipmentTiers.map(({ tier, price, color, items, featured }) => (
            <div key={tier} className={`border-2 ${color} rounded-2xl p-8 ${featured ? "bg-zinc-900 text-white" : "bg-white"}`}>
              <div className="flex items-center justify-between mb-6">
                <span className={`font-serif text-xl font-bold ${featured ? "text-white" : "text-zinc-900"}`}>{tier}</span>
                <span className={`text-sm font-bold ${featured ? "text-[#D42B2B]" : "text-zinc-500"}`}>{price}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {items.map(({ name, desc }) => (
                  <div key={name} className={`p-5 rounded-xl ${featured ? "bg-white/10" : "bg-zinc-50"}`}>
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 size={14} className="text-[#D42B2B] mt-0.5 shrink-0" />
                      <p className={`font-bold text-sm ${featured ? "text-white" : "text-zinc-900"}`}>{name}</p>
                    </div>
                    <p className={`text-xs leading-relaxed ${featured ? "text-zinc-400" : "text-zinc-500"}`}>{desc}</p>
                  </div>
                ))}
              </div>
              {featured && (
                <div className="mt-6 text-center">
                  <Link href="/podcast/podcast-studio" className="inline-block bg-[#D42B2B] text-white px-8 py-3 rounded font-bold hover:bg-red-700 transition-colors">
                    הזמינו סשן באולפן שלנו
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skip the gear */}
      <section className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">רוצים לדלג על הציוד?</h2>
          <p className="text-zinc-500 mb-8 leading-relaxed">
            להשקיע בציוד מקצועי עולה הרבה כסף ודורש זמן ללמוד. אופציה אחרת — מגיעים לאולפן, מקליטים, יוצאים עם קובץ מוכן. הציוד כבר שם.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <h3 className="font-bold mb-2">קניית ציוד עצמאי</h3>
              <ul className="text-zinc-500 text-sm flex flex-col gap-1">
                <li>השקעה: 2,000-40,000 ₪</li>
                <li>עקומת למידה: חודשים</li>
                <li>תחזוקה: עליכם</li>
                <li>מתאים ל: מי שמקליט שבועי</li>
              </ul>
            </div>
            <div className="bg-zinc-900 text-white rounded-xl p-6">
              <h3 className="font-bold mb-2">אולפן יקיר כהן</h3>
              <ul className="text-zinc-300 text-sm flex flex-col gap-1">
                <li>עלות: 950 ₪ לפרק</li>
                <li>הגדרה: 0 דקות (הכל מוכן)</li>
                <li>תחזוקה: שלנו</li>
                <li>מתאים ל: כולם</li>
              </ul>
            </div>
          </div>
          <Link href="/podcast/podcast-studio" className="inline-block mt-8 bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            לפרטי האולפן
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-900 text-white text-center">
        <h2 className="font-serif text-2xl font-bold mb-3">שאלות על ציוד?</h2>
        <p className="text-zinc-400 mb-6">שלחו הודעה — נעזור לבחור מה מתאים לתקציב ולצרכים שלכם.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors">
            058-7-555-456 וואטסאפ
          </Link>
          <Link href="/podcast/podcast-production" className="border border-white/30 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all">
            שירותי הפקה מלאה
          </Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">*תוכן זה נוצר בסיוע בינה מלאכותית</p>
      </section>

      <RelatedPages
        title="שירותי פודקאסט"
        pages={[
          { label: "אולפן פודקאסט", href: "/podcast/podcast-studio", desc: "Sphere L22 + וידאו מולטי-קאם" },
          { label: "הפקת פודקאסט מלאה", href: "/podcast/podcast-production", desc: "הקלטה, עריכה, הפצה מ-950 ₪" },
          { label: "מחירון פודקאסט", href: "/podcast", desc: "כל החבילות + מחשבון מחיר" },
        ]}
      />
    </div>
  );
}
