import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getRelatedArticles } from '@/lib/blog-data';
import ArticleLayout from '@/components/blog/ArticleLayout';
import type { Article } from '@/lib/blog-data';

const slugs = [
  'chatbot-personnalisation-metier',
  'application-sur-mesure-vs-standardisee',
  'ia-generative-2026-tendances',
  'chatbots-rgpd-conformite-guide',
];

export async function generateStaticParams() {
  const locales = ['fr', 'en'];
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(locale, slug);
  if (!article) return {};
  return {
    title: `${article.title} — H'appi Blog`,
    description: article.excerpt,
  };
}

// ─── Article bodies ───────────────────────────────────────────────────────────

function Article1_FR() {
  return (
    <>
      <h2 id="probleme">Le problème des chatbots génériques</h2>
      <p>
        Un chatbot générique, c&apos;est un peu comme un commercial qui ne connaît pas votre secteur. Il répond, certes, mais à côté. Il utilise des termes vagues, propose des solutions inadaptées, et finit par frustrer le client plutôt que de l&apos;aider.
      </p>
      <p>
        Selon Gartner, <strong>64 % des clients préfèrent ne pas interagir du tout avec un chatbot</strong> plutôt que d&apos;utiliser un qui ne comprend pas leur problème. Pourtant, les entreprises continuent de déployer des solutions copier-coller, espérant que le volume comblera le manque de pertinence.
      </p>

      <h2 id="personnalisation">Ce que signifie vraiment la personnalisation</h2>
      <p>
        La personnalisation ne se limite pas à afficher le prénom du client ou à changer la couleur du bouton. C&apos;est une question de <strong>connaissance métier profonde</strong> intégrée directement dans le modèle d&apos;IA.
      </p>
      <p>Un chatbot H&apos;appi pour un transporteur logistique connaît :</p>
      <ul>
        <li>La terminologie du secteur (BL, CMR, ETD, ETA, INCOTERMS)</li>
        <li>Les processus typiques de livraison et de réclamation</li>
        <li>Les intégrations avec les TMS et WMS couramment utilisés</li>
        <li>Les réponses légales et contractuelles appropriées à chaque type de litige</li>
      </ul>
      <p>
        Ce niveau de précision s&apos;obtient en deux étapes : une phase de découverte approfondie avec votre équipe, suivie d&apos;un fine-tuning du modèle sur vos données réelles.
      </p>

      <h2 id="processus">Notre processus de personnalisation</h2>
      <p>
        Chaque projet H&apos;appi commence par un <strong>atelier de cadrage</strong> d&apos;une à deux semaines. On documente :
      </p>
      <ul>
        <li>Les 20 à 30 requêtes les plus fréquentes de vos clients</li>
        <li>Le vocabulaire spécifique à votre activité</li>
        <li>Les cas limites et les escalades obligatoires vers un humain</li>
        <li>Le ton de voix souhaité (formel, décontracté, technique)</li>
      </ul>
      <p>
        À partir de ce matériau, on construit un <strong>corpus d&apos;entraînement</strong> qui permet au modèle d&apos;apprendre votre réalité opérationnelle. Le résultat : un chatbot qui semble avoir travaillé chez vous depuis des années.
      </p>

      <h2 id="resultats">Ce que ça change concrètement</h2>
      <p>
        La différence entre un chatbot générique et un chatbot métier se mesure à des indicateurs précis :
      </p>
      <ul>
        <li><strong>Taux de résolution au premier contact</strong> : un bot générique tourne autour de 30-40 %. Un bot métier bien entraîné peut dépasser 70 %.</li>
        <li><strong>Taux d&apos;escalade</strong> : moins de transferts vers les agents humains = moins de coûts, moins d&apos;attente.</li>
        <li><strong>Satisfaction client</strong> : les utilisateurs perçoivent immédiatement qu&apos;ils parlent à quelque chose qui les comprend.</li>
      </ul>

      <h2 id="transparence">Notre position honnête</h2>
      <p>
        H&apos;appi est une jeune startup. Nous ne prétendons pas avoir des centaines de cas clients. Ce que nous avons, c&apos;est une méthode rigoureuse, des fondateurs qui ont travaillé sur des projets IA en entreprise, et la conviction que la personnalisation est non négociable.
      </p>
      <p>
        Si vous envisagez un chatbot pour votre activité, on préfère passer 30 minutes à discuter de votre situation réelle plutôt que de vous envoyer une plaquette commerciale. <strong>Contactez-nous</strong> — c&apos;est gratuit et sans engagement.
      </p>
    </>
  );
}

