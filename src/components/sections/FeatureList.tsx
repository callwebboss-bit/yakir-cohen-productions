import { IconShield, IconMic, IconHeadphones, IconZap, IconMusic, IconClock } from '@/components/icons';
import { Eyebrow, SectionWrapper } from './_shared';
import type { ReactNode } from 'react';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: <IconShield size={20} />,
    title: 'חדר אקוסטי בנוי',
    description: 'קירות שבולעים רעש מבחוץ. בלי הדים, בלי שכן בקיר.',
  },
  {
    icon: <IconMic size={20} />,
    title: 'מיקרופוני אולפן',
    description: 'מיקים שאתם מכירים מהרדיו. לא USB, לא ים־סוף.',
  },
  {
    icon: <IconHeadphones size={20} />,
    title: 'מפיק לידכם',
    description: 'לא טכנאי. מישהו ששומע מה שאתם לא שומעים.',
  },
  {
    icon: <IconZap size={20} />,
    title: 'מיקס באותו יום',
    description: 'יוצאים עם קובץ. לא מחכים שבוע למייל.',
  },
  {
    icon: <IconMusic size={20} />,
    title: 'ניסיון של 20 שנה',
    description: '1,400+ שירים עברו פה. גם הראשון שלכם יעבוד.',
  },
  {
    icon: <IconClock size={20} />,
    title: 'זמינים בערב',
    description: 'ראשון–חמישי, 10:00 עד 22:00. גם אחרי העבודה.',
  },
];

interface FeatureListProps {
  features?: Feature[];
}

export default function FeatureList({ features = FEATURES }: FeatureListProps) {
  return (
    <SectionWrapper>
      <Eyebrow>למה האולפן הזה</Eyebrow>
      <h2 className="font-serif text-4xl font-black mt-2 mb-1.5 tracking-tight">
        מה שלא תקבלו במאהל הביתי.
      </h2>
      <p className="text-zinc-600 text-sm mb-7 max-w-[560px]">
        שש סיבות שלקוחות חוזרים. כל אחת קונקרטית, אפשר למדוד.
      </p>

      <ul className="list-none p-0 m-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {features.map((f) => (
          <li
            key={f.title}
            className="bg-white border border-zinc-200 rounded-[14px] p-[22px] flex flex-col gap-2.5"
          >
            <span
              aria-hidden="true"
              className="w-10 h-10 rounded-[10px] bg-brand-red/8 text-brand-red grid place-items-center"
            >
              {f.icon}
            </span>
            <h3 className="font-serif text-lg font-extrabold m-0">{f.title}</h3>
            <p className="text-zinc-500 text-[13px] m-0 leading-relaxed">{f.description}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
