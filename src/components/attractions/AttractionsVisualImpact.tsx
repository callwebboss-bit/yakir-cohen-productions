import Image from "next/image";
import Link from "next/link";
import { BLUR_DATA_URL } from "@/lib/blur";
import WaMeTrackedLink from "@/components/WaMeTrackedLink";

const TILES = [
  {
    href: "/attractions/wedding-smoking-machine",
    img: "/assets/images/heavy-smoke/%D7%A2%D7%A9%D7%9F%20%D7%9B%D7%91%D7%93%20%D7%91%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D.webp",
    title: "עשן כבד וסלואו",
    caption: "אפקט רחבה שמרגיש בתמונה. תיאום מול האולם והחשמל.",
  },
  {
    href: "/events/led-booth",
    img: "/assets/images/led-booth/%D7%A2%D7%9E%D7%93%D7%AA%20%D7%9C%D7%93%20%D7%91%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D.webp",
    title: "עמדות LED",
    caption: "תוכן ויזואלי על הגובה. מתאים לאירועים גדולים.",
  },
  {
    href: "/attractions/confetti-cannon",
    img: "/assets/images/confetti/Colorful%20Confetti.webp",
    title: "קונפטי וזיקוקים קרים",
    caption: "רגעי שיא בחופה או בכניסה.",
  },
] as const;

export default function AttractionsVisualImpact() {
  return (
    <section className="py-14 px-6 bg-zinc-900 text-white border-y border-white/10" aria-labelledby="visual-impact-heading">
      <div className="max-w-7xl mx-auto w-full">
        <h2 id="visual-impact-heading" className="font-serif text-2xl md:text-3xl font-bold mb-3 text-center">
          אימפקט ויזואלי בשטח
        </h2>
        <p className="text-zinc-400 text-center text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
          כמה כיוונים פופולריים. ממשיכים לעמוד המלא לכל אטרקציה או כותבים בוואטסאפ עם התאריך.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TILES.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 hover:border-brand-red/40 transition-colors"
            >
              <div className="aspect-[4/3] relative bg-zinc-800">
                <Image
                  src={t.img}
                  alt=""
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  sizes="(max-width:768px) 100vw, 33vw"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1">{t.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{t.caption}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <WaMeTrackedLink
            section="attractions_visual_impact"
            linkLabel="הצעה לאטרקציות"
            href={`https://wa.me/972587555456?text=${encodeURIComponent("היי יקיר, רוצים הצעה לאטרקציות לאירוע (עשן / LED / זיקוקים).")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-2xl bg-brand-red px-8 py-4 font-bold hover:bg-red-700 transition-colors"
          >
            בואו נדבר על האנרגיות לאירוע
          </WaMeTrackedLink>
        </div>
      </div>
    </section>
  );
}
