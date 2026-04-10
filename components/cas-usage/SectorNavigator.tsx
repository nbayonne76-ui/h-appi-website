'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sofa, Hotel, Phone, ShoppingBag, Truck, Scale,
  ArrowRight, TrendingDown, Clock, Star, Users, CheckCircle2,
} from 'lucide-react';

type Sector = {
  id: string;
  icon: React.ElementType;
  color: string;
  label: string;
  labelEn: string;
  client: string;
  problem: string;
  problemEn: string;
  metric: string;
  metricLabel: string;
  metricLabelEn: string;
  solution: string;
  solutionEn: string;
  tags: string[];
  tagsEn: string[];
};

const sectors: Sector[] = [
  {
    id: 'sav',
    icon: Sofa,
    color: '#3B82F6',
    label: 'SAV & Meuble',
    labelEn: 'After-Sales & Furniture',
    client: 'Mobilier de France',
    problem: '300 appels/mois traités manuellement, 1 litige sur 4 sans preuve.',
    problemEn: '300 calls/month handled manually, 1 in 4 disputes unprovable.',
    metric: '−65%',
    metricLabel: 'appels SAV',
    metricLabelEn: 'after-sales calls',
    solution: 'Bot SAV + App Traçabilité livraisons avec signature numérique et photos.',
    solutionEn: 'After-sales bot + Delivery traceability app with digital signature and photos.',
    tags: ['Bot SAV', 'Traçabilité', 'Ticketing P0-P3'],
    tagsEn: ['After-Sales Bot', 'Traceability', 'Ticketing P0-P3'],
  },
  {
    id: 'hotel',
    icon: Hotel,
    color: '#10B981',
    label: 'Hôtellerie',
    labelEn: 'Hospitality',
    client: 'Lavorel Hotels',
    problem: 'Réception saturée, questions répétitives, réservations manquées hors horaires.',
    problemEn: 'Saturated front desk, repetitive questions, missed bookings outside hours.',
    metric: '24h/7j',
    metricLabel: 'disponibilité concierge',
    metricLabelEn: 'concierge availability',
    solution: 'Concierge IA vocal + chatbot multilingue pour FAQ, réservations et upsell.',
    solutionEn: 'AI voice concierge + multilingual chatbot for FAQ, bookings and upsell.',
    tags: ['Concierge IA', 'Vocal', 'Multilingue'],
    tagsEn: ['AI Concierge', 'Voice', 'Multilingual'],
  },
  {
    id: 'secretary',
    icon: Phone,
    color: '#A78BFA',
    label: 'Secrétariat IA',
    labelEn: 'AI Secretary',
    client: 'PME & Cabinets',
    problem: 'Appels manqués, agendas non tenus, pas de secrétaire disponible la nuit.',
    problemEn: 'Missed calls, unmanaged calendars, no secretary available at night.',
    metric: '<500ms',
    metricLabel: 'latence vocale',
    metricLabelEn: 'voice latency',
    solution: 'Secrétaire IA vocale 24h/24 : RDV, FAQ, résumé email + SMS post-appel.',
    solutionEn: '24/7 AI voice secretary: appointments, FAQ, email + SMS post-call summary.',
    tags: ['Vapi.ai', 'ElevenLabs', 'Cal.com'],
    tagsEn: ['Vapi.ai', 'ElevenLabs', 'Cal.com'],
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    color: '#F59E0B',
    label: 'E-commerce',
    labelEn: 'E-commerce',
    client: 'INnatural · KingKong',
    problem: 'Support client débordé, recommandations produits manuelles, panier abandonné.',
    problemEn: 'Overwhelmed support, manual product recommendations, abandoned carts.',
    metric: '+34%',
    metricLabel: 'taux de conversion',
    metricLabelEn: 'conversion rate',
    solution: 'Bot recommandation produits + qualification leads en 3 phases + support 24h.',
    solutionEn: 'Product recommendation bot + 3-phase lead qualification + 24h support.',
    tags: ['Qualification 3 phases', 'Widget', 'Multilingue'],
    tagsEn: ['3-Phase Qualification', 'Widget', 'Multilingual'],
  },
  {
    id: 'logistique',
    icon: Truck,
    color: '#EF4444',
    label: 'Transport & Logistique',
    labelEn: 'Transport & Logistics',
    client: 'Groupe Trouillet',
    problem: 'Suivi de flotte manuel, dispatch inefficace, clients sans visibilité.',
    problemEn: 'Manual fleet tracking, inefficient dispatch, clients with no visibility.',
    metric: '−40%',
    metricLabel: 'coûts de dispatch',
    metricLabelEn: 'dispatch costs',
    solution: 'Bot suivi livraison + dispatch IA + alertes automatiques clients en temps réel.',
    solutionEn: 'Delivery tracking bot + AI dispatch + real-time automated client alerts.',
    tags: ['Suivi temps réel', 'Dispatch IA', 'Alertes SMS'],
    tagsEn: ['Real-time tracking', 'AI Dispatch', 'SMS Alerts'],
  },
  {
    id: 'notariat',
    icon: Scale,
    color: '#06B6D4',
    label: 'Notariat & Juridique',
    labelEn: 'Legal & Notary',
    client: 'Groupe Monassier · Cabinet Arc',
    problem: 'Standard saturé, clients mal informés, RDV mal qualifiés.',
    problemEn: 'Saturated switchboard, poorly informed clients, unqualified appointments.',
    metric: '−80%',
    metricLabel: 'appels non qualifiés',
    metricLabelEn: 'unqualified calls',
    solution: 'Bot FAQ juridique + prise de RDV qualifiée + routage intelligent vers les notaires.',
    solutionEn: 'Legal FAQ bot + qualified appointment booking + intelligent routing to notaries.',
    tags: ['FAQ juridique', 'RDV qualifié', 'RGPD'],
    tagsEn: ['Legal FAQ', 'Qualified Booking', 'GDPR'],
  },
];

