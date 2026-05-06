'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IconZap, IconX } from '@/components/icons';

interface NotificationBarProps {
  message?: string;
  linkText?: string;
  linkHref?: string;
}

export default function NotificationBar({
  message = 'מבצע אביב: 15% הנחה על הקלטת שיר. עד יום שישי',
  linkText = 'לפרטים',
  linkHref = '/pricing',
}: NotificationBarProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      dir="rtl"
      role="banner"
      className="font-sans bg-brand-red text-white px-5 py-2.5 text-[13px] font-bold flex justify-center items-center gap-3"
    >
      <span className="inline-flex items-center gap-1.5">
        <IconZap size={14} />
        {message}
      </span>
      <span aria-hidden="true">·</span>
      <Link href={linkHref} className="text-white underline font-extrabold hover:no-underline">
        {linkText}
      </Link>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="סגור הודעה"
        className="ms-auto bg-transparent border-0 text-white cursor-pointer grid place-items-center p-1 hover:opacity-75"
      >
        <IconX size={14} />
      </button>
    </div>
  );
}
