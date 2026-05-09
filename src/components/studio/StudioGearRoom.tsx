import { Headphones, Mic2, Cpu } from "lucide-react";
import WaMeTrackedLink from "@/components/WaMeTrackedLink";

const GEAR = [
  {
    icon: Headphones,
    title: "מוניטורים אולפניים",
    detail: "KRK Rokit 8",
  },
  {
    icon: Cpu,
    title: "ממשק וקלידים",
    detail: "NI Komplete Kontrol S49",
  },
  {
    icon: Mic2,
    title: "כרטיס אודיו",
    detail: "Apollo Twin UAD",
  },
  {
    icon: Mic2,
    title: "מיקרופון הקלטה",
    detail: "Townsend Sphere · תיבת BIG KNOB · פופ פילטר",
  },
] as const;

export default function StudioGearRoom() {
  return (
    <section className="py-24 px-6 bg-zinc-950 text-white border-y border-white/10" aria-labelledby="gear-room-heading">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 id="gear-room-heading" className="font-serif text-3xl md:text-4xl font-bold mb-4">
            חדר הציוד
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            רשימת ציוד מקוצרת להבנה מהירה. בפרויקט משלבים את מה שנדרש לסוג ההקלטה שלכם.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {GEAR.map(({ icon: Icon, title, detail }) => (
            <li
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6 flex gap-4 items-start hover:border-white/20 transition-colors"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-red/15 text-brand-red ring-1 ring-brand-red/30">
                <Icon className="size-6" aria-hidden />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{detail}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <WaMeTrackedLink
            section="studio_gear_room"
            linkLabel="בירור זמינות לאולפן"
            href={`https://wa.me/972587555456?text=${encodeURIComponent("היי יקיר, מחפשים אולפן להקלטה מקצועית עם הציוד שלכם — נשמח לבדוק זמינות.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-2xl bg-brand-red px-8 py-4 font-bold hover:bg-red-700 transition-colors"
          >
            בירור זמינות לאולפן
          </WaMeTrackedLink>
        </div>
      </div>
    </section>
  );
}
