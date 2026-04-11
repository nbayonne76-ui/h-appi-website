import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Header from '@/components/Header';
import SubNav from '@/components/about/SubNav';
import Footer from '@/components/Footer';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import { FadeInUp, Stagger, StaggerItem } from '@/components/ui/Animate';
import { CountUp } from '@/components/ui/CountUp';
import {
  Eye, Heart, Coins, Users, ArrowRight,
  Brain, Phone, Camera, Globe, Zap,
  BarChart3, Plug, Ticket, Filter, Shield,
  Sofa, Hotel, Truck, Scale, ShoppingBag, Building2,
} from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('about.title'),
    description: t('about.description'),
  };
}

const sectionIcons = [Eye, Heart, Coins, Users];
const sectionColors = [
  { color: 'bg-happi-blue/10 text-happi-blue', border: 'border-happi-blue/20 hover:border-happi-blue/40', accent: '#3B82F6' },
  { color: 'bg-happi-green/10 text-happi-green', border: 'border-happi-green/20 hover:border-happi-green/40', accent: '#10B981' },
  { color: 'bg-happi-yellow/10 text-happi-yellow', border: 'border-happi-yellow/20 hover:border-happi-yellow/40', accent: '#F59E0B' },
  { color: 'bg-happi-blue/10 text-happi-blue', border: 'border-happi-blue/20 hover:border-happi-blue/40', accent: '#3B82F6' },
];
const sectionHrefs = ['/a-propos/vision', '/a-propos/valeurs', '/a-propos/strategie', '/a-propos/rejoindre'];

// 10 AI capabilities (from fonctionnalites page)
const aiCaps = [
  { icon: Brain, label: 'NLP Métier', tech: 'Claude', color: '#3B82F6' },
  { icon: Phone, label: 'Voix IA 24h/24', tech: 'Vapi · ElevenLabs', color: '#10B981' },
  { icon: Camera, label: 'Vision & Photo', tech: 'Claude Vision', color: '#F59E0B' },
  { icon: Globe, label: 'Multilingue natif', tech: 'Claude', color: '#3B82F6' },
  { icon: Zap, label: 'Sentiment', tech: 'Claude', color: '#A78BFA' },
  { icon: BarChart3, label: 'Analytics & Prédictif', tech: 'Claude', color: '#10B981' },
  { icon: Plug, label: 'CRM / ERP', tech: 'API · Webhooks', color: '#F59E0B' },
  { icon: Ticket, label: 'Ticketing P0–P3', tech: 'Claude', color: '#EF4444' },
  { icon: Filter, label: 'Qualification 3 phases', tech: 'Claude', color: '#3B82F6' },
  { icon: Shield, label: 'RGPD & Souveraineté', tech: 'Made in France', color: '#10B981' },
];

// Client showcase from Brain
const clients = [
  { icon: Sofa, name: 'Mobilier de France', sector: 'Meublement', metric: '−65% appels SAV' },
  { icon: Hotel, name: 'Lavorel Hotels', sector: 'Hôtellerie', metric: '24h/7j concierge' },
  { icon: ShoppingBag, name: 'INnatural', sector: 'E-commerce', metric: 'Qual. 3 phases' },
  { icon: Truck, name: 'Groupe Trouillet', sector: 'Transport', metric: '−40% dispatch' },
  { icon: Scale, name: 'Groupe Monassier', sector: 'Notariat', metric: '−80% appels non qualifiés' },
  { icon: Building2, name: 'Plastivaloire', sector: 'Industrie', metric: 'Support technique IA' },
];

// Real Brain stats
const keyNumbers = [
  { value: '17+', label: 'Démos clients livrées' },
  { value: '11', label: 'Secteurs couverts' },
  { value: '14j', label: 'Délai déploiement moyen' },
  { value: '0', label: 'Faux témoignage sur ce site' },
];

