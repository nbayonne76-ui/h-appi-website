import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import { FadeInUp } from '@/components/ui/Animate';
import DesignStudio from '@/components/atelier/DesignStudio';
import { Palette, LayoutGrid, Type, Boxes } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('designStudio.title'),
    description: t('designStudio.description'),
  };
}

const PILLARS = [
  { icon: Palette, fr: 'Agent Couleur', en: 'Color Agent', descFr: 'Palettes par secteur + psychologie des couleurs', descEn: 'Industry palettes + color psychology' },
  { icon: LayoutGrid, fr: 'Agent Layout', en: 'Layout Agent', descFr: 'Structures responsive par type de page', descEn: 'Responsive structures by page type' },
  { icon: Type, fr: 'Agent Typographie', en: 'Typography Agent', descFr: 'Échelles modulaires + pairings de polices', descEn: 'Modular scales + font pairings' },
  { icon: Boxes, fr: 'Agent Composants', en: 'Component Agent', descFr: 'Boutons, cartes, nav — specs prêtes à coder', descEn: 'Buttons, cards, nav — ready-to-code specs' },
];

export default async function DesignStudioPage({
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
        <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <AnimatedMesh variant="hero" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeInUp>
              <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-6 border border-happi-blue/20">
                {fr ? 'Atelier Studio · Moteur multi-agents' : 'Atelier Studio · Multi-agent engine'}
              </span>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                {fr ? (
                  <>4 agents IA, <span className="gradient-text">un design en une seconde</span></>
                ) : (
                  <>4 AI agents, <span className="gradient-text">one design in one second</span></>
                )}
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg text-happi-muted max-w-2xl mx-auto leading-relaxed">
                {fr
                  ? "Ce n'est pas une démo scriptée. C'est le vrai moteur d'orchestration multi-agents qu'on construit pour nos clients : 4 agents spécialisés tournent en parallèle, produisent 9 designs complets, et un algorithme de consensus les classe. Renseignez votre brief et regardez-les travailler."
                  : "This isn't a scripted demo. It's the real multi-agent orchestration engine we build for clients: 4 specialized agents run in parallel, produce 9 complete designs, and a consensus algorithm ranks them. Fill in your brief and watch them work."}
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* ── 4 agents pillars ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-14">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeInUp key={p.fr} delay={i * 0.06}>
                  <div className="glass-card rounded-xl p-4 border border-happi-border h-full">
                    <div className="w-9 h-9 rounded-lg bg-happi-blue/10 flex items-center justify-center text-happi-blue mb-3">
                      <Icon size={16} />
                    </div>
                    <div className="text-xs font-bold text-white mb-1">{fr ? p.fr : p.en}</div>
                    <div className="text-[11px] text-happi-muted leading-relaxed">{fr ? p.descFr : p.descEn}</div>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </section>

        {/* ── Interactive studio ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24 relative overflow-hidden">
          <AnimatedMesh variant="blue" />
          <div className="max-w-5xl mx-auto relative z-10">
            <DesignStudio fr={fr} />
            <p className="text-center text-happi-muted text-xs mt-10 max-w-xl mx-auto leading-relaxed">
              {fr
                ? "Cette même architecture — agents spécialisés en parallèle + scoring de consensus — s'adapte à n'importe quel domaine métier : vente, support, conformité, RH. Le design n'est qu'un exemple."
                : "This same architecture — specialized agents in parallel + consensus scoring — adapts to any business domain: sales, support, compliance, HR. Design is just one example."}
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
