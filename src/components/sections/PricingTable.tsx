import { IconWhatsApp, IconCheck, IconX } from '@/components/icons';
import { Eyebrow, Btn, SectionWrapper, waHref } from './_shared';

interface Tier {
  name: string;
  price: string;
  tag: string | null;
  includes: string[];
  missing: string[];
  cta: string;
}

const DEFAULT_TIERS: Tier[] = [
  {
    name: 'ברכה',
    price: '490',
    tag: null,
    includes: ['עד 90 שניות', 'רקע מוזיקלי בסיסי', 'מיקס לוואטסאפ'],
    missing: ['סשן באולפן', 'מפיק נוכח'],
    cta: 'התחל ברכה',
  },
  {
    name: 'הקלטה',
    price: '990',
    tag: null,
    includes: ['סשן 3 שעות', 'תיקון זיופים בסיסי', 'מיקס מהיר', 'MP3 + WAV'],
    missing: ['מאסטר מקצועי'],
    cta: 'מתאים לי',
  },
  {
    name: 'הפקה מלאה',
    price: '2,400',
    tag: 'הכי נבחר',
    includes: ['מפיק לכל הסשן', 'תיקונים מלאים', 'מיקס + מאסטר', 'גרסה לאינסטגרם'],
    missing: [],
    cta: 'רוצה את זה',
  },
  {
    name: 'אלבום',
    price: '8,500',
    tag: 'פרימיום',
    includes: ['3 שירים בהפקה', 'מאסטר מקצועי', 'ליווי שיווק', 'אומנות + עטיפה'],
    missing: [],
    cta: 'דברו איתנו',
  },
];

interface PricingTableProps {
  tiers?: Tier[];
}

export default function PricingTable({ tiers = DEFAULT_TIERS }: PricingTableProps) {
  return (
    <SectionWrapper>
      <Eyebrow>מחירון</Eyebrow>
      <h2 className="font-serif text-4xl font-black mt-2 mb-1.5 tracking-tight">
        ארבעה מסלולים. אין הפתעות.
      </h2>
      <p className="text-zinc-600 text-sm mb-7">
        מחירים סופיים, כוללים מע״מ. אפשר לשדרג בכל שלב.
      </p>

      <div className="grid grid-cols-4 gap-3.5 items-stretch">
        {tiers.map((tier) => {
          const featured = tier.tag === 'הכי נבחר';
          return (
            <article
              key={tier.name}
              className={`rounded-2xl p-[22px] flex flex-col gap-3 border ${
                featured
                  ? 'bg-zinc-900 text-white border-zinc-900 brand-shadow'
                  : 'bg-white text-zinc-900 border-zinc-200'
              }`}
            >
              {tier.tag && (
                <span
                  className={`self-start text-[10px] font-extrabold tracking-[0.14em] uppercase px-2 py-1 rounded ${
                    featured ? 'bg-brand-red text-white' : 'bg-zinc-100 text-zinc-700'
                  }`}
                >
                  {tier.tag}
                </span>
              )}

              <h3 className="font-serif text-xl font-extrabold m-0">{tier.name}</h3>

              <div className="flex items-baseline gap-1">
                <span className={`font-serif font-black text-[38px] leading-none ${featured ? 'text-white' : 'text-zinc-900'}`}>
                  {tier.price}
                </span>
                <span className="text-sm opacity-70">₪</span>
              </div>

              <ul className="list-none p-0 m-0 flex flex-col gap-2 text-[13px] text-zinc-700 flex-1">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-2 items-center">
                    <span className="text-brand-red shrink-0">
                      <IconCheck size={13} />
                    </span>
                    <span className={featured ? 'text-white/85' : ''}>{item}</span>
                  </li>
                ))}
                {tier.missing.map((item) => (
                  <li key={item} className="flex gap-2 items-center opacity-45 line-through">
                    <span className="shrink-0">
                      <IconX size={13} />
                    </span>
                    <span className={featured ? 'text-white/85' : ''}>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waHref(`היי, מעניין אותי מסלול ${tier.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto rounded-lg py-[11px] font-extrabold text-[13px] font-sans flex justify-center items-center gap-1.5 no-underline ${
                  featured
                    ? 'bg-brand-red text-white border-0'
                    : 'bg-transparent border border-zinc-900 text-zinc-900'
                }`}
                aria-label={`${tier.cta} — מסלול ${tier.name}`}
              >
                <IconWhatsApp size={13} />
                {tier.cta}
              </a>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