function Article1_EN() {
  return (
    <>
      <h2 id="probleme">The problem with generic chatbots</h2>
      <p>
        A generic chatbot is a bit like a salesperson who doesn&apos;t know your industry. They respond, sure, but beside the point. They use vague terms, offer unsuitable solutions, and end up frustrating the customer rather than helping.
      </p>
      <p>
        According to Gartner, <strong>64% of customers prefer not to interact with a chatbot at all</strong> rather than use one that doesn&apos;t understand their problem. Yet companies continue to deploy copy-paste solutions, hoping that volume will make up for lack of relevance.
      </p>

      <h2 id="personnalisation">What personalisation really means</h2>
      <p>
        Personalisation isn&apos;t just about displaying the customer&apos;s first name or changing the button colour. It&apos;s about <strong>deep domain knowledge</strong> built directly into the AI model.
      </p>
      <p>An H&apos;appi chatbot for a logistics carrier knows:</p>
      <ul>
        <li>Industry terminology (BL, CMR, ETD, ETA, INCOTERMS)</li>
        <li>Typical delivery and claims processes</li>
        <li>Common TMS and WMS integrations</li>
        <li>Appropriate legal and contractual responses for each type of dispute</li>
      </ul>

      <h2 id="processus">Our personalisation process</h2>
      <p>
        Every H&apos;appi project starts with a <strong>scoping workshop</strong> lasting one to two weeks. We document:
      </p>
      <ul>
        <li>Your customers&apos; 20 to 30 most frequent requests</li>
        <li>Vocabulary specific to your business</li>
        <li>Edge cases and mandatory escalations to a human</li>
        <li>The desired tone of voice (formal, casual, technical)</li>
      </ul>

      <h2 id="resultats">What it changes in practice</h2>
      <p>
        The difference between a generic chatbot and a domain-specific one is measurable:
      </p>
      <ul>
        <li><strong>First contact resolution rate</strong>: a generic bot sits around 30-40%. A well-trained domain bot can exceed 70%.</li>
        <li><strong>Escalation rate</strong>: fewer transfers to human agents = lower costs, less waiting.</li>
        <li><strong>Customer satisfaction</strong>: users immediately sense they&apos;re talking to something that understands them.</li>
      </ul>

      <h2 id="transparence">Our honest position</h2>
      <p>
        H&apos;appi is a young startup. We don&apos;t claim to have hundreds of client cases. What we have is a rigorous method, founders who have worked on AI projects in enterprise settings, and the conviction that personalisation is non-negotiable.
      </p>
    </>
  );
}

