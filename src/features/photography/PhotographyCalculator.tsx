'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const HOURLY_RATE = 980;
const AI_BUNDLE_DISCOUNT = 500;

interface Addon {
  id: string;
  label: string;
  sublabel: string;
  price: number;
  section: 'core' | 'pre' | 'during' | 'post';
}

const ADDONS: Addon[] = [
  { id: 'video', label: 'וידאו קולנועי 4K', sublabel: 'עריכה מלאה Cinematic', price: 2500, section: 'core' },
  { id: 'magnets', label: 'מגנטי Fine-Art', sublabel: 'נייר צילום אמיתי לאורחים', price: 1800, section: 'core' },
  { id: 'prelude', label: 'הפתיח (Save the Date)', sublabel: 'צילומי זוגיות לפני האירוע', price: 2200, section: 'pre' },
  { id: 'avantgarde', label: 'אוונגרד', sublabel: 'Trash the Dress אמנותי', price: 3800, section: 'pre' },
  { id: 'reels', label: 'עורך הסיפור', sublabel: 'Reels בזמן אמת במהלך האירוע', price: 2800, section: 'during' },
  { id: 'priority', label: 'מסירה מהירה', sublabel: 'מסירה מלאה תוך 48 שעות', price: 1400, section: 'post' },
  { id: 'archive', label: 'ארכיון מאסטר', sublabel: 'גיבוי RAW מאובטח ל-10 שנים', price: 2800, section: 'post' },
];

interface AIService {
  id: string;
  label: string;
  sublabel: string;
  price: number;
}

const AI_SERVICES: AIService[] = [
  { id: 'panorama', label: 'פנורמות AI', sublabel: 'פנורמות רחבות — תחליף רחפן ב-Generative AI', price: 850 },
  { id: 'retouch', label: 'ריטוש מאסטר AI', sublabel: 'ריטוש עומק, ניקוי רקע, Golden Hour', price: 1200 },
  { id: 'cinema', label: 'קליפ AI', sublabel: 'סרטון היילייטס מוכן בבוקר שאחרי', price: 950 },
];

interface HourPreset {
  hours: number;
  name: string;
  sub: string;
  badge?: string;
  badgeColor?: string;
}

const PRESETS: HourPreset[] = [
  {
    hours: 4,
    name: 'המהות',
    sub: 'קבלת פנים, טקס, ריקודים ראשונים',
  },
  {
    hours: 8,
    name: 'הסיפור המלא',
    sub: 'מההכנות המרגשות ועד שיא הלילה',
    badge: 'הנבחרת',
    badgeColor: 'bg-[#8B0000] text-white',
  },
  {
    hours: 12,
    name: 'המורשת',
    sub: 'ליווי צמוד מהבוקר ועד האורח האחרון',
    badge: 'מתנת AI',
    badgeColor: 'bg-[#B8973A] text-[#3a2000]',
  },
];

const SECTION_LABELS: Record<string, string> = {
  core: 'שירותים נוספים',
  pre: 'לפני האירוע',
  during: 'במהלך האירוע',
  post: 'אחרי האירוע',
};

const fmt = (n: number) => '₪' + n.toLocaleString('he-IL');

function getActivePreset(h: number): number | null {
  const found = PRESETS.find((p) => p.hours === h);
  return found ? found.hours : null;
}

function getPackageLabel(h: number): { name: string; sub: string } {
  const preset = PRESETS.find((p) => p.hours === h);
  if (preset) return { name: preset.name, sub: preset.sub };
  if (h < 4) return { name: `${h} שעות`, sub: 'הצצה קצרה לרגעים המרכזיים' };
  if (h < 8) return { name: `${h} שעות`, sub: 'כיסוי מקיף של שיאי האירוע' };
  if (h < 12) return { name: `${h} שעות`, sub: 'תיעוד עמוק מתחילת הערב ועד קרוב לסופו' };
  return { name: `${h} שעות`, sub: 'ליווי צמוד מהבוקר ועד האורח האחרון' };
}

