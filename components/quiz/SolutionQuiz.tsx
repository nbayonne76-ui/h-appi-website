'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { MessageSquare, Smartphone, Sparkles, ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';
import { openContactModal } from '@/components/ui/ContactModal';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Option {
  label: string;
  sub: string;
  emoji: string;
  scores: { bot: number; app: number; saas: number };
}

interface Question {
  question: string;
  options: Option[];
}

// ─── Quiz data ────────────────────────────────────────────────────────────────

const getQuestions = (fr: boolean): Question[] => [
  {
    question: fr ? 'Quel est votre principal défi ?' : 'What is your main challenge?',
    options: [
      {
        emoji: '📞',
        label: fr ? 'Trop d\'appels SAV' : 'Too many SAV calls',
        sub: fr ? 'Mes équipes sont débordées par les demandes clients' : 'My teams are overwhelmed by customer requests',
        scores: { bot: 3, app: 0, saas: 0 },
      },
      {
        emoji: '📦',
        label: fr ? 'Litiges de livraison' : 'Delivery disputes',
        sub: fr ? 'Je perds des litiges faute de preuves numériques' : 'I lose disputes due to lack of digital proof',
        scores: { bot: 0, app: 3, saas: 0 },
      },
      {
        emoji: '🗺️',
        label: fr ? 'Aucune visibilité livraison' : 'No delivery visibility',
        sub: fr ? 'Ni moi, ni le client ne sait où est le meuble en temps réel' : 'Neither I nor the client knows where the furniture is in real time',
        scores: { bot: 0, app: 2, saas: 1 },
      },
      {
        emoji: '📊',
        label: fr ? 'Optimiser l\'ensemble' : 'Optimise everything',
        sub: fr ? 'Je veux une vision globale : coûts, délais, satisfaction' : 'I want a global view: costs, delays, satisfaction',
        scores: { bot: 0, app: 0, saas: 3 },
      },
    ],
  },
  {
    question: fr ? 'Combien de demandes SAV recevez-vous par mois ?' : 'How many SAV requests do you receive per month?',
    options: [
      {
        emoji: '🌱',
        label: fr ? 'Moins de 100' : 'Under 100',
        sub: fr ? 'Volume gérable, mais chronophage' : 'Manageable volume but time-consuming',
        scores: { bot: 1, app: 1, saas: 0 },
      },
      {
        emoji: '🔥',
        label: fr ? '100 à 500' : '100 to 500',
        sub: fr ? 'Mon équipe commence à saturer' : 'My team is starting to saturate',
        scores: { bot: 2, app: 1, saas: 0 },
      },
      {
        emoji: '🚀',
        label: fr ? 'Plus de 500' : 'Over 500',
        sub: fr ? 'Il faut automatiser au plus vite' : 'I need to automate as fast as possible',
        scores: { bot: 2, app: 0, saas: 1 },
      },
      {
        emoji: '🤷',
        label: fr ? 'Je ne sais pas encore' : 'I don\'t know yet',
        sub: fr ? 'Je suis en phase d\'exploration' : 'I\'m in exploration phase',
        scores: { bot: 0, app: 0, saas: 1 },
      },
    ],
  },
  {
    question: fr ? 'Quelle est votre priorité immédiate ?' : 'What is your immediate priority?',
    options: [
      {
        emoji: '💰',
        label: fr ? 'Réduire les coûts SAV' : 'Cut SAV costs',
        sub: fr ? 'Chaque appel coûte du temps et de l\'argent' : 'Every call costs time and money',
        scores: { bot: 3, app: 0, saas: 0 },
      },
      {
        emoji: '🛡️',
        label: fr ? 'Éliminer les litiges' : 'Eliminate disputes',
        sub: fr ? 'Avoir des preuves incontestables à chaque livraison' : 'Have undeniable proof at every delivery',
        scores: { bot: 0, app: 3, saas: 0 },
      },
      {
        emoji: '⚡',
        label: fr ? 'Déployer rapidement' : 'Deploy quickly',
        sub: fr ? 'Je veux voir des résultats en moins d\'un mois' : 'I want to see results in under a month',
        scores: { bot: 2, app: 1, saas: 0 },
      },
      {
        emoji: '🌐',
        label: fr ? 'Vision long terme' : 'Long-term vision',
        sub: fr ? 'Je construis une infrastructure durable' : 'I\'m building a lasting infrastructure',
        scores: { bot: 0, app: 0, saas: 3 },
      },
    ],
  },
  {
    question: fr ? 'Quand voulez-vous démarrer ?' : 'When do you want to start?',
    options: [
      {
        emoji: '🏃',
        label: fr ? 'Dès maintenant' : 'Right now',
        sub: fr ? 'Je veux être opérationnel en 2-4 semaines' : 'I want to be operational in 2-4 weeks',
        scores: { bot: 3, app: 1, saas: 0 },
      },
      {
        emoji: '📅',
        label: fr ? 'Dans 1-3 mois' : 'In 1-3 months',
        sub: fr ? 'J\'ai besoin de préparer le terrain en interne' : 'I need to prepare internally',
        scores: { bot: 1, app: 2, saas: 1 },
      },
      {
        emoji: '🗓️',
        label: fr ? 'Sur 6-12 mois' : 'Over 6-12 months',
        sub: fr ? 'C\'est un projet structurant pour l\'entreprise' : 'It\'s a structuring project for the company',
        scores: { bot: 0, app: 1, saas: 3 },
      },
      {
        emoji: '🔍',
        label: fr ? 'Je veux d\'abord comprendre' : 'I want to understand first',
        sub: fr ? 'Je suis encore en phase de découverte' : 'I\'m still in discovery phase',
        scores: { bot: 0, app: 0, saas: 0 },
      },
    ],
  },
];

