// Shared types for the multi-agent design engine.
// Ported from the microsoft-sales-app multi-agent UI designer (lib/design-agents/),
// same orchestration logic — parallel specialized agents + weighted consensus ranking.

export type Industry = 'technology' | 'healthcare' | 'finance' | 'retail' | 'education' | 'default';
export type Mood = 'professional' | 'friendly' | 'luxurious' | 'energetic' | 'calm';
export type PageType = 'landing' | 'dashboard' | 'product' | 'blog' | 'app';
export type ContentDensity = 'low' | 'medium' | 'high';
export type TargetDevice = 'desktop' | 'tablet' | 'mobile';
export type BrandPersonality = 'modern' | 'elegant' | 'playful' | 'professional' | 'tech';
export type Readability = 'high' | 'medium' | 'comfortable';

export interface DesignBrief {
  brandContext?: string;
  targetAudience?: string;
  industry: Industry;
  mood: Mood;
  pageType: PageType;
  contentDensity: ContentDensity;
  targetDevice?: TargetDevice;
  userGoals?: string;
  brandPersonality: BrandPersonality;
  readability?: Readability;
  componentTypes?: string[];
  interactionStyle?: string;
  accessibility?: string;
}

export interface ColorScheme {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
  usage: Record<string, string>;
  gradient?: string;
}

export interface Layout {
  id: string;
  name: string;
  description: string;
  structure: Record<string, Record<string, unknown>>;
  grid: { columns: number; maxWidth: string; gutter: string };
  spacing: { section: string; component: string; element: string };
  responsive: Record<string, unknown>;
}

export interface TypographySystem {
  id: string;
  name: string;
  description: string;
  fonts: { primary: string; secondary: string; accent: string };
  scale: Record<string, string>;
  weights: Record<string, number>;
  lineHeight: Record<string, number>;
  letterSpacing: Record<string, string>;
}

export interface ComponentVariant {
  id: string;
  name: string;
  styles: Record<string, unknown>;
  accessibility?: Record<string, unknown>;
}

export interface ComponentSet {
  category: string;
  variants: ComponentVariant[];
}

export interface AgentMetadata {
  generatedAt: string;
  confidence: number;
  [key: string]: unknown;
}

export interface ColorAgentResult { agentName: string; schemes: ColorScheme[]; metadata: AgentMetadata }
export interface LayoutAgentResult { agentName: string; layouts: Layout[]; metadata: AgentMetadata }
export interface TypographyAgentResult { agentName: string; systems: TypographySystem[]; metadata: AgentMetadata }
export interface ComponentAgentResult { agentName: string; components: ComponentSet[]; metadata: AgentMetadata }

export interface DesignPreview {
  css: Record<string, string | undefined>;
  gradient: string | null;
}

export interface DesignOption {
  id: string;
  name: string;
  description: string;
  colorScheme: ColorScheme;
  layout: Layout;
  typography: TypographySystem;
  components: ComponentSet[];
  preview: DesignPreview;
  score: number;
  ranking: {
    industryMatch: number;
    moodAlignment: number;
    usabilityScore: number;
    visualHarmony: number;
    accessibilityScore: number;
  };
}

export interface AgentExecutionTrace {
  agentName: string;
  success: boolean;
  executionTime: number;
  error?: string;
}

export interface OrchestratorResult {
  designs: DesignOption[];
  agentTraces: AgentExecutionTrace[];
  metadata: {
    executionTime: number;
    agentsUsed: number;
    parallelExecution: true;
    designBrief: DesignBrief;
  };
}
