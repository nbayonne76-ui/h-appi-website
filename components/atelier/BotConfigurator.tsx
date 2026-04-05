'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { Check, Sparkles, ArrowLeft, Zap, Clock, MessageCircle, Loader2 } from 'lucide-react';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import TiltCard from '@/components/ui/TiltCard';
import MagneticButton from '@/components/ui/MagneticButton';
import { FadeInUp } from '@/components/ui/Animate';

// ── Types ──────────────────────────────────────────────────────────────────────

type Sector  = 'notariat' | 'comptabilite' | 'architecture' | 'recouvrement' | 'immobilier' | 'rh' | 'sante' | 'ecommerce' | 'tech' | 'autre';
type Goal    = 'qualify' | 'faq' | 'process' | 'rdv';
type Channel = 'whatsapp' | 'webchat' | 'email';
type Tone    = 'formal' | 'friendly' | 'technical';

type FeatureItem = { id: string; icon: string; fr: string; en: string };
type Config = { sector: Sector | null; goal: Goal | null; channel: Channel | null; features: string[]; tone: Tone | null };
type Msg    = { role: 'bot' | 'user'; text: string };

// ── Sectors ────────────────────────────────────────────────────────────────────

const SECTORS: { id: Sector; icon: string; fr: string; en: string; color: string; descFr: string; descEn: string }[] = [
  { id: 'notariat',     icon: '⚖️',  fr: 'Notariat',        en: 'Notarial law',  color: '#D4AF37', descFr: 'Actes, successions, transactions', descEn: 'Deeds, estates, transactions' },
  { id: 'comptabilite', icon: '📊',  fr: 'Comptabilité',     en: 'Accounting',    color: '#22C55E', descFr: 'Fiscalité, bilans, conseils',       descEn: 'Tax, balance sheets, advisory' },
  { id: 'architecture', icon: '🏛️', fr: 'Architecture',     en: 'Architecture',  color: '#D4A853', descFr: 'Projets, devis, coordination',      descEn: 'Projects, quotes, coordination' },
  { id: 'recouvrement', icon: '💼',  fr: 'Recouvrement',     en: 'Debt recovery', color: '#EF4444', descFr: 'Créances, dossiers, relances',      descEn: 'Claims, files, follow-ups' },
  { id: 'immobilier',   icon: '🏠',  fr: 'Immobilier',       en: 'Real estate',   color: '#3B82F6', descFr: 'Ventes, locations, estimations',    descEn: 'Sales, rentals, valuations' },
  { id: 'rh',           icon: '👥',  fr: 'RH & Recrutement', en: 'HR & Hiring',   color: '#8B5CF6', descFr: 'Candidats, onboarding, équipes',    descEn: 'Candidates, onboarding, teams' },
  { id: 'sante',        icon: '🏥',  fr: 'Santé',            en: 'Healthcare',    color: '#06B6D4', descFr: 'Patients, parcours, rendez-vous',   descEn: 'Patients, pathways, appointments' },
  { id: 'ecommerce',    icon: '🛒',  fr: 'E-commerce',       en: 'E-commerce',    color: '#F97316', descFr: 'Clients, commandes, support',       descEn: 'Customers, orders, support' },
  { id: 'tech',         icon: '💻',  fr: 'Tech & SaaS',      en: 'Tech & SaaS',   color: '#4F46E5', descFr: 'Onboarding, support, demos',        descEn: 'Onboarding, support, demos' },
  { id: 'autre',        icon: '✨',  fr: 'Autre secteur',    en: 'Other sector',  color: '#6B7280', descFr: "Cas d'usage sur-mesure",            descEn: 'Custom use case' },
];

// ── Goals ──────────────────────────────────────────────────────────────────────

const GOALS: { id: Goal; icon: string; fr: string; en: string; descFr: string; descEn: string }[] = [
  { id: 'qualify', icon: '🎯', fr: 'Qualifier mes prospects',     en: 'Qualify my leads',        descFr: 'Identifier automatiquement les leads chauds et collecter leurs besoins', descEn: 'Automatically identify hot leads and collect their needs' },
  { id: 'faq',     icon: '💬', fr: 'Répondre aux questions 24/7', en: 'Answer questions 24/7',   descFr: 'Traiter toutes les questions fréquentes sans intervention humaine',      descEn: 'Handle all frequent questions without human intervention' },
  { id: 'process', icon: '📋', fr: 'Guider dans un processus',    en: 'Guide through a process', descFr: 'Accompagner les clients étape par étape dans une démarche complexe',    descEn: 'Walk clients step-by-step through a complex procedure' },
  { id: 'rdv',     icon: '📅', fr: 'Prendre des rendez-vous',     en: 'Book appointments',        descFr: 'Automatiser la prise de rendez-vous avec synchronisation calendrier',   descEn: 'Automate appointment booking with calendar sync' },
];

// ── Channels ───────────────────────────────────────────────────────────────────

const CHANNELS: { id: Channel; icon: string; fr: string; en: string; descFr: string; descEn: string }[] = [
  { id: 'whatsapp', icon: '💬', fr: 'WhatsApp',           en: 'WhatsApp',          descFr: "2 milliards d'utilisateurs, taux d'ouverture 98%", descEn: '2 billion users, 98% open rate' },
  { id: 'webchat',  icon: '🌐', fr: 'Webchat / Site web', en: 'Webchat / Website', descFr: 'Intégré à votre site en une ligne de code',         descEn: 'Embedded in your site with one line of code' },
  { id: 'email',    icon: '📧', fr: 'Email automatisé',   en: 'Automated email',   descFr: 'Réponses intelligentes dans votre boîte mail',      descEn: 'Smart replies straight from your inbox' },
];

// ── Sector-specific features ───────────────────────────────────────────────────

