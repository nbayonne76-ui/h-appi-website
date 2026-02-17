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
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-happi-green/10 text-happi-green rounded-full text-sm font-medium mb-4">
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

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-happi-gray rounded-xl p-1.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-happi-blue shadow-sm'
                      : 'text-gray-600 hover:text-happi-dark'
                  }`}
                >
                  <Icon size={20} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {currentIcons.map((Icon, index) => (
            <div
              key={index}
              className="bg-happi-gray rounded-2xl p-8 hover:shadow-md transition-all group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow flex-shrink-0">
                  <Icon className="text-happi-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-happi-dark mb-2">
                    {t(`${activeTab}.${index}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`${activeTab}.${index}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-gradient-to-r from-happi-blue to-happi-green rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{t('stats.automated.value')}</div>
              <div className="text-white/80">{t('stats.automated.label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{t('stats.supplyUses.value')}</div>
              <div className="text-white/80">{t('stats.supplyUses.label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{t('stats.pmeAI.value')}</div>
              <div className="text-white/80">{t('stats.pmeAI.label')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{t('stats.cxPriority.value')}</div>
              <div className="text-white/80">{t('stats.cxPriority.label')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
