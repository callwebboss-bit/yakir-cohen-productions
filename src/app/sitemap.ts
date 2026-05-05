import { SITE_URL } from "@/lib/site-url";
import { MetadataRoute } from "next";

const BASE = SITE_URL;
const NOW = new Date();

type Entry = { url: string; lastModified: Date; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number };

function url(path: string, priority: number, freq: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly"): Entry {
  return { url: `${BASE}${path}`, lastModified: NOW, changeFrequency: freq, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    /* ── Home ── */
    url("/",        1.0, "weekly"),
    url("/stemsplit", 0.9),

    /* ── אולפן ── */
    url("/studio",                                            0.9),
    url("/studio/recording-song-modiin",                     0.9),
    url("/studio/recording-song-modiin/original-song",       0.8),
    url("/studio/recording-song-modiin/blessing-writing",    0.7),
    url("/studio/recording-song-modiin/songwriting-service", 0.7),
    url("/studio/studio-jerusalem",                          0.8),
    url("/studio/pricing",                                   0.8),
    url("/studio/blessings",                                 0.8),
    url("/studio/blessings/bar-mitzvah",                     0.7),
    url("/studio/blessings/bride-groom-blessing",            0.7),
    url("/studio/blessings/wedding-entrance",                0.7),
    url("/studio/blessings/sermon-recording",                0.7),
    url("/studio/blessings/video-clip",                      0.7),
    url("/studio/mobile-studio",                             0.7),
    url("/studio/mobile-studio/home-phone-blessings",        0.6),
    url("/singerkids",                                       0.8),
    url("/weddings/songs",                                   0.8),

    /* ── פודקאסט ── */
    url("/podcast",                    0.8),
    url("/podcast/podcast-production", 0.8),
    url("/podcast/podcast-studio",     0.7),
    url("/podcast/mobile-studio",      0.8),
    url("/podcast/podcast-equipment",  0.7),

    /* ── אירועים ── */
    url("/attractions",                         0.8),
    url("/attractions/bubble-machine",          0.9),
    url("/attractions/cold-fireworks",          0.7),
    url("/attractions/confetti-cannon",         0.7),
    url("/attractions/giant-balloons",          0.7),
    url("/attractions/wedding-smoking-machine", 0.7),
    url("/attractions/Wedding-photography",     0.8),
    url("/events/dj-events",                    0.8),
    url("/events/stage-led-dj",                 0.7),
    url("/events/led-booth",                    0.8),
    url("/events/equipment",                    0.7),
    url("/dj-events/cities",                    0.7),
    url("/photography",                         0.7),

    /* ── שירותים אונליין ── */
    url("/online",                                0.8),
    url("/online/vocal-fix",                      0.8),
    url("/online/vocal-fix/stem-split",           0.9),
    url("/online/vocal-fix/audio-repair",         0.7),
    url("/online/vocal-fix/mixing",               0.7),
    url("/online/vocal-fix/pitch-correction",     0.7),
    url("/online/vocal-fix/volume-fix",           0.7),
    url("/online/vocal-fix/photo-enhance",        0.6),
    url("/online/vocal-fix/%D7%A0%D7%99%D7%A7%D7%95%D7%99-%D7%A8%D7%A2%D7%A9%D7%99%D7%9D", 0.7),
    url("/online/online-ai-pricing",              0.7),

    /* ── האקדמיה ── */
    url("/academy",            0.8),
    url("/academy/home-studio", 0.7),
    url("/courses",            0.7),

    /* ── עסקים ── */
    url("/business",                                          0.7),
    url("/business/professional-voiceover",                  0.7),
    url("/business/professional-voiceover/corporate-voiceover", 0.7),
    url("/business/professional-voiceover/phone-voiceover",  0.6),
    url("/business/social-media-management",                 0.6),

    /* ── גמגום ── */
    url("/stuttering", 0.8),
    url("/clinic",     0.7),

    /* ── בלוג ── */
    url("/blog",                                                    0.7, "weekly"),
    url("/blog/ai-dj-music",                                        0.8),
    url("/blog/original-song-production-behind-the-scenes",        0.7),
    url("/blog/recording-events-songs",                             0.7),
    url("/blog/viral-5m-views",                                     0.7),
    url("/blog/wedding-songs-chuppah",                              0.6),
    url("/blog/bar-bat-mitzvah",                                    0.6),
    url("/blog/Studio-Tips",                                        0.6),
    url("/blog/RECORDS",                                            0.6),
    url("/blog/how-records-in-real-studio-ins-israel",              0.6),
    url("/blog/magazine-wedding",                                   0.6),
    url("/blog/Attractions",                                        0.6),
    url("/blog/Music-Tips",                                         0.6),
    url("/blog/back-to-kindergarten",                               0.5),

    /* ── שירותים / VIP ── */
    url("/vip",      0.6),
    url("/voucher",  0.6),
    url("/portfolio", 0.5),

    /* ── אודות / מידע ── */
    url("/about",           0.4),
    url("/about/faq",       0.5),
    url("/about/reviews",   0.5),
    url("/contact",         0.4),
    url("/site-map",        0.5),
    url("/terms",           0.3, "yearly"),
    url("/accessibility",   0.3, "yearly"),
  ];
}
