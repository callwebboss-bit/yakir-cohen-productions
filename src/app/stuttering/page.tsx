import React from "react";
import { Mic, Volume2, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";
import { BLUR_DATA_URL } from "@/lib/blur";

export const metadata: Metadata = {
  title: "טיפול בגמגום ושיקום קולי",
  description: "מרכז מומחה לטיפול בגמגום במודיעין. שיטה ייחודית המשלבת מוזיקה, סאונד וביטחון עצמי לשחרור הקול.",
  alternates: {
    canonical: "https://www.yakircohen.com/stuttering",
  },
};

const stutteringSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "מהי שיטת הטיפול בגמגום של יקיר כהן?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "השיטה משלבת עבודה מול מיקרופון באולפן הקלטות כדי להעניק פידבק מיידי וביטחון עצמי גבוה תוך שימוש בכלים מעולם הסאונד."
      }
    }
  ]
};

export default function StutteringPage() {
  return (
    <div className="flex flex-col">
      <StructuredData data={stutteringSchema} />
      <section className="bg-zinc-100 py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 italic">לדבר בחופשיות.</h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-10 max-w-lg">
              גמגום זה לא בעיה של הפה. זה דפוס מחשבתי שנבנה עם השנים. אני עובד על שניהם. דרך סאונד, דרך מיקרופון ודרך תרגול אמיתי שמשנה את הדרך שבה אתה שומע את עצמך.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/clinic" className="bg-brand-red text-white px-10 py-5 rounded font-bold shadow-xl hover:bg-red-700 transition-colors">
                למד על השיטה שלנו
              </Link>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-200">
             <Image
               src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2787"
               alt="טיפול בגמגום במודיעין - יקיר כהן הפקות"
               fill
               className="object-cover"
               placeholder="blur"
               blurDataURL={BLUR_DATA_URL}
             />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-4xl font-bold mb-16">למה דווקא אצלנו?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:border-brand-red transition-all">
            <Volume2 className="text-brand-red mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">שימוש בסאונד</h3>
            <p className="text-zinc-500 leading-relaxed">כשאתה שומע את עצמך דרך ציוד הקלטה מקצועי, משהו מתחבר. הקול נשמע אחרת ממה שחשבת. זה ה-feedback הכי ישיר שיש.</p>
          </div>
          <div className="p-10 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:border-brand-red transition-all">
            <ShieldCheck className="text-brand-red mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">ביטחון עצמי</h3>
            <p className="text-zinc-500 leading-relaxed">דגש על הפן הרגשי והעלאת הערך העצמי כבסיס לדיבור שוטף ונוכחות.</p>
          </div>
          <div className="p-10 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:border-brand-red transition-all">
            <Heart className="text-brand-red mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">גישה אישית</h3>
            <p className="text-zinc-500 leading-relaxed">כל מפגש מותאם לקצב ולמקום שאתה נמצא בו. אין לחץ, אין שיפוטיות. רק עבודה שמתקדמת בצעד שלך.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
