import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ההצעה שלך בידינו',
  robots: 'noindex, nofollow',
};

const ROADMAP = [
  {
    time: 'עכשיו',
    icon: '📩',
    text: 'ההצעה שלך הגיעה אלינו. אנחנו רואים אותה.',
  },
  {
    time: 'עד 15 דקות',
    icon: '📞',
    text: 'יקיר מקבל התראה ומאשר קבלה בוואטסאפ.',
  },
  {
    time: 'עד שעה',
    icon: '💬',
    text: 'תקבלו הצעת מחיר מסודרת עם כל הפרטים.',
  },
  {
    time: 'עד 24 שעות',
    icon: '📅',
    text: 'נתאם שיחת ייעוץ קצרה ונשריין את התאריך.',
  },
] as const;

export default function ThankYouPage() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#FAFAF8] flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="max-w-md w-full text-center">
        <p className="text-6xl mb-6" role="img" aria-label="מוזיקה">
          🎶
        </p>

        <h1
          className="text-3xl font-bold text-[#1A1A1A] mb-3"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          ההצעה שלך בידינו
        </h1>

        <p className="text-zinc-500 text-base max-w-xs mx-auto mb-10 leading-relaxed">
          מכאן אנחנו לוקחים את הכל. תירגעו ונחזור אליכם בהקדם.
        </p>

        {/* 15-minute roadmap */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-6 mb-8 text-right">
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-5">
            מה קורה עכשיו
          </p>

          <div className="space-y-5">
            {ROADMAP.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 mt-0.5" role="img" aria-hidden="true">
                  {step.icon}
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#D42B2B] mb-0.5">
                    {step.time}
                  </p>
                  <p className="text-sm text-zinc-700 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reassurance note */}
        <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-4 mb-8 text-right">
          <p className="text-sm text-zinc-600 leading-relaxed">
            אם לא תשמעו מאיתנו תוך שעה, צרו קשר ישירות בוואטסאפ.
          </p>
          <a
            href="https://wa.me/972528701918"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-[#1A1A1A] hover:text-[#D42B2B] transition-colors"
          >
            <WhatsAppIcon />
            058-870-1918
          </a>
        </div>

        <Link
          href="/"
          className="text-sm font-bold text-zinc-400 hover:text-[#1A1A1A] transition-colors"
        >
          חזרה לדף הבית
        </Link>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.374 0 0 5.374 0 12c0 2.124.549 4.12 1.508 5.853L.058 23.5c-.12.492.292.942.792.942.122 0 .244-.025.36-.075l5.879-2.341C8.615 23.323 10.268 24 12 24c6.626 0 12-5.374 12-12S18.626 0 12 0zm0 22c-1.7 0-3.3-.446-4.699-1.232l-.336-.196-3.484 1.386 1.41-3.397-.216-.35C3.635 16.86 3 14.5 3 12 3 6.486 7.486 2 12 2s9 4.486 9 10-4.486 10-9 10z" />
    </svg>
  );
}
