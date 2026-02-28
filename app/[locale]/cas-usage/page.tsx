import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import CasUsageAccordion from '@/components/cas-usage/CasUsageAccordion';
import { BotDemo } from '@/components/cas-usage/BotDemo';

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
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-6 border border-happi-blue/20">
              {fr ? 'Cas d\'usage concret' : 'Real use case'}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              {fr ? (
                <>Une plateforme construite <span className="gradient-text">à votre image</span></>
              ) : (
                <>A platform built <span className="gradient-text">in your image</span></>
              )}
            </h1>
            <p className="text-lg text-happi-muted max-w-2xl mx-auto leading-relaxed">
              {fr
                ? 'Pas un outil générique que vous adaptez. Un outil que nous construisons autour de vos processus, votre équipe, votre marque. Voici comment ça fonctionne concrètement dans le secteur du mobilier.'
                : 'Not a generic tool you adapt. A tool we build around your processes, your team, your brand. Here\'s how it works concretely in the furniture industry.'}
            </p>
          </div>
        </section>

        {/* ── Philosophy banner ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-happi-blue/10 to-happi-green/10 border border-happi-blue/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
              <div className="w-10 h-10 bg-happi-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-happi-blue/20">
                <span className="text-happi-blue text-lg">✦</span>
              </div>
              <div>
                <h2 className="text-base font-bold text-white mb-1.5">
                  {fr ? 'Notre philosophie' : 'Our philosophy'}
                </h2>
                <p className="text-happi-muted text-sm leading-relaxed">
                  {fr
                    ? 'Chaque bot, chaque application est conçu autour de vous. Votre branding, vos flux métier, vos équipes. Nous ne reproduisons pas un modèle standard. Nous apprenons votre réalité et construisons en conséquence. Ce cas d\'usage mobilier illustre exactement cette approche : un bot SAV sur mesure, une app de traçabilité à votre image, interconnectés dès le premier jour.'
                    : 'Every bot, every application is designed around you. Your branding, your business flows, your teams. We don\'t replicate a standard model. We learn your reality and build accordingly. This furniture use case illustrates exactly that: a custom SAV bot, a traceability app in your image, interconnected from day one.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bot Demo Teaser ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <span className="inline-block bg-happi-blue/10 text-happi-blue border border-happi-blue/20 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4">
                {fr ? '⚡ Démo interactive' : '⚡ Interactive demo'}
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
                {fr ? 'Pas envie de tout lire ?' : "Don't feel like reading everything?"}
              </h2>
              <p className="text-happi-muted text-sm">
                {fr
                  ? 'Testez le bot SAV en 2 minutes — aucune inscription requise'
                  : 'Try the SAV bot in 2 minutes — no sign-up needed'}
              </p>
            </div>
            <BotDemo />
          </div>
        </section>

        {/* ── Accordion + Stats ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-5xl mx-auto">
            <CasUsageAccordion />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
