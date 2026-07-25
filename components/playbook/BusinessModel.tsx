import { CheckCircle2, X, ArrowDown } from 'lucide-react';

const pillars = [
  {
    title: { fr: 'Infrastructures cloud nouvelle génération', en: 'Next-generation cloud infrastructure' },
    desc: {
      fr: 'Au lieu des tarifs premium des grands clouds, nous travaillons avec des fournisseurs innovants offrant les mêmes performances pour 40 à 60% moins cher.',
      en: 'Instead of premium pricing from major clouds, we work with innovative providers offering the same performance for 40 to 60% less.',
    },
    saving: { fr: 'Réduction de 60 à 80% des coûts d\'infrastructure', en: '60 to 80% reduction in infrastructure costs' },
  },
  {
    title: { fr: 'Stack technologique open-source et moderne', en: 'Modern open-source tech stack' },
    desc: {
      fr: 'PostgreSQL, Node.js, Python, React, Next.js... Aucune licence, communauté active, mises à jour régulières.',
      en: 'PostgreSQL, Node.js, Python, React, Next.js... No licenses, active community, regular updates.',
    },
    saving: { fr: 'Élimination complète des coûts de licences (20-30% du budget traditionnel)', en: 'Complete elimination of license costs (20-30% of traditional budget)' },
  },
  {
    title: { fr: 'Organisation lean et équipe réduite', en: 'Lean organization, small team' },
    desc: {
      fr: 'Pas de commercial à 20% de marge. Pas de chef de projet sans valeur ajoutée directe. Développeurs experts, designer UX/UI intégré.',
      en: 'No salesperson with 20% margin. No project manager without direct added value. Expert developers, integrated UX/UI designer.',
    },
    saving: { fr: '40 à 50% sur les coûts de main d\'oeuvre', en: '40 to 50% on labor costs' },
  },
  {
    title: { fr: 'Automatisation et réutilisation intelligente', en: 'Smart automation and reuse' },
    desc: {
      fr: 'Composants réutilisables, CI/CD automatisé, templates sectoriels. Nous capitalisons sur notre expérience.',
      en: 'Reusable components, automated CI/CD, industry templates. We capitalize on our experience.',
    },
    saving: { fr: '20 à 30% de temps de développement économisé', en: '20 to 30% development time saved' },
  },
];

const comparisonRows = [
  { type: { fr: 'Site web sur-mesure', en: 'Custom website' }, savings: '-50 à -70%', savingsEn: '-50 to -70%' },
  { type: { fr: 'Chatbot intelligent personnalisé', en: 'Personalized intelligent chatbot' }, savings: '-50 à -65%', savingsEn: '-50 to -65%' },
  { type: { fr: 'Application web métier', en: 'Business web application' }, savings: '-55 à -70%', savingsEn: '-55 to -70%' },
  { type: { fr: 'Application mobile (iOS + Android)', en: 'Mobile application (iOS + Android)' }, savings: '-50 à -60%', savingsEn: '-50 to -60%' },
  { type: { fr: 'Modules SaaS (upsell mensuel)', en: 'SaaS modules (monthly upsell)' }, savings: '-60 à -75%', savingsEn: '-60 to -75%' },
];

