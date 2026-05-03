import React from "react";
import Link from "next/link";
import { Mic, Search, Music, School, Volume2, ArrowLeft, ArrowRight, Play } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";
import { BLUR_DATA_URL } from "@/lib/blur";

export const metadata: Metadata = {
  title: "אולפן הקלטות במודיעין | DJ וAI למודיעין - יקיר כהן",
  description: "אולפן הקלטות במודיעין: הקלטה של שירים, DJ לאירועים, הפקת פודקאסטים, אטרקציות (זיקוקים קרים, עשן), וAI לתיקון זיופים. 20 שנות ניסיון. דירוג 5.0 ⭐ מ-250+ לקוחות.",
  alternates: {
    canonical: "https://www.yakircohen.com",
  },
  openGraph: {
    title: "אולפן הקלטות במודיעין | יקיר כהן הפקות",
    description: "הקלטת שירים, פודקאסט, DJ ואטרקציות לאירועים. קניון עזריאלי מודיעין.",
    url: "https://www.yakircohen.com",
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "יקיר כהן הפקות",
    "url": "https://www.yakircohen.com",
    "description": "אולפן הקלטות במודיעין — הקלטת שירים, פודקאסט, DJ וAI לאטרקציות לאירועים.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.yakircohen.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "יקיר כהן הפקות",
    "image": "https://www.yakircohen.com/assets/images/logo.png",
    "description": "אולפן הקלטות במודיעין עם 20 שנות ניסיון",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "קניון עזריאלי",
      "addressLocality": "מודיעין",
      "postalCode": "71700",
      "addressCountry": "IL"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "250"
    },
    "sameAs": [
      "https://www.google.com/business",
      "https://www.facebook.com/yakircohen"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "כמה עולה הקלטת שיר באולפן?",
        "acceptedAnswer": { "@type": "Answer", "text": "הקלטת שיר מתחילה מ-990 ₪ וכוללת טכנאי סאונד, תיקון זיופים ומיקס מוכן." }
      },
      {
        "@type": "Question",
        "name": "איפה האולפן? יש חניה?",
        "acceptedAnswer": { "@type": "Answer", "text": "האולפן ממוקם בקניון עזריאלי מודיעין — חניה חינם, נגיש בתחבורה ציבורית ובכביש מהיר." }
      },
      {
        "@type": "Question",
        "name": "האם צריך ניסיון קודם בהקלטה?",
        "acceptedAnswer": { "@type": "Answer", "text": "לא. האולפן מתאים למתחילים ומקצועיים. הצוות מלווה אתכם לאורך כל הסשן." }
      },
      {
        "@type": "Question",
        "name": "מה שעות הפעילות?",
        "acceptedAnswer": { "@type": "Answer", "text": "הסשנים נקבעים בתיאום אישי. צרו קשר לבדיקת זמינות." }
      },
      {
        "@type": "Question",
        "name": "האם יש שירות DJ לאירועים?",
        "acceptedAnswer": { "@type": "Answer", "text": "כן! מספקים DJ מקצועי עם סאונד ותאורה מקדמת ל-4 שעות ממחיר 2,490 ₪." }
      },
      {
        "@type": "Question",
        "name": "מה הן אטרקציות האירוע?",
        "acceptedAnswer": { "@type": "Answer", "text": "זיקוקים קרים (Cold Sparklers), מכונות עשן CO2, בועות סבון ענקיות ותאורה LED/לייזר." }
      }
    ]
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <StructuredData data={homeSchema} />
      {/* Hero Section */}
      <header className="relative min-h-[600px] flex flex-col items-center justify-center px-6 bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-200 via-transparent to-transparent opacity-50"></div>
        <div className="relative z-10 w-full max-w-3xl text-center flex flex-col items-center gap-10">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight">
            הסאונד שלך. <br/>
            <span className="text-brand-red">בדיוק כפי שדמיינת.</span>
          </h1>
          
          <div className="w-full relative group">
            <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-brand-red">
              <Search size={24} />
            </div>
            <input 
              id="global-search"
              className="w-full bg-white border-2 border-zinc-900 rounded-full py-5 pe-16 ps-8 text-xl font-sans placeholder-zinc-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red shadow-xl transition-all"
              placeholder="חפש הקלטה, פודקאסט, אירוע..."
            />
            <button className="absolute inset-y-2.5 inset-inline-start-2.5 bg-black text-white rounded-full px-8 font-bold hover:bg-brand-red transition-colors cursor-pointer">
              חפש
            </button>
          </div>
          <p className="text-zinc-500 font-medium">אולפן הקלטות במודיעין. הפקה מקצועית ותוצאה שמוכנה לשידור.</p>
        </div>
      </header>

      {/* Categories */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <h2 className="font-serif text-3xl font-bold text-center mb-10">שירותי האולפן</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard 
            id="cat-studio"
            icon={<Mic size={40} />} 
            title="אולפן הקלטות" 
            desc="מקליטים. עורכים. מפיקים." 
            href="/studio"
          />
          <CategoryCard 
            id="cat-events"
            icon={<Music size={40} />} 
            title="דיג'יי לאירועים" 
            desc="מנגנים. מנחים. יוצרים." 
            href="/attractions"
          />
          <CategoryCard 
            id="cat-academy"
            icon={<School size={40} />} 
            title="אקדמיה לסאונד" 
            desc="לומדים. מתרגלים. שולטים." 
            href="/courses"
          />
          <CategoryCard 
            id="cat-clinic"
            icon={<Volume2 size={40} />} 
            title="קליניקה לקול" 
            desc="מדברים. מתחברים. משתחררים." 
            href="/clinic"
            isSpecial
          />
        </div>
      </section>

      {/* Portrait Section */}
      <section className="py-24 px-6 bg-white border-y border-zinc-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden border border-black bg-surface p-2 brand-shadow">
              <Image
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop"
                alt="יקיר כהן - מומחה קול וסאונד"
                width={800}
                height={1067}
                className="w-full h-full object-cover rounded grayscale hover:grayscale-0 transition-all duration-700"
                priority
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
              <div className="absolute bottom-8 inline-end-8 bg-white border border-black px-4 py-2 flex items-center gap-2 rounded-full shadow-lg">
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
              כל קול ראוי לטיפול מדויק.
            </p>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl">
              מרגע הכניסה לאולפן, אנחנו דואגים להפקה המלאה. בין אם מדובר בסינגל בכורה או בשיקום קולי, התהליך מנוהל בסטנדרטים גבוהים ובליווי אישי.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-zinc-100 pt-8">
              <div>
                <p className="text-4xl font-serif font-black">20+</p>
                <p className="text-zinc-500 font-bold">שנות ניסיון</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-black">1,500+</p>
                <p className="text-zinc-500 font-bold">פרויקטים</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/clinic" className="bg-black text-white px-8 py-4 rounded font-bold hover:bg-brand-red transition-all flex items-center gap-2 group">
                בואו נתחיל להקליט
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link href="/studio" className="border border-black px-8 py-4 rounded font-bold hover:bg-zinc-50 transition-all">
                תיק עבודות
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-24 px-6 bg-brand-red text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">אטרקציות לאירועים</h2>
          <div className="w-16 h-1 bg-white mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/20">
              <p className="text-4xl mb-3">☄️</p>
              <h3 className="font-bold text-xl mb-2">זיקוקים קרים</h3>
              <p className="text-white/80">Cold Sparklers מקצועיות לאפקט כניסה מרהיב</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/20">
              <p className="text-4xl mb-3">🌫️</p>
              <h3 className="font-bold text-xl mb-2">מכונות עשן</h3>
              <p className="text-white/80">עשן כבד ו-CO2 לאפקט דרמטי על הרחבה</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/20">
              <p className="text-4xl mb-3">🫧</p>
              <h3 className="font-bold text-xl mb-2">בועות סבון ענקיות</h3>
              <p className="text-white/80">מכונות בועות לחתונות וחוגגים</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/20">
              <p className="text-4xl mb-3">💡</p>
              <h3 className="font-bold text-xl mb-2">תאורה ולייזרים</h3>
              <p className="text-white/80">מערכות תאורה LED וEFX מקצועיות</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-4">תמחור שקוף</h2>
          <div className="w-16 h-1 bg-brand-red mb-12"></div>
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="border-b-2 border-zinc-900">
                  <th className="py-4 px-6 font-bold">שירות</th>
                  <th className="py-4 px-6 font-bold">מחיר</th>
                  <th className="py-4 px-6 font-bold">כולל</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 px-6">הקלטת שיר בודדת</td>
                  <td className="py-4 px-6 font-bold">₪990</td>
                  <td className="py-4 px-6 text-sm">טכנאי סאונד, תיקון זיופים, מיקס ראשוני</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 px-6">DJ 4 שעות לאירוע</td>
                  <td className="py-4 px-6 font-bold">₪2,490</td>
                  <td className="py-4 px-6 text-sm">סאונד מקצועי, תאורה, MC, קטלוג 1000+</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 px-6">זיקוקים קרים (15 דקות)</td>
                  <td className="py-4 px-6 font-bold">₪1,500</td>
                  <td className="py-4 px-6 text-sm">ציוד, הכנה, טכנאי בחוק</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-4 px-6">מכונת עשן (4 שעות)</td>
                  <td className="py-4 px-6 font-bold">₪890</td>
                  <td className="py-4 px-6 text-sm">ציוד CO2 וחוזק בחוק</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">הפקת פודקאסט (10 פרקים)</td>
                  <td className="py-4 px-6 font-bold">₪3,990</td>
                  <td className="py-4 px-6 text-sm">הקלטה, עריכה, מיקס, הפצה</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <p className="text-brand-red font-bold text-lg mb-2">250+ לקוחות מרוצים</p>
            <h2 className="font-serif text-4xl font-bold mb-4">דירוג 5.0 כוכבים</h2>
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(i => (
                <span key={i} className="text-4xl">⭐</span>
              ))}
            </div>
            <p className="text-zinc-600 text-lg">מ-250+ ביקורות מאומתות בGoogle ובFacebook</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
              <p className="text-brand-red font-bold mb-3">⭐⭐⭐⭐⭐</p>
              <p className="text-zinc-700 italic mb-4">"יקיר הוא אמן. הקול של הסינגל שלי הוא בדיוק מה שדמיינתי. הקלטה מדויקת וטיפול מקצועי."</p>
              <p className="font-bold text-sm">שירה כהן, זמרת</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
              <p className="text-brand-red font-bold mb-3">⭐⭐⭐⭐⭐</p>
              <p className="text-zinc-700 italic mb-4">"החתונה שלנו הייתה בדיוק כמו בחלום. הדיג'יי היה מדהים והאטרקציות הביעו לכולם. ממליצים בחום!"</p>
              <p className="font-bold text-sm">מאיה וצביקה, חתונה</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
              <p className="text-brand-red font-bold mb-3">⭐⭐⭐⭐⭐</p>
              <p className="text-zinc-700 italic mb-4">"פודקאסט שלנו קפץ מ-50 הוקלים ל-500 בחודש אחד. איכות הקול אבל גם הייעוץ למדהים."</p>
              <p className="font-bold text-sm">דני גביאל, מתדלק פודקאסט</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-24 px-6 bg-white">
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
          className="object-cover"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
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
