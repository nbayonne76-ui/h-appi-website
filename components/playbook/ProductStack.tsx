import { getTranslations } from 'next-intl/server';
import { Users, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Stagger, StaggerItem } from '@/components/ui/Animate';

const integrations = ['Salesforce', 'HubSpot', 'SAP', 'Oracle', 'Shopify', 'WooCommerce', 'WhatsApp', 'Messenger', 'Microsoft Teams', 'Slack', 'ServiceNow', 'API'];

const phases3 = [
  {
    num: '01',
    color: '#3B82F6',
    icon: Users,
    title: { fr: 'Identification', en: 'Identification' },
    desc: {
      fr: 'Qui est l\'utilisateur ? Quel est son besoin précis ? Quel canal utilise-t-il ?',
      en: 'Who is the user? What\'s their precise need? Which channel are they using?',
    },
  },
  {
    num: '02',
    color: '#10B981',
    icon: MessageSquare,
    title: { fr: 'Qualification', en: 'Qualification' },
    desc: {
      fr: 'Quel produit ou service correspond ? Quel est le niveau de priorité (P0-P3) ?',
      en: 'Which product or service fits? What\'s the priority level (P0-P3)?',
    },
  },
  {
    num: '03',
    color: '#A78BFA',
    icon: CheckCircle2,
    title: { fr: 'Conversion', en: 'Conversion' },
    desc: {
      fr: 'Proposition sur-mesure, collecte du lead ou action directe (ticket, RDV, achat).',
      en: 'Tailored offer, lead capture or direct action (ticket, booking, purchase).',
    },
  },
] as const;

export default async function ProductStack({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'pageFonctionnalites' });
  const lang = locale === 'en' ? 'en' : 'fr';

  return (
    <>
      {/* Qualification en 3 phases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
              {lang === 'fr' ? 'Notre différenciateur' : 'Our differentiator'}
            </p>
            <h3 className="text-2xl font-bold text-white">
              {lang === 'fr' ? (
                <>Qualification leads en <span className="gradient-text">3 phases</span></>
              ) : (
                <>Lead qualification in <span className="gradient-text">3 phases</span></>
              )}
            </h3>
            <p className="text-happi-muted text-sm mt-2 max-w-xl mx-auto">
              {lang === 'fr'
                ? 'Toutes nos solutions intègrent ce système éprouvé qui maximise le taux de conversion — de 34% supérieur aux chatbots génériques.'
                : 'Every one of our solutions runs on this proven system, which lifts conversion rates by 34% over generic chatbots.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {phases3.map((phase) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.num}
                  className="rounded-2xl p-6 border text-center"
                  style={{ background: `${phase.color}08`, borderColor: `${phase.color}25` }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${phase.color}15` }}
                  >
                    <Icon size={22} style={{ color: phase.color }} />
                  </div>
                  <div className="text-3xl font-extrabold mb-1" style={{ color: phase.color }}>
                    {phase.num}
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2">{phase.title[lang]}</h4>
                  <p className="text-happi-muted text-xs leading-relaxed">{phase.desc[lang]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stack IA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">{t('stackTitle')}</h3>
            <p className="text-happi-muted max-w-2xl mx-auto text-sm">{t('stackSubtitle')}</p>
          </div>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <StaggerItem key={i}>
                <div className="glass-card rounded-2xl p-6 border border-happi-border h-full flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-happi-blue/10 text-happi-blue text-xs font-semibold rounded-full border border-happi-blue/20">
                      {t(`stack.${i}.role`)}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{t(`stack.${i}.name`)}</h4>
                  <p className="text-happi-muted text-sm leading-relaxed flex-1">{t(`stack.${i}.description`)}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Comparatif */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">{t('compareTitle')}</h3>
            <p className="text-happi-muted max-w-2xl mx-auto text-sm">{t('compareSubtitle')}</p>
          </div>

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

      {/* Pourquoi H'appi — 3 détails */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-2xl font-bold text-white">{t('whyTitle')}</h3>
          </div>

          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">{t('details.0.title')}</h4>
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

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-happi-darker rounded-2xl p-8 border border-happi-border">
                <h5 className="font-semibold text-white mb-4">{t('details.1.integrationsTitle')}</h5>
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
                <h4 className="text-xl font-bold text-white mb-4">{t('details.1.title')}</h4>
                <p className="text-happi-muted leading-relaxed mb-4">{t('details.1.description1')}</p>
                <p className="text-happi-muted leading-relaxed">{t('details.1.description2')}</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">{t('details.2.title')}</h4>
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
    </>
  );
}
