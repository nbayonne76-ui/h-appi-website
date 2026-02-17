'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

const labels: Record<string, string> = {
  fr: 'FR',
  en: 'EN',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === 'fr' ? 'en' : 'fr';

  function switchLocale() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <button
      onClick={switchLocale}
      className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium text-happi-dark"
      aria-label={`Switch to ${labels[otherLocale]}`}
    >
      <span className="text-base">
        {locale === 'fr' ? '🇬🇧' : '🇫🇷'}
      </span>
      <span>{labels[otherLocale]}</span>
    </button>
  );
}
