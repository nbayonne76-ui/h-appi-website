import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import FlipCards from '@/components/cas-usage/FlipCards';
import { BotDemo } from '@/components/cas-usage/BotDemo';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import { FadeInUp } from '@/components/ui/Animate';

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
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <AnimatedMesh variant="hero" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <FadeInUp>
              <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-6 border border-happi-blue/20">
                {fr ? "H'appi en action" : 'H\'appi in action'}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
                {fr ? (
                  <>Un problème. <span className="gradient-text">Un bot.</span> Un résultat.</>
                ) : (
                  <>One problem. <span className="gradient-text">One bot.</span> One result.</>
                )}
              </h1>
              <p className="text-lg text-happi-muted">
                {fr
                  ? 'Chez Mobilier de France, le bot a fait tomber les appels SAV de 65%. En production, aujourd\'hui.'
                  : 'At Mobilier de France, the bot cut after-sales calls by 65%. Live, today.'}
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* ── Cartes avant/après ── */}
        <FlipCards fr={fr} />

        {/* ── Démo live ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-3xl mx-auto">
            <FadeInUp className="text-center mb-10">
              <span className="inline-block bg-happi-blue/10 text-happi-blue border border-happi-blue/20 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4">
                {fr ? '⚡ Essaie-le' : '⚡ Try it'}
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
                {fr ? 'Le vrai bot, en vrai' : 'The real bot, for real'}
              </h2>
              <p className="text-happi-muted text-sm">
                {fr
                  ? 'Celui de Mobilier de France. Aucune inscription, tu peux lui parler maintenant.'
                  : 'The one running at Mobilier de France. No sign-up, talk to it now.'}
              </p>
            </FadeInUp>
            <BotDemo fr={fr} />
          </div>
        </section>

        {/* ── Lien playbook ── */}
        <div className="text-center pb-16 px-4">
          <Link
            href="/playbook"
            className="inline-flex items-center gap-1.5 text-happi-muted hover:text-white text-sm transition-colors"
          >
            {fr ? 'Tu veux tous les chiffres et les détails ?' : 'Want every number and detail?'}
            <span className="text-happi-blue font-medium inline-flex items-center gap-1">
              {fr ? 'Le playbook complet' : 'The full playbook'} <ArrowRight size={13} />
            </span>
          </Link>
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
