'use client';

import { Link } from '@/i18n/navigation';
import { Clock, ArrowRight, User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
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
      <Link href={`/blog/${article.slug}`} className="group block">
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="rounded-2xl overflow-hidden border border-happi-border bg-happi-surface hover:border-opacity-60 transition-colors duration-300 hover:shadow-2xl hover:shadow-black/30"
        >
          {/* Gradient top bar */}
          <div
            className="h-1.5 w-full"
            style={{ background: `linear-gradient(90deg, ${article.accentHex}, ${article.accentHex}60)` }}
          />

          {/* Visual header band */}
          <div
            className="h-24 w-full flex items-end px-8 pb-5 relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${article.accentHex}18, ${article.accentHex}06)` }}
          >
            {/* Decorative circle */}
            <div
              className="absolute top-[-20px] right-[-20px] w-32 h-32 rounded-full opacity-10"
              style={{ background: article.accentHex }}
            />
            <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${article.categoryColor}`}>
              {article.category}
            </span>
          </div>

          <div className="p-8 md:p-10">
            {/* Meta row */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-1.5 text-happi-muted text-xs">
                <Clock size={11} />
                <span>{article.readTime} {t('readTime')}</span>
              </div>
              <span className="text-happi-border">·</span>
              <span className="text-happi-muted text-xs">{article.date}</span>
            </div>

            {/* Title */}
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight tracking-tight transition-colors duration-200"
              style={{ '--hover-color': article.accentHex } as React.CSSProperties}
            >
              <span className="group-hover:text-happi-blue transition-colors duration-200">
                {article.title}
              </span>
            </h2>

            {/* Excerpt */}
            <p className="text-happi-muted text-base leading-relaxed mb-8 max-w-2xl">
              {article.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-happi-muted text-sm">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: article.accentHex + '25', border: `1px solid ${article.accentHex}40` }}
                >
                  <User size={14} style={{ color: article.accentHex }} />
                </div>
                <div>
                  <div className="text-white text-xs font-medium">{article.author}</div>
                  <div className="text-happi-muted/60 text-[10px]">{article.authorRole}</div>
                </div>
              </div>
              <motion.span
                className="flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: article.accentHex }}
                initial={{ opacity: 0, x: -4 }}
                whileHover={{ x: 2 }}
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {t('readArticle')}
                </span>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.span>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  // Standard card
  return (
    <Link href={`/blog/${article.slug}`} className="group block">
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="rounded-xl overflow-hidden border border-happi-border bg-happi-surface hover:border-opacity-60 transition-colors duration-200 hover:shadow-lg hover:shadow-black/20 h-full flex flex-col"
      >
        {/* Gradient top bar */}
        <div
          className="h-1 w-full flex-shrink-0"
          style={{ background: `linear-gradient(90deg, ${article.accentHex}, ${article.accentHex}50)` }}
        />

        {/* Category header */}
        <div
          className="px-5 pt-4 pb-3 flex-shrink-0"
          style={{ background: `${article.accentHex}08` }}
        >
          <div className="flex items-center justify-between">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${article.categoryColor}`}>
              {article.category}
            </span>
            <div className="flex items-center gap-1 text-happi-muted text-xs">
              <Clock size={10} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-base font-bold text-white mb-3 leading-snug tracking-tight group-hover:text-happi-blue transition-colors duration-200 flex-shrink-0">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-happi-muted text-sm leading-relaxed line-clamp-3 flex-1">
            {article.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-happi-border/40">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: `${article.accentHex}20`, border: `1px solid ${article.accentHex}30` }}
              >
                <User size={11} style={{ color: article.accentHex }} />
              </div>
              <span className="text-happi-muted/70 text-xs">{article.date}</span>
            </div>
            <span
              className="flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ color: article.accentHex }}
            >
              {t('readArticle')}
              <ArrowRight size={11} />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
