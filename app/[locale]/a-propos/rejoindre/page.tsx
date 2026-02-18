import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import SubNav from '@/components/about/SubNav';
import JoinSection from '@/components/about/JoinSection';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('rejoindre.title'),
    description: t('rejoindre.description'),
  };
}

export default async function RejoindrePage() {
  const t = await getTranslations('pageRejoindre');

  return (
    <>
      <Header />
      <SubNav />
      <main>
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.rich('title', {
                highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
              })}
            </h1>
            <p className="text-lg text-happi-muted max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </section>

        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
