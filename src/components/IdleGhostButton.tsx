"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const IDLE_MS = 30_000;

/* Route → YouTube video ID for contextual demo preview */
const ROUTE_VIDEO: [string, string][] = [
  ["/attractions/cold-fireworks",          "https://www.youtube.com/watch?v=FMZY-Ck0clo"],
  ["/attractions/confetti-cannon",         "https://www.youtube.com/watch?v=SkBHvqC-S2Q"],
  ["/attractions/wedding-smoking-machine", "https://www.youtube.com/watch?v=O4MwVBjL2v8"],
  ["/events/led-booth",                    "https://www.youtube.com/watch?v=rsZjbz1rld0"],
  ["/events/stage-led-dj",                 "https://www.youtube.com/watch?v=nBtKa0JZfL0"],
];

function getVideoUrl(pathname: string): string {
  for (const [route, url] of ROUTE_VIDEO) {
    if (pathname === route || pathname.startsWith(route + "/")) return url;
  }
  return "https://www.youtube.com/@yakir.cohen.official";
}

/** Routes that trigger the idle ghost CTA */
function isAttractionsRoute(pathname: string): boolean {
  return (
    pathname.startsWith("/attractions") ||
    pathname.startsWith("/events/led-booth") ||
    pathname.startsWith("/events/stage-led-dj") ||
    pathname.startsWith("/events/dj-events")
  );
}

/**
 * After 30s of user inactivity on attraction pages,
 * a ghost button gently fades in prompting a video demo.
 */
export default function IdleGhostButton() {
  const pathname = usePathname() ?? "/";
  const [visible, setVisible] = useState(false);
  const active = isAttractionsRoute(pathname);

  useEffect(() => {
    if (!active) { setVisible(false); return; }

    let timer: ReturnType<typeof setTimeout>;

    const reset = () => {
      setVisible(false);
      clearTimeout(timer);
      timer = setTimeout(() => setVisible(true), IDLE_MS);
    };

    const events = ["scroll", "click", "keydown", "mousemove", "touchstart"] as const;
    events.forEach((e) => window.addEventListener(e, reset, { passive: true }));
    timer = setTimeout(() => setVisible(true), IDLE_MS);

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, reset));
    };
  }, [active]);

  if (!visible || !active) return null;

  const videoUrl = getVideoUrl(pathname);

  return (
    <div
      className="fixed bottom-40 start-5 z-40"
      style={{ animation: "ghostIn 0.6s ease forwards" }}
    >
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white/90 backdrop-blur-md border border-zinc-200 text-zinc-800 px-4 py-3 rounded-full shadow-md hover:shadow-lg hover:border-[#D42B2B] hover:text-[#D42B2B] transition-all text-sm font-bold"
        onClick={() => setVisible(false)}
        aria-label="ראו דוגמאות בווידאו"
      >
        <span aria-hidden="true">🎬</span>
        <span>רוצה לראות דוגמה בווידאו?</span>
      </a>
    </div>
  );
}
