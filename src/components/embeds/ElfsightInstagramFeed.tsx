/**
 * Elfsight Instagram — הופעל ע"י platform.js ב-layout (lazyOnload).
 * data-elfsight-app-lazy: טעינת הווידג'ט רק כשהוא מתקרב לתצוגה.
 */
export default function ElfsightInstagramFeed() {
  return (
    <div className="w-full min-h-[120px] rounded-2xl border border-zinc-200 bg-zinc-50/50 p-2">
      <div className="elfsight-app-add83c9e-faf0-42d9-a497-51832f222f74" data-elfsight-app-lazy />
    </div>
  );
}
