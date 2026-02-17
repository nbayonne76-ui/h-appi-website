'use client';

import { Check, MessageSquare, ArrowRight, Shield, Wrench, Eye, Puzzle, BarChart3, Cpu } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Pricing() {
  const t = useTranslations('pricing');

  return (
    <div>
      {/* Hero Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-gray">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-happi-green/10 text-happi-green rounded-full text-sm font-bold mb-6">
            {t('heroBadge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-happi-dark mb-6">
            {t.rich('heroTitle', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            {t('heroSubtitle')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-happi-blue text-white rounded-xl font-semibold text-lg hover:bg-opacity-90 transition-all hover:shadow-xl"
          >
            {t('heroCta')}
            <ArrowRight className="ml-2" size={20} />
          </a>
          <p className="text-sm text-gray-400 mt-4">{t('heroNote')}</p>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-happi-blue/10 rounded-xl flex items-center justify-center">
                  <MessageSquare className="text-happi-blue" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-happi-dark">{t('implementTitle')}</h3>
              </div>
              <p className="text-lg text-happi-blue font-semibold mb-4">
                {t('implementSubtitle')}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('implementDescription')}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-happi-blue text-white rounded-lg font-medium hover:bg-opacity-90 transition-all hover:shadow-lg"
              >
                {t('implementCta')}
                <ArrowRight className="ml-2" size={18} />
              </a>
            </div>

            <div className="bg-happi-gray rounded-2xl p-8 border border-gray-100">
              <h4 className="font-bold text-happi-dark mb-6 text-lg">
                {t('implementTitle')}
              </h4>
              <ul className="space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-happi-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-happi-green" size={14} />
                    </div>
                    <span className="text-gray-700">{t(`implementItems.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-gray">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-happi-dark mb-3">
              {t('maintenanceTitle')}
            </h3>
            <p className="text-gray-600 text-lg">{t('maintenanceSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Autonomy Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                  <Shield className="text-happi-green" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-happi-dark">{t('autonomy.title')}</h4>
                  <p className="text-gray-500 text-sm">{t('autonomy.description')}</p>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-100">
                <span className="text-3xl font-bold text-happi-green">{t('autonomy.price')}</span>
                <span className="text-gray-500 ml-2">{t('autonomy.priceDetail')}</span>
              </div>

              <ul className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="text-happi-green mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-gray-600 text-sm">{t(`autonomy.features.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Card */}
            <div className="bg-white rounded-2xl p-8 border-2 border-happi-blue shadow-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-happi-blue text-white px-4 py-1 rounded-full text-xs font-semibold">
                Recommandé
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Wrench className="text-happi-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-happi-dark">{t('support.title')}</h4>
                  <p className="text-gray-500 text-sm">{t('support.description')}</p>
                </div>
              </div>

              <div className="mb-2 pb-2">
                <span className="text-3xl font-bold text-happi-dark">{t('support.price')}</span>
                <span className="text-gray-500 ml-1">{t('support.priceDetail')}</span>
              </div>
              <p className="text-xs text-happi-blue mb-6 pb-6 border-b border-gray-100">
                {t('support.priceNote')}
              </p>

              <ul className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="text-happi-blue mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-gray-600 text-sm">{t(`support.features.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <div className="w-14 h-14 bg-happi-yellow/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Eye className="text-happi-yellow" size={28} />
            </div>
            <h3 className="text-3xl font-bold text-happi-dark mb-3">
              {t('transparencyTitle')}
            </h3>
            <p className="text-gray-500 text-lg mb-2">{t('transparencySubtitle')}</p>
          </div>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            {t('transparencyIntro')}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[Puzzle, Puzzle, BarChart3, Cpu].map((Icon, i) => (
              <div
                key={i}
                className="bg-happi-gray rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200">
                    <Icon className="text-happi-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-happi-dark mb-1">
                      {t(`transparencyFactors.${i}.title`)}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t(`transparencyFactors.${i}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-happi-dark font-semibold">
            {t('transparencyConclusion')}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-happi-blue to-happi-green">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            {t('finalCtaTitle')}
          </h3>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            {t('finalCtaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a
              href="mailto:contact@happi.ai"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-happi-blue rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
            >
              {t('finalCtaPrimary')}
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="/a-propos/strategie"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              {t('finalCtaSecondary')}
            </a>
          </div>
          <p className="text-white/70 text-sm">{t('finalCtaNote')}</p>
        </div>
      </section>
    </div>
  );
}