function Article2_FR() {
  return (
    <>
      <h2 id="definitions">Définir les termes</h2>
      <p>
        Avant de comparer, précisons ce qu&apos;on entend par chaque approche :
      </p>
      <ul>
        <li><strong>Solution standardisée</strong> : un logiciel préconçu (SaaS, plateforme no-code, template) que vous configurez selon des options prédéfinies. Exemples : Intercom, Zendesk, Tidio.</li>
        <li><strong>Application sur-mesure</strong> : développée spécifiquement pour vous, de A à Z, selon vos processus, votre structure de données et vos contraintes techniques.</li>
      </ul>

      <h2 id="standard">Quand choisir une solution standardisée</h2>
      <p>Une solution standard est pertinente si :</p>
      <ul>
        <li>Votre besoin correspond exactement aux fonctionnalités disponibles</li>
        <li>Vous avez besoin d&apos;aller vite (mise en production en quelques jours)</li>
        <li>Votre budget est très limité (&lt; 500 €/mois)</li>
        <li>Votre activité est générique et n&apos;a pas de processus atypiques</li>
        <li>Vous acceptez de vous adapter à l&apos;outil plutôt que l&apos;inverse</li>
      </ul>

      <h2 id="sur-mesure">Quand le sur-mesure s&apos;impose</h2>
      <p>Le sur-mesure devient incontournable quand :</p>
      <ul>
        <li>Vos processus sont spécifiques et les solutions du marché ne les couvrent pas</li>
        <li>Vous avez des contraintes d&apos;intégration fortes (ERP, CRM propriétaire, base de données legacy)</li>
        <li>La solution doit évoluer avec votre activité sur plusieurs années</li>
        <li>La confidentialité des données est critique (données clients sensibles, secrets commerciaux)</li>
        <li>Vous cherchez un avantage compétitif que vos concurrents n&apos;ont pas</li>
      </ul>

      <h2 id="comparatif">Tableau comparatif</h2>
      <p>
        Voici une vue d&apos;ensemble objective des deux approches sur les critères qui comptent le plus pour les PME et ETI françaises :
      </p>
      <ul>
        <li><strong>Délai de déploiement</strong> — Standard : jours à semaines / Sur-mesure : semaines à mois</li>
        <li><strong>Coût initial</strong> — Standard : faible / Sur-mesure : moyen à élevé</li>
        <li><strong>Coût récurrent</strong> — Standard : élevé (abonnement) / Sur-mesure : faible à nul</li>
        <li><strong>Flexibilité</strong> — Standard : limitée par la roadmap éditeur / Sur-mesure : totale</li>
        <li><strong>Propriété du code</strong> — Standard : non / Sur-mesure : oui</li>
        <li><strong>Intégrations spécifiques</strong> — Standard : API standards uniquement / Sur-mesure : tout ce qui est techniquement possible</li>
      </ul>

      <h2 id="cout-reel">Le vrai coût sur 5 ans</h2>
      <p>
        Le piège classique : comparer le coût initial sans regarder le total sur la durée. Un outil SaaS à 300 €/mois coûte <strong>18 000 € sur 5 ans</strong> — sans que vous possédiez quoi que ce soit à la fin.
      </p>
      <p>
        Une application sur-mesure à 8 000 € d&apos;implémentation + 200 €/mois de maintenance = <strong>20 000 € sur 5 ans</strong>, mais vous êtes propriétaire du code, vous pouvez changer de prestataire, et la solution évolue exactement comme vous le souhaitez.
      </p>

      <h2 id="conclusion">Comment décider</h2>
      <p>
        Notre recommandation : commencez par un standard si vous testez un concept ou si votre besoin est vraiment générique. Passez au sur-mesure dès que vous avez validé que le standard vous limite, ou dès le départ si vous avez des contraintes d&apos;intégration ou de confidentialité.
      </p>
      <p>
        H&apos;appi propose les deux : des chatbots sur-mesure pour les entreprises qui ont des processus spécifiques, et des configurations rapides pour celles qui veulent démarrer vite. <strong>Discutons de votre situation.</strong>
      </p>
    </>
  );
}

