'use client';

import { useState } from 'react';
import { Flame, Loader2, CheckCircle2 } from 'lucide-react';

interface Props {
  fr: boolean;
  variant?: 'hero' | 'inline';
}

export default function WaitlistForm({ fr, variant = 'hero' }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale: fr ? 'fr' : 'en' }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Error');
      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Error');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 py-2">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold text-base">
          <CheckCircle2 className="w-5 h-5" />
          {fr ? "Vous êtes sur la liste !" : "You're on the list!"}
        </div>
        <p className="text-sm text-happi-muted text-center">
          {fr
            ? 'Vérifiez votre boîte mail — un email de confirmation vient d\'arriver.'
            : 'Check your inbox. A confirmation email is on its way.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={
        variant === 'hero'
          ? 'flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto'
          : 'flex flex-col sm:flex-row items-stretch gap-3 w-full'
      }>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={fr ? 'votre@email.com' : 'you@email.com'}
          className="flex-1 px-4 py-3 rounded-xl bg-happi-surface border border-happi-border text-white placeholder:text-happi-muted/50 text-sm focus:outline-none focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20 transition-all"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-neutral-950 transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
          style={{ background: 'linear-gradient(135deg, #f97316, #fb923c)' }}
        >
          {status === 'loading' ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Flame className="w-4 h-4" />
          )}
          {fr ? 'Rejoindre' : 'Join now'}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-xs text-red-400 text-center">{errorMsg}</p>
      )}
    </form>
  );
}
