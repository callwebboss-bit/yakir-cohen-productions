import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "צור קשר | יקיר כהן הפקות - אולפן הקלטות במודיעין",
  description: "צרו קשר עם יקיר כהן הפקות לתיאום הקלטה, ייעוץ קולי או הרשמה לקורסים. זמינים עבורכם במודיעין.",
  alternates: {
    canonical: "https://www.yakircohen.com/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "צור קשר - יקיר כהן הפקות",
  "description": "דף יצירת קשר לתיאום סשנים וייעוץ.",
  "mainEntity": {
    "@type": "Organization",
    "name": "יקיר כהן הפקות",
    "telephone": "+972-52-8701918",
    "email": "office@yakircohen.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Modi'in",
      "addressCountry": "IL"
    }
  }
};

export default function ContactPage() {
  return (
    <div className="flex flex-col py-24 px-6 max-w-7xl mx-auto">
      <StructuredData data={contactSchema} />
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl font-bold mb-4 italic">בואו נדבר.</h1>
        <p className="text-zinc-500 text-lg">אנחנו כאן לכל שאלה, רעיון או חלום מוזיקלי.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">טלפון</h3>
              <p className="text-zinc-600 text-lg">052-XXXXXXX</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">אימייל</h3>
              <p className="text-zinc-600 text-lg">office@yakircohen.com</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">מיקום האולפן</h3>
              <p className="text-zinc-600 text-lg">מודיעין מכבים רעות</p>
            </div>
          </div>

          <div className="pt-10 flex gap-4">
            <a href="#" className="w-12 h-12 border border-zinc-200 rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 border border-zinc-200 rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-12 h-12 border border-zinc-200 rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <form className="bg-zinc-50 p-10 rounded-3xl border border-zinc-100 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase tracking-widest text-zinc-400">שם מלא</label>
              <input type="text" className="bg-white border border-zinc-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase tracking-widest text-zinc-400">טלפון</label>
              <input type="tel" className="bg-white border border-zinc-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold uppercase tracking-widest text-zinc-400">מה השירות המבוקש?</label>
            <select className="bg-white border border-zinc-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all appearance-none">
              <option>אולפן הקלטות</option>
              <option>קליניקה לקול</option>
              <option>אקדמיה וקורסים</option>
              <option>אטרקציות לאירועים</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold uppercase tracking-widest text-zinc-400">הודעה</label>
            <textarea rows={4} className="bg-white border border-zinc-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all resize-none"></textarea>
          </div>
          <button className="w-full bg-brand-red text-white py-5 rounded-xl font-bold hover:scale-[1.02] transition-all shadow-xl">
            שלח הודעה
          </button>
        </form>
      </div>
    </div>
  );
}
