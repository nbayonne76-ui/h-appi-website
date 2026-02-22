'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/blog/ArticleCard';
import { getArticles, getCategories } from '@/lib/blog-data';
import { BookOpen } from 'lucide-react';

export default function BlogPage() {
  const locale = useLocale();
  const t = useTranslations('blog');
  const articles = getArticles(locale);
  const categories = getCategories(locale);

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filtered =
    activeCategory === categories[0]
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = filtered.filter((a) => !a.featured || activeCategory !== categories[0]);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-happi-blue/10 px-4 py-2 rounded-full mb-6">
              <BookOpen className="text-happi-blue" size={18} />
              <span className="text-sm font-medium text-happi-blue">
                {t('badge')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.rich('title', {
                highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
              })}
            </h1>
            <p className="text-lg text-happi-muted max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-16 z-40 bg-happi-dark border-b border-happi-border/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 overflow-x-auto py-4 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? 'bg-happi-blue text-white'
                      : 'bg-happi-darker text-happi-muted hover:bg-happi-surface'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {activeCategory === categories[0] && featuredArticle && (
          <section className="py-10 px-4 sm:px-6 lg:px-8 bg-happi-dark">
            <div className="max-w-5xl mx-auto">
              <p className="text-xs font-semibold text-happi-muted uppercase tracking-wider mb-4">
                {t('featured')}
              </p>
              <ArticleCard article={featuredArticle} featured />
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-5xl mx-auto">
            {activeCategory === categories[0] && (
              <p className="text-xs font-semibold text-happi-muted uppercase tracking-wider mb-6">
                {t('allArticles')}
              </p>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-happi-muted">
                {t('noArticles')}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(activeCategory === categories[0]
                  ? otherArticles.filter((a) => !a.featured)
                  : otherArticles
                ).map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              {t('newsletterTitle')}
            </h2>
            <p className="text-happi-muted mb-6">
              {t('newsletterSubtitle')}
            </p>
            <a
              href="mailto:nbayonne76@gmail.com?subject=Prise de contact H'appi"
              className="inline-flex items-center px-8 py-3 bg-happi-blue text-white rounded-lg hover:bg-opacity-90 transition-all font-medium"
            >
              {t('newsletterCta')}
            </a>
            <p className="text-xs text-happi-muted mt-4">
              {t('newsletterNote')}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
