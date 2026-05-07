import Image from 'next/image';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

/* ─────────────────────────────────────────────────────────────────
   Shared primitives for the Sections Library — Bauhaus aesthetic.

   Tokens (globals.css / tailwind.config):
     text-brand-red / bg-brand-red  → #D42B2B (single accent — hover swaps to ink)
     bg-surface                     → #FAFAF8 (paper)
     bg-surface-container           → #F0EDE6 (one step deeper)
     bg-surface-deep                → #E6E2D6 (emphasis blocks)
     text-ink / bg-ink              → #1A1A1A
     border-ink/15                  → 1.5px hairline divider
     font-serif (Frank Ruhl Libre)  → display / headlines
     font-sans  (Heebo)             → body
     font-label (Assistant)         → all-caps overlines

   Bauhaus rules: flat (no shadows), sharp (0–2px radius), single accent,
   hierarchy via whitespace + 1.5px borders, never gradients.
   ───────────────────────────────────────────────────────────────── */

export const BLUR_PLACEHOLDER =
  'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

export const WA_NUMBER = '972587555456';
export function waHref(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ─── SectionImage ─────────────────────────────────────────────────
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
      className={`relative overflow-hidden border-[1.5px] border-[rgba(26,26,26,0.15)] ${className}`}
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
      className={`font-label text-[11px] font-extrabold tracking-[0.22em] uppercase m-0 ${
        muted ? 'text-zinc-500' : 'text-brand-red'
      }`}
    >
      {children}
    </p>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────
// Bauhaus: generous whitespace carries hierarchy instead of shadows.
export function SectionWrapper({
  children,
  dark = false,
  pad = 'px-6 md:px-16 lg:px-24 py-20 md:py-28',
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
      className={`font-sans ${dark ? 'bg-[#1A1A1A] text-[#FAFAF8]' : 'bg-[#FAFAF8] text-[#1A1A1A]'} ${pad} ${className}`}
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
    // Bauhaus dramatic monochrome shift on hover: red → ink
    variantClass =
      'bg-[#D42B2B] text-white border-[1.5px] border-[#D42B2B] hover:bg-[#1A1A1A] hover:border-[#1A1A1A] transition-colors';
  } else if (variant === 'ghost') {
    variantClass = dark
      ? 'bg-transparent text-white border-[1.5px] border-white/40 hover:border-white transition-colors'
      : 'bg-transparent text-[#1A1A1A] border-[1.5px] border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAFAF8] transition-colors';
  } else {
    // soft = ink filled
    variantClass =
      'bg-[#1A1A1A] text-white border-[1.5px] border-[#1A1A1A] hover:bg-[#D42B2B] hover:border-[#D42B2B] transition-colors';
  }

  return (
    <button
      {...rest}
      className={`inline-flex items-center gap-2 rounded-none font-extrabold font-sans cursor-pointer ${sizeClass} ${fullClass} ${variantClass} ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}
