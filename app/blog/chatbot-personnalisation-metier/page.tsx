import ArticleLayout from '@/components/blog/ArticleLayout';
import { getArticleBySlug, getRelatedArticles } from '@/lib/blog-data';

export const metadata = {
  title: "Chatbot personnalisé : comment H'appi adapte chaque bot à votre métier",
  description:
    "Découvrez pourquoi les chatbots génériques frustrent vos clients et comment la personnalisation sectorielle transforme l'expérience client.",
};

const article = getArticleBySlug('chatbot-personnalisation-metier')!;
const related = getRelatedArticles('chatbot-personnalisation-metier');

const sources = [
  { name: 'Solulab', url: 'https://www.solulab.com/top-generative-ai-chatbots/', detail: 'Top Generative AI Chatbots 2026' },
  { name: 'Le Big Data / Dydu', url: 'https://www.lebigdata.fr/tendances-chatbots-intelligence-artificielle-2025', detail: 'Innovations IA et chatbots 2025' },
  { name: 'Le Blog Relation Client', url: 'https://leblogdelarelationclient.com/les-chatbots-a-lere-de-lia-en-2025-bilan-et-perspectives-pour-2026/', detail: 'Bilan et perspectives 2026' },
  { name: 'Ringover', url: 'https://www.ringover.fr/blog/chatbot-personnalise', detail: 'Chatbot personnalisé : guide complet' },
];

const toc = [
  { id: 'marche', label: 'Un marché en explosion' },
  { id: 'probleme', label: 'Le problème des chatbots génériques' },
  { id: 'personnalisation', label: 'La personnalisation sectorielle H\'appi' },
  { id: 'methode', label: 'Notre méthode en 4 étapes' },
  { id: 'resultats', label: 'Résultats concrets' },
];

