import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  // Google explicitly advises against redirecting based on the visitor's
  // perceived language: it can stop Googlebot from crawling/indexing both
  // locale versions, and costs a real redirect round-trip on every visit
  // whose Accept-Language isn't French (~800ms, confirmed via Lighthouse).
  // '/' always serves French; users switch language explicitly via the UI.
  localeDetection: false,
});

export const config = {
  matcher: ['/((?!_next|_vercel|api|.*\\..*).*)'],
};
