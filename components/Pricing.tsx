'use client';

import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { useTranslations } from 'next-intl';

const monthlyPrices = [0, 49, 149, null];
const yearlyPrices = [0, 470, 1430, null];
const featureCounts = [5, 5, 6, 6];
const popularIndex = 2;

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const t = useTranslations('pricing');

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-happi-yellow/20 text-happi-dark rounded-full text-sm font-medium mb-4">
            {t('badge')}
          </span>
          <h2 className="text-4xl font-bold text-happi-dark mb-4">
            {t.rich('title', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Toggle Annual/Monthly */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span
            className={`font-medium ${!isYearly ? 'text-happi-dark' : 'text-gray-400'}`}
          >
            {t('monthly')}
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isYearly ? 'bg-happi-green' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                isYearly ? 'translate-x-7' : 'translate-x-0.5'
              }`}
            />
          </button>
          <span
            className={`font-medium ${isYearly ? 'text-happi-dark' : 'text-gray-400'}`}
          >
            {t('yearly')}
          </span>
          {isYearly && (
            <span className="bg-happi-green/10 text-happi-green text-sm font-medium px-3 py-1 rounded-full">
              {t('discount')}
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => {
            const isPopular = i === popularIndex;
            const monthlyPrice = monthlyPrices[i];
            const yearlyPrice = yearlyPrices[i];

            return (
              <div
                key={i}
                className={`relative bg-white rounded-2xl p-8 transition-all hover:shadow-lg ${
                  isPopular
                    ? 'border-2 border-happi-blue shadow-lg scale-105'
                    : 'border border-gray-200'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-happi-blue text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center">
                    <Star size={14} className="mr-1" />
                    {t('popular')}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-happi-dark">{t(`plans.${i}.name`)}</h3>
                  <p className="text-gray-500 text-sm mt-1">{t(`plans.${i}.description`)}</p>
                </div>

                <div className="mb-6">
                  {monthlyPrice !== null ? (
                    <>
                      <span className="text-4xl font-bold text-happi-dark">
                        {isYearly
                          ? Math.round(yearlyPrice! / 12)
                          : monthlyPrice}
                        &euro;
                      </span>
                      <span className="text-gray-500"> {t('perMonth')}</span>
                      {isYearly && yearlyPrice! > 0 && (
                        <div className="text-sm text-happi-green mt-1">
                          {t('billedYearly', { price: String(yearlyPrice) })}
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-happi-dark">
                      {t('customPrice')}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {Array.from({ length: featureCounts[i] }).map((_, j) => (
                    <li key={j} className="flex items-start space-x-3">
                      <Check
                        className="text-happi-green mt-0.5 flex-shrink-0"
                        size={18}
                      />
                      <span className="text-gray-600 text-sm">{t(`plans.${i}.features.${j}`)}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#demo"
                  className={`block w-full text-center py-3 rounded-lg font-medium transition-all ${
                    isPopular
                      ? 'bg-happi-blue text-white hover:bg-opacity-90 hover:shadow-lg'
                      : 'border-2 border-happi-blue text-happi-blue hover:bg-happi-blue hover:text-white'
                  }`}
                >
                  {t(`plans.${i}.cta`)}
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          {t('taxNote')}
        </p>
      </div>
    </section>
  );
}
