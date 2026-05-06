'use client';

import { useState } from 'react';
import { IconSearch } from '@/components/icons';
import { Eyebrow, Btn, SectionWrapper } from './_shared';

const QUICK_SEARCHES = ['הקלטת שיר', 'ברכה לחתונה', 'DJ', 'פודקאסט'];

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [q, setQ] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch?.(q);
  }

  return (
    <SectionWrapper pad="p-[40px]">
      <div className="max-w-[720px] mx-auto">
        <Eyebrow>חיפוש</Eyebrow>
        <h2 className="font-serif text-[26px] font-extrabold mt-2 mb-3.5">מה אתם מחפשים?</h2>

        <form
          onSubmit={handleSubmit}
          role="search"
          className="flex gap-2 bg-white border border-zinc-200 rounded-xl p-1.5 shadow-[-4px_4px_0_rgba(0,0,0,0.05)]"
        >
          <span
            aria-hidden="true"
            className="grid place-items-center ps-3 text-zinc-400"
          >
            <IconSearch size={18} />
          </span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="למשל: הקלטת שיר, פודקאסט, DJ לחתונה"
            aria-label="חיפוש"
            className="flex-1 border-0 outline-none py-3 px-1.5 font-sans text-sm text-zinc-900 bg-transparent"
          />
          <Btn type="submit">חפש</Btn>
        </form>

        <div className="flex gap-2 flex-wrap mt-3.5" aria-label="חיפושים מהירים">
          {QUICK_SEARCHES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setQ(s)}
              className="bg-white border border-zinc-200 rounded-2xl px-3 py-1.5 text-xs text-zinc-600 font-sans cursor-pointer hover:border-zinc-400 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
