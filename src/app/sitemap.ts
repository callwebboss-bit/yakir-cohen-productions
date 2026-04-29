import { MetadataRoute } from 'next';

const BASE = 'https://www.yakircohen.com';
const NOW = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    /* ── Top of funnel ── */
    {
      url: BASE,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 1,
    },

    /* ── אולפן (The Studio) ── */
    {
      url: `${BASE}/studio`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    /* ── אירועים (Events) ── */
    {
      url: `${BASE}/attractions`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    /* ── האקדמיה (Academy) ── */
    {
      url: `${BASE}/academy`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/courses`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    /* ── גמגום (Speak Free) ── */
    {
      url: `${BASE}/stuttering`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/clinic`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    /* ── פורטל VIP & utility pages ── */
    {
      url: `${BASE}/vip`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE}/voucher`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE}/about`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE}/contact`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];
}
