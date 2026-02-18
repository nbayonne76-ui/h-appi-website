'use client';

import { useTranslations } from 'next-intl';

export default function PricingStrategy() {
  const t = useTranslations('pricingStrategy');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-happi-yellow/20 text-white rounded-full text-sm font-medium mb-4">
            {t('badge')}
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            {t.rich('title', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
        </div>

        {/* Problem */}
        <div className="bg-red-500/10 rounded-2xl p-8 border border-red-100 mb-12">
          <h3 className="text-xl font-bold text-red-700 mb-4">
            {t('problem.title')}
          </h3>
          <p className="text-happi-muted mb-4">
            {t('problem.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-sm text-happi-muted">{t(`problem.items.${i}`)}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-red-600 font-medium">
            {t('problem.result')}
          </p>
        </div>

        {/* Solution */}
        <h3 className="text-2xl font-bold text-white mb-8">
          {t('solution.title')}
        </h3>

        <div className="space-y-4 mb-16">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-happi-darker rounded-xl p-6 border border-happi-border"
            >
              <div className="flex items-start space-x-4">
                <span className="text-2xl font-bold text-happi-blue/20">
                  {i + 1}.
                </span>
                <div>
                  <h4 className="font-bold text-white mb-2">
                    {t(`solution.pillars.${i}.title`)}
                  </h4>
                  <p className="text-happi-muted text-sm mb-2">
                    {t(`solution.pillars.${i}.description`)}
                  </p>
                  <p className="text-happi-green font-semibold text-sm">
                    {t(`solution.pillars.${i}.saving`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <h3 className="text-2xl font-bold text-white mb-6">
          {t('comparison.title')}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-happi-blue/20">
                <th className="text-left py-4 px-4 text-white">{t('comparison.colType')}</th>
                <th className="text-center py-4 px-4 text-happi-green font-bold">{t('comparison.colSavings')}</th>
                <th className="text-left py-4 px-4 text-white">{t('comparison.colBenefit')}</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="border-b border-happi-border/50 hover:bg-happi-darker/50">
                  <td className="py-4 px-4 text-white font-medium">{t(`comparison.rows.${i}.type`)}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="bg-happi-green/10 text-happi-green font-bold px-3 py-1 rounded-full text-sm">
                      {t(`comparison.rows.${i}.savings`)}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-happi-muted">{t(`comparison.rows.${i}.benefit`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-happi-muted text-sm italic text-center">
          {t('comparison.footnote')}
        </p>
      </div>
    </section>
  );
}
