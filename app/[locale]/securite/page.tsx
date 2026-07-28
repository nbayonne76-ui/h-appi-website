import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'securitePage' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function SecuritePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'securitePage' });
  const fr = locale !== 'en';

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-happi-green/10 text-happi-green rounded-full text-sm font-medium mb-4 border border-happi-green/20">
              {t('badge')}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {t.rich('title', {
                highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
              })}
            </h1>
            <p className="text-xl text-happi-muted leading-relaxed max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </section>

        {/* Intro / Microsoft & Oracle credibility */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-4xl mx-auto">
            <div className="bg-happi-surface rounded-2xl p-8 border border-happi-border">
              <p className="text-lg text-happi-muted leading-relaxed mb-4">
                {t('introP1')}
              </p>
              <p className="text-lg text-white font-medium">
                {t('introP2')}
              </p>
            </div>
          </div>
        </section>

        {/* Essentiel en un coup d'oeil */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                fr ? '🇪🇺 100% hébergé en UE' : '🇪🇺 100% EU hosted',
                fr ? 'Conforme RGPD' : 'GDPR compliant',
                'ISO 27001',
                fr ? 'Chiffrement bout en bout' : 'End-to-end encryption',
              ].map((label) => (
                <div key={label} className="flex items-center gap-2 bg-happi-surface rounded-xl p-3 border border-happi-green/10">
                  <CheckCircle2 className="text-happi-green flex-shrink-0" size={15} />
                  <span className="text-xs text-happi-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection hidePricing />
      </main>
      <Footer />
    </>
  );
}
