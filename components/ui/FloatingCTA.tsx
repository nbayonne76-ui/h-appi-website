'use client';

import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { useLocale } from 'next-intl';
import { openContactModal } from '@/components/ui/ContactModal';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const locale = useLocale();
  const fr = locale !== 'en';

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
      // Auto-expand once when user reaches 40% of the page
      if (window.scrollY > window.innerHeight * 0.8) setExpanded(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={openContactModal}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-happi-blue text-white shadow-xl shadow-happi-blue/40 hover:bg-happi-blue/90 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-sm ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      } ${expanded ? 'px-5 py-3.5 rounded-2xl' : 'w-14 h-14 rounded-full justify-center'}`}
    >
      {/* Pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-happi-blue animate-ping opacity-15 pointer-events-none" />
      <Calendar size={20} className="flex-shrink-0 relative z-10" />
      {expanded && (
        <span className="relative z-10 whitespace-nowrap">
          {fr ? 'Voir une démo · 15 min' : 'Book a demo · 15 min'}
        </span>
      )}
    </button>
  );
}
