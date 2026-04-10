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

// ── Spam / low-quality title blocklist ────────────────────────────────────────

const SPAM_PATTERNS = [
  /buy.*(account|follower|subscriber|review|traffic|backlink)/i,
  /sell.*(account|follower|crypto|nft)/i,
  /(verified|cheap).*(account|service|provider)/i,
  /\b(casino|poker|betting|gambling|slot|forex|crypto trading)\b/i,
  /\b(seo|link.?building|guest.?post|sponsored).*(service|offer|cheap)/i,
  /snapchat|tiktok accounts|instagram accounts/i,
  /\b(weight loss|diet pill|keto|supplement)\b/i,
  /\b(essay|homework|assignment).*(help|writing|service)\b/i,
];

function isSpam(title: string): boolean {
  return SPAM_PATTERNS.some((re) => re.test(title));
}

// ── Language filter (EN/FR only) ───────────────────────────────────────────────

// Matches Cyrillic, Arabic, CJK, Hebrew, Hindi, Thai, and other non-Latin scripts
const NON_LATIN_RE = /[\u0400-\u04FF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u30FF\uAC00-\uD7AF\u0590-\u05FF\u0900-\u097F\u0E00-\u0E7F]/;

// Turkish-specific characters (unique to Turkish, absent from EN/FR)
// ı (U+0131), İ (U+0130), ğ (U+011F), Ğ (U+011E)
const TURKISH_RE = /[\u0130\u0131\u011E\u011F]/;

// Polish/Czech/Slovak specific characters not used in EN/FR
// ą ę ś ź ż ć ń ł ő ű
const POLISH_CZECH_RE = /[\u0105\u0119\u015B\u017A\u017C\u0107\u0144\u0142\u0150\u0151\u0170\u0171]/;

function isEnglishOrFrench(text: string): boolean {
  if (NON_LATIN_RE.test(text)) return false;
  if (TURKISH_RE.test(text)) return false;
  if (POLISH_CZECH_RE.test(text)) return false;
  return true;
}

// ── HTML & entity cleaning ─────────────────────────────────────────────────────

function decodeEntities(str: string): string {
  // Run twice: first pass unescapes &amp; → & so that &amp;#x2019; becomes &#x2019;
  // second pass decodes the resulting numeric/hex entities
  function once(s: string): string {
    return s
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&apos;|&#39;/g, "'")
      .replace(/&nbsp;/g, ' ')
      .replace(/&hellip;/g, '…')
      .replace(/&mdash;/g, '—')
      .replace(/&ndash;/g, '–')
      // hex entities like &#x2019; &#x201C;
      .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
      // decimal entities like &#8217;
      .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)));
  }
  return once(once(str)).replace(/\s+/g, ' ').trim();
}

function cleanText(text: string): string {
  return text
    // Multiple dashes or underscores used as horizontal rules / separators
    .replace(/[-_]{2,}/g, ' ')
    // Em dash / en dash (with or without surrounding spaces) → comma
    .replace(/\s*[—–]\s*/g, ', ')
    // Single hyphen used as separator: "word - word" → "word, word"
    // (only when surrounded by spaces — preserves hyphenated-words)
    .replace(/ - /g, ', ')
    // Pipe separator: "word | word" → "word, word"
    .replace(/\s*\|\s*/g, ', ')
    // Middle-dot / bullet separator: "word · word" → "word, word"
    .replace(/\s*·\s*/g, ', ')
    // Multiple commas in a row
    .replace(/,\s*,+/g, ',')
    // Normalize 2+ dots to ellipsis
    .replace(/\.{2,}/g, '…')
    // Strip leading punctuation artifacts
    .replace(/^[\s\-,|·:]+/, '')
    // Strip trailing punctuation artifacts (but keep …)
    .replace(/[\-,|·:\s]+$/, '')
    // Collapse whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanExcerpt(raw: string): string {
  // Decode entities FIRST so that encoded tags like &lt;p&gt; become <p>
  // before the HTML-stripping regexes run — otherwise they survive and render as text.
  const decoded = decodeEntities(raw);
  const stripped = decoded
    // Remove noisy block elements and their full content
    .replace(/<(script|style|figure|img|iframe|table|code|pre)[^>]*>[\s\S]*?<\/\1>/gi, '')
    // Strip all remaining HTML tags
    .replace(/<[^>]+>/g, ' ')
    // Remove leftover markdown headers
    .replace(/#+\s/g, '')
    // Remove bare URLs
    .replace(/https?:\/\/\S+/g, '');
  return cleanText(stripped);
}

function parseItems(xml: string, feed: FeedDef): NewsItem[] {
  const items: NewsItem[] = [];
  const itemRe = /<(?:item|entry)>([\s\S]*?)<\/(?:item|entry)>/g;
  let m: RegExpExecArray | null;

  while ((m = itemRe.exec(xml)) !== null) {
    const chunk = m[1];
    const title = cleanText(decodeEntities(extractTag(chunk, 'title')));
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

    // Drop non-English/French articles
    if (!isEnglishOrFrench(title)) continue;

    // Drop spam regardless of feed type
    if (isSpam(title)) continue;

    // Relevance filter for non-tagged feeds
    if (!feed.tagged) {
      const text = `${title} ${rawDesc}`.toLowerCase();
      const relevant = KEYWORDS.some((kw) => text.includes(kw));
      if (!relevant) continue;
    }

    // Clean excerpt — also apply relevance check on tagged feeds using cleaned text
    const excerpt = cleanExcerpt(rawDesc);

    // For tagged feeds, still drop if cleaned excerpt looks empty or spammy
    if (feed.tagged && isSpam(title)) continue;

    const excerptTrimmed = excerpt.length > 180
      ? excerpt.slice(0, 180).replace(/\s\S*$/, '').replace(/[\-,|·:\s]+$/, '') + '…'
      : excerpt;

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
