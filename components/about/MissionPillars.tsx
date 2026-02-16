import {
  Palette,
  BarChart3,
  Coins,
  Handshake,
  ShieldCheck,
} from 'lucide-react';

const pillars = [
  {
    icon: Palette,
    number: '01',
    title: 'Construisons Vos Solutions Digitales Sur-Mesure',
    color: 'happi-blue',
    intro:
      'Nous ne vendons pas de templates. Nous ne proposons pas de solutions "clé en main" génériques. Chaque projet H\'appi est unique car votre entreprise est unique.',
    items: [
      {
        label: 'Applications web et mobile',
        desc: 'Développées selon votre vision, vos processus métier, votre identité visuelle',
      },
      {
        label: 'Chatbots intelligents',
        desc: 'Conçus pour parler votre langue, comprendre votre secteur, et interagir naturellement avec vos clients',
      },
      {
        label: 'Sites web professionnels',
        desc: 'Du site vitrine au portail e-commerce, toujours personnalisés, performants et optimisés SEO',
      },
    ],
    footnote:
      'Chaque projet commence par une phase d\'immersion profonde dans votre métier. Nous prenons le temps de comprendre vos besoins, vos utilisateurs, vos contraintes. Ensuite, nous concevons et développons une solution qui vous ressemble vraiment.',
  },
  {
    icon: BarChart3,
    number: '02',
    title: 'Transformons Vos Applications en Moteurs d\'Intelligence Métier',
    color: 'happi-green',
    intro:
      'Votre différence fondamentale : vos solutions H\'appi ne sont pas statiques. Une fois déployées et en interaction avec vos utilisateurs, nous collectons des données précieuses (avec consentement RGPD) pour développer des fonctionnalités SaaS avancées.',
    subSections: [
      {
        title: 'Modules CX (Expérience Client)',
        items: [
          'Analytics comportementaux : comprendre le parcours et les pain points',
          'Personnalisation intelligente : recommandations automatiques',
          'Prédiction du churn : identifier les clients à risque',
          'Satisfaction en temps réel : mesure NPS et CSAT automatique',
          'Automatisation du support : réponses basées sur la base de connaissances',
        ],
      },
      {
        title: 'Modules Supply Chain',
        items: [
          'Prévision de la demande : anticipation des volumes',
          'Optimisation des stocks : alertes de réapprovisionnement',
          'Tracking avancé : visibilité complète sur vos flux',
          'Coordination multi-acteurs : synchronisation fournisseurs/distributeurs',
          'Analytics opérationnels : tableaux de bord temps réel',
        ],
      },
    ],
    footnote:
      'Vous commencez avec une application ou un bot sur-mesure à tarif optimisé. Après quelques mois, nous vous proposons d\'activer ces modules SaaS qui transforment votre solution en véritable plateforme d\'intelligence métier. Vous payez uniquement ce dont vous avez besoin.',
  },
  {
    icon: Coins,
    number: '03',
    title: 'Révolutionnons les Prix du Marché',
    color: 'happi-yellow',
    intro:
      'Nous avons fait un choix stratégique radical : refuser l\'inflation tarifaire des géants de l\'IT.',
    items: [
      {
        label: 'Cloud nouvelle génération',
        desc: 'Performances équivalentes aux AWS/Azure/GCP pour 40 à 60% moins cher',
      },
      {
        label: 'Outils open-source de qualité',
        desc: 'Technologies robustes et éprouvées plutôt que des licences propriétaires coûteuses',
      },
      {
        label: 'Architecture optimisée',
        desc: 'Architectures légères et performantes, réduisant drastiquement les coûts d\'hébergement',
      },
    ],
    footnote:
      'Résultat : une solution H\'appi coûte 50 à 70% moins cher qu\'une solution équivalente sur des infrastructures traditionnelles, sans aucun compromis sur la qualité.',
  },
  {
    icon: Handshake,
    number: '04',
    title: 'Accompagnons Votre Croissance sur le Long Terme',
    color: 'happi-blue',
    intro:
      'Nous ne sommes pas juste un prestataire qui livre un produit et disparaît. H\'appi devient votre partenaire tech sur la durée.',
    items: [
      { label: 'Support technique réactif', desc: 'Personnalisé et humain' },
      {
        label: 'Mises à jour régulières',
        desc: 'Améliorations continues de votre solution',
      },
      {
        label: 'Formation de vos équipes',
        desc: 'Pour une prise en main autonome',
      },
      {
        label: 'Évolution continue',
        desc: 'Votre solution grandit avec vous',
      },
      {
        label: 'Proposition proactive',
        desc: 'Nouvelles fonctionnalités basées sur vos usages réels',
      },
    ],
  },
  {
    icon: ShieldCheck,
    number: '05',
    title: 'Garantissons Conformité, Sécurité et Transparence',
    color: 'happi-green',
    intro:
      'Toutes nos solutions sont hébergées en Europe, conformes RGPD, et bénéficient des plus hauts standards de sécurité.',
    footnote:
      'Vos données et celles de vos clients sont protégées avec le même niveau d\'exigence que les plus grandes entreprises, mais à des coûts accessibles.',
  },
];

const iconColorMap: Record<string, string> = {
  'happi-blue': 'bg-blue-50 text-happi-blue',
  'happi-green': 'bg-green-50 text-happi-green',
  'happi-yellow': 'bg-yellow-50 text-happi-yellow',
};

const numberColorMap: Record<string, string> = {
  'happi-blue': 'text-happi-blue',
  'happi-green': 'text-happi-green',
  'happi-yellow': 'text-happi-yellow',
};

export default function MissionPillars() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-gray">
      <div className="max-w-5xl mx-auto space-y-12">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.number}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100"
            >
              <div className="flex items-start space-x-4 mb-6">
                <span
                  className={`text-4xl font-bold ${numberColorMap[pillar.color]} opacity-30`}
                >
                  {pillar.number}
                </span>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconColorMap[pillar.color]}`}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-happi-dark">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {pillar.intro}
                  </p>

                  {pillar.items && (
                    <div className="space-y-3 mb-6">
                      {pillar.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start space-x-3 bg-happi-gray rounded-lg p-4"
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
                          <div>
                            <span className="font-semibold text-happi-dark">
                              {item.label}
                            </span>
                            <span className="text-gray-600"> — {item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {'subSections' in pillar && pillar.subSections && (
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {pillar.subSections.map((sub, i) => (
                        <div key={i} className="bg-happi-gray rounded-xl p-6">
                          <h4 className="font-bold text-happi-dark mb-3">
                            {sub.title}
                          </h4>
                          <ul className="space-y-2">
                            {sub.items.map((item, j) => (
                              <li
                                key={j}
                                className="flex items-start space-x-2 text-sm text-gray-600"
                              >
                                <svg
                                  className="w-4 h-4 text-happi-green mt-0.5 flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {pillar.footnote && (
                    <p className="text-gray-500 text-sm italic border-l-4 border-happi-blue/20 pl-4">
                      {pillar.footnote}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
