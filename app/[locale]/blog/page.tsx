'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/blog/ArticleCard';
import NewsSection from '@/components/blog/NewsSection';
import BlogCategoryNav from '@/components/blog/BlogCategoryNav';
import BlogNewsletter from '@/components/blog/BlogNewsletter';
import { getArticles, getCategories } from '@/lib/blog-data';
import { motion } from 'framer-motion';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import { FadeInUp } from '@/components/ui/Animate';
import { BookOpen, Rss, PenLine, BarChart3 } from 'lucide-react';

const NEWS_KEY_FR = 'Actualités';
const NEWS_KEY_EN = 'News';

export default function BlogPage() {
  const locale = useLocale();
  const t = useTranslations('blog');
  const fr = locale === 'fr';
  const articles = getArticles(locale);
  const categories = getCategories(locale);

  const newsLabel = fr ? NEWS_KEY_FR : NEWS_KEY_EN;
  const allLabel = categories[0]; // "Tous" / "All"

  const allCategories = [
    allLabel,
    newsLabel,
    ...categories.slice(1),
  ];

  const [activeCategory, setActiveCategory] = useState(allLabel);
  const isNewsTab = activeCategory === newsLabel;
  const isAllTab = activeCategory === allLabel;

  const filtered = isNewsTab
    ? articles
    : isAllTab
      ? articles
      : articles.filter((a) => a.category === activeCategory || a.category === categories[categories.indexOf(activeCategory)]);

  const featuredArticle = isAllTab && !isNewsTab ? articles.find((a) => a.featured) : null;
  const gridArticles = featuredArticle ? filtered.filter((a) => a.slug !== featuredArticle.slug) : filtered;

  const categoryCounts: Record<string, number> = { [allLabel]: articles.length, [newsLabel]: 0 };
  categories.slice(1).forEach((cat) => {
    categoryCounts[cat] = articles.filter((a) => a.category === cat).length;
    // Also map EN keys
    const enCat = cat === 'Produit' ? 'Product' : cat === 'Tendances' ? 'Trends' : cat === 'Conformité' ? 'Compliance' : cat;
    categoryCounts[enCat] = categoryCounts[cat];
  });

  const heroStats = [
    { icon: PenLine, value: `${articles.length}`, label: fr ? 'Articles' : 'Articles' },
    { icon: BookOpen, value: '4', label: fr ? 'Catégories' : 'Categories' },
    { icon: Rss, value: '10', label: fr ? 'Sources live' : 'Live sources' },
    { icon: BarChart3, value: fr ? 'Hebdo' : 'Weekly', label: fr ? 'Nouvelles publis' : 'New posts' },
  ];

  return (
    <>
      <Header />
      <main className="bg-happi-darker">

        {/* ── Section 1 — Hero ── */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <AnimatedMesh variant="hero" />
          <div className="max-w-4xl mx-auto text-center relative z-10">

            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-happi-blue/10 border border-happi-blue/20 px-4 py-1.5 rounded-full mb-6">
                <BookOpen size={13} className="text-happi-blue" />
                <span className="text-xs font-semibold text-happi-blue uppercase tracking-wide">
                  {t('badge')}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                {t.rich('title', {
                  highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
                })}
              </h1>
              <p className="text-happi-muted text-base max-w-xl mx-auto mb-10">
                {t('subtitle')}
              </p>
            </FadeInUp>

            {/* Stats bar */}
            <FadeInUp delay={0.1}>
              <div className="inline-flex flex-wrap items-center justify-center gap-6 px-6 py-4 rounded-2xl border border-happi-border bg-happi-surface/40 backdrop-blur-sm">
                {heroStats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <stat.icon size={14} className="text-happi-blue flex-shrink-0" />
                    <span className="text-white font-bold">{stat.value}</span>
                    <span className="text-happi-muted">{stat.label}</span>
                  </div>
                ))}
              </div>
            </FadeInUp>

          </div>
        </section>

        {/* ── Section 2 — Explorer par catégorie ── */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeInUp className="mb-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-1">
                {fr ? 'Explorer' : 'Explore'}
              </p>
              <h2 className="text-xl font-extrabold text-white">
                {fr ? 'Choisir une catégorie' : 'Choose a category'}
              </h2>
            </FadeInUp>
            <BlogCategoryNav
              fr={fr}
              counts={categoryCounts}
              activeCategory={activeCategory}
              allLabel={allLabel}
              onSelect={setActiveCategory}
            />
          </div>
        </section>

        {/* ── Section 3 — À la une (featured) ── */}
        {featuredArticle && isAllTab && (
          <section className="pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-5">
                ★ {t('featured')}
              </p>
              <ArticleCard article={featuredArticle} featured />
            </div>
          </section>
        )}

        {/* ── Section 4 — Articles grid / News tab ── */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {/* Tab bar */}
            <div className="flex items-center gap-2 mb-8 border-b border-happi-border pb-4 overflow-x-auto scrollbar-hide">
              {allCategories.map((cat) => {
                const isNews = cat === newsLabel;
                const isActive = activeCategory === cat;
                return (
                  <motion.button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-happi-blue text-white'
                        : 'text-happi-muted hover:text-white hover:bg-happi-surface border border-happi-border'
                    }`}
                  >
                    {isNews && <Rss size={10} />}
                    {cat}
                    {isNews ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    ) : (
                      <span className={`tabular-nums ${isActive ? 'opacity-70' : 'opacity-50'}`}>
                        {categoryCounts[cat] ?? 0}
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* News tab */}
            {isNewsTab ? (
              <NewsSection fr={fr} />
            ) : (
              <>
                {gridArticles.length === 0 ? (
                  <div className="text-center py-16 text-happi-muted text-sm">
                    {t('noArticles')}
                  </div>
                ) : (
                  <>
                    {!featuredArticle && (
                      <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-5">
                        {t('allArticles')}
                      </p>
                    )}
                    {featuredArticle && isAllTab && (
                      <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-5">
                        {t('allArticles')}
                      </p>
                    )}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {gridArticles.map((article, i) => (
                        <motion.div
                          key={article.slug}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.06 }}
                        >
                          <ArticleCard article={article} />
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}

          </div>
        </section>

        {/* ── Section 5 — Newsletter / Contact ── */}
        <BlogNewsletter fr={fr} />

      </main>
      <Footer />
    </>
  );
}
