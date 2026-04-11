'use client';

import { motion } from 'framer-motion';
import { Check, Mail, Info, ArrowRight, Users, Zap, Shield, TrendingDown, Coins, Building2, Hotel, Scale } from 'lucide-react';
import { openContactModal } from '@/components/ui/ContactModal';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { RoiCalculator } from '@/components/pricing/RoiCalculator';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import MagneticButton from '@/components/ui/MagneticButton';
import BillingToggle from '@/components/pricing/BillingToggle';
import { FadeInUp, Stagger, StaggerItem } from '@/components/ui/Animate';

// Brain stats
const brainStats = [
  { value: '17+', label: 'Projets livrés', color: '#3B82F6' },
  { value: '11', label: 'Secteurs couverts', color: '#10B981' },
  { value: '14 j', label: 'Délai moyen déploiement', color: '#A78BFA' },
  { value: '−50/70%', label: 'vs agences trad.', color: '#F59E0B' },
];

// Brain client proofs
const clientProofs = [
  {
    icon: Building2,
    name: 'Mobilier de France',
    sector: 'Meublement',
    metric: '−65%',
    detail: 'appels SAV automatisés',
    color: '#3B82F6',
  },
  {
    icon: Scale,
    name: 'Groupe Monassier',
    sector: 'Notariat',
    metric: '−80%',
    detail: 'appels non qualifiés',
    color: '#10B981',
  },
  {
    icon: Hotel,
    name: 'Lavorel Hotels',
    sector: 'Hôtellerie',
    metric: '24h/7j',
    detail: 'concierge IA actif',
    color: '#A78BFA',
  },
];

// 4-phase evolution model (Brain)
const phases4 = [
  {
    num: '01',
    color: '#3B82F6',
    title: 'Bot sur-mesure',
    desc: 'Chatbot ou app 100% personnalisé(e), déployé(e) en 14 jours en moyenne.',
    badge: 'Inclus d\'emblée',
  },
  {
    num: '02',
    color: '#10B981',
    title: 'Collecte de données',
    desc: 'Chaque interaction alimente une base de connaissance métier (RGPD-compliant).',
    badge: 'Dès le 1er mois',
  },
  {
    num: '03',
    color: '#A78BFA',
    title: 'Recommandations IA',
    desc: 'Prédictions, personnalisation et insights CX / Supply Chain générés automatiquement.',
    badge: 'Mois 2-3',
  },
  {
    num: '04',
    color: '#F59E0B',
    title: 'Plateforme SaaS',
    desc: 'Activation à la carte de modules avancés (prédiction churn, optimisation stocks…).',
    badge: 'Évolutif',
  },
];

// "Why cheaper" levers (Brain)
const cheaperLevers = [
  {
    icon: TrendingDown,
    color: '#3B82F6',
    title: 'Cloud nouvelle génération',
    saving: '−40 à −60%',
    desc: 'Scaleway, Hetzner et Railway : performances équivalentes à AWS/GCP pour une fraction du coût. Hébergement 100% France/Europe.',
  },
  {
    icon: Coins,
    color: '#10B981',
    title: 'Stack 100% open-source',
    saving: '0 € de licences',
    desc: 'FastAPI, Next.js, PostgreSQL, React Native — aucune licence propriétaire. Vous êtes propriétaire du code source à 100%.',
  },
  {
    icon: Users,
    color: '#A78BFA',
    title: 'Organisation lean',
    saving: 'Overhead −60%',
    desc: 'Équipe resserrée d\'experts, pas d\'intermédiaires. Chaque euro facturé va directement dans votre solution.',
  },
];

