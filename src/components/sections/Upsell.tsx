import { IconZap, IconMusic, IconShield, IconMic } from '@/components/icons';
import { Eyebrow, SectionWrapper } from './_shared';
import type { ReactNode } from 'react';

interface UpsellItem {
  name: string;
  price: string;
  icon: ReactNode;
}

const ITEMS: UpsellItem[] = [
  { name: 'עמדת לד',  price: '1,500', icon: <IconZap size={16} /> },
  { name: 'עשן כבד',  price: '750',   icon: <IconMusic size={16} /> },
  { name: 'צלם',      price: '2,200', icon: <IconShield size={16} /> },
  { name: 'DJ',       price: '7,500', icon: <IconMic size={16} /> },
];

export default function Upsell() {
  return (
    <SectionWrapper>
      <Eyebrow muted>אולי יעניין אתכם גם</Eyebrow>
      <h2 className="font-serif text-[26px] font-extrabold mt-2 mb-[18px]">
        תוסיפו לחבילה.
      </h2>

      <ul className="list-none p-0 m-0 grid grid-cols-4 gap-3">
        {ITEMS.map((item) => (
          <li
            key={item.name}
            className="bg-white border border-zinc-200 rounded-xl p-4 flex justify-between items-center gap-3"
          >
            <span className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-brand-red/8 text-brand-red grid place-items-center shrink-0">
                {item.icon}
              </span>
              <span>
                <p className="m-0 font-extrabold text-sm">{item.name}</p>
                <p className="m-0 text-[11px] text-zinc-500">+ {item.price} ₪</p>
              </span>
            </span>
            <button
              aria-label={`הוסף ${item.name} לחבילה`}
              className="w-7 h-7 rounded-full border border-zinc-300 bg-white text-zinc-700 font-black text-base cursor-pointer grid place-items-center"
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
