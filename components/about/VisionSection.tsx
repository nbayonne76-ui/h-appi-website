'use client';

import { Sparkles, Eye, Target } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function VisionSection() {
  const t = useTranslations('vision');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Vision */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-happi-yellow/20 rounded-xl flex items-center justify-center">
              <Eye className="text-happi-yellow" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-happi-dark">{t('title')}</h2>
          </div>

          <p className="text-xl font-semibold text-happi-blue mb-6">
            {t('headline')}
          </p>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              {t.rich('paragraph1', {
                strong: (chunks) => <strong className="text-happi-dark">{chunks}</strong>,
              })}
            </p>
            <p>
              {t.rich('paragraph2', {
                strong: (chunks) => <strong className="text-happi-dark">{chunks}</strong>,
              })}
            </p>
            <p>
              {t.rich('paragraph3', {
                strong: (chunks) => <strong className="text-happi-dark">{chunks}</strong>,
              })}
            </p>
          </div>

          <div className="mt-8 bg-gradient-to-r from-happi-blue to-happi-green rounded-2xl p-8 text-white">
            <div className="flex items-start space-x-4">
              <Target className="flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold mb-2">{t('objective2030.title')}</h3>
                <p className="text-white/90 leading-relaxed">
                  {t.rich('objective2030.description', {
                    bold: (chunks) => <span className="font-bold text-white">{chunks}</span>,
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-happi-blue/10 rounded-xl flex items-center justify-center">
              <Sparkles className="text-happi-blue" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-happi-dark">
              {t('missionTitle')}
            </h2>
          </div>

          <p className="text-xl font-semibold text-happi-blue mb-6">
            {t('missionHeadline')}
          </p>

          <p className="text-gray-600 leading-relaxed">
            {t('missionIntro')}
          </p>
        </div>
      </div>
    </section>
  );
}
