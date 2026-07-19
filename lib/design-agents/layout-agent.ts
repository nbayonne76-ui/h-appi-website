// Layout Agent — specialized agent generating layout structures per page type.
// Ported 1:1 from microsoft-sales-app's lib/design-agents/layout-agent.js.

import type { DesignBrief, Layout, LayoutAgentResult } from './types';

function landingLayouts(): Omit<Layout, 'spacing' | 'responsive'>[] {
  return [
    {
      id: 'layout_1',
      name: 'F-Pattern Hero',
      description: 'Classic F-pattern with hero section and features grid',
      structure: {
        header: { type: 'sticky', height: '72px' },
        hero: { type: 'full-width', height: '600px', alignment: 'center' },
        features: { type: 'grid', columns: 3, gap: '24px' },
        cta: { type: 'centered', width: '800px' },
        footer: { type: 'full-width', columns: 4 },
      },
      grid: { columns: 12, maxWidth: '1280px', gutter: '24px' },
    },
    {
      id: 'layout_2',
      name: 'Z-Pattern Conversion',
      description: 'Z-pattern optimized for conversions with split hero',
      structure: {
        header: { type: 'fixed', height: '64px' },
        hero: { type: 'split', leftWidth: '55%', rightWidth: '45%' },
        benefits: { type: 'alternating', sections: 3 },
        social_proof: { type: 'carousel', itemsVisible: 3 },
        cta: { type: 'full-width', height: '400px' },
        footer: { type: 'minimal', height: '200px' },
      },
      grid: { columns: 12, maxWidth: '1440px', gutter: '32px' },
    },
    {
      id: 'layout_3',
      name: 'Card-Based Modern',
      description: 'Modern card-based layout with asymmetric grid',
      structure: {
        header: { type: 'transparent', height: '80px' },
        hero: { type: 'minimal', height: '400px', overlay: true },
        cards: { type: 'masonry', columns: 3, gap: '32px' },
        testimonials: { type: 'slider', height: '300px' },
        footer: { type: 'compact', columns: 3 },
      },
      grid: { columns: 12, maxWidth: '1200px', gutter: '28px' },
    },
  ];
}

function dashboardLayouts(): Omit<Layout, 'spacing' | 'responsive'>[] {
  return [
    {
      id: 'layout_dashboard_1',
      name: 'Classic Sidebar',
      description: 'Traditional dashboard with fixed sidebar navigation',
      structure: {
        sidebar: { type: 'fixed', width: '280px', position: 'left' },
        topbar: { type: 'sticky', height: '64px' },
        content: { type: 'fluid', padding: '24px' },
        widgets: { type: 'grid', columns: 3, gap: '24px' },
      },
      grid: { columns: 12, maxWidth: 'none', gutter: '24px' },
    },
    {
      id: 'layout_dashboard_2',
      name: 'Minimalist Top Nav',
      description: 'Clean dashboard with top navigation and card grid',
      structure: {
        topbar: { type: 'fixed', height: '72px', tabs: true },
        content: { type: 'centered', maxWidth: '1600px', padding: '32px' },
        widgets: { type: 'responsive-grid', columns: 'auto-fit', minWidth: '320px' },
      },
      grid: { columns: 12, maxWidth: '1600px', gutter: '32px' },
    },
  ];
}

function productLayouts(): Omit<Layout, 'spacing' | 'responsive'>[] {
  return [
    {
      id: 'layout_product_1',
      name: 'E-commerce Standard',
      description: 'Classic e-commerce layout with gallery and details',
      structure: {
        header: { type: 'sticky', height: '80px' },
        product: {
          type: 'split',
          gallery: { width: '60%', type: 'lightbox' },
          details: { width: '40%', sticky: true },
        },
        tabs: { type: 'full-width', sections: ['description', 'reviews', 'specs'] },
        recommendations: { type: 'carousel', itemsVisible: 4 },
      },
      grid: { columns: 12, maxWidth: '1440px', gutter: '32px' },
    },
  ];
}

function blogLayouts(): Omit<Layout, 'spacing' | 'responsive'>[] {
  return [
    {
      id: 'layout_blog_1',
      name: 'Magazine Grid',
      description: 'Magazine-style grid with featured article',
      structure: {
        header: { type: 'sticky', height: '64px' },
        featured: { type: 'full-width', height: '500px' },
        articles: { type: 'masonry', columns: 3, gap: '32px' },
        sidebar: { type: 'sticky', width: '300px', position: 'right' },
      },
      grid: { columns: 12, maxWidth: '1280px', gutter: '24px' },
    },
  ];
}

function appLayouts(): Omit<Layout, 'spacing' | 'responsive'>[] {
  return [
    {
      id: 'layout_app_1',
      name: 'SaaS Application',
      description: 'Full-featured SaaS application layout',
      structure: {
        sidebar: { type: 'collapsible', width: '240px', position: 'left' },
        topbar: { type: 'fixed', height: '56px' },
        content: { type: 'fluid', padding: '20px' },
        panels: { type: 'resizable', sections: 2 },
      },
      grid: { columns: 12, maxWidth: 'none', gutter: '20px' },
    },
  ];
}

function responsiveRules(layout: Omit<Layout, 'spacing' | 'responsive'>) {
  return {
    desktop: { minWidth: '1280px', ...layout.structure },
    tablet: { minWidth: '768px', maxWidth: '1279px', adaptations: ['stack_sections', 'reduce_columns'] },
    mobile: { maxWidth: '767px', adaptations: ['single_column', 'collapsible_nav', 'bottom_nav'] },
  };
}

export async function generateLayouts(
  brief: Pick<DesignBrief, 'pageType' | 'contentDensity' | 'targetDevice' | 'userGoals'>
): Promise<LayoutAgentResult> {
  const { pageType, contentDensity, targetDevice } = brief;

  const patterns: Record<string, Omit<Layout, 'spacing' | 'responsive'>[]> = {
    landing: landingLayouts(),
    dashboard: dashboardLayouts(),
    product: productLayouts(),
    blog: blogLayouts(),
    app: appLayouts(),
  };

  const baseLayouts = patterns[pageType] || patterns.landing;

  const densityMultiplier: Record<string, number> = { low: 1.5, medium: 1.0, high: 0.7 };
  const spacingMultiplier = densityMultiplier[contentDensity] ?? 1.0;

  const layouts: Layout[] = baseLayouts.map((layout) => ({
    ...layout,
    spacing: {
      section: `${48 * spacingMultiplier}px`,
      component: `${24 * spacingMultiplier}px`,
      element: `${12 * spacingMultiplier}px`,
    },
    responsive: responsiveRules(layout),
  }));

  return {
    agentName: 'LayoutAgent',
    layouts,
    metadata: {
      pageType,
      contentDensity,
      targetDevice,
      generatedAt: new Date().toISOString(),
      confidence: 0.88,
    },
  };
}
