'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ATTRACTIONS,
  ATTRACTION_CATEGORIES,
  GEO_FEES,
  getBundlePrice,
  qualifiesForGift,
  type GeoKey,
} from '@/constants/attractions';

const fmt = (n: number) => '₪' + n.toLocaleString('he-IL');

// Progress bar fills to 100% at 4 attractions
function GiftProgressBar({ count }: { count: number }) {
  const max = 4;
  const pct = Math.min((count / max) * 100, 100);
  const atGift = qualifiesForGift(count);

  const stepsText = [
    '',
    `${3 - count} אטרקציות נוספות לחיסכון מקסימלי`,
    `${3 - count} אטרקציות נוספות לחיסכון מקסימלי`,
    'עוד אטרקציה אחת לקבלת קליפ היילייטס מתנה',
    '',
  ];

  return (
    <div
      className="rounded-2xl border px-5 py-4 mb-6"
      style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.12)' }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold text-white/80">
          {atGift ? 'קליפ היילייטס מתנה' : 'מד חיסכון'}
        </span>
        <span className="text-xs font-bold text-amber-400">
          {count}/{max} אטרקציות
        </span>
      </div>

      {/* Track */}
      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden mb-2">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: atGift
              ? 'linear-gradient(to right, #f59e0b, #fbbf24)'
              : 'linear-gradient(to right, #B80000, #ef4444)',
          }}
          animate={{ width: `${pct}%` }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        />
      </div>

      <AnimatePresence mode="wait">
        {atGift ? (
          <motion.div
            key="gift"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-amber-400 font-bold text-sm"
          >
            <motion.span
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, repeatDelay: 2 }}
            >
              🎁
            </motion.span>
            קליפ היילייטס — 60 שניות מוכן לשיתוף. מתנה
          </motion.div>
        ) : (
          <motion.p key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-white/50">
            {stepsText[Math.min(count, 3)]}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AttractionsCalculator() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [geo, setGeo] = useState<GeoKey>('center');

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const count = selected.size;
  const bundlePrice = getBundlePrice(count);
  const geoFee = GEO_FEES[geo].fee;
  const total = bundlePrice + geoFee;
  const hasGift = qualifiesForGift(count);

  // Build WhatsApp message
  const selectedNames = ATTRACTIONS.filter((a) => selected.has(a.id)).map((a) => a.name);
  const waLines = [
    `שלום, אני מעוניין בחבילת אטרקציות לאירוע.`,
    ``,
    `🎪 אטרקציות שנבחרו:`,
    ...selectedNames.map((n) => `  • ${n}`),
    ``,
    `📍 אזור: ${GEO_FEES[geo].label}`,
    hasGift ? `🎁 קליפ היילייטס מתנה` : '',
    ``,
    `💰 סה"כ: ${fmt(total)} לפני מע"מ`,
    ``,
    `נשמח לתאם.`,
  ].filter((l) => l !== undefined);

  const waUrl = `https://wa.me/972528701918?text=${encodeURIComponent(waLines.join('\n'))}`;

  return (
    <div
      dir="rtl"
      className="min-h-screen pb-32"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}
    >
      <div className="max-w-3xl mx-auto px-4 pt-8">

        {/* Pricing tiers overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {[
            { n: 1, price: '1,750', saving: '' },
            { n: 2, price: '3,200', saving: 'חיסכון 300 ₪' },
            { n: 3, price: '4,450', saving: 'חיסכון 800 ₪' },
            { n: '4+', price: '5,500', saving: '+ קליפ מתנה', highlight: true },
          ].map((tier) => (
            <div
              key={tier.n}
              className={`rounded-xl p-3 text-center text-sm border transition-all ${
                tier.highlight
                  ? 'border-amber-500/40 bg-amber-500/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">
                {tier.n} אטרקציות
              </p>
              <p className={`text-lg font-black ${tier.highlight ? 'text-amber-400' : 'text-white'}`}>
                {tier.price}
              </p>
              {tier.saving && (
                <p className={`text-[10px] font-bold mt-0.5 ${tier.highlight ? 'text-amber-400' : 'text-green-400'}`}>
                  {tier.saving}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Gift progress bar */}
        <GiftProgressBar count={count} />

        {/* Geo selector */}
        <div
          className="rounded-2xl border p-4 mb-6"
          style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.10)' }}
        >
          <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">
            אזור האירוע
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            {(Object.entries(GEO_FEES) as [GeoKey, (typeof GEO_FEES)[GeoKey]][]).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setGeo(key)}
                className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-bold border transition-all text-right ${
                  geo === key
                    ? 'bg-white text-[#1A1A1A] border-white'
                    : 'border-white/15 text-white/60 hover:border-white/30 hover:text-white'
                }`}
              >
                {val.label}
              </button>
            ))}
          </div>
        </div>

        {/* Attractions by category */}
        {ATTRACTION_CATEGORIES.map((cat) => {
          const items = ATTRACTIONS.filter((a) => a.category === cat.id);
          return (
            <div key={cat.id} className="mb-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
                <span className="flex-1 h-px bg-white/10" />
                {cat.label}
                <span className="flex-1 h-px bg-white/10" />
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((attraction) => {
                  const on = selected.has(attraction.id);
                  return (
                    <AttractionCard
                      key={attraction.id}
                      attraction={attraction}
                      selected={on}
                      onToggle={() => toggle(attraction.id)}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Sticky price bar */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.4 }}
        className="fixed bottom-0 inset-x-0 z-50 border-t"
        style={{
          background: 'rgba(10,10,10,0.95)',
          backdropFilter: 'blur(16px)',
          borderColor: 'rgba(255,255,255,0.1)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-4" dir="rtl">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">
              השקעה משוערת · לפני מע&quot;מ
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={total}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="text-2xl font-black text-[#B80000]"
              >
                {count === 0 ? 'בחרו אטרקציה' : fmt(total)}
              </motion.p>
            </AnimatePresence>
            {hasGift && (
              <p className="text-[9px] font-bold text-amber-400">+ קליפ היילייטס מתנה</p>
            )}
          </div>

          {count > 0 && (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white px-5 py-3 rounded-full text-sm font-black transition-colors whitespace-nowrap"
              style={{ background: '#B80000' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = '#950000')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = '#B80000')}
            >
              <WhatsAppIcon />
              קבע תיאום
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function AttractionCard({
  attraction,
  selected,
  onToggle,
}: {
  attraction: (typeof ATTRACTIONS)[0];
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.97 }}
      className="relative flex items-start gap-3 p-4 rounded-2xl border text-right transition-all w-full"
      style={{
        background: selected
          ? 'rgba(184,0,0,0.12)'
          : 'rgba(255,255,255,0.04)',
        borderColor: selected
          ? 'rgba(184,0,0,0.6)'
          : 'rgba(255,255,255,0.10)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: selected
          ? '0 0 0 1px rgba(184,0,0,0.3), 0 8px 32px rgba(184,0,0,0.15)'
          : '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      {/* Badge */}
      {(attraction.badge || attraction.recommended) && (
        <span
          className="absolute -top-px right-4 text-white text-[9px] font-black px-2 py-0.5 rounded-b-md"
          style={{ background: '#B80000' }}
        >
          {attraction.badge ?? 'מומלץ'}
        </span>
      )}
      {(attraction.badge || attraction.recommended) && <div className="absolute top-5 right-4 h-3" />}

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 mt-0.5"
        style={{
          background: selected ? 'rgba(184,0,0,0.25)' : 'rgba(255,255,255,0.08)',
        }}
      >
        {attraction.icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-white leading-tight">{attraction.name}</p>
        <p className="text-[11px] text-white/50 leading-snug mt-0.5">{attraction.shortDesc}</p>
      </div>

      {/* Checkbox */}
      <div
        className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all"
        style={{
          borderColor: selected ? '#B80000' : 'rgba(255,255,255,0.25)',
          background: selected ? '#B80000' : 'transparent',
          transform: selected ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        {selected && (
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
            <polyline
              points="1,3 3,5.5 7,0.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
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
