'use client';

import { Check, Mail, Star, Info } from 'lucide-react';
import { openContactModal } from '@/components/ui/ContactModal';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { RoiCalculator } from '@/components/pricing/RoiCalculator';

export default function Pricing() {
  const t = useTranslations('pricing');

  return (
    <div className="text-white">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker gradient-bg">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-6 border border-happi-blue/20">
            {t('heroBadge')}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {t.rich('heroTitle', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h1>
          <p className="text-lg text-happi-muted mb-8 max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
          <button
            onClick={openContactModal}
            className="inline-flex items-center px-8 py-3.5 bg-happi-blue text-white rounded-lg hover:bg-happi-blue/90 transition-all hover:shadow-lg hover:shadow-happi-blue/25 font-medium"
          >
            <Mail className="mr-2" size={18} />
            {t('heroCta')}
          </button>
          <p className="text-happi-muted text-sm mt-4">{t('heroNote')}</p>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-blue/20">
              {t('roiBadge')}
            </span>
          </div>
          <RoiCalculator />
        </div>
      </section>

      {/* Implementation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                {t('implementTitle')}
              </h2>
              <p className="text-happi-muted mb-4">
                {t('implementSubtitle')}
              </p>
              <p className="text-happi-muted leading-relaxed mb-8">
                {t('implementDescription')}
              </p>
              <button
                onClick={openContactModal}
                className="inline-flex items-center px-6 py-3 bg-happi-blue text-white rounded-lg hover:bg-happi-blue/90 transition-all font-medium"
              >
                {t('implementCta')}
              </button>
            </div>

            <div className="bg-happi-surface rounded-2xl p-8 border border-happi-border">
              <h3 className="font-semibold mb-6 text-happi-muted text-xs uppercase tracking-wide">
                {t('implementItemsLabel')}
              </h3>
              <ul className="space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-happi-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-happi-green" size={14} />
                    </div>
                    <span className="text-sm">{t(`implementItems.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              {t('maintenanceTitle')}
            </h2>
            <p className="text-happi-muted">{t('maintenanceSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Autonomy */}
            <div className="bg-happi-surface rounded-2xl p-8 border border-happi-border">
              <h3 className="text-xl font-bold mb-2">{t('autonomy.title')}</h3>
              <p className="text-happi-muted text-sm mb-6">{t('autonomy.description')}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-happi-green">{t('autonomy.price')}</span>
                <span className="text-happi-muted text-sm ml-2">{t('autonomy.priceDetail')}</span>
              </div>
              <ul className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <Check className="text-happi-green flex-shrink-0" size={16} />
                    <span className="text-sm text-happi-muted">{t(`autonomy.features.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="bg-happi-surface rounded-2xl p-8 border-2 border-happi-blue relative shadow-lg shadow-happi-blue/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="flex items-center space-x-1 bg-happi-blue text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  <Star size={12} />
                  <span>{t('support.recommended')}</span>
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('support.title')}</h3>
              <p className="text-happi-muted text-sm mb-6">{t('support.description')}</p>
              <div className="mb-2">
                <span className="text-3xl font-bold text-happi-blue">{t('support.price')}</span>
                <span className="text-happi-muted text-sm ml-2">{t('support.priceDetail')}</span>
              </div>
              <p className="text-happi-muted text-xs mb-6">{t('support.priceNote')}</p>
              <ul className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <Check className="text-happi-blue flex-shrink-0" size={16} />
                    <span className="text-sm text-happi-muted">{t(`support.features.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark dot-pattern">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              {t('transparencyTitle')}
            </h2>
            <p className="text-happi-muted mb-2">{t('transparencySubtitle')}</p>
            <p className="text-happi-muted text-sm">{t('transparencyIntro')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-happi-surface rounded-2xl p-6 border border-happi-border hover:border-happi-blue/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-happi-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Info className="text-happi-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm">{t(`transparencyFactors.${i}.title`)}</h3>
                    <p className="text-happi-muted text-sm leading-relaxed">
                      {t(`transparencyFactors.${i}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-happi-muted mt-8 text-sm">
            {t('transparencyConclusion')}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-happi-blue to-happi-green rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-6 right-6 w-24 h-24 border-2 border-white rounded-full" />
              <div className="absolute bottom-6 left-6 w-36 h-36 border-2 border-white rounded-full" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                {t('finalCtaTitle')}
              </h2>
              <p className="text-white/80 mb-8">
                {t('finalCtaSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openContactModal}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-happi-blue rounded-lg hover:shadow-xl transition-all font-medium"
                >
                  <Mail className="mr-2" size={18} />
                  {t('finalCtaPrimary')}
                </button>
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all font-medium"
                >
                  {t('finalCtaSecondary')}
                </Link>
              </div>
              <p className="text-white/60 text-sm mt-6">{t('finalCtaNote')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
