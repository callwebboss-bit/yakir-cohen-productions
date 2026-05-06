'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IconChev } from '@/components/icons';
import { SectionWrapper, BLUR_PLACEHOLDER } from './_shared';

interface Slide {
  src: string;
  alt: string;
}

const DEFAULT_SLIDES: Slide[] = [
  { src: '/sections/placeholder.svg', alt: 'צילום אולפן 1' },
  { src: '/sections/placeholder.svg', alt: 'צילום אולפן 2' },
  { src: '/sections/placeholder.svg', alt: 'צילום אולפן 3' },
];

interface ImageSliderProps {
  slides?: Slide[];
}

export default function ImageSlider({ slides = DEFAULT_SLIDES }: ImageSliderProps) {
  const [idx, setIdx] = useState(0);

  function prev() { setIdx((idx - 1 + slides.length) % slides.length); }
  function next() { setIdx((idx + 1) % slides.length); }

  return (
    <SectionWrapper pad="p-[40px]">
      <div className="relative aspect-[2.4/1] rounded-2xl overflow-hidden">
        <Image
          src={slides[idx].src}
          alt={slides[idx].alt}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          quality={75}
        />

        {/* Prev */}
        <button
          type="button"
          onClick={prev}
          aria-label="תמונה קודמת"
          className="absolute top-1/2 end-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-0 grid place-items-center cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.18)] text-zinc-900 hover:bg-zinc-50"
        >
          <IconChev size={18} />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={next}
          aria-label="תמונה הבאה"
          className="absolute top-1/2 start-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-0 grid place-items-center cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.18)] text-zinc-900 hover:bg-zinc-50 scale-x-[-1]"
        >
          <IconChev size={18} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 start-0 end-0 flex gap-1.5 justify-center">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`עבור לתמונה ${i + 1}`}
              aria-current={i === idx ? 'true' : undefined}
              className={`h-2 rounded-sm border-0 cursor-pointer transition-all ${
                i === idx ? 'w-6 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
