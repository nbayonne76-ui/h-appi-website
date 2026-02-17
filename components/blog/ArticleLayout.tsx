'use client';

import { Link } from '@/i18n/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/blog/ArticleCard';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { Article } from '@/lib/blog-data';

type Source = {
  name: string;
  url: string;
  detail: string;
};

export default function ArticleLayout({
  article,
  sources,
  toc,
  relatedArticles,
  children,
}: {
  article: Article;
  sources: Source[];
  toc: { id: string; label: string }[];
  relatedArticles: Article[];
  children: React.ReactNode;
}) {
  const t = useTranslations('blogArticle');

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-happi-gray border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center space-x-2 text-sm">
              <Link
                href="/blog"
                className="text-happi-blue hover:underline flex items-center"
              >
                <ArrowLeft size={14} className="mr-1" />
                Blog
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500 truncate">{article.title}</span>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${article.categoryColor}`}
            >
              {article.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-happi-dark leading-tight mb-6">
              {article.title}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{article.readTime} {t('readTime')}</span>
              </div>
              <button
                className="flex items-center space-x-2 text-happi-blue hover:underline ml-auto"
                aria-label={t('share')}
              >
                <Share2 size={16} />
                <span>{t('share')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content + Sidebar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <article className="prose prose-lg max-w-none prose-headings:text-happi-dark prose-headings:font-bold prose-a:text-happi-blue prose-a:no-underline hover:prose-a:underline prose-strong:text-happi-dark">
              {children}
            </article>

            {/* Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              {/* Table of Contents */}
              <div className="bg-happi-gray rounded-2xl p-6">
                <h3 className="font-bold text-happi-dark mb-4 text-sm uppercase tracking-wider">
                  {t('toc')}
                </h3>
                <nav className="space-y-2">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-happi-blue transition-colors py-1 border-l-2 border-transparent hover:border-happi-blue pl-3"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Sources */}
              <div className="bg-happi-gray rounded-2xl p-6">
                <h3 className="font-bold text-happi-dark mb-4 text-sm uppercase tracking-wider">
                  {t('sources')} ({sources.length})
                </h3>
                <div className="space-y-3">
                  {sources.map((source, i) => (
                    <a
                      key={i}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs group"
                    >
                      <span className="text-happi-blue group-hover:underline font-medium">
                        {source.name}
                      </span>
                      <span className="text-gray-400 block mt-0.5">
                        {source.detail}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-happi-blue to-happi-green rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2">{t('sidebarCta.title')}</h3>
                <p className="text-sm text-white/80 mb-4">
                  {t('sidebarCta.description')}
                </p>
                <Link
                  href="/#demo"
                  className="block w-full text-center bg-white text-happi-blue py-2.5 rounded-lg font-medium text-sm hover:bg-opacity-90 transition-all"
                >
                  {t('sidebarCta.cta')}
                </Link>
              </div>
            </aside>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="bg-happi-gray border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-2xl font-bold text-happi-dark mb-8">
                {t('relatedArticles')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedArticles.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