const SECTOR_FEATURES: Record<Sector, FeatureItem[]> = {
  notariat: [
    { id: 'docs',      icon: '📂', fr: "Collecte de pièces d'identité",     en: 'ID document collection' },
    { id: 'rdv_feat',  icon: '📅', fr: 'Prise de RDV notariale',             en: 'Notarial appointment booking' },
    { id: 'crm',       icon: '🔗', fr: 'Connexion logiciel Notae/Génapi',    en: 'Notarial software sync' },
    { id: 'human',     icon: '👤', fr: 'Transfert vers un notaire',           en: 'Handoff to notary' },
    { id: 'multilang', icon: '🌍', fr: 'Multilingue FR/EN/AR',                en: 'Multilingual FR/EN/AR' },
    { id: 'notif',     icon: '🔔', fr: 'Alertes avancement de dossier',       en: 'File progress alerts' },
  ],
  comptabilite: [
    { id: 'docs',      icon: '📂', fr: 'Collecte de justificatifs comptables', en: 'Accounting document collection' },
    { id: 'rdv_feat',  icon: '📅', fr: 'Planning déclarations fiscales',        en: 'Tax filing calendar' },
    { id: 'crm',       icon: '🔗', fr: 'Sync Sage / Cegid / QuickBooks',        en: 'Sage / Cegid / QuickBooks sync' },
    { id: 'analytics', icon: '📈', fr: 'Reporting client automatisé',           en: 'Automated client reporting' },
    { id: 'notif',     icon: '🔔', fr: "Alertes d'échéances fiscales",          en: 'Tax deadline alerts' },
    { id: 'human',     icon: '👤', fr: "Transfert vers l'expert-comptable",     en: 'Handoff to accountant' },
  ],
  architecture: [
    { id: 'docs',      icon: '📂', fr: 'Dépôt de cahier des charges',          en: 'Brief / spec sheet upload' },
    { id: 'rdv_feat',  icon: '📅', fr: 'RDV visite de chantier / consultation', en: 'Site visit / consultation booking' },
    { id: 'payment',   icon: '💰', fr: 'Génération de devis automatique',       en: 'Automatic quote generation' },
    { id: 'crm',       icon: '🔗', fr: 'Sync logiciel de gestion de projet',    en: 'Project management tool sync' },
    { id: 'human',     icon: '👤', fr: "Transfert vers l'architecte responsable", en: 'Handoff to lead architect' },
    { id: 'analytics', icon: '📊', fr: 'Suivi avancement chantier',             en: 'Construction progress tracking' },
  ],
  recouvrement: [
    { id: 'docs',      icon: '📋', fr: 'Dépôt de créance en ligne',            en: 'Online claim submission' },
    { id: 'payment',   icon: '💳', fr: 'Plan de remboursement interactif',      en: 'Interactive repayment plan' },
    { id: 'crm',       icon: '🔗', fr: 'Sync CRM créances / dossiers',          en: 'Receivables CRM sync' },
    { id: 'human',     icon: '👤', fr: 'Transfert vers un juriste',              en: 'Handoff to legal advisor' },
    { id: 'notif',     icon: '🔔', fr: 'Relances automatiques programmées',      en: 'Scheduled automatic follow-ups' },
    { id: 'analytics', icon: '📊', fr: 'Scoring débiteur en temps réel',        en: 'Real-time debtor scoring' },
  ],
  immobilier: [
    { id: 'matching',  icon: '🏠', fr: 'Matching de biens automatique',         en: 'Automatic property matching' },
    { id: 'rdv_feat',  icon: '📅', fr: 'Prise de visite virtuelle / physique',  en: 'Virtual / physical visit booking' },
    { id: 'payment',   icon: '💳', fr: 'Simulation de prêt immobilier',          en: 'Mortgage simulation' },
    { id: 'crm',       icon: '🔗', fr: 'Sync CRM immo (Salesforce, HubSpot)',   en: 'Real estate CRM sync' },
    { id: 'human',     icon: '👤', fr: "Transfert vers l'agent",                 en: 'Handoff to agent' },
    { id: 'analytics', icon: '📈', fr: 'Estimation de prix marché',              en: 'Market price estimation' },
  ],
  rh: [
    { id: 'docs',      icon: '📂', fr: 'Collecte et pré-analyse de CV',         en: 'CV collection & pre-screening' },
    { id: 'rdv_feat',  icon: '📅', fr: "Planification d'entretiens automatique", en: 'Automatic interview scheduling' },
    { id: 'crm',       icon: '🔗', fr: 'Sync ATS (Workday, Greenhouse, Lever)', en: 'ATS sync (Workday, Greenhouse)' },
    { id: 'human',     icon: '👤', fr: 'Transfert vers le recruteur',            en: 'Handoff to recruiter' },
    { id: 'onboard',   icon: '📋', fr: 'Onboarding digital interactif',          en: 'Interactive digital onboarding' },
    { id: 'notif',     icon: '🔔', fr: 'Suivi et relance des candidats',         en: 'Candidate tracking & follow-up' },
  ],
  sante: [
    { id: 'rdv_feat',  icon: '📅', fr: 'Prise de RDV médicaux',                 en: 'Medical appointment booking' },
    { id: 'docs',      icon: '📋', fr: 'Questionnaire pré-consultation',         en: 'Pre-consultation questionnaire' },
    { id: 'crm',       icon: '🔗', fr: 'Connexion dossier patient (DPI)',        en: 'Patient record (EHR) connection' },
    { id: 'human',     icon: '👤', fr: "Transfert vers le médecin / secrétaire", en: 'Handoff to doctor / secretary' },
    { id: 'pharma',    icon: '💊', fr: 'Info médicaments & ordonnances',         en: 'Medication & prescription info' },
    { id: 'notif',     icon: '🔔', fr: 'Rappels traitement / rendez-vous',       en: 'Treatment / appointment reminders' },
  ],
  ecommerce: [
    { id: 'tracking',  icon: '📦', fr: 'Suivi de commandes en temps réel',      en: 'Real-time order tracking' },
    { id: 'returns',   icon: '🔄', fr: 'Gestion des retours & remboursements',   en: 'Returns & refunds management' },
    { id: 'reco',      icon: '🛍️', fr: 'Recommandations produits IA',           en: 'AI product recommendations' },
    { id: 'payment',   icon: '💳', fr: 'Info paiement & facturation',            en: 'Payment & billing info' },
    { id: 'crm',       icon: '🔗', fr: 'Connexion Shopify / WooCommerce',        en: 'Shopify / WooCommerce sync' },
    { id: 'notif',     icon: '🔔', fr: "Notifications d'expédition",             en: 'Shipping notifications' },
  ],
  tech: [
    { id: 'onboard',   icon: '🚀', fr: 'Onboarding interactif guidé',            en: 'Guided interactive onboarding' },
    { id: 'crm',       icon: '🔗', fr: 'Intégration API & webhooks',             en: 'API & webhook integration' },
    { id: 'analytics', icon: '📊', fr: "Dashboard d'usage & analytics",          en: 'Usage & analytics dashboard' },
    { id: 'human',     icon: '👤', fr: 'Support technique niveau 1',             en: 'Tier-1 technical support' },
    { id: 'rdv_feat',  icon: '📅', fr: 'Planification de démos produit',         en: 'Product demo scheduling' },
    { id: 'debug',     icon: '🐛', fr: 'Diagnostic et triage automatique',       en: 'Automatic bug triage & diagnosis' },
  ],
  autre: [
    { id: 'docs',      icon: '📂', fr: "Collecte d'informations",                en: 'Information collection' },
    { id: 'rdv_feat',  icon: '📅', fr: 'Prise de rendez-vous',                   en: 'Appointment booking' },
    { id: 'crm',       icon: '🔗', fr: 'Connexion à vos outils',                 en: 'Connect to your tools' },
    { id: 'human',     icon: '👤', fr: 'Transfert vers un humain',               en: 'Human handoff' },
    { id: 'analytics', icon: '📈', fr: 'Analytics & rapports',                   en: 'Analytics & reports' },
    { id: 'notif',     icon: '🔔', fr: 'Notifications automatiques',             en: 'Automatic notifications' },
  ],
};

