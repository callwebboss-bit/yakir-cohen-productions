import { SITE_URL } from "@/lib/site-url";
import React from "react";
import { GraduationCap, BookOpen, Music, Users } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";
import WaMeTrackedLink from "@/components/WaMeTrackedLink";
import { BLUR_DATA_URL } from "@/lib/blur";

const ACADEMY_IMAGE = "/assets/images/recording-studio/קורס-מוזיקה.webp";

export const metadata: Metadata = {
  title: "האקדמיה למוזיקה | קורס DJ, הפקה וסאונד",
  description: "מסלולי לימוד למוזיקה, DJ והפקה מתוך אולפן פעיל במודיעין.",
  alternates: {
    canonical: `${SITE_URL}/academy`,
  },
};

const academySchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "קורס דיג'יי והפקה מוזיקלית — האקדמיה של יקיר כהן",
  description:
    "מסלול מעשי במודיעין: ציוד, סאונד, מיקס וקריאת קהל. כולל עבודה ליד אולפן פעיל.",
  provider: {
    "@type": "Organization",
    name: "יקיר כהן הפקות",
    url: SITE_URL,
  },
  educationalLevel: "Beginner to Intermediate",
  teaches: ["DJ mixing basics", "Event audio fundamentals", "Audience pacing"],
  hasCourseInstance: {
    "@type": "CourseInstance",
    name: "מחזור האקדמיה במודיעין",
    courseMode: "onsite",
    location: {
      "@type": "Place",
      name: "מודיעין",
      address: {
        "@type": "PostalAddress",
        addressLocality: "מודיעין-מכבים-רעות",
        addressCountry: "IL",
      },
    },
  },
};

export default function AcademyPage() {
  return (
    <div className="flex flex-col">
      <StructuredData data={academySchema} />
      <section className="relative h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={ACADEMY_IMAGE}
            alt="אקדמיה לסאונד וקורס DJ במודיעין"
            fill
            priority
            className="object-cover opacity-50"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">האקדמיה ליצירה מוזיקלית וקורס דיג&apos;יי</h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-4">
            הדרך שלך למרכז הבמה מתחילה מעשית: מהציוד ועד איך קוראים רחבה בלי להילחץ.
          </p>
          <p className="text-zinc-400 text-base max-w-2xl mx-auto leading-relaxed">
            מקום ללמוד מתוך עבודה אמיתית באולפן פעיל, לא רק מהספר.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-y border-zinc-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-4 text-center md:text-start">קורס דיג&apos;יי — מה תקבלו בפועל</h2>
          <p className="text-zinc-600 leading-relaxed mb-4">
            מתחילים מהציוד והכבילות, עוברים ליסודות מיקס וסנכרון, ומגיעים לחשיבה על מה הקהל צריך לשמוע ברגע הנכון. יש גם תרגול על העמדה באולפן כדי לצבור ביטחון לפני אירוע אמיתי.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link href="/courses" className="inline-flex rounded-2xl bg-brand-red text-white px-6 py-3 font-bold hover:bg-red-700 transition-colors">
              למחזור ופרטים
            </Link>
            <WaMeTrackedLink
              section="academy_dj_block"
              linkLabel="וואטסאפ למועד הבא"
              href={`https://wa.me/972587555456?text=${encodeURIComponent("היי יקיר, רוצים סילבוס ופרטים על קורס הדיג'יי הקרוב.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-2xl border border-zinc-300 px-6 py-3 font-bold hover:border-brand-red transition-colors"
            >
              וואטסאפ למועד הבא
            </WaMeTrackedLink>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-8">ללמוד מתוך אולפן פעיל</h2>
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
              <p>
                האקדמיה של יקיר כהן בנויה למי שרוצה לעבוד, ליצור ולהבין איך הדברים באמת נשמעים מחוץ לכיתה.
              </p>
              <p>
                יש כאן מסלולים למתחילים, ליוצרים ולמי שכבר עובד ורוצה לחדד כיוון, טכניקה וזרימת עבודה.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <Link href="/courses" className="bg-brand-red text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-xl">
                לכל הקורסים
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-zinc-100 p-8 rounded-2xl">
                <Music className="mb-4 text-brand-red" size={32} />
                <h3 className="font-bold mb-2">הפקה מוזיקלית</h3>
                <p className="text-sm text-zinc-500">מהרעיון ועד מיקס מסודר</p>
              </div>
              <div className="bg-zinc-900 text-white p-8 rounded-2xl">
                <GraduationCap className="mb-4 text-brand-red" size={32} />
                <h3 className="font-bold mb-2">קורס DJ</h3>
                <p className="text-sm text-zinc-400">שליטה בעמדה וחשיבה מוזיקלית</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-zinc-900 text-white p-8 rounded-2xl">
                <BookOpen className="mb-4 text-brand-red" size={32} />
                <h3 className="font-bold mb-2">תיאוריה שימושית</h3>
                <p className="text-sm text-zinc-400">מה שצריך כדי לעבוד, לא כדי להרשים</p>
              </div>
              <div className="bg-zinc-100 p-8 rounded-2xl">
                <Users className="mb-4 text-brand-red" size={32} />
                <h3 className="font-bold mb-2">ליווי אישי</h3>
                <p className="text-sm text-zinc-500">כיוון ברור למי שרוצה להתקדם מהר יותר</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedPages
        title="מסלולי אקדמיה קשורים"
        pages={[
          { label: "קורסים", href: "/courses", desc: "מסלולי לימוד והכשרה מעשית" },
          { label: "אולפן ביתי", href: "/academy/home-studio", desc: "בניית סביבת עבודה והקלטה בבית" },
          { label: "אולפן הקלטות", href: "/studio", desc: "לימוד לצד עבודה באולפן פעיל" },
        ]}
      />
    </div>
  );
}
