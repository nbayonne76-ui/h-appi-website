import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import CasUsageAccordion from '@/components/cas-usage/CasUsageAccordion';
import CasUsageTimeline from '@/components/cas-usage/CasUsageTimeline';
import CasUsageResults from '@/components/cas-usage/CasUsageResults';
import SectorNavigator from '@/components/cas-usage/SectorNavigator';
import RoiCalculator from '@/components/cas-usage/RoiCalculator';
import { BotDemo } from '@/components/cas-usage/BotDemo';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import { FadeInUp, ScaleIn, Stagger, StaggerItem } from '@/components/ui/Animate';
import { Building2, MapPin, Calendar, Sofa, Users, Zap, Globe } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('useCases.title'),
    description: t('useCases.description'),
  };
}

export default async function CasUsagePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const fr = locale === 'fr';

  return (
    <>
      <Header />
      <main className="bg-happi-darker">

        {/* ── Section 1 — Hero ── */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <AnimatedMesh variant="hero" />
          <div className="max-w-5xl mx-auto relative z-10">

            <FadeInUp className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-6 border border-happi-blue/20">
                {fr ? 'H\'appi en action' : 'H\'appi in action'}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                {fr ? (
                  <>Des résultats <span className="gradient-text">mesurables</span>,<br />dans tous les secteurs</>
                ) : (
                  <>Measurable results,<br />across <span className="gradient-text">every industry</span></>
                )}
              </h1>
              <p className="text-lg text-happi-muted max-w-2xl mx-auto leading-relaxed">
                {fr
                  ? 'Pas de promesses génériques. Des cas réels, des chiffres vérifiables, des solutions construites autour de vos processus.'
                  : 'No generic promises. Real cases, verifiable figures, solutions built around your processes.'}
              </p>
            </FadeInUp>

            {/* Global stats bar */}
            <FadeInUp delay={0.12}>
              <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {[
                  { icon: Building2, value: '17+', label: fr ? 'Démos clients' : 'Client demos' },
                  { icon: Globe, value: '11', label: fr ? 'Secteurs couverts' : 'Sectors covered' },
                  { icon: Zap, value: '14j', label: fr ? 'Délai déploiement' : 'Deployment time' },
                  { icon: Users, value: '3', label: fr ? 'Solutions phares' : 'Flagship solutions' },
                ].map((stat, i) => (
                  <StaggerItem key={i}>
                    <div className="glass-card rounded-2xl p-4 text-center border border-happi-border">
                      <stat.icon size={18} className="text-happi-blue mx-auto mb-2" />
                      <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                      <div className="text-happi-muted text-xs mt-0.5">{stat.label}</div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </FadeInUp>

          </div>
        </section>

        {/* ── Section 2 — Navigateur secteurs ── */}
        <SectorNavigator fr={fr} />

        {/* ── Section 3 — Cas phare : Mobilier de France ── */}
        <section className="pt-8 pb-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <FadeInUp className="text-center mb-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                {fr ? 'Cas client documenté · Déploiement réel' : 'Documented client case · Real deployment'}
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3">
                {fr ? (
                  <>Deep dive : <span className="gradient-text">Mobilier de France</span></>
                ) : (
                  <>Deep dive: <span className="gradient-text">Mobilier de France</span></>
                )}
              </h2>

              {/* Client badge */}
              <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-3 rounded-2xl border border-happi-blue/20 bg-happi-surface/60 backdrop-blur-sm">
                <div className="w-9 h-9 rounded-xl bg-happi-blue/15 border border-happi-blue/30 flex items-center justify-center flex-shrink-0">
                  <Sofa size={18} className="text-happi-blue" />
                </div>
                <div className="h-8 w-px bg-happi-border hidden sm:block" />
                <div className="text-left">
                  <div className="text-white font-bold text-sm leading-tight">Mobilier de France</div>
                  <div className="text-happi-muted/60 text-[11px]">
                    {fr ? 'Enseigne nationale · Ameublement' : 'National chain · Furniture retail'}
                  </div>
                </div>
                <div className="h-8 w-px bg-happi-border hidden sm:block" />
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  <span className="flex items-center gap-1 text-[11px] text-happi-muted px-2.5 py-1 rounded-lg bg-happi-dark border border-happi-border">
                    <MapPin size={10} className="text-happi-muted/60" /> France
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-happi-muted px-2.5 py-1 rounded-lg bg-happi-dark border border-happi-border">
                    <Calendar size={10} className="text-happi-muted/60" />
                    {fr ? 'Déployé 2024' : 'Deployed 2024'}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-happi-muted px-2.5 py-1 rounded-lg bg-happi-dark border border-happi-border">
                    <Building2 size={10} className="text-happi-muted/60" />
                    {fr ? 'Bot SAV + App Traçabilité' : 'After-Sales Bot + Traceability App'}
                  </span>
                </div>
                <div className="h-8 w-px bg-happi-border hidden sm:block" />
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-happi-green">
                  <span className="w-1.5 h-1.5 rounded-full bg-happi-green animate-pulse" />
                  {fr ? 'En production' : 'Live in production'}
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Timeline */}
        <CasUsageTimeline fr={fr} />

        {/* Philosophy banner */}
        <section className="px-4 sm:px-6 lg:px-8 pb-10">
          <div className="max-w-5xl mx-auto">
            <ScaleIn>
              <div
                className="relative rounded-2xl p-px overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.4), rgba(16,185,129,0.2), rgba(59,130,246,0.1))' }}
              >
                <div className="bg-happi-darker rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                  <div className="w-10 h-10 bg-happi-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-happi-blue/20">
                    <span className="text-happi-blue text-lg">✦</span>
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white mb-1.5">
                      {fr ? 'Notre philosophie' : 'Our philosophy'}
                    </h2>
                    <p className="text-happi-muted text-sm leading-relaxed">
                      {fr
                        ? 'Chaque bot, chaque application est conçu autour de vous. Votre branding, vos flux métier, vos équipes. Nous ne reproduisons pas un modèle standard. Nous apprenons votre réalité et construisons en conséquence. Ce cas Mobilier de France illustre exactement cette approche : un bot après-vente sur mesure, une app de traçabilité à votre image, interconnectés dès le premier jour.'
                        : 'Every bot, every application is designed around you. Your branding, your business flows, your teams. We don\'t replicate a standard model. We learn your reality and build accordingly. This Mobilier de France case illustrates exactly that: a custom after-sales bot, a traceability app in your image, interconnected from day one.'}
                    </p>
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </section>

        {/* 3 couches accordion */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 relative overflow-hidden">
          <AnimatedMesh variant="blue" />
          <div className="max-w-5xl mx-auto relative z-10">
            <FadeInUp className="text-center mb-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                {fr ? 'Comment ça fonctionne' : 'How it works'}
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {fr ? (
                  <>Les <span className="gradient-text">3 couches</span> de la plateforme</>
                ) : (
                  <>The <span className="gradient-text">3 layers</span> of the platform</>
                )}
              </h2>
            </FadeInUp>
            <CasUsageAccordion />
          </div>
        </section>

        {/* Results */}
        <CasUsageResults fr={fr} />

        {/* ── Section 4 — ROI Calculator ── */}
        <RoiCalculator fr={fr} />

        {/* ── Section 5 — Bot Demo live ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-3xl mx-auto">
            <FadeInUp className="text-center mb-10">
              <span className="inline-block bg-happi-blue/10 text-happi-blue border border-happi-blue/20 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4">
                {fr ? '⚡ Démo live' : '⚡ Live demo'}
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
                {fr ? 'Testez le bot en conditions réelles' : 'Test the bot in real conditions'}
              </h2>
              <p className="text-happi-muted text-sm">
                {fr
                  ? 'C\'est le bot SAV déployé chez Mobilier de France. En production. Aucune inscription.'
                  : 'This is the after-sales bot deployed at Mobilier de France. In production. No sign-up.'}
              </p>
            </FadeInUp>
            <BotDemo fr={fr} />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
