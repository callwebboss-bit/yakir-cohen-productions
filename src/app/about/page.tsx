import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Heart, Shield, Music, Star } from "lucide-react";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "אודות יקיר כהן | מפיק מוזיקלי, מומחה לקול וסאונד",
  description: "הכירו את יקיר כהן והצוות שמאחורי יקיר כהן הפקות. מעל 20 שנות ניסיון בהפקה מוזיקלית, שיקום קולי וטיפול בגמגום בשיטה ייחודית.",
  alternates: {
    canonical: "https://www.yakircohen.com/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "אודות יקיר כהן הפקות",
  "description": "סיפורו של יקיר כהן והחזון מאחורי אולפן ההקלטות והקליניקה לקול.",
  "mainEntity": {
    "@type": "Person",
    "name": "יקיר כהן",
    "jobTitle": "מפיק מוזיקלי ומומחה לקול",
    "url": "https://www.yakircohen.com/about"
  }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <StructuredData data={aboutSchema} />
      {/* Hero Section */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-zinc-100 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-6 border border-zinc-200">
            <Star size={12} className="text-brand-red" />
            מעל 20 שנות יצירה
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 italic leading-tight">
            החזון שמאחורי <br />
            <span className="text-brand-red">הקול והצליל.</span>
          </h1>
          <div className="space-y-6 text-zinc-600 text-lg leading-relaxed text-right md:text-right">
            <p className="font-medium text-zinc-900">
              יקיר כהן הוא איש סאונד, מפיק מוזיקלי ומומחה לשיקום קולי, המשלב בעבודתו עולמות שלכאורה נפרדים אך למעשה מזינים זה את זה: האמנות והטיפול.
            </p>
            <p>
              לאחר שני עשורים של עבודה צמודה עם אמנים מהשורה הראשונה, הקלטת מאות פרויקטים וניהול אולפני הקלטות, יקיר פיתח שיטת עבודה ייחודית ששמה את האדם במרכז. עבורו, אולפן ההקלטות הוא לא רק מקום עם טכנולוגיה, אלא מרחב לצמיחה וביטוי עצמי.
            </p>
            <p>
              הידע המקצועי שלו בפיזיולוגיה של מיתרי הקול, לצד הדיוק האנושי שנדרש בהפקה מוזיקלית, מאפשרים לו להוביל כל אדם למקסימום היכולת הקולית שלו - בין אם הוא זמר מקצועי ובין אם הוא מתמודד עם קשיי דיבור.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
           <Image 
             src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670" 
             alt="יקיר כהן באולפן" 
             fill
             className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
           <div className="absolute bottom-8 right-8 text-white text-right">
              <p className="text-sm font-black uppercase tracking-widest opacity-80 mb-1">Born to Produce</p>
              <h3 className="text-3xl font-serif font-bold">יקיר כהן</h3>
           </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="bg-zinc-900 text-white py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl font-serif font-black italic text-brand-red mb-2">20+</div>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">שנות ניסיון</p>
          </div>
          <div>
            <div className="text-5xl font-serif font-black italic text-brand-red mb-2">1,500+</div>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">פרויקטים שהוקלטו</p>
          </div>
          <div>
            <div className="text-5xl font-serif font-black italic text-brand-red mb-2">4.9</div>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">דירוג ממוצע</p>
          </div>
          <div>
            <div className="text-5xl font-serif font-black italic text-brand-red mb-2">100%</div>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">מחויבות לתוצאה</p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-32 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl font-bold mb-6">הערכים שמובילים אותנו</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg">אנחנו לא מאמינים בקיצורי דרך. כל צליל שיוצא מהאולפן שלנו עובר דרך פילטר של מקצוענות ורגש.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Shield className="text-brand-red" size={32} />}
              title="מקצוענות ללא פשרות"
              desc="אנחנו משתמשים בציוד הקצה העליון בעולם ובניסיון שנצבר במשך עשורים כדי להבטיח תוצאה ברמה בינלאומית."
            />
            <ValueCard 
              icon={<Heart className="text-brand-red" size={32} />}
              title="רגישות אנושית"
              desc="הקול הוא הנשמה. אנו יוצרים סביבה בטוחה ותומכת המאפשרת לכל אחד להרגיש נינוח ולתת את המקסימום שלו."
            />
            <ValueCard 
              icon={<Music className="text-brand-red" size={32} />}
              title="חדשנות מוזיקלית"
              desc="אנחנו לא מפסיקים להתעדכן ולחקור סאונדים חדשים, ומשלבים טכנולוגיה חדישה עם סאונד אנלוגי חם."
            />
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-zinc-900 rounded-[3rem] p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-red/10 animate-pulse"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 italic">מוכנים להתחיל ליצור?</h2>
            <p className="text-zinc-400 text-xl mb-12 max-w-xl">
              הצטרפו למאות האמנים והמטופלים שכבר מצאו את הקול שלהם אצלנו.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-brand-red text-white px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-all text-lg">
                דברו איתנו ב-WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-12 rounded-3xl border border-zinc-200 shadow-sm hover:border-black transition-all group">
      <div className="mb-6 bg-zinc-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-brand-red/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-zinc-500 leading-relaxed">{desc}</p>
    </div>
  );
}
