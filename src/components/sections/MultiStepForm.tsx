'use client';

import { useState } from 'react';
import { IconWhatsApp } from '@/components/icons';
import { Eyebrow, SectionWrapper, waHref } from './_shared';

interface FormData {
  type: string;
  date: string;
  name: string;
}

const TOTAL_STEPS = 3;
const TYPE_OPTIONS = ['שיר אישי', 'ברכה לאירוע', 'פודקאסט', 'אחר'];

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>({ type: '', date: '', name: '' });

  function next() {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    } else {
      const msg = `היי, אני ${data.name || 'אנונימי'}. רוצה ${data.type || 'להתייעץ'}, ל${data.date || 'מועד גמיש'}.`;
      window.open(waHref(msg), '_blank');
    }
  }

  return (
    <SectionWrapper pad="p-[40px]">
      <Eyebrow>שאלון התאמה</Eyebrow>
      <h2 className="font-serif text-[28px] font-black mt-1.5 mb-[18px]">
        שלוש שאלות, ואתם בוואטסאפ.
      </h2>

      <div className="bg-white border border-zinc-200 rounded-2xl p-7 max-w-[580px]">
        {/* Progress bar */}
        <div className="flex gap-1.5 mb-[22px]">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className={`flex-1 h-1 rounded-sm ${n <= step ? 'bg-brand-red' : 'bg-zinc-200'}`}
            />
          ))}
        </div>
        <p className="m-0 text-xs text-zinc-500">שלב {step} מתוך {TOTAL_STEPS}</p>

        {/* Step 1 */}
        {step === 1 && (
          <div className="mt-3.5">
            <h3 className="font-serif text-[22px] font-extrabold mb-3.5">מה רוצים להקליט?</h3>
            <div className="grid grid-cols-2 gap-2.5">
              {TYPE_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setData({ ...data, type: opt })}
                  className={`py-3.5 px-4 rounded-[10px] font-sans text-sm font-bold cursor-pointer text-right border transition-colors ${
                    data.type === opt
                      ? 'bg-zinc-900 text-white border-zinc-900'
                      : 'bg-white text-[#1a1a1a] border-zinc-200 hover:border-zinc-400'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="mt-3.5">
            <h3 className="font-serif text-[22px] font-extrabold mb-3.5">מתי לערך?</h3>
            <input
              value={data.date}
              onChange={(e) => setData({ ...data, date: e.target.value })}
              placeholder="השבוע, סוף החודש, גמיש"
              aria-label="מועד מועדף להקלטה"
              className="w-full box-border py-3.5 px-4 rounded-[10px] border border-zinc-200 font-sans text-sm outline-none focus:border-zinc-400"
            />
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="mt-3.5">
            <h3 className="font-serif text-[22px] font-extrabold mb-3.5">איך קוראים לכם?</h3>
            <input
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="שם פרטי"
              aria-label="שם פרטי"
              className="w-full box-border py-3.5 px-4 rounded-[10px] border border-zinc-200 font-sans text-sm outline-none focus:border-zinc-400"
            />
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-2.5 mt-[22px]">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-5 py-3 border border-zinc-300 bg-white rounded-lg font-bold font-sans text-[13px] cursor-pointer hover:border-zinc-400"
            >
              חזרה
            </button>
          )}
          <button
            type="button"
            onClick={next}
            className="flex-1 py-3 px-5 border-0 bg-brand-red text-white rounded-lg font-extrabold text-sm font-sans cursor-pointer flex justify-center items-center gap-2"
          >
            {step === TOTAL_STEPS ? (
              <>
                <IconWhatsApp size={14} />
                שלחו לוואטסאפ
              </>
            ) : (
              'המשך'
            )}
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
