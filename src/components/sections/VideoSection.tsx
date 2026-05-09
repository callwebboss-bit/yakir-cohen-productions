import { IconPlay } from '@/components/icons';
import { SectionImage, Eyebrow, SectionWrapper } from './_shared';

interface VideoSectionProps {
  videoSrc?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
}

export default function VideoSection({
  videoSrc = 'https://www.youtube.com/watch?v=REPLACE_ME',
  thumbnailSrc = '/sections/placeholder.svg',
  thumbnailAlt = 'תצוגה מקדימה של סרטון האולפן',
  eyebrow = 'צופים מבפנים',
  title = 'ככה נראית הקלטה אצלנו.',
  description = 'סשן אחד, שלוש שעות, מקוצר ל־90 שניות. המקום, הציוד, ואיך עובד התהליך.',
}: VideoSectionProps) {
  return (
    <SectionWrapper>
      <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-9 items-center">
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

        <div className="text-center lg:text-start order-first lg:order-none">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="font-serif text-3xl md:text-[30px] font-black mt-2 mb-3 tracking-tight">
            {title}
          </h2>
          <p className="text-zinc-600 text-sm leading-[1.7] mb-4">
            {description}
          </p>
          <p className="text-zinc-400 text-[11px] m-0">
            וידאו מתארח ב־YouTube · נטען רק על קליק
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
