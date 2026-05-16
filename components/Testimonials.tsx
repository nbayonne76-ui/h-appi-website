'use client';

import { motion } from 'framer-motion';
import { Quote, ExternalLink, Star } from 'lucide-react';
import { useLocale } from 'next-intl';
import { FadeInUp } from '@/components/ui/Animate';
import AnimatedMesh from '@/components/ui/AnimatedMesh';
import { openContactModal } from '@/components/ui/ContactModal';

// TODO: Replace placeholder quote with Olivier's exact words
const testimonial = {
  nameFr: 'Olivier Bouteille',
  nameEn: 'Olivier Bouteille',
  titleFr: 'Directeur, Mobilier de France',
  titleEn: 'Director, Mobilier de France',
  linkedin: 'https://www.linkedin.com/in/bouteille-olivier/',
  initials: 'OB',
  quoteFr: `En quelques semaines, notre équipe ne subissait plus les appels SAV qui l'épuisaient. Les clients trouvent leurs réponses d'eux-mêmes, et mon équipe se concentre sur ce qui compte vraiment. Je ne pensais pas que ce serait aussi rapide à mettre en place.`,
  quoteEn: `Within a few weeks, our team was no longer overwhelmed by after-sales calls. Customers find their own answers, and my team can focus on what really matters. I didn't think it would be this quick to get up and running.`,
  results: [
    { labelFr: '65 % d\'appels en moins', labelEn: '65% fewer calls', color: '#3B82F6' },
    { labelFr: 'Déployé en 14 jours', labelEn: 'Deployed in 14 days', color: '#10B981' },
    { labelFr: '0 litige perdu', labelEn: '0 dispute lost', color: '#A78BFA' },
  ],
};

export default function Testimonials() {
  const locale = useLocale();
  const fr = locale === 'fr';

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-happi-dark relative overflow-hidden">
      <AnimatedMesh variant="green" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <FadeInUp className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-happi-green/10 text-happi-green rounded-full text-xs font-semibold uppercase tracking-wide mb-5 border border-happi-green/20">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill="currentColor" />
            ))}
            <span className="ml-1">{fr ? 'Ils nous font confiance' : 'Trusted by our clients'}</span>
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            {fr ? 'Ce qu\'ils ont vécu, ' : 'What they experienced, '}
            <span className="gradient-text">{fr ? 'dans leurs mots' : 'in their words'}</span>
          </h2>
        </FadeInUp>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-happi-blue/30 via-happi-green/20 to-happi-blue/10 blur-xl opacity-60" />

          <div className="relative glass-card rounded-3xl p-8 md:p-12 border border-happi-border/60">

            {/* Big quote mark */}
            <Quote
              size={56}
              className="text-happi-blue/20 absolute top-8 right-8 md:top-10 md:right-10"
              strokeWidth={1.5}
            />

            {/* Quote text */}
            <blockquote className="text-white text-lg md:text-xl leading-relaxed font-medium mb-8 max-w-2xl relative z-10">
              &ldquo;{fr ? testimonial.quoteFr : testimonial.quoteEn}&rdquo;
            </blockquote>

            {/* Result badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {testimonial.results.map((r, i) => (
                <span
                  key={i}
                  className="text-xs font-bold px-3 py-1.5 rounded-full border"
                  style={{ background: `${r.color}15`, color: r.color, borderColor: `${r.color}30` }}
                >
                  {fr ? r.labelFr : r.labelEn}
                </span>
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-happi-blue to-happi-green flex items-center justify-center flex-shrink-0 shadow-lg shadow-happi-blue/20">
                  <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="text-white font-bold text-base">{fr ? testimonial.nameFr : testimonial.nameEn}</div>
                  <div className="text-happi-muted text-sm">{fr ? testimonial.titleFr : testimonial.titleEn}</div>
                </div>
              </div>

              {/* LinkedIn verification */}
              <a
                href={testimonial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#0A66C2]/30 bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-all text-xs font-semibold"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                {fr ? 'Vérifier sur LinkedIn' : 'Verify on LinkedIn'}
                <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* CTA below */}
        <FadeInUp delay={0.2} className="text-center mt-10">
          <p className="text-happi-muted text-sm mb-4">
            {fr
              ? 'Vous voulez le même résultat pour votre équipe ?'
              : 'Want the same result for your team?'}
          </p>
          <button
            onClick={openContactModal}
            className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 bg-happi-blue text-white rounded-xl hover:bg-happi-blue/90 transition-all font-semibold shadow-lg shadow-happi-blue/20 text-sm"
          >
            {fr ? 'Voir une démo gratuite en 15 min' : 'See a free demo in 15 min'}
          </button>
        </FadeInUp>

      </div>
    </section>
  );
}
