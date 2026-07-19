// UI Designer Orchestrator — runs 4 specialized agents in parallel, aggregates their
// output into complete design combinations, then ranks them with weighted consensus
// scoring. Ported 1:1 from microsoft-sales-app's ui-designer-orchestrator.js.

import { generateColorSchemes } from './color-agent';
import { generateLayouts } from './layout-agent';
import { generateTypographySystems } from './typography-agent';
import { generateComponents } from './component-agent';
import type {
  AgentExecutionTrace,
  ColorScheme,
  DesignBrief,
  DesignOption,
  Layout,
  OrchestratorResult,
  TypographySystem,
} from './types';

async function executeWithTracking<T>(agentName: string, fn: () => Promise<T>): Promise<{ trace: AgentExecutionTrace; result?: T }> {
  const start = performance.now();
  try {
    const result = await fn();
    return { trace: { agentName, success: true, executionTime: performance.now() - start }, result };
  } catch (error) {
    return {
      trace: { agentName, success: false, executionTime: performance.now() - start, error: (error as Error).message },
    };
  }
}

const DESIGN_NAMES = [
  'Modern Professional', 'Classic Elegant', 'Bold Contemporary',
  'Minimal Refined', 'Dynamic Innovative', 'Sophisticated Timeless',
  'Fresh Modern', 'Balanced Harmony', 'Striking Impact',
];

function designName(colorIdx: number, layoutIdx: number, typoIdx: number): string {
  return DESIGN_NAMES[(colorIdx * 3 + layoutIdx * 2 + typoIdx) % DESIGN_NAMES.length];
}

function designDescription(color: ColorScheme, layout: Layout, typo: TypographySystem): string {
  return `A ${typo.name.toLowerCase()} design featuring ${color.name.toLowerCase()} colors and ${layout.name.toLowerCase()} layout. ${color.description} ${layout.description}`.trim();
}

function previewData(color: ColorScheme, layout: Layout, typo: TypographySystem) {
  return {
    css: {
      '--color-primary': color.colors.primary,
      '--color-secondary': color.colors.secondary,
      '--color-accent': color.colors.accent,
      '--color-background': color.colors.background,
      '--color-surface': color.colors.surface,
      '--color-text': color.colors.text,
      '--color-text-secondary': color.colors.textSecondary,
      '--font-primary': typo.fonts.primary,
      '--font-secondary': typo.fonts.secondary,
      '--font-size-h1': typo.scale.h1,
      '--font-size-body': typo.scale.body,
      '--spacing-section': layout.spacing.section,
      '--border-radius': '8px',
    },
    gradient: color.gradient || null,
  };
}

const INDUSTRY_KEYWORDS: Record<string, string[]> = {
  technology: ['modern', 'bold', 'innovative'],
  healthcare: ['trust', 'calm', 'professional'],
  finance: ['professional', 'secure', 'elegant'],
  retail: ['energetic', 'friendly', 'vibrant'],
  education: ['accessible', 'friendly', 'clear'],
};

function scoreIndustryMatch(design: Omit<DesignOption, 'score' | 'ranking'>, brief: DesignBrief): number {
  const keywords = INDUSTRY_KEYWORDS[brief.industry] || [];
  if (keywords.length === 0) return 0.7;
  const desc = design.description.toLowerCase();
  const matches = keywords.filter((k) => desc.includes(k)).length;
  return Math.min(matches / keywords.length, 1.0);
}

function scoreMoodAlignment(design: Omit<DesignOption, 'score' | 'ranking'>, brief: DesignBrief): number {
  const moodScores: Record<string, number> = {
    professional: design.colorScheme.name.includes('Professional') ? 1.0 : 0.7,
    friendly: design.colorScheme.name.includes('Subtle') ? 1.0 : 0.7,
    luxurious: design.typography.name.includes('Classic') ? 1.0 : 0.7,
    energetic: design.colorScheme.name.includes('Bold') ? 1.0 : 0.7,
    calm: design.colorScheme.name.includes('Dark') ? 0.5 : 0.9,
  };
  return moodScores[brief.mood] ?? 0.7;
}

