import ArticleLayout from '@/components/blog/ArticleLayout';
import { getArticleBySlug, getRelatedArticles } from '@/lib/blog-data';

export const metadata = {
  title: "Application sur-mesure vs standardisée : comment choisir ? | H'appi",
  description:
    "Comparaison détaillée avec tableau comparatif, cas d'usage et guide de décision pour choisir entre une application sur-mesure et une solution standardisée.",
};

const article = getArticleBySlug('application-sur-mesure-vs-standardisee')!;
const related = getRelatedArticles('application-sur-mesure-vs-standardisee');

const sources = [
  { name: 'Anura', url: 'https://www.anura.fr/blog/logiciels-sur-mesure-vs-logiciels-standard', detail: 'Logiciels sur mesure vs standards' },
  { name: 'Exolnet', url: 'https://www.exolnet.com/fr/blogue/logiciel-personnalise-ou-standard-avantages-et-inconvenients/', detail: 'Avantages et inconvénients - Sept. 2025' },
  { name: 'LSKSoft', url: 'https://lsksoft.com/logiciel-sur-mesure-vs-solution-standard/', detail: 'Choisir la meilleure option - Déc. 2025' },
  { name: 'Edana', url: 'https://edana.ch/fr/blog/digital/logiciel-sur-mesure-vs-standard-choix-strategique/', detail: 'Choix stratégique - Juil. 2025' },
  { name: 'Gnew', url: 'https://www.gnew.fr/logiciel-standard-ou-logiciel-sur-mesure/', detail: 'Guide pratique de décision' },
];

const toc = [
  { id: 'definitions', label: 'Définitions' },
  { id: 'comparatif', label: 'Tableau comparatif' },
  { id: 'quand-standard', label: 'Quand choisir le standard' },
  { id: 'quand-surmesure', label: 'Quand choisir le sur-mesure' },
  { id: 'happi-accessible', label: 'H\'appi rend le sur-mesure accessible' },
];

