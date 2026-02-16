'use client';

import {
  Brain,
  Zap,
  BarChart3,
  Globe,
  Shield,
  RefreshCw,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'IA qui apprend votre métier',
    description:
      'Nos chatbots comprennent votre terminologie sectorielle (CX, Supply Chain) et s\'adaptent à vos processus métier spécifiques.',
    color: 'blue' as const,
  },
  {
    icon: Zap,
    title: 'Déploiement rapide',
    description:
      'Opérationnel en quelques jours, pas en mois. Intégration simple avec vos outils existants (CRM, ERP, bases de données).',
    color: 'green' as const,
  },
  {
    icon: BarChart3,
    title: 'Analytics et insights IA',
    description:
      'KPIs en temps réel : taux de résolution, satisfaction client, temps de réponse. Des insights prédictifs pour anticiper les besoins.',
    color: 'yellow' as const,
  },
  {
    icon: Globe,
    title: 'Omnicanal natif',
    description:
      'Déployez sur votre site web, WhatsApp, Messenger, Teams et plus encore. Une expérience cohérente sur tous les canaux.',
    color: 'blue' as const,
  },
  {
    icon: Shield,
    title: 'RGPD & Made in France',
    description:
      'Données hébergées en France, conformité RGPD totale. Sécurité et souveraineté des données garanties.',
    color: 'green' as const,
  },
  {
    icon: RefreshCw,
    title: 'Évolution continue',
    description:
      'Le chatbot apprend de chaque interaction et développe de nouvelles fonctionnalités SaaS : analytics, prédictions, optimisations.',
    color: 'yellow' as const,
  },
];

const colorMap = {
  blue: 'bg-blue-50 text-happi-blue',
  green: 'bg-green-50 text-happi-green',
  yellow: 'bg-yellow-50 text-happi-yellow',
};

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-happi-blue/10 text-happi-blue rounded-full text-sm font-medium mb-4">
            Fonctionnalités
          </span>
          <h2 className="text-4xl font-bold text-happi-dark mb-4">
            Tout ce dont vous avez besoin pour{' '}
            <span className="gradient-text">transformer</span> votre service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une plateforme complète de chatbots IA, conçue pour les entreprises
            françaises qui veulent allier technologie et excellence humaine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-happi-blue/20 group"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colorMap[feature.color]} group-hover:scale-110 transition-transform`}
                >
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-happi-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
