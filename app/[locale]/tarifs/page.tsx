import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import { JsonLd } from '@/components/ui/JsonLd';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('pricing.title'),
    description: t('pricing.description'),
  };
}

export default async function TarifsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pricing' });

  const priceToOffer = (price: string) => {
    const match = price.match(/\d+/g);
    if (!match) return undefined;
    return match.length > 1
      ? { '@type': 'PriceSpecification', minPrice: Number(match[0]), maxPrice: Number(match[1]), priceCurrency: 'EUR' }
      : { '@type': 'PriceSpecification', price: 0, priceCurrency: 'EUR' };
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: "H'appi — Custom AI Chatbot",
    description: t('heroSubtitle'),
    brand: { '@type': 'Brand', name: "H'appi" },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: 0,
      highPrice: 2000,
      offerCount: 3,
      offers: [
        {
          '@type': 'Offer',
          name: t('planStartup.title'),
          description: t('planStartup.description'),
          priceSpecification: priceToOffer(t('planStartup.price')),
        },
        {
          '@type': 'Offer',
          name: t('planMedium.title'),
          description: t('planMedium.description'),
          priceSpecification: priceToOffer(t('planMedium.price')),
        },
        {
          '@type': 'Offer',
          name: t('planEnterprise.title'),
          description: t('planEnterprise.description'),
          priceSpecification: priceToOffer(t('planEnterprise.price')),
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <Header />
      <main className="pt-16 bg-happi-darker">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
