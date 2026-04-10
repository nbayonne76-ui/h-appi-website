'use client';

import { motion } from 'framer-motion';
import { Package, BookOpen, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

type Category = {
  key: string;
  label: string;
  labelEn: string;
  description: string;
  descriptionEn: string;
  icon: React.ElementType;
  color: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
};

const categories: Category[] = [
  {
    key: 'Produit',
    label: 'Produit',
    labelEn: 'Product',
    description: 'Fonctionnalités, retours d\'expérience et évolutions de la plateforme H\'appi.',
    descriptionEn: 'Features, feedback and evolution of the H\'appi platform.',
    icon: Package,
    color: '#3B82F6',
    bgClass: 'bg-happi-blue/10',
    textClass: 'text-happi-blue',
    borderClass: 'border-happi-blue/20',
  },
  {
    key: 'Guide',
    label: 'Guide',
    labelEn: 'Guide',
    description: 'Méthodes concrètes pour améliorer votre CX, réduire vos coûts SAV et piloter vos équipes.',
    descriptionEn: 'Concrete methods to improve your CX, reduce after-sales costs and manage your teams.',
    icon: BookOpen,
    color: '#10B981',
    bgClass: 'bg-happi-green/10',
    textClass: 'text-happi-green',
    borderClass: 'border-happi-green/20',
  },
  {
    key: 'Tendances',
    label: 'Tendances',
    labelEn: 'Trends',
    description: 'Ce qui change dans l\'IA, les chatbots et l\'expérience client en 2026.',
    descriptionEn: 'What\'s changing in AI, chatbots and customer experience in 2026.',
    icon: TrendingUp,
    color: '#A78BFA',
    bgClass: 'bg-purple-500/10',
    textClass: 'text-purple-400',
    borderClass: 'border-purple-500/20',
  },
  {
    key: 'Conformité',
    label: 'Conformité',
    labelEn: 'Compliance',
    description: 'RGPD, souveraineté des données, hébergement France : ce que vous devez savoir.',
    descriptionEn: 'GDPR, data sovereignty, French hosting: what you need to know.',
    icon: ShieldCheck,
    color: '#EF4444',
    bgClass: 'bg-red-500/10',
    textClass: 'text-red-400',
    borderClass: 'border-red-500/20',
  },
];

interface Props {
  fr: boolean;
  counts: Record<string, number>;
  activeCategory: string;
  allLabel: string;
  onSelect: (cat: string) => void;
}

export default function BlogCategoryNav({ fr, counts, activeCategory, allLabel, onSelect }: Props) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((cat, i) => {
        const catKey = fr ? cat.key : cat.labelEn;
        const isActive = activeCategory === catKey;
        const count = counts[catKey] ?? counts[cat.key] ?? 0;
        const Icon = cat.icon;

        return (
          <motion.button
            key={cat.key}
            onClick={() => onSelect(catKey)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.07 }}
            whileHover={{ y: -2 }}
            className={`text-left rounded-2xl p-5 border transition-all duration-200 ${
              isActive
                ? `${cat.bgClass} ${cat.borderClass}`
                : 'bg-happi-surface border-happi-border hover:border-happi-border/60'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center ${cat.bgClass} ${cat.borderClass} border`}
              >
                <Icon size={16} style={{ color: cat.color }} />
              </div>
              <span
                className="text-[11px] font-bold tabular-nums px-2 py-0.5 rounded-full"
                style={{ background: `${cat.color}15`, color: cat.color }}
              >
                {count}
              </span>
            </div>
            <h3 className={`font-bold text-sm mb-1.5 ${isActive ? cat.textClass : 'text-white'}`}>
              {fr ? cat.label : cat.labelEn}
            </h3>
            <p className="text-happi-muted text-xs leading-relaxed line-clamp-2">
              {fr ? cat.description : cat.descriptionEn}
            </p>
            <div className={`flex items-center gap-1 mt-3 text-[11px] font-medium ${cat.textClass} opacity-0 group-hover:opacity-100 transition-opacity`}
              style={{ opacity: isActive ? 1 : undefined }}
            >
              {fr ? 'Voir les articles' : 'View articles'}
              <ArrowRight size={10} />
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
