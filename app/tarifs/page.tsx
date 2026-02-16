import Header from '@/components/Header';
import Pricing from '@/components/Pricing';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Tarifs - H'appi | Plans adaptés à chaque entreprise",
  description: "Découvrez nos plans tarifaires : Gratuit, Starter (49€/mois), Professional (149€/mois) et Enterprise. Commencez gratuitement.",
};

export default function TarifsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 gradient-bg">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-happi-yellow/20 text-happi-dark rounded-full text-sm font-medium mb-4">
              Tarifs
            </span>
            <h1 className="text-5xl font-bold text-happi-dark mb-6">
              Un plan adapté à{' '}
              <span className="gradient-text">chaque entreprise</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Commencez gratuitement, évoluez à votre rythme. Aucun engagement,
              annulable à tout moment. Réduction de 20% sur les plans annuels.
            </p>
          </div>
        </section>

        <Pricing />

        {/* Detailed Comparison */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-happi-dark mb-12 text-center">
              Comparaison détaillée des plans
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 text-happi-dark">Fonctionnalité</th>
                    <th className="text-center py-4 px-4 text-happi-dark">Gratuit</th>
                    <th className="text-center py-4 px-4 text-happi-dark">Starter</th>
                    <th className="text-center py-4 px-4 text-happi-blue font-bold">Professional</th>
                    <th className="text-center py-4 px-4 text-happi-dark">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ['Conversations / mois', '100', '1 000', '10 000', 'Illimité'],
                    ['Canaux', '1 (web)', '3', 'Illimité', 'Illimité'],
                    ['Chatbots', '1', '1', '3', 'Illimité'],
                    ['Personnalisation', 'Basique', 'Couleurs, logo', 'Workflows avancés', 'Sur-mesure'],
                    ['Intégration CRM/ERP', '-', '-', 'Oui', 'Oui'],
                    ['Analytics', 'Basiques', 'Basiques', 'Avancés + IA', 'Avancés + IA'],
                    ['Support', 'Communauté', 'Email', 'Prioritaire', 'Account manager'],
                    ['Templates sectoriels', '-', '2', 'Tous', 'Tous + custom'],
                    ['Branding H\'appi', 'Visible', 'Optionnel', 'Masqué', 'Masqué'],
                    ['SLA', '-', '-', '99.5%', 'Personnalisé'],
                    ['Déploiement on-premise', '-', '-', '-', 'Disponible'],
                  ].map(([feature, free, starter, pro, enterprise], index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-happi-gray/50">
                      <td className="py-3 px-4 text-happi-dark font-medium">{feature}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{free}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{starter}</td>
                      <td className="py-3 px-4 text-center text-happi-blue font-medium bg-happi-blue/5">{pro}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Why this pricing */}
            <div className="mt-16 bg-happi-gray rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-happi-dark mb-4">
                Pourquoi ce modèle tarifaire ?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-happi-dark mb-2">Freemium accessible</h4>
                  <p className="text-gray-600 text-sm">
                    Le plan gratuit vous permet de tester H'appi sans risque.
                    Les coûts marginaux d'un chatbot SaaS sont faibles, ce qui
                    nous permet de proposer un accès gratuit viable.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-happi-dark mb-2">Croissance alignée</h4>
                  <p className="text-gray-600 text-sm">
                    La tarification basée sur les conversations aligne votre
                    investissement sur votre usage réel. Plus vous grandissez,
                    plus la valeur de H'appi augmente pour vous.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-happi-dark mb-2">Réduction annuelle</h4>
                  <p className="text-gray-600 text-sm">
                    L'engagement annuel offre une réduction de 20%, améliorant
                    la prévisibilité de vos coûts tout en vous faisant
                    économiser significativement.
                  </p>
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
