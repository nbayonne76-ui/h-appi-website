'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingDown, ShieldCheck, Zap } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';

// ─── Data ────────────────────────────────────────────────────────────────────

type OutcomeCard = {
  icon: React.ReactNode;
  color: string;
  value: string;
  label: string;
  description: string;
  before: string;
};

const getOutcomes = (fr: boolean): OutcomeCard[] => [
  {
    icon: <TrendingDown size={22} />,
    color: '#3B82F6',
    value: '−65 %',
    label: fr ? 'Appels SAV' : 'After-Sales Calls',
    description: fr
      ? 'Dès la 4ème semaine de déploiement, les appels entrants ont chuté de 65 %. Le bot traite les cas courants en autonomie complète.'
      : 'From week four of deployment, inbound calls dropped 65%. The bot handles common cases with full autonomy.',
    before: fr ? 'Avant : 300 appels/mois à traiter manuellement' : 'Before: 300 calls/month handled manually',
  },
  {
    icon: <ShieldCheck size={22} />,
    color: '#10B981',
    value: fr ? '0 litige\nperdu' : '0 dispute\nlost',
    label: fr ? 'Litiges perdus' : 'Disputes lost',
    description: fr
      ? 'Chaque livraison est documentée avec photo, signature numérique et horodatage GPS. Aucun litige sans preuve depuis le jour J.'
      : 'Every delivery is documented with photo, digital signature, and GPS timestamp. Zero undocumented disputes since day one.',
    before: fr ? 'Avant : 1 litige sur 4 impossible à prouver' : 'Before: 1 in 4 disputes impossible to prove',
  },
  {
    icon: <Zap size={22} />,
    color: '#F59E0B',
    value: fr ? '14 jours' : '14 days',
    label: fr ? 'Contrat → Production' : 'Contract → Production',
    description: fr
      ? 'Bot configuré, app installée, équipe formée, connexions opérationnelles. En 2 semaines, pas 6 mois.'
      : 'Bot configured, app installed, team trained, connections live. In 2 weeks, not 6 months.',
    before: fr ? 'Avant : 3 à 6 mois avec un éditeur classique' : 'Before: 3–6 months with a standard vendor',
  },
];

// ─── Animated value display ──────────────────────────────────────────────────

function AnimatedValue({ value, color }: { value: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ type: 'spring', stiffness: 320, damping: 22, delay: 0.1 }}
      className="text-3xl font-extrabold leading-tight whitespace-pre-line"
      style={{ color }}
    >
      {value}
    </motion.div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function CasUsageResults({ fr }: { fr: boolean }) {
  const outcomes = getOutcomes(fr);

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
            {fr ? 'Résultats mesurés · Client réel' : 'Measured results · Real client'}
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {fr ? (
              <>Ce que ça change chez <span className="gradient-text">Mobilier de France</span></>
            ) : (
              <>What it changes at <span className="gradient-text">Mobilier de France</span></>
            )}
          </h2>
          <p className="text-happi-muted text-sm mt-3 max-w-xl mx-auto">
            {fr
              ? 'Chiffres issus du déploiement réel — mesurés sur les 3 premiers mois de production.'
              : 'Figures from the real deployment — measured over the first 3 months in production.'}
          </p>
        </motion.div>

        {/* Outcome cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {outcomes.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
            >
              <TiltCard intensity={5} className="h-full">
                <div
                  className="h-full rounded-2xl p-5 flex flex-col gap-3"
                  style={{
                    background: `${card.color}08`,
                    border: `1px solid ${card.color}25`,
                    borderLeftWidth: '3px',
                    borderLeftColor: card.color,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${card.color}15`, color: card.color }}
                  >
                    {card.icon}
                  </div>

                  {/* Value */}
                  <AnimatedValue value={card.value} color={card.color} />

                  {/* Label */}
                  <div className="text-white font-bold text-sm">{card.label}</div>

                  {/* Description */}
                  <p className="text-happi-muted text-xs leading-relaxed flex-1">{card.description}</p>

                  {/* Before pill */}
                  <div
                    className="text-[10px] font-medium px-2.5 py-1 rounded-lg inline-block self-start mt-1"
                    style={{ background: `${card.color}10`, color: `${card.color}cc` }}
                  >
                    {card.before}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
