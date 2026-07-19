// Typography Agent — specialized agent generating typographic systems.
// Ported 1:1 from microsoft-sales-app's lib/design-agents/typography-agent.js.

import type { DesignBrief, TypographyAgentResult, TypographySystem } from './types';

const FONT_PAIRINGS: Record<string, TypographySystem['fonts']> = {
  modern: { primary: 'Inter, system-ui, sans-serif', secondary: 'Roboto, sans-serif', accent: 'Space Grotesk, monospace' },
  elegant: { primary: 'Playfair Display, serif', secondary: 'Source Sans Pro, sans-serif', accent: 'Cormorant Garamond, serif' },
  playful: { primary: 'Poppins, sans-serif', secondary: 'Nunito, sans-serif', accent: 'Fredoka, sans-serif' },
  professional: { primary: 'IBM Plex Sans, sans-serif', secondary: 'Open Sans, sans-serif', accent: 'IBM Plex Mono, monospace' },
  tech: { primary: 'JetBrains Mono, monospace', secondary: 'Inter, sans-serif', accent: 'Fira Code, monospace' },
};

const WEIGHTS = { light: 300, regular: 400, medium: 500, semibold: 600, bold: 700 };

export async function generateTypographySystems(
  brief: Pick<DesignBrief, 'brandPersonality' | 'readability' | 'targetAudience'>
): Promise<TypographyAgentResult> {
  const { brandPersonality, readability, targetAudience } = brief;
  const baseFonts = FONT_PAIRINGS[brandPersonality] || FONT_PAIRINGS.modern;

  const scaleMultipliers: Record<string, number> = { high: 1.2, medium: 1.0, comfortable: 1.1 };
  const m = scaleMultipliers[readability || 'medium'] ?? 1.0;

  const systems: TypographySystem[] = [
    {
      id: 'typo_1',
      name: 'Modern Scale',
      description: 'Perfect fourth scale with modern proportions',
      fonts: baseFonts,
      scale: {
        h1: `${48 * m}px`, h2: `${38 * m}px`, h3: `${30 * m}px`, h4: `${24 * m}px`,
        h5: `${20 * m}px`, h6: `${16 * m}px`, body: `${16 * m}px`, small: `${14 * m}px`, caption: `${12 * m}px`,
      },
      weights: WEIGHTS,
      lineHeight: { tight: 1.2, normal: 1.5, relaxed: 1.75, loose: 2.0 },
      letterSpacing: { tight: '-0.02em', normal: '0', wide: '0.02em', wider: '0.05em' },
    },
    {
      id: 'typo_2',
      name: 'Classic Harmony',
      description: 'Classic typographic scale with excellent hierarchy',
      fonts: baseFonts,
      scale: {
        h1: `${56 * m}px`, h2: `${42 * m}px`, h3: `${32 * m}px`, h4: `${24 * m}px`,
        h5: `${18 * m}px`, h6: `${16 * m}px`, body: `${16 * m}px`, small: `${14 * m}px`, caption: `${12 * m}px`,
      },
      weights: WEIGHTS,
      lineHeight: { tight: 1.25, normal: 1.6, relaxed: 1.8, loose: 2.0 },
      letterSpacing: { tight: '-0.01em', normal: '0', wide: '0.025em', wider: '0.05em' },
    },
    {
      id: 'typo_3',
      name: 'Compact Efficient',
      description: 'Space-efficient scale for information-dense interfaces',
      fonts: baseFonts,
      scale: {
        h1: `${40 * m}px`, h2: `${32 * m}px`, h3: `${26 * m}px`, h4: `${22 * m}px`,
        h5: `${18 * m}px`, h6: `${16 * m}px`, body: `${15 * m}px`, small: `${13 * m}px`, caption: `${11 * m}px`,
      },
      weights: WEIGHTS,
      lineHeight: { tight: 1.2, normal: 1.45, relaxed: 1.6, loose: 1.8 },
      letterSpacing: { tight: '-0.015em', normal: '0', wide: '0.015em', wider: '0.03em' },
    },
  ];

  return {
    agentName: 'TypographyAgent',
    systems,
    metadata: {
      brandPersonality,
      readability,
      targetAudience,
      generatedAt: new Date().toISOString(),
      confidence: 0.9,
    },
  };
}
