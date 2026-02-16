import Header from '@/components/Header';
import UseCases from '@/components/UseCases';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Cas d'usage - H'appi | CX et Supply Chain",
  description: "Découvrez les cas d'usage concrets de H'appi : support client automatisé, suivi de commandes, gestion d'inventaire, coordination logistique.",
};

export default function CasUsagePage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-happi-green/10 text-happi-green rounded-full text-sm font-medium mb-4">
              Cas d'usage
            </span>
            <h1 className="text-5xl font-bold text-happi-dark mb-6">
              Deux expertises, une seule{' '}
              <span className="gradient-text">plateforme</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              H'appi se spécialise dans l'Expérience Client et la Supply Chain,
              les deux domaines où les chatbots créent le plus de valeur pour
              votre entreprise.
            </p>
          </div>
        </section>

        <UseCases />

        {/* CX Detailed Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* CX Column */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-happi-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-happi-dark">
                    Expérience Client
                  </h2>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                  L'adoption de l'IA dans le service client est passée de 10% en
                  2020 à 85% en 2025 en France. Les entreprises qui n'automatisent
                  pas leur CX prennent du retard.
                </p>

                <div className="space-y-6">
                  <div className="bg-happi-gray rounded-xl p-6">
                    <h3 className="font-bold text-happi-dark mb-2">Réservation de rendez-vous</h3>
                    <p className="text-gray-600 text-sm">Le chatbot gère la prise de rendez-vous automatisée, vérifie les disponibilités et envoie des confirmations.</p>
                  </div>
                  <div className="bg-happi-gray rounded-xl p-6">
                    <h3 className="font-bold text-happi-dark mb-2">Gestion des réclamations niveau 1</h3>
                    <p className="text-gray-600 text-sm">Qualification automatique des réclamations, résolution des cas simples et escalade intelligente vers vos conseillers.</p>
                  </div>
                  <div className="bg-happi-gray rounded-xl p-6">
                    <h3 className="font-bold text-happi-dark mb-2">Recommandations produits</h3>
                    <p className="text-gray-600 text-sm">Grâce à l'intégration CRM, le chatbot propose des recommandations personnalisées basées sur l'historique d'achat.</p>
                  </div>
                  <div className="bg-happi-gray rounded-xl p-6">
                    <h3 className="font-bold text-happi-dark mb-2">Assistance après-vente</h3>
                    <p className="text-gray-600 text-sm">Support technique automatisé, guides de dépannage interactifs, gestion des retours et échanges.</p>
                  </div>
                  <div className="bg-happi-gray rounded-xl p-6">
                    <h3 className="font-bold text-happi-dark mb-2">Onboarding de nouveaux clients</h3>
                    <p className="text-gray-600 text-sm">Accompagnement personnalisé des nouveaux clients à travers vos services, adapté à leur profil et besoins.</p>
                  </div>
                </div>
              </div>

              {/* Supply Chain Column */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-happi-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-7.5-3.75h.008v.008h-.008V10.5zm4.5 0h.008v.008h-.008V10.5zm-4.5 4.5h.008v.008h-.008V15zm4.5 0h.008v.008h-.008V15z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-happi-dark">
                    Supply Chain
                  </h2>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                  L'IA générative en logistique offre 13 cas d'usage identifiés en
                  France, de la prédiction de la demande à l'optimisation des routes.
                  H'appi intègre ces capacités dans ses chatbots.
                </p>

                <div className="space-y-6">
                  <div className="bg-happi-gray rounded-xl p-6">
                    <h3 className="font-bold text-happi-dark mb-2">Tracking multi-transporteurs</h3>
                    <p className="text-gray-600 text-sm">Suivi unifié des commandes quel que soit le transporteur. Vos clients ont une vue claire et instantanée.</p>
                  </div>
                  <div className="bg-happi-gray rounded-xl p-6">
                    <h3 className="font-bold text-happi-dark mb-2">Notifications proactives de retard</h3>
                    <p className="text-gray-600 text-sm">Alertes automatiques avant même que le client ne demande. Anticipez les frustrations et proposez des solutions.</p>
                  </div>
                  <div className="bg-happi-gray rounded-xl p-6">
                    <h3 className="font-bold text-happi-dark mb-2">Gestion des exceptions logistiques</h3>
                    <p className="text-gray-600 text-sm">Résolution automatisée des incidents courants : colis endommagé, adresse incorrecte, absence du destinataire.</p>
                  </div>
                  <div className="bg-happi-gray rounded-xl p-6">
                    <h3 className="font-bold text-happi-dark mb-2">Coordination fournisseurs/distributeurs</h3>
                    <p className="text-gray-600 text-sm">Communication automatisée avec votre réseau de partenaires pour fluidifier les échanges d'information.</p>
                  </div>
                  <div className="bg-happi-gray rounded-xl p-6">
                    <h3 className="font-bold text-happi-dark mb-2">Support douanier et documentation</h3>
                    <p className="text-gray-600 text-sm">Assistance sur les procédures douanières, documentation requise et réglementations pour la logistique internationale.</p>
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
