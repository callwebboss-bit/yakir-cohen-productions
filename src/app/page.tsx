import React from "react";
import Link from "next/link";
import { Mic, Search, Music, School, Volume2, ArrowLeft, ArrowRight, Play } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "אולפן הקלטות במודיעין ופיתוח קול מקצועי",
  description: "מחפשים אולפן הקלטות במודיעין? יקיר כהן הפקות מציע הקלטת שירים, פיתוח קול, טיפול בגמגום במודיעין והפקת אירועים פרימיום. ניסיון של 20 שנה.",
  alternates: {
    canonical: "https://www.yakircohen.com",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "יקיר כהן הפקות",
  "url": "https://www.yakircohen.com",
  "description": "אולפן הקלטות מקצועי וקליניקה לקול במודיעין.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.yakircohen.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <StructuredData data={homeSchema} />
      {/* Hero Section */}
      <header className="relative min-h-[600px] flex flex-col items-center justify-center px-6 bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-200 via-transparent to-transparent opacity-50"></div>
        <div className="relative z-10 w-full max-w-3xl text-center flex flex-col items-center gap-10">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight">
            אולפן הקלטות במודיעין <br/>
            <span className="text-brand-red italic">מה ניצור היום?</span>
          </h1>
          
          <div className="w-full relative group">
            <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-brand-red">
              <Search size={24} />
            </div>
            <input 
              id="global-search"
              className="w-full bg-white border-2 border-zinc-900 rounded-full py-5 pr-16 pl-8 text-xl font-sans placeholder-zinc-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red shadow-xl transition-all"
              placeholder="חפש הקלטת שיר, פיתוח קול, דיג'יי לחתונה..."
            />
            <button className="absolute inset-y-2.5 left-2.5 bg-black text-white rounded-full px-8 font-bold hover:bg-brand-red transition-colors cursor-pointer">
              חפש
            </button>
          </div>
          <p className="text-zinc-500 font-medium">הבית שלכם ליצירה: אולפן הקלטות במודיעין וקליניקה לקול חופשי</p>
        </div>
      </header>

      {/* Categories */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <h2 className="sr-only">שירותי אולפן והפקה</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard 
            id="cat-studio"
            icon={<Mic size={40} />} 
            title="אולפן הקלטות" 
            desc="הקלטות שירה, קריינות ומיקס בסטנדרט תעשייה" 
            href="/studio"
          />
          <CategoryCard 
            id="cat-events"
            icon={<Music size={40} />} 
            title="דיג'יי לחתונה במרכז" 
            desc="הפקות מוזיקליות, אטרקציות ותוכן בלתי נשכח לאירועים" 
            href="/attractions"
          />
          <CategoryCard 
            id="cat-academy"
            icon={<School size={40} />} 
            title="אקדמיה לסאונד" 
            desc="קורסים מקצועיים ולימודי סאונד מבית יקיר כהן" 
            href="/courses"
          />
          <CategoryCard 
            id="cat-clinic"
            icon={<Volume2 size={40} />} 
            title="טיפול בגמגום במודיעין" 
            desc="פיתוח קול ושיקום קולי בשיטה ייחודית ופורצת דרך" 
            href="/clinic"
            isSpecial
          />
        </div>
      </section>

      {/* Portrait Section */}
      <section className="py-24 px-6 bg-white border-y border-zinc-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden border border-black bg-surface p-2 shadow-[8px_8px_0px_#bc0100]">
              <Image 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop" 
                alt="יקיר כהן - מומחה קול וסאונד במודיעין" 
                width={800}
                height={1067}
                className="w-full h-full object-cover rounded grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
              <div className="absolute bottom-8 right-8 bg-white border border-black px-4 py-2 flex items-center gap-2 rounded-full shadow-lg">
                <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></div>
                <span className="text-xs font-black uppercase tracking-widest">מומחה קול וסאונד</span>
              </div>
            </div>
          </div>
          <article className="lg:col-span-7 flex flex-col gap-8">
            <h2 className="font-serif text-5xl font-bold leading-tight">
              האמנות של הקול, <br/>
              <span className="text-brand-red">המדע של הסאונד.</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand-red"></div>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl">
              אני מאמין שכל קול שווה להישמע בצורה הטובה ביותר.
            </p>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl">
              כשנכנסים לאולפן, אני לא רואה לקוחות. אני רואה סיפורים שמחכים לצאת. בין אם תחפשו <strong>אולפן הקלטות במודיעין</strong> לסינגל שלכם, או שתרצו להתחיל תהליך של <strong>טיפול בגמגום במודיעין</strong>, אני כאן. מרגע שנכנסים, אני דואג לכל השאר.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-zinc-100 pt-8">
              <div>
                <p className="text-4xl font-serif font-black">20+</p>
                <p className="text-zinc-500 font-bold">שנות ניסיון</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-black">1,500+</p>
                <p className="text-zinc-500 font-bold">פרויקטים ולקוחות</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/clinic" className="bg-black text-white px-8 py-4 rounded font-bold hover:bg-brand-red transition-all flex items-center gap-2 group">
                קבע פגישת ייעוץ
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link href="/studio" className="border border-black px-8 py-4 rounded font-bold hover:bg-zinc-50 transition-all">
                האזן לתיק העבודות
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 px-4">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-4">עבודות נבחרות מהאולפן</h2>
              <div className="w-16 h-1 bg-brand-red"></div>
            </div>
            <Link href="/studio" className="text-zinc-400 font-bold hover:text-black transition-all flex items-center gap-2 mb-1">
              צפה בכל העבודות
              <ArrowLeft size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <WorkCard 
              id="work-1"
              img="https://images.unsplash.com/photo-1514525253361-903e1e905200?q=80&w=2574&auto=format&fit=crop"
              category="הפקה מוזיקלית"
              title="סינגל בכורה - 'אורות'"
              artist="דניאל משה"
            />
            <WorkCard 
              id="work-2"
              img="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop"
              category="מיקס ומאסטרינג"
              title="אלבום מלא - 'שקט'"
              artist="להקת הדים"
            />
            <WorkCard 
              id="work-3"
              img="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2670&auto=format&fit=crop"
              category="קריינות ודיגיטל"
              title="פודקאסט עסקי - פרק 42"
              artist="The Tech Hub"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ id, icon, title, desc, href, isSpecial }: { id: string, icon: React.ReactNode, title: string, desc: string, href: string, isSpecial?: boolean }) {
  return (
    <Link href={href} id={id}>
      <div 
        className={`relative p-10 rounded-2xl border transition-all cursor-pointer flex flex-col items-center text-center gap-6 overflow-hidden aspect-square justify-center shadow-sm hover:shadow-xl hover:-translate-y-1 ${
          isSpecial ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white border-zinc-200 hover:border-black'
        }`}
      >
        <div className={`transition-colors ${isSpecial ? 'text-brand-red' : 'text-zinc-900'}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-serif text-2xl font-bold mb-2">{title}</h3>
          <p className={`text-sm ${isSpecial ? 'text-zinc-400' : 'text-zinc-500'}`}>{desc}</p>
        </div>
      </div>
    </Link>
  );
}

function WorkCard({ id, img, category, title, artist }: { id: string, img: string, category: string, title: string, artist: string }) {
  return (
    <div id={id} className="bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-2xl transition-all flex flex-col group">
      <div className="aspect-square overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative">
        <Image 
          src={img} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white">
                <Play fill="currentColor" size={24} />
            </div>
        </div>
      </div>
      <div className="p-8 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{category}</span>
        </div>
        <div>
          <h3 className="font-serif text-2xl font-bold mb-1">{title}</h3>
          <p className="text-zinc-500 font-bold text-sm tracking-tight">{artist}</p>
        </div>
        <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b-2 border-brand-red pb-1 hover:gap-4 transition-all w-fit">
          האזן עכשיו <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