// ── Tones ──────────────────────────────────────────────────────────────────────

const TONES: { id: Tone; emoji: string; fr: string; en: string; descFr: string; descEn: string; color: string }[] = [
  { id: 'formal',    emoji: '🎩', fr: 'Formel & Professionnel',   en: 'Formal & Professional',   color: '#D4AF37', descFr: 'Langage soutenu, registre juridique ou financier. Inspire confiance et sérieux', descEn: 'Formal language, legal or financial tone. Inspires trust and credibility' },
  { id: 'friendly',  emoji: '😊', fr: 'Accessible & Chaleureux',  en: 'Friendly & Approachable', color: '#22C55E', descFr: 'Ton conversationnel, proche du client. Idéal pour fidéliser et engager',         descEn: 'Conversational and client-centric. Perfect for engagement and loyalty' },
  { id: 'technical', emoji: '⚡', fr: 'Technique & Expert',        en: 'Technical & Expert',      color: '#4F46E5', descFr: 'Précis, data-driven, pour un public averti. Crédibilité maximale',              descEn: 'Precise, data-driven, expert audience. Maximum credibility' },
];

// ── Helpers ────────────────────────────────────────────────────────────────────

const BOT_NAMES: Partial<Record<Sector, Record<Goal, string>>> = {
  notariat:     { qualify: 'Assistant Notarial Premium',   faq: 'Conseiller Juridique 24/7',  process: 'Guide Notarial Interactif',  rdv: 'Planificateur Notarial' },
  comptabilite: { qualify: 'Analyste Comptable IA',        faq: 'Expert Fiscal 24/7',         process: 'Guide Comptable Digital',    rdv: 'Assistant Calendrier Fiscal' },
  architecture: { qualify: 'Consultant Portfolio IA',      faq: 'Guide Architecture Digital', process: 'Coordinateur Projet MOA',    rdv: "Planificateur d'Entretiens" },
  recouvrement: { qualify: 'Agent de Qualification',       faq: 'Conseiller Créances 24/7',   process: 'Guide Dépôt de Créance',    rdv: 'Coordinateur de Dossiers' },
  immobilier:   { qualify: 'Conseiller Immobilier IA',     faq: 'Expert Marché Immo',         process: 'Guide Transaction Immo',     rdv: 'Agent de Visites Virtuel' },
  rh:           { qualify: 'Talent Qualifier Bot',         faq: 'Assistant RH 24/7',          process: 'Guide Onboarding Digital',   rdv: "Planificateur d'Entretiens" },
  sante:        { qualify: 'Coordinateur Médical IA',      faq: 'Assistant Santé 24/7',       process: 'Guide Parcours Patient',     rdv: 'Assistant Prise en Charge' },
  ecommerce:    { qualify: 'Conseiller Commercial IA',     faq: 'Support Client 24/7',        process: "Guide d'Achat Intelligent",  rdv: 'Consultant Produit Virtuel' },
  tech:         { qualify: 'Business Development Bot',     faq: 'Support Technique 24/7',     process: "Guide d'Intégration SaaS",  rdv: 'Demo Scheduler Intelligent' },
  autre:        { qualify: 'Assistant Commercial IA',      faq: 'Conseiller 24/7',            process: 'Guide Digital Sur-Mesure',   rdv: 'Planificateur Intelligent' },
};

function getBotName(s: Sector | null, g: Goal | null, fr: boolean) {
  if (!s || !g) return fr ? 'Votre Bot' : 'Your Bot';
  return BOT_NAMES[s]?.[g] ?? (fr ? 'Assistant IA Personnalisé' : 'Custom AI Assistant');
}

function estimateSteps(cfg: Config) {
  let n = 12;
  if (cfg.goal === 'qualify') n += 8;
  else if (cfg.goal === 'faq') n += 6;
  else if (cfg.goal === 'process') n += 10;
  else if (cfg.goal === 'rdv') n += 6;
  n += cfg.features.length * 3;
  if (cfg.channel === 'email') n += 4; else if (cfg.channel) n += 2;
  return n;
}

