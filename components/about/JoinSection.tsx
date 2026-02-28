'use client';

import { Building2, Code2, Users, Mail, Globe, MessageCircle, CalendarDays } from 'lucide-react';
import { openContactModal } from '@/components/ui/ContactModal';
import { useTranslations } from 'next-intl';

export default function JoinSection() {
  const t = useTranslations('join');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            {t.rich('title', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Entreprise */}
          <div className="bg-happi-surface rounded-2xl p-8 border border-happi-border hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 hover:border-happi-blue/30 transition-all duration-200">
            <div className="w-14 h-14 bg-happi-blue/10 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="text-happi-blue" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {t('enterprise.title')}
            </h3>
            <p className="text-happi-muted text-sm mb-4">
              {t('enterprise.description1')}
            </p>
            <p className="text-happi-muted text-sm mb-6">
              {t('enterprise.description2')}
            </p>
            <div className="space-y-2">
              <a
                href="#contact"
                className="btn-shimmer block w-full text-center bg-happi-blue text-white py-3 rounded-lg hover:bg-opacity-90 transition-all font-medium text-sm active:scale-[0.97]"
              >
                {t('enterprise.cta')}
              </a>
              <p className="text-xs text-happi-muted text-center">
                {t('enterprise.ctaNote')}
              </p>
            </div>
          </div>

          {/* Talent */}
          <div className="bg-happi-surface rounded-2xl p-8 border border-happi-border hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 hover:border-happi-blue/30 transition-all duration-200">
            <div className="w-14 h-14 bg-happi-green/10 rounded-xl flex items-center justify-center mb-6">
              <Code2 className="text-happi-green" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {t('talent.title')}
            </h3>
            <p className="text-happi-muted text-sm mb-4">
              {t('talent.description')}
            </p>
            <div className="space-y-2 text-sm text-happi-muted mb-6">
              <p className="font-medium text-white">{t('talent.positionsLabel')}</p>
              <ul className="space-y-1 list-disc pl-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <li key={i}>{t(`talent.positions.${i}`)}</li>
                ))}
              </ul>
            </div>
            <div className="bg-happi-darker rounded-lg p-3 text-xs text-happi-muted">
              {t('talent.perks')}
            </div>
          </div>

          {/* Partenaire */}
          <div className="bg-happi-surface rounded-2xl p-8 border border-happi-border hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 hover:border-happi-blue/30 transition-all duration-200">
            <div className="w-14 h-14 bg-happi-yellow/10 rounded-xl flex items-center justify-center mb-6">
              <Users className="text-happi-yellow" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {t('partner.title')}
            </h3>
            <p className="text-happi-muted text-sm mb-4">
              {t('partner.description')}
            </p>
            <div className="space-y-2 text-sm text-happi-muted mb-6">
              <p className="font-medium text-white">
                {t('partner.typesLabel')}
              </p>
              <ul className="space-y-1 list-disc pl-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i}>{t(`partner.types.${i}`)}</li>
                ))}
              </ul>
            </div>
            <a
              href="#contact"
              className="block w-full text-center border-2 border-happi-blue text-happi-blue py-3 rounded-lg hover:bg-happi-blue hover:text-white transition-all font-medium text-sm"
            >
              {t('partner.cta')}
            </a>
          </div>
        </div>

        {/* Histoire */}
        <div className="bg-happi-surface rounded-2xl p-8 md:p-12 border border-happi-border mb-20">
          <h3 className="text-2xl font-bold text-white mb-6">
            {t('history.title')}
          </h3>
          <p className="text-happi-muted leading-relaxed mb-6">
            {t.rich('history.paragraph1', {
              strong: (chunks) => <strong className="text-white">{chunks}</strong>,
            })}
          </p>
          <p className="text-happi-muted leading-relaxed mb-6">
            {t('history.paragraph2')}
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex items-start space-x-3 bg-happi-darker rounded-lg p-4"
              >
                <svg
                  className="w-5 h-5 text-happi-green mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-happi-muted">{t(`history.pillars.${i}`)}</span>
              </div>
            ))}
          </div>
          <p className="text-white font-semibold">
            {t('history.conclusion')}
          </p>
        </div>

        {/* Contact */}
        <div
          id="contact"
          className="bg-gradient-to-r from-happi-blue to-happi-green rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            {t('contact.title')}
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[Mail, Globe, MessageCircle, CalendarDays].map((Icon, i) => {
              const cls = "bg-happi-surface/10 rounded-xl p-4 backdrop-blur-sm hover:bg-happi-surface/20 transition-colors block text-center cursor-pointer";
              const inner = (
                <>
                  <Icon className="mx-auto mb-2" size={24} />
                  <p className="text-sm font-medium">{t(`contact.channels.${i}.label`)}</p>
                  <p className="text-xs text-white/80">{t(`contact.channels.${i}.value`)}</p>
                </>
              );
              if (i === 0) return <a key={i} href="mailto:contact@happi-bot.com" className={cls}>{inner}</a>;
              if (i === 1) return <a key={i} href="https://www.happi.ai" target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>;
              return <button key={i} onClick={openContactModal} className={cls}>{inner}</button>;
            })}
          </div>

          <p className="text-lg font-semibold text-white/90 leading-relaxed max-w-2xl mx-auto">
            {t.rich('contact.closing', {
              highlight: (chunks) => <span className="text-happi-yellow font-bold">{chunks}</span>,
              br: () => <br />,
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