function Article2_EN() {
  return (
    <>
      <h2 id="definitions">Defining the terms</h2>
      <p>Before comparing, let&apos;s clarify what each approach means:</p>
      <ul>
        <li><strong>Standardised solution</strong>: pre-built software (SaaS, no-code platform, template) you configure within predefined options. Examples: Intercom, Zendesk, Tidio.</li>
        <li><strong>Custom application</strong>: developed specifically for you, from scratch, according to your processes, data structure, and technical constraints.</li>
      </ul>

      <h2 id="standard">When to choose a standardised solution</h2>
      <p>A standard solution makes sense if:</p>
      <ul>
        <li>Your need matches the available features exactly</li>
        <li>You need to move fast (go live in days)</li>
        <li>Your budget is very limited (&lt; €500/month)</li>
        <li>Your activity is generic with no unusual processes</li>
        <li>You&apos;re willing to adapt to the tool rather than the other way around</li>
      </ul>

      <h2 id="sur-mesure">When custom becomes necessary</h2>
      <p>Custom becomes essential when:</p>
      <ul>
        <li>Your processes are specific and market solutions don&apos;t cover them</li>
        <li>You have strong integration constraints (ERP, proprietary CRM, legacy database)</li>
        <li>The solution must evolve with your business over several years</li>
        <li>Data confidentiality is critical</li>
        <li>You&apos;re looking for a competitive advantage your competitors don&apos;t have</li>
      </ul>

      <h2 id="cout-reel">The real 5-year cost</h2>
      <p>
        The classic trap: comparing initial cost without looking at the total over time. A SaaS tool at €300/month costs <strong>€18,000 over 5 years</strong> — without owning anything at the end.
      </p>
      <p>
        A custom application at €8,000 implementation + €200/month maintenance = <strong>€20,000 over 5 years</strong>, but you own the code, can switch providers, and the solution evolves exactly as you wish.
      </p>

      <h2 id="conclusion">How to decide</h2>
      <p>
        Our recommendation: start with a standard if you&apos;re testing a concept. Switch to custom as soon as the standard limits you, or from the start if you have integration or confidentiality constraints.
      </p>
    </>
  );
}

function Article3_FR() {
  return (
    <>
      <h2 id="contexte">Pourquoi 2026 est une année charnière</h2>
      <p>
        L&apos;IA générative a explosé en 2023-2024 avec ChatGPT et ses concurrents. Mais les premiers déploiements en entreprise ont souvent déçu : hallucinations, manque de contexte, réponses génériques. En 2026, une deuxième vague d&apos;innovations corrige ces lacunes et rend les chatbots véritablement utiles au quotidien.
      </p>

      <h2 id="avance1">1. Le support proactif</h2>
      <p>
        Les chatbots passent de réactifs à proactifs. Au lieu d&apos;attendre que le client pose une question, le bot anticipe : &quot;Votre livraison est en retard, voici les options disponibles&quot;, &quot;Votre abonnement expire dans 3 jours, souhaitez-vous le renouveler ?&quot;
      </p>
      <p>
        Cette évolution est rendue possible par la connexion en temps réel aux systèmes opérationnels (CRM, OMS, TMS) et par des modèles capables d&apos;interpréter des signaux comportementaux.
      </p>

      <h2 id="avance2">2. La mémoire conversationnelle longue durée</h2>
      <p>
        Les chatbots de première génération oubliaient tout entre deux sessions. En 2026, les modèles maintiennent un <strong>contexte client persistant</strong> : historique des échanges, préférences déclarées, problèmes passés. Chaque interaction s&apos;appuie sur toutes les précédentes.
      </p>

      <h2 id="avance3">3. La multimodalité</h2>
      <p>
        Au-delà du texte : les chatbots comprennent maintenant les images, les PDF, les tableaux et même les captures d&apos;écran. Un client peut envoyer une photo de sa facture et demander &quot;pourquoi ce montant ?&quot; — le bot analyse l&apos;image et répond avec précision.
      </p>

      <h2 id="avance4">4. La détection des émotions</h2>
      <p>
        Des signaux linguistiques permettent aux modèles de détecter la frustration, l&apos;urgence ou la détresse dans le texte d&apos;un client. Quand un utilisateur semble agacé, le bot adapte son ton et peut déclencher automatiquement une escalade vers un humain.
      </p>

      <h2 id="avance5">5. Les agents autonomes</h2>
      <p>
        La nouveauté la plus disruptive : les chatbots qui <strong>agissent</strong> au lieu de simplement informer. Un client demande un remboursement — le bot vérifie les conditions, crée la demande dans le back-office, envoie un email de confirmation et met à jour le CRM, le tout sans intervention humaine.
      </p>

      <h2 id="happi">Ce que ça signifie pour H&apos;appi</h2>
      <p>
        Nous intégrons progressivement ces avancées dans nos déploiements. Notre parti-pris : n&apos;adopter une nouveauté que lorsqu&apos;elle est suffisamment mature pour être fiable en production. Pas de démo impressionnante qui plante en production — uniquement ce qui tient la route.
      </p>
    </>
  );
}

