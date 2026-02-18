'use client';

import {
  Palette,
  Coins,
  TrendingUp,
  Zap,
  Handshake,
  ShieldCheck,
  Sprout,
  Globe,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

const valueIcons = [Palette, Coins, TrendingUp, Zap, Handshake, ShieldCheck, Sprout, Globe];
const valueColors = ['blue', 'green', 'yellow', 'blue', 'green', 'yellow', 'blue', 'green'];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: {
    bg: 'bg-happi-blue/10',
    text: 'text-happi-blue',
    border: 'border-happi-blue/20',
  },
  green: {
    bg: 'bg-happi-green/10',
    text: 'text-happi-green',
    border: 'border-happi-green/20',
  },
  yellow: {
    bg: 'bg-happi-yellow/10',
    text: 'text-happi-yellow',
    border: 'border-happi-yellow/20',
  },
};

export default function ValuesSection() {
  const t = useTranslations('values');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-happi-green/10 text-happi-green rounded-full text-sm font-medium mb-4">
            {t('badge')}
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            {t.rich('title', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
          <p className="text-xl text-happi-muted">
            {t('subtitle')}
          </p>
        </div>

        <div className="space-y-6">
          {valueIcons.map((Icon, index) => {
            const colors = colorMap[valueColors[index]];
            return (
              <div
                key={index}
                className={`bg-happi-surface rounded-2xl p-8 border ${colors.border} hover:shadow-md transition-all`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className={colors.text} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {index + 1}. {t(`items.${index}.title`)}
                    </h3>
                    <blockquote
                      className={`${colors.text} font-semibold italic mb-4 text-lg`}
                    >
                      &laquo; {t(`items.${index}.quote`)} &raquo;
                    </blockquote>
                    <p className="text-happi-muted leading-relaxed mb-4">
                      {t(`items.${index}.description`)}
                    </p>
                    <div className="bg-happi-dark rounded-lg p-4 border border-happi-border">
                      <p className="text-sm text-happi-muted">
                        <span className="font-semibold text-white">
                          {t('inPractice')}{' '}
                        </span>
                        {t(`items.${index}.practice`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
