'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { FadeInUp, Stagger, StaggerItem, CollapseContent } from '@/components/ui/Animate';

const FAQ_COUNT = 7;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = useTranslations('faq');

  return (
    <section id="faq" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
      <div className="max-w-3xl mx-auto">
        <FadeInUp className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-blue/20">
            {t('badge')}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-happi-muted">
            {t('subtitle')}
          </p>
        </FadeInUp>

        <Stagger className="space-y-3">
          {Array.from({ length: FAQ_COUNT }).map((_, index) => (
            <StaggerItem key={index}>
              <div className="bg-happi-surface rounded-xl border border-happi-border overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-happi-dark/50 transition-colors"
                >
                  <span className="font-medium pr-4 text-sm">
                    {t(`items.${index}.question`)}
                  </span>
                  <ChevronDown
                    className={`text-happi-blue flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    size={18}
                  />
                </button>
                <CollapseContent isOpen={openIndex === index}>
                  <div className="px-5 pb-5 text-happi-muted leading-relaxed text-sm">
                    {t(`items.${index}.answer`)}
                  </div>
                </CollapseContent>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
