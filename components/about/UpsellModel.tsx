'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { FadeInUp } from '@/components/ui/Animate';
import { ArrowRight } from 'lucide-react';

export default function UpsellModel() {
  const locale = useLocale();
  const fr = locale !== 'en';
  const t = useTranslations('upsellModel');

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-happi-darker">
      <div className="max-w-2xl mx-auto text-center">

        <FadeInUp>
          <span className="inline-block px-4 py-2 bg-happi-blue/10 text-happi-blue rounded-full text-sm font-medium mb-4">
            {t('badge')}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            {t.rich('title', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1} className="mt-10">
          <p className="text-xl md:text-2xl font-bold text-white leading-snug">
            {fr ? (
              <>On construit votre outil. On observe comment vous l&apos;utilisez.<br />
                <span className="gradient-text">Et on vous dit, gratuitement, ce qui vaut la peine d&apos;activer ensuite.</span></>
            ) : (
              <>We build your tool. We watch how you use it.<br />
                <span className="gradient-text">Then we tell you, for free, what&apos;s worth activating next.</span></>
            )}
          </p>
          <p className="text-happi-muted text-sm mt-6 max-w-md mx-auto">
            {fr
              ? 'Aucun engagement. Vous n\'activez que ce qui a une valeur prouvée sur vos propres données.'
              : 'No commitment. You only activate what has proven value on your own data.'}
          </p>
        </FadeInUp>

        <FadeInUp delay={0.18} className="mt-12">
          <Link
            href="/playbook#modele"
            className="inline-flex items-center gap-1.5 text-happi-muted hover:text-white text-sm transition-colors"
          >
            {fr ? 'Comment fonctionnent les 4 phases ?' : 'How do the 4 phases work?'}
            <span className="text-happi-blue font-medium inline-flex items-center gap-1">
              {fr ? 'Le playbook' : 'The playbook'} <ArrowRight size={13} />
            </span>
          </Link>
        </FadeInUp>

      </div>
    </section>
  );
}
