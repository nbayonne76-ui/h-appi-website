'use client';

import { useState } from 'react';
import { openContactModal } from '@/components/ui/ContactModal';
import { useLocale, useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/blog/ArticleCard';
import { getArticles, getCategories } from '@/lib/blog-data';
import { BookOpen, MessageSquare } from 'lucide-react';

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

  const featuredArticle = activeCategory === categories[0] ? articles.find((a) => a.featured) : null;
  const gridArticles = featuredArticle
    ? filtered.filter((a) => a.slug !== featuredArticle.slug)
    : filtered;

  // Count per category
  const categoryCounts: Record<string, number> = {
    [categories[0]]: articles.length,
  };
  categories.slice(1).forEach((cat) => {
    categoryCounts[cat] = articles.filter((a) => a.category === cat).length;
  });

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-happi-blue/10 border border-happi-blue/20 px-4 py-1.5 rounded-full mb-6">
              <BookOpen size={14} className="text-happi-blue" />
              <span className="text-xs font-semibold text-happi-blue uppercase tracking-wide">
                {t('badge')}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              {t.rich('title', {
                highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
              })}
            </h1>
            <p className="text-happi-muted text-base max-w-xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </section>

        {/* Mobile category filter */}
        <div className="lg:hidden sticky top-16 z-40 bg-happi-dark border-b border-happi-border/50 px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  activeCategory === cat
                    ? 'bg-happi-blue text-white'
                    : 'bg-happi-surface text-happi-muted hover:text-white border border-happi-border'
                }`}
              >
                {cat}
                <span className="ml-1.5 opacity-60">{categoryCounts[cat] ?? 0}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content: sidebar + main */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex gap-10 items-start">

            {/* Sidebar — desktop only */}
            <aside className="hidden lg:flex flex-col w-52 flex-shrink-0 sticky top-28 gap-6">
              {/* Categories */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-3 px-1">
                  {locale === 'fr' ? 'Catégories' : 'Categories'}
                </p>
                <nav className="space-y-0.5">
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all text-left ${
                          isActive
                            ? 'bg-happi-blue/10 text-happi-blue font-semibold'
                            : 'text-happi-muted hover:text-white hover:bg-happi-surface'
                        }`}
                      >
                        <span>{cat}</span>
                        <span className={`text-xs tabular-nums ${isActive ? 'text-happi-blue/70' : 'text-happi-muted/50'}`}>
                          {categoryCounts[cat] ?? 0}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Divider */}
              <div className="h-px bg-happi-border/40" />

              {/* Mini CTA */}
              <div className="bg-happi-surface border border-happi-border rounded-xl p-4">
                <div className="w-8 h-8 bg-happi-blue/10 border border-happi-blue/20 rounded-lg flex items-center justify-center mb-3">
                  <MessageSquare size={14} className="text-happi-blue" />
                </div>
                <p className="text-white font-semibold text-sm mb-1">
                  {t('newsletterTitle')}
                </p>
                <p className="text-happi-muted text-xs mb-3 leading-relaxed">
                  {t('newsletterNote')}
                </p>
                <button
                  onClick={openContactModal}
                  className="w-full text-xs font-medium bg-happi-blue hover:bg-happi-blue/90 text-white rounded-lg px-3 py-2 transition-all"
                >
                  {t('newsletterCta')} →
                </button>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Featured article */}
              {featuredArticle && (
                <div className="mb-8">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-3">
                    ★ {t('featured')}
                  </p>
                  <ArticleCard article={featuredArticle} featured />
                </div>
              )}

              {/* Grid */}
              {gridArticles.length === 0 ? (
                <div className="text-center py-16 text-happi-muted text-sm">
                  {t('noArticles')}
                </div>
              ) : (
                <>
                  {featuredArticle && (
                    <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-4">
                      {t('allArticles')}
                    </p>
                  )}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {gridArticles.map((article) => (
                      <ArticleCard key={article.slug} article={article} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
