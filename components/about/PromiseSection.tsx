'use client';

import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PromiseSection() {
  const t = useTranslations('promise');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          {t('title')}
        </h2>

        <blockquote className="text-xl md:text-2xl font-semibold gradient-text leading-relaxed mb-12 max-w-3xl mx-auto">
          &laquo; {t('quote')} &raquo;
        </blockquote>

        <p className="text-happi-muted mb-8">
          {t('intro')}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-happi-darker rounded-2xl p-6 border border-happi-border"
            >
              <CheckCircle
                className="text-happi-green mx-auto mb-4"
                size={32}
              />
              <h3 className="font-bold text-white mb-2">{t(`questions.${i}.q`)}</h3>
              <p className="text-sm text-happi-muted">{t(`questions.${i}.detail`)}</p>
            </div>
          ))}
        </div>

        <p className="text-white font-semibold text-lg">
          {t('conclusion')}
        </p>
      </div>
    </section>
  );
}
