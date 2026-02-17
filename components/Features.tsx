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
  blue: 'bg-blue-50 text-happi-blue',
  green: 'bg-green-50 text-happi-green',
  yellow: 'bg-yellow-50 text-happi-yellow',
};

export default function Features() {
  const t = useTranslations('features');

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-happi-blue/10 text-happi-blue rounded-full text-sm font-medium mb-4">
            {t('badge')}
          </span>
          <h2 className="text-4xl font-bold text-happi-dark mb-4">
            {t.rich('title', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-happi-blue/20 group"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colorMap[colors[index]]} group-hover:scale-110 transition-transform`}
              >
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-happi-dark mb-3">
                {t(`items.${index}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`items.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
