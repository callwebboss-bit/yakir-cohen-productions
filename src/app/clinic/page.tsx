import { SITE_URL } from "@/lib/site-url";
import React from "react";
import Link from "next/link";
import { Volume2, Mic, Play, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";
import { BLUR_DATA_URL } from "@/lib/blur";

const CLINIC_IMAGE = "/assets/images/recording-studio/יקיר כהן הפקות באולפן.webp";

export const metadata: Metadata = {
  title: "קליניקה לקול במודיעין | עבודה על דיבור, קול וביטחון",
  description: "מרחב עבודה אישי על קול, דיבור ועמידה מול אנשים. תהליך מדויק, קצב ברור, ושיחה אמיתית בלי רעש מסביב.",
  alternates: {
    canonical: `${SITE_URL}/clinic`,
  },
};

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "קליניקה לקול - יקיר כהן",
  description: "עבודה על קול, דיבור וביטחון מול אנשים במודיעין.",
  image: `${SITE_URL}${CLINIC_IMAGE}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Modi'in",
    addressCountry: "IL",
  },
};

export default function ClinicPage() {
  return (
    <div className="flex flex-col">
      <StructuredData data={clinicSchema} />
      <header className="bg-zinc-100 py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <article>
            <h1 className="font-serif text-6xl font-bold mb-8">קליניקה לקול</h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-10 max-w-lg">
              מקום שקט לעבוד בו על דיבור, קול וביטחון. לא עוד טיפים באוויר. עבודה מסודרת, הקשבה אמיתית, ותרגול שאפשר לקחת החוצה לחיים עצמם.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact?topic=clinic"
                className="bg-brand-red text-white px-10 py-5 rounded font-bold shadow-xl hover:bg-red-700 transition-colors"
              >
                קביעת שיחת היכרות
              </Link>
            </div>
          </article>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-200 shadow-2xl">
            <Image
              src={CLINIC_IMAGE}
              alt="יקיר כהן בקליניקה לקול במודיעין"
              fill
              priority
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
        </div>
      </header>

      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <h2 className="font-serif text-4xl font-bold text-center mb-16">איך זה עובד</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TherapyItem icon={<Volume2 />} title="עבודה על הקול" desc="נשימה, עומס, הרגלי דיבור ושמיעה עצמית. מתחילים מהבסיס כדי שהשינוי יחזיק." />
          <TherapyItem icon={<Mic />} title="עמידה מול אנשים" desc="מי שמתקשה לדבר מול קהל או מול סמכות צריך מקום לתרגל בו באמת, לא רק לדבר על זה." />
          <TherapyItem icon={<Play />} title="דיבור ברור" desc="קצב, חיתוך מילים ונוכחות. המטרה היא לא להישמע מושלם, אלא להרגיש יציב ולהיות מובן." />

          <article className="md:col-span-2 lg:col-span-3 bg-zinc-900 text-white p-12 rounded-2xl flex flex-col md:flex-row items-center gap-12 mt-8">
            <div className="flex-grow">
              <h3 className="font-serif text-3xl font-bold mb-4">האולפן הוא חלק מהעבודה</h3>
              <p className="text-zinc-300 text-lg leading-relaxed">
                כששומעים את עצמכם דרך ציוד טוב, משהו מסתדר. פתאום הקול מקבל צורה ברורה יותר, והעבודה נהיית מדויקת יותר.
              </p>
              <div className="mt-8 flex gap-3 flex-wrap">
                <span className="bg-white/10 px-4 py-1.5 rounded text-xs font-black tracking-widest border border-white/20">עבודה אחד על אחד</span>
                <span className="bg-brand-red/20 text-brand-red px-4 py-1.5 rounded text-xs font-black tracking-widest border border-brand-red/20">מודיעין</span>
              </div>
            </div>
            <div className="w-48 h-48 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
              <ArrowRight size={64} className="text-brand-red" aria-hidden="true" />
            </div>
          </article>
        </div>
      </section>

      <section className="py-24 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">מה מספרים אחרי התהליך</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="דניאל"
              text="הגעתי עם קושי גדול לדבר בביטחון. כבר מהמפגשים הראשונים הרגשתי שיש לי דרך ברורה לעבוד איתה."
            />
            <TestimonialCard
              name="רומן"
              text="העבודה הייתה רגועה, חדה ולא מתישה. בפעם הראשונה הרגשתי שמישהו באמת שומע מה קורה לי בדיבור."
            />
            <TestimonialCard
              name="דורון"
              text="הקול נהיה ברור יותר, והנוכחות מול אנשים השתנתה. לא בקסם. פשוט כי עבדנו נכון."
            />
            <TestimonialCard
              name="יניב"
              text="הרגשתי שאני מפסיק להילחם בעצמי. משם גם הדיבור וגם הביטחון התחילו לזוז."
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-4xl font-bold text-center mb-12">שאלות נפוצות</h2>
        <div className="space-y-6">
          <details className="group border-b border-zinc-200 pb-6">
            <summary className="list-none font-bold text-xl cursor-pointer flex justify-between items-center">
              איך נראית פגישה ראשונה?
              <span className="group-open:rotate-180 transition-transform" aria-hidden="true">⌄</span>
            </summary>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              מתחילים משיחה. מבינים מה קורה לכם בפועל, שומעים את הקול, ורואים יחד מה נכון לבדוק קודם.
            </p>
          </details>
          <details className="group border-b border-zinc-200 pb-6">
            <summary className="list-none font-bold text-xl cursor-pointer flex justify-between items-center">
              למי זה מתאים?
              <span className="group-open:rotate-180 transition-transform" aria-hidden="true">⌄</span>
            </summary>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              לזמרים, מרצים, אנשי מכירות, בני נוער ומבוגרים שמרגישים שהקול או הדיבור שלהם לא יושבים כמו שהם רוצים.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}

function TherapyItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white p-10 rounded-2xl border border-zinc-200 hover:border-black transition-colors group">
      <div className="w-12 h-12 bg-zinc-50 text-brand-red flex items-center justify-center rounded-lg mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors shadow-sm">
        {icon}
      </div>
      <h3 className="font-serif text-2xl font-bold mb-4">{title}</h3>
      <p className="text-zinc-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col gap-4">
      <div className="flex text-brand-red font-serif text-4xl leading-none">"</div>
      <p className="text-zinc-700 italic leading-relaxed">{text}</p>
      <div className="flex items-center gap-3 mt-4">
        <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-white font-bold text-xs uppercase">
          {name[0]}
        </div>
        <span className="font-bold text-zinc-900">{name}</span>
      </div>
    </div>
  );
}