export default async function AProposPage() {
  const t = await getTranslations('pageAbout');
  const fr = true; // server component, locale handled by layout

  return (
    <>
      <Header />
      <SubNav />
      <main className="bg-happi-darker">

        {/* ── Hero ── */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <AnimatedMesh variant="hero" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeInUp>
              <span className="inline-block px-4 py-2 bg-happi-blue/10 text-happi-blue rounded-full text-sm font-medium mb-6 border border-happi-blue/20">
                {t('badge')}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t('titleLine1')}<br />
                {t('titleLine2')}<br />
                {t.rich('titleLine3', {
                  highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
                })}
              </h1>
              <p className="text-lg text-happi-muted leading-relaxed max-w-2xl mx-auto">
                {t('subtitle')}
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* ── Key Numbers (Brain stats + CountUp) ── */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-happi-dark border-y border-happi-border/50">
          <div className="max-w-5xl mx-auto">
            <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {keyNumbers.map((stat, i) => (
                <StaggerItem key={i}>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">
                      <CountUp value={stat.value} />
                    </div>
                    <div className="text-sm text-happi-muted">{stat.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── 10 Capacités IA ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-6xl mx-auto">
            <FadeInUp className="text-center mb-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                Notre technologie
              </p>
              <h2 className="text-2xl font-extrabold text-white">
                10 capacités IA <span className="gradient-text">au service de votre métier</span>
              </h2>
              <p className="text-happi-muted text-sm mt-2 max-w-xl mx-auto">
                Claude, Vapi.ai, ElevenLabs, Deepgram — les meilleures IA sélectionnées pour chaque besoin.
              </p>
            </FadeInUp>

            <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {aiCaps.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <StaggerItem key={i}>
                    <div
                      className="rounded-xl p-4 border flex flex-col gap-2 hover:-translate-y-0.5 transition-transform duration-200"
                      style={{ background: `${cap.color}08`, borderColor: `${cap.color}20` }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${cap.color}15` }}
                      >
                        <Icon size={15} style={{ color: cap.color }} />
                      </div>
                      <div className="text-white text-xs font-semibold leading-snug">{cap.label}</div>
                      <span
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full self-start border"
                        style={{ background: `${cap.color}10`, color: cap.color, borderColor: `${cap.color}25` }}
                      >
                        {cap.tech}
                      </span>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>

        {/* ── Quote ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <div className="text-6xl text-happi-blue/20 font-serif leading-none mb-4">&ldquo;</div>
              <blockquote className="text-xl md:text-2xl font-semibold text-white leading-relaxed mb-8">
                {t('quote')}
              </blockquote>
              <div className="flex flex-wrap justify-center gap-3">
                {['Sur-mesure radical', 'Intelligence évolutive', 'Prix disruptifs', 'RGPD & Made in France'].map((tag, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 bg-happi-darker rounded-full px-4 py-2 text-sm text-white font-medium border border-happi-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ── Clients Showcase ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-6xl mx-auto">
            <FadeInUp className="text-center mb-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                Ils nous font confiance
              </p>
              <h2 className="text-xl font-extrabold text-white">
                17+ entreprises, <span className="gradient-text">11 secteurs</span>
              </h2>
            </FadeInUp>

            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {clients.map((client, i) => {
                const Icon = client.icon;
                return (
                  <StaggerItem key={i}>
                    <div className="glass-card rounded-xl p-5 border border-happi-border flex items-center gap-4 hover:-translate-y-0.5 transition-transform duration-200">
                      <div className="w-10 h-10 rounded-xl bg-happi-blue/10 border border-happi-blue/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-happi-blue" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-semibold text-sm truncate">{client.name}</div>
                        <div className="text-happi-muted text-xs">{client.sector}</div>
                      </div>
                      <span className="text-[10px] font-semibold text-happi-green bg-happi-green/10 border border-happi-green/20 px-2 py-1 rounded-full whitespace-nowrap">
                        {client.metric}
                      </span>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <FadeInUp className="text-center mt-6">
              <p className="text-happi-muted text-xs">
                + Charier, Labeyrie, Saint-Jean, Mademoiselle Desserts, Icelec, KingKong, Benta, Audit Expert, Cabinet Arc, Uqudo...
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* ── Section Cards ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-5xl mx-auto">
            <FadeInUp className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">{t('exploreTitle')}</h2>
              <p className="text-happi-muted">{t('exploreSubtitle')}</p>
            </FadeInUp>

            <Stagger className="grid md:grid-cols-2 gap-6">
              {sectionIcons.map((Icon, i) => (
                <StaggerItem key={i}>
                  <Link
                    href={sectionHrefs[i]}
                    className={`group bg-happi-surface rounded-2xl p-8 border ${sectionColors[i].border} hover:shadow-lg transition-all block overflow-hidden relative`}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: `linear-gradient(90deg, ${sectionColors[i].accent}, ${sectionColors[i].accent}40)` }}
                    />
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${sectionColors[i].color}`}>
                        <Icon size={24} />
                      </div>
                      <ArrowRight
                        className="text-happi-muted group-hover:text-happi-blue group-hover:translate-x-1 transition-all"
                        size={20}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{t(`sections.${i}.title`)}</h3>
                    <p className="text-happi-muted leading-relaxed text-sm">{t(`sections.${i}.description`)}</p>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── Quick History ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp>
              <h2 className="text-2xl font-bold text-white mb-6">{t('historyTitle')}</h2>
              <p className="text-happi-muted leading-relaxed mb-4">{t('historyP1')}</p>
              <p className="text-happi-muted leading-relaxed mb-8">
                {t.rich('historyP2', {
                  strong: (chunks) => <strong className="text-white">{chunks}</strong>,
                })}
              </p>
              <Link
                href="/a-propos/vision"
                className="inline-flex items-center px-8 py-3 bg-happi-blue text-white rounded-xl hover:bg-opacity-90 transition-all hover:shadow-lg font-medium"
              >
                {t('historyCta')}
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </FadeInUp>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
