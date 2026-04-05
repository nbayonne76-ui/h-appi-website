'use client';

import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { openContactModal } from '@/components/ui/ContactModal';
import TiltCard from '@/components/ui/TiltCard';

type Billing = 'monthly' | 'annual';

interface Plan {
  label: string;
  title: string;
  description: string;
  monthlyPrice: string;
  annualPrice: string;
  annualNote: string;
  priceDetail: string;
  priceNote: string;
  recommended?: boolean;
  features: string[];
  color: string;
  badgeStyle: string;
  borderStyle: string;
  checkStyle: string;
}

const PLANS_FR: Plan[] = [
  {
    label: 'Startup & PME',
    title: 'Support Essentiel',
    description: 'Pour indépendants et entreprises en démarrage',
    monthlyPrice: 'Inclus',
    annualPrice: 'Inclus',
    annualNote: '',
    priceDetail: 'avec l\'implémentation',
    priceNote: 'Accès admin complet dès le premier jour.',
    color: '#10B981',
    badgeStyle: 'text-happi-green border-happi-green/30 bg-happi-green/10',
    borderStyle: 'border-happi-border hover:border-happi-green/30',
    checkStyle: 'text-happi-green',
    features: ['Déploiement du bot inclus', 'Accès complet à l\'interface admin', 'Support email (réponse 48h)', 'Rapport performance mensuel', 'Mises à jour automatiques'],
  },
  {
    label: 'Entreprise moyenne',
    title: 'Support Professionnel',
    description: 'Pour entreprises en croissance avec des besoins volumes',
    monthlyPrice: '€100 - €500',
    annualPrice: '€83 - €417',
    annualNote: '2 mois offerts',
    priceDetail: '/ mois',
    priceNote: 'Selon volume et intégrations',
    recommended: true,
    color: '#3B82F6',
    badgeStyle: 'text-happi-blue border-happi-blue/30 bg-happi-blue/10',
    borderStyle: 'border-2 border-happi-blue shadow-lg shadow-happi-blue/10',
    checkStyle: 'text-happi-blue',
    features: ['Tout l\'Essentiel', 'Monitoring & alertes 24/7', 'Support prioritaire même jour', 'Intégrations CRM avancées', 'Revue stratégique trimestrielle', 'Accès multi-utilisateurs'],
  },
  {
    label: 'Grande entreprise & Multinational',
    title: 'Support Entreprise',
    description: 'Pour grandes organisations avec besoins sur-mesure',
    monthlyPrice: '€500 - €2000',
    annualPrice: '€417 - €1667',
    annualNote: '2 mois offerts',
    priceDetail: '/ mois',
    priceNote: 'SLA personnalisé et infrastructure dédiée',
    color: '#8B5CF6',
    badgeStyle: 'text-purple-400 border-purple-400/30 bg-purple-500/10',
    borderStyle: 'border-happi-border hover:border-purple-400/30',
    checkStyle: 'text-purple-400',
    features: ['Tout le Professionnel', 'Account manager dédié', 'Accord SLA personnalisé', 'Option marque blanche', 'Déploiement on-premise disponible', 'Support téléphonique 24/7'],
  },
];