// ─── Results ──────────────────────────────────────────────────────────────────

const getResults = (fr: boolean) => ({
  bot: {
    icon: MessageSquare,
    color: 'happi-blue',
    colorClass: 'text-happi-blue',
    bgClass: 'bg-happi-blue/10',
    borderClass: 'border-happi-blue/30',
    title: fr ? 'Le Bot SAV H\'appi' : 'H\'appi SAV Bot',
    desc: fr
      ? 'Votre défi principal est la gestion du volume SAV. Notre chatbot automatise 65% de vos demandes et se déploie en 2 semaines. Zéro appel pour un statut simple, zéro information perdue.'
      : 'Your main challenge is SAV volume management. Our chatbot automates 65% of your requests and deploys in 2 weeks. Zero calls for a simple status, zero lost information.',
    stat: fr ? '−65 % d\'appels dès le 1er mois' : '−65% calls from month one',
    cta: fr ? 'Discuter du bot SAV' : 'Discuss the SAV bot',
  },
  app: {
    icon: Smartphone,
    color: 'happi-green',
    colorClass: 'text-happi-green',
    bgClass: 'bg-happi-green/10',
    borderClass: 'border-happi-green/30',
    title: fr ? 'L\'App Traçabilité H\'appi' : 'H\'appi Traceability App',
    desc: fr
      ? 'Vous perdez des litiges et manquez de visibilité. Notre app donne à chaque livraison une preuve irréfutable : photo géolocalisée, signature, GPS. −80 % de litiges dès le déploiement.'
      : 'You\'re losing disputes and lack visibility. Our app gives every delivery irrefutable proof: geolocated photo, signature, GPS. −80% disputes from deployment.',
    stat: fr ? '−80 % de litiges avec preuve numérique' : '−80% disputes with digital proof',
    cta: fr ? 'Discuter de l\'app traçabilité' : 'Discuss the traceability app',
  },
  saas: {
    icon: Sparkles,
    color: 'purple-400',
    colorClass: 'text-purple-400',
    bgClass: 'bg-purple-400/10',
    borderClass: 'border-purple-400/30',
    title: fr ? 'La Plateforme SaaS H\'appi' : 'H\'appi SaaS Platform',
    desc: fr
      ? 'Vous avez une vision long terme et cherchez à optimiser l\'ensemble. Notre plateforme active les modules IA au fil de votre croissance : optimisation des tournées, prédiction des absences, SAV prédictif.'
      : 'You have a long-term vision and want to optimise everything. Our platform activates AI modules as you grow: route optimisation, absence prediction, predictive after-sales.',
    stat: fr ? 'Modules IA activés progressivement sans migration' : 'AI modules activated progressively, no migration',
    cta: fr ? 'Discuter de la plateforme' : 'Discuss the platform',
  },
});

