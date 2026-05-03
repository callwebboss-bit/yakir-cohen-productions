import Link from "next/link";

export type RelatedPageLink = { label: string; href: string; desc: string };

interface RelatedPagesProps {
  pages: RelatedPageLink[];
  title?: string;
}

export default function RelatedPages({ pages, title = "שירותים קשורים" }: RelatedPagesProps) {
  return (
    <section className="py-16 px-6 border-t border-zinc-200 bg-zinc-50" dir="rtl">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-xl font-bold mb-8 text-zinc-900">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pages.map(({ label, href, desc }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-2 p-6 bg-white border border-zinc-200 rounded-xl hover:border-zinc-900 transition-all"
            >
              <span className="font-bold text-zinc-900 group-hover:text-[#D42B2B] transition-colors text-right">
                {label}
              </span>
              <span className="text-zinc-500 text-sm text-right leading-relaxed">{desc}</span>
              <span className="text-xs font-bold text-[#D42B2B] mt-auto text-right">קראו עוד ←</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