export default function Article1() {
  return (
    <ArticleLayout article={article} sources={sources} toc={toc} relatedArticles={related}>
      {/* Intro */}
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Le marché mondial des chatbots est valorisé à <strong>5,7 milliards de dollars</strong> en 2023
        et devrait dépasser <strong>47,1 milliards en 2030</strong>. Pourtant, la majorité des
        chatbots déployés aujourd'hui sont génériques, et les utilisateurs le ressentent.
        Chez H'appi, nous avons choisi une autre voie : la personnalisation radicale.
      </p>

      {/* Section 1 */}
      <h2 id="marche">Un marché en pleine explosion</h2>
      <p>
        L'usage des chatbots a augmenté de <strong>92%</strong> entre 2019 et 2020, et cette
        tendance s'est accélérée avec l'avènement de l'IA générative. Aujourd'hui,
        <strong> 82% des consommateurs</strong> préfèrent interagir avec un chatbot plutôt que
        d'attendre un conseiller humain.
      </p>
      <p>
        Le marché connaît un TCAC de <strong>22,3%</strong> et les chatbots IA générative se
        distinguent par leur compréhension contextuelle et leur capacité à gérer des requêtes
        complexes. Mais cette croissance s'accompagne d'un défi majeur : la qualité des réponses.
      </p>

      {/* Section 2 */}
      <h2 id="probleme">Le problème des chatbots génériques</h2>
      <p>
        Les chatbots standards souffrent de trois problèmes récurrents qui frustrent les utilisateurs :
      </p>

      <div className="not-prose grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-red-50 rounded-xl p-6 border border-red-100">
          <h4 className="font-bold text-red-700 mb-2">Hallucinations</h4>
          <p className="text-sm text-gray-600">
            Le bot invente des informations ou donne des réponses incorrectes car il ne connaît
            pas votre métier spécifique.
          </p>
        </div>
        <div className="bg-red-50 rounded-xl p-6 border border-red-100">
          <h4 className="font-bold text-red-700 mb-2">Réponses inadaptées</h4>
          <p className="text-sm text-gray-600">
            Le vocabulaire utilisé ne correspond pas à votre secteur. Un chatbot e-commerce
            qui parle comme un chatbot bancaire, ça se voit.
          </p>
        </div>
        <div className="bg-red-50 rounded-xl p-6 border border-red-100">
          <h4 className="font-bold text-red-700 mb-2">Pas d'escalade</h4>
          <p className="text-sm text-gray-600">
            Sans supervision humaine intelligente, le bot tourne en boucle sur les cas
            qu'il ne comprend pas.
          </p>
        </div>
      </div>

      <p>
        L'importance de la supervision humaine et de l'escalade intelligente est un enjeu
        identifié par l'ensemble des experts du secteur. Les chatbots ne remplaceront jamais
        l'humain — mais ils peuvent considérablement l'augmenter.
      </p>

      {/* Section 3 */}
      <h2 id="personnalisation">La personnalisation sectorielle H'appi</h2>
      <p>
        Chez H'appi, chaque chatbot est conçu avec une <strong>connaissance métier intégrée
        dès la conception</strong>. Concrètement, cela signifie :
      </p>

      <div className="not-prose space-y-4 my-8">
        <div className="bg-happi-gray rounded-xl p-6 flex items-start space-x-4">
          <span className="w-8 h-8 bg-happi-blue/10 text-happi-blue rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
          <div>
            <h4 className="font-bold text-happi-dark">Vocabulaire métier natif</h4>
            <p className="text-sm text-gray-600 mt-1">Le bot parle la langue de votre secteur dès le premier jour. Termes CX, processus supply chain, jargon e-commerce... tout est intégré.</p>
          </div>
        </div>
        <div className="bg-happi-gray rounded-xl p-6 flex items-start space-x-4">
          <span className="w-8 h-8 bg-happi-green/10 text-happi-green rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
          <div>
            <h4 className="font-bold text-happi-dark">Workflows adaptés</h4>
            <p className="text-sm text-gray-600 mt-1">Les parcours conversationnels sont conçus pour VOS processus. Pas de template générique, mais des scénarios qui reflètent votre réalité opérationnelle.</p>
          </div>
        </div>
        <div className="bg-happi-gray rounded-xl p-6 flex items-start space-x-4">
          <span className="w-8 h-8 bg-happi-yellow/10 text-happi-yellow rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
          <div>
            <h4 className="font-bold text-happi-dark">Apprentissage continu</h4>
            <p className="text-sm text-gray-600 mt-1">Le chatbot s'améliore à chaque interaction, apprenant les nuances de votre activité et affinant ses réponses en temps réel.</p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <h2 id="methode">Notre méthode en 4 étapes</h2>
      <p>
        Chaque projet H'appi suit un processus rigoureux pour garantir la pertinence du chatbot :
      </p>
      <ol>
        <li><strong>Immersion métier</strong> — Nous passons plusieurs jours à comprendre votre entreprise, vos processus, vos clients et vos pain points.</li>
        <li><strong>Conception sur-mesure</strong> — Nous créons les parcours conversationnels, le vocabulaire et les intégrations spécifiques à votre écosystème.</li>
        <li><strong>Déploiement et test</strong> — Première version fonctionnelle en 2-3 semaines avec itérations rapides basées sur vos retours.</li>
        <li><strong>Optimisation continue</strong> — Analyse des interactions, ajustement des réponses, et développement de nouvelles fonctionnalités SaaS basées sur les données collectées.</li>
      </ol>

      {/* Section 5 */}
      <h2 id="resultats">Résultats concrets</h2>

      <div className="not-prose bg-gradient-to-r from-happi-blue to-happi-green rounded-2xl p-8 text-white my-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">92%</div>
            <p className="text-sm text-white/80">Taux de satisfaction avec un assistant bien implémenté</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">-30%</div>
            <p className="text-sm text-white/80">Réduction des coûts par interaction</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">-40%</div>
            <p className="text-sm text-white/80">De tickets support en moins</p>
          </div>
        </div>
      </div>

      <p>
        Ces chiffres ne sont pas des promesses marketing : ils sont issus d'études sectorielles
        vérifiées. Un chatbot personnalisé, correctement déployé et supervisé, transforme
        réellement l'expérience client tout en réduisant les coûts.
      </p>

      <p>
        La clé ? <strong>La personnalisation sectorielle</strong>. Un chatbot qui comprend
        votre métier ne se contente pas de répondre — il anticipe, il contextualise, il crée
        de la valeur à chaque interaction.
      </p>

      {/* CTA */}
      <div className="not-prose bg-happi-gray rounded-2xl p-8 text-center mt-12">
        <h3 className="text-xl font-bold text-happi-dark mb-3">
          Prêt à découvrir un chatbot qui parle vraiment votre langue ?
        </h3>
        <p className="text-gray-600 mb-6">
          Demandez une démo gratuite et personnalisée pour votre secteur.
        </p>
        <a
          href="/#demo"
          className="inline-flex items-center px-8 py-3 bg-happi-blue text-white rounded-lg hover:bg-opacity-90 transition-all font-medium"
        >
          Demander une démo gratuite
        </a>
      </div>
    </ArticleLayout>
  );
}
