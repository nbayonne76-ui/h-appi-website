'use client';

import { Heart, Shield, Users, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

const commitmentIcons = [Shield, Users, Sparkles];

export default function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-happi-green/10 text-happi-green rounded-full text-sm font-medium mb-4">
            {t('badge')}
          </span>
          <h2 className="text-4xl font-bold text-happi-dark mb-4">
            {t.rich('title', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            {t('subtitle')}
          </p>
        </div>

        {/* Honesty message */}
        <div className="bg-happi-gray rounded-2xl p-8 mb-10 text-center border border-gray-100">
          <Heart className="text-happi-green mx-auto mb-4" size={32} />
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            {t('honesty')}
          </p>
        </div>

        {/* Commitment cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {Array.from({ length: 3 }).map((_, index) => {
            const Icon = commitmentIcons[index];
            return (
              <div
                key={index}
                className="bg-happi-gray rounded-2xl p-6 hover:shadow-md transition-all border border-gray-100"
              >
                <div className="w-12 h-12 bg-happi-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-happi-blue" size={24} />
                </div>
                <h3 className="font-bold text-happi-dark mb-2">
                  {t(`commitments.${index}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`commitments.${index}.description`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <p className="text-center text-happi-blue font-semibold text-lg">
          {t('cta')}
        </p>
      </div>
    </section>
  );
}
