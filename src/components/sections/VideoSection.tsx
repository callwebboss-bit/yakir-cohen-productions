import { IconPlay } from '@/components/icons';
import { SectionImage, Eyebrow, SectionWrapper } from './_shared';

interface VideoSectionProps {
  videoSrc?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
}

export default function VideoSection({
  videoSrc = 'https://www.youtube.com/watch?v=REPLACE_ME',
  thumbnailSrc = '/sections/placeholder.svg',
  thumbnailAlt = 'תצוגה מקדימה של סרטון האולפן',
}: VideoSectionProps) {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-[1.4fr_1fr] gap-9 items-center">
        <div className="relative">
          <SectionImage
            src={thumbnailSrc}
            alt={thumbnailAlt}
            width={640}
            height={360}
            aspect="16/9"
          />
          <a
            href={videoSrc}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="הפעל סרטון האולפן"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full bg-brand-red text-white border-0 grid place-items-center shadow-[0_12px_30px_rgba(212,43,43,0.4)] hover:bg-brand-red/90 transition-colors"
          >
            <IconPlay size={28} />
          </a>
        </div>

        <div>
          <Eyebrow>צופים מבפנים</Eyebrow>
          <h2 className="font-serif text-[30px] font-black mt-2 mb-3 tracking-tight">
            ככה נראית הקלטה אצלנו.
          </h2>
          <p className="text-zinc-600 text-sm leading-[1.7] mb-4">
            סשן אחד, שלוש שעות, מקוצר ל־90 שניות. המקום, הציוד, ואיך עובד התהליך.
          </p>
          <p className="text-zinc-400 text-[11px] m-0">
            וידאו מתארח ב־YouTube · נטען רק על קליק
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
