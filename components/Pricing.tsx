'use client';

import { Mail, Info } from 'lucide-react';
import { openContactModal } from '@/components/ui/ContactModal';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { RoiCalculator } from '@/components/pricing/RoiCalculator';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import MagneticButton from '@/components/ui/MagneticButton';
import BillingToggle from '@/components/pricing/BillingToggle';
import { FadeInUp, Stagger, StaggerItem } from '@/components/ui/Animate';

export default function Pricing() {
  const t = useTranslations('pricing');
  const locale = useLocale();
  const fr = locale !== 'en';

  return (
    <div className="text-white">

      {/* ── Hero ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker relative overflow-hidden">
        <AnimatedMesh variant="hero" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInUp>
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
            <MagneticButton
              onClick={openContactModal}
              className="inline-flex items-center px-8 py-3.5 bg-happi-blue-strong text-white rounded-xl hover:bg-happi-blue-strong/90 transition-all hover:shadow-lg hover:shadow-happi-blue/25 font-semibold"
            >
              <Mail className="mr-2" size={18} />
              {t('heroCta')}
            </MagneticButton>
            <p className="text-happi-muted text-sm mt-4">{t('heroNote')}</p>
          </FadeInUp>
        </div>
      </section>

      {/* ── Plans / Maintenance ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark relative overflow-hidden">
        <AnimatedMesh variant="purple" />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              {t('maintenanceTitle')}
            </h2>
            <p className="text-happi-muted text-sm">{t('maintenanceSubtitle')}</p>
          </FadeInUp>
          <BillingToggle fr={fr} />
        </div>
      </section>

      {/* ── What's included + implementation ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-darker">
        <div className="max-w-3xl mx-auto">
          <FadeInUp className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-2">{t('implementTitle')}</h2>
            <p className="text-happi-muted text-sm">{t('implementDescription')}</p>
          </FadeInUp>
          <Stagger className="grid sm:grid-cols-2 gap-3 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-2.5 bg-happi-surface rounded-xl p-3.5 border border-happi-border">
                  <span className="text-happi-green mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-happi-muted text-sm">{t(`implementItems.${i}`)}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── ROI Calculator ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-4xl mx-auto">
          <FadeInUp className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-blue/20">
              {t('roiBadge')}
            </span>
          </FadeInUp>
          <RoiCalculator />
        </div>
      </section>

      {/* ── Transparency ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
        <div className="max-w-6xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              {t('transparencyTitle')}
            </h2>
            <p className="text-happi-muted mb-1 text-sm">{t('transparencySubtitle')}</p>
            <p className="text-happi-muted text-sm">{t('transparencyIntro')}</p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-happi-surface rounded-2xl p-6 border border-happi-border hover:border-happi-blue/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-happi-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Info className="text-happi-blue" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm text-white">{t(`transparencyFactors.${i}.title`)}</h3>
                    <p className="text-happi-muted text-xs leading-relaxed">
                      {t(`transparencyFactors.${i}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <FadeInUp className="mt-8 text-center">
            <p className="text-happi-muted text-sm italic">{t('transparencyConclusion')}</p>
          </FadeInUp>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInUp>
            <div className="bg-gradient-to-br from-happi-blue to-happi-green rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 right-6 w-24 h-24 border-2 border-white rounded-full" />
                <div className="absolute bottom-6 left-6 w-36 h-36 border-2 border-white rounded-full" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                  {t('finalCtaTitle')}
                </h2>
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                  {t('finalCtaSubtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={openContactModal}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-happi-blue rounded-xl hover:shadow-xl transition-all font-semibold"
                  >
                    <Mail size={18} />
                    {t('finalCtaPrimary')}
                  </button>
                  <Link
                    href="/faq"
                    className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white rounded-xl hover:bg-white/10 transition-all font-semibold"
                  >
                    {t('finalCtaSecondary')}
                  </Link>
                </div>
                <p className="text-white/60 text-xs mt-6">{t('finalCtaNote')}</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
