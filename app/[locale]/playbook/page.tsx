import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import SectorNavigator from '@/components/playbook/SectorNavigator';
import DeploymentTimeline from '@/components/playbook/DeploymentTimeline';
import PlatformAccordion from '@/components/playbook/PlatformAccordion';
import RoiCalculator from '@/components/playbook/RoiCalculator';
import ProductStack from '@/components/playbook/ProductStack';
import SecurityDetail from '@/components/playbook/SecurityDetail';
import SecretaryDetail from '@/components/playbook/SecretaryDetail';
import BusinessModel from '@/components/playbook/BusinessModel';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import { FadeInUp, ScaleIn, Stagger, StaggerItem } from '@/components/ui/Animate';
import { Building2, MapPin, Calendar, Sofa, Users, Zap, Globe, ArrowLeft } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('playbook.title'),
    description: t('playbook.description'),
  };
}

export default async function PlaybookPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const fr = locale === 'fr';

  return (
    <>
      <Header />
      <main className="bg-happi-darker">

        {/* ── Hero ── */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <AnimatedMesh variant="hero" />
          <div className="max-w-5xl mx-auto relative z-10">

            <FadeInUp className="mb-8">
              <Link
                href="/cas-usage"
                className="inline-flex items-center gap-1.5 text-happi-muted hover:text-white text-sm transition-colors"
              >
                <ArrowLeft size={14} />
                {fr ? "Retour aux cas d'usage" : 'Back to use cases'}
              </Link>
            </FadeInUp>

            <FadeInUp className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-6 border border-happi-blue/20">
                {fr ? 'Playbook complet' : 'Full playbook'}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                {fr ? (
                  <>Tous les chiffres,<br />tous les <span className="gradient-text">secteurs</span></>
                ) : (
                  <>Every number,<br />every <span className="gradient-text">sector</span></>
                )}
              </h1>
              <p className="text-lg text-happi-muted max-w-2xl mx-auto leading-relaxed">
                {fr
                  ? 'Le détail derrière les cartes : secteur par secteur, le déploiement réel, comment la plateforme fonctionne, et votre ROI estimé.'
                  : 'The detail behind the cards: sector by sector, the real deployment, how the platform works, and your estimated ROI.'}
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

            {/* Quick jump */}
            <FadeInUp delay={0.18} className="flex flex-wrap justify-center gap-2 mt-8">
              {[
                { href: '#secteurs', label: fr ? 'Secteurs' : 'Sectors' },
                { href: '#stack', label: fr ? 'Stack IA' : 'AI stack' },
                { href: '#securite', label: fr ? 'Sécurité' : 'Security' },
                { href: '#secretaire', label: fr ? 'Secrétaire IA' : 'AI Secretary' },
                { href: '#modele', label: fr ? 'Modèle économique' : 'Business model' },
                { href: '#roi', label: 'ROI' },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs px-3 py-1.5 rounded-full border border-happi-border text-happi-muted hover:text-white hover:border-white/20 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </FadeInUp>

          </div>
        </section>

        {/* ── Secteur par secteur ── */}
        <div id="secteurs">
          <SectorNavigator fr={fr} />
        </div>

        {/* ── Cas phare : Mobilier de France ── */}
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
        <DeploymentTimeline fr={fr} />

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
                        ? 'Pas de modèle standard. On apprend votre réalité et on construit en conséquence — comme ici, un bot SAV et une app de traçabilité interconnectés dès le premier jour.'
                        : 'No standard model. We learn your reality and build accordingly — like here, an after-sales bot and a traceability app interconnected from day one.'}
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
            <PlatformAccordion />
          </div>
        </section>

        {/* ── Stack IA ── */}
        <div id="stack">
          <section className="pt-4 pb-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                {fr ? 'Le produit, en détail' : 'The product, in detail'}
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {fr ? (
                  <>La <span className="gradient-text">stack IA</span> H&apos;appi</>
                ) : (
                  <>The H&apos;appi <span className="gradient-text">AI stack</span></>
                )}
              </h2>
            </div>
          </section>
          <ProductStack locale={locale} />
        </div>

        {/* ── Sécurité & conformité ── */}
        <div id="securite">
          <section className="pt-4 pb-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                {fr ? 'Hébergement, RGPD, certifications' : 'Hosting, GDPR, certifications'}
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {fr ? (
                  <>Sécurité & <span className="gradient-text">conformité</span></>
                ) : (
                  <>Security & <span className="gradient-text">compliance</span></>
                )}
              </h2>
            </div>
          </section>
          <SecurityDetail locale={locale} />
        </div>

        {/* ── Secrétaire IA, le détail ── */}
        <div id="secretaire">
          <section className="pt-4 pb-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                {fr ? 'Zoom sur un secteur' : 'Sector zoom-in'}
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {fr ? (
                  <>Secrétaire IA, <span className="gradient-text">le détail</span></>
                ) : (
                  <>AI Secretary, <span className="gradient-text">in detail</span></>
                )}
              </h2>
            </div>
          </section>
          <SecretaryDetail fr={fr} />
        </div>

        {/* ── Modèle économique ── */}
        <div id="modele">
          <section className="pt-4 pb-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                {fr ? 'Pourquoi c\'est moins cher' : 'Why it costs less'}
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {fr ? (
                  <>Le <span className="gradient-text">modèle économique</span></>
                ) : (
                  <>The <span className="gradient-text">business model</span></>
                )}
              </h2>
            </div>
          </section>
          <BusinessModel fr={fr} />
        </div>

        {/* ROI Calculator */}
        <div id="roi">
          <RoiCalculator fr={fr} />
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
