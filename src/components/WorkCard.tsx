"use client";

import React from "react";
import Image from "next/image";
import { Share2 } from "lucide-react";
import { BLUR_DATA_URL } from "@/lib/blur";

interface WorkCardProps {
  title: string;
  category: string;
  image: string;
}

export default function WorkCard({ title, category, image }: WorkCardProps) {
  const handleShare = () => {
    if (typeof window !== "undefined") {
      if (navigator.share) {
        navigator.share({
          title: title,
          text: `תראו את העבודה המדהימה של יקיר כהן הפקות: ${title}`,
          url: window.location.href,
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert("הקישור הועתק!");
      }
    }
  };

  return (
    <div className="relative group overflow-hidden rounded-3xl border border-zinc-200 aspect-video">
      <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end text-white">
        <div className="text-right">
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-2 block">{category}</span>
          <h3 className="text-2xl font-bold font-serif">{title}</h3>
        </div>
        <button 
          onClick={handleShare}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer"
        >
          <Share2 size={20} />
        </button>
      </div>
    </div>
  );
}
