'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';

type DemoOption = {
  label: string;
  response: string;
  followUp?: DemoOption[];
};

type Bot = {
  nameFr: string;
  nameEn: string;
  sectorFr: string;
  sectorEn: string;
  pioneerFr: string;
  pioneerEn: string;
  icon: string;
  color: string;
  capsFr: string[];
  capsEn: string[];
  steps: number;
  kpis?: string;
  demoWelcomeFr: string;
  demoWelcomeEn: string;
  demoOptsFr: DemoOption[];
  demoOptsEn: DemoOption[];
};

type Message = { role: 'bot' | 'user'; text: string };

// ─── Bot data ─────────────────────────────────────────────────────────────────

const bots: Bot[] = [
  {
    nameFr: 'Bot Portfolio Interactif',
    nameEn: 'Interactive Portfolio Bot',
    sectorFr: 'Architecture culturelle',
    sectorEn: 'Cultural architecture',
    pioneerFr: '1er bot portfolio archi de France',
    pioneerEn: 'First archi portfolio bot in France',
    icon: '🏛️',
    color: '#D4A853',
    capsFr: [
      'Guide portfolio interactif par type de projet',
      "Qualification maîtres d'ouvrage (MOA)",
      'Exploration réalisations culturelles & urbaines',
      'Prise de contact associés directement',
    ],
    capsEn: [
      'Interactive portfolio guide by project type',
      'Project owner (MOA) qualification',
      'Explore cultural & urban projects',
      'Direct contact with founding partners',
    ],
    steps: 14,
    demoWelcomeFr: "Bonjour ! Je suis votre guide portfolio. Quel type de projet vous intéresse ?",
    demoWelcomeEn: "Hello! I'm your portfolio guide. What type of project interests you?",
    demoOptsFr: [
      {
        label: "🏛️ Équipements culturels",
        response: "Salles de spectacle, musées, médiathèques... Nos réalisations phares incluent le Zénith de Pau et la Médiathèque de Tours-Nord. Souhaitez-vous explorer le portfolio ou qualifier votre projet ?",
        followUp: [
          { label: "📸 Explorer le portfolio", response: "Je vous présente nos 12 réalisations culturelles. Chaque projet est documenté avec les contraintes techniques, le budget et le retour client. Par quel projet souhaitez-vous commencer ?" },
          { label: "📋 Qualifier mon projet", response: "Parfait. Un associé peut vous rencontrer pour analyser votre programme, votre budget et votre calendrier. Laissez-nous vos coordonnées et nous revenons vers vous sous 48h." },
        ],
      },
      {
        label: "🏘️ Logements & urbain",
        response: "Notre approche valorise le design contemporain et l'intégration paysagère. Nous intervenons sur des programmes R+3 à R+8, souvent en mixité sociale. Quel est votre programme ?",
        followUp: [
          { label: "🏗️ Habitat collectif", response: "Pour un habitat collectif, nous livrons plans, permis de construire et suivi chantier. Quelle est la surface SHON envisagée et dans quelle ville ?" },
          { label: "🌳 Résidentiel individuel", response: "Chaque maison individuelle est pensée pour s'intégrer au paysage local. Un architecte associé peut vous rencontrer — à quelle ville êtes-vous ?" },
        ],
      },
    ],
    demoOptsEn: [
      {
        label: "🏛️ Cultural facilities",
        response: "Concert halls, museums, libraries... Our flagship projects include the Zénith de Pau and Tours-Nord Media Library. Would you like to explore the portfolio or qualify your project?",
        followUp: [
          { label: "📸 Explore portfolio", response: "I'll walk you through 12 cultural projects, each documented with technical constraints, budget, and client feedback. Which one would you like to start with?" },
          { label: "📋 Qualify my project", response: "A founding partner can meet with you to review your programme, budget, and timeline. Leave your details and we'll get back to you within 48h." },
        ],
      },
      {
        label: "🏘️ Housing & urban",
        response: "Our approach blends contemporary design with landscape integration. We work on R+3 to R+8 mixed-use programmes. What is your programme?",
        followUp: [
          { label: "🏗️ Multi-unit housing", response: "For multi-unit housing, we deliver plans, building permits, and site supervision. What is the planned floor area and in which city?" },
          { label: "🌳 Individual housing", response: "Each private home is designed to blend with its local landscape. An associate architect can meet you. Which city are you based in?" },
        ],
      },
    ],
  },
  {
    nameFr: 'Assistant Notarial',
    nameEn: 'Notarial Assistant',
    sectorFr: 'Notariat',
    sectorEn: 'Notarial law',
    pioneerFr: '1er bot notarial de France',
    pioneerEn: 'First notarial bot in France',
    icon: '⚖️',
    color: '#D4AF37',
    capsFr: [
      "FAQ notariale + qualification de l'acte",
      'Estimateur de frais de notaire',
      "Orientation vers l'étude par région",
      'Clients internationaux multilingues',
    ],
    capsEn: [
      'Notarial FAQ + deed qualification',
      'Notary fee estimator',
      'Routing to the right office by region',
      'Multilingual international clients',
    ],
    steps: 28,
    demoWelcomeFr: "Bonjour ! Pour quel acte souhaitez-vous consulter un notaire ?",
    demoWelcomeEn: "Hello! Which notarial deed do you need help with?",
    demoOptsFr: [
      {
        label: "🏠 Achat immobilier",
        response: "Pour un achat immobilier, les frais de notaire représentent 7 à 8% dans l'ancien et 2 à 3% dans le neuf. Souhaitez-vous une estimation précise ou prendre rendez-vous ?",
        followUp: [
          { label: "💶 Simuler mes frais", response: "Pour un bien à 350 000€ dans l'ancien, les frais de notaire sont estimés à 26 600€. Voulez-vous que j'affine ce calcul avec votre montant et votre département ?" },
          { label: "📅 Prendre rendez-vous", response: "Je vous mets en relation avec un notaire disponible dans votre département. Quelle est votre ville et votre disponibilité préférée ?" },
        ],
      },
      {
        label: "⚖️ Succession",
        response: "Le règlement d'une succession nécessite plusieurs démarches. Je peux vous indiquer les pièces à fournir et estimer les frais selon la masse successorale.",
        followUp: [
          { label: "📄 Voir les pièces requises", response: "Documents requis : acte de décès, livret de famille, pièces d'identité des héritiers, justificatifs de propriété. Voulez-vous la liste complète selon votre situation familiale ?" },
          { label: "💶 Estimer les frais", response: "Pour une succession à 200 000€ avec 2 héritiers directs, les frais sont estimés à 4 800€ hors droits. Affinons avec votre situation réelle ?" },
        ],
      },
    ],
    demoOptsEn: [
      {
        label: "🏠 Property purchase",
        response: "Notary fees are 7–8% for existing properties and 2–3% for new builds. Would you like a precise estimate or to book an appointment?",
        followUp: [
          { label: "💶 Simulate my fees", response: "For a €350,000 existing property, notary fees are estimated at €26,600. Shall I refine this with your exact amount and department?" },
          { label: "📅 Book an appointment", response: "I'll connect you with an available notary in your area. What is your city and preferred availability?" },
        ],
      },
      {
        label: "⚖️ Estate settlement",
        response: "Settling an estate involves several steps. I can list the documents required and estimate costs based on the estate value.",
        followUp: [
          { label: "📄 See required documents", response: "Required: death certificate, family record book, heirs' ID documents, proof of assets. Want the full list based on your family situation?" },
          { label: "💶 Estimate costs", response: "For a €200,000 estate with 2 direct heirs, fees are estimated at €4,800 excluding inheritance tax. Shall we refine this?" },
        ],
      },
    ],
  },
  {
    nameFr: 'Bot Recouvrement de Créances',
    nameEn: 'Debt Recovery Bot',
    sectorFr: 'Recouvrement de créances B2B',
    sectorEn: 'B2B debt collection',
    pioneerFr: '1er bot recouvrement de France',
    pioneerEn: 'First debt recovery bot in France',
    icon: '💼',
    color: '#0E7C43',
    kpis: '82% taux · 1,2 Md€ récupérés · 8,5/10',
    capsFr: [
      'Suivi dossier en temps réel',
      'Dépôt de créance guidé (B2B / particulier / international)',
      'Renseignement solvabilité on demand',
      'FAQ processus, délais & honoraires',
    ],
    capsEn: [
      'Real-time case tracking',
      'Guided debt filing (B2B / individual / international)',
      'On-demand solvency check',
      'FAQ: process, timelines & fees',
    ],
    steps: 26,
    demoWelcomeFr: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
    demoWelcomeEn: "Hello! How can I help you today?",
    demoOptsFr: [
      {
        label: "📋 Suivre mon dossier",
        response: "Entrez votre référence dossier. Je vous affiche instantanément : statut actuel, paiements reçus, prochaine action et délai estimé.",
        followUp: [
          { label: "🔑 J'ai ma référence", response: "Entrez votre référence (format : ARC-XXXXXX). Je vous affiche en temps réel l'état de votre dossier, les dernières actions et les prochaines étapes." },
          { label: "📞 Contacter mon gestionnaire", response: "Je vous mets en relation directe avec votre gestionnaire de dossier. Préférez-vous un rappel téléphonique, un email, ou un rendez-vous en visio ?" },
        ],
      },
      {
        label: "📥 Déposer une créance",
        response: "Je vous guide étape par étape. Êtes-vous une société, un particulier, ou un créancier international ? Le processus prend moins de 10 minutes.",
        followUp: [
          { label: "🏢 Créance B2B", response: "Pour une créance B2B : montant minimum 1 000€, justificatif de la dette requis (facture, contrat, bon de commande). Temps estimé : 8 minutes. On commence ?" },
          { label: "🌍 Créance internationale", response: "Nous intervenons dans 12 pays européens. Quel est le pays débiteur ? Je vous indique la procédure applicable et les délais moyens de recouvrement." },
        ],
      },
    ],
    demoOptsEn: [
      {
        label: "📋 Track my case",
        response: "Enter your case reference. I'll instantly display: current status, payments received, next planned action, and estimated timeline.",
        followUp: [
          { label: "🔑 I have my reference", response: "Enter your reference (format: ARC-XXXXXX). I'll show you the real-time status, latest actions, and next steps for your case." },
          { label: "📞 Contact my case manager", response: "I'll connect you directly with your case manager. Do you prefer a phone callback, email, or a video meeting?" },
        ],
      },
      {
        label: "📥 File a debt claim",
        response: "I'll guide you step by step. Are you a company, an individual, or an international creditor? The process takes under 10 minutes.",
        followUp: [
          { label: "🏢 B2B debt", response: "For a B2B debt: minimum €1,000, proof of debt required (invoice, contract, purchase order). Estimated time: 8 minutes. Ready to start?" },
          { label: "🌍 International debt", response: "We operate in 12 European countries. Which country is the debtor in? I'll show you the applicable procedure and average recovery timelines." },
        ],
      },
    ],
  },
  {
    nameFr: 'Assistant Expert-Comptable',
    nameEn: 'Accounting Assistant',
    sectorFr: 'Expertise comptable',
    sectorEn: 'Accounting & tax advisory',
    pioneerFr: '1er bot comptable de France',
    pioneerEn: 'First accounting bot in France',
    icon: '📊',
    color: '#C5A028',
    capsFr: [
      'Collecte de documents mensuelle par profil client',
      'Calendrier fiscal personnalisé (IS, AE, BNC, SCI)',
      'Onboarding & qualification nouveau client',
      'Niche influenceurs & créateurs de contenu',
    ],
    capsEn: [
      'Monthly document collection by client profile',
      'Personalised tax calendar (corp, sole trader, etc.)',
      'New client onboarding & qualification',
      'Creator economy & influencer niche',
    ],
    steps: 30,
    demoWelcomeFr: "Bonjour ! Quel est votre profil pour personnaliser votre suivi ?",
    demoWelcomeEn: "Hello! What's your profile so I can personalise your follow-up?",
    demoOptsFr: [
      {
        label: "🏢 Société (SARL / SAS)",
        response: "Ce mois-ci : relevés bancaires, factures fournisseurs, notes de frais. Votre prochaine échéance fiscale est la TVA du trimestre — dans 18 jours.",
        followUp: [
          { label: "📤 Déposer mes documents", response: "Je génère votre lien de dépôt sécurisé. Glissez-déposez vos fichiers — je les classe automatiquement par catégorie comptable et vous confirme la réception." },
          { label: "📅 Voir mon calendrier fiscal", response: "Vos prochaines échéances : TVA mensuelle M-1 dans 18 jours, DSN le 5 du mois, liasse fiscale au 31/05. Je vous envoie des rappels automatiques ?" },
        ],
      },
      {
        label: "🎬 Influenceur / Créateur",
        response: "Revenus YouTube, TikTok, partenariats de marque... Je suis formé pour votre fiscalité spécifique. Quelle est votre structure juridique actuelle ?",
        followUp: [
          { label: "🏢 Je suis en société", response: "SAS ou SARL pour créateur : dividendes optimisés, charges sociales réduites sur les revenus numériques. Je prépare votre dossier fiscal adapté." },
          { label: "🧾 Je suis auto-entrepreneur", response: "AE créateur : plafond à surveiller (77 700€/an en prestations). Je calcule votre position et vous alerte automatiquement si vous approchez du seuil." },
        ],
      },
    ],
    demoOptsEn: [
      {
        label: "🏢 Company (Ltd / SAS)",
        response: "This month: bank statements, supplier invoices, expense reports. Your next tax deadline is the quarterly VAT — in 18 days.",
        followUp: [
          { label: "📤 Upload my documents", response: "I generate your secure upload link. Drag and drop your files — I'll automatically categorise them by accounting type and confirm receipt." },
          { label: "📅 My tax calendar", response: "Upcoming deadlines: monthly VAT M-1 in 18 days, DSN on the 5th, annual tax return by 31/05. Shall I set up automatic reminders?" },
        ],
      },
      {
        label: "🎬 Influencer / Creator",
        response: "YouTube, TikTok, brand deals... I'm trained for your specific tax situation. What is your current legal structure?",
        followUp: [
          { label: "🏢 I have a company", response: "SAS or Ltd for creators: optimised dividends, reduced social charges on digital income. I'll prepare your tailored digital income tax file." },
          { label: "🧾 I'm a sole trader", response: "Self-employed creator: threshold to watch (€77,700/year in services). I'll track your position and automatically alert you as you approach the limit." },
        ],
      },
    ],
  },
  {
    nameFr: 'Bot Pre-Sales Intelligence',
    nameEn: 'Pre-Sales Intelligence Bot',
    sectorFr: 'Identity SaaS · RegTech MEA',
    sectorEn: 'Identity SaaS · RegTech MEA',
    pioneerFr: '1er bot pre-sales Identity SaaS',
    pioneerEn: 'First pre-sales Identity SaaS bot',
    icon: '🔐',
    color: '#4F46E5',
    capsFr: [
      'Qualification prospect enterprise en 2 min',
      'Navigateur compliance 22 pays (SAMA, CBUAE, CBN…)',
      'Calculateur ROI par volume de vérification',
      'Réponses techniques pre-sales 24/7',
    ],
    capsEn: [
      'Enterprise prospect qualification in 2 min',
      '22-country compliance navigator (SAMA, CBUAE, CBN…)',
      'ROI calculator by verification volume',
      'Technical pre-sales answers 24/7',
    ],
    steps: 36,
    demoWelcomeFr: "Bienvenue ! Je qualifie votre besoin en 2 minutes. Quel est votre secteur ?",
    demoWelcomeEn: "Welcome! I'll qualify your needs in 2 minutes. What's your sector?",
    demoOptsFr: [
      {
        label: "🏦 Banque / Fintech",
        response: "Pour une banque, la combinaison eKYC + AML + Device Intelligence couvre l'onboarding, la conformité et la prévention de fraude. Quel est votre volume mensuel de vérifications ?",
        followUp: [
          { label: "📊 Volume : moins de 10k/mois", response: "Formule Starter : eKYC + Document Verification. ROI moyen constaté : 65% de réduction du coût d'onboarding. Voulez-vous un calcul personnalisé sur votre base ?" },
          { label: "📈 Volume : plus de 100k/mois", response: "Tarification enterprise sur mesure, SLA 99.9%, compliance officer dédié. Je programme une démo technique pour votre équipe — quelle est votre disponibilité ?" },
        ],
      },
      {
        label: "🌍 Question conformité",
        response: "Je couvre 22 pays : SAMA (Arabie Saoudite), CBUAE (Émirats), CBE (Égypte), CBN (Nigeria)... Quel marché vous concerne ?",
        followUp: [
          { label: "🇸🇦 Arabie Saoudite / SAMA", response: "SAMA CDD Framework 2021 : AML Level 2 requis, eKYC certifié Saudi National ID. Délai conformité estimé : 4 à 6 semaines selon votre infrastructure actuelle." },
          { label: "🇳🇬 Nigeria / CBN", response: "CBN KYC Directives : Tier 1/2/3 selon les montants. Notre couverture NIBSS + NIN garantit 98.7% de matching. À quel niveau de vérification êtes-vous actuellement ?" },
        ],
      },
    ],
    demoOptsEn: [
      {
        label: "🏦 Bank / Fintech",
        response: "For a bank, the eKYC + AML + Device Intelligence stack covers onboarding, compliance and fraud prevention. What is your monthly verification volume?",
        followUp: [
          { label: "📊 Volume: under 10k/month", response: "Starter plan: eKYC + Document Verification. Average observed ROI: 65% reduction in onboarding cost. Want a personalised calculation based on your volumes?" },
          { label: "📈 Volume: over 100k/month", response: "Custom enterprise pricing, 99.9% SLA, dedicated compliance officer. I can schedule a technical demo for your team — what's your availability?" },
        ],
      },
      {
        label: "🌍 Compliance question",
        response: "I cover 22 countries: SAMA (Saudi Arabia), CBUAE (UAE), CBE (Egypt), CBN (Nigeria)... Which market are you asking about?",
        followUp: [
          { label: "🇸🇦 Saudi Arabia / SAMA", response: "SAMA CDD Framework 2021: AML Level 2 required, eKYC certified Saudi National ID. Estimated compliance timeline: 4 to 6 weeks depending on your current infrastructure." },
          { label: "🇳🇬 Nigeria / CBN", response: "CBN KYC Directives: Tier 1/2/3 by transaction amount. Our NIBSS + NIN coverage guarantees 98.7% match rate. What verification level are you currently operating at?" },
        ],
      },
    ],
  },
];

