import Header from '@/components/Header';
import Features from '@/components/Features';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Fonctionnalités - H'appi | Chatbots IA pour CX et Supply Chain",
  description: "Découvrez toutes les fonctionnalités de H'appi : IA sectorielle, déploiement rapide, analytics, omnicanal, RGPD et évolution continue.",
};

export default function FonctionnalitesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-happi-blue/10 text-happi-blue rounded-full text-sm font-medium mb-4">
              Fonctionnalités
            </span>
            <h1 className="text-5xl font-bold text-happi-dark mb-6">
              Une plateforme complète pour{' '}
              <span className="gradient-text">transformer</span> votre service
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              H'appi combine IA générative, personnalisation sectorielle et
              conformité RGPD pour offrir une solution de chatbot adaptée aux
              entreprises françaises.
            </p>
          </div>
        </section>

        <Features />

        {/* Détails approfondis des fonctionnalités */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-happi-dark mb-12 text-center">
              Pourquoi choisir H'appi ?
            </h2>

            <div className="space-y-16">
              {/* Feature Detail 1 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-happi-dark mb-4">
                    Personnalisation sectorielle unique
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Contrairement aux plateformes génériques, H'appi crée des
                    chatbots avec une connaissance métier intégrée dès la
                    conception. La terminologie CX, les processus Supply Chain,
                    les workflows spécifiques à votre secteur sont compris
                    nativement.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-happi-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Templates sectoriels prêts à l'emploi (e-commerce, services B2B, logistique)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-happi-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Apprentissage continu de votre vocabulaire métier</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-happi-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Adaptation aux processus internes de chaque client</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-happi-gray rounded-2xl p-8 border border-gray-100">
                  <div className="text-center">
                    <div className="text-6xl font-bold gradient-text mb-2">85%</div>
                    <p className="text-gray-600">des interactions de service client automatisées en France en 2025</p>
                  </div>
                </div>
              </div>

              {/* Feature Detail 2 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 bg-happi-gray rounded-2xl p-8 border border-gray-100">
                  <h4 className="font-semibold text-happi-dark mb-4">Intégrations disponibles</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['Salesforce', 'HubSpot', 'SAP', 'Oracle', 'Shopify', 'WooCommerce', 'WhatsApp', 'Messenger', 'Microsoft Teams', 'Slack', 'ServiceNow', 'API ouverte'].map((tool) => (
                      <div key={tool} className="bg-white rounded-lg px-4 py-3 text-sm text-happi-dark border border-gray-200 text-center">
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-happi-dark mb-4">
                    Intégration avec votre écosystème
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    H'appi s'intègre nativement avec les principaux CRM, ERP,
                    outils de messaging et plateformes e-commerce. La vision 360°
                    du client devient enfin une réalité grâce à des connecteurs
                    pré-configurés.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Les entreprises déploient en moyenne 4 outils de mesure de
                    performance CX. H'appi centralise ces données pour offrir
                    des KPIs clairs : taux de résolution, satisfaction client,
                    temps de réponse moyen.
                  </p>
                </div>
              </div>

              {/* Feature Detail 3 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-happi-dark mb-4">
                    L'approche hybride humain-IA
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    51% des entreprises cherchent à concilier contact humain et
                    technologie. H'appi est conçu pour augmenter vos équipes,
                    pas les remplacer. Le chatbot gère les demandes répétitives
                    (jusqu'à 80% du volume) et transfère les cas complexes à
                    vos conseillers avec tout le contexte nécessaire.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Résultat : vos agents sont plus efficaces, vos clients
                    sont mieux servis, et vos coûts de support diminuent.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-happi-blue to-happi-green rounded-2xl p-8 text-white">
                  <div className="space-y-6">
                    <div>
                      <div className="text-4xl font-bold mb-1">51%</div>
                      <p className="text-white/80">veulent concilier humain et technologie</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-1">36%</div>
                      <p className="text-white/80">privilégient l'humain</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-1">9%</div>
                      <p className="text-white/80">misent tout sur la technologie</p>
                    </div>
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
