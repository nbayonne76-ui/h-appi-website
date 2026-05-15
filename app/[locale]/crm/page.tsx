'use client';

import { useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import { openContactModal } from '@/components/ui/ContactModal';
import {
  Users, Building2, BarChart3, Ticket, Mail, Calendar,
  Zap, Shield, Brain, TrendingUp, Package, FileText,
  Settings, Puzzle, Activity, ArrowRight, Check,
  Globe, Lock, Database,
} from 'lucide-react';

// 16 modules CRM (Brain)
const modules = [
  { icon: BarChart3, label: 'Dashboard', desc: 'KPIs, stalled deals, alertes IA', color: '#3B82F6' },
  { icon: Users, label: 'Contacts', desc: 'Table + drawer 7 onglets + AI search', color: '#10B981' },
  { icon: Building2, label: 'Companies', desc: 'Grid + dedup domaine auto', color: '#A78BFA' },
  { icon: TrendingUp, label: 'Pipeline Deals', desc: 'Kanban DnD + forecast catégories', color: '#F59E0B' },
  { icon: Brain, label: 'Leads IA', desc: 'Kanban lead_status + lead scoring Claude', color: '#3B82F6' },
  { icon: FileText, label: 'Devis', desc: 'Quotes + line items + PDF (fpdf2)', color: '#10B981' },
  { icon: Package, label: 'Catalogue produits', desc: 'CRUD produits liés aux deals', color: '#A78BFA' },
  { icon: Mail, label: 'Emails & Séquences', desc: 'Templates + séquences + tracking open/click', color: '#F59E0B' },
  { icon: Activity, label: 'Activités', desc: 'Timeline + complétion + @mentions', color: '#3B82F6' },
  { icon: Ticket, label: 'Tickets P0-P3', desc: 'Board priorité + drawer + commentaires', color: '#EF4444' },
  { icon: BarChart3, label: 'Analytics', desc: '9 onglets + CSV export + win rate', color: '#10B981' },
  { icon: TrendingUp, label: 'Forecast', desc: 'Rollup par rep, quota inline-edit', color: '#A78BFA' },
  { icon: Users, label: 'Team', desc: 'Manager overview + notifications', color: '#F59E0B' },
  { icon: Puzzle, label: 'Intégrations', desc: 'Slack, Cal.com, Gmail, Zapier', color: '#3B82F6' },
  { icon: Brain, label: 'Module IA', desc: 'Chat, Next Action, Win Prob, Opportunity', color: '#10B981' },
  { icon: Settings, label: 'Paramètres', desc: 'Team, webhooks, API keys (hck_...)', color: '#A78BFA' },
];

// 6 features IA Claude-powered (Brain)
const aiFeatures = [
  { label: 'NL Search', desc: 'Recherche en langage naturel dans les contacts et deals', color: '#3B82F6' },
  { label: 'Smart Paste', desc: 'Colle un email, Claude extrait les champs automatiquement', color: '#10B981' },
  { label: 'Lead Scoring', desc: 'Score 0-100 calculé par Claude selon comportement et profil', color: '#A78BFA' },
  { label: 'Next Best Action', desc: 'Claude recommande la prochaine action par deal', color: '#F59E0B' },
  { label: 'Win Probability', desc: 'Prédiction IA de probabilité de closing par deal', color: '#EF4444' },
  { label: 'Opportunity Research', desc: 'Brief IA complet sur l\'entreprise cible avant l\'appel', color: '#3B82F6' },
];

// Intégrations (Brain)
const integrations = [
  { icon: Zap, label: 'Slack', desc: 'Notifications deals + alertes P0', color: '#4A154B' },
  { icon: Calendar, label: 'Cal.com', desc: 'Webhook → Activity automatique', color: '#3B82F6' },
  { icon: Mail, label: 'Gmail', desc: 'OAuth2 PKCE — sync emails', color: '#EF4444' },
  { icon: Zap, label: 'Zapier / Make', desc: 'Outbound webhooks configurables', color: '#FF4A00' },
  { icon: Globe, label: 'H\'appi Secretary', desc: 'Appels vocaux → CRM auto (X-Happi-Key)', color: '#10B981' },
  { icon: Brain, label: 'H\'appi Chatbot', desc: 'Leads chatbot → CRM auto', color: '#A78BFA' },
];

// Sécurité (Brain Sprints A-F)
const security = [
  { icon: Lock, label: 'JWT + Redis blacklist', desc: 'jti UUID révocable — token invalidé à la déconnexion' },
  { icon: Shield, label: 'IDOR protection', desc: 'require_admin sur tous les endpoints destructifs' },
  { icon: Activity, label: 'Rate limiting', desc: 'slowapi : enrichissement 10/h, auth refresh 30/min' },
  { icon: Database, label: 'Audit trail', desc: 'deleted_at + deleted_by sur 5 entités (Alembic)' },
];

// Stats Brain
const stats = [
  { value: '17', label: 'Sprints livrés', color: '#3B82F6' },
  { value: '120+', label: 'Endpoints API', color: '#10B981' },
  { value: '16', label: 'Pages frontend', color: '#A78BFA' },
  { value: '54', label: 'Tests backend', color: '#F59E0B' },
];

export default function CrmPage() {
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
                ? <>Happi CRM — Le CRM IA conçu pour les <span className="gradient-text">équipes qui veulent gagner</span></>
                : <>Happi CRM — The AI CRM built for <span className="gradient-text">teams that want to win</span></>}
            </h1>
            <p className="text-lg text-happi-muted mb-4 max-w-2xl mx-auto leading-relaxed">
              {fr
                ? 'Pipeline Kanban, lead scoring IA, devis PDF, séquences email, 6 features Claude — tout ce dont une équipe commerciale a besoin, sans le prix d\'un HubSpot.'
                : 'Kanban pipeline, AI lead scoring, PDF quotes, email sequences, 6 Claude features — everything a sales team needs, without the HubSpot price tag.'}
            </p>
            <p className="text-happi-muted text-sm mb-10">
              {fr
                ? 'Next.js 16 · FastAPI · PostgreSQL · Claude Sonnet 4.6 · 120+ endpoints · 54 tests'
                : 'Next.js 16 · FastAPI · PostgreSQL · Claude Sonnet 4.6 · 120+ endpoints · 54 tests'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openContactModal}
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-happi-blue text-white rounded-xl hover:bg-happi-blue/90 transition-all hover:shadow-lg hover:shadow-happi-blue/25 font-semibold"
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

        {/* ── Stats strip ── */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-happi-dark border-y border-happi-border/50">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-extrabold mb-1" style={{ color: s.color }}>{s.value}</div>
                <div className="text-xs text-happi-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 16 Modules ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                {fr ? 'Couverture complète' : 'Full coverage'}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {fr ? '16 modules, ' : '16 modules, '}
                <span className="gradient-text">{fr ? 'zéro lacune' : 'zero gaps'}</span>
              </h2>
              <p className="text-happi-muted text-sm mt-3 max-w-xl mx-auto">
                {fr
                  ? 'De la prospection à la facturation, chaque étape du cycle commercial est couverte.'
                  : 'From prospecting to invoicing, every stage of the sales cycle is covered.'}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {modules.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div
                    key={i}
                    className="rounded-xl p-4 border hover:-translate-y-0.5 transition-transform duration-200"
                    style={{ background: `${m.color}08`, borderColor: `${m.color}20` }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: `${m.color}15` }}
                    >
                      <Icon size={15} style={{ color: m.color }} />
                    </div>
                    <div className="text-white text-xs font-semibold mb-1">{m.label}</div>
                    <div className="text-happi-muted text-[10px] leading-snug">{m.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 6 Features IA Claude ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                {fr ? 'Propulsé par Claude (Anthropic)' : 'Powered by Claude (Anthropic)'}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {fr ? '6 features IA ' : '6 AI features '}
                <span className="gradient-text">{fr ? 'intégrées nativement' : 'built in natively'}</span>
              </h2>
              <p className="text-happi-muted text-sm mt-3 max-w-xl mx-auto">
                {fr
                  ? 'Pas un module optionnel payant — l\'IA est au cœur de chaque workflow du CRM.'
                  : 'Not an optional paid add-on — AI is at the heart of every CRM workflow.'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {aiFeatures.map((f, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 border"
                  style={{ background: `${f.color}08`, borderColor: `${f.color}25` }}
                >
                  <span
                    className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-3"
                    style={{ background: `${f.color}12`, color: f.color, borderColor: `${f.color}30` }}
                  >
                    Claude
                  </span>
                  <h4 className="text-white font-bold text-sm mb-2">{f.label}</h4>
                  <p className="text-happi-muted text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Intégrations ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                {fr ? 'Votre stack, connectée' : 'Your stack, connected'}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {fr ? '6 intégrations ' : '6 integrations '}
                <span className="gradient-text">{fr ? 'prêtes à l\'emploi' : 'ready to use'}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {integrations.map((int, i) => {
                const Icon = int.icon;
                return (
                  <div
                    key={i}
                    className="bg-happi-surface rounded-2xl p-5 border border-happi-border hover:border-happi-blue/30 transition-all flex gap-4 items-start"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${int.color}20` }}
                    >
                      <Icon size={18} style={{ color: int.color }} />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">{int.label}</div>
                      <div className="text-happi-muted text-xs leading-relaxed">{int.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Sécurité ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-3">
                  {fr ? 'Sprints A-F sécurité' : 'Security Sprints A-F'}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {fr ? 'Production-ready ' : 'Production-ready '}
                  <span className="gradient-text">{fr ? 'dès le premier jour' : 'from day one'}</span>
                </h2>
                <p className="text-happi-muted text-sm leading-relaxed mb-8">
                  {fr
                    ? '6 sprints dédiés à la sécurité, aux performances et à la qualité de code — avant la mise en production.'
                    : '6 dedicated sprints on security, performance and code quality — before going live.'}
                </p>

                <div className="space-y-4">
                  {security.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <div key={i} className="flex items-start gap-4 bg-happi-surface rounded-xl p-4 border border-happi-border">
                        <div className="w-9 h-9 bg-happi-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon size={16} className="text-happi-green" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-semibold">{s.label}</div>
                          <div className="text-happi-muted text-xs mt-0.5">{s.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tests */}
              <div className="bg-happi-surface rounded-2xl p-7 border border-happi-border">
                <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wide">
                  {fr ? 'Couverture de tests' : 'Test coverage'}
                </h3>
                <div className="space-y-3 mb-6">
                  {[
                    { label: fr ? '13 tests Auth (login, refresh, logout, invite)' : '13 Auth tests (login, refresh, logout, invite)', color: '#3B82F6' },
                    { label: fr ? '11 tests Contacts (CRUD, bulk, export CSV)' : '11 Contacts tests (CRUD, bulk, CSV export)', color: '#10B981' },
                    { label: fr ? '12 tests Deals (CRUD, stage move, won/lost)' : '12 Deals tests (CRUD, stage move, won/lost)', color: '#A78BFA' },
                    { label: fr ? '8 tests Tickets (CRUD, filtres, commentaires)' : '8 Tickets tests (CRUD, filters, comments)', color: '#F59E0B' },
                    { label: fr ? '3 tests Health (/health + /health/ready)' : '3 Health tests (/health + /health/ready)', color: '#10B981' },
                    { label: fr ? 'E2E Playwright : auth, contacts, deals' : 'Playwright E2E: auth, contacts, deals', color: '#3B82F6' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Check size={13} className="mt-0.5 flex-shrink-0" style={{ color: item.color }} />
                      <span className="text-happi-muted text-xs">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-happi-darker border border-happi-border p-4 text-center">
                  <div className="text-2xl font-extrabold text-happi-green mb-1">54</div>
                  <div className="text-happi-muted text-xs">{fr ? 'tests backend verts (~5s)' : 'green backend tests (~5s)'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stack technique ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-xl font-bold text-white">
                {fr ? 'Stack technique' : 'Technical stack'}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: 'Next.js 16', color: '#3B82F6' },
                { label: 'FastAPI', color: '#10B981' },
                { label: 'PostgreSQL', color: '#A78BFA' },
                { label: 'Claude Sonnet 4.6', color: '#F59E0B' },
                { label: 'Redis (JWT blacklist)', color: '#EF4444' },
                { label: 'SQLAlchemy', color: '#3B82F6' },
                { label: 'Alembic', color: '#10B981' },
                { label: 'Resend (email)', color: '#A78BFA' },
                { label: 'slowapi (rate limit)', color: '#F59E0B' },
                { label: 'fpdf2 (PDF)', color: '#3B82F6' },
                { label: 'Playwright E2E', color: '#10B981' },
                { label: 'Docker + Compose', color: '#A78BFA' },
                { label: '@dnd-kit (Kanban)', color: '#3B82F6' },
                { label: 'Zustand', color: '#10B981' },
                { label: 'Tailwind CSS', color: '#F59E0B' },
              ].map((t, i) => (
                <span
                  key={i}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                  style={{ background: `${t.color}10`, color: t.color, borderColor: `${t.color}30` }}
                >
                  {t.label}
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
                    ? 'On vous montre les 16 modules, les 6 features IA et le pipeline Kanban en 30 minutes. Sans engagement, sans blabla commercial.'
                    : 'We\'ll walk you through all 16 modules, 6 AI features and the Kanban pipeline in 30 minutes. No commitment, no sales pitch.'}
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
                    Voir le code GitHub
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