function estimateDeploy(cfg: Config, fr: boolean) {
  const n = cfg.features.length;
  if (n <= 2) return fr ? '2-3 sem.' : '2-3 wks';
  if (n <= 4) return fr ? '3-4 sem.' : '3-4 wks';
  return fr ? '4-6 sem.' : '4-6 wks';
}

function buildPreview(cfg: Config, fr: boolean): Msg[] {
  const sLabel = cfg.sector ? SECTORS.find(s => s.id === cfg.sector)?.[fr ? 'fr' : 'en'] ?? '' : '';
  const greet  = cfg.tone === 'formal'    ? (fr ? 'Bonjour,' : 'Good day,')
               : cfg.tone === 'technical' ? (fr ? 'Système prêt.' : 'System ready.')
               : (fr ? 'Bonjour !' : 'Hello!');

  const welcomes: Record<Goal, { fr: string; en: string }> = {
    qualify: { fr: `${greet} Je suis votre assistant ${sLabel}. Pour mieux vous orienter, pouvez-vous décrire votre besoin principal ?`, en: `${greet} I'm your ${sLabel} assistant. Could you describe your main need?` },
    faq:     { fr: `${greet} Conseiller ${sLabel} disponible 24h/24. Quelle est votre question ?`, en: `${greet} Your ${sLabel} advisor, available 24/7. What is your question?` },
    process: { fr: `${greet} Je vais vous guider dans votre démarche ${sLabel}. Par où souhaitez-vous commencer ?`, en: `${greet} I'll walk you through your ${sLabel} process. Where would you like to start?` },
    rdv:     { fr: `${greet} Je peux planifier votre rendez-vous en 2 minutes. Quelle est votre disponibilité ?`, en: `${greet} I can schedule your appointment in 2 minutes. What's your availability?` },
  };
  const userMsgs: Record<Goal, { fr: string; en: string }> = {
    qualify: { fr: "J'ai besoin d'un devis rapidement",  en: "I need a quote quickly" },
    faq:     { fr: 'Quels sont vos tarifs ?',             en: 'What are your fees?' },
    process: { fr: 'Par où je commence ?',                en: 'Where do I start?' },
    rdv:     { fr: 'Disponible mardi ou jeudi',           en: 'Available Tuesday or Thursday' },
  };
  const botResponses: Record<Goal, { fr: string; en: string }> = {
    qualify: { fr: 'Parfait. Deux questions rapides : quel est votre budget approximatif et votre délai souhaité ?', en: 'Great. Two quick questions: what is your approximate budget and desired timeline?' },
    faq:     { fr: 'Nos tarifs dépendent de votre profil. Êtes-vous professionnel ou particulier ?', en: 'Fees depend on your profile. Are you a professional or individual?' },
    process: { fr: 'Voici les 3 premières étapes : ① Rassemblez vos documents ② Remplissez le formulaire ③ Confirmation sous 48h.', en: '① Gather documents ② Complete the form ③ Confirmation within 48h.' },
    rdv:     { fr: "J'ai 3 créneaux : Mardi 14h, Jeudi 10h, Vendredi 16h. Lequel vous convient ?", en: '3 slots: Tuesday 2pm, Thursday 10am, Friday 4pm. Which works?' },
  };
  const g = cfg.goal ?? 'faq';
  return [
    { role: 'bot',  text: welcomes[g][fr ? 'fr' : 'en'] },
    { role: 'user', text: userMsgs[g][fr ? 'fr' : 'en'] },
    { role: 'bot',  text: botResponses[g][fr ? 'fr' : 'en'] },
  ];
}

// ── Labels ─────────────────────────────────────────────────────────────────────

const TOTAL_STEPS = 5;

const STEP_Q = [
  { fr: 'Quel est votre secteur ?',               en: 'What is your industry?' },
  { fr: "Quel est l'objectif principal du bot ?", en: "What is the bot's main goal?" },
  { fr: 'Où va-t-il être déployé ?',              en: 'Where will it be deployed?' },
  { fr: 'Quelles fonctionnalités ?',              en: 'Which features?' },
  { fr: 'Quel ton doit-il adopter ?',             en: "What tone should it use?" },
];

const STEP_SUB = [
  { fr: 'Votre bot sera 100% adapté à votre domaine', en: 'Your bot will be fully tailored to your industry' },
  { fr: 'Définissez son rôle. Tout part de là',      en: 'Define its role. Everything starts here' },
  { fr: 'Là où vos clients vous contactent déjà',     en: 'Where your clients already reach you' },
  { fr: "Optionnel · Jusqu'à 4 fonctionnalités",      en: 'Optional · Up to 4 features' },
  { fr: 'Sa personnalité face à vos clients',          en: 'Its personality when talking to your clients' },
];

// ── Component ──────────────────────────────────────────────────────────────────

