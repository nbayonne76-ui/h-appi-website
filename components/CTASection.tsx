'use client';

import { MessageCircle, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-happi-blue to-happi-green rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white rounded-full" />
          </div>

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
              <a
                href="mailto:nbayonne76@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-happi-blue rounded-lg hover:shadow-xl transition-all font-medium"
              >
                <MessageCircle className="mr-2" size={18} />
                {t('ctaPrimary')}
              </a>
              <a
                href="/tarifs"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all font-medium"
              >
                {t('ctaSecondary')}
                <ArrowRight className="ml-2" size={18} />
              </a>
            </div>

            <p className="text-white/60 text-sm mt-6">
              {t('note')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
