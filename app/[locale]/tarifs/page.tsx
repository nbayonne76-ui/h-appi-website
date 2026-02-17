import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('pricing.title'),
    description: t('pricing.description'),
  };
}

export default function TarifsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
