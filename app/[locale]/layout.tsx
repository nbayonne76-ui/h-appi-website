import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { locales } from '@/i18n/config';
import { getTranslations } from 'next-intl/server';
import { FloatingCTA } from '@/components/ui/FloatingCTA';
import { ContactModal } from '@/components/ui/ContactModal';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });
  return {
    title: t('title'),
    description: t('description'),
    keywords: ['chatbot', 'AI', 'customer experience', 'supply chain', 'SaaS', 'France'],
    authors: [{ name: "H'appi" }],
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

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <FloatingCTA />
          <ContactModal />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
