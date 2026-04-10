'use client';

import { openContactModal } from '@/components/ui/ContactModal';
import { Mail, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogNewsletter({ fr }: { fr: boolean }) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(16,185,129,0.08) 50%, rgba(167,139,250,0.06) 100%)',
            border: '1px solid rgba(59,130,246,0.2)',
          }}
        >
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-happi-blue/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-happi-green/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">

              {/* Left */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-happi-blue/10 border border-happi-blue/20 rounded-full text-xs font-semibold text-happi-blue uppercase tracking-wide mb-4">
                  <Mail size={11} />
                  {fr ? 'Contact direct' : 'Direct contact'}
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3">
                  {fr ? (
                    <>Une question ?<br /><span className="gradient-text">On vous répond.</span></>
                  ) : (
                    <>A question?<br /><span className="gradient-text">We'll answer.</span></>
                  )}
                </h2>
                <p className="text-happi-muted text-sm leading-relaxed max-w-md">
                  {fr
                    ? 'On préfère une vraie conversation à un formulaire générique. Écrivez-nous directement — réponse humaine garantie sous 24h ouvrées.'
                    : 'We prefer a real conversation to a generic form. Write to us directly — human response guaranteed within 24 working hours.'}
                </p>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-3 mt-5 justify-center md:justify-start">
                  {[
                    { icon: Clock, label: fr ? 'Réponse < 24h' : 'Response < 24h' },
                    { icon: MessageSquare, label: fr ? 'Réponse humaine' : 'Human reply' },
                    { icon: Mail, label: fr ? 'Sans engagement' : 'No commitment' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-happi-muted">
                      <item.icon size={12} className="text-happi-green" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — CTA */}
              <div className="flex flex-col items-center gap-3 flex-shrink-0">
                <motion.button
                  onClick={openContactModal}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 rounded-2xl bg-happi-blue text-white font-bold text-sm hover:bg-happi-blue/90 transition-colors shadow-lg shadow-happi-blue/20"
                >
                  {fr ? 'Nous écrire →' : 'Write to us →'}
                </motion.button>
                <p className="text-happi-muted/50 text-[11px]">
                  {fr ? 'Gratuit · Sans inscription' : 'Free · No sign-up'}
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