function Article3_EN() {
  return (
    <>
      <h2 id="contexte">Why 2026 is a pivotal year</h2>
      <p>
        Generative AI exploded in 2023-2024 with ChatGPT and its competitors. But early enterprise deployments often disappointed: hallucinations, lack of context, generic answers. In 2026, a second wave of innovations corrects these shortcomings and makes chatbots genuinely useful day-to-day.
      </p>

      <h2 id="avance1">1. Proactive support</h2>
      <p>
        Chatbots are moving from reactive to proactive. Instead of waiting for the customer to ask a question, the bot anticipates: &quot;Your delivery is delayed, here are the available options&quot;, &quot;Your subscription expires in 3 days, would you like to renew?&quot;
      </p>

      <h2 id="avance2">2. Long-term conversational memory</h2>
      <p>
        First-generation chatbots forgot everything between sessions. In 2026, models maintain a <strong>persistent client context</strong>: exchange history, declared preferences, past problems. Each interaction builds on all previous ones.
      </p>

      <h2 id="avance3">3. Multimodality</h2>
      <p>
        Beyond text: chatbots now understand images, PDFs, tables, and even screenshots. A customer can send a photo of their invoice and ask &quot;why this amount?&quot; — the bot analyses the image and responds precisely.
      </p>

      <h2 id="avance4">4. Emotion detection</h2>
      <p>
        Linguistic signals allow models to detect frustration, urgency, or distress in a customer&apos;s text. When a user seems annoyed, the bot adapts its tone and can automatically trigger escalation to a human.
      </p>

      <h2 id="avance5">5. Autonomous agents</h2>
      <p>
        The most disruptive innovation: chatbots that <strong>act</strong> instead of merely informing. A customer requests a refund — the bot checks conditions, creates the request in the back-office, sends a confirmation email, and updates the CRM, all without human intervention.
      </p>
    </>
  );
}

