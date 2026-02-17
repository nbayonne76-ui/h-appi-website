'use client';

import { MessageCircle, Sparkles, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-happi-blue/10 px-4 py-2 rounded-full">
              <Sparkles className="text-happi-blue" size={20} />
              <span className="text-sm font-medium text-happi-blue">
                {t('badge')}
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              {t.rich('title', {
                highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
              })}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {t('subtitle')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div>
                <div className="text-3xl font-bold text-happi-blue">{t('stats.adoption.value')}</div>
                <div className="text-sm text-gray-600">{t('stats.adoption.label')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-happi-green">{t('stats.availability.value')}</div>
                <div className="text-sm text-gray-600">{t('stats.availability.label')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-happi-yellow">{t('stats.cost.value')}</div>
                <div className="text-sm text-gray-600">{t('stats.cost.label')}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-happi-blue text-white rounded-lg hover:bg-opacity-90 transition-all hover:shadow-xl font-medium text-lg"
              >
                <MessageCircle className="mr-2" size={20} />
                {t('ctaPrimary')}
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-happi-blue text-happi-blue rounded-lg hover:bg-happi-blue hover:text-white transition-all font-medium text-lg"
              >
                <TrendingUp className="mr-2" size={20} />
                {t('ctaSecondary')}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 pt-6 text-sm text-gray-500">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-happi-green mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {t('trustHosting')}
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-happi-green mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {t('trustRgpd')}
              </div>
            </div>
          </div>

          {/* Right Column - Visual/Illustration */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Chat Interface Mockup */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 pb-4 border-b">
                  <div className="w-12 h-12 bg-gradient-to-br from-happi-blue to-happi-green rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">{t('chatAssistant')}</div>
                    <div className="text-sm text-green-500 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {t('chatOnline')}
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-3">
                  <div className="flex">
                    <div className="bg-happi-blue/10 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                      <p className="text-sm">
                        {t('chatMsg1')}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-happi-green/10 rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%]">
                      <p className="text-sm">
                        {t('chatMsg2')}
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-happi-blue/10 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                      <p className="text-sm">
                        {t('chatMsg3')}
                      </p>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: '0.1s' }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: '0.2s' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">
                  {t('floatResolution')}
                </div>
                <div className="text-2xl font-bold text-happi-green">{t('floatResolutionValue')}</div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <div className="text-xs text-gray-500 mb-1">
                  {t('floatResponse')}
                </div>
                <div className="text-2xl font-bold text-happi-blue">
                  {t('floatResponseValue')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
