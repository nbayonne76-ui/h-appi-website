import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import SubNav from '@/components/about/SubNav';
import ValuesSection from '@/components/about/ValuesSection';
import PromiseSection from '@/components/about/PromiseSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('valeurs.title'),
    description: t('valeurs.description'),
  };
}

export default async function ValeursPage() {
  const t = await getTranslations('pageValeurs');

  return (
    <>
      <Header />
      <SubNav />
      <main>
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-happi-dark mb-4">
              {t.rich('title', {
                highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
              })}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </section>

        <ValuesSection />
        <PromiseSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
