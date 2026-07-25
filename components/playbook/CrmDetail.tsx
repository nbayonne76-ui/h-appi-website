import { Brain, Lock, Shield, Activity, Database, Zap, Calendar, Mail, Globe, Check } from 'lucide-react';

const modules = [
  { labelFr: 'Tableau de bord', labelEn: 'Dashboard', descFr: 'Vos chiffres clés, alertes et opportunités à saisir en un coup d\'œil', descEn: 'Key metrics, alerts and opportunities to act on at a glance' },
  { labelFr: 'Contacts', labelEn: 'Contacts', descFr: 'Tous vos contacts centralisés avec leur historique complet', descEn: 'All your contacts in one place with their full history' },
  { labelFr: 'Entreprises', labelEn: 'Companies', descFr: 'Gérez vos clients et prospects par entreprise, sans doublons', descEn: 'Manage clients and prospects by company, duplicate-free' },
  { labelFr: 'Pipeline de ventes', labelEn: 'Sales Pipeline', descFr: 'Visualisez vos affaires en cours et anticipez vos revenus', descEn: 'See your active deals and forecast upcoming revenue' },
  { labelFr: 'Leads qualifiés par IA', labelEn: 'AI-Scored Leads', descFr: 'L\'IA identifie et priorise vos leads les plus chauds automatiquement', descEn: 'AI automatically identifies and ranks your hottest leads' },
  { labelFr: 'Devis', labelEn: 'Quotes', descFr: 'Créez et envoyez des devis professionnels en PDF en quelques clics', descEn: 'Create and send professional PDF quotes in seconds' },
  { labelFr: 'Catalogue produits', labelEn: 'Product Catalog', descFr: 'Vos produits et tarifs prêts à insérer dans chaque devis', descEn: 'Your products and pricing ready to add to any quote' },
  { labelFr: 'Emails & Campagnes', labelEn: 'Emails & Campaigns', descFr: 'Envoyez des emails ciblés et voyez en temps réel qui ouvre et clique', descEn: 'Send targeted emails and see in real time who opens and clicks' },
  { labelFr: 'Activités', labelEn: 'Activities', descFr: 'Toutes vos tâches, appels et réunions réunies au même endroit', descEn: 'All your tasks, calls and meetings in one place' },
  { labelFr: 'Support client', labelEn: 'Customer Support', descFr: 'Gérez les demandes clients classées du plus urgent au moins urgent', descEn: 'Handle customer requests ranked from most to least urgent' },
  { labelFr: 'Analyses & Rapports', labelEn: 'Analytics & Reports', descFr: 'Des tableaux de bord clairs pour piloter votre performance commerciale', descEn: 'Clear dashboards to track and drive your sales performance' },
  { labelFr: 'Prévisions de ventes', labelEn: 'Sales Forecast', descFr: 'Estimez vos revenus futurs et suivez les objectifs de chaque commercial', descEn: 'Estimate future revenue and track each rep\'s quota' },
  { labelFr: 'Équipe', labelEn: 'Team', descFr: 'Vue d\'ensemble de votre équipe commerciale avec alertes pour les managers', descEn: 'Full overview of your sales team with manager alerts' },
  { labelFr: 'Intégrations', labelEn: 'Integrations', descFr: 'Connecté à Slack, Gmail, Cal.com et Zapier sans configuration complexe', descEn: 'Connected to Slack, Gmail, Cal.com and Zapier out of the box' },
  { labelFr: 'Assistant IA', labelEn: 'AI Assistant', descFr: 'Votre assistant intelligent qui recommande, prédit et automatise à votre place', descEn: 'Your smart assistant that recommends, predicts and automates for you' },
  { labelFr: 'Paramètres', labelEn: 'Settings', descFr: 'Configurez votre CRM, vos équipes et vos connexions en quelques minutes', descEn: 'Set up your CRM, teams and integrations in minutes' },
];

const aiFeatures = [
  { labelFr: 'Recherche intelligente', labelEn: 'Smart Search', descFr: 'Posez n\'importe quelle question en français, le CRM trouve instantanément ce que vous cherchez.', descEn: 'Ask anything in plain English, the CRM instantly finds what you\'re looking for.' },
  { labelFr: 'Import automatique', labelEn: 'Auto-fill from anywhere', descFr: 'Copiez-collez un email ou un profil, le CRM remplit toutes les fiches contacts tout seul.', descEn: 'Copy-paste an email or profile, the CRM fills in all contact fields automatically.' },
  { labelFr: 'Prédiction de signature', labelEn: 'Closing Prediction', descFr: 'Sachez à l\'avance quelles affaires vous allez probablement gagner ou perdre.', descEn: 'Know in advance which deals you\'re likely to win or lose.' },
  { labelFr: 'Fiche prospect instantanée', labelEn: 'Instant Prospect Brief', descFr: 'Avant chaque appel, recevez un résumé complet et prêt à l\'emploi sur votre prospect.', descEn: 'Before every call, get a complete ready-to-use summary of your prospect.' },
];

