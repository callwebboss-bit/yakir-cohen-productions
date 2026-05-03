import Link from "next/link";
import { Metadata } from "next";
import { getPortfolioCollection } from "@/content/config";
import StudioRecordsSVG from "@/components/StudioRecordsSVG";

export const metadata: Metadata = {
  title: "פורטפוליו | יקיר כהן הפקות",
  description: "הצצה לפרויקטים נבחרים של יקיר כהן הפקות. הפקות מוזיקליות איכותיות, חוויות חתונה וסאונד שמרגיש אישי.",
};

export default async function PortfolioIndexPage() {
  const items = await getPortfolioCollection();

  return (
    <main className="min-h-screen bg-[#FAFAF8] px-6 py-16 lg:px-24">
      <div className="mx-auto max-w-6xl space-y-12">

        {/* Dynamic Glassmorphism Hero */}
        <div className="relative mb-16 rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <StudioRecordsSVG />
          </div>
          <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-md p-12 text-center">
            <h1 className="font-serif text-5xl font-bold mb-4 italic text-white">פורטפוליו</h1>
            <p className="text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
              פרויקטים שנשארים בזיכרון. הצצה ליצירות שמחברות בין קהל למוזיקה.
            </p>
          </div>
        </div>

        <section className="space-y-6 text-right">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D42B2B]">פורטפוליו</p>
          <h1 className="font-serif text-5xl font-black leading-tight">פרויקטים שנשארים בזיכרון</h1>
          <p className="max-w-3xl text-lg leading-8 text-zinc-600">כאן אספתי עבודות שמציגות את הטעם, הסאונד והגישה המוסיקלית של יקיר. כל פרויקט מיועד לחיבור אמיתי בין קהל ליצירה.</p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Link href={`/portfolio/${item.slug}`} key={item.slug} className="group rounded-[2rem] border border-zinc-200 bg-white/85 p-8 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#D42B2B]/40">
              <div className="flex flex-col gap-4 text-right">
                <div className="flex flex-wrap justify-end gap-2 text-xs uppercase tracking-[0.35em] text-[#D42B2B]">{item.category}</div>
                <h2 className="font-serif text-2xl font-black leading-tight text-[#1A1A1A]">{item.title}</h2>
                <p className="text-zinc-600 leading-7">{item.description}</p>
                <div className="mt-4 flex flex-wrap justify-end gap-2 text-sm text-zinc-500">
                  <span>{item.publishDate}</span>
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-zinc-200 bg-[#FAFAF8] px-3 py-2">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
