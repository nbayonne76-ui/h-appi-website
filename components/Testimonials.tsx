'use client';

import { Heart, Shield, Users, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { FadeInUp, Stagger, StaggerItem } from '@/components/ui/Animate';

const commitmentIcons = [Shield, Users, Sparkles];

export default function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark">
      <div className="max-w-5xl mx-auto">
        <FadeInUp className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-happi-green/10 text-happi-green rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-green/20">
            {t('badge')}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            {t.rich('title', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
          <p className="text-lg text-happi-muted max-w-3xl mx-auto mb-6">
            {t('subtitle')}
          </p>
        </FadeInUp>

        {/* Honesty message */}
        <FadeInUp delay={0.1} className="bg-happi-surface rounded-2xl p-8 mb-10 text-center border border-happi-border">
          <Heart className="text-happi-green mx-auto mb-4" size={28} />
          <p className="text-happi-muted leading-relaxed max-w-2xl mx-auto">
            {t('honesty')}
          </p>
        </FadeInUp>

        {/* Commitment cards */}
        <Stagger className="grid md:grid-cols-3 gap-6 mb-10">
          {Array.from({ length: 3 }).map((_, index) => {
            const Icon = commitmentIcons[index];
            return (
              <StaggerItem key={index}>
                <div className="bg-happi-surface rounded-2xl p-6 border border-happi-border hover:border-happi-blue/30 transition-all h-full">
                  <div className="w-10 h-10 bg-happi-blue/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-happi-blue" size={20} />
                  </div>
                  <h3 className="font-semibold mb-2">
                    {t(`commitments.${index}.title`)}
                  </h3>
                  <p className="text-happi-muted text-sm leading-relaxed">
                    {t(`commitments.${index}.description`)}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* CTA */}
        <FadeInUp delay={0.2} className="text-center">
          <p className="text-happi-blue font-medium">
            {t('cta')}
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