export default function BotConfigurator({ fr }: { fr: boolean }) {
  const [step, setStep]             = useState(0);
  const [cfg, setCfg]               = useState<Config>({ sector: null, goal: null, channel: null, features: [], tone: null });
  const [showForm, setShowForm]     = useState(false);
  const [form, setForm]             = useState({ prenom: '', entreprise: '', email: '' });
  const [sent, setSent]             = useState(false);
  const [loading, setLoading]       = useState(false);
  const [direction, setDirection]   = useState(1); // 1 = forward, -1 = back

  const sectorData    = SECTORS.find(s => s.id === cfg.sector);
  const color         = sectorData?.color ?? '#4F46E5';
  const icon          = sectorData?.icon ?? '🤖';
  const name          = getBotName(cfg.sector, cfg.goal, fr);
  const stepsCount    = estimateSteps(cfg);
  const deploy        = estimateDeploy(cfg, fr);
  const preview       = buildPreview(cfg, fr);
  const isComplete    = !!(cfg.sector && cfg.goal && cfg.channel && cfg.tone);
  const sectorFeatures = cfg.sector ? SECTOR_FEATURES[cfg.sector] : [];

  // Spring-animated progress bar
  const progressRaw   = useMotionValue((step / (TOTAL_STEPS - 1)) * 100);
  const progressSpring = useSpring(progressRaw, { stiffness: 80, damping: 20 });
  const progressWidth  = useTransform(progressSpring, v => `${v}%`);

  function goToStep(n: number) {
    setDirection(n > step ? 1 : -1);
    setStep(n);
    progressRaw.set((n / (TOTAL_STEPS - 1)) * 100);
  }

  // Single-select: update config then advance — unless it's the last step (tone)
  function pickSingle(update: Partial<Config>, _id: string, next: number) {
    setCfg(p => ({ ...p, ...update }));
    if (next < TOTAL_STEPS) {
      setTimeout(() => goToStep(next), 380);
    }
    // Last step (tone): stay at step 4, CTA button appears via isComplete
  }

  function toggleFeature(fid: string) {
    setCfg(prev => {
      const has = prev.features.includes(fid);
      if (has) return { ...prev, features: prev.features.filter(x => x !== fid) };
      if (prev.features.length >= 4) return prev;
      return { ...prev, features: [...prev.features, fid] };
    });
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  }

  // Recipe ingredients shown in the right panel
  const recipe = [
    { label: fr ? 'Secteur' : 'Industry', value: cfg.sector ? `${sectorData?.icon} ${sectorData?.[fr ? 'fr' : 'en']}` : null },
    { label: fr ? 'Objectif' : 'Goal',    value: cfg.goal    ? `${GOALS.find(g => g.id === cfg.goal)?.icon} ${GOALS.find(g => g.id === cfg.goal)?.[fr ? 'fr' : 'en']}` : null },
    { label: fr ? 'Canal' : 'Channel',    value: cfg.channel ? `${CHANNELS.find(c => c.id === cfg.channel)?.icon} ${CHANNELS.find(c => c.id === cfg.channel)?.[fr ? 'fr' : 'en']}` : null },
    { label: fr ? 'Options' : 'Features', value: cfg.features.length > 0 ? cfg.features.map(fid => sectorFeatures.find(x => x.id === fid)?.icon ?? '').join(' ') : null },
    { label: fr ? 'Ton' : 'Tone',         value: cfg.tone    ? `${TONES.find(t => t.id === cfg.tone)?.emoji} ${TONES.find(t => t.id === cfg.tone)?.[fr ? 'fr' : 'en']}` : null },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24 border-t border-happi-border relative overflow-hidden">
      <AnimatedMesh variant="purple" />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <FadeInUp>
            <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-widest mb-5 border border-happi-blue/20">
              {fr ? 'Studio de configuration' : 'Bot Studio'}
            </span>
          </FadeInUp>
          <FadeInUp delay={0.08}>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              {fr
                ? <><span className="gradient-text">Configurez</span> votre bot en 5 étapes</>
                : <><span className="gradient-text">Configure</span> your bot in 5 steps</>}
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.16}>
            <p className="text-happi-muted max-w-lg mx-auto text-base leading-relaxed">
              {fr
                ? "Choisissez chaque paramètre, votre bot se construit en temps réel."
                : "Pick each parameter, your bot assembles in real time."}
            </p>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">

          {/* ── LEFT: Wizard (3/5) ── */}
          <div className="lg:col-span-3 flex flex-col glass-card rounded-3xl overflow-hidden">

            {/* Progress bar — spring animated */}
            <div className="h-1 bg-happi-border">
              <motion.div
                className="h-full"
                style={{ width: progressWidth }}
                animate={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>

            {/* Step indicator row */}
            <div className="flex items-center gap-2 px-6 pt-5 pb-4 border-b border-happi-border/50">
              {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <motion.button
                  key={i}
                  layout
                  onClick={() => i < step && goToStep(i)}
                  whileTap={i < step ? { scale: 0.88 } : {}}
                  animate={i === step ? { scale: direction > 0 ? [1, 1.1, 1] : [1, 0.88, 1.06, 1] } : { scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${i < step ? 'cursor-pointer' : 'cursor-default'}`}
                  style={{
                    background: i < step ? color : i === step ? `${color}20` : 'rgba(255,255,255,0.05)',
                    border:     i === step ? `2px solid ${color}` : '2px solid transparent',
                    color:      i < step ? '#fff' : i === step ? color : '#64748b',
                  }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {i < step ? (
                      <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.2 }}>
                        <Check size={11} strokeWidth={3} />
                      </motion.span>
                    ) : (
                      <motion.span key="num" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.2 }}>
                        {i + 1}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
              <div className="flex-1" />
              <span className="text-[11px] text-happi-muted/40">
                {fr ? `Étape ${step + 1} / ${TOTAL_STEPS}` : `Step ${step + 1} of ${TOTAL_STEPS}`}
              </span>
            </div>

            {/* Big question — animates per step */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="px-7 pt-6 pb-4"
              >
                <h3 className="text-white text-2xl font-extrabold tracking-tight">{STEP_Q[step][fr ? 'fr' : 'en']}</h3>
                <p className="text-happi-muted text-sm mt-1.5">{STEP_SUB[step][fr ? 'fr' : 'en']}</p>
              </motion.div>
            </AnimatePresence>

            {/* Step content — slides in/out with direction */}
            <div className="px-7 pb-7 min-h-[320px]">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={{
                  enter:  (d: number) => ({ opacity: 0, x: d * 24 }),
                  center: { opacity: 1, x: 0 },
                  exit:   (d: number) => ({ opacity: 0, x: d * -24 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: [0.33, 1, 0.68, 1] }}
              >

              {/* ── Step 0: Sector ── */}
              {step === 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {SECTORS.map((s, i) => {
                    const sel = cfg.sector === s.id;
                    return (
                      <motion.button
                        key={s.id}
                        onClick={() => pickSingle({ sector: s.id, features: [] }, s.id, 1)}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.3 }}
                        whileHover={{ scale: 1.03, y: -1 }}
                        whileTap={{ scale: 0.96 }}
                        className="group flex items-center gap-3 p-4 rounded-2xl border text-left"
                        style={{
                          borderColor: sel ? s.color : 'transparent',
                          background:  sel ? `${s.color}18` : 'rgba(255,255,255,0.04)',
                          boxShadow:   sel ? `0 0 18px ${s.color}22` : 'none',
                        }}
                      >
                        <motion.div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                          animate={{ background: sel ? `${s.color}30` : 'rgba(255,255,255,0.06)' }}
                          whileHover={{ rotate: sel ? 0 : 8 }}
                          transition={{ duration: 0.2 }}
                        >
                          {s.icon}
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-sm font-semibold leading-tight transition-colors ${sel ? 'text-white' : 'text-happi-muted group-hover:text-white'}`}>
                            {fr ? s.fr : s.en}
                          </div>
                          <div className="text-[11px] text-happi-muted/50 mt-0.5 leading-snug truncate">
                            {fr ? s.descFr : s.descEn}
                          </div>
                        </div>
                        <AnimatePresence>
                          {sel && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ background: s.color }}
                            >
                              <Check size={10} className="text-white" strokeWidth={3} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    );
                  })}
                </div>
              )}

              {/* ── Step 1: Goal ── */}
              {step === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {GOALS.map((g, i) => {
                    const sel = cfg.goal === g.id;
                    return (
                      <motion.button
                        key={g.id}
                        onClick={() => pickSingle({ goal: g.id }, g.id, 2)}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.3 }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className="group relative flex flex-col gap-2 p-5 rounded-2xl border text-left"
                        style={{
                          borderColor: sel ? color : 'transparent',
                          background:  sel ? `${color}15` : 'rgba(255,255,255,0.04)',
                          boxShadow:   sel ? `0 0 20px ${color}22` : 'none',
                        }}
                      >
                        <motion.div
                          className="text-3xl"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        >{g.icon}</motion.div>
                        <div className={`text-base font-bold leading-tight transition-colors ${sel ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                          {fr ? g.fr : g.en}
                        </div>
                        <div className="text-xs text-happi-muted leading-relaxed">{fr ? g.descFr : g.descEn}</div>
                        <AnimatePresence>
                          {sel && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                              className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                              style={{ background: color }}
                            >
                              <Check size={10} className="text-white" strokeWidth={3} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    );
                  })}
                </div>
              )}

              {/* ── Step 2: Channel ── */}
              {step === 2 && (
                <div className="flex flex-col gap-3">
                  {CHANNELS.map((c, i) => {
                    const sel = cfg.channel === c.id;
                    return (
                      <motion.button
                        key={c.id}
                        onClick={() => pickSingle({ channel: c.id }, c.id, 3)}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.97 }}
                        className="group flex items-center gap-4 p-5 rounded-2xl border text-left"
                        style={{
                          borderColor: sel ? color : 'transparent',
                          background:  sel ? `${color}15` : 'rgba(255,255,255,0.04)',
                          boxShadow:   sel ? `0 0 20px ${color}20` : 'none',
                        }}
                      >
                        <motion.div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                          animate={{ background: sel ? `${color}30` : 'rgba(255,255,255,0.06)' }}
                          whileHover={{ rotate: sel ? 0 : 6 }}
                          transition={{ duration: 0.25 }}
                        >
                          {c.icon}
                        </motion.div>
                        <div className="flex-1">
                          <div className={`text-base font-bold transition-colors ${sel ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                            {fr ? c.fr : c.en}
                          </div>
                          <div className="text-xs text-happi-muted mt-1 leading-snug">{fr ? c.descFr : c.descEn}</div>
                        </div>
                        <AnimatePresence>
                          {sel && (
                            <motion.div
                              initial={{ scale: 0, rotate: -90 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: 90 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ background: color }}
                            >
                              <Check size={12} className="text-white" strokeWidth={3} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    );
                  })}
                </div>
              )}

              {/* ── Step 3: Features (sector-specific) ── */}
              {step === 3 && (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-happi-muted text-sm">
                      {fr
                        ? `Options adaptées à votre secteur (${cfg.features.length}/4)`
                        : `Options tailored to your industry (${cfg.features.length}/4)`}
                    </p>
                    <span className="text-[11px] text-happi-muted/40">{fr ? 'Optionnel' : 'Optional'}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {sectorFeatures.map((f, i) => {
                      const selected = cfg.features.includes(f.id);
                      const disabled = !selected && cfg.features.length >= 4;
                      return (
                        <motion.button
                          key={f.id}
                          onClick={() => !disabled && toggleFeature(f.id)}
                          disabled={disabled}
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: disabled ? 0.25 : 1, scale: 1 }}
                          transition={{ delay: i * 0.04, duration: 0.25 }}
                          whileHover={disabled ? {} : { scale: 1.03 }}
                          whileTap={disabled ? {} : { scale: 0.95 }}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border text-left ${
                            disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                          } ${selected ? 'text-white' : 'text-happi-muted'}`}
                          style={{
                            borderColor: selected ? color : 'transparent',
                            background:  selected ? `${color}15` : 'rgba(255,255,255,0.03)',
                            boxShadow:   selected ? `0 0 14px ${color}20` : 'none',
                          }}
                        >
                          <motion.span
                            className="text-xl flex-shrink-0"
                            animate={{ rotate: selected ? [0, -10, 10, 0] : 0 }}
                            transition={{ duration: 0.4 }}
                          >{f.icon}</motion.span>
                          <span className="text-xs font-medium leading-tight flex-1">{fr ? f.fr : f.en}</span>
                          <AnimatePresence>
                            {selected && (
                              <motion.span
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                              >
                                <Check size={11} style={{ color }} className="flex-shrink-0" strokeWidth={3} />
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </motion.button>
                      );
                    })}
                  </div>
                  <div className="flex justify-end mt-5">
                    <MagneticButton strength={0.25}>
                      <motion.button
                        onClick={() => goToStep(4)}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="px-6 py-2.5 rounded-xl text-sm font-bold text-white flex items-center gap-2"
                        style={{ background: color, boxShadow: `0 4px 16px ${color}40` }}
                      >
                        {fr ? 'Continuer' : 'Continue'}
                        <motion.span whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>→</motion.span>
                      </motion.button>
                    </MagneticButton>
                  </div>
                </>
              )}

              {/* ── Step 4: Tone ── */}
              {step === 4 && (
                <div className="flex flex-col gap-3">
                  {TONES.map((t, i) => {
                    const sel = cfg.tone === t.id;
                    return (
                      <motion.button
                        key={t.id}
                        onClick={() => pickSingle({ tone: t.id }, t.id, TOTAL_STEPS)}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        whileHover={{ scale: 1.02, boxShadow: `0 0 28px ${t.color}35` }}
                        whileTap={{ scale: 0.97 }}
                        className="group flex items-center gap-4 p-5 rounded-2xl border text-left"
                        style={{
                          borderColor: sel ? t.color : `${t.color}20`,
                          background:  sel ? `${t.color}15` : 'rgba(255,255,255,0.04)',
                          boxShadow:   sel ? `0 0 24px ${t.color}30` : 'none',
                        }}
                      >
                        <motion.div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                          animate={{ background: sel ? `${t.color}30` : 'rgba(255,255,255,0.06)' }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {t.emoji}
                        </motion.div>
                        <div className="flex-1">
                          <div className={`text-base font-bold leading-tight transition-colors ${sel ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                            {fr ? t.fr : t.en}
                          </div>
                          <div className="text-xs text-happi-muted mt-1 leading-relaxed">{fr ? t.descFr : t.descEn}</div>
                        </div>
                        <AnimatePresence>
                          {sel && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: 180 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ background: t.color }}
                            >
                              <Check size={12} className="text-white" strokeWidth={3} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    );
                  })}
                </div>
              )}
              </motion.div>
            </AnimatePresence>
            </div>

            {/* Nav footer */}
            <div className="px-7 pb-6 pt-4 border-t border-happi-border/50 flex items-center justify-between">
              <motion.button
                onClick={() => goToStep(Math.max(0, step - 1))}
                disabled={step === 0}
                whileHover={step > 0 ? { x: -3 } : {}}
                whileTap={step > 0 ? { scale: 0.95 } : {}}
                className="flex items-center gap-1.5 text-sm text-happi-muted hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft size={14} />
                {fr ? 'Précédent' : 'Back'}
              </motion.button>

              <AnimatePresence>
                {isComplete && step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  >
                    <MagneticButton strength={0.3}>
                      <button
                        onClick={() => setShowForm(true)}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white"
                        style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)`, boxShadow: `0 8px 24px ${color}40` }}
                      >
                        <Sparkles size={14} />
                        {fr ? 'Je veux ce bot !' : 'I want this bot!'}
                      </button>
                    </MagneticButton>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── RIGHT: Live preview (2/5) ── */}
          <div className="lg:col-span-2 flex flex-col gap-4 lg:sticky lg:top-24">

            {/* Recipe card */}
            <TiltCard intensity={3}>
            <div className="glass-card rounded-3xl overflow-hidden">
              <motion.div
                animate={{ background: `linear-gradient(135deg, ${color}10, transparent)` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="px-5 py-4 flex items-center gap-3 border-b border-happi-border/50"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-all duration-500"
                  style={{ background: `${color}25`, boxShadow: cfg.sector ? `0 0 20px ${color}30` : 'none' }}
                >
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-sm leading-tight truncate">{name}</div>
                  <div className="text-happi-muted text-xs mt-0.5">
                    {isComplete ? (fr ? '✓ Prêt à être construit' : '✓ Ready to be built') : (fr ? 'Configuration en cours…' : 'Configuring…')}
                  </div>
                </div>
                {isComplete && (
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full border whitespace-nowrap"
                    style={{ color, background: `${color}15`, borderColor: `${color}40` }}>
                    ✓ {fr ? 'Complet' : 'Complete'}
                  </span>
                )}
              </motion.div>

              {/* Slots — animés à l'apparition de chaque valeur */}
              <div className="p-4 flex flex-col gap-2">
                {recipe.map((slot, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      background: slot.value ? `${color}0d` : 'rgba(255,255,255,0.02)',
                      borderLeftColor: slot.value ? `${color}60` : 'transparent',
                    }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl"
                    style={{ borderLeft: '2px solid transparent' }}
                  >
                    <div className="text-[10px] font-bold text-happi-muted/30 w-5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</div>
                    <div className="text-[11px] text-happi-muted/40 w-14 flex-shrink-0 leading-tight">{slot.label}</div>
                    <div className="flex-1 min-w-0">
                      <AnimatePresence mode="wait">
                        {slot.value ? (
                          <motion.div
                            key="value"
                            initial={{ opacity: 0, scale: 0.85, y: 4 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                            className="text-xs font-semibold text-white truncate"
                          >
                            {slot.value}
                          </motion.div>
                        ) : (
                          <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="h-2.5 rounded-full bg-white/5"
                          >
                            {i === step && <div className="h-full w-1/3 rounded-full animate-pulse" style={{ background: `${color}50` }} />}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              {cfg.goal && (
                <div className="px-4 pb-4 grid grid-cols-2 gap-2">
                  {[
                    { icon: <Zap size={12} />,   label: fr ? 'Étapes estimées' : 'Est. steps', value: String(stepsCount) },
                    { icon: <Clock size={12} />,  label: fr ? 'Déploiement'     : 'Deploy time', value: deploy },
                  ].map(stat => (
                    <div key={stat.label} className="bg-happi-dark rounded-xl p-3 flex items-center gap-2">
                      <span style={{ color }}>{stat.icon}</span>
                      <div>
                        <div className="text-white text-sm font-bold">{stat.value}</div>
                        <div className="text-happi-muted text-[10px]">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            </TiltCard>

            {/* Chat preview */}
            <TiltCard intensity={3}>
            <div className="glass-card rounded-3xl overflow-hidden">
              <div className="px-4 py-3 border-b border-happi-border/50 flex items-center gap-2">
                <MessageCircle size={13} className="text-happi-muted" />
                <span className="text-xs font-semibold text-happi-muted">{fr ? 'Aperçu de conversation' : 'Conversation preview'}</span>
                {cfg.sector && cfg.goal && (
                  <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${color}20`, color }}>Live</span>
                )}
              </div>
              <div className="p-4 flex flex-col gap-3 min-h-[120px]">
                <AnimatePresence mode="wait">
                {cfg.sector && cfg.goal ? (
                  <motion.div
                    key={`${cfg.sector}-${cfg.goal}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-3"
                  >
                  {preview.map((msg, i) =>
                    msg.role === 'bot' ? (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.12, duration: 0.3 }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5" style={{ background: `${color}25` }}>{icon}</div>
                        <div className="bg-white/6 rounded-xl rounded-tl-sm px-3 py-2 text-[11px] text-white leading-relaxed max-w-[88%]">{msg.text}</div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.12, duration: 0.3 }}
                        className="flex items-start gap-2 justify-end"
                      >
                        <div className="rounded-xl rounded-tr-sm px-3 py-2 text-[11px] text-white leading-relaxed max-w-[88%]" style={{ background: color }}>{msg.text}</div>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10 text-[10px] mt-0.5">👤</div>
                      </motion.div>
                    )
                  )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center py-8"
                  >
                    <p className="text-[11px] text-happi-muted/40 text-center leading-relaxed">
                      {fr ? 'Choisissez un secteur\npour voir votre bot en action' : 'Pick an industry\nto see your bot in action'}
                    </p>
                  </motion.div>
                )}
                </AnimatePresence>
              </div>
              {cfg.sector && cfg.goal && (
                <div className="px-4 pb-4">
                  <div className="bg-happi-dark rounded-xl px-3 py-2 flex items-center gap-2 border border-happi-border/40">
                    <span className="text-[11px] text-happi-muted/30 flex-1">{fr ? 'Votre message…' : 'Your message…'}</span>
                    <div className="w-5 h-5 rounded-lg flex items-center justify-center" style={{ background: color }}>
                      <span className="text-white text-[10px] font-bold">↑</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* ── Lead form modal — AnimatePresence entry ── */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={e => { if (e.target === e.currentTarget) setShowForm(false); }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="w-full sm:max-w-md glass-card rounded-t-3xl sm:rounded-3xl overflow-hidden"
              style={{ borderTopWidth: '2px', borderTopColor: color }}
            >
              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="px-6 py-5 border-b border-happi-border/50" style={{ background: `linear-gradient(135deg, ${color}12, transparent)` }}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: `${color}25` }}>{icon}</div>
                          <div>
                            <div className="text-white font-bold text-sm">{name}</div>
                            <div className="text-happi-muted text-xs mt-0.5">{fr ? 'Configuration complète ✓' : 'Config complete ✓'}</div>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                          onClick={() => setShowForm(false)}
                          className="text-happi-muted hover:text-white transition-colors text-lg leading-none flex-shrink-0"
                        >✕</motion.button>
                      </div>
                    </div>
                    <div className="px-6 py-5">
                      <p className="text-happi-muted text-sm mb-5 leading-relaxed">
                        {fr
                          ? "Laissez vos coordonnées. Je vous envoie une proposition personnalisée basée sur votre configuration sous 24h."
                          : "Leave your details. I'll send a personalized proposal based on your config within 24h."}
                      </p>
                      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        {[
                          { key: 'prenom',     placeholder: fr ? 'Prénom' : 'First name',        type: 'text'  },
                          { key: 'entreprise', placeholder: fr ? 'Entreprise' : 'Company',        type: 'text'  },
                          { key: 'email',      placeholder: fr ? 'Email professionnel' : 'Work email', type: 'email' },
                        ].map((field, i) => (
                          <motion.input
                            key={field.key}
                            required
                            type={field.type}
                            placeholder={field.placeholder}
                            value={form[field.key as keyof typeof form]}
                            onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.07, duration: 0.3 }}
                            className="bg-happi-dark border border-happi-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-happi-muted/40 outline-none focus:border-happi-blue/60 transition-colors"
                          />
                        ))}
                        <MagneticButton strength={0.2}>
                          <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full py-3.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 mt-1 disabled:opacity-60"
                            style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)`, boxShadow: `0 8px 24px ${color}30` }}
                          >
                            {loading
                              ? <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}><Loader2 size={16} /></motion.span>
                              : <Sparkles size={14} />}
                            {loading ? (fr ? 'Envoi…' : 'Sending…') : (fr ? 'Construire mon bot' : 'Build my bot')}
                          </motion.button>
                        </MagneticButton>
                        <p className="text-[11px] text-happi-muted/40 text-center">{fr ? 'Aucun engagement · Réponse sous 24h · Gratuit' : 'No commitment · Reply within 24h · Free'}</p>
                      </form>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="text-center py-14 px-8 flex flex-col items-center gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                      style={{ background: `${color}20` }}
                    >🚀</motion.div>
                    <h3 className="text-white font-extrabold text-xl">{fr ? 'Votre bot est en route !' : 'Your bot is on its way!'}</h3>
                    <p className="text-happi-muted text-sm leading-relaxed max-w-sm">
                      {fr
                        ? `Merci ${form.prenom}. J'analyse votre configuration ${name} et vous envoie une proposition sous 24h.`
                        : `Thanks ${form.prenom}. I'm reviewing your ${name} config and will send a proposal within 24h.`}
                    </p>
                    <motion.button
                      onClick={() => { setShowForm(false); setSent(false); }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-2 text-xs text-happi-muted hover:text-white transition-colors"
                    >
                      {fr ? 'Fermer' : 'Close'}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
