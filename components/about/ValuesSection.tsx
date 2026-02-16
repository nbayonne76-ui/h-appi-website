'use client';

import {
  Palette,
  Coins,
  TrendingUp,
  Zap,
  Handshake,
  ShieldCheck,
  Sprout,
  Globe,
} from 'lucide-react';

const values = [
  {
    icon: Palette,
    title: 'Sur-Mesure Radical',
    quote: 'Votre entreprise est unique. Vos solutions digitales doivent l\'être aussi.',
    description:
      'Nous refusons catégoriquement les templates génériques. Chaque ligne de code est pensée pour VOTRE métier, VOS utilisateurs, VOS objectifs.',
    practice:
      'Avant de développer, nous passons plusieurs jours à comprendre votre entreprise. Nous créons un cahier des charges co-construit avec vous. Tout au long du développement, vous êtes impliqué avec des démos régulières.',
    color: 'blue',
  },
  {
    icon: Coins,
    title: 'Prix Justes et Transparents',
    quote: 'Le digital sur-mesure ne doit plus être un privilège de riches.',
    description:
      'Nous avons bâti H\'appi sur une conviction forte : les prix pratiqués par l\'industrie IT sont injustifiés. Les mêmes compétences peuvent coûter 50 à 70% moins cher.',
    practice:
      'Devis détaillés avec chaque ligne expliquée. Prix disruptifs grâce à nos infrastructures optimisées. Paiement flexible adapté aux PME. Garantie satisfaction incluse.',
    color: 'green',
  },
  {
    icon: TrendingUp,
    title: 'Croissance Évolutive',
    quote: 'Votre solution d\'aujourd\'hui devient votre plateforme d\'intelligence métier de demain.',
    description:
      'Nous ne créons pas des solutions figées. Nous construisons des fondations solides qui évoluent avec votre entreprise.',
    practice:
      'Phase 1 : App sur-mesure. Phase 2 : Collecte de données. Phase 3 : Recommandations personnalisées. Phase 4 : Activation de modules SaaS à la carte.',
    color: 'yellow',
  },
  {
    icon: Zap,
    title: 'Agilité et Rapidité',
    quote: 'Attendre 6 mois pour une application n\'est plus acceptable.',
    description:
      'Les cycles traditionnels sont interminables. Nous livrons des prototypes fonctionnels 60% plus rapidement que les prestataires traditionnels.',
    practice:
      'Kick-off sous 48h. Première version fonctionnelle en 2-3 semaines. Itérations de 1-2 semaines. Livraison continue plutôt qu\'un "big bang" final.',
    color: 'blue',
  },
  {
    icon: Handshake,
    title: 'Partenariat Long Terme',
    quote: 'Nous ne sommes pas un prestataire, nous sommes votre équipe tech externalisée.',
    description:
      'Trop de projets digitaux échouent parce que le prestataire livre et disparaît. Chez H\'appi, nous restons à vos côtés.',
    practice:
      'Chaque client a un interlocuteur dédié. Support réactif en jours ouvrés. Maintenance proactive. Conseils stratégiques réguliers. Pas de ticket anonyme, une vraie relation humaine.',
    color: 'green',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité Sans Compromis',
    quote: 'Prix accessibles ne signifie pas compromis sur la sécurité.',
    description:
      'Même si nous révolutionnons les prix, nous n\'économisons jamais sur la sécurité et la conformité.',
    practice:
      'Hébergement européen. Chiffrement de bout en bout. Sauvegardes automatiques quotidiennes. Audits de sécurité trimestriels. Partenaires certifiés ISO 27001, SOC 2.',
    color: 'yellow',
  },
  {
    icon: Sprout,
    title: 'Transparence Radicale',
    quote: 'Vous avez le droit de savoir où va chaque euro dépensé.',
    description:
      'L\'opacité tarifaire est un fléau de l\'industrie IT. Chez H\'appi, nous pratiquons la transparence totale.',
    practice:
      'Devis détaillés en langage clair. Code source accessible (vous êtes propriétaire à 100%). Technologies ouvertes. Reporting hebdomadaire avec temps passés.',
    color: 'blue',
  },
  {
    icon: Globe,
    title: 'Excellence Internationale, Prix Compétitifs',
    quote: 'La meilleure qualité technique aux prix les plus accessibles.',
    description:
      'Nous combinons expertise de haut niveau + infrastructures cloud optimisées + organisation lean pour offrir qualité professionnelle et tarifs disruptifs.',
    practice:
      'Équipe internationale avec les meilleures technologies. Coûts optimisés grâce à nos choix d\'infrastructure. Nous facturons la valeur réelle créée, pas le prestige d\'un logo.',
    color: 'green',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-happi-blue',
    border: 'border-happi-blue/20',
  },
  green: {
    bg: 'bg-green-50',
    text: 'text-happi-green',
    border: 'border-happi-green/20',
  },
  yellow: {
    bg: 'bg-yellow-50',
    text: 'text-happi-yellow',
    border: 'border-happi-yellow/20',
  },
};

export default function ValuesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-gray">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-happi-green/10 text-happi-green rounded-full text-sm font-medium mb-4">
            Nos Valeurs
          </span>
          <h2 className="text-4xl font-bold text-happi-dark mb-4">
            Nos Valeurs <span className="gradient-text">Fondamentales</span>
          </h2>
          <p className="text-xl text-gray-600">
            8 principes qui guident chacune de nos décisions
          </p>
        </div>

        <div className="space-y-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            const colors = colorMap[value.color];
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border ${colors.border} hover:shadow-md transition-all`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className={colors.text} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-happi-dark mb-2">
                      {index + 1}. {value.title}
                    </h3>
                    <blockquote
                      className={`${colors.text} font-semibold italic mb-4 text-lg`}
                    >
                      &laquo; {value.quote} &raquo;
                    </blockquote>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {value.description}
                    </p>
                    <div className="bg-happi-gray rounded-lg p-4">
                      <p className="text-sm text-gray-500">
                        <span className="font-semibold text-happi-dark">
                          En pratique :{' '}
                        </span>
                        {value.practice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
