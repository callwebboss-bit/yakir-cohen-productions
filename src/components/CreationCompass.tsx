"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, Sparkles } from "lucide-react";
import { trackWaClick } from "@/lib/analytics";

const WA_ME = "https://wa.me/972587555456";

type Step1 = "wedding" | "studio" | "business" | "other";

const STEP1_OPTIONS: { id: Step1; label: string; emoji: string }[] = [
  { id: "wedding", label: "אנחנו מתחתנים", emoji: "💍" },
  { id: "studio", label: "רוצה להקליט באולפן", emoji: "🎤" },
  { id: "business", label: "משהו לעסק שלי", emoji: "💼" },
  { id: "other", label: "אירוע אחר (בר מצווה, חינה וכו')", emoji: "🎉" },
];

const WEDDING_EXTRAS = [
  { id: "dj", label: "דיג'יי שמקפיץ את הקהל" },
  { id: "smoke", label: "עשן כבד וסלואו מרגש" },
  { id: "confetti", label: "תותחי קונפטי" },
  { id: "led", label: "עמדת וידאו LED" },
  { id: "cold", label: "זיקוקים קרים" },
];

const STUDIO_PROJECTS = [
  { id: "cover", label: "שיר קאבר במתנה" },
  { id: "original", label: "שיר מקורי / הפקה" },
  { id: "bride", label: "ברכת כלה לחופה" },
  { id: "voice", label: "קריינות אישית" },
];

function buildMessage(step1: Step1 | null, picks: string[]): string {
  const lines: string[] = ["היי יקיר!", "עברתי במצפן שבאתר."];
  if (!step1) return lines.join(" ");

  if (step1 === "wedding") {
    lines.push("אנחנו מתחתנים ומחפשים דיג'יי שמבין בקהל מעורב.");
    if (picks.length) lines.push(`נשמח גם: ${picks.join(", ")}.`);
    lines.push("אפשר לקבל הצעת מחיר ולבדוק תאריכים?");
    return lines.join(" ");
  }
  if (step1 === "studio") {
    lines.push("מעוניינים בהקלטה באולפן.");
    if (picks.length) lines.push(`סוג פרויקט: ${picks.join(", ")}.`);
    lines.push("נשמח לפרטים ותיאום.");
    return lines.join(" ");
  }
  if (step1 === "business") {
    lines.push("מגיעים מהמגזר העסקי: פודקאסט / קריינות / סאונד למותג.");
    if (picks.length) lines.push(picks.join("; "));
    lines.push("נשמח להמשיך משיחה קצרה.");
    return lines.join(" ");
  }
  lines.push("מתכננים אירוע מיוחד ומחפשים ייעוץ והצעה.");
  if (picks.length) lines.push(picks.join(", "));
  return lines.join(" ");
}

export default function CreationCompass({ className = "" }: { className?: string }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [choice1, setChoice1] = useState<Step1 | null>(null);
  const [picks, setPicks] = useState<string[]>([]);

  const waHref = useMemo(() => {
    const text = buildMessage(choice1, picks);
    return `${WA_ME}?text=${encodeURIComponent(text)}`;
  }, [choice1, picks]);

  const togglePick = (label: string) => {
    setPicks((prev) => (prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label]));
  };

  const step2Options =
    choice1 === "wedding"
      ? WEDDING_EXTRAS
      : choice1 === "studio"
        ? STUDIO_PROJECTS
        : choice1 === "business"
          ? [
              { id: "pod", label: "פודקאסט מלא" },
              { id: "ivr", label: "קריינות לנתב שיחות / IVR" },
              { id: "ad", label: "פרסומת רדיו / מסחרי" },
            ]
          : [
              { id: "bm", label: "בר/בת מצווה" },
              { id: "hinna", label: "חינה / גיבוש" },
              { id: "corp", label: "אירוע חברה" },
            ];

  return (
    <section
      className={`rounded-3xl border border-zinc-200 bg-white shadow-sm p-6 md:p-10 ${className}`}
      aria-labelledby="compass-heading"
    >
      <div className="flex items-start gap-3 mb-6">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-zinc-900 text-[color:var(--accent-gold)]">
          <Sparkles className="size-5" aria-hidden />
        </div>
        <div>
          <h2 id="compass-heading" className="font-serif text-xl md:text-2xl font-bold text-zinc-900">
            מצפן יצירה
          </h2>
          <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
            שני קליקים ובודקים יחד מה מתאים לכם. בסוף תיפתח הודעה מוכנה לוואטסאפ.
          </p>
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-3">
          <p className="text-sm font-bold text-zinc-800">מה נחגוג או ניצור?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {STEP1_OPTIONS.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => {
                  setChoice1(o.id);
                  setPicks([]);
                  setStep(2);
                }}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-start text-sm font-bold text-zinc-900 hover:border-brand-red/40 hover:bg-white transition-colors"
              >
                <span className="me-2" aria-hidden>
                  {o.emoji}
                </span>
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && choice1 && (
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="text-xs font-bold text-brand-red inline-flex items-center gap-1 hover:underline"
          >
            <ChevronLeft className="size-4 rotate-180" aria-hidden />
            חזרה
          </button>
          <p className="text-sm font-bold text-zinc-800">מה חשוב לכם להוסיף?</p>
          <p className="text-xs text-zinc-500">אפשר לסמן כמה אופציות.</p>
          <ul className="flex flex-col gap-2">
            {step2Options.map((o) => (
              <li key={o.id}>
                <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-zinc-200 px-4 py-3 hover:bg-zinc-50">
                  <input
                    type="checkbox"
                    checked={picks.includes(o.label)}
                    onChange={() => togglePick(o.label)}
                    className="size-4 accent-brand-red rounded"
                  />
                  <span className="text-sm font-medium text-zinc-800">{o.label}</span>
                </label>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setStep(3)}
            className="w-full rounded-2xl bg-zinc-900 text-white py-3.5 font-bold hover:bg-brand-red transition-colors"
          >
            המשך לשליחה
          </button>
        </div>
      )}

      {step === 3 && choice1 && (
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => setStep(2)}
            className="text-xs font-bold text-brand-red inline-flex items-center gap-1 hover:underline"
          >
            <ChevronLeft className="size-4 rotate-180" aria-hidden />
            חזרה
          </button>
          <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap">{buildMessage(choice1, picks)}</p>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWaClick("creation_compass", "שלח במצפן")}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[color-mix(in_srgb,var(--accent-gold)_88%,#000_12%)] border border-[color-mix(in_srgb,var(--accent-gold)_55%,#000_45%)] py-4 font-black text-zinc-950 hover:brightness-105 transition-[filter]"
          >
            שלח ליקיר בוואטסאפ לבדיקת תאריך
          </a>
          <button
            type="button"
            onClick={() => {
              setStep(1);
              setChoice1(null);
              setPicks([]);
            }}
            className="w-full text-sm font-bold text-zinc-500 hover:text-zinc-800"
          >
            התחלה מחדש
          </button>
        </div>
      )}
    </section>
  );
}
