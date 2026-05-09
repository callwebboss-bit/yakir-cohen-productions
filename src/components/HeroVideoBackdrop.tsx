"use client";

import { useEffect, useState } from "react";

type Props = {
  poster: string;
  className?: string;
};

/**
 * רקע וידאו אופציונלי לדף הבית.
 * הגדרו NEXT_PUBLIC_HERO_WEBM_URL לכתובת WebM קלה (למשל מ־CDN).
 * ללא URL — הרכיב לא מרנדר וידאו.
 */
export default function HeroVideoBackdrop({ poster, className }: Props) {
  const src = process.env.NEXT_PUBLIC_HERO_WEBM_URL;
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAllowMotion(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (!src || !allowMotion) return null;

  return (
    <video
      className={className}
      autoPlay
      muted
      playsInline
      loop
      preload="metadata"
      poster={poster}
      aria-hidden
    >
      <source src={src} type="video/webm" />
    </video>
  );
}
