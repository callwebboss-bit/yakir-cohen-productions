import { IconWhatsApp } from '@/components/icons';
import { Eyebrow, SectionWrapper, Btn, waHref } from './_shared';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "קפצו לאולפן לחצי שעה. בלי התחייבות.",
  subtitle = "רואים את החדר. שומעים את ההבדל. אם זה מתאים, קובעים."
}: CTABannerProps) {
  return (
    <SectionWrapper dark>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center text-center md:text-start">
        <div>
          <Eyebrow>לא צריך להחליט עכשיו</Eyebrow>
          <h2 className="font-serif text-[32px] font-black mt-2 mb-2 tracking-tight">
            {title}
          </h2>
          <p className="text-white/65 text-sm m-0">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <a
            href={waHref('היי, רוצה לבוא לאולפן לביקור')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red text-white rounded-md font-extrabold text-sm px-[22px] py-[13px] no-underline whitespace-nowrap"
            aria-label="תאמו ביקור באולפן דרך וואטסאפ"
          >
            <IconWhatsApp size={14} />
            תאמו ביקור
          </a>
          <Btn variant="ghost" dark>מחירון</Btn>
        </div>
      </div>
    </SectionWrapper>
  );
}
