import { SITE_URL } from "@/lib/site-url";
import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Shield, Music, Star } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import { BLUR_DATA_URL } from "@/lib/blur";
import StudioRecordsSVG from "@/components/StudioRecordsSVG";

const ABOUT_IMAGE = "/assets/images/recording-studio/יקיר כהן הפקות באולפן.webp";

export const metadata: Metadata = {
  title: "אודות יקיר כהן | מפיק, איש קול ובעל אולפן",
  description: "הסיפור מאחורי האולפן, הקליניקה והעבודה של יקיר כהן עם קול, סאונד ואנשים.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "אודות יקיר כהן הפקות",
    description: "20+ שנות ניסיון באולפן, בהפקה ובעבודה עם קול.",
    url: `${SITE_URL}/about`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "אודות יקיר כהן הפקות",
  description: "הסיפור מאחורי יקיר כהן, האולפן והקליניקה לקול.",
  mainEntity: {
    "@type": "Person",
    name: "יקיר כהן",
    jobTitle: "מפיק ואיש קול",
    url: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <StructuredData data={aboutSchema} />
      <section className="relative py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-zinc-100 px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-zinc-500 mb-6 border border-zinc-200">
            <Star size={12} className="text-brand-red" />
            מעל 20 שנות עבודה
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
            המקום מאחורי
            <br />
            <span className="text-brand-red">הקול והצליל.</span>
          </h1>
          <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
            <p className="font-medium text-zinc-900">
              יקיר כהן עובד עם קול, סאונד ואנשים כבר יותר מעשרים שנה. האולפן נבנה מתוך ניסיון, אבל גם מתוך הקשבה למה שאנשים באמת צריכים כשהם מגיעים להקליט, לדבר או ליצור.
            </p>
            <p>
              עם השנים נולדו כאן כמה מסלולים שונים. אולפן הקלטות, פודקאסט, שירותי אירועים וקליניקה לקול. על פניו אלה עולמות שונים. בפועל, כולם יושבים על אותו בסיס: לשמוע נכון, לעבוד מסודר, ולהוציא תוצאה שמרגישה אמיתית.
            </p>
            <p>
              מי שמגיע לכאן לא נכנס לפס ייצור. קודם מבינים מה הוא צריך. אחר כך בונים את הדרך הכי מתאימה עבורו.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
          <Image
            src={ABOUT_IMAGE}
            alt="יקיר כהן באולפן ההקלטות במודיעין"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-8 right-8 text-white text-right">
            <p className="text-sm font-black tracking-widest opacity-80 mb-1">אולפן. קול. אנשים.</p>
            <h2 className="text-3xl font-serif font-bold">יקיר כהן</h2>
          </div>
        </div>
      </section>

      <div className="relative mb-16 rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <StudioRecordsSVG />
        </div>
        <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 p-12 text-center">
          <h2 className="font-serif text-5xl font-bold mb-4 text-white">אודות יקיר כהן הפקות</h2>
          <p className="text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
            מקום אחד שמחבר אולפן, קליניקה ושירותי סאונד תחת דרך עבודה אחת ברורה.
          </p>
        </div>
      </div>

      <section className="bg-zinc-900 text-white py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl font-serif font-black text-brand-red mb-2">20+</div>
            <p className="text-zinc-400 font-bold tracking-widest text-[10px]">שנות ניסיון</p>
          </div>
          <div>
            <div className="text-5xl font-serif font-black text-brand-red mb-2">1,500+</div>
            <p className="text-zinc-400 font-bold tracking-widest text-[10px]">פרויקטים</p>
          </div>
          <div>
            <div className="text-5xl font-serif font-black text-brand-red mb-2">4.9</div>
            <p className="text-zinc-400 font-bold tracking-widest text-[10px]">דירוג ממוצע</p>
          </div>
          <div>
            <div className="text-5xl font-serif font-black text-brand-red mb-2">100%</div>
            <p className="text-zinc-400 font-bold tracking-widest text-[10px]">מחויבות לעבודה מדויקת</p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl font-bold mb-6">מה מחזיק את העבודה הזאת</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg">לא מחפשים קיצורי דרך. מחפשים תוצאה טובה שמחזיקה גם אחרי שהסשן נגמר.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Shield className="text-brand-red" size={32} />}
              title="מקצוענות"
              desc="ציוד טוב חשוב. ניסיון חשוב לא פחות. שניהם צריכים לעבוד יחד."
            />
            <ValueCard
              icon={<Heart className="text-brand-red" size={32} />}
              title="רגישות"
              desc="הקול הוא לא רק טכניקה. צריך גם לדעת מתי לעצור, מתי לדחוף ומתי פשוט להקשיב."
            />
            <ValueCard
              icon={<Music className="text-brand-red" size={32} />}
              title="תנועה קדימה"
              desc="ממשיכים ללמוד, לבדוק, לחדד ולהתעדכן כדי שהעבודה תישאר חיה ולא תהפוך להרגל."
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-zinc-900 rounded-[3rem] p-16 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8">רוצים להתחיל?</h2>
            <p className="text-zinc-400 text-xl mb-12 max-w-xl">
              אם יש לכם שאלה, רעיון או צורך מדויק, שלחו הודעה ונתחיל משם.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact/whatsapp" className="bg-brand-red text-white px-10 py-5 rounded-full font-bold shadow-xl text-lg hover:bg-red-700 transition-colors">
                דברו איתנו ב-WhatsApp
              </Link>
              <Link href="/about/faq" className="border border-white/30 text-white px-8 py-5 rounded-full font-bold hover:bg-white/10 transition-colors">
                שאלות נפוצות
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedPages
        title="הכירו אותנו יותר"
        pages={[
          { label: "ביקורות ולקוחות", href: "/about/reviews", desc: "מה אומרים עלינו" },
          { label: "שאלות נפוצות", href: "/about/faq", desc: "מה כדאי לדעת לפני שמתחילים" },
          { label: "צור קשר", href: "/contact", desc: "שיחה קצרה כדי להבין מה נכון לכם" },
        ]}
      />
    </div>
  );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white p-12 rounded-3xl border border-zinc-200 shadow-sm hover:border-black transition-colors group">
      <div className="mb-6 bg-zinc-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-brand-red/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-zinc-500 leading-relaxed">{desc}</p>
    </div>
  );
}
