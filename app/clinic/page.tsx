import React from "react";
import { Volume2, Mic, Play, ArrowRight, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "טיפול בגמגום במודיעין | פיתוח קול ושיקום קולי מקצועי",
  description: "מרכז מומחה לטיפול בגמגום במודיעין. יקיר כהן מציע פיתוח קול, שיקום מיתרי הקול ושיפור ביטחון עצמי בדיבור בשיטה ייחודית.",
  alternates: {
    canonical: "https://www.yakircohen.com/clinic",
  },
};

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "קליניקה לקול - יקיר כהן",
  "description": "טיפול בגמגום ושיקום קולי מקצועי במודיעין.",
  "image": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Modi'in",
    "addressCountry": "IL"
  }
};

export default function ClinicPage() {
  return (
    <div className="flex flex-col">
      <StructuredData data={clinicSchema} />
      <header className="bg-zinc-100 py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <article>
            <h1 className="font-serif text-6xl font-bold mb-8 italic">קליניקה לקול חופשי</h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-10 max-w-lg">
              מרחב בטוח ומקצועי ל <strong>טיפול בגמגום במודיעין</strong>, פיתוח הקול, שיקום מיתרי הקול, והקניית ביטחון עצמי בדיבור והופעה מול קהל.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-red text-white px-10 py-5 rounded font-bold shadow-xl hover:scale-105 transition-all cursor-pointer">
                קבע פגישת אבחון
              </button>
            </div>
          </article>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-200 shadow-2xl">
            <Image 
               src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2787&auto=format&fit=crop" 
               alt="קליניקה לטיפול בגמגום במודיעין" 
               fill
               priority
               className="object-cover"
            />
          </div>
        </div>
      </header>

      {/* Therapy Approach */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <h2 className="font-serif text-4xl font-bold text-center mb-16 underline decoration-brand-red decoration-4 underline-offset-8">הגישה הטיפולית</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TherapyItem icon={<Volume2 />} title="שיקום ופיתוח קול" desc="טיפול בבעיות צרידות, יבלות במיתרי הקול, ועייפות קולית באמצעות טכניקות נשימה נכונה ופיזיותרפיה קולית." />
          <TherapyItem icon={<Mic />} title="עמידה מול קהל" desc="כלים מעשיים להתגברות על פחד קהל, שפת גוף, אינטונציה, ובניית נוכחות בימתית סוחפת לאנשי עסקים ואמנים." />
          <TherapyItem icon={<Play />} title="דיקציה והגייה" desc="שיפור חיתוך הדיבור, בהירות המסר, ועבודה על מבטא לאמנים, שחקנים ודוברים מקצועיים." />
          
          <article className="md:col-span-2 lg:col-span-3 bg-zinc-900 text-white p-12 rounded-2xl flex flex-col md:flex-row items-center gap-12 mt-8">
            <div className="flex-grow">
               <h3 className="font-serif text-3xl font-bold mb-4">אבחון ממוחשב בשיטה הקלינית</h3>
               <p className="text-zinc-400 text-lg leading-relaxed">
                 הקליניקה משלבת ציוד הקלטה אנלוגי ודיגיטלי מתקדם המאפשר ניתוח מדויק של תדרים קוליים ומשוב מיידי בזמן אמת, דבר המקצר משמעותית את תהליך הטיפול בגמגום.
               </p>
               <div className="mt-8 flex gap-3">
                 <span className="bg-white/10 px-4 py-1.5 rounded text-xs font-black uppercase tracking-widest border border-white/20">טכנולוגיה בלעדית</span>
                 <span className="bg-brand-red/20 text-brand-red px-4 py-1.5 rounded text-xs font-black uppercase tracking-widest border border-brand-red/20">מודיעין</span>
               </div>
            </div>
            <div className="w-48 h-48 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
               <ArrowRight size={64} className="text-brand-red" />
            </div>
          </article>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">סיפורי הצלחה</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard 
              name="דניאל גרין"
              text="יקיר עשה את הבלתי אפשרי עבור בני אורן. הוא פיתח לו יכולות חשיבה, ביקורת עצמית ואבחנה מדוייקת לבעיית הגימגום שלו שנפתרה לאחר כ-3 פגישות. ממליץ בחום ומודה מקרב לב."
            />
            <TestimonialCard 
              name="רומן פלדשטיין"
              text="הילד שלי סבל מבעיות גימגום שנחשבו לבעיות מלידה. יקיר הצליח לאתר את הקשיים בדיבור שלו ולהכניס אותו לסדר מחשבתי עד שרמת הגימגום נפתרה לחלוטין. תודה רבה!"
            />
            <TestimonialCard 
              name="דורון פרץ"
              text="יקיר התווה לי דרך מיוחדת לעבוד על בעיית הקריינות שלי והפחד מהנחיה. כיום אני מנחה אירועי ענק והפעלות לכל אירוע. תודה מלך!"
            />
            <TestimonialCard 
              name="יניב טוטיאשבילי"
              text="היה לי פחד גדול לדבר מול קהל. הקורס עם יקיר פתח לי נקודות שהיו חסומות בביטחון שלי וגרם לי להיות זורם ושוטף. בנוסף עשיתי איתו את קורס הדי ג'יי לפני עשור ועד היום אני פעיל!"
            />
          </div>
        </div>
      </section>

      {/* FAQ for SEO */}
      <section className="py-24 px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-4xl font-bold text-center mb-12">שאלות נפוצות</h2>
        <div className="space-y-6">
          <details className="group border-b border-zinc-200 pb-6">
            <summary className="list-none font-bold text-xl cursor-pointer flex justify-between items-center">
              איך מתבצע טיפול בגמגום במודיעין אצל יקיר כהן?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              הטיפול משלב עבודה מול מיקרופון, הקלטה עצמית וניתוח דפוסי חשיבה. אנו לא רק מתרגלים דיבור, אלא בונים ביטחון עצמי דרך חוויה מוזיקלית וקולית מעצימה.
            </p>
          </details>
          <details className="group border-b border-zinc-200 pb-6">
            <summary className="list-none font-bold text-xl cursor-pointer flex justify-between items-center">
              תוך כמה זמן מרגישים שיפור?
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              רבים מהמטופלים מדווחים על שינוי משמעותי כבר לאחר 3-5 מפגשים, תלוי ברמת המחויבות והתרגול האישי.
            </p>
          </details>
        </div>
      </section>

    </div>
  );
}

function TherapyItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-10 rounded-2xl border border-zinc-200 hover:border-black hover:shadow-xl transition-all group">
       <div className="w-12 h-12 bg-zinc-50 text-brand-red flex items-center justify-center rounded-lg mb-6 group-hover:bg-brand-red group-hover:text-white transition-all shadow-sm">
         {icon}
       </div>
       <h3 className="font-serif text-2xl font-bold mb-4">{title}</h3>
       <p className="text-zinc-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, text }: { name: string, text: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col gap-4">
      <div className="flex text-brand-red italic font-serif text-4xl leading-none">"</div>
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
