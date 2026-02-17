'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

const FAQ_COUNT = 7;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = useTranslations('faq');

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-gray">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-happi-blue/10 text-happi-blue rounded-full text-sm font-medium mb-4">
            {t('badge')}
          </span>
          <h2 className="text-4xl font-bold text-happi-dark mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="space-y-3">
          {Array.from({ length: FAQ_COUNT }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-happi-dark pr-4">
                  {t(`items.${index}.question`)}
                </span>
                <ChevronDown
                  className={`text-happi-blue flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {t(`items.${index}.answer`)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
