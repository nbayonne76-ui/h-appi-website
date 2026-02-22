'use client';

import { useState } from 'react';
import {
  Headphones,
  Truck,
  MessageSquare,
  Package,
  UserCheck,
  Clock,
  MapPin,
  ClipboardList,
  Bell,
  BarChart,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

const cxIcons = [MessageSquare, UserCheck, Clock, BarChart];
const supplyIcons = [MapPin, Package, Bell, ClipboardList];

export default function UseCases() {
  const [activeTab, setActiveTab] = useState<'cx' | 'supply'>('cx');
  const t = useTranslations('useCases');

  const tabs = [
    { id: 'cx' as const, label: t('tabCx'), icon: Headphones },
    { id: 'supply' as const, label: t('tabSupply'), icon: Truck },
  ];

  const currentIcons = activeTab === 'cx' ? cxIcons : supplyIcons;

  return (
    <section id="use-cases" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-happi-green/10 text-happi-green rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-green/20">
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

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-happi-surface rounded-xl p-1.5 border border-happi-border">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                    activeTab === tab.id
                      ? 'bg-happi-blue text-white shadow-sm'
                      : 'text-happi-muted hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {currentIcons.map((Icon, index) => (
            <div
              key={index}
              className="bg-happi-surface rounded-2xl p-8 border border-happi-border hover:border-happi-blue/30 transition-all group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-happi-dark rounded-xl flex items-center justify-center border border-happi-border group-hover:border-happi-blue/30 transition-colors flex-shrink-0">
                  <Icon className="text-happi-blue" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t(`${activeTab}.${index}.title`)}
                  </h3>
                  <p className="text-happi-muted leading-relaxed text-sm">
                    {t(`${activeTab}.${index}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-gradient-to-r from-happi-blue to-happi-green rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{t('stats.automated.value')}</div>
              <div className="text-white/70 text-sm">{t('stats.automated.label')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{t('stats.supplyUses.value')}</div>
              <div className="text-white/70 text-sm">{t('stats.supplyUses.label')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{t('stats.pmeAI.value')}</div>
              <div className="text-white/70 text-sm">{t('stats.pmeAI.label')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{t('stats.cxPriority.value')}</div>
              <div className="text-white/70 text-sm">{t('stats.cxPriority.label')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
