'use client';

import { useLocale } from 'next-intl';

const items = {
  fr: [
    'Made in France',
    'IA générative',
    'Conforme RGPD',
    'Déploiement en 2 semaines',
    'Support 24/7',
    'API ouverte',
    'Données hébergées en France',
    'Satisfaction client 95%',
    'NLP multilingue',
    'Hybride humain-IA',
  ],
  en: [
    'Made in France',
    'Generative AI',
    'GDPR Compliant',
    '2-week deployment',
    '24/7 Support',
    'Open API',
    'Data hosted in France',
    '95% satisfaction',
    'Multilingual NLP',
    'Human-AI hybrid',
  ],
};

export function Ticker() {
  const locale = useLocale();
  const list = items[locale as 'fr' | 'en'] ?? items.fr;
  // Double the list so the animation loop is seamless (-50% = one full set)
  const doubled = [...list, ...list];

  return (
    <div
      className="overflow-hidden py-3.5 bg-happi-darker border-y border-happi-border"
      aria-hidden="true"
    >
      <div className="ticker-track flex gap-10 w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2.5 text-sm text-happi-muted whitespace-nowrap"
          >
            <span className="w-1 h-1 rounded-full bg-happi-blue/60 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
