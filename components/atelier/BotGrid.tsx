'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type DemoOption = { label: string; response: string };
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
      { label: "🏛️ Équipements culturels", response: "Salles de spectacle, musées, médiathèques... Souhaitez-vous explorer nos réalisations ou qualifier votre projet avec un associé ?" },
      { label: "🏘️ Logements & urbain", response: "Notre approche valorise le design contemporain et l'intégration paysagère. Quel est votre programme et votre calendrier ?" },
    ],
    demoOptsEn: [
      { label: "🏛️ Cultural facilities", response: "Concert halls, museums, libraries... Would you like to explore our portfolio or qualify your project with a partner?" },
      { label: "🏘️ Housing & urban", response: "Our approach blends contemporary design with landscape integration. What is your programme and timeline?" },
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
      { label: "🏠 Achat immobilier", response: "Pour un achat immobilier, les frais de notaire représentent 7 à 8% dans l'ancien et 2 à 3% dans le neuf. Voulez-vous une estimation précise pour votre projet ?" },
      { label: "⚖️ Succession", response: "Le règlement d'une succession nécessite plusieurs démarches. Je peux vous indiquer les pièces à fournir et estimer les frais selon la masse successorale." },
    ],
    demoOptsEn: [
      { label: "🏠 Property purchase", response: "Notary fees are 7–8% for existing properties and 2–3% for new builds. Would you like a precise estimate for your project?" },
      { label: "⚖️ Estate settlement", response: "Settling an estate involves several steps. I can list the documents required and estimate costs based on the estate value." },
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
      { label: "📋 Suivre mon dossier", response: "Entrez votre référence dossier. Je vous affiche immédiatement : statut actuel, paiements reçus, prochaine action prévue et délai estimé." },
      { label: "📥 Déposer une créance", response: "Je vous guide étape par étape. Êtes-vous une société, un particulier, ou un créancier international ? Le processus prend moins de 10 minutes." },
    ],
    demoOptsEn: [
      { label: "📋 Track my case", response: "Enter your case reference. I'll instantly display: current status, payments received, next planned action, and estimated timeline." },
      { label: "📥 File a debt claim", response: "I'll guide you step by step. Are you a company, an individual, or an international creditor? The process takes under 10 minutes." },
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
      { label: "🏢 Société (SARL / SAS)", response: "Ce mois-ci, j'ai besoin de : relevés bancaires, factures fournisseurs, notes de frais. Votre prochaine échéance fiscale est la TVA du trimestre — dans 18 jours." },
      { label: "🎬 Influenceur / Créateur", response: "Revenus YouTube, TikTok, partenariats de marque... Je suis formé pour votre fiscalité spécifique. Quelle est votre structure juridique actuelle ?" },
    ],
    demoOptsEn: [
      { label: "🏢 Company (Ltd / SAS)", response: "This month I need: bank statements, supplier invoices, expense reports. Your next tax deadline is the quarterly VAT — in 18 days." },
      { label: "🎬 Influencer / Creator", response: "YouTube, TikTok, brand deals... I'm trained for your specific tax situation. What is your current legal structure?" },
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
      { label: "🏦 Banque / Fintech", response: "Pour une banque, la combinaison eKYC + AML + Device Intelligence couvre l'onboarding, la conformité et la prévention de fraude. Quel est votre volume mensuel de vérifications ?" },
      { label: "🌍 Question conformité", response: "Je couvre 22 pays : SAMA (Arabie Saoudite), CBUAE (Émirats), CBE (Égypte), CBN (Nigeria)... Quel marché vous concerne ?" },
    ],
    demoOptsEn: [
      { label: "🏦 Bank / Fintech", response: "For a bank, the eKYC + AML + Device Intelligence stack covers onboarding, compliance and fraud prevention. What is your monthly verification volume?" },
      { label: "🌍 Compliance question", response: "I cover 22 countries: SAMA (Saudi Arabia), CBUAE (UAE), CBE (Egypt), CBN (Nigeria)... Which market are you asking about?" },
    ],
  },
];

type ChatState = {
  userMsg: string;
  botResponse: string;
} | null;

