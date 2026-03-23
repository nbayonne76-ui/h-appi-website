'use client';

import { openContactModal } from '@/components/ui/ContactModal';

export default function SecretaryCTA({ fr, size = 'lg' }: { fr: boolean; size?: 'sm' | 'lg' }) {
  const label = fr ? 'Demander une démonstration gratuite' : 'Request a free demo';
  const base = 'btn-shimmer inline-flex items-center gap-2 rounded-xl font-bold text-white bg-happi-blue hover:bg-happi-blue/90 transition-all shadow-xl shadow-happi-blue/20';
  const padding = size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm';

  return (
    <button onClick={openContactModal} className={`${base} ${padding}`}>
      {label}
    </button>
  );
}
