'use client';

import { useTranslations, useLocale } from 'next-intl';
import { FadeInUp } from '@/components/ui/Animate';

export default function PricingStrategy() {
  const locale = useLocale();
  const fr = locale !== 'en';
  const t = useTranslations('pricingStrategy');

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-happi-dark">
      <div className="max-w-2xl mx-auto text-center">

        <FadeInUp>
          <span className="inline-block px-4 py-2 bg-happi-yellow/10 text-happi-yellow rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-yellow/20">
            {t('badge')}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            {t.rich('title', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1} className="mt-16">
          <p className="text-happi-muted text-xs uppercase tracking-widest mb-3">
            {fr ? 'Chez une agence classique' : 'At a traditional agency'}
          </p>
          <p className="text-2xl md:text-3xl font-bold text-happi-muted mb-12">
            {fr ? 'Seulement 30 à 40% du budget va au vrai développement' : 'Only 30 to 40% of the budget goes to real development'}
          </p>

          <p className="text-happi-muted text-xs uppercase tracking-widest mb-3">
            {fr ? "Chez H'appi" : 'At H\'appi'}
          </p>
          <p className="text-6xl md:text-7xl font-extrabold gradient-text mb-4">
            -50% {fr ? 'à' : 'to'} -75%
          </p>
          <p className="text-happi-muted">
            {fr ? 'moins cher que le marché, à qualité égale.' : 'cheaper than the market, same quality.'}
          </p>
        </FadeInUp>

      </div>
    </section>
  );
}
