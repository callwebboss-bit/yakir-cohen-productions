import { IconWhatsApp } from '@/components/icons';
import { SectionImage, Eyebrow, SectionWrapper, waHref } from './_shared';

const SPECS = [
  ['משך', '3–6 שעות'],
  ['כלולים', 'מיקס + מאסטר'],
  ['פורמט', 'WAV 24bit / MP3'],
  ['משלוח', 'מייל + WeTransfer'],
  ['תיקונים', 'עד 2 סבבים'],
  ['זמן עד תוצאה', 'באותו שבוע'],
] as const;

export default function FeaturedProduct() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-[1fr_1.2fr] gap-10 items-center bg-white border border-zinc-200 rounded-[20px] p-9 brand-shadow-card">
        <SectionImage
          src="/sections/placeholder.svg"
          alt="צילום אולפן · 4:3"
          width={520}
          height={420}
          aspect="4/3"
        />

        <div>
          <Eyebrow>שירות הדגל</Eyebrow>
          <h2 className="font-serif text-4xl font-black mt-2 mb-3 tracking-tight">
            שיר בהפקה מלאה.
          </h2>
          <p className="text-[15px] text-zinc-600 leading-[1.7] mb-5">
            מילים, לחן, ביצוע. מפיק יושב איתכם, לא רק מקליט. סוף השבוע יש לכם שיר מוכן ברדיו.
          </p>

          <ul className="list-none p-0 mb-5 grid grid-cols-2 gap-2.5 text-[13px] text-zinc-700">
            {SPECS.map(([key, val]) => (
              <li key={key} className="flex justify-between border-b border-zinc-100 pb-1.5">
                <span className="text-zinc-500">{key}</span>
                <span className="font-extrabold">{val}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-2.5 items-center">
            <span className="font-serif text-[30px] font-black text-brand-red">2,400 ₪</span>
            <a
              href={waHref('היי, מעניין אותי שיר בהפקה מלאה')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-red text-white rounded-md font-extrabold text-sm px-[22px] py-[13px] no-underline"
            >
              <IconWhatsApp size={14} />
              בואו נדבר
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
