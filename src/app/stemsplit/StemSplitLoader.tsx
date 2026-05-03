"use client";

import dynamic from "next/dynamic";

// ── Loaded only after first paint — keeps LCP clean ──────────────────────────
// ssr: false must live in a Client Component; page.tsx (Server) imports this.
const StemSplitTool = dynamic(() => import("./StemSplitClient"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center py-24" aria-label="טוען כלי הפרדת ערוצים...">
      <span className="w-8 h-8 rounded-full border-2 border-[#7B2FBE] border-t-transparent animate-spin" />
    </div>
  ),
});

export default function StemSplitLoader() {
  return <StemSplitTool />;
}