export default function Pricing() {
  const t = useTranslations('pricing');
  const locale = useLocale();
  const fr = locale === 'fr';

  return (
    <div className="text-white">

      {/* ── Hero ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker relative overflow-hidden">
        <AnimatedMesh variant="hero" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInUp>
            <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-6 border border-happi-blue/20">
              {t('heroBadge')}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              {t.rich('heroTitle', {
                highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
              })}
            </h1>
            <p className="text-lg text-happi-muted mb-8 max-w-2xl mx-auto">
              {t('heroSubtitle')}
            </p>
            <MagneticButton
              onClick={openContactModal}
              className="inline-flex items-center px-8 py-3.5 bg-happi-blue text-white rounded-xl hover:bg-happi-blue/90 transition-all hover:shadow-lg hover:shadow-happi-blue/25 font-semibold"
            >
              <Mail className="mr-2" size={18} />
              {t('heroCta')}
            </MagneticButton>
            <p className="text-happi-muted text-sm mt-4">{t('heroNote')}</p>
          </FadeInUp>
        </div>
      </section>

      {/* ── Brain Stats Strip ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-happi-dark border-y border-happi-border/50">
        <div className="max-w-4xl mx-auto">
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brainStats.map((s, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-extrabold mb-1" style={{ color: s.color }}>
                    {s.value}
                  </div>
                  <div className="text-xs text-happi-muted">{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Client Proofs ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-happi-darker">
        <div className="max-w-5xl mx-auto">
          <FadeInUp className="text-center mb-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
              Résultats concrets
            </p>
            <h2 className="text-xl font-bold text-white">
              Ce que nos clients ont obtenu
            </h2>
          </FadeInUp>

          <Stagger className="grid md:grid-cols-3 gap-4">
            {clientProofs.map((c, i) => {
              const Icon = c.icon;
              return (
                <StaggerItem key={i}>
                  <div
                    className="rounded-2xl p-6 border flex items-start gap-4 hover:-translate-y-0.5 transition-transform duration-200"
                    style={{ background: `${c.color}08`, borderColor: `${c.color}25` }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${c.color}15` }}
                    >
                      <Icon size={20} style={{ color: c.color }} />
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold mb-0.5" style={{ color: c.color }}>
                        {c.metric}
                      </div>
                      <div className="text-white text-xs font-semibold">{c.detail}</div>
                      <div className="text-happi-muted text-[11px] mt-1">
                        {c.name} · {c.sector}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ── ROI Calculator ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-4xl mx-auto">
          <FadeInUp className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-blue/20">
              {t('roiBadge')}
            </span>
          </FadeInUp>
          <RoiCalculator />
        </div>
      </section>

      {/* ── 4-Phase Evolution Model ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
        <div className="max-w-5xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
              Notre différenciateur
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Votre solution évolue en <span className="gradient-text">plateforme SaaS</span>
            </h2>
            <p className="text-happi-muted text-sm mt-3 max-w-xl mx-auto">
              Vous démarrez avec un bot sur-mesure. Quelques mois plus tard, il devient un moteur d&apos;intelligence métier — sans migration, sans surcoût.
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-4 gap-4">
            {phases4.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
                className="rounded-2xl p-5 border text-center relative"
                style={{ background: `${phase.color}08`, borderColor: `${phase.color}25` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: `${phase.color}15` }}
                >
                  <span className="text-sm font-extrabold" style={{ color: phase.color }}>
                    {phase.num}
                  </span>
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{phase.title}</h4>
                <p className="text-happi-muted text-xs leading-relaxed mb-3">{phase.desc}</p>
                <span
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-full border"
                  style={{ background: `${phase.color}12`, color: phase.color, borderColor: `${phase.color}30` }}
                >
                  {phase.badge}
                </span>
                {i < 3 && (
                  <ArrowRight
                    size={14}
                    className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10"
                    style={{ color: phase.color }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Implementation Timeline ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-3">
                Déploiement
              </p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                {t('implementTitle')}
              </h2>
              <p className="text-happi-muted mb-4 text-sm leading-relaxed">
                {t('implementSubtitle')}
              </p>
              <p className="text-happi-muted leading-relaxed mb-6 text-sm">
                {t('implementDescription')}
              </p>

              {/* Timeline 14j */}
              <div className="space-y-3 mb-6">
                {[
                  { day: 'J1–J3', label: 'Immersion & cahier des charges', color: '#3B82F6' },
                  { day: 'J4–J8', label: 'Développement & personnalisation', color: '#10B981' },
                  { day: 'J9–J12', label: 'Intégrations & tests', color: '#A78BFA' },
                  { day: 'J13–J14', label: 'Mise en production & formation', color: '#F59E0B' },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-lg flex-shrink-0 w-16 text-center border"
                      style={{ background: `${step.color}15`, color: step.color, borderColor: `${step.color}30` }}
                    >
                      {step.day}
                    </span>
                    <span className="text-sm text-happi-muted">{step.label}</span>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={openContactModal}
                className="inline-flex items-center gap-2 px-6 py-3 bg-happi-blue text-white rounded-xl hover:bg-happi-blue/90 transition-all font-semibold text-sm"
              >
                {t('implementCta')}
                <ArrowRight size={15} />
              </button>
            </FadeInUp>

            <FadeInUp delay={0.15}>
              <div className="bg-happi-surface rounded-2xl p-8 border border-happi-border">
                <h3 className="font-semibold mb-6 text-happi-muted text-xs uppercase tracking-wide">
                  {t('implementItemsLabel')}
                </h3>
                <ul className="space-y-4 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-happi-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-happi-green" size={13} />
                      </div>
                      <span className="text-sm text-happi-muted">{t(`implementItems.${i}`)}</span>
                    </li>
                  ))}
                </ul>
                {/* Brain trust signals */}
                <div className="pt-4 border-t border-happi-border space-y-2">
                  {[
                    { icon: Shield, text: 'Code source 100% propriété du client', color: '#10B981' },
                    { icon: Zap, text: '14 jours en moyenne (vs 3 mois marché)', color: '#3B82F6' },
                    { icon: Users, text: 'Interlocuteur dédié — zéro ticket anonyme', color: '#A78BFA' },
                  ].map(({ icon: Icon, text, color }, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <Icon size={13} style={{ color }} />
                      <span className="text-xs text-happi-muted">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ── Plans / Maintenance ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker relative overflow-hidden">
        <AnimatedMesh variant="purple" />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              {t('maintenanceTitle')}
            </h2>
            <p className="text-happi-muted text-sm">{t('maintenanceSubtitle')}</p>
          </FadeInUp>
          <BillingToggle fr={fr} />
        </div>
      </section>

      {/* ── Why cheaper (3 levers) ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-5xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
              Notre modèle économique
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Pourquoi sommes-nous <span className="gradient-text">50 à 70% moins chers</span> ?
            </h2>
            <p className="text-happi-muted text-sm mt-3 max-w-xl mx-auto">
              Pas de magie. Trois choix structurels radicaux qui nous permettent de répercuter ces économies sur nos tarifs.
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {cheaperLevers.map((lever, i) => {
              const Icon = lever.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.1 }}
                  className="rounded-2xl p-6 border"
                  style={{ background: `${lever.color}08`, borderColor: `${lever.color}25` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${lever.color}15` }}
                  >
                    <Icon size={20} style={{ color: lever.color }} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-white font-bold text-sm">{lever.title}</h4>
                  </div>
                  <span
                    className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full border mb-3"
                    style={{ background: `${lever.color}12`, color: lever.color, borderColor: `${lever.color}30` }}
                  >
                    {lever.saving}
                  </span>
                  <p className="text-happi-muted text-xs leading-relaxed">{lever.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Comparison row */}
          <FadeInUp>
            <div className="rounded-2xl border border-happi-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-happi-darker">
                    <th className="text-left py-3 px-5 text-happi-muted font-medium text-xs">Poste de coût</th>
                    <th className="text-center py-3 px-5 text-happi-muted font-medium text-xs">Agence traditionnelle</th>
                    <th className="text-center py-3 px-5">
                      <span className="text-happi-green font-bold text-xs flex items-center justify-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-happi-green" />
                        H&apos;appi
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Infrastructure cloud', 'AWS/GCP premium', 'Scaleway/Hetzner −50%'],
                    ['Licences logicielles', '15–30k€/an', '0 € (open-source)'],
                    ['Overhead équipe', 'Grand bureau, managers', 'Lean, remote-first'],
                    ['Délai de livraison', '2–6 mois', '14 jours en moyenne'],
                    ['Propriété du code', 'Licence revendeur', '100% à vous'],
                  ].map(([item, before, after], i) => (
                    <tr key={i} className="border-t border-happi-border hover:bg-happi-surface/20 transition-colors">
                      <td className="py-3 px-5 text-white text-xs font-medium">{item}</td>
                      <td className="py-3 px-5 text-center text-happi-muted text-xs">{before}</td>
                      <td className="py-3 px-5 text-center">
                        <span className="text-happi-green font-semibold text-xs">{after}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ── Transparency ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
        <div className="max-w-6xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              {t('transparencyTitle')}
            </h2>
            <p className="text-happi-muted mb-1 text-sm">{t('transparencySubtitle')}</p>
            <p className="text-happi-muted text-sm">{t('transparencyIntro')}</p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="bg-happi-surface rounded-2xl p-6 border border-happi-border hover:border-happi-blue/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-happi-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Info className="text-happi-blue" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm text-white">{t(`transparencyFactors.${i}.title`)}</h3>
                    <p className="text-happi-muted text-xs leading-relaxed">
                      {t(`transparencyFactors.${i}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <FadeInUp className="mt-8 text-center">
            <p className="text-happi-muted text-sm italic">{t('transparencyConclusion')}</p>
          </FadeInUp>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <div className="bg-gradient-to-br from-happi-blue to-happi-green rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 right-6 w-24 h-24 border-2 border-white rounded-full" />
                <div className="absolute bottom-6 left-6 w-36 h-36 border-2 border-white rounded-full" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                  {t('finalCtaTitle')}
                </h2>
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                  {t('finalCtaSubtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openContactModal}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-happi-blue rounded-xl hover:shadow-xl transition-all font-semibold"
                  >
                    <Mail size={18} />
                    {t('finalCtaPrimary')}
                  </button>
                  <Link
                    href="/faq"
                    className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white rounded-xl hover:bg-white/10 transition-all font-semibold"
                  >
                    {t('finalCtaSecondary')}
                  </Link>
                </div>
                <p className="text-white/60 text-xs mt-6">{t('finalCtaNote')}</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
