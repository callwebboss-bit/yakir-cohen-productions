import React from "react";
import { GraduationCap, BookOpen, Music, Users, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "האקדמיה למוזיקה | קורס DJ, הפקה וסאונד - יקיר כהן",
  description: "הצטרפו לאקדמיה המובילה למוזיקה במודיעין. קורסי DJ, הפקה מוזיקלית, סאונד וליווי אמנותי ברמה הגבוהה ביותר.",
  alternates: {
    canonical: "https://www.yakircohen.com/academy",
  },
};

const academySchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "קורס DJ והפקה מוזיקלית",
  "description": "לימודי מוזיקה מקצועיים באולפני יקיר כהן במודיעין.",
  "provider": {
    "@type": "Organization",
    "name": "יקיר כהן הפקות"
  }
};

export default function AcademyPage() {
  return (
    <div className="flex flex-col">
      <StructuredData data={academySchema} />
      <section className="relative h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670" 
            alt="Academy Background" 
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 italic">האקדמיה למוזיקה</h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light">
            המקום שבו הרעיונות שלכם הופכים למציאות מוזיקלית.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-8">ללמוד מהטובים ביותר</h2>
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
              <p>
                האקדמיה של יקיר כהן היא לא רק בית ספר למוזיקה, היא חממה ליצירה. אנו מציעים מסלולי לימוד המותאמים אישית לכל תלמיד, בין אם מדובר במתחילים או באמנים פעילים.
              </p>
              <p>
                הלימודים מתקיימים באולפנים המקצועיים שלנו במודיעין, עם הציוד המתקדם ביותר בשוק וליווי צמוד של מרצים פעילים בתעשייה.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <Link href="/courses" className="bg-brand-red text-white px-8 py-4 rounded font-bold hover:scale-105 transition-all shadow-xl">
                צפה בקורסים שלנו
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-zinc-100 p-8 rounded-2xl">
                <Music className="mb-4 text-brand-red" size={32} />
                <h3 className="font-bold mb-2">הפקה מוזיקלית</h3>
                <p className="text-sm text-zinc-500">משלב הרעיון ועד למיקס סופי</p>
              </div>
              <div className="bg-zinc-900 text-white p-8 rounded-2xl">
                <GraduationCap className="mb-4 text-brand-red" size={32} />
                <h3 className="font-bold mb-2">קורס DJ</h3>
                <p className="text-sm text-zinc-400">שליטה מלאה בעמדה</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-zinc-900 text-white p-8 rounded-2xl">
                <BookOpen className="mb-4 text-brand-red" size={32} />
                <h3 className="font-bold mb-2">תיאוריה מוזיקלית</h3>
                <p className="text-sm text-zinc-400">הבנת שפת המוזיקה</p>
              </div>
              <div className="bg-zinc-100 p-8 rounded-2xl">
                <Users className="mb-4 text-brand-red" size={32} />
                <h3 className="font-bold mb-2">ליווי אמנותי</h3>
                <p className="text-sm text-zinc-500">ייעוץ וקידום אישי</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
