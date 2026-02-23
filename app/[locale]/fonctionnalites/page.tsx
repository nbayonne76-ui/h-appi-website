import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Features from '@/components/Features';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('features.title'),
    description: t('features.description'),
  };
}

const integrations = ['Salesforce', 'HubSpot', 'SAP', 'Oracle', 'Shopify', 'WooCommerce', 'WhatsApp', 'Messenger', 'Microsoft Teams', 'Slack', 'ServiceNow', 'API'];

export default async function FonctionnalitesPage() {
  const t = await getTranslations('pageFonctionnalites');

  return (
    <>
      <Header />
      <main>
        <Features />

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              {t('whyTitle')}
            </h2>

            <div className="space-y-16">
              {/* Detail 1 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t('details.0.title')}
                  </h3>
                  <p className="text-happi-muted leading-relaxed mb-4">
                    {t('details.0.description')}
                  </p>
                  <ul className="space-y-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-happi-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-happi-muted">{t(`details.0.items.${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-happi-darker rounded-2xl p-8 border border-happi-border">
                  <div className="text-center">
                    <div className="text-6xl font-bold gradient-text mb-2">{t('details.0.statValue')}</div>
                    <p className="text-happi-muted">{t('details.0.statLabel')}</p>
                  </div>
                </div>
              </div>

              {/* Detail 2 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 bg-happi-darker rounded-2xl p-8 border border-happi-border">
                  <h4 className="font-semibold text-white mb-4">{t('details.1.integrationsTitle')}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {integrations.map((tool) => (
                      <div key={tool} className="bg-happi-surface rounded-lg px-4 py-3 text-sm text-white border border-happi-border text-center">
                        {tool}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-happi-muted mt-4 leading-relaxed">
                    * {t('details.1.note')}
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t('details.1.title')}
                  </h3>
                  <p className="text-happi-muted leading-relaxed mb-4">
                    {t('details.1.description1')}
                  </p>
                  <p className="text-happi-muted leading-relaxed">
                    {t('details.1.description2')}
                  </p>
                </div>
              </div>

              {/* Detail 3 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t('details.2.title')}
                  </h3>
                  <p className="text-happi-muted leading-relaxed mb-4">
                    {t('details.2.description1')}
                  </p>
                  <p className="text-happi-muted leading-relaxed">
                    {t('details.2.description2')}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-happi-blue to-happi-green rounded-2xl p-8 text-white">
                  <div className="space-y-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i}>
                        <div className="text-4xl font-bold mb-1">{t(`details.2.stats.${i}.value`)}</div>
                        <p className="text-white/80">{t(`details.2.stats.${i}.label`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
