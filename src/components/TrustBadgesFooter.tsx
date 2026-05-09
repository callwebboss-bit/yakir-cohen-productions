import Link from "next/link";

/**
 * חותמות אמון — קישורים מאושרים בלבד (Counsel: ללא ציון מספרי לא מאומת).
 */
const EXTERNAL = [
  {
    label: "Mit4Mit",
    href: "https://www.mit4mit.co.il/",
    hint: "חיפוש פרופיל בעסק באתר Mit4Mit",
  },
] as const;

export default function TrustBadgesFooter() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/80 px-4 py-4">
      <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
        אמון וביקורות
      </h3>
      <ul className="flex flex-wrap gap-3">
        {EXTERNAL.map(({ label, href, hint }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={hint}
              className="inline-flex items-center rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-bold text-zinc-700 hover:border-amber-500/40 hover:text-zinc-900 transition-colors"
            >
              {label}
              <span className="sr-only"> ({hint})</span>
            </a>
          </li>
        ))}
        <li>
          <Link
            href="/about/reviews"
            title="ביקורות ומשובים מהאתר"
            className="inline-flex items-center rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-bold text-zinc-700 hover:border-amber-500/40 hover:text-zinc-900 transition-colors"
          >
            ביקורות באתר
          </Link>
        </li>
      </ul>
      <p className="text-[11px] text-zinc-400 mt-2 leading-snug">
        ציונים ודירוגים חיצוניים יוצגו כשיהיו מאומתים מול המקור.
      </p>
    </div>
  );
}
