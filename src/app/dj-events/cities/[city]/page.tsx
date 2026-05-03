import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, Music, Zap, Users } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

interface Props {
  params: Promise<{ city: string }>;
}

const cityData: Record<
  string,
  {
    name: string;
    nameHebrew: string;
    description: string;
    eventTypes: string[];
    price: string;
    experience: string;
  }
> = {
  "jerusalem": {
    name: "Jerusalem",
    nameHebrew: "ירושלים",
    description:
      "DJ מקצועי לאירועים בירושלים. מחתונות ובר מצווה וגם אירועים קורפוראטיביים.",
    eventTypes: ["חתונות", "בר/בת מצווה", "אירועים קורפוראטיביים", "חגיגות פרטיות"],
    price: "₪1,500 - ₪3,500",
    experience: "15+ שנים בהפקת אירועים בירושלים",
  },
  "ashdod": {
    name: "Ashdod",
    nameHebrew: "אשדוד",
    description:
      "DJ לאירועים באשדוד עם ניסיון רב בחתונות ובאירועים משפחתיים.",
    eventTypes: ["חתונות", "בר/בת מצווה", "חגיגות משפחתיות"],
    price: "₪1,200 - ₪3,000",
    experience: "12+ שנים בהפקת אירועים באשדוד",
  },
  "tel-aviv": {
    name: "Tel Aviv",
    nameHebrew: "תל אביב",
    description:
      "DJ מודרני לתל אביב. מוזיקה עדכנית וחוויה עיצובית חדשנית.",
    eventTypes: ["חתונות", "מסיבות", "אירועים עצמאים", "קוקטיילים"],
    price: "₪2,000 - ₪4,500",
    experience: "10+ שנים בהפקה עיצובית בתל אביב",
  },
  "haifa": {
    name: "Haifa",
    nameHebrew: "חיפה",
    description:
      "DJ לחיפה ועמק יזרעאל. משמעות מיוחדת לכל אירוע.",
    eventTypes: ["חתונות", "בר/בת מצווה", "אירועים משפחתיים"],
    price: "₪1,000 - ₪2,800",
    experience: "8+ שנים בהפקת אירועים בחיפה",
  },
  "rehovot": {
    name: "Rehovot",
    nameHebrew: "ראשל״צ",
    description:
      "DJ לראשל״צ וסביבתה. שירות מקצועי עבור כל סוג אירוע.",
    eventTypes: ["חתונות", "בר/בת מצווה", "אירועים משפחתיים"],
    price: "₪1,100 - ₪2,900",
    experience: "9+ שנים בשירות DJ בראשל״צ",
  },
  "beersheba": {
    name: "Beersheba",
    nameHebrew: "בראשית",
    description:
      "DJ לבאר שבע. מוזיקה מקצועית לכל אירוע בדרום.",
    eventTypes: ["חתונות", "בר/בת מצווה", "אירועים קהילתיים"],
    price: "₪800 - ₪2,500",
    experience: "7+ שנים בהפקת אירועים בדרום",
  },
  "petah-tikva": {
    name: "Petah Tikva",
    nameHebrew: "פתח תקווה",
    description:
      "DJ לפתח תקווה. שירות DJ מהיום חברה עם ניסיון בכל סוגי האירועים.",
    eventTypes: ["חתונות", "בר/בת מצווה", "אירועים משפחתיים"],
    price: "₪1,200 - ₪3,000",
    experience: "11+ שנים בהפקה בפתח תקווה",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const data = cityData[city];

  if (!data) {
    return {};
  }

  return {
    title: `DJ לאירועים ב${data.nameHebrew} | יקיר כהן הפקות`,
    description: data.description,
    alternates: {
      canonical: `https://www.yakircohen.com/dj-events/cities/${city}`,
    },
    openGraph: {
      title: `DJ ב${data.nameHebrew} | יקיר כהן הפקות`,
      description: data.description,
      url: `https://www.yakircohen.com/dj-events/cities/${city}`,
      siteName: "יקיר כהן הפקות",
      locale: "he_IL",
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city,
  }));
}

