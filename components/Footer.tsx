'use client';

import { MessageCircle, Linkedin, Twitter } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const columnKeys = ['produit', 'solutions', 'entreprise', 'legal'] as const;
const linkCounts = [4, 4, 4, 4];

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-happi-darker text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-happi-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-happi-blue to-happi-green rounded-lg flex items-center justify-center">
                <MessageCircle className="text-white" size={22} />
              </div>
              <span className="text-2xl font-bold">
                H&apos;<span className="text-happi-blue">appi</span>
              </span>
            </Link>
            <p className="text-happi-muted leading-relaxed mb-6 text-sm">
              {t('tagline')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-happi-surface rounded-lg flex items-center justify-center hover:bg-happi-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-happi-surface rounded-lg flex items-center justify-center hover:bg-happi-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {columnKeys.map((colKey, colIdx) => (
            <div key={colKey}>
              <h3 className="font-semibold text-white mb-4 text-sm">
                {t(`columns.${colKey}.title`)}
              </h3>
              <ul className="space-y-3">
                {Array.from({ length: linkCounts[colIdx] }).map((_, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={t(`columns.${colKey}.links.${linkIdx}.href`)}
                      className="text-happi-muted hover:text-white transition-colors text-sm"
                    >
                      {t(`columns.${colKey}.links.${linkIdx}.label`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-happi-border/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-happi-muted text-sm">
            &copy; {new Date().getFullYear()} {t('copyright')}
          </p>
          <div className="flex items-center space-x-2 text-sm text-happi-muted">
            <span className="w-2 h-2 bg-happi-green rounded-full" />
            <span>{t('badge')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