function Article4_FR() {
  return (
    <>
      <h2 id="contexte">Le cadre réglementaire en 2026</h2>
      <p>
        Déployer un chatbot en France en 2026 implique de naviguer dans deux cadres réglementaires superposés :
      </p>
      <ul>
        <li><strong>Le RGPD</strong> (Règlement Général sur la Protection des Données), en vigueur depuis 2018, qui s&apos;applique à tout traitement de données personnelles de citoyens européens.</li>
        <li><strong>L&apos;AI Act européen</strong>, entré en vigueur en 2024, qui classe les systèmes d&apos;IA par niveau de risque et impose des obligations spécifiques aux systèmes à haut risque.</li>
      </ul>

      <h2 id="rgpd-chatbot">Ce que le RGPD impose aux chatbots</h2>
      <p>Un chatbot traite des données personnelles dès qu&apos;il reçoit le nom, l&apos;email, le numéro de commande ou toute autre information identifiante d&apos;un utilisateur. Les obligations principales sont :</p>
      <ul>
        <li><strong>Base légale</strong> : vous devez avoir un fondement juridique pour traiter ces données (consentement, exécution d&apos;un contrat, intérêt légitime).</li>
        <li><strong>Information de l&apos;utilisateur</strong> : l&apos;utilisateur doit savoir qu&apos;il parle à un chatbot (pas à un humain), quelles données sont collectées et dans quel but.</li>
        <li><strong>Durée de conservation</strong> : les conversations ne doivent pas être conservées indéfiniment. Définissez une politique de rétention claire.</li>
        <li><strong>Droits des personnes</strong> : accès, rectification, effacement des données sur demande.</li>
        <li><strong>Sécurité</strong> : chiffrement des données en transit et au repos, contrôle d&apos;accès aux logs.</li>
      </ul>

      <h2 id="ai-act">L&apos;AI Act et les chatbots</h2>
      <p>
        L&apos;AI Act classe les chatbots en catégorie de <strong>risque limité</strong> dans la plupart des cas d&apos;usage CX et supply chain. Cela implique principalement une obligation de transparence : l&apos;utilisateur doit savoir qu&apos;il interagit avec une IA.
      </p>
      <p>
        Exception : si votre chatbot est utilisé dans des contextes à haut risque (décisions médicales, crédit, recrutement), les obligations sont plus lourdes.
      </p>

      <h2 id="checklist">Checklist pratique</h2>
      <ul>
        <li>☑ Mention explicite &quot;Vous discutez avec un assistant automatique&quot; dès le début de la conversation</li>
        <li>☑ Politique de confidentialité accessible depuis l&apos;interface du chatbot</li>
        <li>☑ Durée de conservation des logs définie et documentée</li>
        <li>☑ Procédure de traitement des demandes d&apos;exercice de droits</li>
        <li>☑ Registre des activités de traitement mis à jour (obligation RGPD)</li>
        <li>☑ Chiffrement TLS pour les échanges, chiffrement au repos pour les logs</li>
        <li>☑ Pas de transfert de données hors UE sans garanties appropriées (si hébergé sur un cloud US, vérifier les clauses)</li>
        <li>☑ DPA (Data Processing Agreement) signé avec votre prestataire chatbot</li>
      </ul>

      <h2 id="happi-conformite">Comment H&apos;appi aborde la conformité</h2>
      <p>
        Par défaut, tous nos déploiements incluent : mention de transparence IA, politique de rétention configurable, hébergement sur infrastructure européenne, et DPA disponible sur demande. La conformité n&apos;est pas un add-on — elle fait partie de la conception.
      </p>
      <p>
        Si vous avez des questions spécifiques sur la conformité de votre projet, <strong>contactez-nous directement</strong>. Nous préférons répondre honnêtement aux questions difficiles plutôt que de vous vendre une conformité de façade.
      </p>
    </>
  );
}

function Article4_EN() {
  return (
    <>
      <h2 id="contexte">The regulatory framework in 2026</h2>
      <p>Deploying a chatbot in Europe in 2026 means navigating two overlapping regulatory frameworks:</p>
      <ul>
        <li><strong>GDPR</strong> (General Data Protection Regulation), in force since 2018, applying to all personal data processing of European citizens.</li>
        <li><strong>The EU AI Act</strong>, which entered into force in 2024, classifying AI systems by risk level and imposing specific obligations on high-risk systems.</li>
      </ul>

      <h2 id="rgpd-chatbot">What GDPR requires from chatbots</h2>
      <p>A chatbot processes personal data as soon as it receives a name, email, order number, or any identifying information. Key obligations:</p>
      <ul>
        <li><strong>Legal basis</strong>: you must have a legal ground for processing (consent, contract performance, legitimate interest).</li>
        <li><strong>User information</strong>: the user must know they&apos;re talking to a chatbot, what data is collected and why.</li>
        <li><strong>Retention period</strong>: conversations must not be kept indefinitely. Define a clear retention policy.</li>
        <li><strong>Data subject rights</strong>: access, rectification, erasure on request.</li>
        <li><strong>Security</strong>: encryption in transit and at rest, access control on logs.</li>
      </ul>

      <h2 id="ai-act">The AI Act and chatbots</h2>
      <p>
        The AI Act classifies chatbots as <strong>limited risk</strong> in most CX and supply chain use cases. This mainly requires transparency: the user must know they&apos;re interacting with an AI.
      </p>

      <h2 id="checklist">Practical checklist</h2>
      <ul>
        <li>☑ Explicit mention &quot;You are chatting with an automated assistant&quot; at the start</li>
        <li>☑ Privacy policy accessible from the chatbot interface</li>
        <li>☑ Log retention period defined and documented</li>
        <li>☑ Data subject request handling procedure in place</li>
        <li>☑ Processing register updated (GDPR obligation)</li>
        <li>☑ TLS encryption for exchanges, at-rest encryption for logs</li>
        <li>☑ No data transfer outside EU without appropriate guarantees</li>
        <li>☑ DPA signed with your chatbot provider</li>
      </ul>
    </>
  );
}

