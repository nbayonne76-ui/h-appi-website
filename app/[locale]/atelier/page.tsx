import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

const bots = [
  {
    nameFr: 'Bot Portfolio Interactif',
    nameEn: 'Interactive Portfolio Bot',
    sectorFr: 'Architecture culturelle',
    sectorEn: 'Cultural architecture',
    pioneerFr: '1er bot portfolio archi de France',
    pioneerEn: 'First archi portfolio bot in France',
    icon: '🏛️',
    color: '#D4A853',
    capsFr: [
      'Guide portfolio interactif par type de projet',
      "Qualification maîtres d'ouvrage (MOA)",
      'Exploration réalisations culturelles & urbaines',
      'Prise de contact associés directement',
    ],
    capsEn: [
      'Interactive portfolio guide by project type',
      'Project owner (MOA) qualification',
      'Explore cultural & urban projects',
      'Direct contact with founding partners',
    ],
    steps: 14,
    url: 'https://happi-kingkong.vercel.app',
  },
  {
    nameFr: 'Assistant Notarial',
    nameEn: 'Notarial Assistant',
    sectorFr: 'Notariat',
    sectorEn: 'Notarial law',
    pioneerFr: '1er bot notarial de France',
    pioneerEn: 'First notarial bot in France',
    icon: '⚖️',
    color: '#D4AF37',
    capsFr: [
      "FAQ notariale + qualification de l'acte",
      'Estimateur de frais de notaire',
      "Orientation vers l'étude par région",
      'Clients internationaux multilingues',
    ],
    capsEn: [
      'Notarial FAQ + deed qualification',
      'Notary fee estimator',
      'Routing to the right office by region',
      'Multilingual international clients',
    ],
    steps: 28,
    url: 'https://happi-groupe-monassier.vercel.app',
  },
  {
    nameFr: 'Bot Recouvrement de Créances',
    nameEn: 'Debt Recovery Bot',
    sectorFr: 'Recouvrement de créances B2B',
    sectorEn: 'B2B debt collection',
    pioneerFr: '1er bot recouvrement de France',
    pioneerEn: 'First debt recovery bot in France',
    icon: '💼',
    color: '#0E7C43',
    kpis: '82% taux · 1,2 Md€ récupérés · 8,5/10',
    capsFr: [
      'Suivi dossier en temps réel (portail GIRCNET)',
      'Dépôt de créance guidé (B2B / particulier / international)',
      'Renseignement solvabilité on demand',
      'FAQ processus, délais & honoraires',
    ],
    capsEn: [
      'Real-time case tracking (GIRCNET portal)',
      'Guided debt filing (B2B / individual / international)',
      'On-demand solvency check',
      'FAQ: process, timelines & fees',
    ],
    steps: 26,
    url: 'https://happi-cabinet-arc.vercel.app',
  },
  {
    nameFr: 'Assistant Expert-Comptable',
    nameEn: 'Accounting Assistant',
    sectorFr: 'Expertise comptable',
    sectorEn: 'Accounting & tax advisory',
    pioneerFr: '1er bot comptable de France',
    pioneerEn: 'First accounting bot in France',
    icon: '📊',
    color: '#C5A028',
    capsFr: [
      'Collecte de documents mensuelle par profil client',
      'Calendrier fiscal personnalisé (IS, AE, BNC, SCI)',
      'Onboarding & qualification nouveau client',
      'Niche influenceurs & créateurs de contenu',
    ],
    capsEn: [
      'Monthly document collection by client profile',
      'Personalised tax calendar (corp, sole trader, etc.)',
      'New client onboarding & qualification',
      'Creator economy & influencer niche',
    ],
    steps: 30,
    url: 'https://happi-audit-expert.vercel.app',
  },
  {
    nameFr: 'Bot Pre-Sales Intelligence',
    nameEn: 'Pre-Sales Intelligence Bot',
    sectorFr: 'Identity SaaS · RegTech MEA',
    sectorEn: 'Identity SaaS · RegTech MEA',
    pioneerFr: '1er bot pre-sales Identity SaaS',
    pioneerEn: 'First pre-sales Identity SaaS bot',
    icon: '🔐',
    color: '#4F46E5',
    capsFr: [
      'Qualification prospect enterprise en 2 min',
      'Navigateur compliance 22 pays (SAMA, CBUAE, CBN…)',
      'Calculateur ROI par volume de vérification',
      'Réponses techniques pre-sales 24/7',
    ],
    capsEn: [
      'Enterprise prospect qualification in 2 min',
      '22-country compliance navigator (SAMA, CBUAE, CBN…)',
      'ROI calculator by verification volume',
      'Technical pre-sales answers 24/7',
    ],
    steps: 36,
    url: 'https://uqudo-presentation.vercel.app',
  },
];

