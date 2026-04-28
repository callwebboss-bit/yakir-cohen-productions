import React from "react";
import Link from "next/link";
import { Mic, Volume2, Music, Radio, CheckCircle2, Share2 } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";
import WorkCard from "@/components/WorkCard";

export const metadata: Metadata = {
  title: "אולפן הקלטות במודיעין | הקלטת שיר, פודקאסט ומיקס מקצועי",
  description: "מחפשים אולפן הקלטות במודיעין? יקיר כהן הפקות מציע שירותי הקלטה, מיקס ומאסטרינג בסטנדרט הגבוה ביותר. בואו להקליט את הלהיט הבא שלכם.",
  alternates: {
    canonical: "https://www.yakircohen.com/studio",
  },
};

const studioSchema = {
  "@context": "https://schema.org",
  "@type": "MusicRecordingStudio",
  "name": "יקיר כהן הפקות",
  "image": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Modi'in",
    "addressRegion": "Center",
    "addressCountry": "IL"
  },
  "url": "https://www.yakircohen.com/studio",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "128"
  }
};

export default function StudioPage() {
  return (
    <div className="flex flex-col">
      <StructuredData data={studioSchema} />
      {/* Studio Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-zinc-900 border-b border-white/10 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop" 
            alt="אולפן הקלטות במודיעין - יקיר כהן הפקות" 
            fill
            priority
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-zinc-900"></div>
        </div>
        
        <div className="relative z-10 text-center flex flex-col items-center gap-8 max-w-4xl px-6">
          <div className="inline-flex items-center gap-2 bg-brand-red px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(188,1,0,0.4)]">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            אולפן הקלטות במודיעין
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
            סאונד <span className="text-brand-red italic">מדויק.</span><br/>
            הפקה ללא פשרות.
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl leading-relaxed">
            אולפן הקלטות מתקדם המשלב ציוד קצה עליון, אקוסטיקה מושלמת, וניסיון של שנים כדי להביא את החזון האמנותי שלך לכדי שלמות.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link href="#services" className="bg-brand-red text-white px-8 py-4 rounded font-bold hover:scale-105 transition-all shadow-xl cursor-pointer">
              גלה את השירותים שלנו
            </Link>
            <Link href="/clinic" className="border border-white bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-black transition-all cursor-pointer">
              קבע סיור באולפן
            </Link>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-center font-serif text-4xl font-bold mb-16">שירותי האולפן המקצועיים שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="md:col-span-2 bg-white border border-zinc-200 p-10 rounded-2xl flex flex-col justify-between group hover:border-black transition-all shadow-sm">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 bg-black text-white rounded-xl flex items-center justify-center">
                <Mic size={32} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">Broadcast Quality</span>
            </div>
            <div className="mt-20">
              <h3 className="font-serif text-3xl font-bold mb-3">הקלטת שירה וכלים</h3>
              <p className="text-zinc-500 max-w-lg leading-relaxed">הקלטה בחדר אקוסטי מבודד לחלוטין (Vocal Booth), עם מבחר מיקרופונים מהשורה הראשונה להבטחת סאונד עשיר ומדויק לכל סגנון מוזיקלי.</p>
            </div>
          </article>
          <article className="bg-zinc-900 text-white p-10 rounded-2xl md:row-span-2 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-transparent"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-brand-red rounded-xl flex items-center justify-center mb-8">
                <Volume2 size={32} />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4">מיקס ומאסטרינג</h3>
              <p className="text-zinc-400 mb-auto leading-relaxed">תהליך המשלב ציוד אנלוגי קלאסי עם פלאגינים מתקדמים, להענקת עומק, עוצמה מסחרית ודינמיקה מושלמת לכל יצירה.</p>
              
              <button className="w-full bg-white text-black py-4 rounded font-bold mt-8 hover:bg-brand-red hover:text-white transition-all cursor-pointer">
                האזן לדוגמאות סאונד
              </button>
            </div>
          </article>
          <article className="bg-white border border-zinc-200 p-8 rounded-2xl flex items-center gap-6 group hover:border-black transition-all shadow-sm min-h-[140px]">
             <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center shrink-0">
               <Music size={24} />
             </div>
             <div>
               <h4 className="font-serif text-xl font-bold">הפקה ועיבוד</h4>
               <p className="text-xs text-zinc-500">ליווי אמנותי משלב הרעיון ועד לתוצר הגמור</p>
             </div>
          </article>
          <article className="bg-white border border-zinc-200 p-8 rounded-2xl flex items-center gap-6 group hover:border-black transition-all shadow-sm min-h-[140px]">
             <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center shrink-0">
               <Radio size={24} />
             </div>
             <div>
               <h4 className="font-serif text-xl font-bold">הקלטת פודקאסט</h4>
               <p className="text-xs text-zinc-500">סביבה מקצועית מבודדת להקלטת דיבור צלול</p>
             </div>
          </article>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl font-bold italic text-right">עבודות נבחרות</h2>
            <p className="text-zinc-500 mt-2 text-right">טעימה מהתוצרים האחרונים שיצאו מהאולפן שלנו.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <WorkCard 
            title="EP הפקה מלאה - אורי לוי" 
            category="הפקה ועיבוד" 
            image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670"
          />
          <WorkCard 
            title="פודקאסט 'קול המודיעין'" 
            category="הקלטה ועריכה" 
            image="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2787"
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-surface border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4 italic">חבילות אולפן</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto font-medium">תמחור שקוף והוגן באולפן ההקלטות במודיעין, מותאם אישית לצרכים שלך.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard title="בסיס (Basic)" price="250" unit="שעה" features={['הקלטת שירה בערוץ אחד', 'ציוד אולפן בסיסי', 'ראף מיקס בסיום']} />
            <PricingCard title="Silver" price="1,800" unit="שיר" features={['עד 8 שעות אולפן', 'הפקה ועיבוד בסיסי', 'מיקס ומאסטרינג מלא', 'תיקוני זיופים Melodyne']} isPopular />
            <PricingCard title="VIP Epic" price="4,500" unit="פרויקט" features={['זמן אולפן ללא הגבלה', 'הפקה מורכבת + נגנים', 'מיקס אנלוגי פרימיום', 'ייעוץ אמנותי צמוד']} />
          </div>
        </div>
      </section>
    </div>
  );
}

function PricingCard({ title, price, unit, features, isPopular }: { title: string, price: string, unit: string, features: string[], isPopular?: boolean }) {
  return (
    <div className={`relative p-10 rounded-2xl border transition-all flex flex-col min-h-[500px] ${isPopular ? 'bg-zinc-900 text-white border-zinc-900 shadow-2xl md:scale-105 z-10' : 'bg-white border-zinc-200 hover:border-black shadow-sm'}`}>
      {isPopular && (
        <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap">
          הכי פופולרי
        </div>
      )}
      <div className="mb-10 border-b border-zinc-100 pb-8 h-32 flex flex-col justify-center text-right">
        <h3 className="font-serif text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline justify-end gap-1">
          <span className="text-4xl font-serif font-black">₪{price}</span>
          <span className={`text-sm font-bold ${isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>/ {unit}</span>
        </div>
      </div>
      <ul className="flex flex-col gap-5 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-4 justify-end text-right">
            <span className="text-sm font-medium leading-tight">{f}</span>
            <CheckCircle2 size={18} className="text-brand-red shrink-0" />
          </li>
        ))}
      </ul>
      <button className={`w-full py-4 rounded font-bold mt-10 transition-all cursor-pointer ${isPopular ? 'bg-brand-red text-white hover:bg-white hover:text-black' : 'border border-black hover:bg-black hover:text-white'}`}>
        {isPopular ? 'הזמן עכשיו' : 'בחר חבילה'}
      </button>
    </div>
  );
}