const metricIconMap: Record<string, React.ElementType> = {
  sav: TrendingDown,
  hotel: Clock,
  secretary: Star,
  ecommerce: Users,
  logistique: TrendingDown,
  notariat: CheckCircle2,
};

export default function SectorNavigator({ fr }: { fr: boolean }) {
  const [active, setActive] = useState<string>('sav');
  const current = sectors.find((s) => s.id === active)!;
  const MetricIcon = metricIconMap[active];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
            {fr ? '11 secteurs couverts' : '11 sectors covered'}
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {fr ? (
              <><span className="gradient-text">Votre secteur</span>, notre solution</>
            ) : (
              <><span className="gradient-text">Your sector</span>, our solution</>
            )}
          </h2>
          <p className="text-happi-muted text-sm mt-3 max-w-xl mx-auto">
            {fr
              ? 'H\'appi adapte chaque solution à la réalité métier de son client. Sélectionnez votre secteur pour voir comment.'
              : 'H\'appi tailors every solution to the client\'s business reality. Select your sector to see how.'}
          </p>
        </div>

        {/* Sector tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {sectors.map((s) => {
            const Icon = s.icon;
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? 'text-white border-transparent'
                    : 'text-happi-muted border-happi-border bg-happi-dark hover:border-happi-border/60 hover:text-white'
                }`}
                style={isActive ? { background: `${s.color}20`, borderColor: `${s.color}50`, color: s.color } : {}}
              >
                <Icon size={14} />
                {fr ? s.label : s.labelEn}
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: `${current.color}30`, background: `${current.color}06` }}
          >
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">

              {/* Left — Problem */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${current.color}15` }}
                  >
                    <current.icon size={16} style={{ color: current.color }} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{current.client}</div>
                    <div className="text-happi-muted text-[11px]">{fr ? current.label : current.labelEn}</div>
                  </div>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: `${current.color}99` }}>
                  {fr ? 'Le problème' : 'The problem'}
                </p>
                <p className="text-happi-muted text-sm leading-relaxed">
                  {fr ? current.problem : current.problemEn}
                </p>
              </div>

              {/* Center — Metric */}
              <div className="p-6 md:p-8 flex flex-col items-center justify-center text-center">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: `${current.color}15` }}
                >
                  <MetricIcon size={22} style={{ color: current.color }} />
                </div>
                <div className="text-4xl font-extrabold mb-1" style={{ color: current.color }}>
                  {current.metric}
                </div>
                <div className="text-white font-semibold text-sm">
                  {fr ? current.metricLabel : current.metricLabelEn}
                </div>
              </div>

              {/* Right — Solution */}
              <div className="p-6 md:p-8">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: `${current.color}99` }}>
                  {fr ? 'Notre solution' : 'Our solution'}
                </p>
                <p className="text-happi-muted text-sm leading-relaxed mb-5">
                  {fr ? current.solution : current.solutionEn}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(fr ? current.tags : current.tagsEn).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg border"
                      style={{ background: `${current.color}10`, color: current.color, borderColor: `${current.color}25` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom nudge */}
        <div className="text-center mt-8">
          <p className="text-happi-muted text-xs">
            {fr
              ? 'Votre secteur n\'est pas listé ? Tous les secteurs peuvent être adressés.'
              : 'Your sector not listed? Every sector can be addressed.'}
            {' '}
            <a href="#contact" className="text-happi-blue hover:underline inline-flex items-center gap-1">
              {fr ? 'Discutons-en' : 'Let\'s talk'} <ArrowRight size={11} />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
