import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Phone, Calendar, MessageSquare, Mic, Clock, Zap } from 'lucide-react';
import SecretaryCTA from '@/components/secretary/SecretaryCTA';
import LogoWall from '@/components/ui/LogoWall';
import { JsonLd } from '@/components/ui/JsonLd';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('secretary.title'),
    description: t('secretary.description'),
  };
}

// ── Data ────────────────────────────────────────────────────────────────────

const features = {
  fr: [
    { icon: Phone,         color: '#3B82F6', title: 'Gestion des appels',         desc: 'Identifie l\'appelant, route vers la bonne personne ou prend le message.' },
    { icon: Calendar,      color: '#22C55E', title: 'Prise de rendez-vous',        desc: 'Planification automatique selon votre calendrier. Zéro conflit, zéro oubli.' },
    { icon: MessageSquare, color: '#8B5CF6', title: 'Messages intelligents',       desc: 'Messages vocaux transcrits, résumés et priorisés automatiquement.' },
    { icon: Mic,           color: '#F97316', title: 'Répondeur professionnel',     desc: 'Voix naturelle, ton adapté à votre secteur. Indétectable.' },
    { icon: Clock,         color: '#06B6D4', title: 'Disponibilité 24h/24',        desc: 'Jamais de pause, jamais de congé. 7j/7, 365 jours par an.' },
    { icon: Zap,           color: '#D4AF37', title: 'Intégration en 48h',          desc: 'Google Calendar, Outlook, votre CRM. Opérationnel en 2 jours.' },
  ],
  en: [
    { icon: Phone,         color: '#3B82F6', title: 'Call management',            desc: 'Identifies the caller, routes to the right person, or takes the message.' },
    { icon: Calendar,      color: '#22C55E', title: 'Appointment booking',        desc: 'Automatic scheduling from your real-time calendar. Zero conflicts, zero misses.' },
    { icon: MessageSquare, color: '#8B5CF6', title: 'Smart messages',             desc: 'Voice messages transcribed, summarized and prioritized automatically.' },
    { icon: Mic,           color: '#F97316', title: 'Professional voicebot',      desc: 'Natural voice, tone matched to your industry. Undetectable.' },
    { icon: Clock,         color: '#06B6D4', title: '24/7 availability',          desc: 'No breaks, no holidays. 7 days a week, 365 days a year.' },
    { icon: Zap,           color: '#D4AF37', title: 'Live in 48h',               desc: 'Google Calendar, Outlook, your CRM. Operational in 2 days.' },
  ],
};

const stats = {
  fr: [
    { value: '100%', label: 'des appels traités', color: '#3B82F6' },
    { value: '24/7', label: 'disponibilité garantie', color: '#22C55E' },
    { value: '-70%', label: 'de tâches administratives', color: '#8B5CF6' },
  ],
  en: [
    { value: '100%', label: 'of calls handled', color: '#3B82F6' },
    { value: '24/7', label: 'guaranteed availability', color: '#22C55E' },
    { value: '-70%', label: 'admin tasks eliminated', color: '#8B5CF6' },
  ],
};

// ── Page ────────────────────────────────────────────────────────────────────

