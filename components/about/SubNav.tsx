'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { Eye, Heart, Coins, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

const subLinks = [
  { href: '/a-propos/vision',    Icon: Eye,   key: 0 },
  { href: '/a-propos/valeurs',   Icon: Heart, key: 1 },
  { href: '/a-propos/strategie', Icon: Coins, key: 2 },
  { href: '/a-propos/rejoindre', Icon: Users, key: 3 },
];

export default function SubNav() {
  const pathname = usePathname();
  const t = useTranslations('aboutSubNav');

  return (
    <div className="bg-happi-dark/90 backdrop-blur-md border-b border-happi-border/50 sticky top-16 z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 overflow-x-auto py-3 scrollbar-hide">
          {subLinks.map(({ href, Icon, key }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-happi-blue ${
                pathname === href
                  ? 'bg-happi-blue/10 text-happi-blue'
                  : 'text-happi-muted hover:text-white hover:bg-happi-surface'
              }`}
            >
              <Icon size={16} />
              <span>{t(`links.${key}`)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
