import { notFound } from 'next/navigation';
import { getArticleBySlug, getRelatedArticles } from '@/lib/blog-data';
import ArticleLayout from '@/components/blog/ArticleLayout';
import type { Article } from '@/lib/blog-data';

const slugs = [
  'vrai-cout-livraison-ratee',
  'sav-ameublement-equipe-appels',
  'roi-chatbot-sav-mesure',
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

// ─── Priority 1 articles ─────────────────────────────────────────────────────

function ArticleP1_FR() {
  return (
    <>
      <h2 id="cout-direct">Le coût direct : ce que vous voyez</h2>
      <p>
        Une livraison ratée a un coût immédiat et visible : le remboursement total ou partiel de la commande, le second passage du livreur, et parfois le retour du meuble en entrepôt. Pour un canapé à 800 €, une livraison ratée peut coûter entre 120 € et 300 € en logistique seule.
      </p>
      <p>
        Mais ce que la plupart des directions opérationnelles calculent s&apos;arrête là. C&apos;est une erreur.
      </p>

      <h2 id="cout-cache">Le coût caché : ce que vous ne mesurez pas</h2>
      <p>
        Derrière chaque livraison ratée se cache une chaîne de coûts invisibles qui multiplient la facture réelle par 3 à 5.
      </p>
      <ul>
        <li><strong>Appels SAV</strong> : en moyenne 2 à 3 contacts client par litige non résolu. À 28 €/h pour un agent, et 8 minutes par appel, c&apos;est 11 à 17 € de coût humain supplémentaire.</li>
        <li><strong>Traitement administratif</strong> : saisie du litige, coordination transporteur, émission de bon de retour. Entre 20 et 45 minutes de travail interne par cas.</li>
        <li><strong>Litiges transporteurs</strong> : si la preuve de livraison est absente, le transporteur peut refuser l&apos;indemnisation. Vous absorbez 100 % du coût.</li>
        <li><strong>Perte commerciale</strong> : selon Narvar, <strong>33 % des clients qui vivent une mauvaise expérience de livraison ne recommandent pas chez le même enseigne</strong>. Pour un panier moyen de 600 €, c&apos;est une commande future perdue.</li>
      </ul>

      <h2 id="cout-reputation">Le coût de réputation : le plus long à réparer</h2>
      <p>
        Un client mécontent en 2026 ne vous appelle pas — il poste. Un avis négatif sur Google ou Trustpilot reste indexé pendant des années et influence directement votre taux de conversion.
      </p>
      <p>
        BrightLocal indique que <strong>88 % des consommateurs consultent les avis en ligne avant un achat de mobilier</strong>. Une note qui chute de 4,4 à 4,1 étoiles peut réduire votre conversion de 8 à 12 %.
      </p>

      <h2 id="calcul">Comment calculer le coût réel pour votre activité</h2>
      <p>
        Voici la formule simple que nous utilisons avec nos clients ameublement :
      </p>
      <ul>
        <li><strong>Coût direct</strong> = (taux de litige × panier moyen × taux de remboursement) + coût logistique second passage</li>
        <li><strong>Coût SAV</strong> = nombre de litiges × contacts moyens × durée × coût horaire agent</li>
        <li><strong>Coût réputation</strong> = estimation à 15-25 % du chiffre d&apos;affaires à risque (avis négatifs × panier moyen)</li>
      </ul>
      <p>
        Pour 300 livraisons/mois avec un taux de litige de 8 %, cela représente environ <strong>24 litiges × 85 € de coût total moyen = 2 040 € par mois</strong>, soit 24 480 € par an.
      </p>

      <h2 id="happi-solution">Comment H&apos;appi réduit ces coûts</h2>
      <p>
        Notre approche agit sur les trois niveaux simultanément :
      </p>
      <ul>
        <li><strong>Réduction des litiges</strong> : l&apos;App Traçabilité H&apos;appi documente chaque livraison avec photo géolocalisée, signature électronique et timestamp. −80 % de litiges non indemnisés dès le premier mois.</li>
        <li><strong>Automatisation SAV</strong> : le Bot H&apos;appi prend en charge les demandes de statut, les réclamations simples et les planifications de second passage. −65 % d&apos;appels entrants.</li>
        <li><strong>Donnez une preuve numérique</strong> : chaque livraison devient un dossier horodaté, utilisable en cas de contestation client ou transporteur.</li>
      </ul>
      <p>
        Le ROI est généralement atteint en moins de 6 semaines pour les acteurs traitant plus de 100 livraisons par mois.
      </p>
    </>
  );
}

function ArticleP1_EN() {
  return (
    <>
      <h2 id="cout-direct">The direct cost: what you can see</h2>
      <p>
        A failed delivery has an immediate, visible cost: full or partial order refund, a second delivery attempt, and sometimes returning the furniture to the warehouse. For an 800 € sofa, a failed delivery can cost between 120 € and 300 € in logistics alone.
      </p>
      <p>
        But most operations teams stop calculating there. That&apos;s a mistake.
      </p>

      <h2 id="cout-cache">The hidden cost: what you&apos;re not measuring</h2>
      <p>
        Behind every failed delivery lies a chain of invisible costs that multiply the real bill by 3 to 5.
      </p>
      <ul>
        <li><strong>SAV calls</strong>: on average 2–3 customer contacts per unresolved dispute. At 28 €/h for an agent and 8 minutes per call, that&apos;s an extra 11–17 € in human cost.</li>
        <li><strong>Administrative handling</strong>: logging the dispute, coordinating with the carrier, issuing a return label. Between 20 and 45 minutes of internal work per case.</li>
        <li><strong>Carrier disputes</strong>: if proof of delivery is missing, the carrier can refuse compensation. You absorb 100% of the cost.</li>
        <li><strong>Lost business</strong>: according to Narvar, <strong>33% of customers who have a bad delivery experience won&apos;t reorder from the same retailer</strong>. On an average basket of 600 €, that&apos;s a future order gone.</li>
      </ul>

      <h2 id="cout-reputation">The reputation cost: the hardest to repair</h2>
      <p>
        A dissatisfied customer in 2026 doesn&apos;t call you — they post. A negative review on Google or Trustpilot stays indexed for years and directly influences your conversion rate.
      </p>
      <p>
        BrightLocal shows that <strong>88% of consumers check online reviews before purchasing furniture</strong>. A rating drop from 4.4 to 4.1 stars can reduce conversion by 8–12%.
      </p>

      <h2 id="calcul">How to calculate the real cost for your business</h2>
      <p>
        Here is the simple formula we use with our furniture clients:
      </p>
      <ul>
        <li><strong>Direct cost</strong> = (dispute rate × average basket × refund rate) + second-attempt logistics cost</li>
        <li><strong>SAV cost</strong> = disputes × average contacts × duration × agent hourly rate</li>
        <li><strong>Reputation cost</strong> = estimate at 15–25% of at-risk revenue (negative reviews × average basket)</li>
      </ul>
      <p>
        For 300 deliveries/month with an 8% dispute rate: roughly <strong>24 disputes × 85 € average total cost = 2,040 €/month</strong>, or 24,480 € per year.
      </p>

      <h2 id="happi-solution">How H&apos;appi reduces these costs</h2>
      <p>
        Our approach acts on all three levels simultaneously:
      </p>
      <ul>
        <li><strong>Dispute reduction</strong>: H&apos;appi&apos;s Traceability App documents every delivery with a geolocated photo, e-signature and timestamp. −80% non-compensated disputes from day one.</li>
        <li><strong>SAV automation</strong>: H&apos;appi&apos;s Bot handles status requests, simple claims and second-attempt scheduling. −65% inbound calls.</li>
        <li><strong>Digital proof</strong>: every delivery becomes a timestamped dossier, usable in any client or carrier dispute.</li>
      </ul>
      <p>
        ROI is typically reached in under 6 weeks for operators handling more than 100 deliveries per month.
      </p>
    </>
  );
}

function ArticleP2_FR() {
  return (
    <>
      <h2 id="probleme-structurel">Le problème structurel du SAV ameublement</h2>
      <p>
        Le SAV ameublement souffre d&apos;un paradoxe : plus votre chiffre d&apos;affaires croît, plus vos appels augmentent — de manière quasi-proportionnelle. Contrairement au retail standard, un meuble livré est difficile à retourner et impossible à "réinstaller" à distance. Chaque problème nécessite un contact humain.
      </p>
      <p>
        Résultat : selon une étude Zendesk 2024, les équipes SAV de l&apos;ameublement traitent en moyenne <strong>47 % plus de contacts par commande que le retail général</strong>. Ce n&apos;est pas une question de mauvaise organisation — c&apos;est structurel.
      </p>

      <h2 id="cinq-raisons">Les 5 raisons qui expliquent le volume</h2>
      <ul>
        <li>
          <strong>1. Absence de visibilité en temps réel.</strong> Le client ne sait pas où est son meuble. Il appelle pour savoir. C&apos;est la raison n°1 des contacts SAV dans l&apos;ameublement : <em>Où est ma commande ?</em>
        </li>
        <li>
          <strong>2. Délais de livraison longs.</strong> Un canapé ou une armoire, c&apos;est souvent 3 à 8 semaines de délai. Pendant ce temps, le client s&apos;inquiète, relance, et peut annuler.
        </li>
        <li>
          <strong>3. Livraisons manquées.</strong> Un client absent, un code d&apos;accès erroné, un monte-charge bloqué : le second passage génère systématiquement 2 à 3 contacts SAV supplémentaires.
        </li>
        <li>
          <strong>4. Dommages à la livraison.</strong> Coin abîmé, emballage déchiré, pied cassé. Chaque dommage génère un litige qui dure en moyenne 8 jours et implique 4 à 6 échanges.
        </li>
        <li>
          <strong>5. Montage et installation.</strong> "Comment je monte ce meuble ?", "La pièce A ne rentre pas dans le trou B". Les questions de montage représentent 12 à 18 % des contacts post-livraison.
        </li>
      </ul>

      <h2 id="chiffres">Ce que disent les chiffres</h2>
      <p>
        Gorgias a analysé 1 200 boutiques e-commerce en 2024. Dans le segment ameublement et décoration, ils ont constaté que :
      </p>
      <ul>
        <li><strong>65 % des appels SAV</strong> portaient sur les mêmes 5 sujets (statut livraison, retard, litige, montage, produit défectueux)</li>
        <li><strong>41 % de ces appels</strong> auraient pu être résolus par un système automatisé sans intervention humaine</li>
        <li>Le coût moyen d&apos;un contact SAV en ameublement est de <strong>8,50 € à 14 €</strong> selon la complexité</li>
      </ul>
      <p>
        Ces chiffres signifient qu&apos;une équipe traitant 500 appels/mois dépense entre 4 250 € et 7 000 € par mois en contacts qui pourraient être automatisés en grande partie.
      </p>

      <h2 id="solution">La solution : automatisation + traçabilité</h2>
      <p>
        Réduire le volume d&apos;appels ne signifie pas supprimer le contact humain. Cela signifie <strong>réserver les agents aux situations qui le nécessitent vraiment</strong>.
      </p>
      <p>
        La combinaison gagnante est double :
      </p>
      <ul>
        <li><strong>Automatiser les demandes simples</strong> : statut de livraison, créneaux disponibles, suivi de litige, guide de montage — un chatbot SAV métier peut traiter 60 à 70 % de ces demandes 24h/24.</li>
        <li><strong>Éliminer les causes de litige</strong> : une application de traçabilité qui documente chaque livraison (photo, signature, GPS) réduit mécaniquement le nombre de contestations non fondées.</li>
      </ul>

      <h2 id="happi-change">Ce que H&apos;appi change concrètement</h2>
      <p>
        H&apos;appi a développé deux outils spécifiquement pour ce secteur. Le <strong>Bot SAV H&apos;appi</strong> est entraîné sur le vocabulaire et les processus de l&apos;ameublement : il connaît la différence entre un BL et un bon de retour, comprend ce qu&apos;est un monte-charge et sait escalader au bon moment.
      </p>
      <p>
        L&apos;<strong>App Traçabilité H&apos;appi</strong> équipe les livreurs d&apos;un outil mobile simple : photo géolocalisée obligatoire avant de quitter le domicile, signature électronique client, rapport automatique en cas de dommage. Ces preuves sont accessibles en temps réel par le service client.
      </p>
      <p>
        Résultat pour nos clients actuels : <strong>−65 % d&apos;appels</strong> le premier mois, <strong>−80 % de litiges</strong> sur 3 mois.
      </p>
    </>
  );
}

function ArticleP2_EN() {
  return (
    <>
      <h2 id="probleme-structurel">The structural problem in furniture SAV</h2>
      <p>
        Furniture after-sales suffers from a paradox: the more your revenue grows, the more your call volume grows — almost proportionally. Unlike standard retail, a delivered piece of furniture is hard to return and impossible to "reinstall" remotely. Every problem requires a human contact.
      </p>
      <p>
        As a result, according to a 2024 Zendesk study, furniture SAV teams handle on average <strong>47% more contacts per order than general retail</strong>. This isn&apos;t a matter of poor organisation — it&apos;s structural.
      </p>

      <h2 id="cinq-raisons">The 5 reasons behind the volume</h2>
      <ul>
        <li>
          <strong>1. No real-time visibility.</strong> The customer doesn&apos;t know where their furniture is. They call to find out. This is the #1 reason for SAV contacts in furniture: <em>Where is my order?</em>
        </li>
        <li>
          <strong>2. Long delivery lead times.</strong> A sofa or wardrobe often takes 3 to 8 weeks. During that time, customers worry, follow up, and may cancel.
        </li>
        <li>
          <strong>3. Missed deliveries.</strong> An absent customer, a wrong access code, a broken lift: second attempts systematically generate 2–3 extra SAV contacts.
        </li>
        <li>
          <strong>4. Delivery damage.</strong> Dented corner, torn packaging, broken leg. Each damage claim lasts an average of 8 days and involves 4 to 6 exchanges.
        </li>
        <li>
          <strong>5. Assembly and installation.</strong> "How do I assemble this?" or "Part A won&apos;t fit in slot B." Assembly questions account for 12–18% of post-delivery contacts.
        </li>
      </ul>

      <h2 id="chiffres">What the numbers say</h2>
      <p>
        Gorgias analysed 1,200 e-commerce stores in 2024. In the furniture and home décor segment, they found that:
      </p>
      <ul>
        <li><strong>65% of SAV calls</strong> covered the same 5 topics (delivery status, delay, dispute, assembly, defective product)</li>
        <li><strong>41% of those calls</strong> could have been resolved by an automated system without human intervention</li>
        <li>The average cost of a SAV contact in furniture is <strong>8.50 € to 14 €</strong> depending on complexity</li>
      </ul>
      <p>
        These figures mean a team handling 500 calls/month spends between 4,250 € and 7,000 € per month on contacts that could largely be automated.
      </p>

      <h2 id="solution">The solution: automation + traceability</h2>
      <p>
        Reducing call volume doesn&apos;t mean removing human contact. It means <strong>reserving agents for situations that truly require them</strong>.
      </p>
      <ul>
        <li><strong>Automate simple requests</strong>: delivery status, available time slots, dispute tracking, assembly guides — a domain-specific SAV chatbot can handle 60–70% of these requests 24/7.</li>
        <li><strong>Eliminate the causes of disputes</strong>: a traceability app that documents each delivery (photo, signature, GPS) mechanically reduces unfounded contestations.</li>
      </ul>

      <h2 id="happi-change">What H&apos;appi changes in practice</h2>
      <p>
        H&apos;appi has built two tools specifically for this sector. The <strong>H&apos;appi SAV Bot</strong> is trained on furniture vocabulary and processes: it knows the difference between a delivery note and a return label, understands what a goods lift is, and knows when to escalate.
      </p>
      <p>
        The <strong>H&apos;appi Traceability App</strong> equips drivers with a simple mobile tool: a mandatory geolocated photo before leaving the premises, client e-signature, and automatic damage reports. All of this is accessible in real time by the customer service team.
      </p>
      <p>
        Results for our current clients: <strong>−65% calls</strong> in month one, <strong>−80% disputes</strong> over 3 months.
      </p>
    </>
  );
}

function ArticleP3_FR() {
  return (
    <>
      <h2 id="pourquoi-echec">Pourquoi 90 % des projets chatbot échouent à prouver leur ROI</h2>
      <p>
        La plupart des achats de chatbot SAV reposent sur une promesse floue : &quot;vous allez réduire vos coûts&quot;. Pas de baseline, pas de KPIs définis avant le déploiement, pas de méthode de mesure. Résultat : 6 mois plus tard, personne ne peut dire si ça a vraiment fonctionné.
      </p>
      <p>
        Selon Gartner, <strong>85 % des projets IA en entreprise ne parviennent pas à démontrer un ROI mesurable</strong> dans les 18 premiers mois. Ce n&apos;est pas un problème de technologie — c&apos;est un problème de méthode.
      </p>

      <h2 id="quatre-metriques">Les 4 métriques qui comptent vraiment</h2>
      <ul>
        <li>
          <strong>1. Taux de déflexion</strong> : pourcentage d&apos;appels/tickets entrants traités par le chatbot sans intervention humaine. Cible réaliste pour un bot métier bien configuré : 55 à 70 %.
        </li>
        <li>
          <strong>2. Coût par contact résolu</strong> : coût total du chatbot (abonnement + maintenance) divisé par le nombre de contacts résolus. À comparer avec le coût humain (agent + infrastructure).
        </li>
        <li>
          <strong>3. CSAT (Customer Satisfaction Score)</strong> : ne mesurez pas seulement si les clients ont eu une réponse — mesurez s&apos;ils ont eu la bonne réponse. Un bot mal configuré peut déflexer 80 % des contacts mais satisfaire seulement 30 %.
        </li>
        <li>
          <strong>4. Temps de résolution moyen (AHT)</strong> : pour les cas qui passent quand même à un agent, le bot doit réduire l&apos;AHT en fournissant le contexte du client en amont. Cible : −25 % d&apos;AHT agent.
        </li>
      </ul>

      <h2 id="formule">La formule de calcul ROI H&apos;appi</h2>
      <p>
        Voici la formule que nous utilisons systématiquement avant tout engagement :
      </p>
      <ul>
        <li><strong>Économie mensuelle brute</strong> = (contacts mensuels × taux de déflexion × durée moyenne) / 60 × coût horaire agent</li>
        <li><strong>ROI mensuel net</strong> = économie brute − coût abonnement chatbot</li>
        <li><strong>Délai de retour sur investissement</strong> = coût de déploiement / ROI mensuel net</li>
      </ul>
      <p>
        Cette formule est délibérément conservatrice : elle ne prend pas en compte la réduction des litiges, la satisfaction client ou les économies sur les horaires étendus (bot disponible 24h/24).
      </p>

      <h2 id="cas-pratique">Cas pratique : 300 appels/mois à 28 €/h</h2>
      <ul>
        <li>300 appels SAV/mois × 65 % de déflexion = <strong>195 appels automatisés</strong></li>
        <li>195 × 8 min / 60 × 28 €/h = <strong>728 € économisés par mois</strong> sur la main-d&apos;œuvre pure</li>
        <li>Abonnement Bot H&apos;appi : 299 €/mois</li>
        <li><strong>ROI net : +429 €/mois dès le premier mois</strong>, soit +5 148 € sur 12 mois</li>
        <li>Sans compter la réduction des litiges et la disponibilité 24/7</li>
      </ul>
      <p>
        Notre calculateur ROI en ligne vous permet d&apos;adapter ces chiffres à votre situation réelle en 2 minutes.
      </p>

      <h2 id="erreurs">Les erreurs à éviter dans votre calcul</h2>
      <ul>
        <li><strong>Surestimer le taux de déflexion</strong> : un vendeur qui vous promet 90 % de déflexion sans voir vos données ment. Partez sur 55 à 65 % pour un calcul honnête.</li>
        <li><strong>Oublier le temps d&apos;implémentation</strong> : 2 à 4 semaines pendant lesquelles votre équipe est mobilisée. À intégrer dans le ROI an 1.</li>
        <li><strong>Ne pas mesurer le CSAT post-bot</strong> : un bot qui déflexe mais frustre peut coûter plus en churns clients qu&apos;il n&apos;économise en appels.</li>
        <li><strong>Comparer avec un coût zéro</strong> : le statu quo a un coût. Mesurez-le honnêtement avant de comparer.</li>
      </ul>
    </>
  );
}

function ArticleP3_EN() {
  return (
    <>
      <h2 id="pourquoi-echec">Why 90% of chatbot projects fail to prove their ROI</h2>
      <p>
        Most SAV chatbot purchases are based on a vague promise: &quot;you&apos;ll reduce costs.&quot; No baseline, no KPIs defined before deployment, no measurement methodology. Result: 6 months later, nobody can say whether it actually worked.
      </p>
      <p>
        According to Gartner, <strong>85% of enterprise AI projects fail to demonstrate measurable ROI</strong> within the first 18 months. This isn&apos;t a technology problem — it&apos;s a methodology problem.
      </p>

      <h2 id="quatre-metriques">The 4 metrics that actually matter</h2>
      <ul>
        <li>
          <strong>1. Deflection rate</strong>: percentage of inbound calls/tickets handled by the chatbot without human intervention. Realistic target for a well-configured domain chatbot: 55–70%.
        </li>
        <li>
          <strong>2. Cost per resolved contact</strong>: total chatbot cost (subscription + maintenance) divided by the number of contacts resolved. Compare against the human cost (agent + infrastructure).
        </li>
        <li>
          <strong>3. CSAT (Customer Satisfaction Score)</strong>: don&apos;t just measure whether customers got a response — measure whether they got the right one. A poorly configured bot can deflect 80% of contacts but satisfy only 30%.
        </li>
        <li>
          <strong>4. Average Handling Time (AHT)</strong>: for cases that still reach an agent, the bot should reduce AHT by providing client context upfront. Target: −25% agent AHT.
        </li>
      </ul>

      <h2 id="formule">The H&apos;appi ROI calculation formula</h2>
      <p>
        Here is the formula we use systematically before any engagement:
      </p>
      <ul>
        <li><strong>Gross monthly savings</strong> = (monthly contacts × deflection rate × avg duration) / 60 × agent hourly cost</li>
        <li><strong>Net monthly ROI</strong> = gross savings − chatbot subscription cost</li>
        <li><strong>Payback period</strong> = deployment cost / net monthly ROI</li>
      </ul>
      <p>
        This formula is deliberately conservative: it doesn&apos;t account for dispute reduction, customer satisfaction improvements, or savings from extended hours (bot available 24/7).
      </p>

      <h2 id="cas-pratique">Real-world case: 300 calls/month at 28 €/h</h2>
      <ul>
        <li>300 SAV calls/month × 65% deflection = <strong>195 automated calls</strong></li>
        <li>195 × 8 min / 60 × 28 €/h = <strong>728 € saved per month</strong> in pure labour</li>
        <li>H&apos;appi Bot subscription: 299 €/month</li>
        <li><strong>Net ROI: +429 €/month from month one</strong>, or +5,148 € over 12 months</li>
        <li>Not counting dispute reduction and 24/7 availability</li>
      </ul>
      <p>
        Our online ROI calculator lets you adapt these figures to your real situation in under 2 minutes.
      </p>

      <h2 id="erreurs">Mistakes to avoid in your calculation</h2>
      <ul>
        <li><strong>Overestimating deflection rate</strong>: a vendor promising 90% deflection without seeing your data is misleading you. Use 55–65% for an honest calculation.</li>
        <li><strong>Forgetting implementation time</strong>: 2 to 4 weeks during which your team is mobilised. Include this in year-1 ROI.</li>
        <li><strong>Not measuring post-bot CSAT</strong>: a bot that deflects but frustrates can cost more in customer churn than it saves in calls.</li>
        <li><strong>Comparing against zero cost</strong>: the status quo has a cost. Measure it honestly before comparing.</li>
      </ul>
    </>
  );
}

// ─── TOC & Sources per slug ───────────────────────────────────────────────────

const tocData: Record<string, Record<string, { id: string; label: string }[]>> = {
  'vrai-cout-livraison-ratee': {
    fr: [
      { id: 'cout-direct', label: 'Le coût direct : ce que vous voyez' },
      { id: 'cout-cache', label: 'Le coût caché : ce que vous ne mesurez pas' },
      { id: 'cout-reputation', label: 'Le coût de réputation' },
      { id: 'calcul', label: 'Comment calculer le coût réel' },
      { id: 'happi-solution', label: "Comment H'appi réduit ces coûts" },
    ],
    en: [
      { id: 'cout-direct', label: 'The direct cost: what you can see' },
      { id: 'cout-cache', label: "The hidden cost: what you're not measuring" },
      { id: 'cout-reputation', label: 'The reputation cost' },
      { id: 'calcul', label: 'How to calculate the real cost' },
      { id: 'happi-solution', label: "How H'appi reduces these costs" },
    ],
  },
  'sav-ameublement-equipe-appels': {
    fr: [
      { id: 'probleme-structurel', label: 'Le problème structurel du SAV ameublement' },
      { id: 'cinq-raisons', label: 'Les 5 raisons qui expliquent le volume' },
      { id: 'chiffres', label: 'Ce que disent les chiffres' },
      { id: 'solution', label: 'La solution : automatisation + traçabilité' },
      { id: 'happi-change', label: "Ce que H'appi change concrètement" },
    ],
    en: [
      { id: 'probleme-structurel', label: 'The structural problem in furniture SAV' },
      { id: 'cinq-raisons', label: 'The 5 reasons behind the volume' },
      { id: 'chiffres', label: 'What the numbers say' },
      { id: 'solution', label: 'The solution: automation + traceability' },
      { id: 'happi-change', label: "What H'appi changes in practice" },
    ],
  },
  'roi-chatbot-sav-mesure': {
    fr: [
      { id: 'pourquoi-echec', label: "Pourquoi 90 % des projets échouent" },
      { id: 'quatre-metriques', label: 'Les 4 métriques qui comptent' },
      { id: 'formule', label: 'La formule de calcul ROI' },
      { id: 'cas-pratique', label: 'Cas pratique chiffré' },
      { id: 'erreurs', label: 'Les erreurs à éviter' },
    ],
    en: [
      { id: 'pourquoi-echec', label: 'Why 90% of chatbot projects fail' },
      { id: 'quatre-metriques', label: 'The 4 metrics that matter' },
      { id: 'formule', label: 'The ROI calculation formula' },
      { id: 'cas-pratique', label: 'Real-world case study' },
      { id: 'erreurs', label: 'Mistakes to avoid' },
    ],
  },
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
  'vrai-cout-livraison-ratee': [
    { name: 'Narvar — Consumer Report 2024', url: 'https://corp.narvar.com', detail: '33% of customers who have a bad delivery experience won\'t reorder from the same retailer' },
    { name: 'BrightLocal — Local Consumer Review Survey', url: 'https://www.brightlocal.com', detail: '88% of consumers read online reviews before purchasing furniture' },
    { name: 'Statista — E-commerce Returns Rate by Category', url: 'https://www.statista.com', detail: 'Furniture return and dispute rates by sector' },
  ],
  'sav-ameublement-equipe-appels': [
    { name: 'Zendesk — CX Trends 2024', url: 'https://www.zendesk.com/fr/blog/cx-trends', detail: 'Furniture SAV teams handle 47% more contacts per order than general retail' },
    { name: 'Gorgias — E-commerce SAV Benchmark 2024', url: 'https://www.gorgias.com', detail: '65% of SAV calls in furniture cover the same 5 topics' },
    { name: 'Narvar — Post-Purchase Experience Report', url: 'https://corp.narvar.com', detail: 'Delivery visibility as #1 driver of inbound SAV contacts' },
  ],
  'roi-chatbot-sav-mesure': [
    { name: 'Gartner — AI ROI Survey 2024', url: 'https://www.gartner.com', detail: '85% of enterprise AI projects fail to demonstrate measurable ROI within 18 months' },
    { name: 'Gorgias — Chatbot Deflection Rates by Industry', url: 'https://www.gorgias.com', detail: 'Realistic deflection rates for domain-specific vs generic chatbots' },
    { name: 'Zendesk — Cost Per Contact Benchmark', url: 'https://www.zendesk.com', detail: 'Average SAV contact cost by sector and resolution type' },
  ],
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
  'vrai-cout-livraison-ratee': { fr: <ArticleP1_FR />, en: <ArticleP1_EN /> },
  'sav-ameublement-equipe-appels': { fr: <ArticleP2_FR />, en: <ArticleP2_EN /> },
  'roi-chatbot-sav-mesure': { fr: <ArticleP3_FR />, en: <ArticleP3_EN /> },
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
