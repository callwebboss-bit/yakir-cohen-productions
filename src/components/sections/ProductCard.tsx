import { IconWhatsApp } from '@/components/icons';
import { SectionImage, waHref } from './_shared';

export interface ProductCardData {
  category: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaText?: string;
}

const DEFAULT_PRODUCT: ProductCardData = {
  category: 'שובר אולפן',
  title: 'הקלטת שיר במתנה',
  description: 'שובר ל־3 שעות אולפן. תקף לשנה. נמסר במייל מעוצב.',
  price: '990 ₪',
  originalPrice: '1,200 ₪',
  imageSrc: '/sections/placeholder.svg',
  imageAlt: 'שובר הקלטה',
  ctaText: 'קבל שובר',
};

interface ProductCardProps {
  product?: ProductCardData;
  inGrid?: boolean;
}

export default function ProductCard({ product = DEFAULT_PRODUCT, inGrid = false }: ProductCardProps) {
  return (
    <article
      dir="rtl"
      className={`font-sans text-[#1a1a1a] bg-white border border-zinc-200 rounded-[14px] overflow-hidden flex flex-col ${
        inGrid ? 'w-full' : 'w-80'
      }`}
    >
      <SectionImage
        src={product.imageSrc ?? '/sections/placeholder.svg'}
        alt={product.imageAlt ?? product.title}
        width={320}
        height={220}
        className="rounded-none border-0"
      />

      <div className="p-[18px] flex flex-col gap-2.5 flex-1">
        <span className="text-[10px] font-extrabold tracking-[0.14em] uppercase text-zinc-500">
          {product.category}
        </span>
        <h3 className="font-serif text-xl font-extrabold m-0">{product.title}</h3>
        <p className="text-[13px] text-zinc-500 m-0 leading-relaxed">{product.description}</p>

        <div className="flex justify-between items-baseline mt-1">
          <span className="font-serif text-[26px] font-black text-brand-red">{product.price}</span>
          {product.originalPrice && (
            <span className="text-[11px] text-zinc-400 line-through">{product.originalPrice}</span>
          )}
        </div>

        <a
          href={waHref(`היי, מעניין אותי ${product.title}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex justify-center items-center gap-2 bg-brand-red text-white rounded-md font-extrabold text-sm px-[22px] py-[13px] no-underline"
          aria-label={`${product.ctaText ?? 'קנה עכשיו'} — ${product.title}`}
        >
          <IconWhatsApp size={14} />
          {product.ctaText ?? 'קבל שובר'}
        </a>
      </div>
    </article>
  );
}
