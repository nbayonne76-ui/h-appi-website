'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { useLocale } from 'next-intl';

export default function NewsletterSection() {
  const locale = useLocale();
  const fr = locale === 'fr';
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === 'loading') return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-happi-dark">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-happi-border bg-happi-surface p-8 md:p-10 text-center"
        >
          {/* Icon */}
          <div className="w-12 h-12 rounded-2xl bg-happi-blue/10 border border-happi-blue/20 flex items-center justify-center mx-auto mb-5">
            <Mail size={22} className="text-happi-blue" />
          </div>

          {/* Headline */}
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-2 tracking-tight">
            {fr ? 'Pas encore prêt à sauter le pas ?' : 'Not ready to take the plunge yet?'}
          </h2>
          <p className="text-happi-muted text-sm leading-relaxed mb-6 max-w-md mx-auto">
            {fr
              ? "Recevez 1 astuce concrète par mois sur l'IA et le digital pour les PME. Cas réels, résultats chiffrés. Pas de spam."
              : "Get 1 concrete monthly tip on AI and digital for SMEs. Real cases, measurable results. No spam."}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-7">
            {(fr
              ? ['1 email par mois', 'Résiliable à tout moment', 'Cas clients réels']
              : ['1 email per month', 'Unsubscribe anytime', 'Real client cases']
            ).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium text-happi-muted bg-happi-darker border border-happi-border rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Form or success */}
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-happi-green/15 flex items-center justify-center">
                <CheckCircle size={24} className="text-happi-green" />
              </div>
              <p className="text-white font-semibold text-sm">
                {fr ? "C'est noté. À bientôt dans votre boîte mail." : "You're in. See you in your inbox."}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={fr ? 'votre@email.com' : 'your@email.com'}
                required
                className="flex-1 bg-happi-darker border border-happi-border rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-happi-muted/50 focus:outline-none focus:border-happi-blue/50 transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-happi-blue text-white text-sm font-semibold rounded-xl hover:bg-happi-blue/90 transition-colors disabled:opacity-60 flex-shrink-0"
              >
                {status === 'loading'
                  ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  : <><span>{fr ? "S'inscrire" : 'Subscribe'}</span><ArrowRight size={14} /></>
                }
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="text-red-400 text-xs mt-3">
              {fr ? 'Une erreur est survenue. Réessayez ou écrivez-nous directement.' : 'An error occurred. Try again or write to us directly.'}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