// ─── BotCard ──────────────────────────────────────────────────────────────────

function BotCard({
  bot, fr, onDemo, onAdapt,
}: {
  bot: Bot; fr: boolean;
  onDemo: () => void;
  onAdapt: () => void;
}) {
  const name    = fr ? bot.nameFr    : bot.nameEn;
  const sector  = fr ? bot.sectorFr  : bot.sectorEn;
  const pioneer = fr ? bot.pioneerFr : bot.pioneerEn;
  const caps    = fr ? bot.capsFr    : bot.capsEn;

  return (
    <TiltCard intensity={4}>
      <div
        className="glass-card rounded-2xl overflow-hidden flex flex-col h-full hover:border-white/15 transition-colors"
        style={{ borderTopWidth: '3px', borderTopColor: bot.color }}
      >
        <div className="p-6 flex flex-col gap-4 flex-1">

          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <motion.div
                className="text-2xl mb-2"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {bot.icon}
              </motion.div>
              <h2 className="text-base font-bold text-white leading-tight">{name}</h2>
              <div className="text-happi-muted text-xs mt-0.5">{sector}</div>
            </div>
            {/* Pulsing pioneer badge */}
            <span
              className="text-[10px] font-bold px-2.5 py-1 rounded-full border flex-shrink-0 text-right leading-tight flex items-center gap-1.5"
              style={{ color: bot.color, background: `${bot.color}18`, borderColor: `${bot.color}40` }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
                style={{ background: bot.color }}
              />
              {pioneer}
            </span>
          </div>

          {/* KPIs */}
          {bot.kpis && (
            <div
              className="text-[10px] font-semibold px-3 py-1.5 rounded-lg border"
              style={{ color: bot.color, background: `${bot.color}10`, borderColor: `${bot.color}30` }}
            >
              {bot.kpis}
            </div>
          )}

          {/* Capabilities */}
          <ul className="flex flex-col gap-2 flex-1">
            {caps.map((cap, i) => (
              <motion.li
                key={cap}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35, ease: 'easeOut' }}
                className="flex items-start gap-2 text-xs text-happi-muted leading-relaxed"
              >
                <span className="mt-0.5 flex-shrink-0" style={{ color: bot.color }}>›</span>
                {cap}
              </motion.li>
            ))}
          </ul>

          {/* Steps */}
          <div className="text-[10px] text-happi-muted font-medium pt-3 border-t border-happi-border/60">
            {bot.steps} {fr ? 'étapes de conversation' : 'conversation steps'}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="px-5 pb-5 flex flex-col gap-2.5">
          <motion.button
            onClick={onDemo}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-2.5 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-2"
            style={{ background: bot.color }}
          >
            {fr ? 'Voir en action' : 'See it in action'}
            <motion.span whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 300 }}>
              <ArrowRight size={13} />
            </motion.span>
          </motion.button>
          <motion.button
            onClick={onAdapt}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-2.5 rounded-xl text-xs font-semibold border transition-colors flex items-center justify-center gap-1.5"
            style={{ color: bot.color, borderColor: `${bot.color}45` }}
          >
            {fr ? 'Adapter à mon secteur' : 'Adapt to my sector'}
          </motion.button>
        </div>
      </div>
    </TiltCard>
  );
}

