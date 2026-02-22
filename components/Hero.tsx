'use client';

import { MessageCircle, Sparkles, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { CountUp } from '@/components/ui/CountUp';

export default function Hero() {
  const t = useTranslations('hero');
  const prefersReduced = useReducedMotion();

  const item = (delay: number) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReduced ? 0.3 : 0.5, delay, ease: 'easeOut' },
  });

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div {...item(0)}>
              <div className="inline-flex items-center space-x-2 bg-happi-blue/10 border border-happi-blue/20 px-4 py-2 rounded-full">
                <Sparkles className="text-happi-blue" size={18} />
                <span className="text-sm font-medium text-happi-blue">
                  {t('badge')}
                </span>
              </div>
            </motion.div>

            <motion.h1
              {...item(0.1)}
              className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
            >
              {t.rich('title', {
                highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
              })}
            </motion.h1>

            <motion.p {...item(0.2)} className="text-lg text-happi-muted leading-relaxed">
              {t('subtitle')}
            </motion.p>

            {/* Stats */}
            <motion.div {...item(0.3)} className="grid grid-cols-3 gap-6 pt-4">
              <div>
                <CountUp value={t('stats.adoption.value')} className="text-3xl font-bold text-happi-blue" />
                <div className="text-sm text-happi-muted">{t('stats.adoption.label')}</div>
              </div>
              <div>
                <CountUp value={t('stats.availability.value')} className="text-3xl font-bold text-happi-green" />
                <div className="text-sm text-happi-muted">{t('stats.availability.label')}</div>
              </div>
              <div>
                <CountUp value={t('stats.cost.value')} className="text-3xl font-bold text-happi-yellow" />
                <div className="text-sm text-happi-muted">{t('stats.cost.label')}</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...item(0.4)} className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#demo"
                className="btn-shimmer inline-flex items-center justify-center px-8 py-3.5 bg-happi-blue text-white rounded-lg hover:bg-happi-blue/90 transition-all hover:shadow-lg hover:shadow-happi-blue/25 font-medium active:scale-[0.97]"
              >
                <MessageCircle className="mr-2" size={18} />
                {t('ctaPrimary')}
              </a>
              <a
                href="/tarifs"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-happi-border text-white rounded-lg hover:bg-happi-surface transition-all font-medium active:scale-[0.97]"
              >
                <TrendingUp className="mr-2" size={18} />
                {t('ctaSecondary')}
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div {...item(0.5)} className="flex items-center space-x-4 pt-4 text-sm text-happi-muted">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-happi-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('trustHosting')}
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-happi-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('trustRgpd')}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Chat Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: prefersReduced ? 0 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative bg-happi-surface rounded-2xl shadow-2xl shadow-black/20 p-8 border border-happi-border">
              {/* Chat Interface Mockup */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 pb-4 border-b border-happi-border">
                  <div className="w-12 h-12 bg-gradient-to-br from-happi-blue to-happi-green rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">{t('chatAssistant')}</div>
                    <div className="text-sm text-happi-green flex items-center">
                      <span className="w-2 h-2 bg-happi-green rounded-full mr-2"></span>
                      {t('chatOnline')}
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-3">
                  <motion.div
                    className="flex"
                    initial={{ opacity: 0, x: prefersReduced ? 0 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <div className="bg-happi-blue/15 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                      <p className="text-sm">{t('chatMsg1')}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex justify-end"
                    initial={{ opacity: 0, x: prefersReduced ? 0 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.95 }}
                  >
                    <div className="bg-happi-green/15 rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%]">
                      <p className="text-sm">{t('chatMsg2')}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex"
                    initial={{ opacity: 0, x: prefersReduced ? 0 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                  >
                    <div className="bg-happi-blue/15 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                      <p className="text-sm">{t('chatMsg3')}</p>
                    </div>
                  </motion.div>

                  {/* Typing Indicator */}
                  <motion.div
                    className="flex"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.45 }}
                  >
                    <div className="bg-happi-surface border border-happi-border rounded-2xl rounded-tl-none px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-happi-muted rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-happi-muted rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-happi-muted rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-6 -right-6 bg-happi-surface rounded-lg shadow-lg shadow-black/20 p-4 border border-happi-border"
                initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.8, y: prefersReduced ? 0 : 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6, ease: 'backOut' }}
              >
                <div className="text-xs text-happi-muted mb-1">{t('floatResolution')}</div>
                <div className="text-2xl font-bold text-happi-green">{t('floatResolutionValue')}</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-happi-surface rounded-lg shadow-lg shadow-black/20 p-4 border border-happi-border"
                initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.8, y: prefersReduced ? 0 : -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.75, ease: 'backOut' }}
              >
                <div className="text-xs text-happi-muted mb-1">{t('floatResponse')}</div>
                <div className="text-2xl font-bold text-happi-blue">{t('floatResponseValue')}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
