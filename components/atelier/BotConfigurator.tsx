'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Sparkles } from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────────

type Sector   = 'notariat' | 'comptabilite' | 'architecture' | 'recouvrement' | 'immobilier' | 'rh' | 'sante' | 'ecommerce' | 'tech' | 'autre';
type Goal     = 'qualify' | 'faq' | 'process' | 'rdv';
type Channel  = 'whatsapp' | 'webchat' | 'email';
type Feature  = 'docs' | 'crm' | 'human' | 'rdv_feat' | 'payment' | 'multilang' | 'analytics' | 'notif';
type Tone     = 'formal' | 'friendly' | 'technical';

type Config = { sector: Sector | null; goal: Goal | null; channel: Channel | null; features: Feature[]; tone: Tone | null };
type Msg    = { role: 'bot' | 'user'; text: string };

// ── Static data ────────────────────────────────────────────────────────────────

const SECTORS: { id: Sector; icon: string; fr: string; en: string; color: string }[] = [
  { id: 'notariat',     icon: '⚖️',  fr: 'Notariat',        en: 'Notarial law',  color: '#D4AF37' },
  { id: 'comptabilite', icon: '📊',  fr: 'Comptabilité',     en: 'Accounting',    color: '#C5A028' },
  { id: 'architecture', icon: '🏛️', fr: 'Architecture',     en: 'Architecture',  color: '#D4A853' },
  { id: 'recouvrement', icon: '💼',  fr: 'Recouvrement',     en: 'Debt recovery', color: '#0E7C43' },
  { id: 'immobilier',   icon: '🏠',  fr: 'Immobilier',       en: 'Real estate',   color: '#3B82F6' },
  { id: 'rh',           icon: '👥',  fr: 'RH & Recrutement', en: 'HR & Hiring',   color: '#8B5CF6' },
  { id: 'sante',        icon: '🏥',  fr: 'Santé',            en: 'Healthcare',    color: '#EF4444' },
  { id: 'ecommerce',    icon: '🛒',  fr: 'E-commerce',       en: 'E-commerce',    color: '#F97316' },
  { id: 'tech',         icon: '💻',  fr: 'Tech & SaaS',      en: 'Tech & SaaS',   color: '#4F46E5' },
  { id: 'autre',        icon: '✨',  fr: 'Autre secteur',    en: 'Other sector',  color: '#6B7280' },
];

const GOALS: { id: Goal; icon: string; fr: string; en: string; descFr: string; descEn: string }[] = [
  { id: 'qualify', icon: '🎯', fr: 'Qualifier mes prospects', en: 'Qualify my prospects', descFr: 'Identifier les leads chauds automatiquement', descEn: 'Identify hot leads automatically' },
  { id: 'faq',     icon: '💬', fr: 'Répondre aux questions 24/7', en: 'Answer FAQs 24/7',  descFr: 'Traiter les questions répétitives sans effort', descEn: 'Handle repetitive questions effortlessly' },
  { id: 'process', icon: '📋', fr: 'Guider dans un processus', en: 'Guide a process',       descFr: 'Accompagner pas à pas dans une démarche', descEn: 'Walk clients step-by-step through a procedure' },
  { id: 'rdv',     icon: '📅', fr: 'Prendre des rendez-vous',  en: 'Book appointments',     descFr: 'Automatiser la prise de rendez-vous',     descEn: 'Automate appointment scheduling' },
];

const CHANNELS: { id: Channel; icon: string; fr: string; en: string }[] = [
  { id: 'whatsapp', icon: '💬', fr: 'WhatsApp',           en: 'WhatsApp' },
  { id: 'webchat',  icon: '🌐', fr: 'Webchat / Site web', en: 'Webchat / Website' },
  { id: 'email',    icon: '📧', fr: 'Email automatisé',   en: 'Automated email' },
];