function scoreUsability(design: Omit<DesignOption, 'score' | 'ranking'>, brief: DesignBrief): number {
  let score = 0.8;
  if (design.layout.name.includes('Classic') || design.layout.name.includes('Standard')) score += 0.1;
  if (brief.contentDensity === 'high' && design.layout.name.includes('Compact')) score += 0.1;
  return Math.min(score, 1.0);
}

function scoreVisualHarmony(design: Omit<DesignOption, 'score' | 'ranking'>): number {
  let score = 0.7;
  if (design.typography.name.includes('Modern') && design.layout.name.includes('Modern')) score += 0.15;
  if (design.typography.name.includes('Classic') && design.layout.name.includes('Classic')) score += 0.15;
  return Math.min(score, 1.0);
}

function scoreAccessibility(): number {
  return 0.9;
}

const WEIGHTS = { industryMatch: 0.25, moodAlignment: 0.2, usabilityScore: 0.2, visualHarmony: 0.2, accessibilityScore: 0.15 };

export async function generateDesignOptions(brief: DesignBrief): Promise<OrchestratorResult> {
  const start = performance.now();

  const [colorRes, layoutRes, typoRes, componentRes] = await Promise.all([
    executeWithTracking('color', () => generateColorSchemes(brief)),
    executeWithTracking('layout', () => generateLayouts(brief)),
    executeWithTracking('typography', () => generateTypographySystems(brief)),
    executeWithTracking('component', () => generateComponents(brief)),
  ]);

  const traces = [colorRes.trace, layoutRes.trace, typoRes.trace, componentRes.trace];

  const colorSchemes = colorRes.result?.schemes ?? [];
  const layouts = layoutRes.result?.layouts ?? [];
  const typographySystems = typoRes.result?.systems ?? [];
  const componentSets = componentRes.result?.components ?? [];

  const maxCombinations = Math.min(9, colorSchemes.length * layouts.length * typographySystems.length);
  const combos: Omit<DesignOption, 'score' | 'ranking'>[] = [];
  let count = 0;

  for (let c = 0; c < colorSchemes.length && count < maxCombinations; c++) {
    for (let l = 0; l < layouts.length && count < maxCombinations; l++) {
      for (let t = 0; t < typographySystems.length && count < maxCombinations; t++) {
        combos.push({
          id: `design_${count + 1}`,
          name: designName(c, l, t),
          description: designDescription(colorSchemes[c], layouts[l], typographySystems[t]),
          colorScheme: colorSchemes[c],
          layout: layouts[l],
          typography: typographySystems[t],
          components: componentSets,
          preview: previewData(colorSchemes[c], layouts[l], typographySystems[t]),
        });
        count++;
      }
    }
  }

  const designs: DesignOption[] = combos.map((design) => {
    const ranking = {
      industryMatch: Math.round(scoreIndustryMatch(design, brief) * 100),
      moodAlignment: Math.round(scoreMoodAlignment(design, brief) * 100),
      usabilityScore: Math.round(scoreUsability(design, brief) * 100),
      visualHarmony: Math.round(scoreVisualHarmony(design) * 100),
      accessibilityScore: Math.round(scoreAccessibility() * 100),
    };
    const score = Math.round(
      (ranking.industryMatch / 100) * WEIGHTS.industryMatch * 100 +
      (ranking.moodAlignment / 100) * WEIGHTS.moodAlignment * 100 +
      (ranking.usabilityScore / 100) * WEIGHTS.usabilityScore * 100 +
      (ranking.visualHarmony / 100) * WEIGHTS.visualHarmony * 100 +
      (ranking.accessibilityScore / 100) * WEIGHTS.accessibilityScore * 100
    );
    return { ...design, score, ranking };
  });

  designs.sort((a, b) => b.score - a.score);

  return {
    designs,
    agentTraces: traces,
    metadata: {
      executionTime: Math.round(performance.now() - start),
      agentsUsed: 4,
      parallelExecution: true,
      designBrief: brief,
    },
  };
}