// ─── TOC & Sources per slug ───────────────────────────────────────────────────

const tocData: Record<string, Record<string, { id: string; label: string }[]>> = {
  'chatbot-personnalisation-metier': {
    fr: [
      { id: 'probleme', label: 'Le problème des chatbots génériques' },
      { id: 'personnalisation', label: 'Ce que signifie vraiment la personnalisation' },
      { id: 'processus', label: 'Notre processus de personnalisation' },
      { id: 'resultats', label: 'Ce que ça change concrètement' },
      { id: 'transparence', label: 'Notre position honnête' },
    ],
    en: [
      { id: 'probleme', label: 'The problem with generic chatbots' },
      { id: 'personnalisation', label: 'What personalisation really means' },
      { id: 'processus', label: 'Our personalisation process' },
      { id: 'resultats', label: 'What it changes in practice' },
      { id: 'transparence', label: 'Our honest position' },
    ],
  },
  'application-sur-mesure-vs-standardisee': {
    fr: [
      { id: 'definitions', label: 'Définir les termes' },
      { id: 'standard', label: 'Quand choisir une solution standardisée' },
      { id: 'sur-mesure', label: "Quand le sur-mesure s'impose" },
      { id: 'cout-reel', label: 'Le vrai coût sur 5 ans' },
      { id: 'conclusion', label: 'Comment décider' },
    ],
    en: [
      { id: 'definitions', label: 'Defining the terms' },
      { id: 'standard', label: 'When to choose a standardised solution' },
      { id: 'sur-mesure', label: 'When custom becomes necessary' },
      { id: 'cout-reel', label: 'The real 5-year cost' },
      { id: 'conclusion', label: 'How to decide' },
    ],
  },
  'ia-generative-2026-tendances': {
    fr: [
      { id: 'contexte', label: 'Pourquoi 2026 est une année charnière' },
      { id: 'avance1', label: '1. Le support proactif' },
      { id: 'avance2', label: '2. La mémoire conversationnelle longue durée' },
      { id: 'avance3', label: '3. La multimodalité' },
      { id: 'avance4', label: '4. La détection des émotions' },
      { id: 'avance5', label: '5. Les agents autonomes' },
      { id: 'happi', label: "Ce que ça signifie pour H'appi" },
    ],
    en: [
      { id: 'contexte', label: 'Why 2026 is a pivotal year' },
      { id: 'avance1', label: '1. Proactive support' },
      { id: 'avance2', label: '2. Long-term conversational memory' },
      { id: 'avance3', label: '3. Multimodality' },
      { id: 'avance4', label: '4. Emotion detection' },
      { id: 'avance5', label: '5. Autonomous agents' },
    ],
  },
  'chatbots-rgpd-conformite-guide': {
    fr: [
      { id: 'contexte', label: 'Le cadre réglementaire en 2026' },
      { id: 'rgpd-chatbot', label: 'Ce que le RGPD impose aux chatbots' },
      { id: 'ai-act', label: "L'AI Act et les chatbots" },
      { id: 'checklist', label: 'Checklist pratique' },
      { id: 'happi-conformite', label: "Comment H'appi aborde la conformité" },
    ],
    en: [
      { id: 'contexte', label: 'The regulatory framework in 2026' },
      { id: 'rgpd-chatbot', label: 'What GDPR requires from chatbots' },
      { id: 'ai-act', label: 'The AI Act and chatbots' },
      { id: 'checklist', label: 'Practical checklist' },
    ],
  },
};

