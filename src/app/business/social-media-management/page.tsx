import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Zap, Users, TrendingUp, CheckCircle2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import RelatedPages from "@/components/RelatedPages";

export const metadata: Metadata = {
  title: "ניהול סושיאל מדיה — Facebook, Instagram, TikTok | יקיר כהן הפקות",
  description:
    "ניהול מקצועי של חשבונות הסושיאל מדיה שלכם. תוכן יומי, עיצוב גרפי, ניתוח ביצועים. מ-₪1,500/חודש.",
  alternates: { canonical: `${SITE_URL}/business/social-media-management` },
  openGraph: {
    title: "ניהול סושיאל מדיה מקצועי | יקיר כהן הפקות",
    description: "Facebook, Instagram, TikTok, YouTube — ניהול מלא. תוכן, עיצוב, ניתוח.",
    url: `${SITE_URL}/business/social-media-management`,
    siteName: "יקיר כהן הפקות",
    locale: "he_IL",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ניהול סושיאל מדיה — יקיר כהן הפקות",
  "description": "ניהול מקצועי של סושיאל מדיה לעסקים. תוכן יומי, עיצוב גרפי וניתוח ביצועים.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "יקיר כהן הפקות",
    "telephone": "+972-58-7555456",
    "url": `${SITE_URL}`,
  },
  "offers": {
    "@type": "Offer",
    "price": "1500",
    "priceCurrency": "ILS",
    "description": "ניהול סושיאל מדיה חודשי",
  },
};

const services = [
  {
    title: "יצירת תוכן",
    icon: <Users className="w-6 h-6" />,
    features: [
      "פוסטים יומיים מקופחים",
      "וידאו קצרים ו-Reels",
      "קופי שונה לכל פלטפורמה",
      "קלנדר תוכן מתוכנן",
    ],
  },
  {
    title: "עיצוב גרפי",
    icon: <Zap className="w-6 h-6" />,
    features: [
      "עיצוב ייחודי לדוגמנו",
      "פוסטים בעיצוב מעולה",
      "סטוריז ועיצוב טמפלטים",
      "לוגו ותיוג עקבי",
    ],
  },
  {
    title: "ניתוח ביצועים",
    icon: <TrendingUp className="w-6 h-6" />,
    features: [
      "דוח חודשי של ביצועים",
      "ניתוח קהל יעד",
      "הוצאות פרסום מבוקרות",
      "אופטימיזציה מתמשכת",
    ],
  },
  {
    title: "ניהול קהילה",
    icon: <BarChart3 className="w-6 h-6" />,
    features: [
      "הגבה על תגובות ודיונים",
      "שיתוף פעולה עם משפיענים",
      "בניית קהילה עוסקת",
      "ניהול משברים אונליין",
    ],
  },
];

const packages = [
  {
    name: "חבילה בסיסית",
    price: "₪1,500",
    platforms: "Facebook + Instagram",
    posts: "4 פוסטים/שבוע",
    features: [
      "פוסטים יומיים מעצבים",
      "ניתוח מודיעול",
      "הגבה על תגובות",
      "עיצוב בסיסי",
      "דוח חודשי",
    ],
  },
  {
    name: "חבילה מקצועית",
    price: "₪2,500",
    platforms: "Facebook + Instagram + TikTok",
    posts: "7 פוסטים/שבוע + 3 וידאו",
    features: [
      "תוכן מתקדם וקריאטיבי",
      "וידאו ו-Reels",
      "ניתוח מעמוק ביצועים",
      "עיצוב premium",
      "דוח + המלצות",
      "ניהול קהילה",
    ],
    highlighted: true,
  },
  {
    name: "חבילת יסוד",
    price: "₪500",
    platforms: "בחירה אחת",
    posts: "2 פוסטים/שבוע",
    features: [
      "פוסטים בסיסיים",
      "עיצוב פשוט",
      "תשובות לדיונים",
      "ללא דוח",
    ],
  },
];

