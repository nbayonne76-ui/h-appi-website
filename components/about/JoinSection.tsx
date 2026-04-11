'use client';

import { motion } from 'framer-motion';
import {
  Building2, Code2, Users, Mail, Globe, MessageCircle, CalendarDays,
  CheckCircle2, ArrowRight,
} from 'lucide-react';
import { openContactModal } from '@/components/ui/ContactModal';
import { useTranslations } from 'next-intl';
import { FadeInUp } from '@/components/ui/Animate';

// Stack tech H'appi (depuis Brain)
const techStack = [
  { label: 'Next.js 14', color: '#3B82F6' },
  { label: 'React Native', color: '#10B981' },
  { label: 'FastAPI', color: '#A78BFA' },
  { label: 'Claude API', color: '#F59E0B' },
  { label: 'Vapi.ai', color: '#10B981' },
  { label: 'ElevenLabs', color: '#A78BFA' },
  { label: 'PostgreSQL', color: '#3B82F6' },
  { label: 'TypeScript', color: '#3B82F6' },
  { label: 'Docker', color: '#0EA5E9' },
  { label: 'Railway', color: '#EF4444' },
];

// 11 secteurs couverts (depuis Brain)
const sectors = [
  { label: 'Meublement', emoji: '🛋️' },
  { label: 'Hôtellerie', emoji: '🏨' },
  { label: 'E-commerce', emoji: '🛍️' },
  { label: 'Transport', emoji: '🚚' },
  { label: 'Notariat', emoji: '⚖️' },
  { label: 'Industrie', emoji: '🏭' },
  { label: 'Restauration', emoji: '🍽️' },
  { label: 'Santé', emoji: '🏥' },
  { label: 'Finance', emoji: '💼' },
  { label: 'Éducation', emoji: '📚' },
  { label: 'Immobilier', emoji: '🏢' },
];

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.1 } }),
};

