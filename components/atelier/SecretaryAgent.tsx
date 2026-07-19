'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, PhoneOff, Send, Loader2, Sparkles, Star } from 'lucide-react';
import { detectIntent, generateSummary, getGreeting, getResponse } from '@/lib/secretary-agent/engine';
import type { CallSummary, ChatMessage, ConversationState, Intent } from '@/lib/secretary-agent/types';

const INTENT_LABELS: Record<Intent, { fr: string; en: string; color: string }> = {
  appointment: { fr: 'Rendez-vous', en: 'Appointment', color: '#10B981' },
  cancel: { fr: 'Annulation', en: 'Cancellation', color: '#F59E0B' },
  hours: { fr: 'Horaires', en: 'Hours', color: '#3B82F6' },
  price: { fr: 'Tarifs', en: 'Pricing', color: '#3B82F6' },
  address: { fr: 'Adresse', en: 'Address', color: '#3B82F6' },
  transfer: { fr: 'Transfert', en: 'Transfer', color: '#8B5CF6' },
  complaint: { fr: 'Réclamation', en: 'Complaint', color: '#EF4444' },
  order: { fr: 'Commande', en: 'Order', color: '#10B981' },
  emergency: { fr: 'Urgence', en: 'Emergency', color: '#EF4444' },
  goodbye: { fr: 'Fin d\'appel', en: 'Goodbye', color: '#94A3B8' },
  default: { fr: 'Général', en: 'General', color: '#94A3B8' },
};

const SUGGESTIONS: { fr: string; en: string }[] = [
  { fr: 'Je voudrais prendre rendez-vous', en: 'I\'d like to book an appointment' },
  { fr: 'Quels sont vos horaires ?', en: 'What are your opening hours?' },
  { fr: 'J\'ai un problème urgent', en: 'I have an urgent problem' },
  { fr: 'Je veux parler à un responsable', en: 'I want to speak to a manager' },
];

const SENTIMENT_LABELS: Record<CallSummary['sentiment'], { fr: string; en: string; color: string }> = {
  positive: { fr: 'Positif', en: 'Positive', color: '#10B981' },
  neutral: { fr: 'Neutre', en: 'Neutral', color: '#94A3B8' },
  negative: { fr: 'Négatif', en: 'Negative', color: '#EF4444' },
  urgent: { fr: 'Urgent', en: 'Urgent', color: '#F59E0B' },
};

const OUTCOME_LABELS: Record<CallSummary['outcome'], { fr: string; en: string }> = {
  resolved: { fr: 'Résolu', en: 'Resolved' },
  transferred: { fr: 'Transféré', en: 'Transferred' },
};

function TypingDots() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm bg-happi-blue/20">📞</div>
      <div className="bg-white/6 rounded-xl rounded-tl-sm px-4 py-3 flex gap-1.5 items-center">
        {[0, 150, 300].map((d) => (
          <span key={d} className="w-1.5 h-1.5 rounded-full bg-happi-muted animate-bounce" style={{ animationDelay: `${d}ms`, animationDuration: '0.9s' }} />
        ))}
      </div>
    </div>
  );
}

