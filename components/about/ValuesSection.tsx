'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Palette, Coins, TrendingUp, Zap, Handshake, ShieldCheck, Sprout, Globe,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

const valueIcons = [Palette, Coins, TrendingUp, Zap, Handshake, ShieldCheck, Sprout, Globe];
const valueColors = [
  { color: '#3B82F6', bg: 'bg-happi-blue/10', text: 'text-happi-blue', border: 'border-happi-blue/20' },
  { color: '#10B981', bg: 'bg-happi-green/10', text: 'text-happi-green', border: 'border-happi-green/20' },
  { color: '#F59E0B', bg: 'bg-happi-yellow/10', text: 'text-happi-yellow', border: 'border-happi-yellow/20' },
  { color: '#3B82F6', bg: 'bg-happi-blue/10', text: 'text-happi-blue', border: 'border-happi-blue/20' },
  { color: '#10B981', bg: 'bg-happi-green/10', text: 'text-happi-green', border: 'border-happi-green/20' },
  { color: '#F59E0B', bg: 'bg-happi-yellow/10', text: 'text-happi-yellow', border: 'border-happi-yellow/20' },
  { color: '#3B82F6', bg: 'bg-happi-blue/10', text: 'text-happi-blue', border: 'border-happi-blue/20' },
  { color: '#10B981', bg: 'bg-happi-green/10', text: 'text-happi-green', border: 'border-happi-green/20' },
];

// Brain proof points par valeur
const brainProofs = [
  { metric: '14 jours', label: 'délai moyen déploiement', client: 'Mobilier de France' },
  { metric: '−50 à −70%', label: 'vs agences traditionnelles', client: 'Tous clients' },
  { metric: '4 phases', label: 'évolution sur-mesure → SaaS', client: 'Modèle H\'appi' },
  { metric: '1–2 sem.', label: 'itérations de livraison', client: 'Standard H\'appi' },
  { metric: '0 ticket', label: 'anonyme — interlocuteur dédié', client: 'Tous clients' },
  { metric: 'ISO 27001', label: 'partenaires certifiés', client: 'Scaleway, Hetzner' },
  { metric: '100%', label: 'code source appartient au client', client: 'Politique H\'appi' },
  { metric: '17+', label: 'démos sans surcoût caché', client: 'Catalogue Brain' },
];

export default function ValuesSection() {
  const t = useTranslations('values');
  const [active, setActive] = useState(0);

  const colors = valueColors[active];
  const Icon = valueIcons[active];
  const proof = brainProofs[active];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className={`inline-block px-4 py-2 ${colors.bg} ${colors.text} rounded-full text-sm font-medium mb-4 border ${colors.border}`}>
            {t('badge')}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            {t.rich('title', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
          <p className="text-happi-muted">{t('subtitle')}</p>
        </div>

        {/* Selector tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {valueIcons.map((VIcon, i) => {
            const c = valueColors[i];
            const isActive = active === i;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                  isActive
                    ? `${c.bg} ${c.text} ${c.border}`
                    : 'text-happi-muted border-happi-border hover:text-white hover:border-happi-border/60'
                }`}
              >
                <VIcon size={13} />
                {i + 1}. {t(`items.${i}.title`)}
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: `${colors.color}25`, background: `${colors.color}05` }}
          >
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">

              {/* Left — Valeur */}
              <div className="p-6 md:p-8 md:col-span-2">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${colors.color}15` }}
                  >
                    <Icon size={20} style={{ color: colors.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{t(`items.${active}.title`)}</h3>
                </div>

                <blockquote
                  className="text-base font-semibold italic mb-4 border-l-2 pl-4"
                  style={{ color: colors.color, borderColor: colors.color }}
                >
                  &laquo; {t(`items.${active}.quote`)} &raquo;
                </blockquote>

                <p className="text-happi-muted leading-relaxed text-sm mb-5">
                  {t(`items.${active}.description`)}
                </p>

                <div className="rounded-xl p-4 border border-happi-border bg-happi-darker/80">
                  <p className="text-sm text-happi-muted">
                    <span className="font-semibold text-white">{t('inPractice')} </span>
                    {t(`items.${active}.practice`)}
                  </p>
                </div>
              </div>

              {/* Right — Brain proof */}
              <div className="p-6 md:p-8 flex flex-col justify-center items-center text-center gap-3">
                <p
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: `${colors.color}80` }}
                >
                  Preuve concrète
                </p>
                <div className="text-4xl font-extrabold" style={{ color: colors.color }}>
                  {proof.metric}
                </div>
                <div className="text-white text-sm font-semibold">{proof.label}</div>
                <span
                  className="text-[11px] px-2.5 py-1 rounded-full border font-medium"
                  style={{ background: `${colors.color}10`, color: colors.color, borderColor: `${colors.color}25` }}
                >
                  {proof.client}
                </span>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {valueIcons.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="w-1.5 h-1.5 rounded-full transition-all duration-200"
              style={{
                background: i === active ? valueColors[i].color : 'rgba(255,255,255,0.15)',
                transform: i === active ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
