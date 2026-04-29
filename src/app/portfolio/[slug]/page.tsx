import { Metadata } from "next";
import YouTube from "@/components/ui/YouTube";
import { getPortfolioCollection, getPortfolioItem } from "@/content/config";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const items = await getPortfolioCollection();
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const item = await getPortfolioItem(params.slug);

  if (!item) {
    return {
      title: "פורטפוליו",
      description: "פרויקט פורטפוליו של יקיר כהן הפקות",
    };
  }

  return {
    title: `${item.title} | יקיר כהן הפקות`,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      url: `https://www.yakircohen.com/portfolio/${item.slug}`,
      siteName: "יקיר כהן הפקות",
      images: [
        {
          url: "https://www.yakircohen.com/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp",
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
      locale: "he_IL",
      type: "website",
    },
  };
}

export default async function PortfolioProjectPage({ params }: { params: Params }) {
  const item = await getPortfolioItem(params.slug);

  if (!item) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] px-6 py-24 text-[#1A1A1A]">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-zinc-200 bg-white/85 p-10 shadow-2xl backdrop-blur-xl">
          <h1 className="font-serif text-4xl font-black mb-6">לא נמצא פרויקט</h1>
          <p className="text-lg leading-8 text-zinc-600">הפרויקט שביקשת אינו קיים או הוסר. חזור לרשימת הפרויקטים כדי למצוא פרויקט אחר.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8] px-6 py-16 lg:px-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <section className="space-y-6 text-right">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D42B2B]">פורטפוליו</p>
          <h1 className="font-serif text-5xl font-black leading-tight">{item.title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-zinc-600">{item.description}</p>
          <div className="flex flex-wrap justify-end gap-4 text-sm text-zinc-500">
            <span>קטגוריה: {item.category}</span>
            <span>פורסם ב: {item.publishDate}</span>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">
          <YouTube url={item.youtubeUrl} title={item.title} />
        </section>

        <section className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-wrap justify-end gap-3 text-sm text-[#1A1A1A]">
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-zinc-200 bg-[#FAFAF8] px-4 py-2">{tag}</span>
            ))}
          </div>
          <div className="mt-8 text-right text-zinc-700 leading-8">
            <p>{item.description}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
