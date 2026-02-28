import frMessages from '@/messages/fr.json';
import enMessages from '@/messages/en.json';

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  accentHex: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  featured?: boolean;
};

const slugs = [
  'vrai-cout-livraison-ratee',
  'sav-ameublement-equipe-appels',
  'roi-chatbot-sav-mesure',
  'chatbot-personnalisation-metier',
  'application-sur-mesure-vs-standardisee',
  'ia-generative-2026-tendances',
  'chatbots-rgpd-conformite-guide',
];

const categoryColors: Record<string, string> = {
  Produit: 'bg-happi-blue/10 text-happi-blue',
  Product: 'bg-happi-blue/10 text-happi-blue',
  Guide: 'bg-happi-green/10 text-happi-green',
  Tendances: 'bg-purple-500/10 text-purple-400',
  Trends: 'bg-purple-500/10 text-purple-400',
  Conformité: 'bg-red-500/10 text-red-400',
  Compliance: 'bg-red-500/10 text-red-400',
};

const categoryAccent: Record<string, string> = {
  Produit: '#3B82F6',
  Product: '#3B82F6',
  Guide: '#10B981',
  Tendances: '#c084fc',
  Trends: '#c084fc',
  Conformité: '#f87171',
  Compliance: '#f87171',
};

const messages: Record<string, typeof frMessages> = {
  fr: frMessages,
  en: enMessages,
};

export function getArticles(locale: string): Article[] {
  const data = (messages[locale] || messages.fr).blogData.articles;
  return data.map((item, index) => ({
    slug: slugs[index],
    title: item.title,
    excerpt: item.excerpt,
    category: item.category,
    categoryColor: categoryColors[item.category] || 'bg-gray-100 text-gray-700',
    accentHex: categoryAccent[item.category] || '#3B82F6',
    date: item.date,
    readTime: item.readTime,
    author: item.author,
    authorRole: item.authorRole,
    featured: index === 0,
  }));
}

export function getCategories(locale: string): string[] {
  return (messages[locale] || messages.fr).blog.categories;
}

export function getArticleBySlug(locale: string, slug: string): Article | undefined {
  return getArticles(locale).find((a) => a.slug === slug);
}

export function getRelatedArticles(locale: string, currentSlug: string): Article[] {
  return getArticles(locale).filter((a) => a.slug !== currentSlug).slice(0, 2);
}
