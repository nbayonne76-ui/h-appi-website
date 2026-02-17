'use client';

import { CheckCircle, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

function XIcon({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function ProblemSolution() {
  const t = useTranslations('problemSolution');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-happi-dark mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problem Column */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <XIcon className="text-red-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-red-700">{t('withoutTitle')}</h3>
            </div>
            <ul className="space-y-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <XIcon className="text-red-400 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{t(`problems.${index}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Column */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="text-happi-green" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-green-700">{t('withTitle')}</h3>
            </div>
            <ul className="space-y-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle
                    className="text-happi-green mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">{t(`solutions.${index}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#features"
            className="inline-flex items-center text-happi-blue font-medium hover:underline text-lg"
          >
            {t('cta')}
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
