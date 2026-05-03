'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type PackageId = 'audio' | 'video' | 'social';

interface Package {
  id: PackageId;
  name: string;
  subtitle: string;
  price: number;
  badge?: string;
  ideal: string;
  features: string[];
  roi: string;
}

const PACKAGES: Package[] = [
  {
    id: 'audio',
    name: 'Audio Podcast',
    subtitle: 'High-Fidelity · SM7B',
    price: 950,
    ideal: 'ראיונות, דרשות, סיפורי חיים',
    features: [
      'הקלטה עד שעה · מיקרופונים דינמיים',
      'עריכה, מיקס ומאסטרינג לשידור',
      'קובץ MP3/WAV מוכן לספוטיפיי',
      'Google Drive עד ההקלטה הבאה',
    ],
    roi: 'פרק אחד, הוקלט פעם אחת, ממשיך לעבוד בשבילי שנים. אני הופך שיחה של שעה לנכס דיגיטלי שמביא לקוחות גם כשאני ישן.',
  },
  {
    id: 'video',
    name: 'Video Podcast',
    subtitle: 'Multi-Cam 4K · Vodcast מלא',
    price: 1650,
    badge: 'הנבחר',
    ideal: 'בניית Authority, שיווק, ראיונות',
    features: [
      '3 מצלמות 4K · עריכת Live Cut',
      'תאורה קולנועית ומיקרופונים מקצועיים',
      'קובץ מלא ליוטיוב + אודיו לספוטיפיי',
      'Google Drive עד ההקלטה הבאה',
    ],
    roi: 'וידאו בונה פנים. כשהקהל רואה אותי, הם כבר מכירים אותי לפני שמרימים טלפון. זה ההבדל בין ליד קר ללקוח שמגיע עם אמון בנוי מראש.',
  },
  {
    id: 'social',
    name: 'Full Social Machine',
    subtitle: 'Video + Reels/TikTok + הפצה',
    price: 2800,
    badge: 'Content Machine',
    ideal: 'בניית נוכחות דיגיטלית מלאה',
    features: [
      'כל מה שב-Video Podcast',
      '3 קטעי Reels/TikTok עם כתוביות',
      'העלאה לספוטיפיי ואפל פודקאסטס',
      'תקציר פרק מותאם SEO ליוטיוב',
    ],
    roi: 'מפרק אחד יוצאים חמישה נכסי תוכן. הפרק בספוטיפיי, הרילס שמושך, הכתבה שממירה. אני בונה מנוע תוכן שמושך לקוחות איכותיים לאורך זמן.',
  },
];

const OVERTIME_RATE = 750;

const fmt = (n: number) => '₪' + n.toLocaleString('he-IL');

