'use client';

import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

type CellValue = 'yes' | 'no' | 'partial' | string;

type Row = {
  criteriaFr: string;
  criteriaEn: string;
  agency: CellValue;
  saas: CellValue;
  happi: CellValue;
};

const rows: Row[] = [
  {
    criteriaFr: 'Délai de déploiement',
    criteriaEn: 'Deployment time',
    agency: '3 à 6 mois',
    saas: 'Immédiat',
    happi: '2 à 3 semaines',
  },
  {
    criteriaFr: 'Adapté à votre métier',
    criteriaEn: 'Tailored to your business',
    agency: 'partial',
    saas: 'no',
    happi: 'yes',
  },
  {
    criteriaFr: 'Vous êtes propriétaire du code',
    criteriaEn: 'You own the source code',
    agency: 'no',
    saas: 'no',
    happi: 'yes',
  },
  {
    criteriaFr: 'Prix',
    criteriaEn: 'Price',
    agency: 'Élevé',
    saas: 'Abonnement mensuel',
    happi: 'Optimisé · sans abonnement',
  },
  {
    criteriaFr: 'Interlocuteur dédié',
    criteriaEn: 'Dedicated contact person',
    agency: 'partial',
    saas: 'no',
    happi: 'yes',
  },
  {
    criteriaFr: 'Hébergement en Europe · RGPD',
    criteriaEn: 'EU hosting · GDPR',
    agency: 'partial',
    saas: 'no',
    happi: 'yes',
  },
  {
    criteriaFr: 'Évolution sans surcoût de licence',
    criteriaEn: 'Evolution without licence fees',
    agency: 'no',
    saas: 'no',
    happi: 'yes',
  },
];

function Cell({ value, highlight }: { value: CellValue; highlight?: boolean }) {
  const base = highlight ? 'text-white font-semibold' : 'text-happi-muted';

  if (value === 'yes') {
    return (
      <div className="flex justify-center">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${highlight ? 'bg-happi-green/20' : 'bg-happi-green/10'}`}>
          <Check size={13} className="text-happi-green" />
        </div>
      </div>
    );
  }
  if (value === 'no') {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
          <X size={13} className="text-red-400/70" />
        </div>
      </div>
    );
  }
  if (value === 'partial') {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-happi-yellow/10 flex items-center justify-center">
          <Minus size={13} className="text-happi-yellow/70" />
        </div>
      </div>
    );
  }
  return <span className={`text-xs text-center block ${base}`}>{value}</span>;
}

export default function ComparisonTable({ fr }: { fr: boolean }) {
  const headers = [
    { label: fr ? 'Critère' : 'Criteria', sub: '' },
    { label: fr ? 'Agence classique' : 'Traditional agency', sub: '' },
    { label: fr ? 'SaaS généraliste' : 'Generic SaaS', sub: fr ? '(Chatbase, Tidio…)' : '(Chatbase, Tidio…)' },
    { label: "H'appi", sub: fr ? 'Sur-mesure' : 'Custom-built', happi: true },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-happi-green/10 text-happi-green rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-happi-green/20">
            {fr ? 'Pourquoi H\'appi ?' : 'Why H\'appi?'}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {fr ? (
              <>H&apos;appi vs <span className="gradient-text">les autres options</span></>
            ) : (
              <>H&apos;appi vs <span className="gradient-text">the alternatives</span></>
            )}
          </h2>
          <p className="text-happi-muted text-sm mt-3 max-w-xl mx-auto">
            {fr
              ? 'Une agence coûte cher et livre lentement. Un SaaS est rapide mais générique. H\'appi combine la vitesse du SaaS et la précision du sur-mesure.'
              : "An agency is expensive and slow. A SaaS is fast but generic. H'appi combines SaaS speed with custom-built precision."}
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-happi-border overflow-hidden"
        >
          {/* Column headers */}
          <div className="grid grid-cols-4 bg-happi-surface border-b border-happi-border">
            {headers.map((h, i) => (
              <div
                key={i}
                className={`px-4 py-4 text-center ${i === 3 ? 'bg-happi-blue/10 border-l border-happi-blue/20' : ''}`}
              >
                <p className={`text-sm font-bold ${i === 3 ? 'text-happi-blue' : 'text-white'}`}>{h.label}</p>
                {h.sub && <p className="text-[10px] text-happi-muted mt-0.5">{h.sub}</p>}
              </div>
            ))}
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 border-b border-happi-border/50 last:border-0 ${i % 2 === 0 ? 'bg-happi-darker' : 'bg-happi-surface/30'}`}
            >
              {/* Criteria */}
              <div className="px-4 py-3.5 flex items-center">
                <span className="text-xs font-medium text-white">{fr ? row.criteriaFr : row.criteriaEn}</span>
              </div>
              {/* Agency */}
              <div className="px-4 py-3.5 flex items-center justify-center">
                <Cell value={row.agency} />
              </div>
              {/* SaaS */}
              <div className="px-4 py-3.5 flex items-center justify-center">
                <Cell value={row.saas} />
              </div>
              {/* H'appi */}
              <div className="px-4 py-3.5 flex items-center justify-center bg-happi-blue/5 border-l border-happi-blue/20">
                <Cell value={row.happi} highlight />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA nudge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center text-happi-muted text-xs mt-5"
        >
          {fr
            ? 'Ces chiffres sont basés sur notre expérience réelle avec nos clients. Pas du marketing : de la réalité.'
            : "These figures are based on our real experience with clients. Not marketing: reality."}
        </motion.p>
      </div>
    </section>
  );
}
