'use client';

import { useState } from 'react';
import { IconPlay, IconPause } from '@/components/icons';
import { SectionImage, Eyebrow, SectionWrapper } from './_shared';

interface AudioPlayerProps {
  episodeNumber?: number;
  title?: string;
  guests?: string;
  artist?: string;
  durationLabel?: string;
  currentTime?: string;
  progressPct?: number;
  coverSrc?: string;
}

export default function AudioPlayer({
  episodeNumber = 12,
  title = 'איך בוחרים מיקרופון לפודקאסט?',
  guests = 'יקיר כהן ומיכל אלון',
  artist,
  durationLabel = '32 דקות',
  currentTime = '04:32',
  progressPct = 30,
  coverSrc = '/sections/placeholder.svg',
}: AudioPlayerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <SectionWrapper pad="p-[40px]">
      <div className="bg-zinc-900 text-white rounded-[18px] p-7 grid grid-cols-[auto_1fr_auto] gap-6 items-center">
        <SectionImage
          src={coverSrc}
          alt="עטיפת פרק"
          width={120}
          height={120}
          aspect="1/1"
          className="w-[120px] shrink-0"
        />

        <div>
          <Eyebrow>פרק {episodeNumber}</Eyebrow>
          <h3 className="font-serif text-[22px] font-extrabold mt-1.5 mb-1">{title}</h3>
          <p className="text-white/60 text-xs mb-3.5">
            {durationLabel} · {artist || guests}
          </p>

          {/* Progress bar */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-white/60">{currentTime}</span>
            <div
              className="flex-1 h-1 bg-white/10 rounded-sm relative"
              role="progressbar"
              aria-valuenow={progressPct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="התקדמות נגינה"
            >
              <div
                className="absolute start-0 top-0 bottom-0 bg-brand-red rounded-sm"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <span className="font-mono text-[11px] text-white/60">32:14</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? 'השהה' : 'נגן'}
          className="w-[60px] h-[60px] rounded-full bg-brand-red text-white border-0 grid place-items-center cursor-pointer shadow-[0_8px_20px_rgba(212,43,43,0.4)] hover:bg-brand-red/90 transition-colors shrink-0"
        >
          {playing ? <IconPause size={20} /> : <IconPlay size={22} />}
        </button>
      </div>
    </SectionWrapper>
  );
}
