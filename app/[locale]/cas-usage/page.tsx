import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import {
  MessageSquare,
  Smartphone,
  LayoutDashboard,
  QrCode,
  MapPin,
  Camera,
  Bell,
  Link2,
  TrendingUp,
  Zap,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('useCases.title'),
    description: t('useCases.description'),
  };
}

export default async function CasUsagePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const fr = locale === 'fr';

  return (
    <>
      <Header />
      <main className="bg-happi-darker">

        {/* ── Hero ── */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-6 border border-happi-blue/20">
              {fr ? 'Cas d\'usage concret' : 'Real use case'}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              {fr
                ? <>Une plateforme construite <span className="gradient-text">à votre image</span></>
                : <>A platform built <span className="gradient-text">in your image</span></>}
            </h1>
            <p className="text-lg text-happi-muted max-w-2xl mx-auto leading-relaxed">
              {fr
                ? 'Pas un outil générique que vous adaptez — un outil que nous construisons autour de vos processus, votre équipe, votre marque.'
                : 'Not a generic tool you adapt — a tool we build around your processes, your team, your brand.'}
            </p>
          </div>
        </section>

        {/* ── Philosophy banner ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-happi-blue/10 to-happi-green/10 border border-happi-blue/20 rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 bg-happi-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-happi-blue/20">
                <Sparkles className="text-happi-blue" size={22} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white mb-2">
                  {fr ? 'Notre philosophie' : 'Our philosophy'}
                </h2>
                <p className="text-happi-muted leading-relaxed">
                  {fr
                    ? 'Chaque bot, chaque application est conçu autour de vous. Votre branding, vos flux métier, vos équipes. Nous ne reproduisons pas un modèle standard — nous apprenons votre réalité et construisons en conséquence. Ce cas d\'usage mobilier illustre exactement cette approche.'
                    : 'Every bot, every application is designed around you. Your branding, your business flows, your teams. We don\'t replicate a standard model — we learn your reality and build accordingly. This furniture use case illustrates exactly this approach.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── STEP 1 — Bot SAV ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-5xl mx-auto">

            {/* Step label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-happi-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                1
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-happi-blue">
                  {fr ? 'Premier produit · Déployé' : 'First product · Deployed'}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {fr ? 'Bot SAV — Fini les appels' : 'SAV Bot — No more phone calls'}
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Problem */}
              <div className="bg-happi-surface border border-happi-border rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">
                    {fr ? 'Le problème' : 'The problem'}
                  </span>
                </div>
                <p className="text-happi-muted text-sm leading-relaxed">
                  {fr
                    ? 'Un client reçoit un meuble endommagé ou avec une pièce défectueuse. Il appelle le service après-vente. Un agent prend ses informations à la main — numéro de commande, nature du problème. L\'information se perd, les délais s\'allongent, la frustration monte.'
                    : 'A client receives damaged furniture or a defective part. They call after-sales. An agent manually takes down their information — order number, nature of the problem. The information gets lost, delays grow, frustration builds.'}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-happi-surface border border-happi-border rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-happi-blue" />
                  <span className="text-xs font-semibold text-happi-blue uppercase tracking-wide">
                    {fr ? 'La solution' : 'The solution'}
                  </span>
                </div>
                <p className="text-happi-muted text-sm leading-relaxed">
                  {fr
                    ? 'Le client ouvre le bot SAV. Il saisit son numéro de ticket, son nom, et décrit son problème (ex : "angle du pied de table cassé"). La conversation se fait via l\'interface — même si un agent l\'accompagne au téléphone en parallèle.'
                    : 'The client opens the SAV bot. They enter their ticket number, name, and describe their issue (e.g., "table leg angle broken"). The conversation happens via the interface — even if an agent is assisting by phone simultaneously.'}
                </p>
              </div>
            </div>

            {/* Flow visualization */}
            <div className="bg-happi-dark border border-happi-border rounded-2xl p-8 mb-6">
              <h3 className="text-sm font-semibold text-happi-muted uppercase tracking-wide mb-6 text-center">
                {fr ? 'Comment ça fonctionne' : 'How it works'}
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-4 justify-center">

                {/* Actor: Client */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-happi-surface border border-happi-border rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Users size={22} className="text-happi-muted" />
                  </div>
                  <div className="text-white text-sm font-medium">{fr ? 'Le client' : 'The client'}</div>
                  <div className="text-happi-muted text-xs mt-1">{fr ? 'Signale un problème' : 'Reports an issue'}</div>
                </div>

                <ArrowRight size={18} className="text-happi-border hidden md:block" />
                <div className="w-px h-6 bg-happi-border md:hidden" />

                {/* Bot interface */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-happi-blue/10 border border-happi-blue/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <MessageSquare size={22} className="text-happi-blue" />
                  </div>
                  <div className="text-white text-sm font-medium">{fr ? 'Interface bot' : 'Bot interface'}</div>
                  <div className="text-happi-muted text-xs mt-1 max-w-[120px]">
                    {fr ? 'N° ticket · Nom · Problème' : 'Ticket # · Name · Issue'}
                  </div>
                </div>

                <ArrowRight size={18} className="text-happi-border hidden md:block" />
                <div className="w-px h-6 bg-happi-border md:hidden" />

                {/* Dossier auto */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-happi-green/10 border border-happi-green/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 size={22} className="text-happi-green" />
                  </div>
                  <div className="text-white text-sm font-medium">{fr ? 'Dossier créé' : 'Case created'}</div>
                  <div className="text-happi-muted text-xs mt-1">{fr ? 'Automatiquement' : 'Automatically'}</div>
                </div>

                <ArrowRight size={18} className="text-happi-border hidden md:block" />
                <div className="w-px h-6 bg-happi-border md:hidden" />

                {/* Dashboard */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-happi-surface border border-happi-border rounded-xl flex items-center justify-center mx-auto mb-2">
                    <LayoutDashboard size={22} className="text-white" />
                  </div>
                  <div className="text-white text-sm font-medium">{fr ? 'Dashboard technique' : 'Tech dashboard'}</div>
                  <div className="text-happi-muted text-xs mt-1 max-w-[120px]">
                    {fr ? 'Équipe prend en charge' : 'Team handles it'}
                  </div>
                </div>

              </div>
            </div>

            {/* Result */}
            <div className="bg-happi-surface border border-happi-green/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-happi-green" />
                <span className="text-xs font-semibold text-happi-green uppercase tracking-wide">
                  {fr ? 'Le résultat' : 'The result'}
                </span>
              </div>
              <p className="text-happi-muted text-sm leading-relaxed">
                {fr
                  ? 'Toutes les demandes SAV arrivent structurées et priorisées dans le tableau de bord. L\'équipe technique voit d\'un coup d\'œil : le client, le meuble concerné, le problème exact, la date de livraison. Plus de saisie manuelle, plus d\'information perdue.'
                  : 'All SAV requests arrive structured and prioritized in the dashboard. The technical team sees at a glance: the client, the furniture concerned, the exact issue, the delivery date. No more manual entry, no more lost information.'}
              </p>
            </div>

          </div>
        </section>

        {/* ── STEP 2 — App Traçabilité ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24 bg-happi-dark">
          <div className="max-w-5xl mx-auto pt-16">

            {/* Step label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-happi-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                2
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-happi-green">
                  {fr ? 'Déployé simultanément' : 'Deployed simultaneously'}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {fr ? 'App Traçabilité — Le meuble sous contrôle' : 'Traceability App — Full furniture visibility'}
                </h2>
              </div>
            </div>

            <p className="text-happi-muted mb-10 max-w-2xl leading-relaxed">
              {fr
                ? 'Une application mobile construite à l\'image du client mobilier : QR codes, géolocalisation, preuves de livraison. Trois acteurs, une seule chaîne transparente.'
                : 'A mobile application built for the furniture client: QR codes, geolocation, delivery proofs. Three actors, one transparent chain.'}
            </p>

            {/* 3 actors */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">

              {/* Fournisseur */}
              <div className="bg-happi-darker border border-happi-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-happi-blue/10 border border-happi-blue/20 rounded-xl flex items-center justify-center">
                    <QrCode size={20} className="text-happi-blue" />
                  </div>
                  <h3 className="font-semibold text-white">{fr ? 'Fournisseur' : 'Supplier'}</h3>
                </div>
                <ul className="space-y-2">
                  {(fr
                    ? ['Crée la fiche produit', 'Génère le QR code unique', 'Tableau de bord des expéditions', 'Historique complet horodaté']
                    : ['Creates the product sheet', 'Generates unique QR code', 'Shipments dashboard', 'Full timestamped history']
                  ).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-happi-muted text-sm">
                      <CheckCircle2 size={14} className="text-happi-blue mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Livreur */}
              <div className="bg-happi-darker border border-happi-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-happi-green/10 border border-happi-green/20 rounded-xl flex items-center justify-center">
                    <Smartphone size={20} className="text-happi-green" />
                  </div>
                  <h3 className="font-semibold text-white">{fr ? 'Livreur' : 'Driver'}</h3>
                </div>
                <ul className="space-y-2">
                  {(fr
                    ? ['Scanne le QR code en 2 sec', 'Photos géolocalisées horodatées', 'Suivi GPS en temps réel', 'Signature électronique client']
                    : ['Scans QR code in 2 sec', 'Geolocated timestamped photos', 'Real-time GPS tracking', 'Client electronic signature']
                  ).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-happi-muted text-sm">
                      <CheckCircle2 size={14} className="text-happi-green mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client */}
              <div className="bg-happi-darker border border-happi-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-white">{fr ? 'Client final' : 'End client'}</h3>
                </div>
                <ul className="space-y-2">
                  {(fr
                    ? ['Suivi en temps réel sur carte', 'Notifications push automatiques', 'Accès aux preuves de livraison', 'Photos + signature consultables']
                    : ['Real-time map tracking', 'Automatic push notifications', 'Access to delivery proofs', 'Photos + signature on demand']
                  ).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-happi-muted text-sm">
                      <CheckCircle2 size={14} className="text-white/40 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Interconnection callout */}
            <div className="bg-gradient-to-r from-happi-blue/10 to-happi-green/10 border border-happi-blue/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-happi-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Link2 size={20} className="text-happi-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    {fr ? 'La connexion clé avec le Bot SAV' : 'The key connection with the SAV Bot'}
                  </h3>
                  <p className="text-happi-muted text-sm leading-relaxed">
                    {fr
                      ? 'Le dossier client créé par l\'app (meuble livré, photos, signature électronique, date) est automatiquement accessible dans le bot SAV. Quand un client ouvre un ticket de réclamation, l\'équipe technique voit immédiatement : quel meuble, dans quel état il a été livré, par qui, et quand. Zéro double saisie.'
                      : 'The client file created by the app (furniture delivered, photos, electronic signature, date) is automatically accessible in the SAV bot. When a client opens a claim ticket, the technical team immediately sees: which furniture, what condition it was delivered in, by whom, and when. Zero double entry.'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── STEP 3 — SaaS Platform ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-5xl mx-auto pt-16">

            {/* Step label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-happi-blue to-happi-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                3
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-happi-muted">
                  {fr ? 'Après 2-3 mois d\'apprentissage' : 'After 2-3 months of learning'}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {fr ? 'La plateforme s\'éveille' : 'The platform awakens'}
                </h2>
              </div>
            </div>

            <p className="text-happi-muted mb-10 max-w-2xl leading-relaxed">
              {fr
                ? 'Une fois que l\'assistant a appris vos processus, vos patterns clients, et vos contraintes métier, des modules avancés s\'activent automatiquement — sans migration, sans projet supplémentaire.'
                : 'Once the assistant has learned your processes, client patterns, and business constraints, advanced modules activate automatically — no migration, no extra project.'}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: TrendingUp,
                  color: 'text-happi-blue',
                  bg: 'bg-happi-blue/10',
                  border: 'border-happi-blue/20',
                  title: fr ? 'Optimisation des tournées' : 'Route optimization',
                  desc: fr
                    ? 'Les données GPS accumulées permettent de calculer les meilleurs itinéraires et d\'anticiper les délais.'
                    : 'Accumulated GPS data enables calculating optimal routes and anticipating delays.',
                },
                {
                  icon: Bell,
                  color: 'text-happi-green',
                  bg: 'bg-happi-green/10',
                  border: 'border-happi-green/20',
                  title: fr ? 'Prédiction des absences client' : 'Client absence prediction',
                  desc: fr
                    ? 'Analyse historique pour anticiper les créneaux à risque et proposer automatiquement des alternatives.'
                    : 'Historical analysis to anticipate high-risk delivery slots and automatically propose alternatives.',
                },
                {
                  icon: Zap,
                  color: 'text-yellow-400',
                  bg: 'bg-yellow-400/10',
                  border: 'border-yellow-400/20',
                  title: fr ? 'Détection d\'anomalies' : 'Anomaly detection',
                  desc: fr
                    ? 'Alertes automatiques en cas de retard inhabituel, d\'écart de parcours ou d\'incident récurrent.'
                    : 'Automatic alerts for unusual delays, route deviations, or recurring incidents.',
                },
                {
                  icon: Camera,
                  color: 'text-purple-400',
                  bg: 'bg-purple-400/10',
                  border: 'border-purple-400/20',
                  title: fr ? 'SAV prédictif' : 'Predictive after-sales',
                  desc: fr
                    ? 'Identification des modèles de meubles générant le plus de réclamations pour anticiper les retours fournisseur.'
                    : 'Identification of furniture models generating the most claims to anticipate supplier returns.',
                },
              ].map(({ icon: Icon, color, bg, border, title, desc }) => (
                <div key={title} className={`bg-happi-surface border ${border} rounded-2xl p-6`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${bg} border ${border} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon size={20} className={color} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{title}</h3>
                      <p className="text-happi-muted text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Summary banner ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-happi-blue to-happi-green rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {fr ? 'Ce que ça change concrètement' : 'What this changes concretely'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {(fr
                  ? [
                    { value: '−82%', label: 'de réclamations liées aux livraisons' },
                    { value: '0', label: 'appel SAV pour les problèmes déjà documentés' },
                    { value: '100%', label: 'des dossiers structurés dès réception' },
                  ]
                  : [
                    { value: '−82%', label: 'of delivery-related complaints' },
                    { value: '0', label: 'SAV calls for already documented issues' },
                    { value: '100%', label: 'of cases structured upon receipt' },
                  ]
                ).map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-4xl font-bold mb-1">{value}</div>
                    <div className="text-white/70 text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
