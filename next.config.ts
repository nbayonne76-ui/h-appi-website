import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async redirects() {
    return [
      { source: '/dropos',            destination: '/fr/dropos',            permanent: false },
      { source: '/atelier',          destination: '/fr/atelier',          permanent: false },
    ];
  },
};

export default withNextIntl(nextConfig);
