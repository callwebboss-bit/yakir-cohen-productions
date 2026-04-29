import React from "react";
import { School } from "lucide-react";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "האקדמיה לסאונד וקול | קורסים דיגיטליים",
  description: "למדו את סודות המקצוע: הקלטה ביתית, מיקס מאסטרינג ופיתוח קול.",
  alternates: {
    canonical: "https://www.yakircohen.com/courses",
  },
};

const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "סודות ההקלטה הביתית"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "פיתוח קול למקצוענים"
    }
  ]
};

export default function CoursesPage() {
  return (
    <div className="flex flex-col pb-24">
      <StructuredData data={coursesSchema} />
      <header className="bg-zinc-900 py-32 px-6 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
           <span className="bg-brand-red px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest mb-6">למידה מעשית</span>
           <h1 className="font-serif text-6xl font-bold mb-6 italic">האקדמיה לסאונד וקול</h1>
           <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
             תנו לקול שלכם את הכלים המקצועיים ביותר. קורסים דיגיטליים ופגישות אישיות המועברים על ידי יקיר כהן, עם ידע שנצבר מעל עשור בתעשייה.
           </p>
        </div>
      </header>

      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <CourseCard 
            title="סודות ההקלטה הביתית"
            desc="איך להוציא סאונד של אולפן מקצועי בבית, במינימום תקציב. קורס מקיף המכסה אקוסטיקה, מיקרופונים ותוכנות הקלטה."
            price="490"
            duration="12 שיעורים"
            level="מתחילים"
          />
          <CourseCard 
            title="פיתוח קול למקצוענים"
            desc="טכניקות שימור קול, הרחבת מנעד ויציבות מול קהל. מותאם במיוחד לזמרים ומרצים שרוצים לקחת את היכולות לקצה."
            price="850"
            duration="20 שיעורים"
            level="מתקדם"
          />
          <CourseCard 
            title="מיקס ומאסטרינג ב-Ableton"
            desc="המדריך המלא להבאת השיר שלך לרמה מסחרית. כולל שימוש בפלאגינים חיצוניים ועבודה עם ציוד אנלוגי היברידי."
            price="1,200"
            duration="15 שיעורים"
            level="בינוני"
          />
          <div className="bg-brand-red text-white p-12 rounded-2xl flex flex-col justify-center gap-6 shadow-2xl">
             <h3 className="font-serif text-3xl font-bold leading-tight italic">ליווי אישי (One-on-One)</h3>
             <p className="text-white/80 text-lg leading-relaxed">בואו ללמוד ישירות מיקיר באולפן. תכנית מותאמת אישית לצרכים שלכם, קיצור דרך משמעותי לעולם המקצועי.</p>
             <button className="bg-black text-white px-8 py-4 rounded-xl font-bold self-start hover:bg-white hover:text-black transition-all">
               תיאום פגישת התאמה
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function CourseCard({ title, desc, price, duration, level }: { title: string, desc: string, price: string, duration: string, level: string }) {
  return (
    <div className="bg-white border border-zinc-200 rounded-3xl p-10 hover:border-black transition-all group flex flex-col shadow-sm">
       <div className="flex justify-between items-start mb-8">
          <div className="flex gap-2">
             <span className="bg-zinc-100 px-3 py-1 rounded text-[10px] font-black uppercase tracking-tighter text-zinc-500">{level}</span>
             <span className="bg-zinc-100 px-3 py-1 rounded text-[10px] font-black uppercase tracking-tighter text-zinc-500">{duration}</span>
          </div>
          <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all shadow-sm">
             <School size={24} />
          </div>
       </div>
       <h3 className="font-serif text-3xl font-bold mb-4">{title}</h3>
       <p className="text-zinc-500 mb-10 flex-grow text-lg leading-relaxed">{desc}</p>
       <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="w-full md:w-auto">
             <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-1 leading-none">השקעה חד פעמית</p>
             <p className="text-4xl font-serif font-black leading-none">₪{price}</p>
          </div>
          <button className="w-full md:w-auto bg-black text-white px-10 py-4 rounded-xl font-bold hover:bg-brand-red transition-all cursor-pointer shadow-lg whitespace-nowrap">
             הרשמה לקורס הדיגיטלי
          </button>
       </div>
    </div>
  );
}