const PLANS_EN: Plan[] = [
  {
    label: 'Startup & Small business',
    title: 'Essential support',
    description: 'For independent professionals and early-stage companies',
    monthlyPrice: 'Included',
    annualPrice: 'Included',
    annualNote: '',
    priceDetail: 'with implementation',
    priceNote: 'Full admin access from day one.',
    color: '#10B981',
    badgeStyle: 'text-happi-green border-happi-green/30 bg-happi-green/10',
    borderStyle: 'border-happi-border hover:border-happi-green/30',
    checkStyle: 'text-happi-green',
    features: ['Bot deployment included', 'Full access to the admin interface', 'Email support (48h response)', 'Monthly performance report', 'Automatic updates'],
  },
  {
    label: 'Medium company',
    title: 'Professional support',
    description: 'For growing companies with higher volume needs',
    monthlyPrice: '€100 - €500',
    annualPrice: '€83 - €417',
    annualNote: '2 months free',
    priceDetail: '/ month',
    priceNote: 'Based on volume and integrations',
    recommended: true,
    color: '#3B82F6',
    badgeStyle: 'text-happi-blue border-happi-blue/30 bg-happi-blue/10',
    borderStyle: 'border-2 border-happi-blue shadow-lg shadow-happi-blue/10',
    checkStyle: 'text-happi-blue',
    features: ['Everything in Essential', '24/7 monitoring and alerting', 'Priority support, same business day', 'Advanced CRM & tool integrations', 'Quarterly strategic review', 'Multi-user admin access'],
  },
  {
    label: 'Large company & Multinational',
    title: 'Enterprise support',
    description: 'For large organizations with custom requirements',
    monthlyPrice: '€500 - €2000',
    annualPrice: '€417 - €1667',
    annualNote: '2 months free',
    priceDetail: '/ month',
    priceNote: 'Custom SLA and dedicated infrastructure',
    color: '#8B5CF6',
    badgeStyle: 'text-purple-400 border-purple-400/30 bg-purple-500/10',
    borderStyle: 'border-happi-border hover:border-purple-400/30',
    checkStyle: 'text-purple-400',
    features: ['Everything in Professional', 'Dedicated account manager', 'Custom SLA agreement', 'White-label option', 'On-premise deployment available', '24/7 phone support'],
  },
];

export default function BillingToggle({ fr }: { fr?: boolean }) {
  const [billing, setBilling] = useState<Billing>('monthly');
  const plans = fr ? PLANS_FR : PLANS_EN;
  const isAnnual = billing === 'annual';

  return (
    <div>
      {/* Toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center gap-3 bg-happi-surface border border-happi-border rounded-xl p-1.5">
          <button
            onClick={() => setBilling('monthly')}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              !isAnnual ? 'bg-happi-blue text-white shadow-sm' : 'text-happi-muted hover:text-white'
            }`}
          >
            {fr ? 'Mensuel' : 'Monthly'}
          </button>
          <button
            onClick={() => setBilling('annual')}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
              isAnnual ? 'bg-happi-blue text-white shadow-sm' : 'text-happi-muted hover:text-white'
            }`}
          >
            {fr ? 'Annuel' : 'Annual'}
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-happi-green/20 text-happi-green border border-happi-green/30">
              -17%
            </span>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <TiltCard key={plan.label} intensity={5}>
            <div className={`glass-card rounded-2xl p-7 border ${plan.borderStyle} transition-all flex flex-col h-full relative`}>
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 bg-happi-blue text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                    <Star size={11} />
                    {fr ? 'Le plus populaire' : 'Most popular'}
                  </span>
                </div>
              )}

              <span className={`inline-block text-xs font-bold uppercase tracking-widest mb-4 px-2.5 py-1 rounded-full border w-fit ${plan.badgeStyle}`}>
                {plan.label}
              </span>
              <h3 className="text-xl font-bold mb-1 text-white">{plan.title}</h3>
              <p className="text-happi-muted text-sm mb-6 leading-relaxed">{plan.description}</p>

              {/* Price with animation */}
              <div className="mb-1 min-h-[44px] flex items-end gap-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={billing + plan.label}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="text-3xl font-extrabold"
                    style={{ color: plan.color }}
                  >
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </motion.span>
                </AnimatePresence>
                <span className="text-happi-muted text-sm mb-1">{plan.priceDetail}</span>
              </div>

              <div className="flex items-center gap-2 mb-6 min-h-[20px]">
                <p className="text-happi-muted text-xs">{plan.priceNote}</p>
                <AnimatePresence>
                  {isAnnual && plan.annualNote && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-happi-green/15 text-happi-green border border-happi-green/30 whitespace-nowrap flex-shrink-0"
                    >
                      🎁 {plan.annualNote}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <ul className="space-y-3 mt-auto mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`${plan.checkStyle} flex-shrink-0 mt-0.5`} size={14} />
                    <span className="text-sm text-happi-muted">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openContactModal}
                className="w-full py-2.5 rounded-xl text-sm font-semibold border transition-all hover:opacity-90"
                style={{ borderColor: `${plan.color}40`, color: plan.color, background: `${plan.color}10` }}
              >
                {fr ? 'Demander un devis' : 'Get a quote'}
              </button>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
