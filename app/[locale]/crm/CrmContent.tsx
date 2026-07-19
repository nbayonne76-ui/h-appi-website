'use client';

import { useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import { openContactModal } from '@/components/ui/ContactModal';
import {
  Users, Building2, BarChart3, Ticket, Mail, Calendar,
  Zap, Shield, Brain, TrendingUp, Package, FileText,
  Settings, Puzzle, Activity, ArrowRight, Check,
  Globe, Lock, Database,
} from 'lucide-react';

// 16 modules CRM (Brain)
const modules = [
  { icon: BarChart3,
    labelFr: 'Tableau de bord', labelEn: 'Dashboard',
    descFr: 'Vos chiffres clés, alertes et opportunités à saisir en un coup d\'œil',
    descEn: 'Key metrics, alerts and opportunities to act on at a glance',
    color: '#3B82F6' },
  { icon: Users,
    labelFr: 'Contacts', labelEn: 'Contacts',
    descFr: 'Tous vos contacts centralisés avec leur historique complet',
    descEn: 'All your contacts in one place with their full history',
    color: '#10B981' },
  { icon: Building2,
    labelFr: 'Entreprises', labelEn: 'Companies',
    descFr: 'Gérez vos clients et prospects par entreprise, sans doublons',
    descEn: 'Manage clients and prospects by company, duplicate-free',
    color: '#A78BFA' },
  { icon: TrendingUp,
    labelFr: 'Pipeline de ventes', labelEn: 'Sales Pipeline',
    descFr: 'Visualisez vos affaires en cours et anticipez vos revenus',
    descEn: 'See your active deals and forecast upcoming revenue',
    color: '#F59E0B' },
  { icon: Brain,
    labelFr: 'Leads qualifiés par IA', labelEn: 'AI-Scored Leads',
    descFr: 'L\'IA identifie et priorise vos leads les plus chauds automatiquement',
    descEn: 'AI automatically identifies and ranks your hottest leads',
    color: '#3B82F6' },
  { icon: FileText,
    labelFr: 'Devis', labelEn: 'Quotes',
    descFr: 'Créez et envoyez des devis professionnels en PDF en quelques clics',
    descEn: 'Create and send professional PDF quotes in seconds',
    color: '#10B981' },
  { icon: Package,
    labelFr: 'Catalogue produits', labelEn: 'Product Catalog',
    descFr: 'Vos produits et tarifs prêts à insérer dans chaque devis',
    descEn: 'Your products and pricing ready to add to any quote',
    color: '#A78BFA' },
  { icon: Mail,
    labelFr: 'Emails & Campagnes', labelEn: 'Emails & Campaigns',
    descFr: 'Envoyez des emails ciblés et voyez en temps réel qui ouvre et clique',
    descEn: 'Send targeted emails and see in real time who opens and clicks',
    color: '#F59E0B' },
  { icon: Activity,
    labelFr: 'Activités', labelEn: 'Activities',
    descFr: 'Toutes vos tâches, appels et réunions réunies au même endroit',
    descEn: 'All your tasks, calls and meetings in one place',
    color: '#3B82F6' },
  { icon: Ticket,
    labelFr: 'Support client', labelEn: 'Customer Support',
    descFr: 'Gérez les demandes clients classées du plus urgent au moins urgent',
    descEn: 'Handle customer requests ranked from most to least urgent',
    color: '#EF4444' },
  { icon: BarChart3,
    labelFr: 'Analyses & Rapports', labelEn: 'Analytics & Reports',
    descFr: 'Des tableaux de bord clairs pour piloter votre performance commerciale',
    descEn: 'Clear dashboards to track and drive your sales performance',
    color: '#10B981' },
  { icon: TrendingUp,
    labelFr: 'Prévisions de ventes', labelEn: 'Sales Forecast',
    descFr: 'Estimez vos revenus futurs et suivez les objectifs de chaque commercial',
    descEn: 'Estimate future revenue and track each rep\'s quota',
    color: '#A78BFA' },
  { icon: Users,
    labelFr: 'Équipe', labelEn: 'Team',
    descFr: 'Vue d\'ensemble de votre équipe commerciale avec alertes pour les managers',
    descEn: 'Full overview of your sales team with manager alerts',
    color: '#F59E0B' },
  { icon: Puzzle,
    labelFr: 'Intégrations', labelEn: 'Integrations',
    descFr: 'Connecté à Slack, Gmail, Cal.com et Zapier sans configuration complexe',
    descEn: 'Connected to Slack, Gmail, Cal.com and Zapier out of the box',
    color: '#3B82F6' },
  { icon: Brain,
    labelFr: 'Assistant IA', labelEn: 'AI Assistant',
    descFr: 'Votre assistant intelligent qui recommande, prédit et automatise à votre place',
    descEn: 'Your smart assistant that recommends, predicts and automates for you',
    color: '#10B981' },
  { icon: Settings,
    labelFr: 'Paramètres', labelEn: 'Settings',
    descFr: 'Configurez votre CRM, vos équipes et vos connexions en quelques minutes',
    descEn: 'Set up your CRM, teams and integrations in minutes',
    color: '#A78BFA' },
];

// 6 features IA
const aiFeatures = [
  {
    labelFr: 'Recherche intelligente', labelEn: 'Smart Search',
    descFr: 'Posez n\'importe quelle question en français, le CRM trouve instantanément ce que vous cherchez.',
    descEn: 'Ask anything in plain English, the CRM instantly finds what you\'re looking for.',
    color: '#3B82F6',
  },
  {
    labelFr: 'Import automatique', labelEn: 'Auto-fill from anywhere',
    descFr: 'Copiez-collez un email ou un profil, le CRM remplit toutes les fiches contacts tout seul.',
    descEn: 'Copy-paste an email or profile, the CRM fills in all contact fields automatically.',
    color: '#10B981',
  },
  {
    labelFr: 'Qualification automatique', labelEn: 'Automatic Lead Scoring',
    descFr: 'Chaque prospect reçoit automatiquement une note selon son potentiel commercial.',
    descEn: 'Every prospect automatically receives a score based on their commercial potential.',
    color: '#A78BFA',
  },
  {
    labelFr: 'Conseil d\'action', labelEn: 'Next Step Guidance',
    descFr: 'Pour chaque affaire en cours, le CRM vous dit exactement quoi faire pour avancer.',
    descEn: 'For every open deal, the CRM tells you exactly what to do next to move forward.',
    color: '#F59E0B',
  },
  {
    labelFr: 'Prédiction de signature', labelEn: 'Closing Prediction',
    descFr: 'Sachez à l\'avance quelles affaires vous allez probablement gagner ou perdre.',
    descEn: 'Know in advance which deals you\'re likely to win or lose.',
    color: '#EF4444',
  },
  {
    labelFr: 'Fiche prospect instantanée', labelEn: 'Instant Prospect Brief',
    descFr: 'Avant chaque appel, recevez un résumé complet et prêt à l\'emploi sur votre prospect.',
    descEn: 'Before every call, get a complete ready-to-use summary of your prospect.',
    color: '#3B82F6',
  },
];

// Intégrations
const integrations = [
  { icon: Zap, label: 'Slack', descFr: 'Recevez une alerte dans Slack dès qu\'un deal évolue ou qu\'une urgence arrive', descEn: 'Get a Slack alert the moment a deal moves or an issue needs attention', color: '#4A154B' },
  { icon: Calendar, label: 'Agenda', descFr: 'Vos rendez-vous se créent automatiquement dans le CRM après chaque réunion', descEn: 'Your meetings are automatically logged in the CRM after every appointment', color: '#3B82F6' },
  { icon: Mail, label: 'Gmail', descFr: 'Vos emails s\'affichent directement dans les fiches contacts, sans rien faire', descEn: 'Your emails appear directly in contact profiles, without lifting a finger', color: '#EF4444' },
  { icon: Zap, label: 'Automatisations', descFr: 'Connectez le CRM à tous vos autres outils et automatisez vos processus', descEn: 'Connect the CRM to all your other tools and automate your workflows', color: '#FF4A00' },
  { icon: Globe, label: 'H\'appi Secretary', descFr: 'Chaque appel téléphonique est automatiquement enregistré et résumé dans le CRM', descEn: 'Every phone call is automatically logged and summarized in the CRM', color: '#10B981' },
  { icon: Brain, label: 'H\'appi Chatbot', descFr: 'Les leads de votre chatbot arrivent directement dans votre pipeline de vente', descEn: 'Leads from your chatbot land directly in your sales pipeline', color: '#A78BFA' },
];

// Sécurité
const security = [
  { icon: Lock, labelFr: 'Connexions sécurisées', labelEn: 'Secure sessions', descFr: 'Chaque session est protégée et automatiquement fermée à la déconnexion', descEn: 'Every session is protected and automatically closed on logout' },
  { icon: Shield, labelFr: 'Accès contrôlé', labelEn: 'Controlled access', descFr: 'Seuls les bons profils ont accès aux données sensibles de l\'équipe', descEn: 'Only the right profiles can access your team\'s sensitive data' },
  { icon: Activity, labelFr: 'Système stable', labelEn: 'Stable system', descFr: 'Le CRM reste rapide et fiable même en cas d\'utilisation intensive', descEn: 'The CRM stays fast and reliable even under heavy use' },
  { icon: Database, labelFr: 'Traçabilité complète', labelEn: 'Full audit trail', descFr: 'Chaque modification est enregistrée : qui a fait quoi et quand', descEn: 'Every change is recorded: who did what and when' },
];

// Stats
const stats = [
  { value: '16', labelFr: 'Modules tout-en-un', labelEn: 'All-in-one modules', color: '#3B82F6' },
  { value: '6', labelFr: 'Fonctionnalités IA incluses', labelEn: 'AI features included', color: '#10B981' },
  { value: '14j', labelFr: 'Pour déployer', labelEn: 'To deploy', color: '#A78BFA' },
  { value: '100%', labelFr: 'Conforme RGPD', labelEn: 'GDPR compliant', color: '#F59E0B' },
];

export default function CrmContent() {
  const locale = useLocale();
  const fr = locale === 'fr';

  return (
    <>
      <Header />
      <main className="pt-16 bg-happi-darker text-white">

        {/* ── Hero ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <AnimatedMesh variant="hero" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-6 border border-happi-blue/20">
              {fr ? 'Produit H\'appi' : 'H\'appi Product'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              {fr
                ? <>Happi CRM : Le CRM IA conçu pour les <span className="gradient-text">équipes qui veulent gagner</span></>
                : <>Happi CRM : The AI CRM built for <span className="gradient-text">teams that want to win</span></>}
            </h1>
            <p className="text-lg text-happi-muted mb-4 max-w-2xl mx-auto leading-relaxed">
              {fr
                ? 'Pipeline Kanban, lead scoring IA, devis PDF, séquences email, 6 features Claude : tout ce dont une équipe commerciale a besoin, sans le prix d\'un HubSpot.'
                : 'Kanban pipeline, AI lead scoring, PDF quotes, email sequences, 6 Claude features : everything a sales team needs, without the HubSpot price tag.'}
            </p>
            <p className="text-happi-muted text-sm mb-10">
              {fr
                ? 'Next.js 16 · FastAPI · PostgreSQL · Claude Sonnet 4.6 · 120+ endpoints · 54 tests'
                : 'Next.js 16 · FastAPI · PostgreSQL · Claude Sonnet 4.6 · 120+ endpoints · 54 tests'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openContactModal}
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-happi-blue text-white rounded-xl hover:bg-happi-blue/90 transition-all hover:shadow-lg hover:shadow-happi-blue/25 font-semibold"
              >
                {fr ? 'Demander une démo' : 'Request a demo'}
                <ArrowRight size={16} />
              </button>
              <a
                href="https://github.com/nbayonne76-ui/Happi-CRM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-happi-border text-happi-muted rounded-xl hover:text-white hover:border-happi-border/60 transition-all font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* ── Dashboard screenshot ── */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-happi-border/40 shadow-2xl shadow-black/50">
              <div className="bg-happi-dark flex items-center gap-2 px-4 py-2.5 border-b border-happi-border/50">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="flex-1 mx-4 bg-happi-surface/60 rounded px-3 py-1 text-[11px] text-happi-muted/50 font-mono">
                  happi-crm.com/dashboard
                </span>
              </div>
              <img
                src="/images/crm-dashboard.png"
                alt="Happi CRM Dashboard"
                className="w-full block"
              />
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-happi-dark border-y border-happi-border/50">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-extrabold mb-1" style={{ color: s.color }}>{s.value}</div>
                <div className="text-xs text-happi-muted">{fr ? s.labelFr : s.labelEn}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 16 Modules ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                {fr ? 'Couverture complète' : 'Full coverage'}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {fr ? 'Tout ce qu\'il vous faut pour ' : 'Everything you need to '}
                <span className="gradient-text">{fr ? 'vendre plus' : 'sell more'}</span>
              </h2>
              <p className="text-happi-muted text-sm mt-3 max-w-xl mx-auto">
                {fr
                  ? 'De la première prise de contact à la signature, chaque étape de votre cycle de vente est couverte en un seul outil.'
                  : 'From first contact to closing, every step of your sales cycle is covered in a single tool.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {modules.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div
                    key={i}
                    className="group rounded-2xl p-5 border hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-default"
                    style={{
                      background: `${m.color}08`,
                      borderColor: `${m.color}20`,
                      boxShadow: `0 0 0 0 ${m.color}00`,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 8px 24px ${m.color}18`)}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 0 0 ${m.color}00`)}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${m.color}18` }}
                    >
                      <Icon size={18} style={{ color: m.color }} />
                    </div>
                    <div className="text-white text-sm font-bold mb-1.5">{fr ? m.labelFr : m.labelEn}</div>
                    <div className="text-happi-muted text-xs leading-relaxed">{fr ? m.descFr : m.descEn}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 6 Features IA ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                {fr ? 'Intelligence artificielle' : 'Artificial intelligence'}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {fr ? 'Un CRM qui ' : 'A CRM that '}
                <span className="gradient-text">{fr ? 'pense pour vous' : 'thinks for you'}</span>
              </h2>
              <p className="text-happi-muted text-sm mt-3 max-w-xl mx-auto">
                {fr
                  ? 'L\'intelligence artificielle est intégrée dans chaque étape de votre journée, pas vendue en option.'
                  : 'Artificial intelligence is built into every step of your day, not sold as an add-on.'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {aiFeatures.map((f, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 border hover:-translate-y-1 transition-transform duration-200"
                  style={{ background: `${f.color}08`, borderColor: `${f.color}25` }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: `${f.color}18` }}
                  >
                    <Brain size={15} style={{ color: f.color }} />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2">{fr ? f.labelFr : f.labelEn}</h4>
                  <p className="text-happi-muted text-xs leading-relaxed">{fr ? f.descFr : f.descEn}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Intégrations ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                {fr ? 'Votre stack, connectée' : 'Your stack, connected'}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {fr ? '6 intégrations ' : '6 integrations '}
                <span className="gradient-text">{fr ? 'prêtes à l\'emploi' : 'ready to use'}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {integrations.map((int, i) => {
                const Icon = int.icon;
                return (
                  <div
                    key={i}
                    className="bg-happi-surface rounded-2xl p-5 border border-happi-border hover:border-happi-blue/30 transition-all flex gap-4 items-start"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${int.color}20` }}
                    >
                      <Icon size={18} style={{ color: int.color }} />
                    </div>
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

        {/* ── Sécurité ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-3">
                  {fr ? 'Fiabilité & Sécurité' : 'Reliability & Security'}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {fr ? 'Production-ready ' : 'Production-ready '}
                  <span className="gradient-text">{fr ? 'dès le premier jour' : 'from day one'}</span>
                </h2>
                <p className="text-happi-muted text-sm leading-relaxed mb-8">
                  {fr
                    ? '6 sprints dédiés à la sécurité, aux performances et à la qualité de code, avant la mise en production.'
                    : '6 dedicated sprints on security, performance and code quality, before going live.'}
                </p>

                <div className="space-y-4">
                  {security.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <div key={i} className="flex items-start gap-4 bg-happi-surface rounded-xl p-4 border border-happi-border">
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
              </div>

              {/* Garanties qualité */}
              <div className="bg-happi-surface rounded-2xl p-7 border border-happi-border space-y-4">
                <h3 className="text-white font-bold text-base mb-2">
                  {fr ? 'Un CRM prêt pour votre équipe dès le premier jour' : 'A CRM ready for your team from day one'}
                </h3>
                {[
                  { icon: Check, text: fr ? 'Connexions et données protégées en permanence' : 'Connections and data permanently protected', color: '#10B981' },
                  { icon: Check, text: fr ? 'Accès personnalisés selon les rôles de chaque collaborateur' : 'Custom access levels for each team member', color: '#10B981' },
                  { icon: Check, text: fr ? 'Performances vérifiées avant chaque mise à jour' : 'Performance verified before every update', color: '#10B981' },
                  { icon: Check, text: fr ? 'Historique complet de toutes les modifications' : 'Full history of every change made', color: '#10B981' },
                  { icon: Check, text: fr ? 'Hébergement 100% France / Europe (RGPD)' : '100% France / Europe hosting (GDPR)', color: '#10B981' },
                  { icon: Check, text: fr ? 'Support réactif inclus dans votre abonnement' : 'Responsive support included in your subscription', color: '#10B981' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <Icon size={15} className="mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                      <span className="text-happi-muted text-sm leading-snug">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        {/* ── CTA ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-happi-blue to-happi-green rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 right-6 w-24 h-24 border-2 border-white rounded-full" />
                <div className="absolute bottom-6 left-6 w-36 h-36 border-2 border-white rounded-full" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {fr ? 'Prêt à voir le CRM en action ?' : 'Ready to see the CRM in action?'}
                </h2>
                <p className="text-white/80 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
                  {fr
                    ? 'On vous montre les 16 modules, les 6 features IA et le pipeline Kanban en 30 minutes. Sans engagement, sans blabla commercial.'
                    : 'We\'ll walk you through all 16 modules, 6 AI features and the Kanban pipeline in 30 minutes. No commitment, no sales pitch.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openContactModal}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-happi-blue rounded-xl hover:shadow-xl transition-all font-semibold"
                  >
                    {fr ? 'Demander une démo' : 'Request a demo'}
                    <ArrowRight size={16} />
                  </button>
                  <a
                    href="https://github.com/nbayonne76-ui/Happi-CRM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white rounded-xl hover:bg-white/10 transition-all font-semibold"
                  >
                    Voir le code GitHub
                  </a>
                </div>
                <p className="text-white/60 text-xs mt-6">
                  {fr ? 'Réponse sous 24h · Démo personnalisée · Sans engagement' : 'Reply within 24h · Personalised demo · No commitment'}
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
