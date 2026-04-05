'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const TIMELINE = {
  fr: [
    {
      period: 'Semaine 1',
      step: '01',
      title: 'Go-live production',
      color: '#3B82F6',
      items: [
        'Bot SAV configuré, formé sur les processus Mobilier de France',
        'App Traçabilité installée sur tous les terminaux livreurs',
        'Connexion bot ↔ app opérationnelle dès J+1',
      ],
    },
    {
      period: 'Mois 1',
      step: '02',
      title: 'Premiers résultats',
      color: '#10B981',
      items: [
        '−65 % d\'appels entrants dès la 4ème semaine',
        '0 litige non documenté avec preuve numérique',
        '2,5 jours → 4 heures de traitement après-vente',
      ],
    },
    {
      period: 'Mois 3',
      step: '03',
      title: 'Plateforme éveillée',
      color: '#A78BFA',
      items: [
        '+38 pts NPS mesuré sur les clients livrés',
        'Détection d\'anomalies de tournée activée',
        'SAV prédictif sur les modèles à risque élevé',
      ],
    },
  ],
  en: [
    {
      period: 'Week 1',
      step: '01',
      title: 'Production go-live',
      color: '#3B82F6',
      items: [
        'After-sales bot configured & trained on Mobilier de France processes',
        'Traceability App installed on all driver devices',
        'Bot ↔ app connection live from day one',
      ],
    },
    {
      period: 'Month 1',
      step: '02',
      title: 'First results',
      color: '#10B981',
      items: [
        '−65% inbound calls by week four',
        '0 undocumented disputes with digital proof',
        '2.5 days → 4 hours after-sales processing time',
      ],
    },
    {
      period: 'Month 3',
      step: '03',
      title: 'Platform awakens',
      color: '#A78BFA',
      items: [
        '+38 NPS points measured on delivered clients',
        'Delivery route anomaly detection activated',
        'Predictive after-sales on high-risk furniture models',
      ],
    },
  ],
};

export default function CasUsageTimeline({ fr }: { fr: boolean }) {
  const timeline = fr ? TIMELINE.fr : TIMELINE.en;

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
            {fr ? 'Déploiement réel · Cas client documenté' : 'Real deployment · Documented client case'}
          </p>
          <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
            {fr ? (
              <>Ce qui s&apos;est passé chez <span className="gradient-text">Mobilier de France</span></>
            ) : (
              <>What happened at <span className="gradient-text">Mobilier de France</span></>
            )}
          </h2>
        </div>

        {/* Timeline grid */}
        <div className="relative">

          {/* Connector line — desktop only */}
          <div className="absolute top-[2.75rem] left-[16.5%] right-[16.5%] h-px bg-happi-border hidden md:block pointer-events-none" />

          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((step, i) => (
              <motion.div
                key={step.period}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.14, ease: 'easeOut' }}
              >
                {/* Dot + period label */}
                <div className="flex flex-col items-center mb-5 relative">
                  <motion.div
                    className="w-[5.5rem] h-[5.5rem] rounded-2xl flex flex-col items-center justify-center relative z-10 mb-3"
                    style={{
                      background: `${step.color}12`,
                      border: `1.5px solid ${step.color}40`,
                    }}
                    whileHover={{ scale: 1.06, boxShadow: `0 0 28px ${step.color}30` }}
                    transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: step.color }}>
                      {step.period}
                    </span>
                    <div className="w-8 h-px my-1.5" style={{ background: `${step.color}40` }} />
                    <span className="text-[11px] font-bold text-white/40">{step.step}</span>
                  </motion.div>
                  <h3 className="text-sm font-bold text-white text-center">{step.title}</h3>
                </div>

                {/* Items card */}
                <div
                  className="rounded-xl p-4 space-y-3"
                  style={{
                    background: `${step.color}07`,
                    border: `1px solid ${step.color}22`,
                  }}
                >
                  {step.items.map((item, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.14 + j * 0.08 + 0.25, duration: 0.3 }}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2
                        size={13}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: step.color }}
                      />
                      <span className="text-xs text-happi-muted leading-snug">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
