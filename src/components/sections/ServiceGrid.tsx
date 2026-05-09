"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  href: string;
}

const services: ServiceCard[] = [
  {
    title: "מאסטרינג",
    description: "הנגיעה הסופית של מצוינות סאונד. ציוד אנלוגי יוקרתי פוגש דיוק דיגיטלי מתקדם.",
    image: "/assets/images/recording-studio/אולפן ההקלטה יקיר כהן.webp",
    href: "/studio",
  },
  {
    title: "הקלטה",
    description: "אקוסטיקה נקייה ומיקרופונים אגדיים. לכוד את הביצוע שלך בצורה האותנטית ביותר.",
    image: "/assets/images/recording-studio/יקיר כהן הפקות באולפן.webp",
    href: "/studio",
  },
  {
    title: "פוסט-פרודקשן",
    description: "עריכה מקצועית, שחזור ועיצוב סאונד יצירתי. הפיכת הקלטות גולמיות ליצירות מלוטשות.",
    image: "/assets/images/podcast/אולפן פודקאסט - יקיר כהן הפקות.webp",
    href: "/podcast",
  },
];

export default function ServiceGrid() {
  return (
    <section className="bg-white py-32 md:py-48" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col overflow-hidden bg-white"
            >
              <Link href={service.href} className="block overflow-hidden">
                <div className="relative aspect-[3/4] w-full overflow-hidden border border-zinc-100 transition-colors group-hover:border-zinc-950">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                </div>
                <div className="flex flex-1 flex-col pt-10">
                  <h3 className="font-serif text-3xl font-black uppercase tracking-tighter text-zinc-950">
                    {service.title}
                  </h3>
                  <div className="mt-6 h-px w-16 bg-zinc-950 transition-all duration-500 group-hover:w-full" />
                  <p className="mt-8 font-sans text-sm leading-relaxed tracking-wide text-zinc-500 group-hover:text-zinc-950 transition-colors">
                    {service.description}
                  </p>
                  <div className="mt-10 overflow-hidden text-start">
                    <div className="relative">
                      <span className="inline-block font-sans text-[10px] font-black uppercase tracking-[0.3em] text-zinc-950 transition-transform duration-500 group-hover:-translate-x-2">
                         למידע נוסף —
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
