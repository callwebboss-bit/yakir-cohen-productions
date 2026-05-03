import { MetadataRoute } from "next";

const BASE = "https://www.yakircohen.com";
const NOW = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    /* ── Top of funnel ── */
    { url: BASE,                    lastModified: NOW, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/stemsplit`,     lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },

    /* ── האולפן ── */
    { url: `${BASE}/studio`,                       lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/studio/recording-song-modiin`, lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/studio/studio-jerusalem`,      lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/studio/pricing`,               lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/studio/blessings`,             lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/singerkids`,                   lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },

    /* ── פודקאסט ── */
    { url: `${BASE}/podcast/podcast-production`,   lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/podcast/podcast-studio`,        lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/podcast/mobile-studio`,         lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },

    /* ── אירועים ── */
    { url: `${BASE}/attractions`,                              lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/events/dj-events`,                        lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/events/stage-led-dj`,                     lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/events/led-booth`,                        lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/attractions/Wedding-photography`,          lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/attractions/bubble-machine`,               lastModified: NOW, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/attractions/cold-fireworks`,               lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/attractions/confetti-cannon`,              lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/attractions/giant-balloons`,               lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/attractions/wedding-smoking-machine`,      lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },

    /* ── האקדמיה ── */
    { url: `${BASE}/academy`,                      lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/courses`,                      lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },

    /* ── עסקים ── */
    { url: `${BASE}/business`,                     lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },

    /* ── גמגום ── */
    { url: `${BASE}/stuttering`,                   lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/clinic`,                       lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },

    /* ── בלוג ── */
    { url: `${BASE}/blog`,                                                             lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/original-song-production-behind-the-scenes`,                 lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/ai-dj-music`,                                               lastModified: NOW, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/recording-events-songs`,                                    lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/viral-5m-views`,                                            lastModified: NOW, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/wedding-songs-chuppah`,                                      lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog/bar-bat-mitzvah`,                                            lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog/Studio-Tips`,                                                lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog/RECORDS`,                                                    lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog/how-records-in-real-studio-ins-israel`,                      lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog/magazine-wedding`,                                           lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },

    /* ── פורטל VIP + שירותים ── */
    { url: `${BASE}/vip`,     lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/voucher`, lastModified: NOW, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/about`,   lastModified: NOW, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/contact`, lastModified: NOW, changeFrequency: "monthly", priority: 0.4 },
  ];
}
