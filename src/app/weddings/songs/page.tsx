import Link from "next/link";

export default function WeddingSongsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 px-6 py-16">
      <div className="mx-auto max-w-5xl prose prose-quoteless">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-red">שירים לחתונה</p>
        <h1 className="text-4xl font-bold">שירים ודילוגים לחתונה</h1>
        <p className="text-zinc-600 mt-6">
          כאן תמצאו את הבחירה המודרנית לשירים לחופה, לריקוד סלואו ולקליפים רומנטיים. העמוד הזה מרכז את כל ההצעות המיוחדות שלנו לחתונות ואירועים פרטיים.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
            <h2 className="text-2xl font-semibold">אטרקציות לחתונה</h2>
            <p className="mt-4 text-zinc-600">
              צילום על מסך ירוק, עמדות לד, פיצוץ קונפטי ועשן כבד לכניסה מרשימה.
            </p>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-white p-8">
            <h2 className="text-2xl font-semibold">שיר החתונה המושלם</h2>
            <p className="mt-4 text-zinc-600">
              אנחנו מחברים בין שירות אולפן מקצועי לניהול מוזיקלי מוקפד, כדי שלא תצטרכו לוותר על הרגעים החשובים.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="rounded-2xl bg-black px-6 py-4 text-white text-center font-semibold hover:bg-brand-red transition">
            תיאום פגישת ייעוץ
          </Link>
          <Link href="/studio" className="rounded-2xl border border-black px-6 py-4 text-center font-semibold hover:bg-zinc-100 transition">
            הצג את האולפן שלנו
          </Link>
        </div>
      </div>
    </main>
  );
}
