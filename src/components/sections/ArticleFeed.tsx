import Link from 'next/link';
import { IconArrow } from '@/components/icons';
import { SectionImage, Eyebrow, SectionWrapper } from './_shared';

interface Article {
  category: string;
  title: string;
  description: string;
  readTime: string;
  date: string;
  href: string;
  imageSrc?: string;
}

const DEFAULT_ARTICLES: Article[] = [
  {
    category: 'טיפים לאולפן',
    title: '5 דברים שיגרמו לקול שלכם להישמע טוב פי 2',
    description: 'בלי לקנות ציוד. רק להבין איך עומדים מול המיקרופון.',
    readTime: '4 דקות קריאה',
    date: '12.04.2026',
    href: '/blog/tips-recording-voice',
    imageSrc: '/sections/placeholder.svg',
  },
  {
    category: 'הוצאה לאור',
    title: 'איך מעלים שיר ל־Spotify בלי חברת תקליטים',
    description: 'התהליך, העלויות, וכמה זמן זה לוקח.',
    readTime: '7 דקות קריאה',
    date: '28.03.2026',
    href: '/blog/upload-to-spotify',
    imageSrc: '/sections/placeholder.svg',
  },
  {
    category: 'מוזיקה בחתונה',
    title: 'השירים שיחזרו השנה. לפי DJ פעיל',
    description: 'מה אורחים מבקשים. מה עובד על הריקודים.',
    readTime: '5 דקות קריאה',
    date: '15.03.2026',
    href: '/blog/wedding-songs',
    imageSrc: '/sections/placeholder.svg',
  },
];

interface ArticleFeedProps {
  articles?: Article[];
  allArticlesHref?: string;
}

export default function ArticleFeed({
  articles = DEFAULT_ARTICLES,
  allArticlesHref = '/blog',
}: ArticleFeedProps) {
  return (
    <SectionWrapper>
      <div className="flex justify-between items-baseline mb-[22px]">
        <div>
          <Eyebrow>מהבלוג</Eyebrow>
          <h2 className="font-serif text-[32px] font-black mt-2 mb-0 tracking-tight">
            כתבות אחרונות.
          </h2>
        </div>
        <Link
          href={allArticlesHref}
          className="text-brand-red font-extrabold text-[13px] no-underline flex items-center gap-1.5 hover:underline"
        >
          לכל הכתבות
          <IconArrow size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {articles.map((article) => (
          <article
            key={article.title}
            className="bg-white border border-zinc-200 rounded-[14px] overflow-hidden flex flex-col"
          >
            <SectionImage
              src={article.imageSrc ?? '/sections/placeholder.svg'}
              alt={article.category}
              width={400}
              height={220}
              className="rounded-none border-0"
            />
            <div className="p-[18px] flex flex-col gap-2.5 flex-1">
              <span className="text-[10px] font-extrabold tracking-[0.14em] uppercase text-brand-red">
                {article.category}
              </span>
              <h3 className="font-serif text-lg font-extrabold m-0 leading-snug">
                {article.title}
              </h3>
              <p className="text-[13px] text-zinc-500 m-0 leading-relaxed">{article.description}</p>
              <div className="flex justify-between text-zinc-400 text-[11px] mt-auto border-t border-zinc-100 pt-2.5">
                <span>{article.readTime}</span>
                <span>{article.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
