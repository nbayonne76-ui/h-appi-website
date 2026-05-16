'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingDown, Clock, ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';
import { openContactModal } from '@/components/ui/ContactModal';

const STORAGE_KEY = 'happi_exit_popup_seen';

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const locale = useLocale();
  const fr = locale !== 'en';

  const dismiss = useCallback(() => {
    setShow(false);
    sessionStorage.setItem(STORAGE_KEY, '1');
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;
    const onMouseLeave = (e: MouseEvent) => {
      if (triggered || e.clientY > 20) return;
      triggered = true;
      setShow(true);
    };

    // Only attach after 15s to avoid triggering immediately
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', onMouseLeave);
    }, 15000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const handleCTA = () => {
    dismiss();
    openContactModal();
  };

  const stats = [
    { icon: TrendingDown, valueFr: '65 %', labelFr: 'd\'appels en moins', valueEn: '65%', labelEn: 'fewer support calls', color: '#3B82F6' },
    { icon: Clock, valueFr: '14 jours', labelFr: 'pour être opérationnel', valueEn: '14 days', labelEn: 'to go live', color: '#10B981' },
  ];

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4"
          >
            <div className="bg-happi-dark border border-happi-border rounded-3xl p-8 max-w-md w-full relative shadow-2xl shadow-black/50">

              {/* Close */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-happi-surface flex items-center justify-center text-happi-muted hover:text-white transition-colors"
              >
                <X size={16} />
              </button>

              {/* Badge */}
              <span className="inline-block px-3 py-1 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-bold uppercase tracking-wide border border-happi-blue/20 mb-5">
                {fr ? 'Avant de partir' : 'Before you go'}
              </span>

              {/* Headline */}
              <h3 className="text-white text-xl font-bold mb-2 leading-tight">
                {fr
                  ? 'Votre service client peut être automatisé cette semaine.'
                  : 'Your customer service could be automated this week.'}
              </h3>
              <p className="text-happi-muted text-sm mb-6 leading-relaxed">
                {fr
                  ? '15 minutes suffisent pour voir exactement combien d\'appels et d\'euros vous pouvez économiser.'
                  : '15 minutes is all it takes to see exactly how many calls and euros you can save.'}
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-3 mb-7">
                {stats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={i}
                      className="rounded-xl p-4 border text-center"
                      style={{ background: `${s.color}10`, borderColor: `${s.color}25` }}
                    >
                      <div className="text-2xl font-extrabold mb-0.5" style={{ color: s.color }}>
                        {fr ? s.valueFr : s.valueEn}
                      </div>
                      <div className="text-happi-muted text-xs leading-snug">
                        {fr ? s.labelFr : s.labelEn}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <button
                onClick={handleCTA}
                className="btn-shimmer w-full flex items-center justify-center gap-2 py-3.5 bg-happi-blue text-white rounded-xl font-bold hover:bg-happi-blue/90 transition-all shadow-lg shadow-happi-blue/25 text-sm"
              >
                {fr ? 'Réserver ma démo gratuite' : 'Book my free demo'}
                <ArrowRight size={16} />
              </button>

              <p className="text-center text-happi-muted/50 text-xs mt-3">
                {fr ? 'Sans engagement · Réponse sous 24h' : 'No commitment · Reply within 24h'}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
