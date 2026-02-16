'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/blog/ArticleCard';
import { articles, categories } from '@/lib/blog-data';
import { BookOpen } from 'lucide-react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filtered =
    activeCategory === 'Tous'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = filtered.filter((a) => !a.featured || activeCategory !== 'Tous');

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
                Le Blog H'appi
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-happi-dark mb-4">
              Insights, guides et{' '}
              <span className="gradient-text">tendances</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ressources pour les entreprises qui veulent tirer le meilleur de
              l'IA, des chatbots et du digital sur-mesure.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-16 z-40 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 overflow-x-auto py-4 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? 'bg-happi-blue text-white'
                      : 'bg-happi-gray text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {activeCategory === 'Tous' && featuredArticle && (
          <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Article mis en avant
              </p>
              <ArticleCard article={featuredArticle} featured />
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-happi-gray">
          <div className="max-w-5xl mx-auto">
            {activeCategory === 'Tous' && (
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
                Tous les articles
              </p>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-gray-500">
                Aucun article dans cette catégorie pour le moment.
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(activeCategory === 'Tous'
                  ? otherArticles.filter((a) => !a.featured)
                  : otherArticles
                ).map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-happi-dark mb-3">
              Restez informé
            </h2>
            <p className="text-gray-600 mb-6">
              Recevez nos analyses mensuelles sur l'IA, les chatbots et le
              digital sur-mesure directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-happi-blue/20 focus:border-happi-blue"
              />
              <button className="px-6 py-3 bg-happi-blue text-white rounded-lg hover:bg-opacity-90 transition-all font-medium whitespace-nowrap">
                S'inscrire
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Pas de spam. Désinscription en un clic. Conforme RGPD.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
