'use client';

import { useState } from 'react';
import { IconStar } from '@/components/icons';
import { SectionWrapper } from './_shared';

export default function SurveyFeedback() {
  const [score, setScore] = useState(0);

  return (
    <SectionWrapper pad="p-9">
      <div className="bg-white border border-zinc-200 rounded-[14px] p-[22px] max-w-[560px] grid grid-cols-[1fr_auto] gap-5 items-center">
        <div>
          <h3 className="font-serif text-lg font-extrabold m-0">איך הייתה החוויה איתנו?</h3>
          <p className="text-xs text-zinc-500 mt-1 mb-0">לוקח 5 שניות. עוזר לנו להשתפר.</p>
        </div>

        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              aria-label={`${n} כוכבים`}
              onClick={() => setScore(n)}
              className={`bg-transparent border-0 p-1 cursor-pointer transition-colors ${
                n <= score ? 'text-amber-400' : 'text-zinc-300'
              }`}
            >
              <IconStar size={22} />
            </button>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
