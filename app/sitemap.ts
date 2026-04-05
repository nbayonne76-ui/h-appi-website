import { MetadataRoute } from 'next';

const BASE = 'https://happi-bot.com';

const ROUTES = [
  { path: '',              changeFrequency: 'weekly'  as const, priority: 1.0 },
  { path: '/atelier',      changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/secretary',    changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/dropos',       changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/tarifs',       changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/fonctionnalites', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/cas-usage',    changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/faq',          changeFrequency: 'monthly' as const, priority: 0.75 },
  { path: '/blog',         changeFrequency: 'weekly'  as const, priority: 0.75 },
  { path: '/a-propos',     changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/securite',     changeFrequency: 'yearly'  as const, priority: 0.6 },
  { path: '/mentions-legales', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/confidentialite',  changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/cgv',          changeFrequency: 'yearly'  as const, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTES.flatMap(({ path, changeFrequency, priority }) => [
    // French (default, no prefix)
    {
      url: `${BASE}${path || '/'}`,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          fr: `${BASE}${path || '/'}`,
          en: `${BASE}/en${path}`,
          'x-default': `${BASE}${path || '/'}`,
        },
      },
    },
    // English (/en prefix)
    {
      url: `${BASE}/en${path}`,
      lastModified: now,
      changeFrequency,
      priority: priority - 0.05,
      alternates: {
        languages: {
          fr: `${BASE}${path || '/'}`,
          en: `${BASE}/en${path}`,
          'x-default': `${BASE}${path || '/'}`,
        },
      },
    },
  ]);
}
