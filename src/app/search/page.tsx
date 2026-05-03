"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") ?? "";
  const softRedirect = searchParams?.get("soft_redirect") === "true";
  const ref = searchParams?.get("ref");

  return (
    <div className="mx-auto max-w-4xl prose prose-quoteless">
      <p className="text-sm uppercase tracking-[0.35em] text-brand-red">חיפוש חכם</p>
      <h1 className="text-4xl font-bold">מצאנו את התוצאה הכי רלוונטית בשבילך</h1>
      {softRedirect && ref === "old_site" ? (
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 text-zinc-700">
          עברנו לכתובת חדשה, אבל השאלת החיפוש שלך נשמרה.
        </div>
      ) : null}
      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm mt-8">
        <p className="mb-4 text-zinc-600">תוצאות עבור:</p>
        <h2 className="text-2xl font-semibold">{query || "אין מחרוזת חיפוש"}</h2>
        <p className="mt-4 text-zinc-500">
          כאן יופיעו תוצאות ממועדפים, דפי שירותים, ושירים שקשורים לחיפוש שלך.
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <Link href="/" className="rounded-2xl bg-black px-6 py-4 text-white text-center font-semibold hover:bg-brand-red transition">
            חזור לעמוד הראשי
          </Link>
          <Link href="/contact" className="rounded-2xl border border-black px-6 py-4 text-center font-semibold hover:bg-zinc-100 transition">
            צרו קשר לקבלת סיוע אישי
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 px-6 py-16">
      <Suspense fallback={<div className="mx-auto max-w-4xl"><p className="text-zinc-400">טוען תוצאות...</p></div>}>
        <SearchContent />
      </Suspense>
    </main>
  );
}
