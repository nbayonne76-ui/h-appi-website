'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingDown, Clock, Euro } from 'lucide-react';

const SECTORS_FR = [
  { label: 'SAV / Support client', costPerCall: 5, automationRate: 0.65 },
  { label: 'Hôtellerie / Concierge', costPerCall: 4, automationRate: 0.7 },
  { label: 'Secrétariat / Prise de RDV', costPerCall: 6, automationRate: 0.75 },
  { label: 'E-commerce / Support', costPerCall: 4.5, automationRate: 0.65 },
  { label: 'Transport / Logistique', costPerCall: 5.5, automationRate: 0.6 },
  { label: 'Notariat / Juridique', costPerCall: 8, automationRate: 0.7 },
];

const SECTORS_EN = [
  { label: 'After-Sales / Support', costPerCall: 5, automationRate: 0.65 },
  { label: 'Hospitality / Concierge', costPerCall: 4, automationRate: 0.7 },
  { label: 'Secretary / Booking', costPerCall: 6, automationRate: 0.75 },
  { label: 'E-commerce / Support', costPerCall: 4.5, automationRate: 0.65 },
  { label: 'Transport / Logistics', costPerCall: 5.5, automationRate: 0.6 },
  { label: 'Legal / Notary', costPerCall: 8, automationRate: 0.7 },
];

function fmt(n: number) {
  return n.toLocaleString('fr-FR');
}

export default function RoiCalculator({ fr }: { fr: boolean }) {
  const sectors = fr ? SECTORS_FR : SECTORS_EN;
  const [sectorIdx, setSectorIdx] = useState(0);
  const [callsPerMonth, setCallsPerMonth] = useState(200);

  const sector = sectors[sectorIdx];
  const automatedCalls = Math.round(callsPerMonth * sector.automationRate);
  const savedPerMonth = Math.round(automatedCalls * sector.costPerCall);
  const savedPerYear = savedPerMonth * 12;
  const timePerCall = 8; // minutes en moyenne
  const timeSavedHours = Math.round((automatedCalls * timePerCall) / 60);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-blue/20">
            <Calculator size={12} />
            {fr ? 'Calculateur ROI' : 'ROI Calculator'}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3">
            {fr ? (
              <>Combien H&apos;appi vous <span className="gradient-text">fait économiser</span> ?</>
            ) : (
              <>How much does H&apos;appi <span className="gradient-text">save you</span>?</>
            )}
          </h2>
          <p className="text-happi-muted text-sm max-w-xl mx-auto">
            {fr
              ? 'Estimez vos économies potentielles en 30 secondes. Basé sur les résultats réels de nos déploiements.'
              : 'Estimate your potential savings in 30 seconds. Based on real results from our deployments.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Left — Controls */}
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-happi-border space-y-8">

            {/* Sector selector */}
            <div>
              <label className="block text-xs font-semibold text-happi-muted uppercase tracking-widest mb-3">
                {fr ? 'Votre secteur' : 'Your sector'}
              </label>
              <div className="grid grid-cols-1 gap-2">
                {sectors.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSectorIdx(i)}
                    className={`text-left px-4 py-2.5 rounded-xl text-sm transition-all duration-150 border ${
                      sectorIdx === i
                        ? 'bg-happi-blue/10 text-happi-blue border-happi-blue/30 font-semibold'
                        : 'text-happi-muted border-happi-border hover:border-happi-border/60 hover:text-white'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Calls slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-semibold text-happi-muted uppercase tracking-widest">
                  {fr ? 'Interactions / mois' : 'Interactions / month'}
                </label>
                <span className="text-white font-bold text-sm">{fmt(callsPerMonth)}</span>
              </div>
              <input
                type="range"
                min={50}
                max={2000}
                step={50}
                value={callsPerMonth}
                onChange={(e) => setCallsPerMonth(Number(e.target.value))}
                className="w-full accent-happi-blue h-1.5 rounded-full cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-happi-muted/50 mt-1">
                <span>50</span>
                <span>2 000</span>
              </div>
            </div>

          </div>

          {/* Right — Results */}
          <div className="space-y-4">

            {/* Big saving */}
            <motion.div
              key={`${sectorIdx}-${callsPerMonth}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl p-6 md:p-8 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(16,185,129,0.08))' , border: '1px solid rgba(59,130,246,0.2)' }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-happi-muted/60 mb-2">
                {fr ? 'Économies annuelles estimées' : 'Estimated annual savings'}
              </p>
              <div className="text-5xl font-extrabold gradient-text mb-1">
                {fmt(savedPerYear)} €
              </div>
              <p className="text-happi-muted text-xs">
                {fr
                  ? `soit ${fmt(savedPerMonth)} €/mois sur votre budget support`
                  : `or ${fmt(savedPerMonth)} €/month on your support budget`}
              </p>
            </motion.div>

            {/* 3 mini stats */}
            {[
              {
                icon: TrendingDown,
                color: '#3B82F6',
                value: `${automatedCalls}`,
                label: fr ? 'interactions automatisées/mois' : 'automated interactions/month',
              },
              {
                icon: Clock,
                color: '#10B981',
                value: `${timeSavedHours}h`,
                label: fr ? 'de temps agent économisées/mois' : 'agent hours saved/month',
              },
              {
                icon: Euro,
                color: '#F59E0B',
                value: `${Math.round(sector.automationRate * 100)}%`,
                label: fr ? 'taux d\'automatisation estimé' : 'estimated automation rate',
              },
            ].map((stat, i) => (
              <motion.div
                key={`${sectorIdx}-${callsPerMonth}-${i}`}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.06 }}
                className="flex items-center gap-4 rounded-xl p-4 border border-happi-border bg-happi-darker"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${stat.color}15`, color: stat.color }}
                >
                  <stat.icon size={18} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-tight">{stat.value}</div>
                  <div className="text-happi-muted text-xs">{stat.label}</div>
                </div>
              </motion.div>
            ))}

            <p className="text-[10px] text-happi-muted/40 text-center leading-relaxed px-2">
              {fr
                ? '* Estimation basée sur les résultats réels de nos déploiements. Coût moyen d\'un appel entrant = 4–8 € (source : Salesforce CX Report 2024).'
                : '* Estimate based on real deployment results. Average inbound call cost = €4–8 (source: Salesforce CX Report 2024).'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
