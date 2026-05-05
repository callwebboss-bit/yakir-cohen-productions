import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Music } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "DJ לאירועים בכל העיר | יקיר כהן",
  description: "חפשו DJ לאירועים שלכם בכל עיר בישראל. שירות מקצועי ובערך משתלם.",
  alternates: { canonical: `${SITE_URL}/dj-events/cities` },
  openGraph: {
    title: "DJ לאירועים בכל העיר | יקיר כהן",
    description: "שירות DJ מקצועי בכל עיר בישראל",
    url: `${SITE_URL}/dj-events/cities`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const cities = [
  { name: "ירושלים", slug: "jerusalem", views: 24 },
  { name: "אשדוד", slug: "ashdod", views: 29 },
  { name: "תל אביב", slug: "tel-aviv", views: 15 },
  { name: "חיפה", slug: "haifa", views: 12 },
  { name: "ראשל״צ", slug: "rehovot", views: 11 },
  { name: "בראשית", slug: "beersheba", views: 10 },
  { name: "פתח תקווה", slug: "petah-tikva", views: 10 },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "DJ לאירועים | יקיר כהן הפקות",
  "description": "שירות DJ מקצועי לחתונות, בר/בת מצווה ואירועים בכל עיר בישראל",
  "telephone": "+972-58-7555456",
  "url": `${SITE_URL}/dj-events/cities`,
  "areaServed": "IL",
};

export default function DJCitiesPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      {/* Header */}
      <header className="py-20 px-6 bg-white border-b border-zinc-100 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-zinc-200" />
          שירותי DJ
          <span className="inline-block w-5 h-px bg-zinc-200" />
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          DJ לאירועים.
          <br />
          <span className="text-[#D42B2B]">בעירכם.</span>
        </h1>
        <p className="text-zinc-500 text-base max-w-2xl mx-auto mb-8">
          בחרו את העיר שלכם — אנחנו יש לנו DJ מקצועי שיביא את המוזיקה הטובה ביותר לחתונה, בר/בת מצווה או כל אירוע אחר.
        </p>
      </header>

      {/* Cities Grid */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">בחרו את העיר שלכם</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map(({ name, slug }) => (
              <Link
                key={slug}
                href={`/dj-events/cities/${slug}`}
                className="group bg-white p-8 rounded-xl border-2 border-zinc-200 hover:border-[#D42B2B] hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-[#D42B2B] transition-colors">
                      {name}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1">DJ לאירועים</p>
                  </div>
                  <MapPin size={24} className="text-[#D42B2B] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-zinc-600 mb-4">
                  שירות DJ מקצועי ובערך משתלם עבור חתונות, בר/בת מצווה ואירועים פרטיים.
                </p>
                <div className="pt-4 border-t border-zinc-100 flex items-center gap-2 text-[#D42B2B] font-bold group-hover:gap-3 transition-all">
                  <Music size={16} />
                  חקור עכשיו
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* General DJ Info */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">למה לבחור ב-DJ שלנו?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "ניסיון ממשי",
                desc: "יותר מ-10 שנים בהפקת אירועים",
              },
              {
                title: "ציוד מקצועי",
                desc: "מערכות קול והדלקה בעלות בתקן",
              },
              {
                title: "מוזיקה כל הרצון",
                desc: "מלהיטי העבר לשירים החדשים ביותר",
              },
              {
                title: "שירות הוקרה",
                desc: "קשר אישי וקשוב לכל לקוח",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="p-6 bg-zinc-50 rounded-lg">
                <h3 className="font-bold mb-2 text-lg">{title}</h3>
                <p className="text-sm text-zinc-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#D42B2B] text-white text-center">
        <h2 className="text-3xl font-bold mb-3">בואו נתכננו אירוע מדהים</h2>
        <p className="text-lg mb-8 opacity-90">
          בחרו עיר וקבלו הצעה מיוחדת עבור הערב שלכם
        </p>
        <Link
          href="/contact/whatsapp"
          className="inline-block bg-white text-[#D42B2B] px-8 py-4 rounded font-bold hover:bg-zinc-100 transition-colors"
        >
          צרו קשר עכשיו
        </Link>
      </section>

      <RelatedPages
        title="קישורים שימושיים"
        pages={[
          { label: "חתונות", href: "/events/dj-events", desc: "DJ לחתונה — מ-12,650 ₪" },
          { label: "בר/בת מצווה", href: "/blog/bar-bat-mitzvah", desc: "מדריך מוזיקה, ברכות ואטרקציות" },
          { label: "כל השירותים", href: "/", desc: "יקיר כהן הפקות — דף הבית" },
        ]}
      />
    </div>
  );
}
