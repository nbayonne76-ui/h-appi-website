'use client';

import {
  Brain,
  Zap,
  BarChart3,
  Globe,
  Shield,
  RefreshCw,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

const icons = [Brain, Zap, BarChart3, Globe, Shield, RefreshCw];
const colors = ['blue', 'green', 'yellow', 'blue', 'green', 'yellow'] as const;

const colorMap = {
  blue: 'bg-happi-blue/10 text-happi-blue',
  green: 'bg-happi-green/10 text-happi-green',
  yellow: 'bg-happi-yellow/10 text-happi-yellow',
};

export default function Features() {
  const t = useTranslations('features');

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-dark dot-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-blue/20">
            {t('badge')}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            {t.rich('title', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
          <p className="text-lg text-happi-muted max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="bg-happi-surface rounded-2xl p-8 border border-happi-border hover:border-happi-blue/30 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colorMap[colors[index]]} group-hover:scale-110 transition-transform`}
              >
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-3">
                {t(`items.${index}.title`)}
              </h3>
              <p className="text-happi-muted leading-relaxed text-sm">
                {t(`items.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
