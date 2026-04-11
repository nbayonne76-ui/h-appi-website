'use client';

import { motion } from 'framer-motion';
import { Sparkles, Eye, Target, Brain, Phone, Mic, Radio, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { FadeInUp } from '@/components/ui/Animate';

// Stack IA de référence H'appi (depuis le Brain)
const aiStack = [
  {
    name: 'Claude (Anthropic)',
    role: 'NLP · Analyse · Génération',
    description: 'Modèle de référence pour la compréhension métier, les analyses post-appel et la génération de réponses complexes en FR/EN/AR.',
    color: '#3B82F6',
    icon: Brain,
  },
  {
    name: 'Vapi.ai',
    role: 'Téléphonie IA',
    description: 'Infrastructure voix IA avec latence < 500ms. Utilisé pour le secrétariat vocal 24h/24 et les callbots.',
    color: '#10B981',
    icon: Phone,
  },
  {
    name: 'ElevenLabs',
    role: 'Synthèse vocale',
    description: 'Voix naturelles ultra-réalistes en FR, EN, AR et 29 autres langues pour tous les projets vocaux.',
    color: '#A78BFA',
    icon: Mic,
  },
  {
    name: 'Deepgram',
    role: 'Reconnaissance vocale',
    description: 'Transcription en temps réel avec 99%+ de précision. Traitement des accents régionaux et du bruit de fond.',
    color: '#F59E0B',
    icon: Radio,
  },
];

// Roadmap 2026 → 2030
const roadmap = [
  {
    year: '2026',
    title: 'Fondation',
    color: '#3B82F6',
    items: [
      '17+ démos clients livrées',
      '3 solutions phares (SAV-Bot, Secretary, E-commerce)',
      '11 secteurs couverts',
      'Happi Web Creator (no-code builder)',
    ],
  },
  {
    year: '2027',
    title: 'Expansion',
    color: '#10B981',
    items: [
      'Happi Brain V2 (pgvector + MCP server)',
      'DropOS SaaS dropshipping',
      'Expansion Europe du Sud (ES, IT)',
      'Certification ISO 27001',
    ],
  },
  {
    year: '2030',
    title: 'Objectif',
    color: '#A78BFA',
    items: [
      '1 000 entreprises émancipées des solutions standardisées',
      'Plateforme d\'intelligence métier SaaS',
      'Hub franco-égyptien IA souveraine',
      'Brain V2 comme produit client vendable',
    ],
  },
];

export default function VisionSection() {
  const t = useTranslations('vision');

  return (
    <>
      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-5xl mx-auto">

          {/* Vision */}
          <FadeInUp className="mb-20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-happi-yellow/20 rounded-xl flex items-center justify-center">
                <Eye className="text-happi-yellow" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">{t('title')}</h2>
            </div>

            <p className="text-xl font-semibold text-happi-blue mb-6">{t('headline')}</p>

            <div className="space-y-4 text-happi-muted leading-relaxed">
              {(['paragraph1', 'paragraph2', 'paragraph3'] as const).map((key, i) => (
                <motion.p
                  key={key}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {t.rich(key, { strong: (chunks) => <strong className="text-white">{chunks}</strong> })}
                </motion.p>
              ))}
            </div>

            {/* Objectif 2030 banner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="mt-8 bg-gradient-to-r from-happi-blue to-happi-green rounded-2xl p-8 text-white"
            >
              <div className="flex items-start space-x-4">
                <Target className="flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('objective2030.title')}</h3>
                  <p className="text-white/90 leading-relaxed">
                    {t.rich('objective2030.description', {
                      bold: (chunks) => <span className="font-bold text-white">{chunks}</span>,
                    })}
                  </p>
                </div>
              </div>
            </motion.div>
          </FadeInUp>

          {/* Mission */}
          <FadeInUp delay={0.1}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-happi-blue/10 rounded-xl flex items-center justify-center">
                <Sparkles className="text-happi-blue" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">{t('missionTitle')}</h2>
            </div>
            <p className="text-xl font-semibold text-happi-blue mb-4">{t('missionHeadline')}</p>
            <p className="text-happi-muted leading-relaxed">{t('missionIntro')}</p>
          </FadeInUp>
        </div>
      </section>

      {/* Stack IA de référence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
        <div className="max-w-5xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
              Notre arsenal technologique
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              La <span className="gradient-text">stack IA H&apos;appi</span>
            </h2>
            <p className="text-happi-muted text-sm mt-2 max-w-xl mx-auto">
              Nous sélectionnons les meilleures technologies IA disponibles — pas les plus populaires, les plus adaptées à chaque besoin.
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-5">
            {aiStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="rounded-2xl p-6 border flex gap-4"
                  style={{ background: `${tech.color}08`, borderColor: `${tech.color}25` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${tech.color}15` }}
                  >
                    <Icon size={20} style={{ color: tech.color }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-white font-bold text-sm">{tech.name}</span>
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                        style={{ background: `${tech.color}12`, color: tech.color, borderColor: `${tech.color}25` }}
                      >
                        {tech.role}
                      </span>
                    </div>
                    <p className="text-happi-muted text-xs leading-relaxed">{tech.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap 2026 → 2030 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-4xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
              Notre trajectoire
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              De 2026 à <span className="gradient-text">2030</span>
            </h2>
          </FadeInUp>

          <div className="relative">
            {/* Vertical connector */}
            <div className="absolute left-[2.75rem] top-12 bottom-12 w-px bg-happi-border hidden md:block" />

            <div className="space-y-8">
              {roadmap.map((step, i) => (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="flex gap-6 items-start"
                >
                  {/* Year badge */}
                  <div
                    className="w-[5.5rem] flex-shrink-0 flex flex-col items-center justify-center rounded-2xl py-3 relative z-10 border"
                    style={{ background: `${step.color}12`, borderColor: `${step.color}30` }}
                  >
                    <span className="text-lg font-extrabold" style={{ color: step.color }}>{step.year}</span>
                    <span className="text-[10px] text-happi-muted font-medium">{step.title}</span>
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 rounded-2xl p-5 border"
                    style={{ background: `${step.color}05`, borderColor: `${step.color}18` }}
                  >
                    <ul className="space-y-2">
                      {step.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-happi-muted">
                          <ArrowRight size={13} className="mt-0.5 flex-shrink-0" style={{ color: step.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
