'use client';

import { useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import { openContactModal } from '@/components/ui/ContactModal';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '16', labelFr: 'Modules tout-en-un', labelEn: 'All-in-one modules', color: '#3B82F6' },
  { value: '4', labelFr: 'Fonctionnalités IA incluses', labelEn: 'AI features included', color: '#10B981' },
  { value: '14j', labelFr: 'Pour déployer', labelEn: 'To deploy', color: '#A78BFA' },
  { value: '100%', labelFr: 'Conforme RGPD', labelEn: 'GDPR compliant', color: '#F59E0B' },
];

const highlights = [
  { fr: 'Pipeline Kanban', en: 'Kanban pipeline' },
  { fr: 'Leads notés par IA', en: 'AI-scored leads' },
  { fr: 'Devis PDF', en: 'PDF quotes' },
  { fr: 'Séquences email', en: 'Email sequences' },
  { fr: 'Support client', en: 'Customer support' },
  { fr: 'Prévisions de ventes', en: 'Sales forecasting' },
];

export default function CrmContent() {
  const locale = useLocale();
  const fr = locale === 'fr';

  return (
    <>
      <Header />
      <main className="pt-16 bg-happi-darker text-white">

        {/* ── Hero ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <AnimatedMesh variant="hero" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-6 border border-happi-blue/20">
              {fr ? 'Produit H\'appi' : 'H\'appi Product'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              {fr
                ? <>Happi CRM : le CRM IA conçu pour les <span className="gradient-text">équipes qui veulent gagner</span></>
                : <>Happi CRM: the AI CRM built for <span className="gradient-text">teams that want to win</span></>}
            </h1>
            <p className="text-lg text-happi-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              {fr
                ? 'Tout ce qu\'il faut pour vendre, sans le prix d\'un HubSpot.'
                : 'Everything you need to sell, without the HubSpot price tag.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openContactModal}
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-happi-blue-strong text-white rounded-xl hover:bg-happi-blue-strong/90 transition-all hover:shadow-lg hover:shadow-happi-blue/25 font-semibold"
              >
                {fr ? 'Demander une démo' : 'Request a demo'}
                <ArrowRight size={16} />
              </button>
              <a
                href="https://github.com/nbayonne76-ui/Happi-CRM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-happi-border text-happi-muted rounded-xl hover:text-white hover:border-happi-border/60 transition-all font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* ── Dashboard screenshot ── */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-happi-border/40 shadow-2xl shadow-black/50">
              <div className="bg-happi-dark flex items-center gap-2 px-4 py-2.5 border-b border-happi-border/50">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="flex-1 mx-4 bg-happi-surface/60 rounded px-3 py-1 text-[11px] text-happi-muted/50 font-mono">
                  happi-crm.com/dashboard
                </span>
              </div>
              <img
                src="/images/crm-dashboard.png"
                alt="Happi CRM Dashboard"
                className="w-full block"
              />
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-happi-dark border-y border-happi-border/50">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.value + s.labelFr} className="text-center">
                <div className="text-3xl font-extrabold mb-1" style={{ color: s.color }}>{s.value}</div>
                <div className="text-xs text-happi-muted">{fr ? s.labelFr : s.labelEn}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Highlights ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2">
              {highlights.map((h) => (
                <span
                  key={h.fr}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-happi-border text-happi-muted"
                >
                  {fr ? h.fr : h.en}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-happi-blue to-happi-green rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 right-6 w-24 h-24 border-2 border-white rounded-full" />
                <div className="absolute bottom-6 left-6 w-36 h-36 border-2 border-white rounded-full" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {fr ? 'Prêt à voir le CRM en action ?' : 'Ready to see the CRM in action?'}
                </h2>
                <p className="text-white/80 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
                  {fr
                    ? 'On vous montre les 16 modules, les 4 features IA et le pipeline Kanban en 30 minutes. Sans engagement, sans blabla commercial.'
                    : 'We\'ll walk you through all 16 modules, 4 AI features and the Kanban pipeline in 30 minutes. No commitment, no sales pitch.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openContactModal}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-happi-blue rounded-xl hover:shadow-xl transition-all font-semibold"
                  >
                    {fr ? 'Demander une démo' : 'Request a demo'}
                    <ArrowRight size={16} />
                  </button>
                  <a
                    href="https://github.com/nbayonne76-ui/Happi-CRM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white rounded-xl hover:bg-white/10 transition-all font-semibold"
                  >
                    {fr ? 'Voir le code GitHub' : 'View code on GitHub'}
                  </a>
                </div>
                <p className="text-white/60 text-xs mt-6">
                  {fr ? 'Réponse sous 24h · Démo personnalisée · Sans engagement' : 'Reply within 24h · Personalised demo · No commitment'}
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
