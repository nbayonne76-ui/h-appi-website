'use client';

import { motion } from 'framer-motion';
import { Gift, Code2, Globe, Zap } from 'lucide-react';

const items = [
  {
    icon: Gift,
    color: '#3B82F6',
    labelFr: 'Démo gratuite · Sans engagement',
    labelEn: 'Free demo · No commitment',
  },
  {
    icon: Code2,
    color: '#10B981',
    labelFr: 'Code source à vous, pour toujours',
    labelEn: 'Source code is yours, forever',
  },
  {
    icon: Globe,
    color: '#A78BFA',
    labelFr: 'Hébergé en Europe · RGPD natif',
    labelEn: 'Hosted in Europe · GDPR native',
  },
  {
    icon: Zap,
    color: '#F59E0B',
    labelFr: 'Première version livrée en moins de 15 jours',
    labelEn: 'First version delivered in under 15 days',
  },
];

export default function GuaranteeStrip({ fr }: { fr: boolean }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="py-10 px-4 sm:px-6 lg:px-8 bg-happi-dark border-y border-happi-border/50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}15` }}
                >
                  <Icon size={16} style={{ color: item.color }} />
                </div>
                <span className="text-sm font-medium text-white leading-snug">
                  {fr ? item.labelFr : item.labelEn}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
