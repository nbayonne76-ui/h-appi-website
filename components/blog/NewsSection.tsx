'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rss, RefreshCw, AlertCircle, Wifi } from 'lucide-react';
import NewsCard from '@/components/blog/NewsCard';
import type { NewsItem } from '@/app/api/news/route';

// ── Sources available as filter tabs ──────────────────────────────────────────

const SOURCES = [
  { key: 'All',          label: 'All',           labelFr: 'Tous' },
  { key: 'Hacker News',  label: 'Hacker News',   labelFr: 'Hacker News' },
  { key: 'Dev.to',       label: 'Dev.to',         labelFr: 'Dev.to' },
  { key: 'TechCrunch',   label: 'TechCrunch',     labelFr: 'TechCrunch' },
  { key: 'InfoQ',        label: 'InfoQ',           labelFr: 'InfoQ' },
  { key: 'The New Stack',label: 'The New Stack',   labelFr: 'The New Stack' },
  { key: 'Medium',       label: 'Medium',          labelFr: 'Medium' },
  { key: 'Reddit',       label: 'Reddit',          labelFr: 'Reddit' },
  { key: 'Smashing Mag', label: 'Smashing Mag',    labelFr: 'Smashing Mag' },
  { key: 'CSS-Tricks',   label: 'CSS-Tricks',      labelFr: 'CSS-Tricks' },
  { key: 'Product Hunt', label: 'Product Hunt',    labelFr: 'Product Hunt' },
];

const PAGE_SIZE = 12;

// ── Skeleton card ──────────────────────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="flex flex-col bg-happi-surface rounded-xl border border-happi-border p-5 space-y-3 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-4 w-20 rounded-full bg-white/5" />
        <div className="h-3 w-8 rounded bg-white/5" />
      </div>
      <div className="h-3.5 w-full rounded bg-white/5" />
      <div className="h-3.5 w-4/5 rounded bg-white/5" />
      <div className="h-3 w-full rounded bg-white/4" />
      <div className="h-3 w-3/4 rounded bg-white/4" />
    </div>
  );
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function NewsSection({ fr }: { fr: boolean }) {
  const [items, setItems]         = useState<NewsItem[]>([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(false);
  const [source, setSource]       = useState('All');
  const [page, setPage]           = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const fetchNews = useCallback(async (bust = false) => {
    try {
      const url = bust
        ? `/api/news?t=${Date.now()}`
        : '/api/news';
      const res = await fetch(url);
      if (!res.ok) throw new Error('fetch failed');
      const data: NewsItem[] = await res.json();
      setItems(data);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => { fetchNews(); }, [fetchNews]);

  async function handleRefresh() {
    setRefreshing(true);
    setPage(1);
    await fetchNews(true);
  }

  // Reset page when source filter changes
  function handleSourceChange(key: string) {
    setSource(key);
    setPage(1);
  }

  const filtered = source === 'All'
    ? items
    : items.filter(i => i.source === source);

  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;

  // Count per source for badges
  const counts: Record<string, number> = { All: items.length };
  SOURCES.slice(1).forEach(s => {
    counts[s.key] = items.filter(i => i.source === s.key).length;
  });

  return (
    <section className="mt-16 pt-12 border-t border-happi-border/50">

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-happi-blue/15 border border-happi-blue/20 flex items-center justify-center">
              <Rss size={12} className="text-happi-blue" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60">
              {fr ? 'Actualités tech & IA' : 'Tech & AI news'}
            </p>
          </div>
          <h2 className="text-xl font-extrabold text-white tracking-tight">
            {fr ? 'Ce qui se passe dans l\'écosystème' : 'What\'s happening in the ecosystem'}
          </h2>
          <p className="text-happi-muted text-sm mt-1">
            {fr
              ? 'Agrégateur live · 10 sources · mis à jour toutes les heures'
              : 'Live aggregator · 10 sources · updated every hour'}
          </p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={refreshing || loading}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-happi-border text-happi-muted hover:text-white hover:border-happi-blue/40 text-xs font-medium transition-all disabled:opacity-40"
        >
          <RefreshCw size={12} className={refreshing ? 'animate-spin' : ''} />
          {fr ? 'Rafraîchir' : 'Refresh'}
        </button>
      </div>

      {/* Source filter tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
        {SOURCES.map(s => {
          const count = counts[s.key] ?? 0;
          if (s.key !== 'All' && count === 0 && !loading) return null;
          const active = source === s.key;
          return (
            <motion.button
              key={s.key}
              onClick={() => handleSourceChange(s.key)}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                active
                  ? 'bg-happi-blue text-white'
                  : 'bg-happi-surface text-happi-muted hover:text-white border border-happi-border'
              }`}
            >
              {fr ? s.labelFr : s.label}
              {!loading && (
                <span className={`tabular-nums ${active ? 'opacity-70' : 'opacity-50'}`}>
                  {count}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Error state */}
      {error && !loading && (
        <div className="flex flex-col items-center gap-3 py-16 text-center">
          <AlertCircle size={28} className="text-happi-muted/40" />
          <p className="text-happi-muted text-sm">
            {fr ? 'Impossible de charger les flux. Vérifiez la connexion.' : "Couldn't load feeds. Check the connection."}
          </p>
          <button
            onClick={handleRefresh}
            className="text-happi-blue text-xs hover:underline flex items-center gap-1"
          >
            <Wifi size={11} />
            {fr ? 'Réessayer' : 'Try again'}
          </button>
        </div>
      )}

      {/* Grid */}
      {!error && (
        <>
          <AnimatePresence mode="wait">
            <motion.div
              key={source}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {loading
                ? Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)
                : visible.map(item => <NewsCard key={item.id} item={item} />)
              }
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {!loading && filtered.length === 0 && (
            <p className="text-center py-16 text-happi-muted text-sm">
              {fr ? 'Aucune actualité pour cette source.' : 'No news for this source.'}
            </p>
          )}

          {/* Load more */}
          {!loading && hasMore && (
            <div className="flex justify-center mt-8">
              <motion.button
                onClick={() => setPage(p => p + 1)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2.5 rounded-xl border border-happi-border text-happi-muted hover:text-white hover:border-happi-blue/40 text-sm font-medium transition-all"
              >
                {fr ? `Voir plus (${filtered.length - visible.length})` : `Load more (${filtered.length - visible.length})`}
              </motion.button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
