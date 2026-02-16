import ArticleLayout from '@/components/blog/ArticleLayout';
import { getArticleBySlug, getRelatedArticles } from '@/lib/blog-data';

export const metadata = {
  title: "Chatbots et RGPD : guide complet de conformité | H'appi",
  description:
    "RGPD + AI Act : tout ce que vous devez savoir pour déployer un chatbot conforme en France et en Europe. Checklist actionnable incluse.",
};

const article = getArticleBySlug('chatbots-rgpd-conformite-guide')!;
const related = getRelatedArticles('chatbots-rgpd-conformite-guide');

const sources = [
  { name: 'CNIL (officiel)', url: 'https://www.cnil.fr/fr/ia-et-rgpd-la-cnil-publie-ses-nouvelles-recommandations', detail: 'Recommandations IA et RGPD' },
  { name: 'Chatbot.fr', url: 'https://www.chatbot.fr/chatbot-rgpd/', detail: 'Mettre votre bot en conformité' },
  { name: 'Efficiant', url: 'https://www.efficiant.com/en/blog-post/chatbots-ia-et-rgpd-le-guide-pour-une-conformite-sans-faille', detail: 'Guide compliance RGPD' },
  { name: 'Enseignement.ai', url: 'https://www.enseignement.ai/rgpd-ia-act-2025-cadre-juridique-obligations-conformite/', detail: 'RGPD et IA Act 2025 - Fév. 2026' },
  { name: 'Botmind', url: 'https://www.botmind.io/fr/blog/ai-act-2025-impacts-cles-chatbots-ecommerce', detail: 'AI Act : impacts chatbots e-commerce' },
  { name: 'Entreprises.gouv.fr', url: 'https://www.entreprises.gouv.fr/fr/numerique/reglementation/le-reglement-europeen-sur-lintelligence-artificielle', detail: 'Règlement européen IA (officiel)' },
  { name: 'EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj', detail: 'Regulation (EU) 2024/1689' },
];

const toc = [
  { id: 'cadre', label: 'Le cadre réglementaire en 2026' },
  { id: 'obligations', label: 'Obligations pour les chatbots' },
  { id: 'checklist', label: 'Checklist de conformité' },
  { id: 'happi-conformite', label: 'Comment H\'appi vous protège' },
  { id: 'risques', label: 'Les risques de la non-conformité' },
];

