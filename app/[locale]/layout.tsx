import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { locales } from '@/i18n/config';
import { getTranslations } from 'next-intl/server';
import { FloatingCTA } from '@/components/ui/FloatingCTA';
import { ExitIntentPopup } from '@/components/ui/ExitIntentPopup';
import { ContactModal } from '@/components/ui/ContactModal';
import { Analytics } from '@vercel/analytics/next';
import SmoothScroll from '@/components/ui/SmoothScroll';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CustomCursor from '@/components/ui/CustomCursor';
import { JsonLd } from '@/components/ui/JsonLd';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const BASE = 'https://happi-bot.com';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });
  const fr = locale === 'fr';
  const canonicalUrl = fr ? BASE : `${BASE}/en`;

  return {
    metadataBase: new URL(BASE),
    title: {
      default: t('title'),
      template: `%s | H'appi`,
    },
    description: t('description'),
    keywords: [
      'chatbot IA', 'AI chatbot', 'chatbot sur-mesure', 'custom chatbot',
      'service client IA', 'supply chain AI', 'SaaS France', 'startup française',
      'French-Egyptian startup', "H'appi", 'chatbot entreprise',
    ],
    authors: [{ name: "H'appi Foundry" }],
    creator: "H'appi Foundry",
    publisher: "H'appi Foundry",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: BASE,
        en: `${BASE}/en`,
      },
    },
    openGraph: {
      type: 'website',
      locale: fr ? 'fr_FR' : 'en_US',
      alternateLocale: fr ? 'en_US' : 'fr_FR',
      url: canonicalUrl,
      siteName: "H'appi",
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: `/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "H'appi — AI chatbot sur-mesure",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      creator: '@happibot',
      images: [`/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'UN0GjoBzs_UKneSPFaH05COvjYA2WKN_3SoT6ur3xbw',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as any)) notFound();

  const messages = await getMessages();
  const fr = locale === 'fr';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "H'appi",
    url: BASE,
    logo: `${BASE}/icon.png`,
    description: fr
      ? "Startup French-Égyptienne spécialisée dans les chatbots IA sur-mesure pour entreprises."
      : "French-Egyptian startup specialising in custom AI chatbots for businesses.",
    foundingLocation: { '@type': 'Place', name: 'France' },
    telephone: '+20 10 61613358',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+20 10 61613358',
      availableLanguage: ['French', 'English'],
    },
    // Service-area business — matches the Google Business Profile listing
    // (no public storefront address, service area only).
    areaServed: [
      'Luxembourg', 'Nice, France', 'Lille, France', 'Madrid, Spain',
      'Paris, France', 'Barcelona, Spain', 'Bordeaux, France', 'Toulouse, France',
      'Marseille, France', 'London, UK', 'Biarritz, France', 'Amsterdam, Netherlands',
      'Rome, Italy',
    ],
    sameAs: ['https://www.linkedin.com/company/happi-foundry'],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "H'appi",
    url: BASE,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={inter.className}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll />
          <ScrollProgress />
          <CustomCursor />
          {children}
          <FloatingCTA />
          <ExitIntentPopup />
          <ContactModal />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