export default function PodcastCalculator() {
  const [selectedId, setSelectedId] = useState<PackageId | null>(null);
  const [blocks, setBlocks] = useState(0);

  const pkg = PACKAGES.find((p) => p.id === selectedId) ?? null;
  const total = (pkg?.price ?? 0) + blocks * OVERTIME_RATE;

  const waText = pkg
    ? `שלום, אני מעוניין בחבילת ${pkg.name}. המחיר שחישבתי: ${fmt(total)} לפני מע"מ. נשמח לתאם.`
    : '';

  return (
    <div dir="rtl" className="w-full max-w-4xl mx-auto px-4 pb-40">

      {/* Package cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {PACKAGES.map((p) => (
          <PackageCard
            key={p.id}
            pkg={p}
            selected={selectedId === p.id}
            onSelect={() => {
              setSelectedId(p.id);
              setBlocks(0);
            }}
          />
        ))}
      </div>

      {/* Overtime selector — slides in after package selection */}
      <AnimatePresence mode="wait">
        {pkg && (
          <motion.div
            key="overtime"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl bg-[#1A1A1A] text-white p-6 mb-4"
          >
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-white/40 mb-2">
              גלישה בזמן · {OVERTIME_RATE.toLocaleString('he-IL')}₪ לכל 30 דקות
            </p>
            <p className="text-base font-semibold mb-4">כמה זמן הקלטה נוסף?</p>
            <div className="flex flex-wrap gap-2">
              {[0, 1, 2, 3].map((b) => (
                <button
                  key={b}
                  onClick={() => setBlocks(b)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                    blocks === b
                      ? 'bg-[#D42B2B] border-[#D42B2B] text-white'
                      : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {b === 0 ? 'ללא גלישה' : `+${b * 30} דק׳  (+${fmt(b * OVERTIME_RATE)})`}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky price bar */}
      <AnimatePresence>
        {pkg && (
          <motion.div
            key="stickybar"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="fixed bottom-0 inset-x-0 z-50 bg-white/96 backdrop-blur-md border-t border-zinc-200"
          >
            <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4" dir="rtl">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                  סה״כ לפני מע״מ
                </p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={total}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-2xl font-bold text-[#1A1A1A]"
                  >
                    {fmt(total)}
                  </motion.p>
                </AnimatePresence>
                <p className="text-[9px] text-zinc-400">
                  {fmt(Math.round(total * 1.18))} כולל מע״מ
                </p>
              </div>
              <a
                href={`https://wa.me/972587555456?text=${encodeURIComponent(waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#D42B2B] text-white px-6 py-3 rounded-full text-sm font-bold transition-colors whitespace-nowrap"
              >
                <WhatsAppIcon />
                קבע תיאום
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PackageCard({
  pkg,
  selected,
  onSelect,
}: {
  pkg: Package;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      onClick={onSelect}
      whileTap={{ scale: 0.98 }}
      className={`relative flex flex-col text-right w-full bg-white rounded-2xl p-5 border cursor-pointer transition-all ${
        selected
          ? 'border-[#D42B2B] shadow-[0_0_0_3px_rgba(212,43,43,0.08)]'
          : 'border-zinc-200 hover:border-zinc-400 hover:shadow-md'
      }`}
    >
      {pkg.badge && (
        <span className="absolute -top-px right-4 bg-[#D42B2B] text-white text-[10px] font-black px-3 py-0.5 rounded-b-md tracking-wider">
          {pkg.badge}
        </span>
      )}
      {pkg.badge && <div className="h-3" />}

      <div className="flex-1">
        <h3 className="text-lg font-bold mb-0.5">{pkg.name}</h3>
        <p className="text-[11px] text-zinc-400 mb-0.5">{pkg.subtitle}</p>
        <p className="text-[11px] text-[#D42B2B] font-bold mb-3">{pkg.ideal}</p>

        <p className="text-3xl font-bold mb-0.5">{fmt(pkg.price)}</p>
        <p className="text-[10px] text-zinc-400 mb-4">
          + מע״מ · {fmt(Math.round(pkg.price * 1.18))} סה״כ
        </p>

        <ul className="space-y-2 mb-4">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-zinc-500">
              <span className="text-[#D42B2B] font-bold flex-shrink-0 mt-0.5">—</span>
              {f}
            </li>
          ))}
        </ul>

        {/* ROI Estimator */}
        <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-3">
          <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-1.5">
            ההחזר על ההשקעה
          </p>
          <p className="text-[11px] text-zinc-600 leading-relaxed italic">{pkg.roi}</p>
        </div>
      </div>

      <div
        className={`mt-4 w-full py-2.5 rounded-xl text-[13px] font-bold border transition-colors ${
          selected
            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
            : 'border-zinc-200 text-zinc-400'
        }`}
      >
        {selected ? 'נבחר' : 'עיין בפרטים'}
      </div>
    </motion.button>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.374 0 0 5.374 0 12c0 2.124.549 4.12 1.508 5.853L.058 23.5c-.12.492.292.942.792.942.122 0 .244-.025.36-.075l5.879-2.341C8.615 23.323 10.268 24 12 24c6.626 0 12-5.374 12-12S18.626 0 12 0zm0 22c-1.7 0-3.3-.446-4.699-1.232l-.336-.196-3.484 1.386 1.41-3.397-.216-.35C3.635 16.86 3 14.5 3 12 3 6.486 7.486 2 12 2s9 4.486 9 10-4.486 10-9 10z" />
    </svg>
  );
}