// ─── Component ────────────────────────────────────────────────────────────────

export function SolutionQuiz() {
  const locale = useLocale();
  const fr = locale === 'fr';
  const questions = getQuestions(fr);
  const results = getResults(fr);

  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({ bot: 0, app: 0, saas: 0 });
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<'bot' | 'app' | 'saas' | null>(null);

  const handleSelect = (optionIdx: number) => {
    setSelected(optionIdx);
    const option = questions[currentQ].options[optionIdx];
    const newScores = {
      bot: scores.bot + option.scores.bot,
      app: scores.app + option.scores.app,
      saas: scores.saas + option.scores.saas,
    };

    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setScores(newScores);
        setCurrentQ(currentQ + 1);
        setSelected(null);
      } else {
        // Compute result
        const winner = Object.entries(newScores).reduce((a, b) => (a[1] >= b[1] ? a : b))[0] as 'bot' | 'app' | 'saas';
        setResult(winner);
      }
    }, 280);
  };

  const reset = () => {
    setCurrentQ(0);
    setScores({ bot: 0, app: 0, saas: 0 });
    setSelected(null);
    setResult(null);
  };

  const progress = ((currentQ) / questions.length) * 100;

  if (result) {
    const r = results[result];
    const Icon = r.icon;
    return (
      <div className={`bg-happi-surface border ${r.borderClass} rounded-2xl p-6 md:p-8`}>
        <div className="flex items-start gap-4 mb-6">
          <div className={`w-12 h-12 ${r.bgClass} border ${r.borderClass} rounded-2xl flex items-center justify-center flex-shrink-0`}>
            <Icon size={22} className={r.colorClass} />
          </div>
          <div>
            <div className={`text-[11px] font-semibold uppercase tracking-wide ${r.colorClass} mb-1`}>
              {fr ? 'Votre solution idéale' : 'Your ideal solution'}
            </div>
            <h3 className="text-white text-xl font-bold">{r.title}</h3>
          </div>
        </div>

        <p className="text-happi-muted text-sm leading-relaxed mb-5">{r.desc}</p>

        <div className={`flex items-center gap-2 ${r.bgClass} border ${r.borderClass} rounded-xl px-4 py-3 mb-6`}>
          <CheckCircle2 size={15} className={r.colorClass} />
          <span className={`text-sm font-semibold ${r.colorClass}`}>{r.stat}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={openContactModal}
            className="flex-1 flex items-center justify-center gap-2 bg-happi-blue hover:bg-happi-blue/90 text-white text-sm font-medium px-5 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-happi-blue/20"
          >
            {r.cta}
            <ArrowRight size={15} />
          </button>
          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 text-happi-muted hover:text-white border border-happi-border hover:border-happi-border/80 text-sm px-4 py-3 rounded-xl transition-all"
          >
            <RotateCcw size={14} />
            {fr ? 'Recommencer' : 'Restart'}
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="bg-happi-surface border border-happi-border rounded-2xl overflow-hidden">
      {/* Progress bar */}
      <div className="h-1 bg-happi-border/50">
        <div
          className="h-full bg-happi-blue transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="px-6 md:px-8 py-6">
        {/* Counter */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-happi-muted text-xs">
            {fr ? `Question ${currentQ + 1} sur ${questions.length}` : `Question ${currentQ + 1} of ${questions.length}`}
          </span>
          <div className="flex gap-1.5">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i <= currentQ ? 'bg-happi-blue' : 'bg-happi-border'}`}
              />
            ))}
          </div>
        </div>

        {/* Question */}
        <h3 className="text-white font-bold text-base md:text-lg mb-5">{q.question}</h3>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={`text-left p-4 rounded-xl border transition-all ${
                selected === i
                  ? 'bg-happi-blue/20 border-happi-blue/60 scale-[0.98]'
                  : 'bg-happi-dark border-happi-border hover:border-happi-blue/40 hover:bg-happi-blue/5'
              }`}
            >
              <div className="text-xl mb-2">{opt.emoji}</div>
              <div className="text-white text-sm font-semibold mb-0.5">{opt.label}</div>
              <div className="text-happi-muted text-xs leading-snug">{opt.sub}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