export default function Article4() {
  return (
    <ArticleLayout article={article} sources={sources} toc={toc} relatedArticles={related}>
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Déployer un chatbot en France et en Europe en 2026, c'est naviguer entre deux cadres
        réglementaires majeurs : le <strong>RGPD</strong> et le tout nouveau <strong>AI Act</strong>.
        Ce guide vous explique vos obligations et vous fournit une checklist actionnable.
      </p>

      <h2 id="cadre">Le double cadre réglementaire en 2026</h2>

      <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h4 className="font-bold text-happi-blue mb-3">RGPD (depuis mai 2018)</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start space-x-2">
              <svg className="w-4 h-4 text-happi-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span>Protection des données personnelles</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg className="w-4 h-4 text-happi-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span>Consentement explicite obligatoire</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg className="w-4 h-4 text-happi-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span>Droit à l'oubli et portabilité</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg className="w-4 h-4 text-happi-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span>Amendes : jusqu'à 4% du CA ou 20M€</span>
            </li>
          </ul>
        </div>
        <div className="bg-green-50 rounded-xl p-6 border border-green-100">
          <h4 className="font-bold text-happi-green mb-3">AI Act (août 2024)</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start space-x-2">
              <svg className="w-4 h-4 text-happi-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span>Premier cadre mondial sur l'IA</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg className="w-4 h-4 text-happi-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span>Classification par niveau de risque</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg className="w-4 h-4 text-happi-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span>Transparence et explicabilité</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg className="w-4 h-4 text-happi-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span>Amendes : jusqu'à 7% du CA ou 35M€</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 id="obligations">Obligations spécifiques pour les chatbots</h2>
      <h3>Collecte de données</h3>
      <ul>
        <li><strong>Minimisation</strong> : ne collecter que les données strictement nécessaires</li>
        <li><strong>Transparence</strong> : informer clairement l'utilisateur de ce qui est collecté</li>
        <li><strong>Consentement</strong> : opt-in explicite, pas de cases pré-cochées</li>
      </ul>

      <h3>Traitement et stockage</h3>
      <ul>
        <li>Hébergement en <strong>Europe</strong> (idéalement en France)</li>
        <li><strong>Chiffrement</strong> des données sensibles</li>
        <li>Durée de conservation <strong>limitée et justifiée</strong></li>
        <li>Procédures d'<strong>effacement sur demande</strong></li>
      </ul>

      <h3>Transparence AI Act</h3>
      <ul>
        <li><strong>Informer</strong> que l'interlocuteur est un bot, pas un humain</li>
        <li><strong>Expliquer</strong> comment les réponses sont générées</li>
        <li>Permettre l'<strong>escalade vers un humain</strong> à tout moment</li>
        <li>Maintenir une <strong>documentation technique</strong> accessible</li>
      </ul>

      <h2 id="checklist">Checklist de conformité</h2>

      <div className="not-prose space-y-6 my-8">
        <div className="bg-happi-gray rounded-xl p-6">
          <h4 className="font-bold text-happi-dark mb-4">Avant le déploiement</h4>
          <div className="space-y-2">
            {['Analyse d\'impact sur la protection des données (AIPD)', 'Documentation technique du chatbot', 'Choix d\'hébergement européen conforme', 'Rédaction politique de confidentialité', 'Mécanisme de consentement implémenté'].map((item, i) => (
              <label key={i} className="flex items-center space-x-3 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-happi-blue rounded border-gray-300" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-happi-gray rounded-xl p-6">
          <h4 className="font-bold text-happi-dark mb-4">Pendant l'utilisation</h4>
          <div className="space-y-2">
            {['Bannière d\'information visible ("Je suis un assistant IA")', 'Possibilité d\'escalade humaine à tout moment', 'Logs d\'interactions conservés selon RGPD', 'Monitoring des biais et erreurs', 'Support pour demandes d\'accès/effacement'].map((item, i) => (
              <label key={i} className="flex items-center space-x-3 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-happi-green rounded border-gray-300" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-happi-gray rounded-xl p-6">
          <h4 className="font-bold text-happi-dark mb-4">Maintenance continue</h4>
          <div className="space-y-2">
            {['Audits de conformité trimestriels', 'Mises à jour de sécurité régulières', 'Formation des équipes', 'Veille réglementaire (RGPD + AI Act)', 'Tests de performance éthique'].map((item, i) => (
              <label key={i} className="flex items-center space-x-3 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-happi-yellow rounded border-gray-300" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <h2 id="happi-conformite">Comment H'appi garantit votre conformité</h2>
      <p>
        Chez H'appi, la conformité n'est pas un add-on : elle est intégrée par design
        (<strong>Privacy by Design</strong>).
      </p>

      <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
        {[
          { title: 'Hébergement européen', desc: 'Hetzner, Scaleway, OVHcloud — vos données restent en Europe' },
          { title: 'Chiffrement bout en bout', desc: 'Toutes les données sensibles sont chiffrées en transit et au repos' },
          { title: 'Dossier de conformité', desc: 'Fourni à chaque client avec détail des mesures et traitements' },
          { title: 'Audits trimestriels', desc: 'Tests de sécurité et mises à jour de conformité inclus' },
          { title: 'Sauvegardes quotidiennes', desc: 'Backups automatiques avec rétention longue durée' },
          { title: 'Mises à jour réglementaires', desc: 'Adaptations automatiques aux évolutions RGPD et AI Act' },
        ].map((item, i) => (
          <div key={i} className="bg-green-50 rounded-lg p-4 border border-green-100">
            <h4 className="font-semibold text-happi-dark text-sm">{item.title}</h4>
            <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 id="risques">Les risques de la non-conformité</h2>

      <div className="not-prose bg-red-50 rounded-xl p-6 border border-red-100 my-8">
        <h4 className="font-bold text-red-700 mb-4">Ne prenez pas ces risques</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-red-700 text-sm">Amendes RGPD</p>
            <p className="text-xs text-gray-600">Jusqu'à 20M€ ou 4% du CA mondial</p>
          </div>
          <div>
            <p className="font-semibold text-red-700 text-sm">Amendes AI Act</p>
            <p className="text-xs text-gray-600">Jusqu'à 35M€ ou 7% du CA mondial</p>
          </div>
          <div>
            <p className="font-semibold text-red-700 text-sm">Perte de confiance</p>
            <p className="text-xs text-gray-600">76% des consommateurs fuient les entreprises non-conformes</p>
          </div>
          <div>
            <p className="font-semibold text-red-700 text-sm">Interdiction</p>
            <p className="text-xs text-gray-600">Possible interdiction d'exploitation en cas de violation grave</p>
          </div>
        </div>
      </div>

      <p>
        La conformité n'est pas qu'une obligation légale : c'est un <strong>avantage
        compétitif</strong>. Les clients font confiance aux entreprises qui protègent
        leurs données. Avec H'appi, vous montrez que vous prenez ce sujet au sérieux
        — sans que cela ne vous coûte plus cher.
      </p>

      {/* CTA */}
      <div className="not-prose bg-happi-gray rounded-2xl p-8 text-center mt-12">
        <h3 className="text-xl font-bold text-happi-dark mb-3">
          Déployez un chatbot 100% conforme
        </h3>
        <p className="text-gray-600 mb-6">
          Chaque solution H'appi inclut un dossier de conformité complet RGPD + AI Act.
        </p>
        <a
          href="/#demo"
          className="inline-flex items-center px-8 py-3 bg-happi-blue text-white rounded-lg hover:bg-opacity-90 transition-all font-medium"
        >
          Demander un audit de conformité gratuit
        </a>
      </div>
    </ArticleLayout>
  );
}
