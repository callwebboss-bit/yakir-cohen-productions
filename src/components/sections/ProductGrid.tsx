import { Eyebrow, SectionWrapper } from './_shared';
import ProductCard, { type ProductCardData } from './ProductCard';

const DEFAULT_PRODUCTS: ProductCardData[] = [
  {
    category: 'שובר אולפן',
    title: 'הקלטת שיר במתנה',
    description: 'שובר ל־3 שעות אולפן. תקף לשנה. נמסר במייל מעוצב.',
    price: '990 ₪',
    originalPrice: '1,200 ₪',
    imageSrc: '/sections/placeholder.svg',
    imageAlt: 'שובר הקלטת שיר',
    ctaText: 'קבל שובר',
  },
  {
    category: 'חבילת ברכה',
    title: 'ברכה מיוחדת לאירוע',
    description: 'ברכה מוקלטת עם מוזיקה. מתנה שזוכרים. מוכנה תוך 48 שעות.',
    price: '490 ₪',
    imageSrc: '/sections/placeholder.svg',
    imageAlt: 'שובר ברכה לאירוע',
    ctaText: 'הזמן ברכה',
  },
  {
    category: 'חבילה מלאה',
    title: 'שיר בהפקה מלאה',
    description: 'מילים, לחן, ביצוע והפקה. יוצאים עם שיר מוגמר.',
    price: '2,400 ₪',
    imageSrc: '/sections/placeholder.svg',
    imageAlt: 'שובר הפקה מלאה',
    ctaText: 'רוצה את זה',
  },
];

interface ProductGridProps {
  products?: ProductCardData[];
}

export default function ProductGrid({ products = DEFAULT_PRODUCTS }: ProductGridProps) {
  return (
    <SectionWrapper>
      <Eyebrow>שוברים ומוצרים</Eyebrow>
      <h2 className="font-serif text-4xl font-black mt-2 mb-1.5 tracking-tight">
        מתנות שמשמיעות.
      </h2>
      <p className="text-zinc-600 text-sm mb-7">
        שוברים שאפשר לתת ביד או במייל. מתאים ליום הולדת, חתונה או פרישה.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} inGrid />
        ))}
      </div>
    </SectionWrapper>
  );
}
