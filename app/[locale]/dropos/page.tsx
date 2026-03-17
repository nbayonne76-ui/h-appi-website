import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Flame, Lock, MessageSquare, Check } from 'lucide-react';
import WaitlistForm from '@/components/dropos/WaitlistForm';

// ── Spot counter ───────────────────────────────────────────────────────────────

function SpotCounter({ claimed = 47, total = 100, fr }: { claimed?: number; total?: number; fr: boolean }) {
  const pct = Math.round((claimed / total) * 100);
  return (
    <div className="bg-happi-surface border border-happi-border rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-orange-400" />
          <span className="text-sm font-semibold text-white">
            {fr ? 'Places restantes' : 'Spots remaining'}
          </span>
        </div>
        <span className="text-sm font-bold text-orange-400">{total - claimed} {fr ? 'restantes' : 'left'}</span>
      </div>
      <div className="h-2.5 bg-happi-dark rounded-full overflow-hidden mb-2">
        <div
          className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-happi-muted">
        <span>{claimed} {fr ? 'places prises' : 'spots claimed'}</span>
        <span>{total} {fr ? 'total' : 'total'}</span>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default async function DropOSPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const fr = locale === 'fr';

  const gets = fr
    ? [
        '1 an complet de DropOS, entierement gratuit',
        'Acces a toutes les fonctionnalites des le premier jour',
        'Ligne directe avec moi, le fondateur',
        'Tarif bloque quand on passe en payant',
      ]
    : [
        '1 full year of DropOS, completely free',
        'Full access to every feature from day one',
        'Direct line to me, the founder',
        'Locked-in pricing when we go paid',
      ];

  const asks = fr
    ? [
        '30 jours de vos retours honnetes',
        'Dites-moi ce qui est casse, ce qui manque, ce que vous paieriez',
        'Aidez-moi a construire l\'outil dont la communaute a vraiment besoin',
      ]
    : [
        '30 days of your honest feedback',
        'Tell me what\'s broken, what\'s missing, what you\'d pay for',
        'Help me build the tool the dropshipping community actually needs',
      ];

  const whoFor = fr
    ? [
        { label: 'Debutants',              desc: 'Vous venez de lancer votre premiere boutique Shopify et voulez connaitre vos vraies marges des le depart.' },
        { label: 'Vendeurs en croissance', desc: 'Vous gerez 2 a 5 boutiques et vous noyez dans les tableurs. Vous avez besoin d\'un seul tableau de bord.' },
        { label: 'Operateurs avances',     desc: 'Vous gerez une operation serieuse avec plusieurs fournisseurs. Vous voulez des decisions basees sur les donnees.' },
      ]
    : [
        { label: 'Beginners',           desc: 'Just launched your first Shopify store and want to know your real margins from day one.' },
        { label: 'Growing sellers',     desc: 'Managing 2-5 stores and drowning in spreadsheets. You need one dashboard for all of it.' },
        { label: 'Advanced operators',  desc: 'Running a serious operation with multiple suppliers. You want data-driven decisions, not gut feelings.' },
      ];

  const features = fr
    ? [
        { icon: '📊', title: 'Suivi des profits en temps reel',    desc: 'Profit net reel sur chaque commande. Cout fournisseur, livraison, frais, pub, retours, tout decompte automatiquement.' },
        { icon: '💰', title: 'Calculateur de cout de revient',     desc: 'Sachez exactement ce que coute un produit avant de le vendre. 8 couches de cout, prix conseille a votre marge cible.' },
        { icon: '🏪', title: 'Dashboard multi-boutiques',          desc: 'Connectez plusieurs boutiques Shopify. Comparez revenus, couts et profits cote a cote sur un seul ecran.' },
        { icon: '⚡', title: 'Synchronisation automatique',        desc: 'Synchronisation des commandes via GraphQL en temps reel. Historique complet. Aucune saisie manuelle.' },
        { icon: '📦', title: 'Scorecards fournisseurs',            desc: 'Taux de livraison, precision des stocks, taux de litiges par fournisseur. Identifiez vos meilleurs partenaires.' },
        { icon: '🔒', title: 'Securite enterprise',                desc: 'OAuth 2.0 Shopify avec PKCE, tokens chiffres, ORM strict. Zero CVE connu. Vos donnees restent les votres.' },
      ]
    : [
        { icon: '📊', title: 'Real-time profit tracking',          desc: 'True net profit on every order. Supplier cost, shipping, fees, ad spend, returns, all deducted automatically.' },
        { icon: '💰', title: 'Landed cost calculator',             desc: 'Know exactly what a product costs before you sell it. 8 cost layers, suggested price at your target margin.' },
        { icon: '🏪', title: 'Multi-store dashboard',              desc: 'Connect multiple Shopify stores. Compare revenue, costs, and profit side-by-side on one screen.' },
        { icon: '⚡', title: 'Automatic sync',                     desc: 'GraphQL order sync in real time. Full history. No manual entry ever.' },
        { icon: '📦', title: 'Supplier scorecards',                desc: 'Delivery rates, stock accuracy, dispute rates per supplier. Surface your best and worst partners instantly.' },
        { icon: '🔒', title: 'Enterprise security',                desc: 'Shopify OAuth 2.0 with PKCE, encrypted tokens, strict ORM. Zero known CVEs. Your data stays yours.' },
      ];

  return (
    <>
      <Header />
      <main className="bg-happi-darker">

        {/* ── Hero ── */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">

            {/* Urgency badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 text-sm font-semibold mb-8">
              <Flame className="w-4 h-4" />
              {fr ? '100 places Founding Member. Premier arrive, premier servi.' : '100 Founding Member spots. First come, first served.'}
            </span>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {fr ? (
                <>1 an gratuit. <span className="gradient-text">Acces complet.</span><br />Aidez-moi a construire le bon outil.</>
              ) : (
                <>1 year free. <span className="gradient-text">Full access.</span><br />Help me build the right tool.</>
              )}
            </h1>

            <p className="text-lg text-happi-muted max-w-2xl mx-auto mb-4 leading-relaxed">
              {fr
                ? 'DropOS est une plateforme de suivi des profits et d\'analytique pour les dropshippers. J\'ouvre 100 places founding member, entierement gratuites pendant 1 an, en echange de 30 jours de retours honnetes.'
                : 'DropOS is a profit tracking and analytics platform for dropshippers. I\'m opening 100 founding member spots, completely free for 1 year, in exchange for 30 days of honest feedback.'}
            </p>

            <p className="text-sm text-happi-muted/60 mb-10">
              {fr
                ? 'Ce n\'est pas un lancement classique. Je ne veux pas 100 utilisateurs passifs. Je veux 100 personnes qui vont m\'aider a rendre ca parfait.'
                : 'This is not a typical launch. I don\'t want 100 passive users. I want 100 people who will help me make this perfect.'}
            </p>

            {/* Email form — Resend style */}
            <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
              <WaitlistForm fr={fr} variant="hero" />
              <p className="text-xs text-happi-muted/50">
                {fr ? 'Sans carte bancaire. Sans engagement. 100 places au total.' : 'No credit card. No commitment. 100 spots total.'}
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#offer"
                className="inline-flex items-center gap-1.5 text-sm text-happi-muted hover:text-white transition-colors"
              >
                {fr ? 'Voir ce que vous obtenez' : 'See what you get'}
                <span className="text-xs">↓</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── The offer ── */}
        <section id="offer" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-happi-border">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-orange-500/10 text-orange-400 rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-orange-500/20">
                {fr ? 'L\'offre' : 'The offer'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {fr ? 'Ce n\'est pas un lancement classique.' : 'This is not a typical launch.'}
              </h2>
              <p className="text-happi-muted max-w-xl mx-auto leading-relaxed">
                {fr
                  ? 'Je ne veux pas 100 utilisateurs passifs. Je veux 100 personnes qui vont m\'aider a rendre ca parfait.'
                  : 'I don\'t want 100 passive users. I want 100 people who will help me make this perfect.'}
              </p>
            </div>

            {/* Two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

              {/* What you get */}
              <div className="bg-happi-surface border border-happi-blue/30 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-happi-blue/15 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-happi-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {fr ? 'Ce que vous obtenez' : 'What you get'}
                  </h3>
                </div>
                <ul className="flex flex-col gap-4">
                  {gets.map((text) => (
                    <li key={text} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-happi-green flex-shrink-0 mt-0.5" />
                      <span className="text-happi-muted leading-snug">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What I ask */}
              <div className="bg-happi-surface border border-orange-500/30 rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {fr ? 'Ce que je demande en retour' : 'What I ask in return'}
                  </h3>
                </div>
                <ul className="flex flex-col gap-4">
                  {asks.map((text) => (
                    <li key={text} className="flex items-start gap-3">
                      <span className="text-lg flex-shrink-0 mt-0.5">🎯</span>
                      <span className="text-happi-muted leading-snug">{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-happi-border">
                  <p className="text-sm text-happi-muted/70 italic leading-relaxed">
                    {fr
                      ? '"Que vous fassiez du dropshipping, debutant ou avance, une boutique ou dix. Je veux vous entendre."'
                      : '"If you do dropshipping, beginner or advanced, one store or ten. I want to hear from you."'}
                  </p>
                </div>
              </div>
            </div>

            {/* Counter + Form */}
            <div className="max-w-xl mx-auto flex flex-col gap-4">
              <SpotCounter claimed={47} total={100} fr={fr} />
              <WaitlistForm fr={fr} variant="inline" />
              <p className="text-center text-xs text-happi-muted/60">
                {fr
                  ? 'Premier arrive, premier servi. 100 places au total. Sans carte bancaire.'
                  : 'First come, first served. 100 spots total. No credit card required.'}
              </p>
            </div>
          </div>
        </section>

        {/* ── Who it's for ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-happi-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              {fr ? 'Pour qui ?' : 'Who this is for'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {whoFor.map(({ label, desc }) => (
                <div key={label} className="bg-happi-surface border border-happi-border rounded-2xl p-5 hover:border-happi-blue/30 transition-colors">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ background: '#3b82f6' }} />
                  <h3 className="font-semibold text-white mb-2">{label}</h3>
                  <p className="text-sm text-happi-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-happi-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-blue/20">
                {fr ? 'Fonctionnalites' : 'Features'}
              </span>
              <h2 className="text-3xl font-bold text-white mb-3">
                {fr ? 'Acces complet des le premier jour' : 'Full access from day one'}
              </h2>
              <p className="text-happi-muted max-w-xl mx-auto text-sm leading-relaxed">
                {fr
                  ? 'Aucune fonctionnalite bloquee. Aucun niveau payant cache pour les founding members.'
                  : 'No feature gates. No locked paid tiers for founding members.'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-happi-surface border border-happi-border rounded-2xl p-6 hover:border-happi-blue/30 transition-colors"
                >
                  <div className="text-2xl mb-4">{icon}</div>
                  <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
                  <p className="text-xs text-happi-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-happi-border">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold mb-8">
              <Flame className="w-4 h-4" />
              {fr ? '53 places restantes' : '53 spots remaining'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {fr ? (
                <>Arretez de deviner vos profits.<br /><span className="gradient-text">Commencez a les connaitre, gratuitement.</span></>
              ) : (
                <>Stop guessing your profits.<br /><span className="gradient-text">Start knowing them, for free.</span></>
              )}
            </h2>
            <p className="text-happi-muted mb-10 leading-relaxed">
              {fr
                ? 'Connectez votre boutique Shopify et voyez vos vrais chiffres en moins de 2 minutes. Gratuit pendant 1 an. Sans engagement.'
                : 'Connect your Shopify store and see your real numbers in under 2 minutes. Free for a full year. No strings attached.'}
            </p>
            <WaitlistForm fr={fr} variant="inline" />
            <p className="mt-4 text-xs text-happi-muted/50">
              {fr
                ? '100 places. Premier arrive, premier servi. Sans carte bancaire.'
                : '100 spots. First come, first served. No credit card.'}
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
