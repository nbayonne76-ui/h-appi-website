'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Card = {
  id: string;
  emoji: string;
  color: string;
  sector: string;
  sectorEn: string;
  problem: string;
  problemEn: string;
  metric: string;
  metricLabel: string;
  metricLabelEn: string;
  solution: string;
  solutionEn: string;
};

const CARDS: Card[] = [
  {
    id: 'sav',
    emoji: '🛋️',
    color: '#3B82F6',
    sector: 'Meuble',
    sectorEn: 'Furniture',
    problem: '300 appels par mois, personne ne sait qui a raison',
    problemEn: '300 calls a month, nobody knows who\'s right',
    metric: '−65%',
    metricLabel: "d'appels SAV",
    metricLabelEn: 'after-sales calls',
    solution: 'Un bot qui répond et une appli qui garde la preuve en photo',
    solutionEn: 'A bot that answers and an app that keeps photo proof',
  },
  {
    id: 'hotel',
    emoji: '🏨',
    color: '#10B981',
    sector: 'Hôtellerie',
    sectorEn: 'Hospitality',
    problem: 'La réception est débordée, les clients attendent',
    problemEn: 'Front desk overwhelmed, guests left waiting',
    metric: '24/7',
    metricLabel: 'concierge dispo',
    metricLabelEn: 'concierge available',
    solution: 'Un concierge IA qui répond même à 3h du matin',
    solutionEn: 'An AI concierge that answers even at 3am',
  },
  {
    id: 'secretary',
    emoji: '📞',
    color: '#A78BFA',
    sector: 'Secrétariat',
    sectorEn: 'Secretary',
    problem: "Des appels ratés, un agenda jamais à jour",
    problemEn: 'Missed calls, a calendar never up to date',
    metric: '<500ms',
    metricLabel: 'pour répondre',
    metricLabelEn: 'to answer',
    solution: "Une secrétaire IA qui décroche, note et prévient par SMS",
    solutionEn: 'An AI secretary that picks up, takes notes, texts you',
  },
  {
    id: 'ecommerce',
    emoji: '🛒',
    color: '#F59E0B',
    sector: 'E-commerce',
    sectorEn: 'E-commerce',
    problem: 'Le panier se remplit, puis le client disparaît',
    problemEn: 'The cart fills up, then the customer vanishes',
    metric: '+34%',
    metricLabel: 'de ventes',
    metricLabelEn: 'more sales',
    solution: 'Un bot qui conseille le bon produit au bon moment',
    solutionEn: 'A bot that suggests the right product at the right time',
  },
  {
    id: 'logistique',
    emoji: '🚚',
    color: '#EF4444',
    sector: 'Transport',
    sectorEn: 'Transport',
    problem: 'Où est mon colis ? Personne ne peut répondre vite',
    problemEn: "Where's my package? Nobody can answer fast",
    metric: '−40%',
    metricLabel: 'de coûts dispatch',
    metricLabelEn: 'dispatch costs',
    solution: 'Un bot qui suit chaque livraison et prévient tout seul',
    solutionEn: 'A bot that tracks every delivery and alerts on its own',
  },
  {
    id: 'notariat',
    emoji: '⚖️',
    color: '#06B6D4',
    sector: 'Juridique',
    sectorEn: 'Legal',
    problem: 'Le standard sonne sans arrêt pour les mêmes questions',
    problemEn: 'The switchboard rings nonstop for the same questions',
    metric: '−80%',
    metricLabel: 'appels non qualifiés',
    metricLabelEn: 'unqualified calls',
    solution: 'Un bot qui répond aux questions et prend les bons rendez-vous',
    solutionEn: 'A bot that answers questions and books the right meetings',
  },
];

function FlipCard({ card, fr }: { card: Card; fr: boolean }) {
  const [flipped, setFlipped] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      className="relative w-full aspect-[4/5] [perspective:1200px] text-left"
      aria-pressed={flipped}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: prefersReduced ? 0 : 0.5, ease: 'easeInOut' }}
      >
        {/* Front — le problème */}
        <div
          aria-hidden={flipped}
          className="absolute inset-0 rounded-2xl p-6 flex flex-col [backface-visibility:hidden] border"
          style={{ background: `${card.color}0d`, borderColor: `${card.color}30` }}
        >
          <span className="text-4xl mb-4">{card.emoji}</span>
          <p className="text-white font-bold text-sm mb-2">{fr ? card.sector : card.sectorEn}</p>
          <p className="text-happi-muted text-sm leading-snug flex-1">
            {fr ? card.problem : card.problemEn}
          </p>
          <div className="mt-4">
            <div className="text-3xl font-extrabold" style={{ color: card.color }}>
              {card.metric}
            </div>
            <div className="text-happi-muted text-xs">{fr ? card.metricLabel : card.metricLabelEn}</div>
          </div>
          <span className="text-happi-muted/50 text-[11px] mt-3">
            {fr ? 'toucher pour voir →' : 'tap to reveal →'}
          </span>
        </div>

        {/* Back — la solution */}
        <div
          aria-hidden={!flipped}
          className="absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] border"
          style={{ background: `${card.color}1a`, borderColor: `${card.color}50`, transform: 'rotateY(180deg)' }}
        >
          <span className="text-3xl mb-4">🤖</span>
          <p className="text-white font-semibold text-sm leading-snug">
            {fr ? card.solution : card.solutionEn}
          </p>
        </div>
      </motion.div>
    </button>
  );
}

export default function FlipCards({ fr }: { fr: boolean }) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {fr ? (
              <>Choisis <span className="gradient-text">ton problème</span></>
            ) : (
              <>Pick <span className="gradient-text">your problem</span></>
            )}
          </h2>
          <p className="text-happi-muted text-sm mt-2">
            {fr ? 'Touche une carte pour voir la solution' : 'Tap a card to see the fix'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {CARDS.map((card) => (
            <FlipCard key={card.id} card={card} fr={fr} />
          ))}
        </div>
      </div>
    </section>
  );
}
