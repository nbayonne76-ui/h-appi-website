'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, LayoutGrid, Type, Boxes, ArrowRight, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';
import { generateDesignOptions } from '@/lib/design-agents/orchestrator';
import type {
  AgentExecutionTrace,
  BrandPersonality,
  ContentDensity,
  DesignBrief,
  DesignOption,
  Industry,
  Mood,
  PageType,
} from '@/lib/design-agents/types';

// ─── Copy ───────────────────────────────────────────────────────────────────

const AGENTS = [
  { key: 'color', icon: Palette, colorFr: 'Couleur', colorEn: 'Color', labelFr: 'Palettes & contraste', labelEn: 'Palettes & contrast' },
  { key: 'layout', icon: LayoutGrid, colorFr: 'Mise en page', colorEn: 'Layout', labelFr: 'Structure & grille', labelEn: 'Structure & grid' },
  { key: 'typography', icon: Type, colorFr: 'Typographie', colorEn: 'Typography', labelFr: 'Polices & échelle', labelEn: 'Fonts & scale' },
  { key: 'component', icon: Boxes, colorFr: 'Composants', colorEn: 'Components', labelFr: 'Boutons, cartes, nav', labelEn: 'Buttons, cards, nav' },
] as const;

const INDUSTRIES: { value: Industry; fr: string; en: string }[] = [
  { value: 'technology', fr: 'Technologie', en: 'Technology' },
  { value: 'healthcare', fr: 'Santé', en: 'Healthcare' },
  { value: 'finance', fr: 'Finance', en: 'Finance' },
  { value: 'retail', fr: 'Commerce / Retail', en: 'Retail' },
  { value: 'education', fr: 'Éducation', en: 'Education' },
  { value: 'default', fr: 'Autre / général', en: 'Other / general' },
];

const MOODS: { value: Mood; fr: string; en: string }[] = [
  { value: 'professional', fr: 'Professionnel', en: 'Professional' },
  { value: 'friendly', fr: 'Chaleureux', en: 'Friendly' },
  { value: 'luxurious', fr: 'Premium', en: 'Luxurious' },
  { value: 'energetic', fr: 'Énergique', en: 'Energetic' },
  { value: 'calm', fr: 'Apaisé', en: 'Calm' },
];

const PAGE_TYPES: { value: PageType; fr: string; en: string }[] = [
  { value: 'landing', fr: 'Landing page', en: 'Landing page' },
  { value: 'dashboard', fr: 'Dashboard', en: 'Dashboard' },
  { value: 'product', fr: 'Page produit', en: 'Product page' },
  { value: 'blog', fr: 'Blog', en: 'Blog' },
  { value: 'app', fr: 'Application SaaS', en: 'SaaS app' },
];

const PERSONALITIES: { value: BrandPersonality; fr: string; en: string }[] = [
  { value: 'modern', fr: 'Moderne', en: 'Modern' },
  { value: 'elegant', fr: 'Élégant', en: 'Elegant' },
  { value: 'playful', fr: 'Ludique', en: 'Playful' },
  { value: 'professional', fr: 'Corporate', en: 'Corporate' },
  { value: 'tech', fr: 'Tech / dev', en: 'Tech / dev' },
];

const DENSITIES: { value: ContentDensity; fr: string; en: string }[] = [
  { value: 'low', fr: 'Aéré', en: 'Spacious' },
  { value: 'medium', fr: 'Équilibré', en: 'Balanced' },
  { value: 'high', fr: 'Dense', en: 'Dense' },
];

const RANKING_LABELS: { key: keyof DesignOption['ranking']; fr: string; en: string }[] = [
  { key: 'industryMatch', fr: 'Adéquation secteur', en: 'Industry match' },
  { key: 'moodAlignment', fr: 'Alignement ton', en: 'Mood alignment' },
  { key: 'usabilityScore', fr: 'Utilisabilité', en: 'Usability' },
  { key: 'visualHarmony', fr: 'Harmonie visuelle', en: 'Visual harmony' },
  { key: 'accessibilityScore', fr: 'Accessibilité', en: 'Accessibility' },
];

// ─── Select field ───────────────────────────────────────────────────────────

function Field({
  label, value, onChange, options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-happi-muted">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-happi-dark border border-happi-border rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:border-happi-blue/60 transition-colors appearance-none cursor-pointer"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  );
}

// ─── Agent run visualisation ────────────────────────────────────────────────

