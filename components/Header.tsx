'use client';

import { useState } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { openContactModal } from '@/components/ui/ContactModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('header');

  const navigation = [
    { name: t('nav.about'), href: '/a-propos' as const },
    { name: t('nav.features'), href: '/fonctionnalites' as const },
    { name: t('nav.useCases'), href: '/cas-usage' as const },
    { name: t('nav.pricing'), href: '/tarifs' as const },
    { name: t('nav.faq'), href: '/faq' as const },
    { name: t('nav.blog'), href: '/blog' as const },
  ];

  return (
    <header className="fixed w-full bg-happi-dark/90 backdrop-blur-md z-50 border-b border-happi-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" aria-label="H'appi — Accueil">
              <div className="w-10 h-10 bg-gradient-to-br from-happi-blue to-happi-green rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">H</span>
              </div>
              <span className="text-2xl font-bold gradient-text">H&apos;appi</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link-animated transition-colors font-medium text-sm ${
                  pathname === item.href
                    ? 'text-happi-blue is-active'
                    : 'text-happi-muted hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher />
            <button
              onClick={openContactModal}
              className="btn-shimmer bg-happi-blue text-white px-5 py-2 rounded-lg hover:bg-happi-blue/90 transition-all hover:shadow-lg hover:shadow-happi-blue/20 text-sm font-medium active:scale-[0.97]"
            >
              {t('cta')}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-1"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 bg-happi-dark border-t border-happi-border/50">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block transition-colors py-2 font-medium text-sm ${
                  pathname === item.href
                    ? 'text-happi-blue'
                    : 'text-happi-muted hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => { setIsMenuOpen(false); openContactModal(); }}
              className="block w-full bg-happi-blue text-white px-6 py-2 rounded-lg text-center hover:bg-happi-blue/90 transition-all text-sm font-medium"
            >
              {t('cta')}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
