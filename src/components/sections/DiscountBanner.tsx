'use client';

import { useState } from 'react';
import { IconZap } from '@/components/icons';
import { Btn } from './_shared';

export default function DiscountBanner() {
  const [code, setCode] = useState('');

  return (
    <div
      dir="rtl"
      className="font-sans bg-gradient-to-r from-zinc-950 to-[#2a1212] text-white rounded-2xl p-6 grid grid-cols-[auto_1fr_auto] gap-6 items-center border-2 border-dashed border-brand-red"
    >
      <div className="w-14 h-14 rounded-[14px] bg-brand-red/20 text-brand-red grid place-items-center shrink-0">
        <IconZap size={28} />
      </div>

      <div>
        <p className="m-0 text-[11px] font-extrabold tracking-[0.22em] uppercase text-brand-red">
          מבצע השבוע
        </p>
        <h3 className="font-serif text-[22px] font-extrabold my-1">
          15% הנחה על הקלטת שיר.
        </h3>
        <p className="m-0 text-xs text-white/60">
          תקף עד יום שישי. הקופון:{' '}
          <code className="bg-white/10 px-1.5 py-0.5 rounded font-mono">SHIR15</code>
        </p>
      </div>

      <div className="flex gap-2">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="קוד קופון"
          aria-label="הכנס קוד קופון"
          className="bg-white/8 border border-white/15 rounded-lg px-3.5 py-2.5 text-white text-[13px] w-36 outline-none placeholder:text-white/40 focus:border-white/40"
        />
        <Btn type="button">הפעל</Btn>
      </div>
    </div>
  );
}
