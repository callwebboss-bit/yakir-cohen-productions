import { SITE_URL } from "@/lib/site-url";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/", "/contact/whatsapp"],
      },
      /* Allow Google full crawl including images */
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      /* Bing */
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      /* AI crawlers — allow content pages, block API routes */
      {
        userAgent: "GPTBot",
        allow: ["/blog/", "/studio/", "/about/"],
        disallow: ["/api/", "/vip/", "/private/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/blog/", "/studio/", "/about/"],
        disallow: ["/api/", "/vip/", "/private/"],
      },
      {
        userAgent: "anthropic-ai",
        allow: ["/blog/", "/studio/", "/about/"],
        disallow: ["/api/", "/vip/", "/private/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/blog/", "/studio/", "/about/"],
        disallow: ["/api/", "/vip/", "/private/"],
      },
      /* Block scrapers that don't respect terms */
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
