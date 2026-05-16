'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

type FAQItem = {
  qFr: string;
  qEn: string;
  aFr: string;
  aEn: string;
};

const faqs: FAQItem[] = [
  {
    qFr: "C'est combien ?",
    qEn: 'How much does it cost?',
    aFr: "Nos projets commencent entre 2 000 et 5 000 € selon la complexité. Pas d'abonnement mensuel obligatoire, pas de licence cachée. On préfère un appel de 15 min pour vous donner un chiffre réel basé sur votre besoin spécifique.",
    aEn: "Our projects start between €2,000 and €5,000 depending on complexity. No mandatory monthly subscription, no hidden licence fees. We prefer a 15-minute call to give you a real figure based on your specific need.",
  },
  {
    qFr: "Pourquoi pas Chatbase, Tidio ou Intercom ?",
    qEn: "Why not Chatbase, Tidio or Intercom?",
    aFr: "Ces outils sont excellents pour des cas standards. Mais si votre métier a des spécificités — livraison avec photo, qualification multi-étapes, intégration avec votre ERP, SAV sectoriel — un bot générique atteint vite ses limites. Nos clients nous ont choisis parce que les outils SaaS ne répondaient pas à leurs vrais problèmes.",
    aEn: "These tools are excellent for standard cases. But if your business has specific needs — photo-documented delivery, multi-step qualification, ERP integration, sector-specific after-sales — a generic bot quickly hits its limits. Our clients chose us because SaaS tools weren't solving their real problems.",
  },
  {
    qFr: "Et si ça ne fonctionne pas pour mon business ?",
    qEn: "What if it doesn't work for my business?",
    aFr: "Vous êtes propriétaire du code dès le premier jour. Si pour une raison ou une autre la collaboration s'arrête, vous repartez avec tout ce qui a été construit. Aucun vendor lock-in, aucune prise d'otage. C'est notre engagement fondamental.",
    aEn: "You own the code from day one. If for any reason the collaboration ends, you take everything built with you. No vendor lock-in, no hostage situation. This is our core commitment.",
  },
  {
    qFr: "Combien de temps avant de voir des résultats concrets ?",
    qEn: "How long before seeing concrete results?",
    aFr: "Mobilier de France a observé 65% de réduction des appels SAV dès la 4ème semaine après déploiement. En règle générale, les premiers résultats mesurables arrivent dans les 30 premiers jours. On vous aide à définir les bons indicateurs avant même de commencer.",
    aEn: "Mobilier de France saw a 65% reduction in after-sales calls from the 4th week after deployment. As a general rule, the first measurable results come within the first 30 days. We help you define the right metrics before we even start.",
  },
  {
    qFr: "Votre équipe est en Égypte — est-ce un risque ?",
    qEn: "Your team is in Egypt — is that a risk?",
    aFr: "Notre modèle franco-égyptien est notre avantage compétitif, pas un risque. Expertise technique du Moyen-Orient, direction et relation client basées en France, hébergement exclusivement en Europe. Nous travaillons sur le même fuseau horaire que Paris et nos clients n'ont jamais signalé de problème de communication.",
    aEn: "Our Franco-Egyptian model is our competitive advantage, not a risk. Middle Eastern technical expertise, French-based management and client relations, European-only hosting. We work on the same timezone as Paris and our clients have never reported a communication issue.",
  },
];

export default function HomeFAQ({ fr }: { fr: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-happi-darker">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-happi-yellow/10 text-happi-yellow rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-happi-yellow/20">
            {fr ? 'Vos vraies questions' : 'Your real questions'}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {fr ? 'On répond sans détour' : 'Straight answers'}
          </h2>
          <p className="text-happi-muted text-sm mt-3">
            {fr
              ? 'Les questions que vous vous posez vraiment avant de prendre une décision.'
              : 'The questions you actually ask yourself before making a decision.'}
          </p>
        </motion.div>

        {/* Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-happi-blue/30 bg-happi-blue/5'
                    : 'border-happi-border bg-happi-surface hover:border-happi-border/80'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`font-semibold text-sm leading-snug ${isOpen ? 'text-white' : 'text-happi-muted'}`}>
                    {fr ? faq.qFr : faq.qEn}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-happi-blue/20 text-happi-blue' : 'bg-happi-darker text-happi-muted'
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5">
                        <p className="text-happi-muted text-sm leading-relaxed border-t border-happi-border/40 pt-4">
                          {fr ? faq.aFr : faq.aEn}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom nudge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center text-happi-muted text-xs mt-8"
        >
          {fr
            ? "Une question qui n'est pas là ? On répond en moins de 24h."
            : "A question not listed here? We reply within 24 hours."}
        </motion.p>
      </div>
    </section>
  );
}