export default async function CityDJPage({ params }: Props) {
  const { city } = await params;
  const data = cityData[city];

  if (!data) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `DJ לאירועים ב${data.nameHebrew} | יקיר כהן הפקות`,
    description: data.description,
    telephone: "+972-58-7555456",
    areaServed: {
      "@type": "City",
      name: data.nameHebrew,
    },
    url: `https://www.yakircohen.com/dj-events/cities/${city}`,
    offers: {
      "@type": "Offer",
      price: data.price,
      priceCurrency: "ILS",
      description: `DJ לאירועים ב${data.nameHebrew}`,
    },
  };

  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      {/* Header */}
      <header className="py-20 px-6 bg-white border-b border-zinc-100 text-center">
        <Link
          href="/dj-events/cities"
          className="text-sm text-[#D42B2B] hover:underline mb-4 inline-block"
        >
          ← חזור לעיר אחרת
        </Link>
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-zinc-200" />
          DJ לאירועים
          <span className="inline-block w-5 h-px bg-zinc-200" />
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-4"
          style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          DJ ב{data.nameHebrew}.
          <br />
          <span className="text-[#D42B2B]">חוויה בלתי שכחה.</span>
        </h1>
        <p className="text-zinc-500 text-base max-w-2xl mx-auto mb-8">
          {data.description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg flex items-center gap-2"
          >
            <MessageCircle size={18} />
            שלחו לי הצעה בוואטסאפ
          </Link>
          <Link
            href="tel:+972-58-7555456"
            className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all flex items-center gap-2"
          >
            <Phone size={18} />
            התקשרו עכשיו
          </Link>
        </div>
      </header>

      {/* Services */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">סוגי אירועים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.eventTypes.map((eventType) => (
              <div
                key={eventType}
                className="bg-white p-6 rounded-lg border border-zinc-200 flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-[#D42B2B] text-white rounded-lg flex items-center justify-center shrink-0">
                  <Music size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{eventType}</h3>
                  <p className="text-sm text-zinc-500">
                    DJ מקצועי עבור {eventType}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">מה כלול בשירות?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap size={24} />,
                title: "ציוד מקצועי",
                desc: "מערכות קול והדלקה בעלות בתקן",
              },
              {
                icon: <Music size={24} />,
                title: "מוזיקה בחירתך",
                desc: "הגב לבחור את המוזיקה שלך",
              },
              {
                icon: <Users size={24} />,
                title: "שירות אישי",
                desc: "DJ בעצמו בחדרי הטלפון שלך",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-6 bg-zinc-50 rounded-lg text-center">
                <div className="flex justify-center mb-4 text-[#D42B2B]">
                  {icon}
                </div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-zinc-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price & Experience */}
      <section className="py-20 px-6 bg-[#D42B2B] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">מחיר וניסיון</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
              <p className="text-xs font-bold uppercase tracking-widest mb-2">
                מחיר בערך
              </p>
              <p className="text-4xl font-bold">{data.price}</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
              <p className="text-xs font-bold uppercase tracking-widest mb-2">
                ניסיון
              </p>
              <p className="text-2xl font-bold">{data.experience}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">למה לבחור בנו?</h2>
          <ul className="text-right space-y-4 text-lg">
            {[
              "✓ DJ מקצועי עם שנים של ניסיון",
              "✓ ציוד קול מתקדם ואמין",
              "✓ מוזיקה לכל הטעמים",
              "✓ מחיר הוגן וללא הפתעות",
              "✓ שירות אישי ועקוב",
              "✓ יכולת התאמה לבקשות מיוחדות",
            ].map((item) => (
              <li key={item} className="text-zinc-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#D42B2B] text-white text-center">
        <h2 className="text-3xl font-bold mb-3">מוכנים לאירוע הבא?</h2>
        <p className="text-lg mb-8 opacity-90">
          בואו ננהל את הוספת DJ לאירוע שלך
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact/whatsapp"
            className="bg-white text-[#D42B2B] px-8 py-4 rounded font-bold hover:bg-zinc-100 transition-colors"
          >
            שלחו הודעה בווצ"ס
          </Link>
          <Link
            href="tel:+972-58-7555456"
            className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors"
          >
            התקשרו עכשיו
          </Link>
        </div>
      </section>

      <RelatedPages
        title="קישורים שימושיים"
        pages={[
          { label: "חתונות", href: "/weddings", desc: "DJ לחתונה — מ-12,650 ₪" },
          { label: "בר/בת מצווה", href: "/about/bar-mitzvah", desc: "DJ לבר מצווה — מ-7,500 ₪" },
          { label: "עוד ערים", href: "/dj-events/cities", desc: "DJ בכל אזור המרכז" },
          { label: "צור קשר", href: "/contact", desc: "בדקו זמינות לתאריך שלכם" },
        ]}
      />
    </div>
  );
}