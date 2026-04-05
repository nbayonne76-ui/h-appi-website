'use client';

import { ExternalLink, Clock } from 'lucide-react';
import type { NewsItem } from '@/app/api/news/route';

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins  = Math.floor(diff / 60_000);
  const hours = Math.floor(diff / 3_600_000);
  const days  = Math.floor(diff / 86_400_000);
  if (mins < 60)  return `${mins}m`;
  if (hours < 24) return `${hours}h`;
  if (days < 7)   return `${days}d`;
  return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-happi-surface rounded-xl border border-happi-border hover:border-opacity-60 transition-all duration-200 overflow-hidden hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5 p-5"
      style={{ borderLeftColor: item.color, borderLeftWidth: '3px' }}
    >
      {/* Source badge + time */}
      <div className="flex items-center justify-between mb-3">
        <span
          className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${item.bgClass} ${item.textClass}`}
        >
          {item.source}
        </span>
        <div className="flex items-center gap-1 text-happi-muted/60 text-xs">
          <Clock size={10} />
          <span>{timeAgo(item.pubDate)}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-sm font-bold text-white mb-2 leading-snug tracking-tight group-hover:text-happi-blue transition-colors duration-200 line-clamp-2 flex-1">
        {item.title}
      </h3>

      {/* Excerpt */}
      <p className="text-happi-muted text-xs leading-relaxed mb-3 line-clamp-2">
        {item.excerpt && item.excerpt.length > 20
          ? item.excerpt
          : 'Click to read the full article →'}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-end mt-auto pt-1">
        <span
          className="flex items-center gap-1 text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: item.color }}
        >
          Read more
          <ExternalLink size={10} />
        </span>
      </div>
    </a>
  );
}