export default function SecretaryAgent({ fr }: { fr: boolean }) {
  const [clientName, setClientName] = useState(fr ? 'Cabinet Dentaire Martin' : 'Martin Dental Clinic');
  const [vip, setVip] = useState(false);
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [state, setState] = useState<ConversationState>({});
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [summary, setSummary] = useState<CallSummary | null>(null);
  const turnCount = useRef(0);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isTyping, summary]);

  function startCall() {
    const greeting = getGreeting(fr, clientName || (fr ? 'notre entreprise' : 'our company'), 'Happi', vip);
    setMessages([{ role: 'agent', text: greeting }]);
    setState({});
    setSummary(null);
    setStarted(true);
    turnCount.current = 0;
  }

  function send(text: string) {
    if (!text.trim() || isTyping || summary) return;
    const callerIntent = detectIntent(text);
    setMessages((prev) => [...prev, { role: 'caller', text, intent: callerIntent }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const turn = getResponse(text, state, fr, turnCount.current++);
      setState(turn.state);
      setMessages((prev) => [...prev, { role: 'agent', text: turn.text, intent: turn.intent }]);
      setIsTyping(false);

      if (turn.action === 'end_call' || turn.action === 'transfer') {
        setTimeout(() => {
          setMessages((prev) => {
            setSummary(generateSummary(prev.map((m) => ({ role: m.role, text: m.text })), fr));
            return prev;
          });
        }, 500);
      }
    }, 850);
  }

  function endCall() {
    if (summary) return;
    setMessages((prev) => {
      setSummary(generateSummary(prev.map((m) => ({ role: m.role, text: m.text })), fr));
      return prev;
    });
  }

  return (
    <div className="flex flex-col gap-6">
      {!started ? (
        <div className="glass-card rounded-2xl p-6 border border-happi-border">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles size={16} className="text-happi-blue" />
            <h3 className="text-sm font-bold text-white">{fr ? 'Configurez l\'appel' : 'Configure the call'}</h3>
          </div>
          <div className="flex flex-col gap-4 mb-5">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-happi-muted">{fr ? 'Nom de l\'entreprise appelée' : 'Business being called'}</span>
              <input
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="bg-happi-dark border border-happi-border rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:border-happi-blue/60 transition-colors"
              />
            </label>
            <button
              onClick={() => setVip((v) => !v)}
              className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-left transition-colors ${vip ? 'border-amber-400/50 bg-amber-400/10' : 'border-happi-border'}`}
            >
              <Star size={14} className={vip ? 'text-amber-400' : 'text-happi-muted'} fill={vip ? 'currentColor' : 'none'} />
              <span className="text-xs text-white">{fr ? 'Simuler un appelant VIP' : 'Simulate a VIP caller'}</span>
            </button>
          </div>
          <motion.button
            onClick={startCall}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-xl text-sm font-bold text-white bg-happi-blue hover:bg-happi-blue/90 transition-colors flex items-center justify-center gap-2"
          >
            <Phone size={15} />
            {fr ? 'Démarrer l\'appel' : 'Start the call'}
          </motion.button>
        </div>
      ) : (
        <div className="glass-card rounded-2xl border border-happi-border overflow-hidden flex flex-col" style={{ height: '560px' }}>
          <div className="px-4 py-3 border-b border-happi-border flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-happi-blue/20 flex items-center justify-center text-lg flex-shrink-0">📞</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-white truncate">{clientName || (fr ? 'Votre entreprise' : 'Your business')}</div>
              <div className="text-[10px] text-happi-blue font-semibold">{fr ? 'Appel en cours · Agent Happi' : 'Live call · Happi Agent'}</div>
            </div>
            {!summary && (
              <button
                onClick={endCall}
                className="w-8 h-8 rounded-lg bg-red-500/15 hover:bg-red-500/25 transition-colors flex items-center justify-center text-red-400 flex-shrink-0"
                aria-label={fr ? 'Terminer l\'appel' : 'End call'}
              >
                <PhoneOff size={14} />
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 min-h-0">
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col gap-1 ${msg.role === 'caller' ? 'items-end' : 'items-start'}`}
                >
                  <div className={`flex items-start gap-2 ${msg.role === 'caller' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm mt-0.5 ${msg.role === 'caller' ? 'bg-white/10' : 'bg-happi-blue/20'}`}>
                      {msg.role === 'caller' ? '👤' : '📞'}
                    </div>
                    <div
                      className={`rounded-xl px-3 py-2.5 text-sm leading-relaxed max-w-[80%] text-white ${msg.role === 'caller' ? 'rounded-tr-sm bg-happi-blue' : 'rounded-tl-sm bg-white/6'}`}
                    >
                      {msg.text}
                    </div>
                  </div>
                  {msg.role === 'caller' && msg.intent && (
                    <span
                      className="text-[9px] font-semibold px-2 py-0.5 rounded-full mr-9"
                      style={{ color: INTENT_LABELS[msg.intent].color, background: `${INTENT_LABELS[msg.intent].color}18` }}
                    >
                      {fr ? 'Intention détectée : ' : 'Intent detected: '}{fr ? INTENT_LABELS[msg.intent].fr : INTENT_LABELS[msg.intent].en}
                    </span>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div key="typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <TypingDots />
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={endRef} />
          </div>

          {!summary && (
            <div className="px-4 py-3 border-t border-happi-border flex-shrink-0 flex flex-col gap-2.5">
              {messages.length <= 1 && (
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s.fr}
                      onClick={() => send(fr ? s.fr : s.en)}
                      className="text-[11px] px-2.5 py-1.5 rounded-full border border-happi-border text-happi-muted hover:text-white hover:border-white/25 transition-colors"
                    >
                      {fr ? s.fr : s.en}
                    </button>
                  ))}
                </div>
              )}
              <form
                onSubmit={(e) => { e.preventDefault(); send(input); }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={fr ? 'Écrivez comme si vous appeliez…' : 'Type as if you were calling…'}
                  className="flex-1 bg-happi-dark border border-happi-border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-happi-muted/50 outline-none focus:border-happi-blue/60 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 rounded-xl bg-happi-blue hover:bg-happi-blue/90 disabled:opacity-40 transition-colors flex items-center justify-center text-white flex-shrink-0"
                  aria-label={fr ? 'Envoyer' : 'Send'}
                >
                  {isTyping ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* Call analysis card */}
      <AnimatePresence>
        {summary && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl p-6 border border-happi-border"
          >
            <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
              <div className="text-xs font-semibold text-happi-muted uppercase tracking-wide">
                {fr ? 'Analyse d\'appel — générée automatiquement' : 'Call analysis — auto-generated'}
              </div>
              <button
                onClick={startCall}
                className="text-[11px] font-semibold text-happi-blue hover:underline"
              >
                {fr ? 'Nouvel appel' : 'New call'}
              </button>
            </div>

            <p className="text-sm text-white leading-relaxed mb-5">{summary.summary}</p>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-happi-border p-3">
                <div className="text-[10px] text-happi-muted mb-1.5">{fr ? 'Sentiment' : 'Sentiment'}</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: SENTIMENT_LABELS[summary.sentiment].color }} />
                  <span className="text-sm font-bold text-white">{fr ? SENTIMENT_LABELS[summary.sentiment].fr : SENTIMENT_LABELS[summary.sentiment].en}</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/8 overflow-hidden mt-2">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: SENTIMENT_LABELS[summary.sentiment].color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${summary.sentimentScore * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
              <div className="rounded-xl border border-happi-border p-3">
                <div className="text-[10px] text-happi-muted mb-1.5">{fr ? 'Intention' : 'Intent'}</div>
                <div className="text-sm font-bold text-white capitalize">
                  {summary.intent in INTENT_LABELS
                    ? (fr ? INTENT_LABELS[summary.intent as Intent].fr : INTENT_LABELS[summary.intent as Intent].en)
                    : (fr ? 'Information' : 'Information')}
                </div>
              </div>
              <div className="rounded-xl border border-happi-border p-3">
                <div className="text-[10px] text-happi-muted mb-1.5">{fr ? 'Issue' : 'Outcome'}</div>
                <div className="text-sm font-bold text-white">{fr ? OUTCOME_LABELS[summary.outcome].fr : OUTCOME_LABELS[summary.outcome].en}</div>
              </div>
            </div>

            <p className="text-[11px] text-happi-muted mt-5 leading-relaxed">
              {fr
                ? "C'est exactement la fiche que reçoit un client H'appi après chaque appel réel — email + SMS automatiques, webhook CRM."
                : "This is exactly the card an H'appi client receives after every real call — automatic email + SMS, CRM webhook."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
