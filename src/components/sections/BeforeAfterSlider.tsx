'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Eyebrow, SectionWrapper, BLUR_PLACEHOLDER } from './_shared';

export default function BeforeAfterSlider() {
  const [pct, setPct] = useState(50);

  return (
    <SectionWrapper pad="p-[40px]">
      <Eyebrow>השוואה</Eyebrow>
      <h2 className="font-serif text-[28px] font-black mt-2 mb-[18px]">לפני ואחרי.</h2>

      <div
        className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-200"
        aria-label="השוואת לפני ואחרי — גרור כדי להשוות"
      >
        {/* After (full base layer) */}
        <Image
          src="/sections/placeholder.svg"
          alt="אחרי עיבוד"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          quality={75}
        />

        {/* Before (clipped with clip-path — shows from start edge to pct%) */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - pct}% 0 0)`,
            borderInlineEnd: '2px solid var(--color-brand-red)',
          }}
        >
          <Image
            src="/sections/placeholder.svg"
            alt="לפני עיבוד"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
            quality={75}
          />
        </div>

        {/* Labels */}
        <span className="absolute top-3 end-3 bg-white text-[11px] font-extrabold px-2.5 py-1 rounded">
          אחרי
        </span>
        <span className="absolute top-3 start-3 bg-zinc-900 text-white text-[11px] font-extrabold px-2.5 py-1 rounded">
          לפני
        </span>

        {/* Range input (invisible, full overlay for drag) */}
        <input
          type="range"
          min="0"
          max="100"
          value={pct}
          onChange={(e) => setPct(Number(e.target.value))}
          aria-label="גרור לשינוי השוואה"
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />

        {/* Drag handle */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 pointer-events-none flex items-center justify-center w-9"
          style={{ insetInlineStart: `${pct}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-9 h-9 rounded-full bg-white text-brand-red grid place-items-center shadow-[0_4px_12px_rgba(0,0,0,0.2)] font-black text-sm">
            ↔
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