export default function Article2() {
  return (
    <ArticleLayout article={article} sources={sources} toc={toc} relatedArticles={related}>
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        C'est LE dilemme de toute entreprise en transformation digitale :
        faut-il opter pour une solution standard du marché ou investir dans une
        application développée sur-mesure ? La réponse dépend de votre
        situation, et cet article vous donne les clés pour trancher.
      </p>

      <h2 id="definitions">Qu'est-ce qu'on compare exactement ?</h2>

      <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-happi-gray rounded-xl p-6 border border-gray-200">
          <h4 className="font-bold text-happi-dark mb-3">Application standardisée</h4>
          <p className="text-sm text-gray-600 mb-3">
            Solution prête à l'emploi, conçue pour un usage générique. Exemples : Salesforce, Shopify, SAP, HubSpot.
          </p>
          <p className="text-xs text-gray-400">
            Vous configurez la solution existante. Le code appartient à l'éditeur.
          </p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-happi-blue/20">
          <h4 className="font-bold text-happi-blue mb-3">Application sur-mesure</h4>
          <p className="text-sm text-gray-600 mb-3">
            Solution développée spécifiquement pour vos besoins, processus et identité. Vous êtes propriétaire du code.
          </p>
          <p className="text-xs text-gray-400">
            Vous définissez les fonctionnalités. Le code vous appartient à 100%.
          </p>
        </div>
      </div>

      <h2 id="comparatif">Tableau comparatif</h2>

      <div className="not-prose overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 text-happi-dark">Critère</th>
              <th className="text-center py-3 px-4 text-gray-500">Standardisée</th>
              <th className="text-center py-3 px-4 text-happi-blue font-bold">Sur-mesure H'appi</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Coût initial', 'Faible à moyen', '50-70% moins cher que la concurrence'],
              ['Délai', 'Rapide (jours)', '2-3 semaines (vs 2-3 mois traditionnel)'],
              ['Personnalisation', 'Limitée', 'Totale, adaptée à votre métier'],
              ['Évolutivité', 'Contrainte par l\'éditeur', 'Complète, vous êtes propriétaire'],
              ['Intégration', 'Peut nécessiter middleware', 'Native, conçue pour votre écosystème'],
              ['Maintenance', 'Dépendance éditeur', 'Support H\'appi dédié + autonomie'],
              ['Coût long terme', 'Licences récurrentes élevées', 'Infrastructure cloud économique'],
              ['Propriété du code', 'Non', 'Oui, 100%'],
            ].map(([critere, standard, surmesure], i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-happi-gray/50">
                <td className="py-3 px-4 font-medium text-happi-dark">{critere}</td>
                <td className="py-3 px-4 text-center text-gray-500">{standard}</td>
                <td className="py-3 px-4 text-center text-happi-blue bg-happi-blue/5 font-medium">{surmesure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="quand-standard">Quand choisir une solution standardisée</h2>
      <p>Le standard reste pertinent dans certaines situations :</p>
      <ul>
        <li>Vos besoins sont très <strong>standards et génériques</strong> (CRM basique, boutique en ligne simple)</li>
        <li>Votre budget initial est <strong>très limité</strong> (moins de 500€)</li>
        <li>Vous avez besoin d'être opérationnel en <strong>moins d'une semaine</strong></li>
        <li>Aucune spécificité métier ne justifie un développement dédié</li>
      </ul>

      <h2 id="quand-surmesure">Quand choisir le sur-mesure</h2>
      <p>Le sur-mesure devient le meilleur choix quand :</p>
      <ul>
        <li>Vos <strong>processus métier sont spécifiques</strong> et ne rentrent pas dans les cases d'un logiciel standard</li>
        <li>La technologie est un <strong>avantage concurrentiel</strong> pour votre entreprise</li>
        <li>Vous avez une <strong>vision de croissance</strong> et votre outil doit évoluer avec vous</li>
        <li>Vous avez besoin d'<strong>intégrations complexes</strong> avec votre écosystème existant</li>
        <li>Vous voulez <strong>réduire les coûts à moyen/long terme</strong> (plus de licences récurrentes élevées)</li>
      </ul>

      <h2 id="happi-accessible">Comment H'appi rend le sur-mesure accessible</h2>
      <p>
        Historiquement, le sur-mesure était réservé aux grandes entreprises à gros budgets.
        H'appi change la donne sur trois axes :
      </p>

      <div className="not-prose grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-blue-50 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-happi-blue mb-2">-70%</div>
          <p className="text-sm text-gray-600 font-medium">Prix vs marché traditionnel</p>
          <p className="text-xs text-gray-400 mt-2">Grâce aux infras cloud nouvelle génération et à notre stack open-source</p>
        </div>
        <div className="bg-green-50 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-happi-green mb-2">60%</div>
          <p className="text-sm text-gray-600 font-medium">Plus rapide à livrer</p>
          <p className="text-xs text-gray-400 mt-2">Organisation lean, composants réutilisables, CI/CD automatisé</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-happi-yellow mb-2">SaaS</div>
          <p className="text-sm text-gray-600 font-medium">Modèle évolutif</p>
          <p className="text-xs text-gray-400 mt-2">Start small, scale smart. Ajoutez des modules à la carte selon vos besoins</p>
        </div>
      </div>

      <p>
        Le vrai calcul n'est pas le coût initial, mais le <strong>coût total de possession</strong>.
        Une solution standardisée qui coûte 200€/mois en licence vous reviendra à 14 400€ sur 6 ans
        — sans compter les limitations et les workarounds. Une solution sur-mesure H'appi, avec un
        investissement initial optimisé et des coûts d'hébergement réduits, sera souvent plus
        économique à long terme.
      </p>

      {/* CTA */}
      <div className="not-prose bg-happi-gray rounded-2xl p-8 text-center mt-12">
        <h3 className="text-xl font-bold text-happi-dark mb-3">
          Besoin d'aide pour choisir ?
        </h3>
        <p className="text-gray-600 mb-6">
          Échangez gratuitement avec notre équipe pour évaluer la meilleure option pour votre projet.
        </p>
        <a
          href="/#demo"
          className="inline-flex items-center px-8 py-3 bg-happi-blue text-white rounded-lg hover:bg-opacity-90 transition-all font-medium"
        >
          Demander un premier échange gratuit
        </a>
      </div>
    </ArticleLayout>
  );
}
