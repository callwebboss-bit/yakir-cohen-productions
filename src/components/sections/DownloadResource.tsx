import { IconDownload } from '@/components/icons';
import { Eyebrow, Btn, SectionWrapper } from './_shared';

export default function DownloadResource() {
  return (
    <SectionWrapper pad="p-[40px]">
      <div className="bg-zinc-900 text-white rounded-[18px] p-9 grid grid-cols-[auto_1fr_auto] gap-7 items-center">
        <div className="w-[72px] h-[92px] bg-brand-red rounded-[4px] grid place-items-center text-white shadow-[0_12px_24px_rgba(212,43,43,0.3)] shrink-0">
          <IconDownload size={28} />
        </div>

        <div>
          <Eyebrow>מדריך חינמי</Eyebrow>
          <h3 className="font-serif text-[26px] font-black mt-1.5 mb-1.5">
            איך להתכונן להקלטה ראשונה.
          </h3>
          <p className="text-white/65 text-sm m-0 leading-relaxed max-w-[460px]">
            12 עמודים. צ׳קליסט ביום ההקלטה. טעויות נפוצות שעולות זמן.
          </p>
        </div>

        <a
          href="/sections/guide-first-recording.pdf"
          download
          aria-label="הורידו מדריך הקלטה ראשונה כקובץ PDF"
          className="inline-flex items-center gap-2 bg-brand-red text-white rounded-md font-extrabold text-sm px-[22px] py-[13px] no-underline whitespace-nowrap"
        >
          <IconDownload size={14} />
          הורידו PDF
        </a>
      </div>
    </SectionWrapper>
  );
}
