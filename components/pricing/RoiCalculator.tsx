'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { TrendingDown, Clock, Euro, ArrowRight } from 'lucide-react';
import { openContactModal } from '@/components/ui/ContactModal';

// Based on Narvar / Gorgias data: 65% of SAV calls automatable
const AUTOMATION_RATE = 0.65;

interface SliderProps {
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}

function Slider({ label, hint, value, min, max, step, display, onChange }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-sm font-medium text-white">{label}</span>
          <span className="text-happi-muted text-xs ml-2">{hint}</span>
        </div>
        <span className="text-happi-blue font-bold text-sm tabular-nums">{display}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #3B82F6 ${pct}%, #334155 ${pct}%)`,
          }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-happi-muted/50 mt-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

interface ResultCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  sub?: string;
  highlight?: boolean;
}

function ResultCard({ icon, value, label, sub, highlight }: ResultCardProps) {
  return (
    <div
      className={`rounded-xl p-4 border ${
        highlight
          ? 'bg-happi-blue/10 border-happi-blue/30'
          : 'bg-happi-dark border-happi-border'
      }`}
    >
      <div className={`mb-2 ${highlight ? 'text-happi-blue' : 'text-happi-muted'}`}>{icon}</div>
      <div className={`text-xl md:text-2xl font-bold tabular-nums ${highlight ? 'text-happi-blue' : 'text-white'}`}>
        {value}
      </div>
      <div className="text-happi-muted text-xs mt-1 leading-snug">{label}</div>
      {sub && <div className="text-happi-muted/50 text-[10px] mt-1 uppercase tracking-wide">{sub}</div>}
    </div>
  );
}

export function RoiCalculator() {
  const locale = useLocale();
  const fr = locale === 'fr';

  const [calls, setCalls] = useState(300);
  const [duration, setDuration] = useState(8);
  const [rate, setRate] = useState(28);

  const callsAutomated = Math.round(calls * AUTOMATION_RATE);
  const hoursSaved = Math.round((callsAutomated * duration) / 60);
  const moneySavedMonthly = Math.round(hoursSaved * rate);
  const annualSavings = moneySavedMonthly * 12;
  const currentCost = Math.round((calls * duration) / 60 * rate);

  const fmt = (n: number) =>
    n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1).replace('.', ',')} k€` : `${n} €`;

  return (
    <div className="bg-happi-surface border border-happi-border rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-8 pt-6 pb-4 border-b border-happi-border/50">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 bg-happi-blue/10 border border-happi-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <TrendingDown size={18} className="text-happi-blue" />
          </div>
          <div>
            <h3 className="text-white font-bold text-base">
              {fr ? 'Combien vous coûte votre SAV aujourd\'hui ?' : 'How much does your SAV cost today?'}
            </h3>
            <p className="text-happi-muted text-xs mt-0.5">
              {fr
                ? 'Ajustez les 3 curseurs — le calcul se met à jour en temps réel'
                : 'Adjust the 3 sliders — calculation updates in real time'}
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-8 py-6 space-y-8">
        {/* Sliders */}
        <div className="space-y-5">
          <Slider
            label={fr ? 'Appels SAV / mois' : 'SAV calls / month'}
            hint={fr ? '(tickets, emails, appels)' : '(tickets, emails, calls)'}
            value={calls}
            min={50}
            max={2000}
            step={50}
            display={`${calls}`}
            onChange={setCalls}
          />
          <Slider
            label={fr ? 'Durée moyenne par contact' : 'Avg. time per contact'}
            hint=""
            value={duration}
            min={3}
            max={30}
            step={1}
            display={`${duration} min`}
            onChange={setDuration}
          />
          <Slider
            label={fr ? 'Coût horaire d\'un agent' : 'Agent hourly cost'}
            hint={fr ? '(salaire + charges)' : '(salary + overhead)'}
            value={rate}
            min={15}
            max={80}
            step={1}
            display={`${rate} €/h`}
            onChange={setRate}
          />
        </div>

        {/* Divider with current cost */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-happi-border/50" />
          <span className="text-happi-muted text-xs whitespace-nowrap">
            {fr ? `Coût actuel estimé : ${fmt(currentCost)}/mois` : `Current estimated cost: ${fmt(currentCost)}/mo`}
          </span>
          <div className="flex-1 h-px bg-happi-border/50" />
        </div>

        {/* Results grid */}
        <div>
          <p className="text-xs font-semibold text-happi-muted uppercase tracking-wide mb-3">
            {fr ? 'Avec H\'appi (−65 % d\'appels automatisés)' : 'With H\'appi (−65% automated calls)'}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <ResultCard
              icon={<Euro size={16} />}
              value={fmt(moneySavedMonthly)}
              label={fr ? 'économisés / mois' : 'saved / month'}
              highlight
            />
            <ResultCard
              icon={<Clock size={16} />}
              value={`${hoursSaved} h`}
              label={fr ? 'libérées / mois' : 'freed / month'}
            />
            <ResultCard
              icon={<TrendingDown size={16} />}
              value={`${callsAutomated}`}
              label={fr ? 'appels automatisés / mois' : 'automated calls / month'}
              sub="Narvar / Gorgias"
            />
            <ResultCard
              icon={<Euro size={16} />}
              value={fmt(annualSavings)}
              label={fr ? 'économies / an' : 'savings / year'}
              sub={fr ? 'projection 12 mois' : '12-month projection'}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
          <button
            onClick={openContactModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-happi-blue hover:bg-happi-blue/90 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-happi-blue/20"
          >
            {fr ? 'Obtenir mon analyse personnalisée' : 'Get my personalised analysis'}
            <ArrowRight size={15} />
          </button>
          <p className="text-happi-muted text-xs text-center sm:text-left">
            {fr
              ? 'Basé sur les données Narvar, Gorgias et Zendesk 2024'
              : 'Based on Narvar, Gorgias and Zendesk 2024 data'}
          </p>
        </div>
      </div>
    </div>
  );
}
