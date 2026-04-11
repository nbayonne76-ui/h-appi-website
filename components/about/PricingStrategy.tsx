'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FadeInUp } from '@/components/ui/Animate';
import { Users, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

// Qualification en 3 phases (depuis le Brain)
const phases3 = [
  {
    num: '01',
    color: '#3B82F6',
    title: 'Identification',
    desc: 'Qui est l\'utilisateur ? Quel est son besoin précis ? Quel canal utilise-t-il ?',
    icon: Users,
  },
  {
    num: '02',
    color: '#10B981',
    title: 'Qualification',
    desc: 'Quel produit ou service correspond ? Quel est le niveau de priorité (P0-P3) ?',
    icon: MessageSquare,
  },
  {
    num: '03',
    color: '#A78BFA',
    title: 'Conversion',
    desc: 'Proposition sur-mesure, collecte du lead ou action directe (ticket, RDV, achat).',
    icon: CheckCircle2,
  },
];

export default function PricingStrategy() {
  const t = useTranslations('pricingStrategy');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeInUp className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-happi-yellow/10 text-happi-yellow rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-yellow/20">
            {t('badge')}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            {t.rich('title', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
        </FadeInUp>

        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-red-500/8 rounded-2xl p-8 border border-red-500/20 mb-10"
        >
          <h3 className="text-xl font-bold text-red-400 mb-3">{t('problem.title')}</h3>
          <p className="text-happi-muted mb-5 text-sm">{t('problem.subtitle')}</p>
          <div className="grid md:grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-sm text-happi-muted">{t(`problem.items.${i}`)}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-red-400 font-semibold">{t('problem.result')}</p>
        </motion.div>

        {/* Solution pillars */}
        <FadeInUp className="mb-14">
          <h3 className="text-2xl font-bold text-white mb-6">{t('solution.title')}</h3>
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="bg-happi-darker rounded-xl p-5 border border-happi-border flex items-start gap-4"
              >
                <span className="text-2xl font-bold text-happi-blue/25 flex-shrink-0 w-8">{i + 1}.</span>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-1 text-sm">{t(`solution.pillars.${i}.title`)}</h4>
                  <p className="text-happi-muted text-xs mb-1">{t(`solution.pillars.${i}.description`)}</p>
                  <span className="inline-block text-happi-green font-semibold text-xs bg-happi-green/10 border border-happi-green/20 px-2.5 py-0.5 rounded-full">
                    {t(`solution.pillars.${i}.saving`)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeInUp>

        {/* Qualification en 3 phases (Brain) */}
        <FadeInUp className="mb-14">
          <div className="text-center mb-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
              Notre différenciateur
            </p>
            <h3 className="text-2xl font-bold text-white">
              Qualification leads en <span className="gradient-text">3 phases</span>
            </h3>
            <p className="text-happi-muted text-sm mt-2 max-w-xl mx-auto">
              Toutes nos solutions intègrent ce système éprouvé qui maximise le taux de conversion — de 34% supérieur aux chatbots génériques.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {phases3.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.1 }}
                  className="rounded-2xl p-6 border text-center"
                  style={{ background: `${phase.color}08`, borderColor: `${phase.color}25` }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${phase.color}15` }}
                  >
                    <Icon size={22} style={{ color: phase.color }} />
                  </div>
                  <div className="text-3xl font-extrabold mb-1" style={{ color: phase.color }}>
                    {phase.num}
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2">{phase.title}</h4>
                  <p className="text-happi-muted text-xs leading-relaxed">{phase.desc}</p>
                  {i < 2 && (
                    <div className="hidden md:flex justify-end absolute right-0 top-1/2 -translate-y-1/2">
                      <ArrowRight size={14} className="text-happi-muted/30" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </FadeInUp>

        {/* Comparison table */}
        <FadeInUp>
          <h3 className="text-2xl font-bold text-white mb-6">{t('comparison.title')}</h3>
          <div className="overflow-x-auto rounded-2xl border border-happi-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-happi-darker">
                  <th className="text-left py-4 px-5 text-happi-muted font-medium">{t('comparison.colType')}</th>
                  <th className="text-center py-4 px-5">
                    <span className="text-happi-green font-bold flex items-center justify-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-happi-green" />
                      {t('comparison.colSavings')}
                    </span>
                  </th>
                  <th className="text-left py-4 px-5 text-happi-muted font-medium">{t('comparison.colBenefit')}</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="border-t border-happi-border hover:bg-happi-surface/30 transition-colors">
                    <td className="py-4 px-5 text-white font-medium">{t(`comparison.rows.${i}.type`)}</td>
                    <td className="py-4 px-5 text-center">
                      <span className="bg-happi-green/10 text-happi-green font-bold px-3 py-1 rounded-full text-xs border border-happi-green/20">
                        {t(`comparison.rows.${i}.savings`)}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-happi-muted text-xs">{t(`comparison.rows.${i}.benefit`)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-happi-muted text-xs italic text-center">{t('comparison.footnote')}</p>
        </FadeInUp>

      </div>
    </section>
  );
}