const FEATURES: { id: Feature; icon: string; fr: string; en: string }[] = [
  { id: 'docs',      icon: '📂', fr: 'Collecte de documents',   en: 'Document collection' },
  { id: 'crm',       icon: '🔗', fr: 'Synchronisation CRM',      en: 'CRM sync' },
  { id: 'human',     icon: '👤', fr: 'Transfert vers un humain', en: 'Human handoff' },
  { id: 'rdv_feat',  icon: '📅', fr: 'Prise de RDV intégrée',   en: 'Built-in scheduling' },
  { id: 'payment',   icon: '💳', fr: 'Informations paiement',    en: 'Payment info' },
  { id: 'multilang', icon: '🌍', fr: 'Multilingue FR/EN/AR',     en: 'Multilingual FR/EN/AR' },
  { id: 'analytics', icon: '📈', fr: 'Dashboard analytique',     en: 'Analytics dashboard' },
  { id: 'notif',     icon: '🔔', fr: 'Notifications automatiques', en: 'Auto notifications' },
];

const TONES: { id: Tone; icon: string; fr: string; en: string; descFr: string; descEn: string }[] = [
  { id: 'formal',    icon: '🎩', fr: 'Formel & Professionnel',  en: 'Formal & Professional',  descFr: 'Langage soutenu, registre juridique ou financier', descEn: 'Formal language, legal or financial context' },
  { id: 'friendly',  icon: '😊', fr: 'Accessible & Chaleureux', en: 'Friendly & Approachable', descFr: 'Ton conversationnel, proche du client',            descEn: 'Conversational, client-centric tone' },
  { id: 'technical', icon: '⚡', fr: 'Technique & Expert',      en: 'Technical & Expert',       descFr: 'Précis, data-driven, pour un public averti',       descEn: 'Precise, data-driven, expert audience' },
];

// ── Generation helpers ─────────────────────────────────────────────────────────

const BOT_NAMES: Partial<Record<Sector, Record<Goal, string>>> = {
  notariat:     { qualify: 'Assistant Notarial Premium',    faq: 'Conseiller Juridique 24/7',  process: 'Guide Notarial Interactif',   rdv: 'Planificateur Notarial' },
  comptabilite: { qualify: 'Analyste Comptable IA',         faq: 'Expert Fiscal 24/7',         process: 'Guide Comptable Digital',     rdv: 'Assistant Calendrier Fiscal' },
  architecture: { qualify: 'Consultant Portfolio IA',       faq: 'Guide Architecture Digital', process: 'Coordinateur Projet MOA',     rdv: "Planificateur d'Entretiens" },
  recouvrement: { qualify: 'Agent de Qualification',        faq: 'Conseiller Créances 24/7',   process: 'Guide Dépôt de Créance',      rdv: 'Coordinateur de Dossiers' },
  immobilier:   { qualify: 'Conseiller Immobilier IA',      faq: 'Expert Marché Immo',         process: 'Guide Transaction Immo',      rdv: 'Agent de Visites Virtuel' },
  rh:           { qualify: 'Talent Qualifier Bot',          faq: 'Assistant RH 24/7',          process: 'Guide Onboarding Digital',    rdv: "Planificateur d'Entretiens" },
  sante:        { qualify: 'Coordinateur Médical IA',       faq: 'Assistant Santé 24/7',       process: 'Guide Parcours Patient',      rdv: 'Assistant Prise en Charge' },
  ecommerce:    { qualify: 'Conseiller Commercial IA',      faq: 'Support Client 24/7',        process: "Guide d'Achat Intelligent",   rdv: 'Consultant Produit Virtuel' },
  tech:         { qualify: 'Business Development Bot',      faq: 'Support Technique 24/7',     process: "Guide d'Intégration SaaS",    rdv: 'Demo Scheduler Intelligent' },
  autre:        { qualify: 'Assistant Commercial IA',       faq: 'Conseiller 24/7',            process: 'Guide Digital Sur-Mesure',    rdv: 'Planificateur Intelligent' },
};

