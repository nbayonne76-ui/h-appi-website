import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import CasUsageAccordion from '@/components/cas-usage/CasUsageAccordion';

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
                ? 'Pas un outil générique que vous adaptez — un outil que nous construisons autour de vos processus, votre équipe, votre marque. Voici comment ça fonctionne concrètement dans le secteur du mobilier.'
                : 'Not a generic tool you adapt — a tool we build around your processes, your team, your brand. Here\'s how it works concretely in the furniture industry.'}
            </p>
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
