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
import CrmDetail from '@/components/playbook/CrmDetail';
import AiCapabilities from '@/components/playbook/AiCapabilities';
import ChapterHeader from '@/components/playbook/ChapterHeader';
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

const CHAPTERS = (fr: boolean) => [
  { href: '#capacites', label: fr ? '01 · Ce qu\'on fait' : '01 · What we do' },
  { href: '#secteurs', label: fr ? '02 · Secteurs' : '02 · Sectors' },
  { href: '#preuve', label: fr ? '03 · Preuve client' : '03 · Client proof' },
  { href: '#fonctionnement', label: fr ? '04 · Comment ça marche' : '04 · How it works' },
  { href: '#stack', label: fr ? '05 · Le produit' : '05 · The product' },
  { href: '#securite', label: fr ? '06 · Sécurité' : '06 · Security' },
  { href: '#modele', label: fr ? '07 · Modèle économique' : '07 · Business model' },
  { href: '#secretaire', label: fr ? '08 · Secrétaire IA' : '08 · AI Secretary' },
  { href: '#crm', label: fr ? '09 · Happi CRM' : '09 · Happi CRM' },
  { href: '#roi', label: fr ? '10 · Calculateur ROI' : '10 · ROI calculator' },
];

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
                  <>Tout H&apos;appi,<br />en <span className="gradient-text">un seul endroit</span></>
                ) : (
                  <>All of H&apos;appi,<br />in <span className="gradient-text">one place</span></>
                )}
              </h1>
              <p className="text-lg text-happi-muted max-w-2xl mx-auto leading-relaxed">
                {fr
                  ? 'Ce qu\'on fait, qui on aide, la preuve que ça marche, comment c\'est construit, pourquoi c\'est moins cher, et le détail de chaque produit. De quoi présenter H\'appi à n\'importe qui, sans rien oublier.'
                  : 'What we do, who we help, the proof it works, how it\'s built, why it costs less, and every product in detail. Everything you need to present H\'appi to anyone, without missing a beat.'}
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

            {/* Table of contents */}
            <FadeInUp delay={0.18} className="flex flex-wrap justify-center gap-2 mt-8">
              {CHAPTERS(fr).map((l) => (
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

        {/* ── 01 · Ce qu'on fait ── */}
        <div id="capacites">
          <section className="pt-4 pb-4 px-4 sm:px-6 lg:px-8">
            <ChapterHeader
              number="01"
              eyebrow={fr ? "10 capacités IA" : '10 AI capabilities'}
              title={fr ? (
                <>Ce qu&apos;on <span className="gradient-text">fait</span></>
              ) : (
                <>What we <span className="gradient-text">do</span></>
              )}
            />
          </section>
          <AiCapabilities locale={locale} />
        </div>

        {/* ── 02 · Secteurs ── */}
        <div id="secteurs">
          <section className="pt-8 pb-4 px-4 sm:px-6 lg:px-8">
            <ChapterHeader
              number="02"
              eyebrow={fr ? '11 secteurs couverts' : '11 sectors covered'}
              title={fr ? (
                <>Qui on <span className="gradient-text">aide</span></>
              ) : (
                <>Who we <span className="gradient-text">help</span></>
              )}
            />
          </section>
          <SectorNavigator fr={fr} />
        </div>

        {/* ── 03 · Preuve client ── */}
        <div id="preuve">
          <section className="pt-8 pb-4 px-4 sm:px-6 lg:px-8">
            <ChapterHeader
              number="03"
              eyebrow={fr ? 'Cas client documenté · Déploiement réel' : 'Documented client case · Real deployment'}
              title={fr ? (
                <>La preuve : <span className="gradient-text">Mobilier de France</span></>
              ) : (
                <>The proof: <span className="gradient-text">Mobilier de France</span></>
              )}
            />
          </section>

          <section className="pt-8 pb-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <FadeInUp className="flex justify-center">
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

          <DeploymentTimeline fr={fr} />

          <section className="px-4 sm:px-6 lg:px-8 pb-4">
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
                      <h3 className="text-base font-bold text-white mb-1.5">
                        {fr ? 'Notre philosophie' : 'Our philosophy'}
                      </h3>
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
        </div>

        {/* ── 04 · Comment ça marche ── */}
        <div id="fonctionnement">
          <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <AnimatedMesh variant="blue" />
            <div className="relative z-10">
              <div className="mb-10">
                <ChapterHeader
                  number="04"
                  eyebrow={fr ? 'De la brique au produit' : 'From building block to product'}
                  title={fr ? (
                    <>Les <span className="gradient-text">3 couches</span> de la plateforme</>
                  ) : (
                    <>The <span className="gradient-text">3 layers</span> of the platform</>
                  )}
                />
              </div>
              <div className="max-w-5xl mx-auto">
                <PlatformAccordion />
              </div>
            </div>
          </section>
        </div>

        {/* ── 05 · Le produit en détail ── */}
        <div id="stack">
          <section className="pt-4 pb-4 px-4 sm:px-6 lg:px-8">
            <ChapterHeader
              number="05"
              eyebrow={fr ? 'Ce qui fait la différence' : "What sets us apart"}
              title={fr ? (
                <>Comment c&apos;est <span className="gradient-text">construit</span></>
              ) : (
                <>How it&apos;s <span className="gradient-text">built</span></>
              )}
            />
          </section>
          <ProductStack locale={locale} />
        </div>

        {/* ── 06 · Sécurité & conformité ── */}
        <div id="securite">
          <section className="pt-4 pb-4 px-4 sm:px-6 lg:px-8">
            <ChapterHeader
              number="06"
              eyebrow={fr ? 'Hébergement, RGPD, certifications' : 'Hosting, GDPR, certifications'}
              title={fr ? (
                <>Sécurité & <span className="gradient-text">conformité</span></>
              ) : (
                <>Security & <span className="gradient-text">compliance</span></>
              )}
            />
          </section>
          <SecurityDetail locale={locale} />
        </div>

        {/* ── 07 · Modèle économique ── */}
        <div id="modele">
          <section className="pt-4 pb-4 px-4 sm:px-6 lg:px-8">
            <ChapterHeader
              number="07"
              eyebrow={fr ? "Pourquoi c'est moins cher" : 'Why it costs less'}
              title={fr ? (
                <>Le <span className="gradient-text">modèle économique</span></>
              ) : (
                <>The <span className="gradient-text">business model</span></>
              )}
            />
          </section>
          <BusinessModel fr={fr} />
        </div>

        {/* ── 08 · Secrétaire IA, le détail ── */}
        <div id="secretaire">
          <section className="pt-4 pb-4 px-4 sm:px-6 lg:px-8">
            <ChapterHeader
              number="08"
              eyebrow={fr ? 'Zoom produit' : 'Product zoom-in'}
              title={fr ? (
                <>Secrétaire IA, <span className="gradient-text">le détail</span></>
              ) : (
                <>AI Secretary, <span className="gradient-text">in detail</span></>
              )}
            />
          </section>
          <SecretaryDetail fr={fr} />
        </div>

        {/* ── 09 · Happi CRM, le détail ── */}
        <div id="crm">
          <section className="pt-4 pb-4 px-4 sm:px-6 lg:px-8">
            <ChapterHeader
              number="09"
              eyebrow={fr ? "Un autre produit H'appi" : "Another H'appi product"}
              title={fr ? (
                <>Happi CRM, <span className="gradient-text">le détail</span></>
              ) : (
                <>Happi CRM, <span className="gradient-text">in detail</span></>
              )}
            />
          </section>
          <CrmDetail fr={fr} />
        </div>

        {/* ── 10 · ROI Calculator ── */}
        <div id="roi">
          <section className="pt-4 pb-4 px-4 sm:px-6 lg:px-8">
            <ChapterHeader
              number="10"
              eyebrow={fr ? 'Pour chiffrer votre cas' : 'To size up your case'}
              title={fr ? (
                <>Calculez le <span className="gradient-text">ROI</span></>
              ) : (
                <>Calculate the <span className="gradient-text">ROI</span></>
              )}
            />
          </section>
          <RoiCalculator fr={fr} />
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
