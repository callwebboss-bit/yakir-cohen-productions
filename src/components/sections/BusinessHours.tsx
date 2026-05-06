import { Eyebrow, SectionWrapper } from './_shared';

interface DayHours {
  day: string;
  hours: string;
  isOpen: boolean;
  isToday?: boolean;
}

const DEFAULT_HOURS: DayHours[] = [
  { day: 'ראשון',  hours: '10:00 – 22:00', isOpen: true  },
  { day: 'שני',    hours: '10:00 – 22:00', isOpen: true  },
  { day: 'שלישי',  hours: '10:00 – 22:00', isOpen: true  },
  { day: 'רביעי',  hours: '10:00 – 22:00', isOpen: true  },
  { day: 'חמישי',  hours: '10:00 – 22:00', isOpen: true, isToday: true },
  { day: 'שישי',   hours: 'סגור',           isOpen: false },
  { day: 'שבת',    hours: 'סגור',           isOpen: false },
];

interface BusinessHoursProps {
  hours?: DayHours[];
}

export default function BusinessHours({ hours = DEFAULT_HOURS }: BusinessHoursProps) {
  return (
    <SectionWrapper pad="p-[40px]">
      <Eyebrow>שעות פעילות</Eyebrow>
      <h2 className="font-serif text-[28px] font-extrabold mt-2 mb-[18px]">מתי אנחנו זמינים.</h2>

      <ul className="list-none p-0 m-0 max-w-[480px] bg-white border border-zinc-200 rounded-xl overflow-hidden">
        {hours.map((entry, i) => (
          <li
            key={entry.day}
            className={`flex justify-between items-center px-5 py-3.5 ${
              entry.isToday ? 'bg-brand-red/5' : 'bg-white'
            } ${i > 0 ? 'border-t border-zinc-100' : ''}`}
          >
            <span className="flex gap-2.5 items-center">
              {entry.isToday && (
                <span
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0"
                />
              )}
              <span className="font-extrabold text-sm">{entry.day}</span>
              {entry.isToday && (
                <span className="text-[10px] text-brand-red font-extrabold tracking-[0.1em] uppercase">
                  היום
                </span>
              )}
            </span>
            <span
              className={`text-[13px] font-mono ${
                entry.isOpen ? 'text-zinc-700' : 'text-zinc-400'
              }`}
            >
              {entry.hours}
            </span>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
