"use client";

import React from "react";
import { motion } from "motion/react";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2005",
    title: "ההתחלה",
    description: "יקיר כהן מתחיל את דרכו בהפקה מוזיקלית, עם דגש על ליווי כשרונות מקומיים.",
  },
  {
    year: "2012",
    title: "התרחבות במודיעין",
    description: "אולפן הדגל נפתח במודיעין, ומביא הקלטה ברמה מקצועית ללב העיר.",
  },
  {
    year: "2018",
    title: "אבולוציה דיגיטלית",
    description: "השקת שירותי מיקסינג ומאסטרינג אונליין, המגיעים לאמנים בכל רחבי העולם.",
  },
  {
    year: "2024",
    title: "מרכז חדשנות",
    description: "שילוב בינה מלאכותית לפיצול ערוצים ואולפני פודקאסט מהמתקדמים בישראל.",
  },
];

export default function LegacyTimeline() {
  return (
    <section className="bg-zinc-950 py-24 text-white md:py-32" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 text-start">
          <h2 className="font-sans text-4xl font-black uppercase tracking-tighter md:text-6xl">
            המורשת שלנו
          </h2>
          <div className="mt-6 h-1 w-24 bg-white" />
        </div>

        <div className="relative space-y-24">
          {/* Vertical Line */}
          <div className="absolute right-[1.375rem] top-0 h-full w-px bg-zinc-800 md:right-1/2 md:left-auto" />

          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`relative flex flex-col items-start md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Year */}
              <div className="sticky top-24 z-10 flex w-full items-center md:w-1/2">
                <div
                  className={`flex items-center gap-4 w-full ${
                    index % 2 === 0 ? "md:flex-row-reverse md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white bg-zinc-950 font-sans text-xs font-black">
                    {milestone.year}
                  </div>
                  <div className="h-px flex-1 bg-zinc-800 md:w-24 md:flex-none" />
                </div>
              </div>

              {/* Content */}
              <div className="mt-8 w-full pr-16 md:mt-0 md:w-1/2 md:px-12 text-start">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="font-serif text-2xl font-black uppercase tracking-tighter">
                    {milestone.title}
                  </h3>
                  <p className="mt-4 font-sans text-base font-light leading-relaxed tracking-wide text-zinc-400">
                    {milestone.description}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
