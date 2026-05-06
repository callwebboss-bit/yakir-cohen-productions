import { Eyebrow, SectionWrapper } from './_shared';

interface Step {
  title: string;
  description: string;
}

const DEFAULT_STEPS: Step[] = [
  {
    title: 'כותבים בוואטסאפ',
    description: 'אומרים מה רוצים להקליט. אנחנו חוזרים בתוך כמה שעות עם הצעה.',
  },
  {
    title: 'מתאמים סשן',
    description: 'בוחרים יום ושעה. שולחים לכם הסבר על מה להביא.',
  },
  {
    title: 'מקליטים יחד',
    description: 'מגיעים לאולפן במודיעין. סשן 3 שעות. מפיק לידכם.',
  },
  {
    title: 'יוצאים עם קובץ',
    description: 'מיקס מוכן באותו יום. תיקונים בימים הבאים.',
  },
];

interface ProcessStepsProps {
  steps?: Step[];
}

export default function ProcessSteps({ steps = DEFAULT_STEPS }: ProcessStepsProps) {
  return (
    <SectionWrapper>
      <Eyebrow>איך זה עובד</Eyebrow>
      <h2 className="font-serif text-4xl font-black mt-2 mb-7 tracking-tight">
        ארבעה צעדים. בלי הפתעות.
      </h2>

      <ol className="list-none p-0 m-0 grid grid-cols-4 gap-4" aria-label="שלבי התהליך">
        {steps.map((step, i) => (
          <li key={step.title} className="relative">
            <div
              aria-hidden="true"
              className="w-11 h-11 rounded-full bg-zinc-900 text-white grid place-items-center font-serif font-black text-lg mb-3.5"
            >
              {i + 1}
            </div>
            {/* Connector line between steps */}
            {i < steps.length - 1 && (
              <div
                aria-hidden="true"
                className="absolute top-[22px] start-[50px] end-[-8px] h-px bg-zinc-200"
              />
            )}
            <h3 className="font-serif text-lg font-extrabold mb-1.5">{step.title}</h3>
            <p className="text-zinc-500 text-[13px] m-0 leading-relaxed">{step.description}</p>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
