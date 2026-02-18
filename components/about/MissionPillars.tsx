'use client';

import {
  Palette,
  BarChart3,
  Coins,
  Handshake,
  ShieldCheck,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

const pillarIcons = [Palette, BarChart3, Coins, Handshake, ShieldCheck];
const pillarNumbers = ['01', '02', '03', '04', '05'];
const pillarColors = ['happi-blue', 'happi-green', 'happi-yellow', 'happi-blue', 'happi-green'];
const pillarItemCounts = [3, 0, 3, 5, 0];
const pillarSubSectionCounts = [0, 2, 0, 0, 0];
const subSectionItemCounts = [[5, 5]];
const hasFootnote = [true, true, true, false, true];

const iconColorMap: Record<string, string> = {
  'happi-blue': 'bg-happi-blue/10 text-happi-blue',
  'happi-green': 'bg-happi-green/10 text-happi-green',
  'happi-yellow': 'bg-happi-yellow/10 text-happi-yellow',
};

const numberColorMap: Record<string, string> = {
  'happi-blue': 'text-happi-blue',
  'happi-green': 'text-happi-green',
  'happi-yellow': 'text-happi-yellow',
};

export default function MissionPillars() {
  const t = useTranslations('missionPillars');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
      <div className="max-w-5xl mx-auto space-y-12">
        {pillarIcons.map((Icon, idx) => {
          const color = pillarColors[idx];
          return (
            <div
              key={idx}
              className="bg-happi-surface rounded-2xl p-8 md:p-10 shadow-none border border-happi-border"
            >
              <div className="flex items-start space-x-4 mb-6">
                <span
                  className={`text-4xl font-bold ${numberColorMap[color]} opacity-30`}
                >
                  {pillarNumbers[idx]}
                </span>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconColorMap[color]}`}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {t(`pillars.${idx}.title`)}
                    </h3>
                  </div>

                  <p className="text-happi-muted leading-relaxed mb-6">
                    {t(`pillars.${idx}.intro`)}
                  </p>

                  {pillarItemCounts[idx] > 0 && (
                    <div className="space-y-3 mb-6">
                      {Array.from({ length: pillarItemCounts[idx] }).map((_, i) => (
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
                          <div>
                            <span className="font-semibold text-white">
                              {t(`pillars.${idx}.items.${i}.label`)}
                            </span>
                            <span className="text-happi-muted"> — {t(`pillars.${idx}.items.${i}.desc`)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {pillarSubSectionCounts[idx] > 0 && (
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {Array.from({ length: pillarSubSectionCounts[idx] }).map((_, subIdx) => (
                        <div key={subIdx} className="bg-happi-darker rounded-xl p-6">
                          <h4 className="font-bold text-white mb-3">
                            {t(`pillars.${idx}.subSections.${subIdx}.title`)}
                          </h4>
                          <ul className="space-y-2">
                            {Array.from({ length: subSectionItemCounts[0][subIdx] }).map((_, j) => (
                              <li
                                key={j}
                                className="flex items-start space-x-2 text-sm text-happi-muted"
                              >
                                <svg
                                  className="w-4 h-4 text-happi-green mt-0.5 flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>{t(`pillars.${idx}.subSections.${subIdx}.items.${j}`)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {hasFootnote[idx] && (
                    <p className="text-happi-muted text-sm italic border-l-4 border-happi-blue/20 pl-4">
                      {t(`pillars.${idx}.footnote`)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
