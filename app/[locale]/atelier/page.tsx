import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import BotGrid from '@/components/atelier/BotGrid';
import BotConfigurator from '@/components/atelier/BotConfigurator';
import LogoWall from '@/components/ui/LogoWall';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import AtelierStats from '@/components/atelier/AtelierStats';
import { FadeInUp } from '@/components/ui/Animate';

const TOTAL_STEPS = 134; // 14+28+26+30+36

export default async function AtelierPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
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
            <FadeInUp>
              <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-6 border border-happi-blue/20">
                {fr ? 'Atelier Studio' : 'Studio Workshop'}
              </span>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                {fr ? (
                  <>Des bots <span className="gradient-text">pionniers</span>, secteur par secteur</>
                ) : (
                  <>Pioneer bots, <span className="gradient-text">sector by sector</span></>
                )}
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg text-happi-muted max-w-2xl mx-auto leading-relaxed">
                {fr
                  ? "Chaque bot est le premier de son type en France. Conçus sur mesure, formés sur votre métier, et déployés en production. Testez-les directement ici."
                  : "Each bot is the first of its kind in France. Built from scratch, trained on your industry, deployed to production. Try them directly here."}
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-14">
          <div className="max-w-4xl mx-auto">
            <AtelierStats stats={[
              { end: 5,            suffix: '',  label: fr ? 'Bots pionniers'   : 'Pioneer bots'    },
              { end: TOTAL_STEPS,  suffix: '',  label: fr ? 'Étapes chatbot'   : 'Chatbot steps'   },
              { end: 5,            suffix: '',  label: fr ? 'Secteurs inédits' : 'Untapped sectors' },
              { end: 100,          suffix: '%', label: fr ? 'Sur mesure'       : 'Bespoke'          },
            ]} />
          </div>
        </section>

        {/* ── Logo Wall ── */}
        <LogoWall fr={fr} />

        {/* ── Bot grid ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24 relative overflow-hidden">
          <AnimatedMesh variant="blue" />
          <div className="max-w-6xl mx-auto relative z-10">
            <BotGrid fr={fr} />
            <p className="text-center text-happi-muted text-xs mt-10 max-w-xl mx-auto leading-relaxed">
              {fr
                ? "Chaque bot est entièrement adaptable à votre secteur, votre marque et vos flux métier. Déploiement en production en 3 à 4 semaines."
                : "Every bot is fully adaptable to your sector, your brand, and your business processes. Production deployment in 3 to 4 weeks."}
            </p>
          </div>
        </section>


        <BotConfigurator fr={fr} />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
