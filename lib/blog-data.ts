export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  featured?: boolean;
};

export const articles: Article[] = [
  {
    slug: 'chatbot-personnalisation-metier',
    title:
      'Chatbot H\'appi : comment nous personnalisons chaque bot selon votre métier',
    excerpt:
      'Découvrez pourquoi les chatbots génériques frustrent vos clients et comment la personnalisation sectorielle transforme l\'expérience client avec un taux de satisfaction de 92%.',
    category: 'Produit',
    categoryColor: 'bg-happi-blue/10 text-happi-blue',
    date: '12 février 2026',
    readTime: '8 min',
    author: 'Équipe H\'appi',
    authorRole: 'Product & Engineering',
    featured: true,
  },
  {
    slug: 'application-sur-mesure-vs-standardisee',
    title:
      'Application sur-mesure vs solution standardisée : comment choisir ?',
    excerpt:
      'Comparaison détaillée des deux approches avec tableau comparatif, cas d\'usage et guide de décision pour faire le bon choix selon votre situation.',
    category: 'Guide',
    categoryColor: 'bg-happi-green/10 text-happi-green',
    date: '5 février 2026',
    readTime: '10 min',
    author: 'Équipe H\'appi',
    authorRole: 'Strategy & Consulting',
  },
  {
    slug: 'ia-generative-2026-tendances',
    title:
      'IA générative en 2026 : les 5 avancées qui changent les chatbots',
    excerpt:
      'Support proactif, intelligence émotionnelle, multimodalité... Les innovations concrètes qui transforment les chatbots en véritables assistants stratégiques.',
    category: 'Tendances',
    categoryColor: 'bg-purple-100 text-purple-700',
    date: '28 janvier 2026',
    readTime: '7 min',
    author: 'Équipe H\'appi',
    authorRole: 'Research & Innovation',
  },
  {
    slug: 'chatbots-rgpd-conformite-guide',
    title:
      'Chatbots et RGPD : guide complet de conformité pour la France et l\'Europe',
    excerpt:
      'RGPD + AI Act : tout ce que vous devez savoir pour déployer un chatbot conforme. Checklist actionnable et obligations détaillées.',
    category: 'Conformité',
    categoryColor: 'bg-red-50 text-red-600',
    date: '20 janvier 2026',
    readTime: '12 min',
    author: 'Équipe H\'appi',
    authorRole: 'Legal & Compliance',
  },
];

export const categories = [
  'Tous',
  'Produit',
  'Guide',
  'Tendances',
  'Conformité',
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string): Article[] {
  return articles.filter((a) => a.slug !== currentSlug).slice(0, 2);
}
