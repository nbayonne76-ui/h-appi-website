'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { Eye, Heart, Coins, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

const subLinkIcons = [Eye, Heart, Coins, Users];
const subLinkHrefs = ['/a-propos/vision', '/a-propos/valeurs', '/a-propos/strategie', '/a-propos/rejoindre'];

export default function SubNav() {
  const pathname = usePathname();
  const t = useTranslations('aboutSubNav');

  return (
    <div className="bg-happi-dark/90 backdrop-blur-md border-b border-happi-border/50 sticky top-16 z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 overflow-x-auto py-3 scrollbar-hide">
          <Link
            href="/a-propos"
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              pathname === '/a-propos'
                ? 'bg-happi-blue/10 text-happi-blue'
                : 'text-happi-muted hover:text-white hover:bg-happi-surface'
            }`}
          >
            <span>{t('overview')}</span>
          </Link>
          {subLinkIcons.map((Icon, index) => (
            <Link
              key={subLinkHrefs[index]}
              href={subLinkHrefs[index]}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                pathname === subLinkHrefs[index]
                  ? 'bg-happi-blue/10 text-happi-blue'
                  : 'text-happi-muted hover:text-white hover:bg-happi-surface'
              }`}
            >
              <Icon size={16} />
              <span>{t(`links.${index}`)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
