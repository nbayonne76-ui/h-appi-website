import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Features from '@/components/Features';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { FadeInUp, Stagger, StaggerItem } from '@/components/ui/Animate';

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
        {/* Section 1 — 10 capacités IA */}
        <Features />

        {/* Section 2 — Stack IA H'appi */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-7xl mx-auto">
            <FadeInUp className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">{t('stackTitle')}</h2>
              <p className="text-happi-muted max-w-2xl mx-auto">{t('stackSubtitle')}</p>
            </FadeInUp>

            <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[0, 1, 2, 3].map((i) => (
                <StaggerItem key={i}>
                  <div className="glass-card rounded-2xl p-6 border border-happi-border h-full flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-happi-blue/10 text-happi-blue text-xs font-semibold rounded-full border border-happi-blue/20">
                        {t(`stack.${i}.role`)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{t(`stack.${i}.name`)}</h3>
                    <p className="text-happi-muted text-sm leading-relaxed flex-1">{t(`stack.${i}.description`)}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Section 3 — Comparatif */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-5xl mx-auto">
            <FadeInUp className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">{t('compareTitle')}</h2>
              <p className="text-happi-muted max-w-2xl mx-auto">{t('compareSubtitle')}</p>
            </FadeInUp>

            <div className="overflow-x-auto rounded-2xl border border-happi-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-happi-darker">
                    <th className="text-left px-6 py-4 text-happi-muted font-medium">{t('compareHeaders.0')}</th>
                    <th className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-2 text-happi-green font-semibold">
                        <span className="w-2 h-2 bg-happi-green rounded-full" />
                        {t('compareHeaders.1')}
                      </span>
                    </th>
                    <th className="px-6 py-4 text-center text-happi-muted font-medium">{t('compareHeaders.2')}</th>
                  </tr>
                </thead>
                <tbody>
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <tr key={i} className="border-t border-happi-border hover:bg-happi-surface/30 transition-colors">
                      <td className="px-6 py-4 text-happi-muted">{t(`compareRows.${i}.0`)}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-block bg-happi-green/10 text-happi-green text-xs font-medium px-3 py-1 rounded-full border border-happi-green/20">
                          {t(`compareRows.${i}.1`)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-happi-muted text-xs">{t(`compareRows.${i}.2`)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4 — Pourquoi H'appi (3 détails) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-7xl mx-auto">
            <FadeInUp className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">{t('whyTitle')}</h2>
            </FadeInUp>

            <div className="space-y-16">
              {/* Detail 1 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t('details.0.title')}</h3>
                  <p className="text-happi-muted leading-relaxed mb-4">{t('details.0.description')}</p>
                  <ul className="space-y-3">
                    {[0, 1, 2].map((i) => (
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
                  <h3 className="text-2xl font-bold text-white mb-4">{t('details.1.title')}</h3>
                  <p className="text-happi-muted leading-relaxed mb-4">{t('details.1.description1')}</p>
                  <p className="text-happi-muted leading-relaxed">{t('details.1.description2')}</p>
                </div>
              </div>

              {/* Detail 3 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t('details.2.title')}</h3>
                  <p className="text-happi-muted leading-relaxed mb-4">{t('details.2.description1')}</p>
                  <p className="text-happi-muted leading-relaxed">{t('details.2.description2')}</p>
                </div>
                <div className="bg-gradient-to-br from-happi-blue to-happi-green rounded-2xl p-8 text-white">
                  <div className="space-y-6">
                    {[0, 1, 2].map((i) => (
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
