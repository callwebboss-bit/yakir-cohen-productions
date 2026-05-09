'use client';

import { useState } from 'react';
import { IconCookie } from '@/components/icons';
import { Btn } from './_shared';

interface CookieConsentProps {
  onAccept?: () => void;
  onEssentialOnly?: () => void;
}

export default function CookieConsent({ onAccept, onEssentialOnly }: CookieConsentProps) {
  const [visible, setVisible] = useState(true);

  function accept() { setVisible(false); onAccept?.(); }
  function essentialOnly() { setVisible(false); onEssentialOnly?.(); }

  if (!visible) return null;

  return (
    <div
      dir="rtl"
      role="dialog"
      aria-label="הסכמה לעוגיות"
      className="fixed bottom-4 left-4 max-w-[380px] bg-white border border-zinc-200 rounded-[14px] p-[18px] shadow-[0_18px_40px_rgba(0,0,0,0.12)] flex gap-3.5 items-start z-50 font-sans"
    >
      <span
        aria-hidden="true"
        className="w-9 h-9 rounded-[10px] bg-zinc-100 text-zinc-700 grid place-items-center shrink-0"
      >
        <IconCookie size={20} />
      </span>
      <div className="flex-1">
        <h4 className="font-serif text-base font-extrabold m-0">אנחנו משתמשים בעוגיות.</h4>
        <p className="text-xs text-zinc-500 mt-1 mb-3 leading-relaxed">
          רק כדי לדעת איך משפרים את האתר. אפשר לבחור.
        </p>
        <div className="flex gap-2">
          <Btn sm onClick={accept}>אישור</Btn>
          <Btn sm variant="ghost" onClick={essentialOnly}>רק חיוניות</Btn>
        </div>
      </div>
    </div>
  );
}
