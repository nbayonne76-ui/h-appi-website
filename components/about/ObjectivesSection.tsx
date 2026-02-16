import { Rocket, TrendingUp } from 'lucide-react';

const shortTerm = {
  title: 'Court Terme (2026-2027)',
  icon: Rocket,
  color: 'happi-blue',
};

const midTerm = {
  title: 'Moyen Terme (2028-2030)',
  icon: TrendingUp,
  color: 'happi-green',
};

const midTermGoals = [
  {
    category: 'Expansion de l\'Offre SaaS',
    items: [
      'Marketplace de modules CX et Supply Chain activables en un clic',
      'Intégrations natives avec 50+ outils métier (CRM, ERP, logistique)',
      'Templates sectoriels pour accélérer les déploiements',
    ],
  },
  {
    category: 'Croissance Géographique',
    items: [
      'Conquête des marchés européens et nord-américains',
      'Partenariats stratégiques avec 20+ agences digitales internationales',
      'Réseau de revendeurs pour démultiplier l\'impact',
    ],
  },
  {
    category: 'Excellence Technique et Tarifaire',
    items: [
      'Maintien de l\'avantage prix grâce à l\'automatisation',
      'NPS (Net Promoter Score) de 70+',
      'Référence sur les infrastructures cloud optimisées',
    ],
  },
  {
    category: 'Impact et Communauté',
    items: [
      'Communauté de 3 000+ entrepreneurs et décideurs tech',
      '100+ guides et ressources gratuites publiés',
      '200+ développeurs juniors formés aux pratiques lean',
    ],
  },
];

export default function ObjectivesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-happi-dark mb-4">
            Nos Objectifs
          </h2>
          <p className="text-xl text-gray-600">
            Une feuille de route ambitieuse mais réaliste
          </p>
        </div>

        <div className="space-y-12">
          {/* Moyen Terme */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-happi-green" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-happi-dark">
                {midTerm.title}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {midTermGoals.map((goal, index) => (
                <div
                  key={index}
                  className="bg-happi-gray rounded-xl p-6 border border-gray-100"
                >
                  <h4 className="font-bold text-happi-dark mb-4">
                    {goal.category}
                  </h4>
                  <ul className="space-y-3">
                    {goal.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-3 text-sm"
                      >
                        <svg
                          className="w-5 h-5 text-happi-green mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
