import Link from 'next/link';

const NAV_COLS = [
  {
    title: 'האולפן ואירועים',
    links: [
      { label: 'הקלטת שירים', href: '/studio' },
      { label: 'ברכות מקצועיות', href: '/blessings' },
      { label: 'שיר לילדים', href: '/kids' },
      { label: 'DJ לאירועים', href: '/dj' },
      { label: 'עמדת לד', href: '/led' },
      { label: 'אטרקציות', href: '/attractions' },
    ],
  },
  {
    title: 'פודקאסט ועוד',
    links: [
      { label: 'הפקת פודקאסט', href: '/podcast' },
      { label: 'אולפן נייד', href: '/mobile' },
      { label: 'שירותים לעסקים', href: '/business' },
      { label: 'הבלוג', href: '/blog' },
      { label: 'שוברים', href: '/vouchers' },
      { label: 'פורטל VIP', href: '/vip' },
    ],
  },
  {
    title: 'מקומות שלנו',
    links: [
      { label: 'אולפן מודיעין', href: '/studio/modiin' },
      { label: 'אולפן ירושלים', href: '/studio/jerusalem' },
      { label: 'האזור', href: '/area' },
      { label: 'תל אביב', href: '/tel-aviv' },
      { label: 'רחובות', href: '/rehovot' },
      { label: 'בני ברק', href: '/bnei-brak' },
    ],
  },
] as const;

const PAYMENT_METHODS = [
  { name: 'bit', className: 'bg-orange-600' },
  { name: 'PayBox', className: 'bg-blue-700' },
  { name: 'VISA', className: 'bg-indigo-900' },
  { name: 'MC', className: 'bg-red-700' },
  { name: 'Apple Pay', className: 'bg-zinc-950' },
] as const;

export default function MegaFooter() {
  return (
    <footer dir="rtl" className="bg-zinc-50 font-sans border-t border-zinc-200">
      <div className="p-[50px]">
        <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr_1.3fr] gap-10">
          {/* Brand */}
          <div>
            <p className="font-serif font-black text-[22px] m-0">יקיר כהן הפקות</p>
            <p className="text-zinc-600 text-[13px] leading-relaxed my-2.5">
              חיים את המוזיקה. נושמים יצירתיות. כל הלב לכל פרויקט.
            </p>
            <p className="text-[13px] font-extrabold text-zinc-900 m-0">058-7-555-456</p>
            <p className="text-xs text-zinc-500 mt-1 mb-0">office@yakircohen.com</p>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-zinc-400 mt-0 mb-3.5">
                {col.title}
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-zinc-600 no-underline hover:text-zinc-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Hours + Payments */}
          <div>
            <h3 className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-zinc-400 mt-0 mb-3.5">
              שעות + מיקום
            </h3>
            <p className="text-[13px] text-zinc-600 mb-1.5 mt-0">ראשון–חמישי, 10:00–22:00</p>
            <p className="text-[13px] text-zinc-600 mb-3.5 mt-0">קניון עזריאלי מודיעין</p>
            <p className="text-[11px] text-zinc-400 font-extrabold tracking-[0.14em] uppercase mt-0 mb-1.5">
              אמצעי תשלום
            </p>
            <ul className="list-none p-0 m-0 flex flex-wrap gap-1">
              {PAYMENT_METHODS.map(({ name, className }) => (
                <li key={name}>
                  <span className={`text-[10px] font-extrabold text-white px-1.5 py-0.5 rounded-[3px] ${className}`}>
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200 px-[50px] py-4 flex justify-between text-[11px] text-zinc-500">
        <span>© 2026 כל הזכויות שמורות ליקיר כהן</span>
        <div className="flex gap-3.5">
          <Link href="/terms" className="text-zinc-500 no-underline hover:underline">תנאי שימוש</Link>
          <Link href="/accessibility" className="text-zinc-500 no-underline hover:underline">נגישות</Link>
          <Link href="/privacy" className="text-zinc-500 no-underline hover:underline">פרטיות</Link>
        </div>
      </div>
    </footer>
  );
}
