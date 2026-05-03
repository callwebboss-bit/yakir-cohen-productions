import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/vip/", "/private/", "/thank-you/"],
      },
    ],
    sitemap: 'https://www.yakircohen.com/sitemap.xml',
  };
}