export default function SocialMediaManagementPage() {
  return (
    <div className="flex flex-col" dir="rtl">
      <StructuredData data={schema} />

      {/* Header */}
      <header className="py-20 px-6 bg-white border-b border-zinc-100 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center justify-center gap-2">
          <span className="inline-block w-5 h-px bg-zinc-200" />
          שירות עסקי
          <span className="inline-block w-5 h-px bg-zinc-200" />
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-4" style={{ fontFamily: '"Frank Ruhl Libre", serif' }}>
          ניהול סושיאל מדיה.
          <br />
          <span className="text-[#D42B2B]">קהילה שגדלה.</span>
        </h1>
        <p className="text-zinc-500 text-base max-w-2xl mx-auto mb-8">
          מ-Facebook עד TikTok — אנחנו מנהלים את הכל. תוכן מוקפח, עיצוב premium, ביצועים גבוהים.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact/whatsapp" className="bg-[#D42B2B] text-white px-8 py-4 rounded font-bold hover:bg-red-700 transition-colors shadow-lg">
            שלחו לי הצעה
          </Link>
          <Link href="/business" className="border border-zinc-300 px-8 py-4 rounded font-bold hover:border-zinc-900 transition-all">
            עוד שירותים עסקיים
          </Link>
        </div>
      </header>

      {/* Services */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">מה אנחנו עושים?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(({ title, icon, features }) => (
              <div key={title} className="bg-white p-8 rounded-2xl border border-zinc-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#D42B2B] text-white rounded-lg flex items-center justify-center">
                    {icon}
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <ul className="space-y-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} className="text-[#D42B2B] mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-12">חבילות שירות</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col gap-4 p-8 rounded-2xl transition-all ${
                pkg.highlighted
                  ? "bg-[#D42B2B] text-white border-2 border-[#D42B2B] shadow-lg transform md:scale-105"
                  : "bg-white border-2 border-zinc-200 hover:border-[#D42B2B]"
              }`}
            >
              <div>
                <h3 className={`text-xl font-bold mb-1 ${pkg.highlighted ? "text-white" : ""}`}>{pkg.name}</h3>
                <p className={`text-sm ${pkg.highlighted ? "opacity-90" : "text-zinc-500"}`}>{pkg.platforms}</p>
              </div>
              <div className={`text-3xl font-bold mb-2 ${pkg.highlighted ? "text-white" : "text-[#D42B2B]"}`}>{pkg.price}</div>
              <p className={`text-sm mb-4 ${pkg.highlighted ? "opacity-90" : "text-zinc-600"}`}>{pkg.posts}</p>
              <ul className="flex flex-col gap-3 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={16} className={pkg.highlighted ? "text-white" : "text-[#D42B2B]"} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact/whatsapp"
                className={`mt-6 px-6 py-3 rounded font-bold transition-colors text-center ${
                  pkg.highlighted
                    ? "bg-white text-[#D42B2B] hover:bg-zinc-100"
                    : "bg-[#D42B2B] text-white hover:bg-red-700"
                }`}
              >
                {pkg.highlighted ? "בחרו את זה!" : "למידע נוסף"}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">למה לבחור בנו?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "מומחים בסושיאל", desc: "שנים של ניסיון בבניית קהילות גדלות" },
              { title: "תוכן ייחודי", desc: "כל פוסט מתוכנן וממוצמד בעדון" },
              { title: "ניתוח מעמוק", desc: "דוחות חודשיים עם תובנות פעולה" },
              { title: "תמיכה מלאה", desc: "הגבה מהירה וחברות אמיתית עם העסק שלך" },
            ].map(({ title, desc }) => (
              <div key={title} className="p-6 bg-zinc-50 rounded-lg">
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-zinc-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#D42B2B] text-white text-center">
        <h2 className="text-3xl font-bold mb-3">מוכנים להגביר את הנוכחות שלכם?</h2>
        <p className="text-lg mb-8 opacity-90">בואו נדבר על חבילה שמתאימה לעסק שלכם</p>
        <Link href="/contact/whatsapp" className="inline-block bg-white text-[#D42B2B] px-8 py-4 rounded font-bold hover:bg-zinc-100 transition-colors">
          בואו נתחיל!
        </Link>
      </section>

      <RelatedPages
        title="שירותים קשורים"
        pages={[
          { label: "קריינות ופרסומות", href: "/business/professional-voiceover", desc: "קריינות IVR, תדמית וקורפורייט" },
          { label: "עוד שירותים עסקיים", href: "/business", desc: "כל השירותים לעסקים" },
          { label: "צור קשר", href: "/contact", desc: "דברו איתנו — נחזור מהר" },
        ]}
      />
    </div>
  );
}