export default function JoinSection() {
  const t = useTranslations('join');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeInUp className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-blue/20">
            Rejoindre H&apos;appi
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            {t.rich('title', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
          <p className="text-happi-muted max-w-2xl mx-auto text-sm">
            Entreprise, talent ou partenaire — chaque collaboration avec H&apos;appi s&apos;inscrit dans un objectif commun : révolutionner le digital sur-mesure en France et au-delà.
          </p>
        </FadeInUp>

        {/* 3 cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">

          {/* Entreprise */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
            className="rounded-2xl p-7 border border-happi-blue/20 hover:border-happi-blue/40 transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
            style={{ background: '#3B82F608' }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-happi-blue to-happi-blue/20" />
            <div className="w-12 h-12 bg-happi-blue/10 rounded-xl flex items-center justify-center mb-5">
              <Building2 className="text-happi-blue" size={22} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{t('enterprise.title')}</h3>
            <p className="text-happi-muted text-xs leading-relaxed mb-3">
              {t('enterprise.description1')}
            </p>
            <p className="text-happi-muted text-xs leading-relaxed mb-5">
              {t('enterprise.description2')}
            </p>

            {/* Social proof */}
            <div className="rounded-xl bg-happi-darker border border-happi-border p-3 mb-5">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={12} className="text-happi-green flex-shrink-0" />
                <span className="text-xs text-happi-muted">17+ projets livrés · 11 secteurs · Réponse 48h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-happi-green flex-shrink-0" />
                <span className="text-xs text-happi-muted">Prix −50 à −70% vs agences traditionnelles</span>
              </div>
            </div>

            <button
              onClick={openContactModal}
              className="btn-shimmer w-full text-center bg-happi-blue text-white py-2.5 rounded-xl hover:bg-opacity-90 transition-all font-semibold text-xs flex items-center justify-center gap-2"
            >
              {t('enterprise.cta')}
              <ArrowRight size={13} />
            </button>
            <p className="text-[10px] text-happi-muted text-center mt-2">
              {t('enterprise.ctaNote')}
            </p>
          </motion.div>

          {/* Talent */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
            className="rounded-2xl p-7 border border-happi-green/20 hover:border-happi-green/40 transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
            style={{ background: '#10B98108' }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-happi-green to-happi-green/20" />
            <div className="w-12 h-12 bg-happi-green/10 rounded-xl flex items-center justify-center mb-5">
              <Code2 className="text-happi-green" size={22} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{t('talent.title')}</h3>
            <p className="text-happi-muted text-xs leading-relaxed mb-4">
              {t('talent.description')}
            </p>

            {/* Tech stack badges */}
            <div className="mb-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                Notre stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span
                    key={tech.label}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                    style={{
                      background: `${tech.color}12`,
                      color: tech.color,
                      borderColor: `${tech.color}30`,
                    }}
                  >
                    {tech.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Open positions */}
            <div className="space-y-1 text-xs text-happi-muted mb-4">
              <p className="font-semibold text-white text-xs">{t('talent.positionsLabel')}</p>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <ArrowRight size={11} className="mt-0.5 flex-shrink-0 text-happi-green" />
                  {t(`talent.positions.${i}`)}
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-happi-darker border border-happi-border p-3 text-[10px] text-happi-muted leading-relaxed">
              {t('talent.perks')}
            </div>
          </motion.div>

          {/* Partenaire */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
            className="rounded-2xl p-7 border border-happi-yellow/20 hover:border-happi-yellow/40 transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
            style={{ background: '#F59E0B08' }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-happi-yellow to-happi-yellow/20" />
            <div className="w-12 h-12 bg-happi-yellow/10 rounded-xl flex items-center justify-center mb-5">
              <Users className="text-happi-yellow" size={22} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{t('partner.title')}</h3>
            <p className="text-happi-muted text-xs leading-relaxed mb-4">
              {t('partner.description')}
            </p>

            {/* 11 sectors grid */}
            <div className="mb-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                11 secteurs couverts
              </p>
              <div className="flex flex-wrap gap-1.5">
                {sectors.map((s) => (
                  <span
                    key={s.label}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-happi-yellow/8 border border-happi-yellow/20 text-happi-yellow flex items-center gap-1"
                  >
                    <span>{s.emoji}</span>
                    {s.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Partner types */}
            <div className="space-y-1 text-xs text-happi-muted mb-5">
              <p className="font-semibold text-white text-xs">{t('partner.typesLabel')}</p>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <ArrowRight size={11} className="mt-0.5 flex-shrink-0 text-happi-yellow" />
                  {t(`partner.types.${i}`)}
                </div>
              ))}
            </div>

            <button
              onClick={openContactModal}
              className="w-full text-center border-2 border-happi-yellow text-happi-yellow py-2.5 rounded-xl hover:bg-happi-yellow hover:text-happi-darker transition-all font-semibold text-xs flex items-center justify-center gap-2"
            >
              {t('partner.cta')}
              <ArrowRight size={13} />
            </button>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <FadeInUp>
          <div
            id="contact"
            className="rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #10B981)' }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-8 w-32 h-32 rounded-full border-2 border-white/30" />
              <div className="absolute bottom-4 left-8 w-20 h-20 rounded-full border border-white/20" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t('contact.title')}
              </h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
                {t('contact.subtitle')}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                {[Mail, Globe, MessageCircle, CalendarDays].map((Icon, i) => {
                  const cls = 'bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/20 transition-colors text-center cursor-pointer border border-white/10 hover:border-white/25';
                  const inner = (
                    <>
                      <Icon className="mx-auto mb-2" size={20} />
                      <p className="text-sm font-semibold">{t(`contact.channels.${i}.label`)}</p>
                      <p className="text-xs text-white/75 mt-0.5">{t(`contact.channels.${i}.value`)}</p>
                    </>
                  );
                  if (i === 0) return <a key={i} href="mailto:contact@happi-bot.com" className={cls}>{inner}</a>;
                  if (i === 1) return <a key={i} href="https://www.happi.ai" target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>;
                  return <button key={i} onClick={openContactModal} className={cls}>{inner}</button>;
                })}
              </div>

              <p className="text-base font-semibold text-white/90 leading-relaxed max-w-2xl mx-auto">
                {t.rich('contact.closing', {
                  highlight: (chunks) => <span className="text-happi-yellow font-bold">{chunks}</span>,
                  br: () => <br />,
                })}
              </p>
            </div>
          </div>
        </FadeInUp>

      </div>
    </section>
  );
}
