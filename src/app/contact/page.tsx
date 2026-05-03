import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTokIcon";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import StructuredData from "@/components/StructuredData";
import SmartMap from "@/components/SmartMap";
import StudioRecordsSVG from "@/components/StudioRecordsSVG";
import { sendLead } from "@/lib/actions/send-lead";

export const metadata: Metadata = {
  title: "צור קשר",
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
    "telephone": "+972587555456",
    "email": "office@yakircohen.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Modi'in",
      "addressCountry": "IL"
    }
  }
};

async function submitLead(formData: FormData) {
  'use server';

  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "פנייה כללית").trim();
  const notes = String(formData.get("notes") ?? "").trim();
  const consent = formData.get("consent") === "on";

  if (!consent) {
    return;
  }

  const result = await sendLead({
    name,
    phone,
    service,
    selections: [],
    totalPrice: 0,
    notes,
  });

  redirect(result.waUrl);
}

export default function ContactPage() {
  return (
    <div className="flex flex-col py-24 px-6 max-w-7xl mx-auto" dir="rtl">
      <StructuredData data={contactSchema} />

      {/* Dynamic Glassmorphism Hero */}
      <div className="relative mb-16 rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <StudioRecordsSVG />
        </div>
        <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-md p-12 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4 italic text-white">בואו נדבר.</h1>
          <p className="text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
            אנחנו כאן לכל שאלה, רעיון או חלום מוזיקלי. בואו נפגש באולפן ונבנה משהו מדהים ביחד.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-1">וואטסאפ</h3>
              <p className="text-zinc-600 text-lg">0587555456</p>
              <a
                href="https://wa.me/972587555456"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-brand-red font-bold underline"
              >
                שלחו לנו הודעה עכשיו
              </a>
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
              <p className="text-zinc-600 text-lg">עמק איילון 34, מודיעין-מכבים-רעות</p>
              <a
                href="https://maps.app.goo.gl/JYokFe9JhSrdAaZQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-brand-red font-bold underline"
              >
                פתח בגוגל מפס
              </a>
            </div>
          </div>

          <SmartMap
            address="עמק איילון 34, מודיעין-מכבים-רעות"
            googleMapsUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.123456789!2d35.0130!3d31.9010!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzEuOTAxMCwzNS4wMTMw!5e0!3m2!1sen!2sil!4v1714567890123!5m2!1sen!2sil"
            thumbnailUrl="/assets/images/map-thumbnail.webp"
          />

          <div className="pt-10 flex gap-4">
            <a href="https://www.instagram.com/yakir.cohen.official" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 border border-zinc-200 rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/dj.yakir.cohen" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 border border-zinc-200 rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all">
              <Facebook size={20} />
            </a>
            <a href="https://www.youtube.com/user/kikosh" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-12 h-12 border border-zinc-200 rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all">
              <Youtube size={20} />
            </a>
            <a href="https://www.tiktok.com/@yakir.cohen.offical" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-12 h-12 border border-zinc-200 rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all">
              <TikTokIcon size={20} />
            </a>
          </div>
        </div>

        <form action={submitLead} className="bg-zinc-50 p-10 rounded-3xl border border-zinc-100 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-zinc-400">שם מלא</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="bg-white border border-zinc-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-zinc-400">טלפון</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="bg-white border border-zinc-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="service" className="text-sm font-bold uppercase tracking-widest text-zinc-400">מה השירות המבוקש?</label>
            <select
              id="service"
              name="service"
              required
              className="bg-white border border-zinc-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all appearance-none"
            >
              <option value="אולפן הקלטות">אולפן הקלטות</option>
              <option value="קליניקה לקול">קליניקה לקול</option>
              <option value="אקדמיה וקורסים">אקדמיה וקורסים</option>
              <option value="אטרקציות לאירועים">אטרקציות לאירועים</option>
              <option value="פנייה כללית">פנייה כללית</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="notes" className="text-sm font-bold uppercase tracking-widest text-zinc-400">הודעה</label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              className="bg-white border border-zinc-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all resize-none"
            />
          </div>

          <div className="flex items-start gap-3">
            <input id="consent" name="consent" type="checkbox" required className="mt-1 h-5 w-5 text-brand-red focus:ring-brand-red/20" />
            <label htmlFor="consent" className="text-sm text-zinc-600">
              אני מסכימ/ה שיקיר כהן הפקות ישתמש בפרטים האלה ליצירת קשר בנוגע לשירותים הרלוונטיים. ניתן לבקש מחיקה בתוך 7 ימים עסקיים.
            </label>
          </div>

          <button className="w-full bg-brand-red text-white py-5 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-xl">
            שלחו — נחזור בוואטסאפ
          </button>
        </form>
      </div>
    </div>
  );
}
