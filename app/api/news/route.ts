import { NextResponse } from 'next/server';

export const revalidate = 3600; // rebuild every hour

// ── Types ──────────────────────────────────────────────────────────────────────

export type NewsItem = {
  id: string;
  title: string;
  url: string;
  excerpt: string;
  pubDate: string; // ISO string
  source: string;
  color: string;      // hex
  textClass: string;  // Tailwind text-* class
  bgClass: string;    // Tailwind bg-* class
};

type FeedDef = {
  name: string;
  url: string;
  color: string;
  textClass: string;
  bgClass: string;
  tagged?: boolean; // already topic-filtered by URL
};

// ── Feed definitions ───────────────────────────────────────────────────────────

const FEEDS: FeedDef[] = [
  {
    name: 'Hacker News',
    url: 'https://news.ycombinator.com/rss',
    color: '#FF6600', textClass: 'text-orange-400', bgClass: 'bg-orange-500/10',
  },
  {
    name: 'Dev.to',
    url: 'https://dev.to/feed/tag/ai',
    color: '#7C3AED', textClass: 'text-purple-400', bgClass: 'bg-purple-500/10',
    tagged: true,
  },
  {
    name: 'Dev.to',
    url: 'https://dev.to/feed/tag/chatbot',
    color: '#7C3AED', textClass: 'text-purple-400', bgClass: 'bg-purple-500/10',
    tagged: true,
  },
  {
    name: 'Dev.to',
    url: 'https://dev.to/feed/tag/webdev',
    color: '#7C3AED', textClass: 'text-purple-400', bgClass: 'bg-purple-500/10',
    tagged: true,
  },
  {
    name: 'InfoQ',
    url: 'https://www.infoq.com/feed/',
    color: '#2563EB', textClass: 'text-blue-400', bgClass: 'bg-blue-500/10',
  },
  {
    name: 'The New Stack',
    url: 'https://thenewstack.io/feed/',
    color: '#0EA5E9', textClass: 'text-sky-400', bgClass: 'bg-sky-500/10',
  },
  {
    name: 'CSS-Tricks',
    url: 'https://css-tricks.com/feed/',
    color: '#EC4899', textClass: 'text-pink-400', bgClass: 'bg-pink-500/10',
    tagged: true,
  },
  {
    name: 'Smashing Mag',
    url: 'https://www.smashingmagazine.com/feed/',
    color: '#EF4444', textClass: 'text-red-400', bgClass: 'bg-red-500/10',
    tagged: true,
  },
  {
    name: 'Medium',
    url: 'https://medium.com/feed/tag/chatbot',
    color: '#10B981', textClass: 'text-emerald-400', bgClass: 'bg-emerald-500/10',
    tagged: true,
  },
  {
    name: 'Medium',
    url: 'https://medium.com/feed/tag/artificial-intelligence',
    color: '#10B981', textClass: 'text-emerald-400', bgClass: 'bg-emerald-500/10',
    tagged: true,
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/r/MachineLearning.rss',
    color: '#FF4500', textClass: 'text-orange-500', bgClass: 'bg-orange-600/10',
    tagged: true,
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/r/webdev.rss',
    color: '#FF4500', textClass: 'text-orange-500', bgClass: 'bg-orange-600/10',
    tagged: true,
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/r/programming.rss',
    color: '#FF4500', textClass: 'text-orange-500', bgClass: 'bg-orange-600/10',
    tagged: true,
  },
  {
    name: 'TechCrunch',
    url: 'https://techcrunch.com/feed/',
    color: '#22D3EE', textClass: 'text-cyan-400', bgClass: 'bg-cyan-500/10',
  },
  {
    name: 'Product Hunt',
    url: 'https://www.producthunt.com/feed',
    color: '#DA552F', textClass: 'text-red-400', bgClass: 'bg-red-600/10',
    tagged: true,
  },
];

// ── Relevance keywords (used for non-tagged feeds) ─────────────────────────────

