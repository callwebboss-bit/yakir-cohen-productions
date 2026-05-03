"use client";

import { useState, useEffect, useRef } from "react";

export type ScrollDir = "up" | "down" | "top";

/**
 * Tracks scroll direction with jitter suppression.
 * Returns "top" when scrollY < 10, "up" when scrolling back, "down" otherwise.
 */
export function useScrollDirection(threshold = 6): { dir: ScrollDir; scrolled: boolean } {
  const [dir, setDir]         = useState<ScrollDir>("top");
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      if (y < 10) {
        setDir("top");
      } else if (Math.abs(y - lastY.current) >= threshold) {
        setDir(y < lastY.current ? "up" : "down");
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);

  return { dir, scrolled };
}