// ─── TypingIndicator ──────────────────────────────────────────────────────────

function TypingIndicator({ icon, color }: { icon: string; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm"
        style={{ background: `${color}25` }}
      >
        {icon}
      </div>
      <div className="bg-white/6 rounded-xl rounded-tl-sm px-4 py-3 flex gap-1.5 items-center">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="w-1.5 h-1.5 rounded-full bg-happi-muted animate-bounce"
            style={{ animationDelay: `${delay}ms`, animationDuration: '0.9s' }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── ChatModal ────────────────────────────────────────────────────────────────

function ChatModal({
  bot, fr, messages, currentOpts, isTyping, messagesEndRef,
  onPickOption, onClose, onGetBot,
}: {
  bot: Bot;
  fr: boolean;
  messages: Message[];
  currentOpts: DemoOption[];
  isTyping: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
  onPickOption: (opt: DemoOption) => void;
  onClose: () => void;
  onGetBot: () => void;
}) {
  const name    = fr ? bot.nameFr    : bot.nameEn;
  const pioneer = fr ? bot.pioneerFr : bot.pioneerEn;
  const showCTA = !isTyping && currentOpts.length === 0 && messages.length > 1;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="w-full sm:max-w-md flex flex-col rounded-t-2xl sm:rounded-2xl overflow-hidden border border-happi-border"
        style={{
          background: '#0B1220',
          borderTopWidth: '3px',
          borderTopColor: bot.color,
          height: 'min(75vh, 560px)',
        }}
      >
        {/* Modal header */}
        <div className="px-4 py-3 border-b border-happi-border flex items-center gap-3 flex-shrink-0">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
            style={{ background: `${bot.color}20` }}
          >
            {bot.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold text-white leading-tight truncate">{name}</div>
            <div className="text-[10px] font-semibold mt-0.5" style={{ color: bot.color }}>
              {pioneer}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center text-happi-muted hover:text-white flex-shrink-0"
            aria-label="Close"
          >
            <X size={14} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 min-h-0">
          <AnimatePresence initial={false}>
            {messages.map((msg, i) =>
              msg.role === 'bot' ? (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex items-start gap-2"
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm mt-0.5"
                    style={{ background: `${bot.color}25` }}
                  >
                    {bot.icon}
                  </div>
                  <div className="bg-white/6 rounded-xl rounded-tl-sm px-3 py-2.5 text-sm text-white leading-relaxed max-w-[85%]">
                    {msg.text}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex items-start gap-2 justify-end"
                >
                  <div
                    className="rounded-xl rounded-tr-sm px-3 py-2.5 text-sm text-white leading-relaxed max-w-[85%]"
                    style={{ background: bot.color }}
                  >
                    {msg.text}
                  </div>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10 text-xs mt-0.5">
                    👤
                  </div>
                </motion.div>
              )
            )}

            {isTyping && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.2 }}
              >
                <TypingIndicator icon={bot.icon} color={bot.color} />
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>

        {/* Options / CTA */}
        <div className="px-4 py-3 border-t border-happi-border flex-shrink-0">
          <AnimatePresence mode="wait">
            {currentOpts.length > 0 && (
              <motion.div
                key="opts"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex flex-wrap gap-2"
              >
                {currentOpts.map((opt, i) => (
                  <motion.button
                    key={opt.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => onPickOption(opt)}
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      color: bot.color,
                      borderColor: `${bot.color}50`,
                      background: `${bot.color}0d`,
                    }}
                  >
                    {opt.label}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {showCTA && (
            <button
              onClick={onGetBot}
              className="w-full py-3 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
              style={{ background: bot.color }}
            >
              {fr ? 'Obtenir ce bot pour mon secteur' : 'Get this bot for my sector'}
              <ArrowRight size={15} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── LeadForm ─────────────────────────────────────────────────────────────────

function LeadForm({
  botName, fr, onClose,
}: {
  botName: string;
  fr: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({ prenom: '', entreprise: '', email: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  }

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full sm:max-w-sm bg-happi-surface border border-happi-border rounded-t-2xl sm:rounded-2xl p-6 flex flex-col gap-4">
        {!sent ? (
          <>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-white font-bold text-base">
                  {fr ? 'Adapter ce bot à mon secteur' : 'Adapt this bot to my sector'}
                </h3>
                <p className="text-happi-muted text-xs mt-1 leading-relaxed">
                  {fr
                    ? `Discutons d'adapter « ${botName} » à votre structure.`
                    : `Let's talk about adapting "${botName}" to your organisation.`}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-happi-muted hover:text-white transition-colors flex-shrink-0 mt-0.5"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                required
                placeholder={fr ? 'Prénom' : 'First name'}
                value={form.prenom}
                onChange={(e) => setForm((f) => ({ ...f, prenom: e.target.value }))}
                className="bg-happi-dark border border-happi-border rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-happi-muted/50 outline-none focus:border-happi-blue/60 transition-colors"
              />
              <input
                required
                placeholder={fr ? 'Entreprise' : 'Company'}
                value={form.entreprise}
                onChange={(e) => setForm((f) => ({ ...f, entreprise: e.target.value }))}
                className="bg-happi-dark border border-happi-border rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-happi-muted/50 outline-none focus:border-happi-blue/60 transition-colors"
              />
              <input
                required
                type="email"
                placeholder={fr ? 'Email professionnel' : 'Work email'}
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="bg-happi-dark border border-happi-border rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-happi-muted/50 outline-none focus:border-happi-blue/60 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-happi-blue hover:bg-happi-blue/90 disabled:opacity-50 rounded-xl text-sm font-bold text-white transition-colors flex items-center justify-center gap-2 mt-1"
              >
                {loading
                  ? (fr ? 'Envoi...' : 'Sending...')
                  : (fr ? 'Prendre contact' : 'Get in touch')}
                {!loading && <ArrowRight size={14} />}
              </button>
              <p className="text-[10px] text-happi-muted text-center">
                {fr ? 'Réponse sous 24h · Aucun engagement' : 'Reply within 24h · No commitment'}
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-6 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-2xl">
              ✓
            </div>
            <h3 className="text-white font-bold text-base">
              {fr ? 'Message reçu !' : 'Message received!'}
            </h3>
            <p className="text-happi-muted text-sm leading-relaxed max-w-xs">
              {fr
                ? `Merci ${form.prenom}. Je reviens vers vous sous 24h pour discuter de votre bot.`
                : `Thanks ${form.prenom}. I'll get back to you within 24h to discuss your bot.`}
            </p>
            <button
              onClick={onClose}
              className="text-xs text-happi-muted hover:text-white transition-colors mt-2"
            >
              {fr ? 'Fermer' : 'Close'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── BotGrid (main export) ────────────────────────────────────────────────────

export default function BotGrid({ fr }: { fr: boolean }) {
  const [activeBot, setActiveBot]       = useState<Bot | null>(null);
  const [messages, setMessages]         = useState<Message[]>([]);
  const [currentOpts, setCurrentOpts]   = useState<DemoOption[]>([]);
  const [isTyping, setIsTyping]         = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadBot, setLeadBot]           = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const typingTimer    = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Lock / unlock body scroll when any overlay is open
  useEffect(() => {
    document.body.style.overflow = (activeBot || showLeadForm) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeBot, showLeadForm]);

  // ESC key to close overlays
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== 'Escape') return;
      if (showLeadForm) { setShowLeadForm(false); return; }
      if (activeBot) closeModal();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [showLeadForm, activeBot]); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll chat to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  function openModal(bot: Bot) {
    const welcome = fr ? bot.demoWelcomeFr : bot.demoWelcomeEn;
    const opts    = fr ? bot.demoOptsFr    : bot.demoOptsEn;
    setActiveBot(bot);
    setMessages([{ role: 'bot', text: welcome }]);
    setCurrentOpts(opts);
    setIsTyping(false);
  }

  function closeModal() {
    if (typingTimer.current) clearTimeout(typingTimer.current);
    setActiveBot(null);
    setMessages([]);
    setCurrentOpts([]);
    setIsTyping(false);
  }

  function pickOption(opt: DemoOption) {
    setMessages((prev) => [...prev, { role: 'user', text: opt.label }]);
    setCurrentOpts([]);
    setIsTyping(true);
    typingTimer.current = setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: 'bot', text: opt.response }]);
      setCurrentOpts(opt.followUp ?? []);
    }, 950);
  }

  function openLeadForm(botName: string) {
    closeModal();
    setLeadBot(botName);
    setShowLeadForm(true);
  }

  return (
    <>
      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bots.map((bot, i) => (
          <motion.div
            key={bot.nameFr}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.09, ease: 'easeOut' }}
          >
            <BotCard
              bot={bot}
              fr={fr}
              onDemo={() => openModal(bot)}
              onAdapt={() => openLeadForm(fr ? bot.nameFr : bot.nameEn)}
            />
          </motion.div>
        ))}
      </div>

      {/* Chat modal */}
      {activeBot && (
        <ChatModal
          bot={activeBot}
          fr={fr}
          messages={messages}
          currentOpts={currentOpts}
          isTyping={isTyping}
          messagesEndRef={messagesEndRef}
          onPickOption={pickOption}
          onClose={closeModal}
          onGetBot={() => openLeadForm(fr ? activeBot.nameFr : activeBot.nameEn)}
        />
      )}

      {/* Lead form */}
      {showLeadForm && (
        <LeadForm
          botName={leadBot}
          fr={fr}
          onClose={() => setShowLeadForm(false)}
        />
      )}
    </>
  );
}
