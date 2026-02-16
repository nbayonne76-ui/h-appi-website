export default function PricingStrategy() {
  const comparisons = [
    {
      type: 'Site web sur-mesure',
      savings: '-50 à -70%',
      benefit: 'Investissement divisé par 2 à 3',
    },
    {
      type: 'Chatbot intelligent personnalisé',
      savings: '-50 à -65%',
      benefit: 'Accessible aux PME',
    },
    {
      type: 'Application web métier',
      savings: '-55 à -70%',
      benefit: 'Budget libéré pour le marketing',
    },
    {
      type: 'Application mobile (iOS + Android)',
      savings: '-50 à -60%',
      benefit: 'ROI plus rapide',
    },
    {
      type: 'Modules SaaS (upsell mensuel)',
      savings: '-60 à -75%',
      benefit: 'Coûts récurrents maîtrisés',
    },
  ];

  const pillars = [
    {
      number: '1',
      title: 'Infrastructures Cloud Nouvelle Génération',
      description:
        'Au lieu des tarifs premium des grands clouds, nous travaillons avec des fournisseurs innovants offrant les mêmes performances pour 40 à 60% moins cher.',
      saving: 'Réduction de 60 à 80% des coûts d\'infrastructure',
    },
    {
      number: '2',
      title: 'Stack Technologique Open-Source et Moderne',
      description:
        'PostgreSQL, Node.js, Python, React, Next.js... Aucune licence, communauté active, mises à jour régulières.',
      saving: 'Élimination complète des coûts de licences (20-30% du budget traditionnel)',
    },
    {
      number: '3',
      title: 'Organisation Lean et Équipe Réduite',
      description:
        'Pas de commercial à 20% de marge. Pas de chef de projet sans valeur ajoutée directe. Développeurs experts, designer UX/UI intégré, direction technique impliquée.',
      saving: '40 à 50% sur les coûts de main d\'oeuvre',
    },
    {
      number: '4',
      title: 'Automatisation et Réutilisation Intelligente',
      description:
        'Composants réutilisables, CI/CD automatisé, templates sectoriels. Nous capitalisons sur notre expérience.',
      saving: '20 à 30% de temps de développement économisé',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-happi-yellow/20 text-happi-dark rounded-full text-sm font-medium mb-4">
            Stratégie Tarifaire
          </span>
          <h2 className="text-4xl font-bold text-happi-dark mb-4">
            Comment nous{' '}
            <span className="gradient-text">révolutionnons</span> les prix
          </h2>
        </div>

        {/* Problem */}
        <div className="bg-red-50 rounded-2xl p-8 border border-red-100 mb-12">
          <h3 className="text-xl font-bold text-red-700 mb-4">
            Le Problème de l'Industrie IT Traditionnelle
          </h3>
          <p className="text-gray-700 mb-4">
            Les agences et ESN traditionnelles vous facturent :
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Infrastructures cloud surcotées (AWS/Azure/GCP avec marges confortables)',
              'Licences propriétaires (Oracle, Microsoft, SAP... des milliers €/mois)',
              'Organisation lourde (commerciaux, chefs de projet, consultants...)',
              'Processus bureaucratiques (semaines de réunions et validations)',
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-red-600 font-medium">
            Résultat : seulement 30 à 40% du budget va au développement réel.
          </p>
        </div>

        {/* Solution */}
        <h3 className="text-2xl font-bold text-happi-dark mb-8">
          La Solution H'appi : Lean, Smart, Accessible
        </h3>

        <div className="space-y-4 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-happi-gray rounded-xl p-6 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <span className="text-2xl font-bold text-happi-blue/20">
                  {pillar.number}.
                </span>
                <div>
                  <h4 className="font-bold text-happi-dark mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    {pillar.description}
                  </p>
                  <p className="text-happi-green font-semibold text-sm">
                    {pillar.saving}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <h3 className="text-2xl font-bold text-happi-dark mb-6">
          Résultat : Prix Révolutionnaires
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-happi-blue/20">
                <th className="text-left py-4 px-4 text-happi-dark">Type de Prestation</th>
                <th className="text-center py-4 px-4 text-happi-green font-bold">Écart vs Marché</th>
                <th className="text-left py-4 px-4 text-happi-dark">Avantage Client</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-happi-gray/50">
                  <td className="py-4 px-4 text-happi-dark font-medium">{row.type}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="bg-happi-green/10 text-happi-green font-bold px-3 py-1 rounded-full text-sm">
                      {row.savings}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{row.benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-gray-500 text-sm italic text-center">
          Même qualité, voire supérieure, grâce à notre expertise technique et
          nos choix technologiques modernes.
        </p>
      </div>
    </section>
  );
}