function AgentRunViz({ fr, traces, running }: { fr: boolean; traces: AgentExecutionTrace[] | null; running: boolean }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {AGENTS.map((agent, i) => {
        const trace = traces?.find((t) => t.agentName === agent.key);
        const done = !!trace;
        const Icon = agent.icon;
        return (
          <motion.div
            key={agent.key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="glass-card rounded-xl p-4 flex flex-col gap-2 border border-happi-border"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-happi-blue/10 flex items-center justify-center text-happi-blue">
                <Icon size={15} />
              </div>
              {running && !done && <Loader2 size={14} className="text-happi-muted animate-spin" />}
              {done && <CheckCircle2 size={14} className="text-emerald-400" />}
            </div>
            <div>
              <div className="text-xs font-semibold text-white">{fr ? agent.colorFr : agent.colorEn}</div>
              <div className="text-[10px] text-happi-muted mt-0.5">{fr ? agent.labelFr : agent.labelEn}</div>
            </div>
            {done && (
              <div className="text-[10px] font-mono text-emerald-400">
                {trace.executionTime < 1 ? '<1ms' : `${trace.executionTime.toFixed(1)}ms`}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

// ─── Live design preview mockup ─────────────────────────────────────────────

function DesignPreview({ design, fr }: { design: DesignOption; fr: boolean }) {
  const css = design.preview.css as Record<string, string>;
  return (
    <div
      className="rounded-2xl overflow-hidden border border-happi-border"
      style={{ background: css['--color-background'], fontFamily: css['--font-primary'] }}
    >
      {/* mini header */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ background: css['--color-surface'], borderBottom: `1px solid ${css['--color-primary']}22` }}
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md" style={{ background: css['--color-primary'] }} />
          <span className="text-xs font-semibold" style={{ color: css['--color-text'] }}>Brand</span>
        </div>
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <span key={i} className="text-[10px]" style={{ color: css['--color-text-secondary'] }}>—</span>
          ))}
        </div>
      </div>

      {/* hero */}
      <div
        className="px-6 py-8 text-center"
        style={{ background: design.preview.gradient || undefined }}
      >
        <div
          className="font-bold mb-2"
          style={{
            color: design.preview.gradient ? '#fff' : css['--color-text'],
            fontSize: `clamp(20px, 3vw, ${css['--font-size-h1']})`,
            letterSpacing: '-0.01em',
          }}
        >
          {fr ? 'Votre produit, présenté avec impact' : 'Your product, presented with impact'}
        </div>
        <div
          className="text-xs mb-4 max-w-sm mx-auto"
          style={{ color: design.preview.gradient ? 'rgba(255,255,255,0.85)' : css['--color-text-secondary'] }}
        >
          {fr ? 'Généré en direct par 4 agents IA spécialisés, en parallèle.' : 'Generated live by 4 specialized AI agents, in parallel.'}
        </div>
        <div className="flex items-center justify-center gap-2">
          <span
            className="text-[11px] font-semibold px-4 py-2 rounded-lg"
            style={{ background: design.preview.gradient ? '#fff' : css['--color-primary'], color: design.preview.gradient ? css['--color-primary'] : '#fff' }}
          >
            {fr ? 'Commencer' : 'Get started'}
          </span>
          <span
            className="text-[11px] font-semibold px-4 py-2 rounded-lg border"
            style={{ borderColor: design.preview.gradient ? 'rgba(255,255,255,0.5)' : `${css['--color-primary']}55`, color: design.preview.gradient ? '#fff' : css['--color-primary'] }}
          >
            {fr ? 'En savoir plus' : 'Learn more'}
          </span>
        </div>
      </div>

      {/* feature cards */}
      <div className="grid grid-cols-3 gap-2 px-5 py-5" style={{ background: css['--color-background'] }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-lg p-3"
            style={{ background: css['--color-surface'], border: `1px solid ${css['--color-primary']}18` }}
          >
            <div className="w-4 h-4 rounded mb-2" style={{ background: css['--color-accent'] }} />
            <div className="h-1.5 rounded-full w-3/4 mb-1.5" style={{ background: css['--color-text-secondary'], opacity: 0.35 }} />
            <div className="h-1.5 rounded-full w-1/2" style={{ background: css['--color-text-secondary'], opacity: 0.25 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Score bars ─────────────────────────────────────────────────────────────

function ScoreBars({ design, fr }: { design: DesignOption; fr: boolean }) {
  return (
    <div className="flex flex-col gap-2.5">
      {RANKING_LABELS.map((item) => {
        const value = design.ranking[item.key];
        return (
          <div key={item.key}>
            <div className="flex items-center justify-between text-[10px] mb-1">
              <span className="text-happi-muted">{fr ? item.fr : item.en}</span>
              <span className="text-white font-semibold">{value}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-happi-blue"
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────

export default function DesignStudio({ fr }: { fr: boolean }) {
  const [industry, setIndustry] = useState<Industry>('technology');
  const [mood, setMood] = useState<Mood>('professional');
  const [pageType, setPageType] = useState<PageType>('landing');
  const [personality, setPersonality] = useState<BrandPersonality>('modern');
  const [density, setDensity] = useState<ContentDensity>('medium');

  const [running, setRunning] = useState(false);
  const [traces, setTraces] = useState<AgentExecutionTrace[] | null>(null);
  const [designs, setDesigns] = useState<DesignOption[] | null>(null);
  const [selected, setSelected] = useState<DesignOption | null>(null);
  const [execTime, setExecTime] = useState(0);

  async function runAgents() {
    setRunning(true);
    setTraces(null);
    setDesigns(null);
    setSelected(null);

    const brief: DesignBrief = {
      industry, mood, pageType, brandPersonality: personality, contentDensity: density,
    };

    const result = await generateDesignOptions(brief);

    // Stagger the reveal for readability — the agents genuinely run in parallel
    // (traces carry the real per-agent timings), we just pace the UI reveal.
    for (let i = 0; i < result.agentTraces.length; i++) {
      await new Promise((r) => setTimeout(r, 220));
      setTraces((prev) => [...(prev ?? []), result.agentTraces[i]]);
    }

    await new Promise((r) => setTimeout(r, 200));
    setDesigns(result.designs);
    setSelected(result.designs[0]);
    setExecTime(result.metadata.executionTime);
    setRunning(false);
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Brief form */}
      <div className="glass-card rounded-2xl p-6 border border-happi-border">
        <div className="flex items-center gap-2 mb-5">
          <Sparkles size={16} className="text-happi-blue" />
          <h3 className="text-sm font-bold text-white">
            {fr ? 'Votre brief design' : 'Your design brief'}
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-5">
          <Field label={fr ? 'Secteur' : 'Industry'} value={industry} onChange={(v) => setIndustry(v as Industry)}
            options={INDUSTRIES.map((o) => ({ value: o.value, label: fr ? o.fr : o.en }))} />
          <Field label={fr ? 'Ton' : 'Mood'} value={mood} onChange={(v) => setMood(v as Mood)}
            options={MOODS.map((o) => ({ value: o.value, label: fr ? o.fr : o.en }))} />
          <Field label={fr ? 'Type de page' : 'Page type'} value={pageType} onChange={(v) => setPageType(v as PageType)}
            options={PAGE_TYPES.map((o) => ({ value: o.value, label: fr ? o.fr : o.en }))} />
          <Field label={fr ? 'Personnalité' : 'Personality'} value={personality} onChange={(v) => setPersonality(v as BrandPersonality)}
            options={PERSONALITIES.map((o) => ({ value: o.value, label: fr ? o.fr : o.en }))} />
          <Field label={fr ? 'Densité' : 'Density'} value={density} onChange={(v) => setDensity(v as ContentDensity)}
            options={DENSITIES.map((o) => ({ value: o.value, label: fr ? o.fr : o.en }))} />
        </div>
        <motion.button
          onClick={runAgents}
          disabled={running}
          whileHover={{ scale: running ? 1 : 1.01 }}
          whileTap={{ scale: running ? 1 : 0.98 }}
          className="w-full py-3 rounded-xl text-sm font-bold text-white bg-happi-blue hover:bg-happi-blue/90 disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
        >
          {running ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              {fr ? 'Les 4 agents travaillent en parallèle…' : 'The 4 agents are working in parallel…'}
            </>
          ) : (
            <>
              {fr ? 'Lancer les agents' : 'Run the agents'}
              <ArrowRight size={15} />
            </>
          )}
        </motion.button>
      </div>

      {/* Agent execution viz */}
      <AnimatePresence>
        {(running || traces) && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AgentRunViz fr={fr} traces={traces} running={running} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {designs && selected && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="text-xs text-happi-muted">
                {fr
                  ? `${designs.length} designs générés et classés en ${execTime < 1 ? '<1' : execTime}ms — orchestration parallèle réelle, pas simulée.`
                  : `${designs.length} designs generated and ranked in ${execTime < 1 ? '<1' : execTime}ms — real parallel orchestration, not simulated.`}
              </div>
            </div>

            <div className="grid lg:grid-cols-[1fr,280px] gap-6">
              {/* Main preview */}
              <div className="flex flex-col gap-4">
                <TiltCard intensity={2}>
                  <DesignPreview design={selected} fr={fr} />
                </TiltCard>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">{selected.name}</div>
                    <div className="text-[11px] text-happi-muted mt-0.5">
                      {selected.colorScheme.name} · {selected.layout.name} · {selected.typography.name}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">{selected.score}</div>
                    <div className="text-[10px] text-happi-muted">{fr ? 'score consensus' : 'consensus score'}</div>
                  </div>
                </div>
                <ScoreBars design={selected} fr={fr} />
              </div>

              {/* Other ranked options */}
              <div className="flex flex-col gap-2">
                <div className="text-[10px] font-semibold text-happi-muted uppercase tracking-wide mb-1">
                  {fr ? 'Autres combinaisons classées' : 'Other ranked combinations'}
                </div>
                {designs.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setSelected(d)}
                    className={`flex items-center gap-2.5 rounded-xl p-2.5 border text-left transition-colors ${
                      d.id === selected.id ? 'border-happi-blue/50 bg-happi-blue/5' : 'border-happi-border hover:border-white/20'
                    }`}
                  >
                    <div className="flex -space-x-1 flex-shrink-0">
                      {[d.colorScheme.colors.primary, d.colorScheme.colors.secondary, d.colorScheme.colors.accent].map((c, i) => (
                        <span key={i} className="w-4 h-4 rounded-full border-2 border-happi-dark" style={{ background: c }} />
                      ))}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-white truncate">{d.name}</div>
                      <div className="text-[10px] text-happi-muted truncate">{d.typography.name}</div>
                    </div>
                    <div className="text-xs font-bold text-happi-blue flex-shrink-0">{d.score}</div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
