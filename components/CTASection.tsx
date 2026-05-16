'use client';

import { MessageCircle, ArrowRight, Search, Lightbulb, FileText } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ScaleIn } from '@/components/ui/Animate';
import { openContactModal } from '@/components/ui/ContactModal';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import MagneticButton from '@/components/ui/MagneticButton';

const demoDeliverables = [
  {
    icon: Search,
    fr: 'Analyse de votre situation',
    en: 'Analysis of your situation',
    detailFr: 'On identifie ensemble où vous perdez du temps et de l\'argent aujourd\'hui.',
    detailEn: 'We identify together where you\'re losing time and money today.',
  },
  {
    icon: Lightbulb,
    fr: 'Recommandation personnalisée',
    en: 'Personalised recommendation',
    detailFr: 'On vous dit exactement quelle solution vous correspond et pourquoi.',
    detailEn: 'We tell you exactly which solution fits you and why.',
  },
  {
    icon: FileText,
    fr: 'Estimation de budget',
    en: 'Budget estimate',
    detailFr: 'Un chiffre réel basé sur votre besoin — pas une fourchette vague.',
    detailEn: 'A real figure based on your need, not a vague range.',
  },
];

export default function CTASection({ hidePricing = false }: { hidePricing?: boolean }) {
  const t = useTranslations('cta');
  const locale = useLocale();
  const fr = locale === 'fr';

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark relative overflow-hidden">
      <AnimatedMesh variant="green" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScaleIn>
        <div className="bg-gradient-to-br from-happi-blue to-happi-green rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">
          <AnimatedMesh variant="hero" />

          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="text-white" size={28} />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
              {t('title')}
            </h2>

            <p className="text-base text-white/80 mb-8 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>

            {/* What you get */}
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {demoDeliverables.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left border border-white/15"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mb-3">
                      <Icon size={16} className="text-white" />
                    </div>
                    <p className="text-white font-semibold text-sm mb-1">
                      {fr ? item.fr : item.en}
                    </p>
                    <p className="text-white/65 text-xs leading-relaxed">
                      {fr ? item.detailFr : item.detailEn}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton
                onClick={openContactModal}
                className="btn-shimmer inline-flex items-center justify-center px-8 py-3.5 bg-white text-happi-blue rounded-lg hover:shadow-xl transition-all font-medium"
              >
                <MessageCircle className="mr-2" size={18} />
                {t('ctaPrimary')}
              </MagneticButton>
              {!hidePricing && (
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all font-medium active:scale-[0.97]"
                >
                  {t('ctaSecondary')}
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              )}
            </div>

            <p className="text-white/60 text-sm mt-5">
              {t('note')}
            </p>
          </div>
        </div>
        </ScaleIn>
      </div>
    </section>
  );
}
