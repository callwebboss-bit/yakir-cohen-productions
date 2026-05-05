import { SITE_URL } from "@/lib/site-url";
import React from "react";
import { Volume2, ShieldCheck, Heart } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import { BLUR_DATA_URL } from "@/lib/blur";

const STUTTERING_IMAGE = "/assets/images/recording-studio/אולפן הקלטות מקצועי.webp";

export const metadata: Metadata = {
  title: "עבודה על גמגום וקול",
  description: "עמוד רקע על הגישה לעבודה עם קול, דיבור ושמיעה עצמית דרך האולפן.",
  alternates: {
    canonical: `${SITE_URL}/stuttering`,
  },
};

const stutteringSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "מה מיוחד בגישה של יקיר כהן לעבודה על גמגום וקול?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "העבודה משלבת שמיעה עצמית דרך ציוד מקצועי, שיחה, תרגול ונוכחות בתוך סביבה רגועה וברורה.",
      },
    },
  ],
};

export default function StutteringPage() {
  return (
    <div className="flex flex-col">
      <StructuredData data={stutteringSchema} />
      <section className="bg-zinc-100 py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">לדבר בחופשיות</h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-10 max-w-lg">
              לפעמים הקושי בדיבור לא יושב רק על הפה. הוא יושב גם על איך ששומעים את עצמנו, איך שאנחנו נלחצים, ואיך שאנחנו מצפים מעצמנו להישמע.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/clinic" className="bg-brand-red text-white px-10 py-5 rounded font-bold shadow-xl hover:bg-red-700 transition-colors">
                לעמוד הקליניקה
              </Link>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-200">
            <Image
              src={STUTTERING_IMAGE}
              alt="עבודה על קול ודיבור באולפן של יקיר כהן"
              fill
              priority
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-4xl font-bold mb-16">למה דווקא דרך האולפן</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:border-brand-red transition-colors">
            <Volume2 className="text-brand-red mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">שמיעה עצמית</h3>
            <p className="text-zinc-500 leading-relaxed">כששומעים את הקול בצורה נקייה, קל יותר להבין מה באמת קורה ולא רק מה נדמה שקורה.</p>
          </div>
          <div className="p-10 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:border-brand-red transition-colors">
            <ShieldCheck className="text-brand-red mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">מקום בטוח</h3>
            <p className="text-zinc-500 leading-relaxed">אפשר לעצור, לבדוק, לנסות שוב. בלי לחץ, בלי הצגה, ובלי צורך להרשים אף אחד.</p>
          </div>
          <div className="p-10 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:border-brand-red transition-colors">
            <Heart className="text-brand-red mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">גישה אישית</h3>
            <p className="text-zinc-500 leading-relaxed">אין תבנית אחת לכולם. הקצב והדרך נבנים לפי מי שנמצא מולנו.</p>
          </div>
        </div>
      </section>

      <RelatedPages
        title="עמודים קשורים"
        pages={[
          { label: "הקליניקה", href: "/clinic", desc: "העמוד המרכזי לעבודה על קול ודיבור" },
          { label: "צור קשר", href: "/contact", desc: "שיחת היכרות ובדיקת התאמה" },
          { label: "אודות", href: "/about", desc: "רקע על יקיר כהן והגישה" },
        ]}
      />
    </div>
  );
}