function getBotName(s: Sector | null, g: Goal | null, fr: boolean) {
  if (!s || !g) return fr ? 'Votre Bot Personnalisé' : 'Your Custom Bot';
  return BOT_NAMES[s]?.[g] ?? (fr ? 'Assistant IA Personnalisé' : 'Custom AI Assistant');
}

function estimateSteps(cfg: Config): number {
  let n = 12;
  if (cfg.goal === 'qualify') n += 8;
  else if (cfg.goal === 'faq') n += 6;
  else if (cfg.goal === 'process') n += 10;
  else if (cfg.goal === 'rdv') n += 6;
  n += cfg.features.length * 3;
  if (cfg.channel === 'email') n += 4; else if (cfg.channel) n += 2;
  return n;
}

function estimateDeploy(cfg: Config, fr: boolean): string {
  const n = cfg.features.length;
  if (n <= 2) return fr ? '2-3 semaines' : '2-3 weeks';
  if (n <= 4) return fr ? '3-4 semaines' : '3-4 weeks';
  return fr ? '4-6 semaines' : '4-6 weeks';
}

function buildPreview(cfg: Config, fr: boolean): Msg[] {
  const sLabel = cfg.sector ? SECTORS.find(s => s.id === cfg.sector)?.[fr ? 'fr' : 'en'] ?? '' : (fr ? 'votre domaine' : 'your field');
  const greet  = cfg.tone === 'formal' ? (fr ? 'Bonjour,' : 'Good day,') : cfg.tone === 'technical' ? (fr ? 'Système prêt.' : 'System ready.') : (fr ? 'Bonjour !' : 'Hello!');

  const welcomes: Record<Goal, { fr: string; en: string }> = {
    qualify: { fr: `${greet} Je suis votre assistant ${sLabel}. Pour mieux vous orienter, pouvez-vous décrire votre besoin principal ?`, en: `${greet} I'm your ${sLabel} assistant. To guide you better, could you describe your main need?` },
    faq:     { fr: `${greet} Conseiller ${sLabel} disponible 24h/24. Quelle est votre question ?`, en: `${greet} Your ${sLabel} advisor, available 24/7. What is your question?` },
    process: { fr: `${greet} Je vais vous guider étape par étape dans votre démarche ${sLabel}. Par où souhaitez-vous commencer ?`, en: `${greet} I'll walk you through your ${sLabel} process step by step. Where would you like to start?` },
    rdv:     { fr: `${greet} Je peux planifier votre rendez-vous ${sLabel} en 2 minutes. Quelle est votre disponibilité ?`, en: `${greet} I can schedule your ${sLabel} appointment in 2 minutes. What's your availability?` },
  };

  const userMsgs: Record<Goal, { fr: string; en: string }> = {
    qualify: { fr: "🎯 J'ai besoin d'un devis", en: "🎯 I need a quote" },
    faq:     { fr: '💬 Quels sont vos tarifs ?',  en: '💬 What are your fees?' },
    process: { fr: '📋 Par où je commence ?',      en: '📋 Where do I start?' },
    rdv:     { fr: '📅 Disponible cette semaine',  en: '📅 Available this week' },
  };

  const botResponses: Record<Goal, { fr: string; en: string }> = {
    qualify: { fr: 'Parfait. Pour affiner votre demande, deux questions rapides : quel est votre budget approximatif et votre délai souhaité ?', en: 'Great. To refine your request: what is your approximate budget and desired timeline?' },
    faq:     { fr: 'Nos tarifs dépendent de votre profil. En 2 questions je vous donne une estimation précise — êtes-vous professionnel ou particulier ?', en: 'Fees depend on your profile. 2 quick questions for a precise estimate — are you a professional or an individual?' },
    process: { fr: 'Voici les 3 premières étapes : 1) Rassemblez vos documents, 2) Remplissez le formulaire en ligne, 3) Attendez la confirmation sous 48h.', en: 'Here are the first 3 steps: 1) Gather your documents, 2) Complete the online form, 3) Await confirmation within 48h.' },
    rdv:     { fr: "J'ai 3 créneaux disponibles : Mardi 14h, Jeudi 10h, Vendredi 16h. Lequel vous convient ?", en: '3 slots available: Tuesday 2pm, Thursday 10am, Friday 4pm. Which works best for you?' },
  };

  const g = cfg.goal ?? 'faq';
  return [
    { role: 'bot',  text: welcomes[g][fr ? 'fr' : 'en'] },
    { role: 'user', text: userMsgs[g][fr ? 'fr' : 'en'] },
    { role: 'bot',  text: botResponses[g][fr ? 'fr' : 'en'] },
  ];
}

