'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

const copy = {
  fr: {
    title: 'Demander une démo',
    subtitle: 'Réponse sous 24h ouvrées. Pas de spam, promis.',
    name: 'Votre nom *',
    namePlaceholder: 'Jean Dupont',
    email: 'Email professionnel *',
    emailPlaceholder: 'jean@entreprise.fr',
    company: 'Entreprise (optionnel)',
    companyPlaceholder: 'Votre société',
    message: 'Votre message *',
    messagePlaceholder: 'Dites-nous en plus sur votre projet, votre secteur, vos besoins...',
    submit: 'Envoyer la demande',
    sending: 'Envoi en cours...',
    successTitle: 'Message envoyé !',
    successText: 'On vous répond sous 24h ouvrées. En attendant, explorez nos cas d\'usage.',
    errorText: 'Une erreur est survenue. Contactez-nous directement : nbayonne76@gmail.com',
    close: 'Fermer',
    required: 'Champs obligatoires',
  },
  en: {
    title: 'Request a Demo',
    subtitle: 'Response within 24 business hours. No spam, ever.',
    name: 'Your name *',
    namePlaceholder: 'John Smith',
    email: 'Business email *',
    emailPlaceholder: 'john@company.com',
    company: 'Company (optional)',
    companyPlaceholder: 'Your company',
    message: 'Your message *',
    messagePlaceholder: 'Tell us about your project, industry, and what you need...',
    submit: 'Send request',
    sending: 'Sending...',
    successTitle: 'Message sent!',
    successText: 'We\'ll get back to you within 24 business hours. In the meantime, explore our use cases.',
    errorText: 'Something went wrong. Reach us directly at: nbayonne76@gmail.com',
    close: 'Close',
    required: 'Required fields',
  },
};

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const locale = useLocale();
  const t = copy[locale === 'en' ? 'en' : 'fr'];
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = () => {
      setOpen(true);
      setStatus('idle');
      setForm({ name: '', email: '', company: '', message: '' });
    };
    window.addEventListener('open-contact-modal', handler);
    return () => window.removeEventListener('open-contact-modal', handler);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, locale }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={t.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Modal card */}
      <div className="relative w-full max-w-lg bg-happi-darker rounded-2xl border border-happi-border shadow-2xl shadow-black/50 animate-scale-in overflow-hidden">
        {/* Gradient top bar */}
        <div className="h-1 bg-gradient-to-r from-happi-blue to-happi-green" />

        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">{t.title}</h2>
            <p className="text-sm text-happi-muted mt-1">{t.subtitle}</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-happi-muted hover:text-white transition-colors ml-4 mt-0.5 flex-shrink-0"
            aria-label={t.close}
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-6">
          {status === 'success' ? (
            <div className="text-center py-8">
              <CheckCircle2 className="text-happi-green mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-2">{t.successTitle}</h3>
              <p className="text-happi-muted text-sm leading-relaxed">{t.successText}</p>
              <button
                onClick={() => setOpen(false)}
                className="mt-6 px-6 py-2.5 bg-happi-surface border border-happi-border text-white rounded-lg text-sm font-medium hover:bg-happi-border/50 transition-colors"
              >
                {t.close}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-happi-muted mb-1.5">{t.name}</label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder={t.namePlaceholder}
                    className="w-full bg-happi-surface border border-happi-border rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-happi-muted/50 focus:outline-none focus:border-happi-blue/60 focus:ring-1 focus:ring-happi-blue/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-happi-muted mb-1.5">{t.company}</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                    placeholder={t.companyPlaceholder}
                    className="w-full bg-happi-surface border border-happi-border rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-happi-muted/50 focus:outline-none focus:border-happi-blue/60 focus:ring-1 focus:ring-happi-blue/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-happi-muted mb-1.5">{t.email}</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder={t.emailPlaceholder}
                  className="w-full bg-happi-surface border border-happi-border rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-happi-muted/50 focus:outline-none focus:border-happi-blue/60 focus:ring-1 focus:ring-happi-blue/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-happi-muted mb-1.5">{t.message}</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder={t.messagePlaceholder}
                  className="w-full bg-happi-surface border border-happi-border rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-happi-muted/50 focus:outline-none focus:border-happi-blue/60 focus:ring-1 focus:ring-happi-blue/30 transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-start gap-2 text-sm text-red-400 bg-red-500/10 rounded-lg p-3 border border-red-500/20">
                  <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                  <span>{t.errorText}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending' || !form.name || !form.email || !form.message}
                className="w-full flex items-center justify-center gap-2 bg-happi-blue text-white py-3 rounded-lg font-medium text-sm hover:bg-happi-blue/90 transition-all hover:shadow-lg hover:shadow-happi-blue/20 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {t.sending}
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    {t.submit}
                  </>
                )}
              </button>

              <p className="text-xs text-happi-muted/60 text-center">{t.required}</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/** Call this from any button to open the contact modal */
export function openContactModal() {
  window.dispatchEvent(new CustomEvent('open-contact-modal'));
}
