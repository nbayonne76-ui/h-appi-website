import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Check, Phone, Calendar, MessageSquare, Mic, Clock, Zap, X } from 'lucide-react';
import SecretaryCTA from '@/components/secretary/SecretaryCTA';
import LogoWall from '@/components/ui/LogoWall';

// ── Data ────────────────────────────────────────────────────────────────────

const features = {
  fr: [
    { icon: Phone,         color: '#3B82F6', title: 'Gestion des appels',         desc: 'Répond aux appels professionnels, identifie les appelants et les dirige vers la bonne personne ou enregistre leurs messages avec précision.' },
    { icon: Calendar,      color: '#22C55E', title: 'Prise de rendez-vous',        desc: 'Planifie automatiquement des rendez-vous en fonction de votre calendrier en temps réel. Zéro conflit, zéro oubli.' },
    { icon: MessageSquare, color: '#8B5CF6', title: 'Messages intelligents',       desc: 'Transcrit automatiquement les messages vocaux en texte structuré, avec résumé et niveau de priorité.' },
    { icon: Mic,           color: '#F97316', title: 'Répondeur professionnel',     desc: 'Voix naturelle, ton adapté à votre secteur. Vos clients ne savent pas qu\'ils parlent à une IA.' },
    { icon: Clock,         color: '#06B6D4', title: 'Disponibilité 24h/24',        desc: 'Jamais de congés, jamais de pause. Votre secrétaire IA répond à toute heure, 7 jours sur 7, 365 jours par an.' },
    { icon: Zap,           color: '#D4AF37', title: 'Intégration en 48h',          desc: 'Compatible Google Calendar, Outlook, votre CRM et vos outils existants. Opérationnel en moins de 2 jours.' },
  ],
  en: [
    { icon: Phone,         color: '#3B82F6', title: 'Call management',            desc: 'Answers professional calls, identifies callers and routes them to the right person or records their messages accurately.' },
    { icon: Calendar,      color: '#22C55E', title: 'Appointment booking',        desc: 'Automatically schedules appointments based on your real-time calendar. Zero conflicts, zero missed slots.' },
    { icon: MessageSquare, color: '#8B5CF6', title: 'Smart messages',             desc: 'Automatically transcribes voice messages into structured text with a summary and priority level.' },
    { icon: Mic,           color: '#F97316', title: 'Professional voicebot',      desc: 'Natural voice, tone adapted to your industry. Your clients won\'t know they\'re talking to an AI.' },
    { icon: Clock,         color: '#06B6D4', title: '24/7 availability',          desc: 'No holidays, no breaks. Your AI secretary responds at any hour, 7 days a week, 365 days a year.' },
    { icon: Zap,           color: '#D4AF37', title: 'Live in 48h',               desc: 'Works with Google Calendar, Outlook, your CRM and existing tools. Operational in under 2 days.' },
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

const useCases = {
  fr: [
    { icon: '🏥', title: 'Cabinets médicaux & dentaires',  desc: 'Gérez rendez-vous et rappels automatiquement. Réduisez les absences de 40%.' },
    { icon: '🏢', title: 'PME & petites entreprises',       desc: 'Un service client professionnel sans ressources humaines dédiées.' },
    { icon: '⚖️', title: 'Cabinets juridiques',             desc: 'Triez les appels, prenez RDV et enregistrez les demandes prioritaires.' },
    { icon: '🏨', title: 'Hôtels & restaurants',            desc: 'Répondez aux réservations 24h/24 sans mobiliser votre personnel.' },
    { icon: '🎓', title: 'Écoles & universités',            desc: 'Secrétariat virtuel pour demandes d\'info et inscriptions en ligne.' },
    { icon: '📞', title: 'Centres d\'appels',               desc: 'Traitez plus d\'appels entrants sans augmenter vos effectifs.' },
  ],
  en: [
    { icon: '🏥', title: 'Medical & dental offices',    desc: 'Manage appointments and reminders automatically. Reduce no-shows by 40%.' },
    { icon: '🏢', title: 'SMEs & small businesses',     desc: 'Professional customer service without dedicated HR resources.' },
    { icon: '⚖️', title: 'Law firms',                   desc: 'Screen calls, book appointments and record priority client requests.' },
    { icon: '🏨', title: 'Hotels & restaurants',        desc: 'Handle reservations 24/7 without tying up your staff.' },
    { icon: '🎓', title: 'Schools & universities',      desc: 'Virtual secretary for information requests and online enrolments.' },
    { icon: '📞', title: 'Call centres',                desc: 'Handle more inbound calls without growing your headcount.' },
  ],
};

const before = {
  fr: ['Appels manqués', 'Messages oubliés', 'Rendez-vous en double', 'Personnel interrompu', 'Service limité aux heures de bureau', 'Coûts administratifs élevés'],
  en: ['Missed calls', 'Forgotten messages', 'Double-booked appointments', 'Interrupted staff', 'Service limited to office hours', 'High admin costs'],
};
const after = {
  fr: ['100% des appels traités', 'Tous les messages enregistrés', 'Planification sans erreurs', 'Équipe focalisée sur l\'essentiel', 'Service client 24h/24, 7j/7', 'Économies significatives'],
  en: ['100% of calls handled', 'All messages recorded', 'Error-free scheduling', 'Team focused on what matters', 'Customer service 24/7', 'Significant cost savings'],
};

const faqs = {
  fr: [
    { q: 'Les clients sauront-ils que c\'est une IA ?',               a: 'Non. Happi-Secretary utilise une voix naturelle et des conversations fluides. La distinction est imperceptible.' },
    { q: 'Comment ça s\'intègre à mon calendrier ?',                  a: 'Synchronisation automatique avec Google Calendar, Outlook et iCal. Disponibilité vérifiée en temps réel à chaque appel.' },
    { q: 'Mes données sont-elles sécurisées ?',                       a: 'Oui. Sécurité niveau bancaire, chiffrement bout en bout, hébergement en France et en Europe. Conforme RGPD.' },
    { q: 'Combien ça coûte ?',                                        a: 'Les tarifs dépendent de votre volume d\'appels. Contactez-nous pour un devis personnalisé et gratuit.' },
    { q: 'Combien de temps pour la mise en place ?',                  a: '24 à 48 heures. Notre équipe technique s\'occupe de tout, de l\'intégration à la configuration.' },
  ],
  en: [
    { q: 'Will clients know it\'s an AI?',                            a: 'No. Happi-Secretary uses a natural voice and fluid conversation. The difference is imperceptible.' },
    { q: 'How does it integrate with my calendar?',                   a: 'Automatic sync with Google Calendar, Outlook and iCal. Availability checked in real time on every call.' },
    { q: 'Is my data secure?',                                        a: 'Yes. Bank-level security, end-to-end encryption, servers hosted in France and Europe. Fully GDPR compliant.' },
    { q: 'How much does it cost?',                                    a: 'Pricing depends on your call volume. Contact us for a free, personalised quote.' },
    { q: 'How long to get set up?',                                   a: '24 to 48 hours. Our tech team handles everything, from integration to configuration.' },
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

  return (
    <>
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

        {/* ── What is it ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-6 border border-happi-blue/20">
              {fr ? 'Le concept' : 'The concept'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {fr ? "Qu'est-ce que Happi-Secretary ?" : 'What is Happi-Secretary?'}
            </h2>
            <p className="text-happi-muted leading-relaxed text-base mb-5">
              {fr
                ? "Happi-Secretary est une intelligence artificielle vocale qui fonctionne comme un véritable secrétaire pour votre entreprise. Disponible jour et nuit, elle répond aux appels, prend des messages, planifie des rendez-vous et s'intègre à vos outils. Sans pause et sans congés."
                : "Happi-Secretary is a voice AI that works as a real secretary for your business. Available day and night, it answers calls, takes messages, schedules appointments and integrates with your tools. No breaks. No holidays."}
            </p>
            <p className="text-happi-muted/70 leading-relaxed text-sm">
              {fr
                ? "C'est comme avoir un collaborateur virtuel ultra-compétent qui maîtrise votre calendrier, vos priorités et votre image, tout en restant professionnel et discret."
                : "Think of it as a highly competent virtual colleague who knows your calendar, your priorities and your brand. Always professional, always discreet."}
            </p>
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

        {/* ── Before / After ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-happi-border bg-happi-surface/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-3">
                {fr ? "L'impact sur votre entreprise" : 'The impact on your business'}
              </h2>
              <p className="text-happi-muted text-sm">
                {fr ? 'La différence avant et après Happi-Secretary.' : 'The difference before and after Happi-Secretary.'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Before */}
              <div className="bg-happi-surface border border-red-500/20 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-red-500/15 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <h3 className="font-bold text-white">{fr ? 'Sans Happi-Secretary' : 'Without Happi-Secretary'}</h3>
                </div>
                <ul className="space-y-3">
                  {before[L].map(t => (
                    <li key={t} className="flex items-center gap-3 text-sm text-happi-muted">
                      <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              {/* After */}
              <div className="bg-happi-surface border border-happi-green/30 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-happi-green/15 flex items-center justify-center">
                    <Check className="w-4 h-4 text-happi-green" />
                  </div>
                  <h3 className="font-bold text-white">{fr ? 'Avec Happi-Secretary' : 'With Happi-Secretary'}</h3>
                </div>
                <ul className="space-y-3">
                  {after[L].map(t => (
                    <li key={t} className="flex items-center gap-3 text-sm text-happi-muted">
                      <Check className="w-3.5 h-3.5 text-happi-green flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Use Cases ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-happi-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-blue/20">
                {fr ? "Cas d'usage" : 'Use cases'}
              </span>
              <h2 className="text-3xl font-bold text-white mb-3">
                {fr ? 'Qui peut en bénéficier ?' : 'Who can benefit?'}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCases[L].map(({ icon, title, desc }) => (
                <div key={title} className="bg-happi-surface border border-happi-border rounded-2xl p-6 hover:border-happi-blue/30 transition-colors">
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
                  <p className="text-xs text-happi-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-happi-border bg-happi-surface/30">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-blue/20">
                FAQ
              </span>
              <h2 className="text-3xl font-bold text-white">
                {fr ? 'Questions fréquentes' : 'Frequently asked questions'}
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {faqs[L].map(({ q, a }) => (
                <div key={q} className="bg-happi-surface border border-happi-border rounded-2xl p-6 hover:border-happi-blue/30 transition-colors">
                  <h4 className="text-sm font-bold text-white mb-2">{q}</h4>
                  <p className="text-sm text-happi-muted leading-relaxed">{a}</p>
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
