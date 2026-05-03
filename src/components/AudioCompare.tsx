"use client";

import { useRef, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

interface AudioCompareProps {
  beforeSrc?: string;
  afterSrc?: string;
  title?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeDesc?: string;
  afterDesc?: string;
}

type Mode = "before" | "after";

export default function AudioCompare({
  beforeSrc = "/assets/audio/before-sample.mp3",
  afterSrc  = "/assets/audio/after-sample.mp3",
  title      = "שמעו את ההבדל",
  beforeLabel = "לפני עריכה",
  afterLabel  = "אחרי עריכה",
  beforeDesc  = "הקלטה גולמית — כמו שנקלט",
  afterDesc   = "לאחר עריכה, תיקוני זיופים ומיקס",
}: AudioCompareProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mode, setMode] = useState<Mode>("before");
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (isPlaying) {
      el.pause();
      setIsPlaying(false);
    } else {
      el.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const switchMode = (next: Mode) => {
    const el = audioRef.current;
    if (el) { el.pause(); el.currentTime = 0; }
    setMode(next);
    setIsPlaying(false);
  };

  const reset = () => {
    const el = audioRef.current;
    if (el) { el.currentTime = 0; }
  };

  const src = mode === "before" ? beforeSrc : afterSrc;

  return (
    <div className="p-6 bg-white border border-zinc-200 rounded-2xl max-w-sm mx-auto" dir="rtl">
      <h3 className="font-serif text-lg font-bold mb-1 text-center text-zinc-900">
        {title}
      </h3>
      <p className="text-xs text-zinc-400 text-center mb-4">
        {mode === "before" ? beforeDesc : afterDesc}
      </p>

      {/* Mode toggle */}
      <div className="flex rounded-lg overflow-hidden border border-zinc-200 mb-5 text-sm font-bold">
        {(["before", "after"] as const).map((m) => (
          <button
            key={m}
            onClick={() => switchMode(m)}
            className={`flex-1 py-2 transition-colors ${
              mode === m
                ? "bg-zinc-900 text-white"
                : "bg-white text-zinc-500 hover:bg-zinc-50"
            }`}
          >
            {m === "before" ? beforeLabel : afterLabel}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-5">
        <button
          onClick={toggle}
          className="w-14 h-14 bg-[#D42B2B] text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-md"
          aria-label={isPlaying ? "עצור" : "נגן"}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button
          onClick={reset}
          className="text-zinc-400 hover:text-zinc-700 transition-colors"
          aria-label="חזור להתחלה"
        >
          <RotateCcw size={16} />
        </button>
      </div>

      <audio
        ref={audioRef}
        src={src}
        onEnded={() => setIsPlaying(false)}
        preload="none"
      />
    </div>
  );
}
