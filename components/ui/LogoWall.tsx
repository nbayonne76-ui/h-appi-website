'use client';

// Infinite two-row marquee showing client sector icons.
// Row 1 goes left, Row 2 goes right — creates a premium layered feel.

const ROW_1 = [
  { icon: '⚖️', label: 'Notariat' },
  { icon: '🏥', label: 'Santé' },
  { icon: '🏠', label: 'Immobilier' },
  { icon: '📊', label: 'Comptabilité' },
  { icon: '🛒', label: 'E-commerce' },
  { icon: '🏛️', label: 'Architecture' },
  { icon: '💼', label: 'Recouvrement' },
  { icon: '👥', label: 'RH' },
];

const ROW_2 = [
  { icon: '💻', label: 'Tech & SaaS' },
  { icon: '🎓', label: 'Formation' },
  { icon: '🏨', label: 'Hôtellerie' },
  { icon: '📞', label: 'Centre d\'appels' },
  { icon: '🏪', label: 'Commerce' },
  { icon: '🔬', label: 'Recherche' },
  { icon: '✈️', label: 'Tourisme' },
  { icon: '🏗️', label: 'BTP' },
];

function MarqueeRow({ items, reverse = false }: { items: typeof ROW_1; reverse?: boolean }) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2" aria-hidden="true">
      <div
        className="flex gap-4"
        style={{
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} 28s linear infinite`,
          width: 'max-content',
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-card border border-happi-border/60 flex-shrink-0 hover:border-happi-blue/30 transition-colors cursor-default"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-medium text-happi-muted whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoWall({ fr }: { fr?: boolean }) {
  return (
    <section className="py-16 px-0 overflow-hidden border-y border-happi-border bg-happi-darker relative">
      <div className="absolute inset-0 bg-gradient-to-r from-happi-darker via-transparent to-happi-darker z-10 pointer-events-none" />
      <div className="text-center mb-8 px-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-happi-muted/60">
          {fr ? 'Secteurs couverts' : 'Industries served'}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <MarqueeRow items={ROW_1} />
        <MarqueeRow items={ROW_2} reverse />
      </div>
    </section>
  );
}
