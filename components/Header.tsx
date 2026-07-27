'use client';

import { useState, useEffect, useRef } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { openContactModal } from '@/components/ui/ContactModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('header');
  const productMenuRef = useRef<HTMLDivElement>(null);

  // Let keyboard and mouse users close the Product dropdown the same way they'd
  // expect: Escape, or a click anywhere outside it (it previously only closed on hover-out).
  useEffect(() => {
    if (!isProductOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsProductOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (productMenuRef.current && !productMenuRef.current.contains(e.target as Node)) {
        setIsProductOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [isProductOpen]);

  const mainNav = [
    { name: t('nav.about'), href: '/a-propos' as const },
    { name: t('nav.useCases'), href: '/cas-usage' as const },
    { name: t('nav.playbook'), href: '/playbook' as const },
  ];

  const productNav = [
    { name: t('nav.crm'), href: '/crm' as const },
    { name: t('nav.secretary'), href: '/secretary' as const },
    { name: t('nav.dropos'), href: '/dropos' as const },
    { name: t('nav.atelier'), href: '/atelier' as const },
  ];

  const tailNav = [
    { name: t('nav.pricing'), href: '/tarifs' as const },
    { name: t('nav.faq'), href: '/faq' as const },
    { name: t('nav.blog'), href: '/blog' as const },
  ];

  const isProductActive = productNav.some((item) => item.href === pathname);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-happi-dark/95 backdrop-blur-md z-50 border-b border-happi-border/50">
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
            {mainNav.map((item) => (
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

            {/* Product dropdown */}
            <div
              ref={productMenuRef}
              className="relative"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
            >
              <button
                onClick={() => setIsProductOpen((o) => !o)}
                aria-expanded={isProductOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 nav-link-animated transition-colors font-medium text-sm ${
                  isProductActive ? 'text-happi-blue is-active' : 'text-happi-muted hover:text-white'
                }`}
              >
                {t('nav.product')}
                <ChevronDown size={14} className={`transition-transform ${isProductOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="bg-happi-dark border border-happi-border rounded-xl shadow-xl shadow-black/30 py-2 min-w-[160px]">
                    {productNav.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsProductOpen(false)}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          pathname === item.href
                            ? 'text-happi-blue'
                            : 'text-happi-muted hover:text-white hover:bg-happi-surface'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {tailNav.map((item) => (
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
              className="btn-shimmer bg-happi-blue-strong text-white px-5 py-2 rounded-lg hover:bg-happi-blue-strong/90 transition-all hover:shadow-lg hover:shadow-happi-blue/20 text-sm font-medium active:scale-[0.97]"
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
            {mainNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block transition-colors py-2 font-medium text-sm ${
                  pathname === item.href ? 'text-happi-blue' : 'text-happi-muted hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div>
              <button
                onClick={() => setIsMobileProductOpen((o) => !o)}
                aria-expanded={isMobileProductOpen}
                className={`flex items-center justify-between w-full py-2 font-medium text-sm ${
                  isProductActive ? 'text-happi-blue' : 'text-happi-muted hover:text-white'
                }`}
              >
                {t('nav.product')}
                <ChevronDown size={14} className={`transition-transform ${isMobileProductOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileProductOpen && (
                <div className="pl-4 pb-1 space-y-2">
                  {productNav.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block py-1.5 text-sm transition-colors ${
                        pathname === item.href ? 'text-happi-blue' : 'text-happi-muted hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {tailNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block transition-colors py-2 font-medium text-sm ${
                  pathname === item.href ? 'text-happi-blue' : 'text-happi-muted hover:text-white'
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
              className="block w-full bg-happi-blue-strong text-white px-6 py-2 rounded-lg text-center hover:bg-happi-blue-strong/90 transition-all text-sm font-medium"
            >
              {t('cta')}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
