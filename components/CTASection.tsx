'use client';

import { MessageCircle, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ScaleIn } from '@/components/ui/Animate';
import { openContactModal } from '@/components/ui/ContactModal';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import MagneticButton from '@/components/ui/MagneticButton';

export default function CTASection({ hidePricing = false }: { hidePricing?: boolean }) {
  const t = useTranslations('cta');

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark relative overflow-hidden">
      <AnimatedMesh variant="green" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScaleIn>
        <div className="bg-gradient-to-br from-happi-blue to-happi-green rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          <AnimatedMesh variant="hero" />

          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <MessageCircle className="text-white" size={28} />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
              {t('title')}
            </h2>

            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>

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

            <p className="text-white/60 text-sm mt-6">
              {t('note')}
            </p>
          </div>
        </div>
        </ScaleIn>
      </div>
    </section>
  );
}