export default function PhotographyCalculator() {
  const [hours, setHours] = useState(8);
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());
  const [selectedAI, setSelectedAI] = useState<Set<string>>(new Set());

  const toggleAddon = (id: string) =>
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const toggleAI = (id: string) =>
    setSelectedAI((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const aiCount = selectedAI.size;
  const bundleActive = aiCount >= 2;

  const total = useMemo(() => {
    const base = hours * HOURLY_RATE;
    const addonsSum = [...selectedAddons].reduce((acc, id) => {
      return acc + (ADDONS.find((a) => a.id === id)?.price ?? 0);
    }, 0);
    const aiSum = [...selectedAI].reduce((acc, id) => {
      return acc + (AI_SERVICES.find((a) => a.id === id)?.price ?? 0);
    }, 0);
    return base + addonsSum + aiSum - (bundleActive ? AI_BUNDLE_DISCOUNT : 0);
  }, [hours, selectedAddons, selectedAI, bundleActive]);

  const { name: pkgName, sub: pkgSub } = getPackageLabel(hours);
  const activePresetHours = getActivePreset(hours);

  // Build WhatsApp summary
  const waLines = [
    `שלום, אני מעוניין בחבילת צילום סטודיו לומייר.`,
    ``,
    `📸 חבילה: ${pkgName} · ${hours} שעות · ${fmt(hours * HOURLY_RATE)}`,
    ...[...selectedAddons].map((id) => {
      const a = ADDONS.find((x) => x.id === id);
      return a ? `• ${a.label} · ${fmt(a.price)}` : '';
    }).filter(Boolean),
    ...[...selectedAI].map((id) => {
      const a = AI_SERVICES.find((x) => x.id === id);
      return a ? `✦ AI: ${a.label} · ${fmt(a.price)}` : '';
    }).filter(Boolean),
    bundleActive ? `💰 הנחת חבילת AI: -${fmt(AI_BUNDLE_DISCOUNT)}` : '',
    ``,
    `💳 סה"כ: ${fmt(total)} לפני מע"מ`,
    ``,
    `נשמח לתאם.`,
  ].filter((l) => l !== undefined) as string[];

  const waText = waLines.join('\n');

  return (
    <div dir="rtl" className="w-full max-w-3xl mx-auto px-4 pb-40">

      {/* ── Hours + Story block ── */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 mb-5">
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">
          כמה שעות צילום
        </p>

        {/* Named presets */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {PRESETS.map((preset) => {
            const isActive = activePresetHours === preset.hours;
            return (
              <button
                key={preset.hours}
                onClick={() => setHours(preset.hours)}
                className={`relative rounded-xl p-3 text-right border transition-all ${
                  isActive
                    ? 'border-[#8B0000] shadow-[0_0_0_3px_rgba(139,0,0,0.07)]'
                    : 'border-zinc-200 hover:border-zinc-400'
                }`}
                style={isActive ? { background: 'rgba(139,0,0,0.03)' } : {}}
              >
                {preset.badge && (
                  <span
                    className={`absolute -top-px right-1/2 translate-x-1/2 text-[9px] font-black px-2 py-0.5 rounded-b-md ${preset.badgeColor}`}
                  >
                    {preset.badge}
                  </span>
                )}
                {preset.badge && <div className="h-3" />}
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  {preset.name}
                </p>
                <p className="text-2xl font-bold text-[#1A1A1A] leading-none mb-1">
                  {preset.hours}<span className="text-sm"> שע'</span>
                </p>
                <p className="text-[10px] text-zinc-400 leading-snug mb-2">{preset.sub}</p>
                <p className="text-sm font-bold text-[#8B0000]">{fmt(preset.hours * HOURLY_RATE)}</p>
              </button>
            );
          })}
        </div>

        {/* Dynamic story label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={hours}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="bg-zinc-50 rounded-xl border border-zinc-100 p-4 mb-4"
          >
            <p className="text-xs font-bold text-[#8B0000] mb-0.5">{pkgName}</p>
            <p className="text-sm text-zinc-500">{pkgSub}</p>
          </motion.div>
        </AnimatePresence>

        {/* Slider */}
        <div className="bg-zinc-50 rounded-xl border border-zinc-100 p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-bold text-zinc-700">התאמה אישית</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={hours}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-bold text-[#8B0000] text-sm"
              >
                {hours} שעות · {fmt(hours * HOURLY_RATE)}
              </motion.span>
            </AnimatePresence>
          </div>
          <input
            type="range"
            min={1}
            max={16}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full h-1.5 rounded-full cursor-pointer accent-[#8B0000]"
          />
          <div className="flex justify-between text-[10px] text-zinc-400 mt-1.5">
            <span>1 שעה</span>
            <span>16 שעות</span>
          </div>
          <p className="text-center text-[10px] text-zinc-400 mt-2">
            980 ₪ לשעה · כולל עריכה ומסירה דיגיטלית
          </p>
        </div>
      </div>

      {/* ── Additional services by section ── */}
      {(['core', 'pre', 'during', 'post'] as const).map((section) => {
        const items = ADDONS.filter((a) => a.section === section);
        return (
          <div key={section} className="mb-5">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">
              {SECTION_LABELS[section]}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((addon) => {
                const on = selectedAddons.has(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex items-center gap-3 p-4 rounded-xl border text-right transition-all ${
                      on
                        ? 'border-[#8B0000] bg-[rgba(139,0,0,0.04)]'
                        : 'border-zinc-200 bg-white hover:border-zinc-400'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                        on ? 'bg-[#8B0000] border-[#8B0000] scale-110' : 'border-zinc-300'
                      }`}
                    >
                      {on && (
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <polyline points="1,3 3,5.5 7,0.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#1A1A1A] truncate">{addon.label}</p>
                      <p className="text-[11px] text-zinc-400">{addon.sublabel}</p>
                    </div>
                    <p className="text-sm font-bold text-[#8B0000] whitespace-nowrap">{fmt(addon.price)}</p>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* ── AI Glow Section ── */}
      <div
        className="rounded-2xl p-5 mb-4 border border-[#2a2d3e]"
        style={{ background: 'linear-gradient(135deg, #0D0D14 0%, #141624 100%)' }}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[#93c5fd] text-xl">✦</span>
          <h3
            className="text-white font-bold text-lg"
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
          >
            סטודיו AI מתקדם
          </h3>
          <span className="text-[9px] font-black px-2 py-0.5 rounded bg-[#0F1117] text-[#93c5fd] tracking-widest border border-[#2a2d3e]">
            AI
          </span>
        </div>
        <p className="text-[11px] text-zinc-500 mb-4">
          תוצאות פרימיום בטכנולוגיית בינה מלאכותית. הנחה של {fmt(AI_BUNDLE_DISCOUNT)} בבחירת שני שירותים ומעלה.
        </p>

        <AnimatePresence>
          {bundleActive && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="rounded-lg px-3 py-2 mb-4 text-sm font-bold text-[#e8c96c] border border-[rgba(184,151,58,0.35)]"
              style={{ background: 'rgba(184,151,58,0.15)' }}
            >
              ✦ הנחת חבילת AI פועלת — חיסכון של {fmt(AI_BUNDLE_DISCOUNT)}
            </motion.div>
          )}
        </AnimatePresence>

        {!bundleActive && aiCount === 1 && (
          <div className="rounded-lg px-3 py-2 mb-4 text-[11px] text-zinc-500 border border-[#2a2d3e] bg-[#0F1117]">
            הוסיפו עוד שירות AI אחד וקבלו הנחת חבילה של {fmt(AI_BUNDLE_DISCOUNT)}
          </div>
        )}

        <div className="grid grid-cols-1 gap-3">
          {AI_SERVICES.map((svc) => {
            const on = selectedAI.has(svc.id);
            return (
              <button
                key={svc.id}
                onClick={() => toggleAI(svc.id)}
                className={`flex items-center gap-3 p-4 rounded-xl border text-right transition-all ${
                  on
                    ? 'border-[#B8973A] bg-[rgba(184,151,58,0.10)]'
                    : 'border-[#2a2d3e] bg-[#0F1117] hover:border-[#3a3d5a]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                    on ? 'bg-[#B8973A] border-[#B8973A] scale-110' : 'border-[#3a3d5a]'
                  }`}
                >
                  {on && (
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <polyline points="1,3 3,5.5 7,0.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white">{svc.label}</p>
                  <p className="text-[11px] text-zinc-500">{svc.sublabel}</p>
                </div>
                <p className="text-sm font-bold text-[#B8973A] whitespace-nowrap">{fmt(svc.price)}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Sticky price bar ── */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.3 }}
        className="fixed bottom-0 inset-x-0 z-50 bg-[#0D0D0D] border-t border-zinc-800"
      >
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-4" dir="rtl">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">
              השקעה משוערת · לפני מע&quot;מ
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={total}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="text-2xl font-bold text-[#8B0000]"
              >
                {fmt(total)}
              </motion.p>
            </AnimatePresence>
            {bundleActive && (
              <p className="text-[9px] text-green-400">חיסכון: {fmt(AI_BUNDLE_DISCOUNT)}</p>
            )}
          </div>
          <a
            href={`https://wa.me/972528701918?text=${encodeURIComponent(waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#8B0000] hover:bg-[#A50000] text-white px-6 py-3 rounded-full text-sm font-bold transition-colors whitespace-nowrap"
          >
            <WhatsAppIcon />
            קבע תיאום
          </a>
        </div>
      </motion.div>
    </div>
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