export default async function AtelierPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const fr = locale === 'fr';

  const totalSteps = bots.reduce((s, b) => s + b.steps, 0);

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
                ? "Chaque bot est le premier de son type en France. Conçus sur mesure, formés sur votre métier, et déployés en production. Aucun modèle générique. Chaque configuration est unique."
                : "Each bot is the first of its kind in France. Built from scratch, trained on your industry, deployed to production. No generic templates — every configuration is unique."}
            </p>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-14">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '5', label: fr ? 'Bots pionniers' : 'Pioneer bots' },
                { value: String(totalSteps), label: fr ? 'Étapes chatbot' : 'Chatbot steps' },
                { value: '5', label: fr ? 'Secteurs inédits' : 'Untapped sectors' },
                { value: '100%', label: fr ? 'Sur mesure' : 'Bespoke' },
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bots.map((bot) => {
                const caps = fr ? bot.capsFr : bot.capsEn;
                const sector = fr ? bot.sectorFr : bot.sectorEn;
                const pioneer = fr ? bot.pioneerFr : bot.pioneerEn;

                const name = fr ? bot.nameFr : bot.nameEn;

                return (
                  <div
                    key={bot.nameFr}
                    className="bg-happi-surface border border-happi-border rounded-2xl overflow-hidden flex flex-col hover:border-white/20 transition-colors group"
                    style={{ borderTopWidth: '4px', borderTopColor: bot.color }}
                  >
                    <div className="p-6 flex flex-col gap-4 flex-1">

                      {/* Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-2xl mb-2">{bot.icon}</div>
                          <h2 className="text-base font-bold text-white leading-tight">
                            {name}
                          </h2>
                          <div className="text-happi-muted text-xs mt-0.5">{sector}</div>
                        </div>
                        <span
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full border flex-shrink-0 text-right leading-tight"
                          style={{
                            color: bot.color,
                            background: `${bot.color}18`,
                            borderColor: `${bot.color}40`,
                          }}
                        >
                          {pioneer}
                        </span>
                      </div>

                      {/* KPIs if any */}
                      {bot.kpis && (
                        <div
                          className="text-[10px] font-semibold px-3 py-1.5 rounded-lg border"
                          style={{
                            color: bot.color,
                            background: `${bot.color}10`,
                            borderColor: `${bot.color}30`,
                          }}
                        >
                          {bot.kpis}
                        </div>
                      )}

                      {/* Capabilities */}
                      <ul className="flex flex-col gap-2 flex-1">
                        {caps.map((cap) => (
                          <li key={cap} className="flex items-start gap-2 text-xs text-happi-muted leading-relaxed">
                            <span className="mt-0.5 flex-shrink-0" style={{ color: bot.color }}>›</span>
                            {cap}
                          </li>
                        ))}
                      </ul>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-happi-border mt-auto">
                        <span className="text-[10px] text-happi-muted font-medium">
                          {bot.steps} {fr ? 'étapes' : 'steps'}
                        </span>
                        <a
                          href={bot.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold transition-colors group-hover:opacity-90"
                          style={{ color: bot.color }}
                        >
                          {fr ? 'Voir la démo' : 'View demo'}
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note */}
            <p className="text-center text-happi-muted text-xs mt-10 max-w-xl mx-auto leading-relaxed">
              {fr
                ? "Chaque présentation est interactive et comprend un chatbot fonctionnel. Les bots peuvent être adaptés à votre secteur et déployés en production en 3 à 4 semaines."
                : "Each presentation is interactive and includes a working chatbot. Bots can be adapted to your sector and deployed to production in 3 to 4 weeks."}
            </p>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
