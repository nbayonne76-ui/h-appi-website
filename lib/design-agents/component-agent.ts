// Component Agent — specialized agent generating UI component specifications.
// Ported 1:1 from microsoft-sales-app's lib/design-agents/component-agent.js.

import type { ComponentAgentResult, ComponentSet, DesignBrief } from './types';

export async function generateComponents(
  brief: Pick<DesignBrief, 'componentTypes' | 'interactionStyle' | 'accessibility'>
): Promise<ComponentAgentResult> {
  const { componentTypes, interactionStyle, accessibility } = brief;
  const components: ComponentSet[] = [];
  const wants = (type: string) => !componentTypes || componentTypes.includes(type);

  if (wants('buttons')) {
    components.push({
      category: 'buttons',
      variants: [
        { id: 'btn_primary', name: 'Primary Button', styles: { padding: '12px 24px', borderRadius: '8px', fontWeight: 600 } },
        { id: 'btn_secondary', name: 'Secondary Button', styles: { padding: '12px 24px', borderRadius: '8px', border: '2px solid var(--color-primary)' } },
        { id: 'btn_ghost', name: 'Ghost Button', styles: { padding: '12px 24px', borderRadius: '8px', fontWeight: 500 } },
      ],
    });
  }

  if (wants('inputs')) {
    components.push({
      category: 'inputs',
      variants: [
        {
          id: 'input_text',
          name: 'Text Input',
          styles: { padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--color-border)' },
          accessibility: { label: true, placeholder: true, ariaDescribedBy: true, errorMessage: true },
        },
      ],
    });
  }

  if (wants('cards')) {
    components.push({
      category: 'cards',
      variants: [
        { id: 'card_elevated', name: 'Elevated Card', styles: { padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' } },
        { id: 'card_outlined', name: 'Outlined Card', styles: { padding: '24px', borderRadius: '12px', border: '1px solid var(--color-border)' } },
        { id: 'card_glass', name: 'Glassmorphic Card', styles: { padding: '24px', borderRadius: '16px', backdropFilter: 'blur(10px)' } },
      ],
    });
  }

  if (wants('navigation')) {
    components.push({
      category: 'navigation',
      variants: [
        { id: 'nav_horizontal', name: 'Horizontal Navigation', styles: { display: 'flex', gap: '8px', padding: '16px 24px' } },
        { id: 'nav_sidebar', name: 'Sidebar Navigation', styles: { width: '280px', padding: '24px 16px' } },
      ],
    });
  }

  if (wants('modals')) {
    components.push({
      category: 'modals',
      variants: [
        {
          id: 'modal_centered',
          name: 'Centered Modal',
          styles: { maxWidth: '600px', padding: '32px', borderRadius: '16px' },
          accessibility: { role: 'dialog', ariaModal: true, focusTrap: true, escapeToClose: true },
        },
      ],
    });
  }

  return {
    agentName: 'ComponentAgent',
    components,
    metadata: {
      interactionStyle,
      accessibility: accessibility || 'WCAG 2.1 AA',
      generatedAt: new Date().toISOString(),
      confidence: 0.91,
    },
  };
}
