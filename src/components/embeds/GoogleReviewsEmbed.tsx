/**
 * ווידג'ט ביקורות (Elfsight / elf.site) — iframe עם loading=lazy כדי לא לחסום LCP.
 * מקור: https://ff74d962794e489d84eaf017cae85dd5.elf.site/
 */
const GOOGLE_REVIEWS_EMBED_URL = "https://ff74d962794e489d84eaf017cae85dd5.elf.site/";

export default function GoogleReviewsEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm">
      <iframe
        title="ביקורות מגוגל — יקיר כהן הפקות"
        src={GOOGLE_REVIEWS_EMBED_URL}
        className="h-[min(560px,70vh)] w-full border-0"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="clipboard-write"
      />
    </div>
  );
}
