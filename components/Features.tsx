'use client';

import {
  Brain,
  Phone,
  Camera,
  Globe,
  Heart,
  BarChart3,
  Plug,
  Ticket,
  Filter,
  Shield,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { FadeInUp, Stagger, StaggerItem } from '@/components/ui/Animate';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import TiltCard from '@/components/ui/TiltCard';

const icons = [Brain, Phone, Camera, Globe, Heart, BarChart3, Plug, Ticket, Filter, Shield];

const colors = [
  'blue', 'green', 'yellow', 'blue', 'green',
  'yellow', 'blue', 'green', 'yellow', 'blue',
] as const;

const colorMap = {
  blue: 'bg-happi-blue/10 text-happi-blue',
  green: 'bg-happi-green/10 text-happi-green',
  yellow: 'bg-happi-yellow/10 text-happi-yellow',
};

const techColorMap: Record<string, string> = {
  'Claude': 'bg-happi-blue/10 text-happi-blue border-happi-blue/20',
  'Claude Vision': 'bg-happi-blue/10 text-happi-blue border-happi-blue/20',
  'Vapi · ElevenLabs · Deepgram': 'bg-happi-green/10 text-happi-green border-happi-green/20',
  'API · Webhooks': 'bg-happi-yellow/10 text-happi-yellow border-happi-yellow/20',
  'Made in France': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
};

export default function Features() {
  const t = useTranslations('features');

  return (
    <section id="features" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-happi-dark dot-pattern relative overflow-hidden">
      <AnimatedMesh variant="blue" />
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInUp className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-blue/20">
            {t('badge')}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            {t.rich('title', {
              highlight: (chunks) => <span className="gradient-text">{chunks}</span>,
            })}
          </h2>
          <p className="text-lg text-happi-muted max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </FadeInUp>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {icons.map((Icon, index) => {
            const tech = t(`items.${index}.tech`);
            const techClass = techColorMap[tech] ?? 'bg-happi-surface/50 text-happi-muted border-happi-border';
            return (
              <StaggerItem key={index}>
                <TiltCard className="h-full" intensity={6}>
                  <div className="glass-card rounded-2xl p-6 transition-all duration-300 group h-full cursor-default flex flex-col">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${colorMap[colors[index]]} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="text-sm font-semibold mb-2 leading-snug">
                      {t(`items.${index}.title`)}
                    </h3>
                    <p className="text-happi-muted leading-relaxed text-xs flex-1">
                      {t(`items.${index}.description`)}
                    </p>
                    <div className="mt-4">
                      <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full border ${techClass}`}>
                        {tech}
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