const phases = [
  {
    title: { fr: 'Création sur-mesure', en: 'Tailored creation' },
    subtitle: { fr: 'Votre investissement initial', en: 'Your initial investment' },
    desc: {
      fr: 'Application web/mobile, chatbot intelligent ou site web professionnel. Tarif optimisé (50-70% sous le marché), qualité premium, livraison rapide.',
      en: 'Web/mobile app, intelligent chatbot or professional website. Optimized pricing (50-70% under market), premium quality, fast delivery.',
    },
  },
  {
    title: { fr: 'Collecte de données', en: 'Data collection' },
    subtitle: { fr: 'Automatique et RGPD-compliant', en: 'Automatic and GDPR-compliant' },
    desc: {
      fr: 'Données comportementales, interactions bot, données métier. Consentement, anonymisation, droit à l\'effacement respectés.',
      en: 'Behavioral data, bot interactions, business data. Consent, anonymization, right to erasure all respected.',
    },
  },
  {
    title: { fr: 'Analyse et recommandations', en: 'Analysis and recommendations' },
    subtitle: { fr: 'Gratuit', en: 'Free' },
    desc: {
      fr: 'Après 3 à 6 mois, rapport détaillé avec comportements identifiés, problématiques détectées et recommandations personnalisées.',
      en: 'After 3 to 6 months, a detailed report with identified behaviors, detected issues and personalized recommendations.',
    },
  },
  {
    title: { fr: 'Activation des modules SaaS', en: 'SaaS module activation' },
    subtitle: { fr: 'Upsell à la carte', en: 'À la carte upsell' },
    desc: {
      fr: 'Choisissez uniquement les modules qui créent de la valeur pour vous. Sans engagement long terme, facturation mensuelle flexible.',
      en: 'Choose only the modules that create value for you. No long-term commitment, flexible monthly billing.',
    },
  },
];

const winForYou = {
  fr: ['Investissement initial réduit', 'Pas d\'engagement sur les modules', 'Valeur prouvée sur VOS données', 'ROI mesurable pour chaque module', 'Évolution progressive à votre rythme'],
  en: ['Reduced initial investment', 'No commitment on modules', 'Value proven on YOUR data', 'Measurable ROI for each module', 'Progressive evolution at your pace'],
};
const winForUs = {
  fr: ['Relation long terme avec nos clients', 'Revenus récurrents pour investir dans l\'innovation', 'Incités à créer de vrais outils utiles', 'Expertise sectorielle renforcée à chaque projet'],
  en: ['Long-term relationship with our clients', 'Recurring revenue to invest in innovation', 'Incentivized to build genuinely useful tools', 'Stronger sector expertise with every project'],
};

