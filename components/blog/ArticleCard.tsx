'use client';

import { Link } from '@/i18n/navigation';
import { Clock, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { Article } from '@/lib/blog-data';

export default function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  const t = useTranslations('blogArticle');

  return (
    <Link
      href={`/blog/${article.slug}`}
      className={`group block bg-white rounded-2xl border border-gray-100 hover:border-happi-blue/20 hover:shadow-lg transition-all overflow-hidden ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Category Color Bar */}
      <div className="h-1 bg-gradient-to-r from-happi-blue to-happi-green" />

      <div className={`p-8 ${featured ? 'md:p-10' : ''}`}>
        <div className="flex items-center justify-between mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${article.categoryColor}`}
          >
            {article.category}
          </span>
          <div className="flex items-center space-x-1 text-gray-400 text-xs">
            <Clock size={12} />
            <span>{article.readTime} {t('readTime')}</span>
          </div>
        </div>

        <h3
          className={`font-bold text-happi-dark mb-3 group-hover:text-happi-blue transition-colors ${
            featured ? 'text-2xl' : 'text-lg'
          }`}
        >
          {article.title}
        </h3>

        <p
          className={`text-gray-600 leading-relaxed mb-6 ${
            featured ? 'text-base' : 'text-sm'
          }`}
        >
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-400">{article.date}</div>
          <span className="flex items-center text-happi-blue text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            {t('readArticle')}
            <ArrowRight
              size={14}
              className="ml-1 group-hover:translate-x-1 transition-transform"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
