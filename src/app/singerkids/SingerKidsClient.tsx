"use client";

import { SITE_URL } from "@/lib/site-url";
import { useMemo, useState } from "react";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";
import { BLUR_DATA_URL } from "@/lib/blur";

const singerkidsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "הזמנה לשיר לילדים",
  "url": `${SITE_URL}/singerkids`,
  "description": "טופס הזמנה לשיר לילדים ואירועים. שירות מקצועי במודיעין עם ייעוץ אישי.",
};

const coverPackages = [
  {
    id: "basic",
    title: "הקלטה בסיסית",
    price: 990,
    description: "שעתיים אולפן, צוללים לטקסט ולווקאל עם עריכה ראשונית.",
  },
  {
    id: "pro",
    title: "הקלטה מקצועית",
    price: 1480,
    description: "זמן אולפן גמיש, תיקוני זיופים וניקוי סאונד שאפשר להרגיש.",
  },
];

const aiPackages = [
  {
    id: "song",
    title: "שיר מקורי",
    price: 3600,
    description: "הפקה מלאה לשיר מקורית, כולל הכתבה וקצת קסם של AI.",
  },
];

const clipOptions = [
  {
    id: "none",
    title: "ללא קליפ",
    price: 0,
    description: "פשוט קובץ שמע נקי, מוכן לשימוש ודיגיטציה.",
  },
  {
    id: "onetake",
    title: "One-Take ויראלי",
    price: 590,
    description: "קליפ דינמי לתכנים ברשתות החברתיות.",
  },
];