export default function BusinessModel({ fr }: { fr: boolean }) {
  return (
    <>
      {/* Problème + piliers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-5xl mx-auto">
          <div className="bg-red-500/8 rounded-2xl p-8 border border-red-500/20 mb-10">
            <h3 className="text-xl font-bold text-red-400 mb-3">
              {fr ? "Le problème de l'industrie IT traditionnelle" : 'The traditional IT industry problem'}
            </h3>
            <p className="text-happi-muted mb-5 text-sm">
              {fr ? 'Les agences et ESN traditionnelles vous facturent :' : 'Traditional agencies and IT service companies charge you for:'}
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {(fr
                ? ['Infrastructures cloud surcotées (AWS/Azure/GCP)', 'Licences propriétaires (Oracle, Microsoft, SAP...)', 'Organisation lourde (commerciaux, chefs de projet...)', 'Processus bureaucratiques (semaines de validations)']
                : ['Overpriced cloud infrastructure (AWS/Azure/GCP)', 'Proprietary licenses (Oracle, Microsoft, SAP...)', 'Heavy organization (salespeople, project managers...)', 'Bureaucratic processes (weeks of approvals)']
              ).map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-happi-muted">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-red-400 font-semibold">
              {fr ? 'Résultat : seulement 30 à 40% du budget va au développement réel.' : 'Result: only 30 to 40% of the budget goes to actual development.'}
            </p>
          </div>

          <h3 className="text-2xl font-bold text-white mb-6">
            {fr ? "La solution H'appi : lean, smart, accessible" : "The H'appi solution: lean, smart, accessible"}
          </h3>
          <div className="space-y-3">
            {pillars.map((p) => (
              <div key={p.title.fr} className="bg-happi-darker rounded-xl p-5 border border-happi-border flex items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-1 text-sm">{fr ? p.title.fr : p.title.en}</h4>
                  <p className="text-happi-muted text-xs mb-2">{fr ? p.desc.fr : p.desc.en}</p>
                  <span className="inline-block text-happi-green font-semibold text-xs bg-happi-green/10 border border-happi-green/20 px-2.5 py-0.5 rounded-full">
                    {fr ? p.saving.fr : p.saving.en}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">
            {fr ? 'Résultat : prix révolutionnaires' : 'Result: revolutionary prices'}
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-happi-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-happi-dark">
                  <th className="text-left py-4 px-5 text-happi-muted font-medium">{fr ? 'Type de prestation' : 'Service type'}</th>
                  <th className="text-center py-4 px-5 text-happi-green font-bold">{fr ? 'Écart vs marché' : 'Gap vs market'}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.type.fr} className="border-t border-happi-border hover:bg-happi-surface/30 transition-colors">
                    <td className="py-4 px-5 text-white font-medium">{fr ? row.type.fr : row.type.en}</td>
                    <td className="py-4 px-5 text-center">
                      <span className="bg-happi-green/10 text-happi-green font-bold px-3 py-1 rounded-full text-xs border border-happi-green/20">
                        {fr ? row.savings : row.savingsEn}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-happi-muted text-xs italic text-center">
            {fr
              ? 'Même qualité, voire supérieure, grâce à notre expertise technique et nos choix technologiques modernes.'
              : 'Same quality, or even superior, thanks to our technical expertise and modern technology choices.'}
          </p>
        </div>
      </section>

      {/* 4 phases upsell */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {fr ? "Le modèle d'upsell en 4 phases" : 'The 4-phase upsell model'}
          </h3>
          <div className="space-y-4">
            {phases.map((phase, i) => (
              <div key={phase.title.fr}>
                <div className="bg-happi-surface rounded-2xl p-6 border border-happi-border">
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 bg-happi-blue rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{fr ? phase.title.fr : phase.title.en}</h4>
                      <span className="text-sm text-happi-blue font-medium">{fr ? phase.subtitle.fr : phase.subtitle.en}</span>
                      <p className="text-happi-muted text-sm leading-relaxed mt-2">{fr ? phase.desc.fr : phase.desc.en}</p>
                    </div>
                  </div>
                </div>
                {i < phases.length - 1 && (
                  <div className="flex justify-center py-1.5">
                    <ArrowDown className="text-happi-blue/30" size={18} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-happi-surface rounded-2xl p-6 border border-happi-blue/20 mt-8">
            <h4 className="font-bold text-white mb-3 text-sm">
              {fr ? 'Exemple fictif pour un e-commerce :' : 'Fictional example for an e-commerce:'}
            </h4>
            <div className="bg-happi-darker rounded-xl p-5 italic text-happi-muted text-sm leading-relaxed">
              {fr
                ? <>Sur 6 mois : 2 000+ interactions bot, 70% sur le statut de commande, 15% sur les retours produits. On recommanderait d&apos;activer le <strong className="text-white not-italic">module CX Tracking Intelligent</strong> pour automatiser ces réponses.</>
                : <>Over 6 months: 2,000+ bot interactions, 70% about order status, 15% about returns. We&apos;d recommend activating the <strong className="text-white not-italic">CX Smart Tracking module</strong> to automate these answers.</>}
            </div>
          </div>
        </div>
      </section>

      {/* Win-win */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {fr ? 'Pourquoi ce modèle est gagnant-gagnant' : 'Why this model is win-win'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-happi-surface rounded-2xl p-7 border border-happi-green/20">
              <h4 className="text-lg font-bold text-happi-green mb-4">{fr ? 'Pour vous' : 'For you'}</h4>
              <ul className="space-y-3">
                {winForYou[fr ? 'fr' : 'en'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-happi-green mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-happi-muted text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-happi-surface rounded-2xl p-7 border border-happi-blue/20">
              <h4 className="text-lg font-bold text-happi-blue mb-4">{fr ? 'Pour nous' : 'For us'}</h4>
              <ul className="space-y-3">
                {winForUs[fr ? 'fr' : 'en'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-happi-blue mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-happi-muted text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
