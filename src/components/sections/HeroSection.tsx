"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950 text-white" dir="rtl">
      {/* Background Image with Grayscale to Color Hover Effect */}
      <div className="absolute inset-0 z-0 group">
        <Image
          src={backgroundImage}
          alt="Studio Background"
          fill
          priority
          className="object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-transparent to-zinc-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h1 className="font-sans text-6xl font-black uppercase tracking-tighter md:text-8xl lg:text-9xl text-white drop-shadow-2xl">
            {title}
          </h1>
          <p className="mt-8 font-sans text-lg font-light leading-relaxed tracking-wide text-zinc-300 md:text-xl">
            {subtitle}
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16"
          >
            <Link
              href={ctaLink}
              className="group inline-flex items-center gap-4 rounded-none border border-white bg-white px-10 py-5 font-sans text-xs font-black uppercase tracking-[0.3em] text-zinc-950 transition-all hover:bg-transparent hover:text-white"
            >
              {ctaText}
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimalist Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-4">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">גללו</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-16 w-[1px] bg-gradient-to-b from-white to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
