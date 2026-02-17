'use client';

import { ArrowDown, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

const phaseColors = ['bg-happi-blue', 'bg-happi-green', 'bg-happi-yellow', 'bg-gradient-to-r from-happi-blue to-happi-green'];

export default function UpsellModel() {
  const t = useTranslations('upsellModel');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-gray">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-happi-blue/10 text-happi-blue rounded-full text-sm font-medium mb-4">
            {t('badge')}
          </span>
          <h2 className="text-4xl font-bold text-happi-dark mb-4">
            {t.rich('title', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
          <p className="text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-4 mb-16">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-14 h-14 ${phaseColors[index]} rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-happi-dark">
                      {t(`phases.${index}.title`)}
                    </h3>
                    <span className="text-sm text-happi-blue font-medium">
                      {t(`phases.${index}.subtitle`)}
                    </span>
                    <p className="text-gray-600 leading-relaxed mt-2">
                      {t(`phases.${index}.description`)}
                    </p>
                  </div>
                </div>
              </div>
              {index < 3 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="text-happi-blue/30" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Concrete Example */}
        <div className="bg-white rounded-2xl p-8 border border-happi-blue/20 mb-16">
          <h3 className="font-bold text-happi-dark mb-4">
            {t('example.title')}
          </h3>
          <div className="bg-happi-gray rounded-xl p-6 italic text-gray-600">
            {t.rich('example.content', {
              strong: (chunks) => <strong className="text-happi-dark not-italic">{chunks}</strong>,
            })}
          </div>
        </div>

        {/* Win-Win */}
        <h3 className="text-2xl font-bold text-happi-dark mb-8 text-center">
          {t('winWin.title')}
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-green-100">
            <h4 className="text-lg font-bold text-happi-green mb-4">
              {t('winWin.forYou.title')}
            </h4>
            <ul className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle
                    className="text-happi-green mt-0.5 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-600">{t(`winWin.forYou.items.${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-blue-100">
            <h4 className="text-lg font-bold text-happi-blue mb-4">
              {t('winWin.forUs.title')}
            </h4>
            <ul className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle
                    className="text-happi-blue mt-0.5 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-600">{t(`winWin.forUs.items.${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