export default function SingerKidsClient() {
  const [service, setService] = useState<"cover" | "ai" | null>(null);
  const [packageId, setPackageId] = useState<string>("");
  const [clipId, setClipId] = useState("none");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const selectedPackage = useMemo(() => {
    if (service === "cover") {
      return coverPackages.find((item) => item.id === packageId) ?? null;
    }
    if (service === "ai") {
      return aiPackages.find((item) => item.id === packageId) ?? null;
    }
    return null;
  }, [packageId, service]);

  const selectedClip = clipOptions.find((item) => item.id === clipId) ?? clipOptions[0];
  const total = (selectedPackage?.price ?? 0) + selectedClip.price;

  const handleSend = () => {
    if (!name || !phone || !service || !selectedPackage) {
      window.alert("אנא מלא שם, טלפון ובחר חבילה כדי שנוכל לחזור אליך");
      return;
    }

    const message = `היי יקיר, אני רוצה להזמין שיר לילדים%0A%0A` +
      `סוג שירות: ${service === "cover" ? "הקלטת קאבר" : "שיר מקורי AI"}%0A` +
      `חבילה: ${selectedPackage.title}%0A` +
      `קליפ: ${selectedClip.title}%0A` +
      `סה"כ: ₪${total}%0A%0A` +
      `שם: ${name}%0A` +
      `טלפון: ${phone}%0A` +
      `הערות: ${notes || "-"}`;

    window.open(`https://wa.me/972587555456?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] px-4 py-16">
      <StructuredData data={singerkidsSchema} />
      <section className="relative overflow-hidden rounded-[2rem] bg-[#1A1A1A] text-white shadow-2xl">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/assets/images/recording-studio/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA-2-scaled.webp"
            alt="אולפן הקלטות לילדים"
            fill
            priority
            className="object-cover"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#1A1A1A]/95" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 text-center">
          <span className="inline-flex self-center rounded-full bg-[#D42B2B] px-4 py-2 text-sm font-black uppercase tracking-[0.2em]">טופס הזמנה לילדים</span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
            אני כאן כדי להקל עלכם להזמנה מסודרת ובטוחה.
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-zinc-200">
            כאן תבחרו את סוג השירות, את חבילת ההפקה ואת התוספות. בסוף הטופס אני שולח הודעה לוואטסאפ כדי שהתקשורת תהיה ישירה ופתוחה.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="rounded-3xl bg-white p-8 shadow-lg border border-zinc-200">
            <h2 className="font-serif text-3xl font-bold mb-4">בחר סוג שירות</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <button
                type="button"
                onClick={() => {
                  setService("cover");
                  setPackageId("basic");
                }}
                className={`rounded-3xl border p-6 text-right transition ${service === "cover" ? "border-[#D42B2B] bg-[#FAFAF8] shadow-md" : "border-zinc-200 bg-white hover:border-[#D42B2B]"}`}>
                <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">הקלטת קאבר</p>
                <h3 className="mt-3 text-2xl font-bold">שיר קיים בביצוע שלך</h3>
                <p className="mt-3 text-zinc-600 leading-relaxed">
                  אני נכנס לעבודה עם השיר שלכם, בונה אותו מחדש ומייצר גרסה עם תחושה אישית.
                </p>
              </button>

              <button
                type="button"
                onClick={() => {
                  setService("ai");
                  setPackageId("song");
                }}
                className={`rounded-3xl border p-6 text-right transition ${service === "ai" ? "border-[#D42B2B] bg-[#FAFAF8] shadow-md" : "border-zinc-200 bg-white hover:border-[#D42B2B]"}`}>
                <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">מחולל שיר מקורי</p>
                <h3 className="mt-3 text-2xl font-bold">שיר חדש מלא עיבוד</h3>
                <p className="mt-3 text-zinc-600 leading-relaxed">
                  אני בונה את השיר מההתחלה, עם רעיון, הלחנה ועיבוד שמותאם לילדים.
                </p>
              </button>
            </div>
          </div>

          {service && (
            <div className="rounded-3xl bg-white p-8 shadow-lg border border-zinc-200">
              <h2 className="font-serif text-3xl font-bold mb-4">בחר חבילה</h2>
              <div className="grid gap-4">
                {(service === "cover" ? coverPackages : aiPackages).map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setPackageId(pkg.id)}
                    className={`rounded-3xl border p-6 text-right transition ${packageId === pkg.id ? "border-[#D42B2B] bg-[#FAFAF8] shadow-md" : "border-zinc-200 bg-white hover:border-[#D42B2B]"}`}>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold">{pkg.title}</h3>
                        <p className="mt-2 text-zinc-600 leading-relaxed">{pkg.description}</p>
                      </div>
                      <span className="whitespace-nowrap text-2xl font-black">₪{pkg.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-3xl bg-white p-8 shadow-lg border border-zinc-200">
            <h2 className="font-serif text-3xl font-bold mb-4">האם תרצו קליפ?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {clipOptions.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setClipId(item.id)}
                  className={`rounded-3xl border p-6 text-right transition ${clipId === item.id ? "border-[#D42B2B] bg-[#FAFAF8] shadow-md" : "border-zinc-200 bg-white hover:border-[#D42B2B]"}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-zinc-600 leading-relaxed">{item.description}</p>
                    </div>
                    <span className="text-xl font-bold">{item.price === 0 ? "₪0" : `+₪${item.price}`}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-8 rounded-3xl bg-[#1A1A1A] p-8 text-white shadow-2xl">
          <div className="rounded-3xl bg-[#111111] p-6">
            <h2 className="font-serif text-3xl font-bold mb-4">סיכום פשוט</h2>
            <div className="space-y-4 text-right text-sm text-zinc-300">
              <div className="flex justify-between gap-4">
                <span>שירות</span>
                <span>{service === "cover" ? "הקלטת קאבר" : service === "ai" ? "שיר מקורי AI" : "-"}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>חבילה</span>
                <span>{selectedPackage?.title ?? "-"}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>קליפ</span>
                <span>{selectedClip.title}</span>
              </div>
              <div className="flex justify-between gap-4 border-t border-white/10 pt-4 text-xl font-black">
                <span>סה"כ</span>
                <span>₪{total}</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-[#111111] p-6">
            <h2 className="font-serif text-3xl font-bold mb-4">פרטים לסיום</h2>
            <div className="space-y-5 text-right">
              <label className="block text-sm font-semibold text-zinc-300">
                שם מלא
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-3 w-full rounded-3xl border border-zinc-700 bg-[#111111] p-4 text-white outline-none focus:border-[#D42B2B]"
                  placeholder="איך קוראים לך"
                />
              </label>
              <label className="block text-sm font-semibold text-zinc-300">
                טלפון
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="mt-3 w-full rounded-3xl border border-zinc-700 bg-[#111111] p-4 text-white outline-none focus:border-[#D42B2B]"
                  placeholder="050-0000000"
                />
              </label>
              <label className="block text-sm font-semibold text-zinc-300">
                הערות / קונספט
                <textarea
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  className="mt-3 h-32 w-full rounded-3xl border border-zinc-700 bg-[#111111] p-4 text-white outline-none focus:border-[#D42B2B]"
                  placeholder="ספר לי בקצרה על השיר או הרעיון"
                />
              </label>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSend}
            className="w-full rounded-3xl bg-[#D42B2B] py-5 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#b31f1f]"
          >
            שלח לוואטסאפ שלי
          </button>
        </aside>
      </section>
    </main>
  );
}
