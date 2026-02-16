'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'À propos', href: '/a-propos' },
  { name: 'Fonctionnalités', href: '/fonctionnalites' },
  { name: 'Cas d\'usage', href: '/cas-usage' },
  { name: 'Tarifs', href: '/tarifs' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-happi-blue to-happi-green rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">H</span>
              </div>
              <span className="text-2xl font-bold gradient-text">H'appi</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors font-medium ${
                  pathname === item.href
                    ? 'text-happi-blue'
                    : 'text-happi-dark hover:text-happi-blue'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#demo"
              className="bg-happi-blue text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all hover:shadow-lg"
            >
              Demander une démo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-happi-dark"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 bg-white">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block transition-colors py-2 font-medium ${
                  pathname === item.href
                    ? 'text-happi-blue'
                    : 'text-happi-dark hover:text-happi-blue'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#demo"
              className="block bg-happi-blue text-white px-6 py-2 rounded-lg text-center hover:bg-opacity-90 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Demander une démo
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