const sourcesData: Record<string, { name: string; url: string; detail: string }[]> = {
  'chatbot-personnalisation-metier': [
    { name: 'Gartner — Chatbot User Survey 2024', url: 'https://www.gartner.com', detail: '64 % of customers prefer no chatbot over a bad one' },
    { name: 'IBM — AI Chatbot Statistics', url: 'https://www.ibm.com/blog/chatbot-statistics', detail: 'Domain-specific bots show 2x higher CSAT scores' },
    { name: 'McKinsey — The State of AI 2025', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai', detail: 'AI personalisation drives up to 40 % revenue uplift in CX' },
  ],
  'application-sur-mesure-vs-standardisee': [
    { name: 'Gartner — Build vs Buy Framework', url: 'https://www.gartner.com', detail: 'Decision framework for enterprise software procurement' },
    { name: 'Forrester — Total Economic Impact Methodology', url: 'https://www.forrester.com', detail: 'TCO analysis over 3-5 year horizons' },
    { name: 'Deloitte — Digital Transformation Survey 2024', url: 'https://www2.deloitte.com', detail: 'Integration complexity as #1 barrier to digital adoption' },
  ],
  'ia-generative-2026-tendances': [
    { name: 'OpenAI — GPT-4o Technical Report', url: 'https://openai.com/index/hello-gpt-4o', detail: 'Multimodal capabilities and real-time audio/video' },
    { name: 'Anthropic — Claude 3.5 Research', url: 'https://www.anthropic.com', detail: 'Long context window and agentic capabilities' },
    { name: 'MIT Technology Review — AI Agents 2025', url: 'https://www.technologyreview.com', detail: 'Autonomous AI agents entering enterprise workflows' },
    { name: 'Stanford HAI — AI Index Report 2025', url: 'https://aiindex.stanford.edu', detail: 'Annual benchmark of AI capabilities and adoption' },
  ],
  'chatbots-rgpd-conformite-guide': [
    { name: 'CNIL — Recommandations IA 2024', url: 'https://www.cnil.fr/fr/intelligence-artificielle', detail: 'Recommandations françaises sur l\'IA et les données personnelles' },
    { name: 'EU AI Act — Official Text', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689', detail: 'Règlement (UE) 2024/1689 — Règles sur l\'IA' },
    { name: 'EDPB — Guidelines on Chatbots', url: 'https://www.edpb.europa.eu', detail: 'European Data Protection Board guidance on chatbot compliance' },
    { name: 'RGPD — Texte officiel', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679', detail: 'Règlement (UE) 2016/679 — RGPD' },
  ],
};

const contentMap: Record<string, Record<string, React.ReactNode>> = {
  'chatbot-personnalisation-metier': { fr: <Article1_FR />, en: <Article1_EN /> },
  'application-sur-mesure-vs-standardisee': { fr: <Article2_FR />, en: <Article2_EN /> },
  'ia-generative-2026-tendances': { fr: <Article3_FR />, en: <Article3_EN /> },
  'chatbots-rgpd-conformite-guide': { fr: <Article4_FR />, en: <Article4_EN /> },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const article = getArticleBySlug(locale, slug);
  if (!article) notFound();

  const relatedArticles = getRelatedArticles(locale, slug);
  const toc = tocData[slug]?.[locale] ?? tocData[slug]?.fr ?? [];
  const sources = sourcesData[slug] ?? [];
  const content = contentMap[slug]?.[locale] ?? contentMap[slug]?.fr ?? null;

  return (
    <ArticleLayout
      article={article as Article}
      sources={sources}
      toc={toc}
      relatedArticles={relatedArticles}
    >
      {content}
    </ArticleLayout>
  );
}
