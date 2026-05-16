'use client';

import { motion } from 'framer-motion';
import { Calendar, Hammer, Key } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    color: '#3B82F6',
    numFr: '01',
    numEn: '01',
    titleFr: 'On fait connaissance — 15 min',
    titleEn: 'We meet — 15 min',
    descFr: 'Un appel sans pitch commercial. On écoute votre activité, vos clients, ce qui vous coûte du temps et de l\'argent aujourd\'hui.',
    descEn: 'A call with no sales pitch. We listen to your business, your customers, what costs you time and money today.',
    tagFr: 'Gratuit · Sans engagement',
    tagEn: 'Free · No commitment',
  },
  {
    icon: Hammer,
    color: '#10B981',
    numFr: '02',
    numEn: '02',
    titleFr: 'On construit votre solution — 2 à 3 semaines',
    titleEn: 'We build your solution — 2 to 3 weeks',
    descFr: 'Développement en itérations courtes. Vous validez chaque semaine. Pas de surprise, pas de dérive de budget.',
    descEn: 'Development in short iterations. You validate every week. No surprises, no budget overrun.',
    tagFr: 'Livraison rapide · Suivi hebdo',
    tagEn: 'Fast delivery · Weekly updates',
  },
  {
    icon: Key,
    color: '#A78BFA',
    numFr: '03',
    numEn: '03',
    titleFr: 'Vous êtes propriétaire à vie',
    titleEn: 'You own it forever',
    descFr: 'Le code source vous appartient. Hébergez où vous voulez, faites évoluer avec n\'importe quel développeur. Pas d\'abonnement obligatoire.',
    descEn: 'The source code belongs to you. Host wherever you want, evolve it with any developer. No mandatory subscription.',
    tagFr: '100% votre propriété',
    tagEn: '100% your property',
  },
];

export default function HowItWorks({ fr }: { fr: boolean }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-happi-blue/20">
            {fr ? 'Comment ça marche' : 'How it works'}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {fr ? (
              <>De l'idée à la mise en ligne <span className="gradient-text">en 3 étapes</span></>
            ) : (
              <>From idea to launch <span className="gradient-text">in 3 steps</span></>
            )}
          </h2>
          <p className="text-happi-muted text-sm mt-3 max-w-xl mx-auto">
            {fr
              ? 'Pas de jargon, pas de surprise. Un processus simple et transparent du premier appel au déploiement.'
              : 'No jargon, no surprises. A simple, transparent process from first call to deployment.'}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-[calc(16.6%+1.5rem)] right-[calc(16.6%+1.5rem)] h-px bg-gradient-to-r from-happi-blue/30 via-happi-green/30 to-purple-400/30" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.12, ease: 'easeOut' }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border relative z-10"
                  style={{ background: `${step.color}12`, borderColor: `${step.color}30` }}
                >
                  <Icon size={28} style={{ color: step.color }} />
                  {/* Step number */}
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-[10px] font-black flex items-center justify-center border-2 border-happi-darker"
                    style={{ background: step.color, color: '#fff' }}
                  >
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-3 leading-snug">
                  {fr ? step.titleFr : step.titleEn}
                </h3>

                <p className="text-happi-muted text-sm leading-relaxed mb-4 max-w-xs">
                  {fr ? step.descFr : step.descEn}
                </p>

                <span
                  className="text-[11px] font-semibold px-3 py-1 rounded-full border"
                  style={{ background: `${step.color}10`, color: step.color, borderColor: `${step.color}25` }}
                >
                  {fr ? step.tagFr : step.tagEn}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
