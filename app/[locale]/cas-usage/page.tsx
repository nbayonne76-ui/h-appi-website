import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import CasUsageAccordion from '@/components/cas-usage/CasUsageAccordion';
import CasUsageTimeline from '@/components/cas-usage/CasUsageTimeline';
import CasUsageResults from '@/components/cas-usage/CasUsageResults';
import { BotDemo } from '@/components/cas-usage/BotDemo';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import { FadeInUp, ScaleIn } from '@/components/ui/Animate';
import { Building2, MapPin, Calendar, Sofa } from 'lucide-react';

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

        {/* ── Hero ── */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <AnimatedMesh variant="hero" />

          <div className="max-w-4xl mx-auto text-center relative z-10">

            {/* Top badge */}
            <FadeInUp>
              <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-6 border border-happi-blue/20">
                {fr ? 'Cas d\'usage concret' : 'Real use case'}
              </span>
            </FadeInUp>

            <FadeInUp delay={0.08}>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                {fr ? (
                  <>Une plateforme construite <span className="gradient-text">à votre image</span></>
                ) : (
                  <>A platform built <span className="gradient-text">in your image</span></>
                )}
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.16}>
              <p className="text-lg text-happi-muted max-w-2xl mx-auto leading-relaxed mb-8">
                {fr
                  ? 'Pas un outil générique que vous adaptez. Un outil que nous construisons autour de vos processus, votre équipe, votre marque. Voici comment ça fonctionne concrètement dans le secteur du mobilier.'
                  : 'Not a generic tool you adapt. A tool we build around your processes, your team, your brand. Here\'s how it works concretely in the furniture industry.'}
              </p>
            </FadeInUp>

            {/* ── Client credential badge ── */}
            <FadeInUp delay={0.26}>
              <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-3 rounded-2xl border border-happi-blue/20 bg-happi-surface/60 backdrop-blur-sm mb-2">

                {/* Company avatar */}
                <div className="w-9 h-9 rounded-xl bg-happi-blue/15 border border-happi-blue/30 flex items-center justify-center flex-shrink-0">
                  <Sofa size={18} className="text-happi-blue" />
                </div>

                {/* Divider */}
                <div className="h-8 w-px bg-happi-border hidden sm:block" />

                {/* Company name */}
                <div className="text-left">
                  <div className="text-white font-bold text-sm leading-tight">Mobilier de France</div>
                  <div className="text-happi-muted/60 text-[11px]">
                    {fr ? 'Enseigne nationale · Ameublement' : 'National chain · Furniture retail'}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-8 w-px bg-happi-border hidden sm:block" />

                {/* Meta pills */}
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  <span className="flex items-center gap-1 text-[11px] text-happi-muted px-2.5 py-1 rounded-lg bg-happi-dark border border-happi-border">
                    <MapPin size={10} className="text-happi-muted/60" />
                    France
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

                {/* Divider */}
                <div className="h-8 w-px bg-happi-border hidden sm:block" />

                {/* Live badge */}
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-happi-green">
                  <span className="w-1.5 h-1.5 rounded-full bg-happi-green animate-pulse" />
                  {fr ? 'En production' : 'Live in production'}
                </div>
              </div>
            </FadeInUp>

          </div>
        </section>

        {/* ── Deployment Timeline ── */}
        <CasUsageTimeline fr={fr} />

        {/* ── Philosophy banner ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-5xl mx-auto">
            <ScaleIn>
              <div className="relative rounded-2xl p-px overflow-hidden"
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
                        ? 'Chaque bot, chaque application est conçu autour de vous. Votre branding, vos flux métier, vos équipes. Nous ne reproduisons pas un modèle standard. Nous apprenons votre réalité et construisons en conséquence. Ce cas d\'usage Mobilier de France illustre exactement cette approche : un bot après-vente sur mesure, une app de traçabilité à votre image, interconnectés dès le premier jour.'
                        : 'Every bot, every application is designed around you. Your branding, your business flows, your teams. We don\'t replicate a standard model. We learn your reality and build accordingly. This Mobilier de France case illustrates exactly that: a custom after-sales bot, a traceability app in your image, interconnected from day one.'}
                    </p>
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </section>

        {/* ── Bot Demo Teaser ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-2xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-6">
                <span className="inline-block bg-happi-blue/10 text-happi-blue border border-happi-blue/20 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4">
                  {fr ? '⚡ Démo interactive' : '⚡ Interactive demo'}
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
                  {fr ? 'Pas envie de tout lire ?' : "Don't feel like reading everything?"}
                </h2>
                <p className="text-happi-muted text-sm">
                  {fr
                    ? 'Testez le bot SAV en 2 minutes, aucune inscription requise'
                    : 'Try the after-sales bot in 2 minutes, no sign-up needed'}
                </p>
              </div>
            </FadeInUp>
            <BotDemo />
          </div>
        </section>

        {/* ── Accordion + Stats ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24 relative overflow-hidden">
          <AnimatedMesh variant="blue" />
          <div className="max-w-5xl mx-auto relative z-10">
            <FadeInUp>
              <div className="text-center mb-10">
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
              </div>
            </FadeInUp>
            <CasUsageAccordion />
          </div>
        </section>

        {/* ── Results closing section ── */}
        <CasUsageResults fr={fr} />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
