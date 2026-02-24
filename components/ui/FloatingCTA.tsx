'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLocale } from 'next-intl';
import { openContactModal } from '@/components/ui/ContactModal';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const locale = useLocale();
  const label = locale === 'en' ? 'Request a demo' : 'Demander une démo';

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={openContactModal}
      aria-label={label}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-happi-blue rounded-full shadow-xl shadow-happi-blue/30 hover:bg-happi-blue/90 hover:scale-110 active:scale-95 transition-all duration-300 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      {/* Pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-happi-blue animate-ping opacity-20" />
      <MessageCircle className="text-white relative z-10" size={22} />
    </button>
  );
}