export default function BotGrid({ fr }: { fr: boolean }) {
  const [openBot, setOpenBot] = useState<string | null>(null);
  const [chats, setChats] = useState<Record<string, ChatState>>({});

  function toggleBot(key: string) {
    setOpenBot(prev => (prev === key ? null : key));
    // reset chat when reopening
    setChats(prev => ({ ...prev, [key]: null }));
  }

  function pickOption(botKey: string, opt: DemoOption) {
    setChats(prev => ({
      ...prev,
      [botKey]: { userMsg: opt.label, botResponse: opt.response },
    }));
  }

  function resetChat(botKey: string) {
    setChats(prev => ({ ...prev, [botKey]: null }));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {bots.map((bot) => {
        const name     = fr ? bot.nameFr     : bot.nameEn;
        const sector   = fr ? bot.sectorFr   : bot.sectorEn;
        const pioneer  = fr ? bot.pioneerFr  : bot.pioneerEn;
        const caps     = fr ? bot.capsFr     : bot.capsEn;
        const welcome  = fr ? bot.demoWelcomeFr : bot.demoWelcomeEn;
        const opts     = fr ? bot.demoOptsFr    : bot.demoOptsEn;
        const isOpen   = openBot === bot.nameFr;
        const chat     = chats[bot.nameFr] ?? null;

        return (
          <div
            key={bot.nameFr}
            className="bg-happi-surface border border-happi-border rounded-2xl overflow-hidden flex flex-col transition-colors"
            style={{ borderTopWidth: '4px', borderTopColor: bot.color }}
          >
            <div className="p-6 flex flex-col gap-4">

              {/* Card header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-2xl mb-2">{bot.icon}</div>
                  <h2 className="text-base font-bold text-white leading-tight">{name}</h2>
                  <div className="text-happi-muted text-xs mt-0.5">{sector}</div>
                </div>
                <span
                  className="text-[10px] font-bold px-2.5 py-1 rounded-full border flex-shrink-0 text-right leading-tight"
                  style={{ color: bot.color, background: `${bot.color}18`, borderColor: `${bot.color}40` }}
                >
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
              <ul className="flex flex-col gap-2">
                {caps.map((cap) => (
                  <li key={cap} className="flex items-start gap-2 text-xs text-happi-muted leading-relaxed">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: bot.color }}>›</span>
                    {cap}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-happi-border">
                <span className="text-[10px] text-happi-muted font-medium">
                  {bot.steps} {fr ? 'étapes' : 'steps'}
                </span>
                <button
                  onClick={() => toggleBot(bot.nameFr)}
                  className="flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-75"
                  style={{ color: bot.color }}
                >
                  {isOpen
                    ? (fr ? 'Fermer' : 'Close')
                    : (fr ? 'Voir en action' : 'See it in action')}
                  {isOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                </button>
              </div>
            </div>

            {/* ── Inline demo ── */}
            {isOpen && (
              <div className="border-t border-happi-border bg-happi-dark/60">
                <div className="p-4 flex flex-col gap-3">

                  {/* Bot welcome */}
                  <div className="flex items-start gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5"
                      style={{ background: `${bot.color}25`, color: bot.color }}
                    >
                      {bot.icon}
                    </div>
                    <div className="bg-white/6 rounded-xl rounded-tl-sm px-3 py-2 text-xs text-white leading-relaxed max-w-[85%]">
                      {welcome}
                    </div>
                  </div>

                  {/* User message */}
                  {chat && (
                    <div className="flex items-start gap-2 justify-end">
                      <div
                        className="rounded-xl rounded-tr-sm px-3 py-2 text-xs text-white leading-relaxed max-w-[85%]"
                        style={{ background: bot.color }}
                      >
                        {chat.userMsg}
                      </div>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10 text-xs mt-0.5">
                        👤
                      </div>
                    </div>
                  )}

                  {/* Bot response */}
                  {chat && (
                    <div className="flex items-start gap-2">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5"
                        style={{ background: `${bot.color}25`, color: bot.color }}
                      >
                        {bot.icon}
                      </div>
                      <div className="bg-white/6 rounded-xl rounded-tl-sm px-3 py-2 text-xs text-white leading-relaxed max-w-[85%]">
                        {chat.botResponse}
                      </div>
                    </div>
                  )}

                  {/* Options or reset */}
                  {!chat ? (
                    <div className="flex flex-wrap gap-2 pl-8">
                      {opts.map((opt) => (
                        <button
                          key={opt.label}
                          onClick={() => pickOption(bot.nameFr, opt)}
                          className="text-[11px] px-3 py-1.5 rounded-full border transition-colors"
                          style={{
                            color: bot.color,
                            borderColor: `${bot.color}50`,
                            background: `${bot.color}0a`,
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = `${bot.color}20`)}
                          onMouseLeave={e => (e.currentTarget.style.background = `${bot.color}0a`)}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <button
                      onClick={() => resetChat(bot.nameFr)}
                      className="text-[10px] text-happi-muted hover:text-white transition-colors pl-8 text-left"
                    >
                      ↺ {fr ? 'Recommencer' : 'Restart'}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
