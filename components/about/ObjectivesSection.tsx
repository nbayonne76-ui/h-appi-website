'use client';

import { TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

const goalItemCounts = [3, 3, 3, 3];

export default function ObjectivesSection() {
  const t = useTranslations('objectives');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-happi-muted">
            {t('subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {/* Moyen Terme */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-happi-green/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-happi-green" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t('midTerm.title')}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, goalIdx) => (
                <div
                  key={goalIdx}
                  className="bg-happi-darker rounded-xl p-6 border border-happi-border"
                >
                  <h4 className="font-bold text-white mb-4">
                    {t(`midTerm.goals.${goalIdx}.category`)}
                  </h4>
                  <ul className="space-y-3">
                    {Array.from({ length: goalItemCounts[goalIdx] }).map((_, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-3 text-sm"
                      >
                        <svg
                          className="w-5 h-5 text-happi-green mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-happi-muted">{t(`midTerm.goals.${goalIdx}.items.${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