export default async function SecretaryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const fr = locale === 'fr';
  const L = fr ? 'fr' : 'en';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: fr ? 'Secrétariat IA' : 'AI Secretary',
    name: 'Happi-Secretary',
    description: fr
      ? 'Secrétaire IA vocale disponible 24h/24 : gestion des appels, prise de rendez-vous, messages transcrits.'
      : '24/7 AI voice secretary: call handling, appointment booking, transcribed messages.',
    provider: { '@type': 'Organization', name: "H'appi" },
    areaServed: 'FR',
  };

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main className="bg-happi-darker">

        {/* ── Hero ── */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-happi-blue/8 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-happi-blue/30 bg-happi-blue/10 text-happi-blue text-xs font-semibold mb-8 uppercase tracking-wide">
              🤖 {fr ? 'Secrétariat IA' : 'AI Secretary'}
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              {fr ? (
                <>Votre secrétaire IA<br /><span className="gradient-text">disponible 24h/24.</span></>
              ) : (
                <>Your AI secretary<br /><span className="gradient-text">available around the clock.</span></>
              )}
            </h1>

            <p className="text-lg text-happi-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              {fr
                ? 'Happi-Secretary automatise vos appels, vos rendez-vous et vos messages. Sans pause. Sans congés. Sans erreurs.'
                : 'Happi-Secretary automates your calls, appointments and messages. No breaks. No holidays. No mistakes.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <SecretaryCTA fr={fr} />
              <a href="#features" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border border-happi-border text-happi-muted hover:text-white hover:border-white/20 transition-all">
                {fr ? 'Découvrir les fonctionnalités' : 'See features'}
                <span className="text-xs">↓</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-happi-border bg-happi-surface/40">
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
            {stats[L].map(({ value, label, color }) => (
              <div key={label}>
                <div className="text-3xl md:text-4xl font-extrabold mb-1" style={{ color }}>{value}</div>
                <div className="text-xs md:text-sm text-happi-muted leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Logo Wall ── */}
        <LogoWall fr={fr} />

        {/* ── Product mockup ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-happi-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-blue/20">
                {fr ? 'Le produit' : 'The product'}
              </span>
              <h2 className="text-3xl font-bold text-white mb-3">
                {fr ? 'Un tableau de bord conçu pour la clarté' : 'A dashboard built for clarity'}
              </h2>
              <p className="text-happi-muted text-sm max-w-xl mx-auto">
                {fr
                  ? 'Chaque appel enregistré, chaque intention analysée, chaque rendez-vous tracé. En temps réel.'
                  : 'Every call logged, every intent analysed, every appointment tracked. In real time.'}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Dashboard screenshot */}
              <div className="relative rounded-2xl overflow-hidden border border-happi-border shadow-2xl shadow-black/40 group">
                <div className="absolute inset-0 bg-gradient-to-t from-happi-darker/60 via-transparent to-transparent z-10 pointer-events-none" />
                <Image
                  src="/images/secretary-dashboard.jpg"
                  alt={fr ? 'Tableau de bord Happi-Secretary' : 'Happi-Secretary dashboard'}
                  width={1400}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]"
                  priority
                />
                <div className="absolute bottom-4 left-6 z-20">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-happi-dark/90 border border-happi-border text-xs font-semibold text-white backdrop-blur-sm">
                    📊 {fr ? 'Tableau de bord' : 'Dashboard'}
                  </span>
                </div>
              </div>

              {/* Calls screenshot */}
              <div className="relative rounded-2xl overflow-hidden border border-happi-border shadow-2xl shadow-black/40 group">
                <div className="absolute inset-0 bg-gradient-to-t from-happi-darker/60 via-transparent to-transparent z-10 pointer-events-none" />
                <Image
                  src="/images/secretary-calls.jpg"
                  alt={fr ? 'Historique des appels Happi-Secretary' : 'Happi-Secretary call history'}
                  width={1400}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]"
                />
                <div className="absolute bottom-4 left-6 z-20">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-happi-dark/90 border border-happi-border text-xs font-semibold text-white backdrop-blur-sm">
                    📞 {fr ? 'Historique des appels' : 'Call history'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-happi-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-blue/20">
                {fr ? 'Fonctionnalités' : 'Features'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {fr ? 'Ses superpouvoirss 💪' : 'Superpowers 💪'}
              </h2>
              <p className="text-happi-muted max-w-xl mx-auto text-sm">
                {fr ? 'Tout ce dont vous avez besoin pour ne plus jamais manquer un appel ou un rendez-vous.' : 'Everything you need to never miss a call or appointment again.'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features[L].map(({ icon: Icon, color, title, desc }) => (
                <div
                  key={title}
                  className="bg-happi-surface border border-happi-border rounded-2xl p-6 hover:border-happi-blue/30 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ background: `${color}15` }}>
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
                  <p className="text-xs text-happi-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-happi-border">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-happi-blue/30 bg-happi-blue/10 text-happi-blue text-sm font-semibold mb-8">
              🤖 Happi-Secretary
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {fr ? (
                <>Transformez votre<br /><span className="gradient-text">gestion administrative.</span></>
              ) : (
                <>Transform your<br /><span className="gradient-text">administrative workflow.</span></>
              )}
            </h2>
            <p className="text-happi-muted mb-10 leading-relaxed">
              {fr
                ? 'Rejoignez les entreprises qui font confiance à Happi-Secretary. Démo gratuite, mise en place en 48h.'
                : 'Join businesses that trust Happi-Secretary. Free demo, live in 48 hours.'}
            </p>
            <SecretaryCTA fr={fr} />
            <p className="mt-4 text-xs text-happi-muted/50">
              {fr ? 'Sans engagement. Réponse sous 24h.' : 'No commitment. Reply within 24h.'}
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