// ── Component ──────────────────────────────────────────────────────────────────

const TOTAL_STEPS = 5;

export default function BotConfigurator({ fr }: { fr: boolean }) {
  const [step, setStep]         = useState(0);
  const [cfg, setCfg]           = useState<Config>({ sector: null, goal: null, channel: null, features: [], tone: null });
  const [showForm, setShowForm] = useState(false);
  const [form, setForm]         = useState({ prenom: '', entreprise: '', email: '' });
  const [sent, setSent]         = useState(false);
  const [loading, setLoading]   = useState(false);

  const color  = SECTORS.find(s => s.id === cfg.sector)?.color ?? '#4F46E5';
  const icon   = SECTORS.find(s => s.id === cfg.sector)?.icon ?? '🤖';
  const name   = getBotName(cfg.sector, cfg.goal, fr);
  const steps  = estimateSteps(cfg);
  const deploy = estimateDeploy(cfg, fr);
  const preview = buildPreview(cfg, fr);
  const isComplete = !!(cfg.sector && cfg.goal && cfg.channel && cfg.tone);

  function toggleFeature(f: Feature) {
    setCfg(prev => {
      const has = prev.features.includes(f);
      if (has) return { ...prev, features: prev.features.filter(x => x !== f) };
      if (prev.features.length >= 4) return prev;
      return { ...prev, features: [...prev.features, f] };
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  }

  const stepLabels = [
    { fr: 'Votre secteur',      en: 'Your sector' },
    { fr: 'Objectif du bot',    en: 'Bot goal' },
    { fr: 'Canal de diffusion', en: 'Delivery channel' },
    { fr: 'Fonctionnalités',    en: 'Features' },
    { fr: 'Ton du bot',         en: 'Bot tone' },
  ];
  const canNext = [!!cfg.sector, !!cfg.goal, !!cfg.channel, true, !!cfg.tone];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24 border-t border-happi-border">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-blue/20">
            {fr ? 'Configurateur de bot' : 'Bot Builder'}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            {fr
              ? <><span className="gradient-text">Construisez</span> votre bot</>
              : <><span className="gradient-text">Build</span> your bot</>}
          </h2>
          <p className="text-happi-muted max-w-xl mx-auto text-sm leading-relaxed">
            {fr
              ? 'Sélectionnez votre secteur, votre objectif et les options — votre bot prend forme en temps réel.'
              : 'Select your sector, goal, and options — your bot takes shape in real time.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ── Wizard (left) ── */}
          <div className="bg-happi-surface border border-happi-border rounded-2xl overflow-hidden">

            {/* Step indicator */}
            <div className="px-6 pt-6 pb-5">
              <div className="flex items-center mb-5">
                {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                  <div key={i} className="flex items-center flex-1 last:flex-none">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all ${
                        i < step  ? 'bg-happi-blue text-white' :
                        i === step ? 'bg-happi-blue/20 border border-happi-blue text-happi-blue' :
                        'bg-white/5 text-happi-muted'
                      }`}
                    >
                      {i < step ? <Check size={12} /> : i + 1}
                    </div>
                    {i < TOTAL_STEPS - 1 && (
                      <div className={`h-px flex-1 mx-1 transition-colors ${i < step ? 'bg-happi-blue' : 'bg-happi-border'}`} />
                    )}
                  </div>
                ))}
              </div>
              <h3 className="text-white font-semibold text-sm">{stepLabels[step][fr ? 'fr' : 'en']}</h3>
              <p className="text-happi-muted text-xs mt-0.5">{fr ? `Étape ${step + 1} sur ${TOTAL_STEPS}` : `Step ${step + 1} of ${TOTAL_STEPS}`}</p>
            </div>

            {/* Step content */}
            <div className="px-6 pb-6 min-h-[300px]">

              {/* Step 0 — Sector */}
              {step === 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {SECTORS.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setCfg(p => ({ ...p, sector: s.id }))}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-xl border text-center text-xs font-medium transition-all"
                      style={{
                        borderColor: cfg.sector === s.id ? s.color : undefined,
                        background:  cfg.sector === s.id ? `${s.color}18` : undefined,
                        color:       cfg.sector === s.id ? '#fff' : undefined,
                      }}
                    >
                      <span className="text-xl">{s.icon}</span>
                      <span className="leading-tight text-[11px]">{fr ? s.fr : s.en}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 1 — Goal */}
              {step === 1 && (
                <div className="flex flex-col gap-2">
                  {GOALS.map(g => (
                    <button
                      key={g.id}
                      onClick={() => setCfg(p => ({ ...p, goal: g.id }))}
                      className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all ${
                        cfg.goal === g.id ? 'border-happi-blue bg-happi-blue/10 text-white' : 'border-happi-border text-happi-muted hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <span className="text-xl flex-shrink-0 mt-0.5">{g.icon}</span>
                      <div>
                        <div className="text-sm font-semibold leading-tight">{fr ? g.fr : g.en}</div>
                        <div className="text-xs opacity-70 mt-0.5 leading-snug">{fr ? g.descFr : g.descEn}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2 — Channel */}
              {step === 2 && (
                <div className="flex flex-col gap-3">
                  {CHANNELS.map(c => (
                    <button
                      key={c.id}
                      onClick={() => setCfg(p => ({ ...p, channel: c.id }))}
                      className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                        cfg.channel === c.id ? 'border-happi-blue bg-happi-blue/10 text-white' : 'border-happi-border text-happi-muted hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <span className="text-2xl">{c.icon}</span>
                      <span className="text-sm font-semibold flex-1">{fr ? c.fr : c.en}</span>
                      {cfg.channel === c.id && <Check size={14} className="text-happi-blue" />}
                    </button>
                  ))}
                </div>
              )}

              {/* Step 3 — Features */}
              {step === 3 && (
                <>
                  <p className="text-happi-muted text-xs mb-3">
                    {fr
                      ? `Choisissez jusqu'à 4 fonctionnalités (${cfg.features.length}/4 sélectionnées) — optionnel`
                      : `Choose up to 4 features (${cfg.features.length}/4 selected) — optional`}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {FEATURES.map(f => {
                      const selected = cfg.features.includes(f.id);
                      const disabled = !selected && cfg.features.length >= 4;
                      return (
                        <button
                          key={f.id}
                          onClick={() => !disabled && toggleFeature(f.id)}
                          disabled={disabled}
                          className={`flex items-center gap-2 p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                            selected ? 'border-happi-blue bg-happi-blue/10 text-white' :
                            disabled  ? 'border-happi-border/30 text-happi-muted/30 cursor-not-allowed' :
                            'border-happi-border text-happi-muted hover:border-white/20 hover:text-white'
                          }`}
                        >
                          <span className="flex-shrink-0">{f.icon}</span>
                          <span className="leading-tight flex-1">{fr ? f.fr : f.en}</span>
                          {selected && <Check size={11} className="flex-shrink-0 text-happi-blue" />}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}

              {/* Step 4 — Tone */}
              {step === 4 && (
                <div className="flex flex-col gap-3">
                  {TONES.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setCfg(p => ({ ...p, tone: t.id }))}
                      className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all ${
                        cfg.tone === t.id ? 'border-happi-blue bg-happi-blue/10 text-white' : 'border-happi-border text-happi-muted hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <span className="text-xl flex-shrink-0">{t.icon}</span>
                      <div className="flex-1">
                        <div className="text-sm font-semibold leading-tight">{fr ? t.fr : t.en}</div>
                        <div className="text-xs opacity-70 mt-0.5 leading-snug">{fr ? t.descFr : t.descEn}</div>
                      </div>
                      {cfg.tone === t.id && <Check size={14} className="ml-auto mt-0.5 text-happi-blue" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Nav buttons */}
            <div className="px-6 pb-6 pt-4 border-t border-happi-border flex items-center justify-between gap-3">
              <button
                onClick={() => setStep(s => Math.max(0, s - 1))}
                disabled={step === 0}
                className="flex items-center gap-1.5 text-xs text-happi-muted hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft size={13} />
                {fr ? 'Précédent' : 'Back'}
              </button>

              {step < TOTAL_STEPS - 1 ? (
                <button
                  onClick={() => setStep(s => s + 1)}
                  disabled={!canNext[step]}
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-happi-blue hover:bg-happi-blue/90 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl text-xs font-semibold text-white transition-colors"
                >
                  {fr ? 'Suivant' : 'Next'}
                  <ArrowRight size={13} />
                </button>
              ) : (
                <button
                  onClick={() => isComplete && setShowForm(true)}
                  disabled={!isComplete}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: color }}
                >
                  <Sparkles size={13} />
                  {fr ? 'Je veux ce bot' : 'I want this bot'}
                </button>
              )}
            </div>
          </div>

          {/* ── Live preview (right) ── */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-24">

            {/* Bot identity */}
            <div
              className="bg-happi-surface border border-happi-border rounded-2xl p-5"
              style={{ borderTopWidth: '3px', borderTopColor: color }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: `${color}20` }}>
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-sm leading-tight truncate">{name}</div>
                  <div className="text-happi-muted text-xs mt-0.5">
                    {cfg.sector
                      ? SECTORS.find(s => s.id === cfg.sector)?.[fr ? 'fr' : 'en']
                      : (fr ? 'Sélectionnez votre secteur' : 'Select your sector')}
                  </div>
                </div>
                {isComplete && (
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full border flex-shrink-0"
                    style={{ color, background: `${color}15`, borderColor: `${color}40` }}>
                    {fr ? 'Prêt ✓' : 'Ready ✓'}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3">
                {[
                  { label: fr ? 'Étapes estimées' : 'Est. steps',     value: cfg.goal ? String(steps) : '--' },
                  { label: fr ? 'Délai déploiement' : 'Deploy time',  value: cfg.goal ? deploy : '--' },
                ].map(stat => (
                  <div key={stat.label} className="bg-happi-dark rounded-xl p-3 text-center">
                    <div className="text-base font-bold" style={{ color }}>{stat.value}</div>
                    <div className="text-happi-muted text-[10px] mt-0.5 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>

              {cfg.features.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {cfg.features.map(fid => {
                    const f = FEATURES.find(x => x.id === fid);
                    return f ? (
                      <span key={fid} className="text-[10px] px-2 py-0.5 rounded-full border font-medium"
                        style={{ color, background: `${color}10`, borderColor: `${color}30` }}>
                        {f.icon} {fr ? f.fr : f.en}
                      </span>
                    ) : null;
                  })}
                </div>
              )}
            </div>

            {/* Preview chat */}
            <div className="bg-happi-surface border border-happi-border rounded-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-happi-border flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center text-sm" style={{ background: `${color}20` }}>{icon}</div>
                <span className="text-xs font-semibold text-happi-muted">{fr ? 'Aperçu de conversation' : 'Conversation preview'}</span>
              </div>

              <div className="p-4 flex flex-col gap-3">
                {(cfg.sector && cfg.goal ? preview : [
                  { role: 'bot' as const, text: fr ? 'Sélectionnez votre secteur et votre objectif pour visualiser votre bot ici...' : 'Select your sector and goal to preview your bot here...' }
                ]).map((msg, i) =>
                  msg.role === 'bot' ? (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5" style={{ background: `${color}25` }}>{icon}</div>
                      <div className="bg-white/6 rounded-xl rounded-tl-sm px-3 py-2 text-xs text-white leading-relaxed max-w-[86%]">{msg.text}</div>
                    </div>
                  ) : (
                    <div key={i} className="flex items-start gap-2 justify-end">
                      <div className="rounded-xl rounded-tr-sm px-3 py-2 text-xs text-white leading-relaxed max-w-[86%]" style={{ background: color }}>{msg.text}</div>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10 text-xs mt-0.5">👤</div>
                    </div>
                  )
                )}
              </div>

              {cfg.sector && cfg.goal && (
                <div className="px-4 pb-4">
                  <div className="bg-happi-dark rounded-xl px-3 py-2 flex items-center gap-2 border border-happi-border/50">
                    <span className="text-xs text-happi-muted/50 flex-1">{fr ? 'Votre message...' : 'Your message...'}</span>
                    <ArrowRight size={12} style={{ color }} />
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* ── Lead form modal ── */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={e => { if (e.target === e.currentTarget) setShowForm(false); }}
        >
          <div
            className="w-full sm:max-w-sm bg-happi-surface border border-happi-border rounded-t-2xl sm:rounded-2xl p-6 flex flex-col gap-4"
            style={{ borderTopWidth: '3px', borderTopColor: color }}
          >
            {!sent ? (
              <>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: `${color}20` }}>{icon}</div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-sm leading-tight">{name}</h3>
                    <p className="text-happi-muted text-xs mt-1 leading-relaxed">
                      {fr ? 'Laissez vos coordonnées — je reviens sous 24h.' : 'Leave your details — I\'ll reply within 24h.'}
                    </p>
                  </div>
                  <button onClick={() => setShowForm(false)} className="text-happi-muted hover:text-white transition-colors flex-shrink-0 text-lg leading-none">✕</button>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input required placeholder={fr ? 'Prénom' : 'First name'} value={form.prenom}
                    onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))}
                    className="bg-happi-dark border border-happi-border rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-happi-muted/50 outline-none focus:border-happi-blue/60 transition-colors" />
                  <input required placeholder={fr ? 'Entreprise' : 'Company'} value={form.entreprise}
                    onChange={e => setForm(f => ({ ...f, entreprise: e.target.value }))}
                    className="bg-happi-dark border border-happi-border rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-happi-muted/50 outline-none focus:border-happi-blue/60 transition-colors" />
                  <input required type="email" placeholder={fr ? 'Email professionnel' : 'Work email'} value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="bg-happi-dark border border-happi-border rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-happi-muted/50 outline-none focus:border-happi-blue/60 transition-colors" />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 mt-1 transition-opacity hover:opacity-90 disabled:opacity-50"
                    style={{ background: color }}
                  >
                    {loading ? (fr ? 'Envoi...' : 'Sending...') : (fr ? 'Construire ce bot' : 'Build this bot')}
                    {!loading && <ArrowRight size={14} />}
                  </button>
                  <p className="text-[10px] text-happi-muted text-center">{fr ? 'Aucun engagement · Réponse sous 24h' : 'No commitment · Reply within 24h'}</p>
                </form>
              </>
            ) : (
              <div className="text-center py-8 flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-2xl">✓</div>
                <h3 className="text-white font-bold">{fr ? 'Votre bot est en route !' : 'Your bot is on its way!'}</h3>
                <p className="text-happi-muted text-sm leading-relaxed max-w-xs">
                  {fr
                    ? `Merci ${form.prenom}. J'analyse votre configuration et reviens sous 24h.`
                    : `Thanks ${form.prenom}. I'll review your config and reply within 24h.`}
                </p>
                <button onClick={() => { setShowForm(false); setSent(false); }} className="text-xs text-happi-muted hover:text-white transition-colors mt-2">
                  {fr ? 'Fermer' : 'Close'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