const KEYWORDS = [
  'chatbot', ' bot ', 'bots', ' ai ', ' ia ', 'artificial intelligence',
  'machine learning', 'llm', 'gpt', 'claude', 'openai', 'anthropic', 'gemini',
  'nlp', 'automation', 'generative', 'transformer', 'agent ', 'agents',
  'react', 'next.js', 'nextjs', 'typescript', 'node.js', 'javascript',
  'saas', 'startup', ' api ', 'customer experience', 'cx ', 'workflow',
  'webhook', 'python', 'fastapi', 'no-code', 'low-code', 'conversational',
  'whatsapp', 'messaging', 'rag', 'vector', 'embedding', 'fine-tun',
];

// ── XML helpers ────────────────────────────────────────────────────────────────

function extractTag(xml: string, tag: string): string {
  // CDATA content
  const cdataRe = new RegExp(
    `<${tag}[^>]*>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*<\\/${tag}>`, 'i'
  );
  const cdataM = xml.match(cdataRe);
  if (cdataM) return cdataM[1].trim();

  // Regular text content (strip inner tags)
  const normalRe = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const normalM = xml.match(normalRe);
  if (normalM) return normalM[1].replace(/<[^>]+>/g, '').trim();

  // Atom self-closing: <link href="..."/>
  const hrefRe = new RegExp(`<${tag}[^>]+href="([^"]+)"`, 'i');
  const hrefM = xml.match(hrefRe);
  if (hrefM) return hrefM[1].trim();

  return '';
}

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n)))
    .replace(/\s+/g, ' ')
    .trim();
}

function parseItems(xml: string, feed: FeedDef): NewsItem[] {
  const items: NewsItem[] = [];
  // Handle both RSS <item> and Atom <entry>
  const itemRe = /<(?:item|entry)>([\s\S]*?)<\/(?:item|entry)>/g;
  let m: RegExpExecArray | null;

  while ((m = itemRe.exec(xml)) !== null) {
    const chunk = m[1];
    const title = decodeEntities(extractTag(chunk, 'title'));
    let url = extractTag(chunk, 'link');
    if (!url) url = extractTag(chunk, 'guid');
    if (!url) url = extractTag(chunk, 'id');
    const rawDesc =
      extractTag(chunk, 'description') ||
      extractTag(chunk, 'summary') ||
      extractTag(chunk, 'content:encoded');
    const pubDate =
      extractTag(chunk, 'pubDate') ||
      extractTag(chunk, 'published') ||
      extractTag(chunk, 'updated') ||
      extractTag(chunk, 'dc:date');

    if (!title || !url) continue;

    // Relevance filter for non-tagged feeds
    if (!feed.tagged) {
      const text = `${title} ${rawDesc}`.toLowerCase();
      const relevant = KEYWORDS.some((kw) => text.includes(kw));
      if (!relevant) continue;
    }

    const excerpt = decodeEntities(rawDesc.replace(/<[^>]+>/g, ''))
      .slice(0, 180);
    const excerptTrimmed = excerpt.length === 180 ? excerpt + '…' : excerpt;

    let isoDate: string;
    try {
      isoDate = pubDate ? new Date(pubDate).toISOString() : new Date().toISOString();
    } catch {
      isoDate = new Date().toISOString();
    }

    items.push({
      id: url,
      title,
      url,
      excerpt: excerptTrimmed,
      pubDate: isoDate,
      source: feed.name,
      color: feed.color,
      textClass: feed.textClass,
      bgClass: feed.bgClass,
    });
  }

  return items;
}

// ── Route handler ──────────────────────────────────────────────────────────────

export async function GET() {
  const results = await Promise.allSettled(
    FEEDS.map(async (feed) => {
      const res = await fetch(feed.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; HappiBot/1.0; +https://happi-bot.com)',
          Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml',
        },
        next: { revalidate: 3600 },
      });
      if (!res.ok) throw new Error(`${feed.name} ${res.status}`);
      const xml = await res.text();
      return parseItems(xml, feed);
    })
  );

  const allItems: NewsItem[] = [];
  const seen = new Set<string>();

  for (const result of results) {
    if (result.status === 'fulfilled') {
      for (const item of result.value) {
        if (!seen.has(item.id)) {
          seen.add(item.id);
          allItems.push(item);
        }
      }
    }
  }

  // Sort newest first, cap at 80
  allItems.sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );

  return NextResponse.json(allItems.slice(0, 80), {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
    },
  });
}
