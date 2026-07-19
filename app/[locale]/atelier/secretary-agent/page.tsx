import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import { FadeInUp } from '@/components/ui/Animate';
import SecretaryAgent from '@/components/atelier/SecretaryAgent';
import { Phone, Brain, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Agent Secrétaire IA — Live Demo | HappiBot',
  description:
    'Talk to our AI secretary agent live — real-time intent detection, appointment booking, and an auto-generated call analysis card, exactly like the real product.',
};

const PILLARS = [
  { icon: Phone, fr: 'Compréhension en direct', en: 'Live understanding', descFr: 'Détection d\'intention à chaque message, en FR ou EN', descEn: 'Intent detection on every message, FR or EN' },
  { icon: Brain, fr: 'Mémoire de conversation', en: 'Conversation memory', descFr: 'Le rendez-vous se réserve en plusieurs tours, avec contexte', descEn: 'Appointments are booked over several turns, with context' },
  { icon: FileCheck, fr: 'Analyse post-appel', en: 'Post-call analysis', descFr: 'Sentiment, intention et issue générés automatiquement', descEn: 'Sentiment, intent and outcome auto-generated' },
];

export default async function SecretaryAgentPage({
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
                {fr ? 'Atelier Studio · Agent secrétaire' : 'Atelier Studio · Secretary agent'}
              </span>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                {fr ? (
                  <>Appelez notre <span className="gradient-text">secrétaire IA</span>, en direct</>
                ) : (
                  <>Call our <span className="gradient-text">AI secretary</span>, live</>
                )}
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg text-happi-muted max-w-2xl mx-auto leading-relaxed">
                {fr
                  ? "Tapez comme si vous appeliez une entreprise. L'agent détecte votre intention en temps réel, gère la prise de rendez-vous sur plusieurs échanges, et génère la fiche d'analyse d'appel exactement comme le vrai produit — sans script préécrit."
                  : "Type as if you were calling a business. The agent detects your intent in real time, handles multi-turn appointment booking, and generates the call analysis card exactly like the real product — no pre-written script."}
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* ── Pillars ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-14">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeInUp key={p.fr} delay={i * 0.08}>
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

        {/* ── Interactive agent ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24 relative overflow-hidden">
          <AnimatedMesh variant="blue" />
          <div className="max-w-2xl mx-auto relative z-10">
            <SecretaryAgent fr={fr} />
            <p className="text-center text-happi-muted text-xs mt-10 max-w-xl mx-auto leading-relaxed">
              {fr
                ? "Cet agent tourne 100% dans votre navigateur pour cette démo. En production, il répond à de vrais appels téléphoniques via Vapi.ai, avec voix ElevenLabs et compréhension Claude."
                : "For this demo, the agent runs 100% in your browser. In production, it answers real phone calls via Vapi.ai, with ElevenLabs voice and Claude understanding."}
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
