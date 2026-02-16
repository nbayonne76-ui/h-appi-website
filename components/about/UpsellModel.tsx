import { ArrowDown, CheckCircle } from 'lucide-react';

const phases = [
  {
    number: '1',
    title: 'Création Sur-Mesure',
    subtitle: 'Votre Investissement Initial',
    description:
      'Application web/mobile, chatbot intelligent ou site web professionnel. Tarif optimisé (50-70% sous le marché), qualité premium, livraison rapide.',
    color: 'bg-happi-blue',
  },
  {
    number: '2',
    title: 'Collecte de Données',
    subtitle: 'Automatique et RGPD-Compliant',
    description:
      'Données comportementales, interactions bot, données métier et performance. Tout en respectant le RGPD : consentement, anonymisation, droit à l\'effacement.',
    color: 'bg-happi-green',
  },
  {
    number: '3',
    title: 'Analyse et Recommandations',
    subtitle: 'Gratuit',
    description:
      'Après 3 à 6 mois, rapport détaillé avec comportements identifiés, problématiques détectées, opportunités d\'optimisation et recommandations personnalisées.',
    color: 'bg-happi-yellow',
  },
  {
    number: '4',
    title: 'Activation des Modules SaaS',
    subtitle: 'Upsell à la Carte',
    description:
      'Choisissez uniquement les modules CX et Supply Chain qui créent de la valeur pour vous. Sans engagement long terme, facturation mensuelle flexible.',
    color: 'bg-gradient-to-r from-happi-blue to-happi-green',
  },
];

const forYou = [
  'Investissement initial réduit',
  'Pas d\'engagement sur les modules',
  'Valeur prouvée sur VOS données',
  'ROI mesurable pour chaque module',
  'Évolution progressive à votre rythme',
];

const forUs = [
  'Relation long terme avec nos clients',
  'Revenus récurrents pour investir dans l\'innovation',
  'Incités à créer de vrais outils utiles',
  'Expertise sectorielle renforcée à chaque projet',
];

export default function UpsellModel() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-gray">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-happi-blue/10 text-happi-blue rounded-full text-sm font-medium mb-4">
            Notre Modèle
          </span>
          <h2 className="text-4xl font-bold text-happi-dark mb-4">
            De l'Application aux{' '}
            <span className="gradient-text">Insights Métier</span>
          </h2>
          <p className="text-xl text-gray-600">
            Un modèle d'upsell intelligent en 4 phases
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-4 mb-16">
          {phases.map((phase, index) => (
            <div key={phase.number}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-14 h-14 ${phase.color} rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl`}
                  >
                    {phase.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-happi-dark">
                      Phase {phase.number} : {phase.title}
                    </h3>
                    <span className="text-sm text-happi-blue font-medium">
                      {phase.subtitle}
                    </span>
                    <p className="text-gray-600 leading-relaxed mt-2">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
              {index < phases.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="text-happi-blue/30" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Concrete Example */}
        <div className="bg-white rounded-2xl p-8 border border-happi-blue/20 mb-16">
          <h3 className="font-bold text-happi-dark mb-4">
            Exemple concret pour un e-commerce :
          </h3>
          <div className="bg-happi-gray rounded-xl p-6 italic text-gray-600">
            &laquo; Analyse sur 6 mois : 2 347 interactions bot, 73% de
            questions sur le statut de commande, 18% sur les retours produits.
            Nous recommandons d'activer le{' '}
            <strong className="text-happi-dark not-italic">
              Module CX - Tracking Intelligent
            </strong>{' '}
            qui automatisera ces réponses et vous permettra de réduire de 60%
            les sollicitations du support. &raquo;
          </div>
        </div>

        {/* Win-Win */}
        <h3 className="text-2xl font-bold text-happi-dark mb-8 text-center">
          Pourquoi ce modèle est gagnant-gagnant
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-green-100">
            <h4 className="text-lg font-bold text-happi-green mb-4">
              Pour vous
            </h4>
            <ul className="space-y-3">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle
                    className="text-happi-green mt-0.5 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-blue-100">
            <h4 className="text-lg font-bold text-happi-blue mb-4">
              Pour nous
            </h4>
            <ul className="space-y-3">
              {forUs.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle
                    className="text-happi-blue mt-0.5 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
