import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import BotGrid from '@/components/atelier/BotGrid';

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
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-6 border border-happi-blue/20">
              {fr ? 'Atelier Studio' : 'Studio Workshop'}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              {fr ? (
                <>Des bots <span className="gradient-text">pionniers</span>, secteur par secteur</>
              ) : (
                <>Pioneer bots, <span className="gradient-text">sector by sector</span></>
              )}
            </h1>
            <p className="text-lg text-happi-muted max-w-2xl mx-auto leading-relaxed">
              {fr
                ? "Chaque bot est le premier de son type en France. Conçus sur mesure, formés sur votre métier, et déployés en production. Testez-les directement ici."
                : "Each bot is the first of its kind in France. Built from scratch, trained on your industry, deployed to production. Try them directly here."}
            </p>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-14">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '5',               label: fr ? 'Bots pionniers'   : 'Pioneer bots'     },
                { value: String(TOTAL_STEPS), label: fr ? 'Étapes chatbot'  : 'Chatbot steps'    },
                { value: '5',               label: fr ? 'Secteurs inédits' : 'Untapped sectors'  },
                { value: '100%',            label: fr ? 'Sur mesure'       : 'Bespoke'           },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-happi-surface border border-happi-border rounded-xl p-5 text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-happi-muted text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bot grid ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-6xl mx-auto">
            <BotGrid fr={fr} />
            <p className="text-center text-happi-muted text-xs mt-10 max-w-xl mx-auto leading-relaxed">
              {fr
                ? "Chaque bot est entièrement adaptable à votre secteur, votre marque et vos flux métier. Déploiement en production en 3 à 4 semaines."
                : "Every bot is fully adaptable to your sector, your brand, and your business processes. Production deployment in 3 to 4 weeks."}
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
