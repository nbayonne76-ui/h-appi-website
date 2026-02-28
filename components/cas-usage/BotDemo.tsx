'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { MessageSquare, CheckCircle2, RotateCcw } from 'lucide-react';

interface Message {
  role: 'bot' | 'user';
  text: string;
}

interface ScriptStep {
  botText: string;
  userReplies: string[];
}

const getScript = (fr: boolean): ScriptStep[] => [
  {
    botText: fr
      ? "Bonjour ! Je suis le bot H'appi SAV. Comment puis-je vous aider ?"
      : "Hello! I'm the H'appi SAV bot. How can I help you?",
    userReplies: fr
      ? ["J'ai reçu un meuble endommagé"]
      : ['I received damaged furniture'],
  },
  {
    botText: fr
      ? 'Je suis désolé. Pouvez-vous me donner votre numéro de commande ?'
      : 'Sorry to hear that. Could you give me your order number?',
    userReplies: ['CMD-2024-8847'],
  },
  {
    botText: fr
      ? 'Commande trouvée ✓ — Table chêne massif, livrée le 24 fév. Quel est le problème exact ?'
      : 'Order found ✓ — Solid oak table, delivered Feb 24. What is the exact issue?',
    userReplies: fr
      ? ['Un pied de table est cassé', 'Pièce manquante']
      : ['A table leg is broken', 'Missing part'],
  },
  {
    botText: fr
      ? '✅ Ticket #SAV-4521 créé automatiquement. Notre technicien vous contacte dans les 4h. Aucun appel nécessaire.'
      : '✅ Ticket #SAV-4521 created automatically. Our technician will contact you within 4h. No phone call needed.',
    userReplies: [],
  },
];

export function BotDemo() {
  const locale = useLocale();
  const fr = locale === 'fr';
  const script = getScript(fr);

  const [messages, setMessages] = useState<Message[]>([]);
  const [scriptStep, setScriptStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [started, setStarted] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Scroll inside the chat container only — never scrolls the page
  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isTyping]);

  const start = () => {
    setStarted(true);
    setIsTyping(true);
    setTimeout(() => {
      setMessages([{ role: 'bot', text: script[0].botText }]);
      setIsTyping(false);
    }, 900);
  };

  const handleReply = (replyText: string) => {
    if (isTyping) return;
    const nextStep = scriptStep + 1;
    setMessages((prev) => [...prev, { role: 'user', text: replyText }]);
    setIsTyping(true);
    setScriptStep(nextStep);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: script[nextStep].botText }]);
      setIsTyping(false);
      if (script[nextStep].userReplies.length === 0) {
        setIsDone(true);
      }
    }, 1100);
  };

  const reset = () => {
    setMessages([]);
    setScriptStep(0);
    setIsTyping(false);
    setIsDone(false);
    setStarted(false);
  };

  const currentReplies =
    !isDone && !isTyping && started ? script[scriptStep].userReplies : [];

  return (
    <div className="mt-2">
      {/* Section label */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-happi-blue" />
        <span className="text-xs font-semibold text-happi-blue uppercase tracking-wide">
          {fr ? 'Démo interactive — Essayez le bot SAV' : 'Interactive demo — Try the SAV bot'}
        </span>
      </div>

      {/* Chat window */}
      <div className="bg-happi-darker border border-happi-border rounded-2xl overflow-hidden">
        {/* Chat header bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-happi-border/50 bg-happi-dark/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-happi-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageSquare size={14} className="text-happi-blue" />
            </div>
            <div>
              <div className="text-white text-xs font-semibold">Bot SAV H&apos;appi</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-1.5 bg-happi-green rounded-full" />
                <span className="text-happi-muted text-[10px]">
                  {fr ? 'En ligne · Répond en 2 s' : 'Online · Replies in 2s'}
                </span>
              </div>
            </div>
          </div>
          {started && (
            <button
              onClick={reset}
              className="text-happi-muted hover:text-white transition-colors text-[11px] flex items-center gap-1.5"
            >
              <RotateCcw size={11} />
              {fr ? 'Recommencer' : 'Restart'}
            </button>
          )}
        </div>

        {/* Messages */}
        <div ref={messagesContainerRef} className="px-4 pt-4 pb-2 min-h-[160px] max-h-[300px] overflow-y-auto space-y-3">
          {!started ? (
            <div className="flex items-center justify-center h-28">
              <button
                onClick={start}
                className="bg-happi-blue/20 border border-happi-blue/40 hover:bg-happi-blue/30 hover:border-happi-blue/60 text-happi-blue text-sm font-medium px-6 py-2.5 rounded-xl transition-all"
              >
                {fr ? '▶  Lancer la démo' : '▶  Start demo'}
              </button>
            </div>
          ) : (
            <>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'bot'
                        ? 'bg-happi-surface border border-happi-border text-white rounded-tl-sm'
                        : 'bg-happi-blue/20 border border-happi-blue/30 text-white rounded-tr-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-happi-surface border border-happi-border px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 bg-happi-muted rounded-full animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-happi-muted rounded-full animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-happi-muted rounded-full animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Reply buttons */}
        {currentReplies.length > 0 && (
          <div className="px-4 pb-3 pt-1 flex flex-wrap gap-2">
            {currentReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleReply(reply)}
                className="bg-happi-dark border border-happi-border hover:border-happi-blue/50 hover:bg-happi-blue/10 text-white text-xs px-3.5 py-2 rounded-xl transition-all text-left"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Success banner */}
        {isDone && (
          <div className="px-4 pb-4 pt-1">
            <div className="flex items-center justify-center gap-2 bg-happi-green/10 border border-happi-green/30 rounded-xl py-2.5 px-4">
              <CheckCircle2 size={15} className="text-happi-green flex-shrink-0" />
              <span className="text-happi-green text-xs font-semibold">
                {fr
                  ? 'Résolu en 2 minutes · Aucun appel nécessaire'
                  : 'Resolved in 2 minutes · No phone call needed'}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
