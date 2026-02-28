'use client';

import { Link } from '@/i18n/navigation';
import { Clock, ArrowRight, User } from 'lucide-react';
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

  if (featured) {
    return (
      <Link
        href={`/blog/${article.slug}`}
        className="group block bg-happi-surface rounded-2xl border border-happi-border hover:border-opacity-60 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-0.5"
        style={{ borderLeftColor: article.accentHex, borderLeftWidth: '4px' }}
      >
        <div className="p-8 md:p-10">
          {/* Top row */}
          <div className="flex items-center justify-between mb-5">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${article.categoryColor}`}>
              {article.category}
            </span>
            <div className="flex items-center gap-1.5 text-happi-muted text-xs">
              <Clock size={12} />
              <span>{article.readTime} {t('readTime')}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight tracking-tight group-hover:text-happi-blue transition-colors duration-200">
            {article.title}
          </h2>

          {/* Excerpt */}
          <p className="text-happi-muted text-base leading-relaxed mb-8 max-w-2xl">
            {article.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-happi-muted text-sm">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: article.accentHex + '33', border: `1px solid ${article.accentHex}40` }}
              >
                <User size={13} style={{ color: article.accentHex }} />
              </div>
              <span>{article.author}</span>
              <span className="text-happi-border">·</span>
              <span>{article.date}</span>
            </div>
            <span
              className="flex items-center gap-1.5 text-sm font-semibold transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
              style={{ color: article.accentHex }}
            >
              {t('readArticle')}
              <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block bg-happi-surface rounded-xl border border-happi-border hover:border-opacity-60 transition-all duration-200 overflow-hidden hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5"
      style={{ borderLeftColor: article.accentHex, borderLeftWidth: '3px' }}
    >
      <div className="p-6">
        {/* Top row */}
        <div className="flex items-center justify-between mb-4">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${article.categoryColor}`}>
            {article.category}
          </span>
          <div className="flex items-center gap-1 text-happi-muted text-xs">
            <Clock size={11} />
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white mb-3 leading-snug tracking-tight group-hover:text-happi-blue transition-colors duration-200">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-happi-muted text-sm leading-relaxed mb-5 line-clamp-2">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-happi-muted/70 text-xs">{article.date}</span>
          <span
            className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: article.accentHex }}
          >
            {t('readArticle')}
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
