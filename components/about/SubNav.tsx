'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Eye, Heart, Coins, Users } from 'lucide-react';

const subLinks = [
  { name: 'Vision & Mission', href: '/a-propos/vision', icon: Eye },
  { name: 'Nos Valeurs', href: '/a-propos/valeurs', icon: Heart },
  { name: 'Stratégie & Prix', href: '/a-propos/strategie', icon: Coins },
  { name: 'Rejoindre H\'appi', href: '/a-propos/rejoindre', icon: Users },
];

export default function SubNav() {
  const pathname = usePathname();

  return (
    <div className="bg-white border-b border-gray-100 sticky top-16 z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 overflow-x-auto py-3 scrollbar-hide">
          <Link
            href="/a-propos"
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              pathname === '/a-propos'
                ? 'bg-happi-blue/10 text-happi-blue'
                : 'text-gray-500 hover:text-happi-dark hover:bg-gray-50'
            }`}
          >
            <span>Vue d'ensemble</span>
          </Link>
          {subLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  pathname === link.href
                    ? 'bg-happi-blue/10 text-happi-blue'
                    : 'text-gray-500 hover:text-happi-dark hover:bg-gray-50'
                }`}
              >
                <Icon size={16} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