const integrations = [
  { icon: Zap, label: 'Slack', descFr: 'Recevez une alerte dans Slack dès qu\'un deal évolue ou qu\'une urgence arrive', descEn: 'Get a Slack alert the moment a deal moves or an issue needs attention' },
  { icon: Calendar, label: 'Agenda', descFr: 'Vos rendez-vous se créent automatiquement dans le CRM après chaque réunion', descEn: 'Your meetings are automatically logged in the CRM after every appointment' },
  { icon: Mail, label: 'Gmail', descFr: 'Vos emails s\'affichent directement dans les fiches contacts, sans rien faire', descEn: 'Your emails appear directly in contact profiles, without lifting a finger' },
  { icon: Zap, label: 'Automatisations', descFr: 'Connectez le CRM à tous vos autres outils et automatisez vos processus', descEn: 'Connect the CRM to all your other tools and automate your workflows' },
  { icon: Globe, label: 'H\'appi Secretary', descFr: 'Chaque appel téléphonique est automatiquement enregistré et résumé dans le CRM', descEn: 'Every phone call is automatically logged and summarized in the CRM' },
  { icon: Brain, label: 'H\'appi Chatbot', descFr: 'Les leads de votre chatbot arrivent directement dans votre pipeline de vente', descEn: 'Leads from your chatbot land directly in your sales pipeline' },
];

const security = [
  { icon: Lock, labelFr: 'Connexions sécurisées', labelEn: 'Secure sessions', descFr: 'Chaque session est protégée et automatiquement fermée à la déconnexion', descEn: 'Every session is protected and automatically closed on logout' },
  { icon: Shield, labelFr: 'Accès contrôlé', labelEn: 'Controlled access', descFr: 'Seuls les bons profils ont accès aux données sensibles de l\'équipe', descEn: 'Only the right profiles can access your team\'s sensitive data' },
  { icon: Activity, labelFr: 'Système stable', labelEn: 'Stable system', descFr: 'Le CRM reste rapide et fiable même en cas d\'utilisation intensive', descEn: 'The CRM stays fast and reliable even under heavy use' },
  { icon: Database, labelFr: 'Traçabilité complète', labelEn: 'Full audit trail', descFr: 'Chaque modification est enregistrée : qui a fait quoi et quand', descEn: 'Every change is recorded: who did what and when' },
];

export default function CrmDetail({ fr }: { fr: boolean }) {
  return (
    <>
      {/* 16 modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {fr ? 'Les 16 modules' : 'The 16 modules'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((m) => (
              <div key={m.labelFr} className="rounded-2xl p-5 border border-happi-border bg-happi-surface/40">
                <div className="text-white text-sm font-bold mb-1.5">{fr ? m.labelFr : m.labelEn}</div>
                <div className="text-happi-muted text-xs leading-relaxed">{fr ? m.descFr : m.descEn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {fr ? 'Un CRM qui pense pour vous' : 'A CRM that thinks for you'}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {aiFeatures.map((f) => (
              <div key={f.labelFr} className="rounded-2xl p-6 border border-happi-blue/20 bg-happi-blue/5">
                <Brain size={18} className="text-happi-blue mb-3" />
                <h4 className="text-white font-bold text-sm mb-2">{fr ? f.labelFr : f.labelEn}</h4>
                <p className="text-happi-muted text-xs leading-relaxed">{fr ? f.descFr : f.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {fr ? '6 intégrations prêtes à l\'emploi' : '6 integrations ready to use'}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {integrations.map((int) => {
              const Icon = int.icon;
              return (
                <div key={int.label} className="bg-happi-surface rounded-2xl p-5 border border-happi-border flex gap-4 items-start">
                  <Icon size={18} className="text-happi-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{int.label}</div>
                    <div className="text-happi-muted text-xs leading-relaxed">{fr ? int.descFr : int.descEn}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {fr ? 'Production-ready dès le premier jour' : 'Production-ready from day one'}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {security.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.labelFr} className="flex items-start gap-4 bg-happi-surface rounded-xl p-4 border border-happi-border">
                  <div className="w-9 h-9 bg-happi-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-happi-green" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{fr ? s.labelFr : s.labelEn}</div>
                    <div className="text-happi-muted text-xs mt-0.5">{fr ? s.descFr : s.descEn}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            {[
              { text: fr ? 'Connexions et données protégées en permanence' : 'Connections and data permanently protected' },
              { text: fr ? 'Accès personnalisés selon les rôles de chaque collaborateur' : 'Custom access levels for each team member' },
              { text: fr ? 'Performances vérifiées avant chaque mise à jour' : 'Performance verified before every update' },
              { text: fr ? 'Historique complet de toutes les modifications' : 'Full history of every change made' },
              { text: fr ? 'Hébergement 100% France / Europe (RGPD)' : '100% France / Europe hosting (GDPR)' },
              { text: fr ? 'Support réactif inclus dans votre abonnement' : 'Responsive support included in your subscription' },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3">
                <Check size={15} className="text-happi-green mt-0.5 flex-shrink-0" />
                <span className="text-happi-muted text-sm leading-snug">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
