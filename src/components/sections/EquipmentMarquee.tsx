"use client";

import React from "react";
import { motion } from "motion/react";

const gear = [
  "Neve 1073",
  "SSL 4000G",
  "U87 Ai",
  "Manley Massive Passive",
  "Teletronix LA-2A",
  "Universal Audio 1176",
  "API 2500",
  "Lexicon 480L",
  "Fairchild 670",
  "Pultec EQP-1A",
  "Avid S6",
  "Focal Trio11 Be",
];

export default function EquipmentMarquee() {
  // Duplicate for seamless loop
  const marqueeItems = [...gear, ...gear, ...gear];

  return (
    <section className="border-y border-zinc-200 bg-white py-12 overflow-hidden">
      <div className="relative flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="mx-12 flex items-center font-sans text-xl font-black uppercase tracking-tighter text-zinc-300 md:text-3xl"
            >
              <span className="mr-8 inline-block h-2 w-2 rounded-full bg-zinc-200" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
