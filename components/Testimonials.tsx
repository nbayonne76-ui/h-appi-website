'use client';

import { Star, Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-happi-green/10 text-happi-green rounded-full text-sm font-medium mb-4">
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

        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-happi-gray rounded-2xl p-8 relative hover:shadow-md transition-all"
            >
              <Quote
                className="text-happi-blue/10 absolute top-6 right-6"
                size={48}
              />

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="text-happi-yellow fill-happi-yellow"
                    size={18}
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                &ldquo;{t(`items.${index}.content`)}&rdquo;
              </p>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-happi-blue to-happi-green rounded-full flex items-center justify-center text-white font-bold">
                  {t(`items.${index}.avatar`)}
                </div>
                <div>
                  <div className="font-semibold text-happi-dark">
                    {t(`items.${index}.name`)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {t(`items.${index}.role`)}, {t(`items.${index}.company`)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
