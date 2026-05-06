import Image from 'next/image';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

/* ─────────────────────────────────────────────────────────────────
   Shared primitives for the Sections Library.

   Tailwind tokens assumed from the project (globals.css / tailwind.config):
     text-brand-red / bg-brand-red  → #D42B2B
     bg-surface                     → #FAFAF8
     font-serif                     → Frank Ruhl Libre
     font-sans                      → Heebo
     font-label                     → Assistant
   ───────────────────────────────────────────────────────────────── */

// Tiny gray 1×1 GIF used as blur placeholder until real images are swapped in.
export const BLUR_PLACEHOLDER =
  'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

// WhatsApp base number
export const WA_NUMBER = '972587555456';
export function waHref(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ─── SectionImage ─────────────────────────────────────────────────
// Wraps next/image with project-standard defaults.
// Replace `src` strings with real assets from next/image static imports
// or a CDN URL; everything else (AVIF/WebP, quality, blur) is handled
// automatically by next/image.
export function SectionImage({
  src,
  alt,
  width,
  height,
  aspect,
  className = '',
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspect?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-zinc-200 ${className}`}
      style={{ aspectRatio: aspect ?? `${width}/${height}` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        placeholder="blur"
        blurDataURL={BLUR_PLACEHOLDER}
        quality={75}
        priority={priority}
        sizes={`(max-width: 768px) 100vw, ${width}px`}
      />
    </div>
  );
}

// ─── Eyebrow ──────────────────────────────────────────────────────
export function Eyebrow({
  children,
  muted = false,
}: {
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <p
      className={`text-[11px] font-extrabold tracking-[0.22em] uppercase m-0 ${
        muted ? 'text-zinc-500' : 'text-brand-red'
      }`}
    >
      {children}
    </p>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────
export function SectionWrapper({
  children,
  dark = false,
  pad = 'p-[60px]',
  id,
  className = '',
}: {
  children: ReactNode;
  dark?: boolean;
  pad?: string;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      dir="rtl"
      className={`font-sans ${dark ? 'bg-zinc-900 text-white' : 'bg-surface text-[#1a1a1a]'} ${pad} ${className}`}
    >
      {children}
    </section>
  );
}

// ─── Btn ──────────────────────────────────────────────────────────
type BtnVariant = 'primary' | 'ghost' | 'soft';

interface BtnProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: ReactNode;
  variant?: BtnVariant;
  dark?: boolean;
  sm?: boolean;
  full?: boolean;
  icon?: ReactNode;
}

export function Btn({
  children,
  variant = 'primary',
  dark = false,
  sm = false,
  full = false,
  icon,
  className = '',
  ...rest
}: BtnProps) {
  const sizeClass = sm ? 'px-3.5 py-2 text-[12px]' : 'px-[22px] py-[13px] text-sm';
  const fullClass = full ? 'w-full justify-center' : '';

  let variantClass = '';
  if (variant === 'primary') {
    variantClass = 'bg-brand-red text-white border-transparent';
  } else if (variant === 'ghost') {
    variantClass = dark
      ? 'bg-transparent text-white border border-white/30'
      : 'bg-transparent text-zinc-900 border border-zinc-900';
  } else {
    variantClass = 'bg-zinc-900 text-white border-transparent';
  }

  return (
    <button
      {...rest}
      className={`inline-flex items-center gap-2 rounded-md font-extrabold font-sans cursor-pointer ${sizeClass} ${fullClass} ${variantClass} ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}
