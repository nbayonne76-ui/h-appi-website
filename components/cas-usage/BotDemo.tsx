'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, CheckCircle2, RotateCcw } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

interface Message {
  role: 'bot' | 'user';
  text: string;
  id: number;
}

interface ScriptStep {
  botText: string;
  userReplies: string[];
}

const getScript = (fr: boolean): ScriptStep[] => [
  {
    botText: fr
      ? "Bonjour ! Je suis le bot H'appi SAV. Comment puis-je vous aider ?"
      : "Hello! I'm the H'appi After-Sales bot. How can I help you?",
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
      ? 'Commande trouvée ✓. Table chêne massif, livrée le 24 fév. Quel est le problème exact ?'
      : 'Order found ✓. Solid oak table, delivered Feb 24. What is the exact issue?',
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

let msgIdCounter = 0;

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

  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isTyping]);

  const start = () => {
    setStarted(true);
    setIsTyping(true);
    setTimeout(() => {
      setMessages([{ role: 'bot', text: script[0].botText, id: ++msgIdCounter }]);
      setIsTyping(false);
    }, 900);
  };

  const handleReply = (replyText: string) => {
    if (isTyping) return;
    const nextStep = scriptStep + 1;
    setMessages((prev) => [...prev, { role: 'user', text: replyText, id: ++msgIdCounter }]);
    setIsTyping(true);
    setScriptStep(nextStep);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: script[nextStep].botText, id: ++msgIdCounter }]);
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
          {fr ? 'Démo interactive: Essayez le bot SAV' : 'Interactive demo: Try the after-sales bot'}
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
              <div className="text-white text-xs font-semibold">
                {fr ? "Bot SAV H'appi" : "H'appi After-Sales Bot"}
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-1.5 bg-happi-green rounded-full animate-pulse" />
                <span className="text-happi-muted text-[10px]">
                  {fr
                    ? 'En ligne · Mobilier de France'
                    : 'Online · Mobilier de France'}
                </span>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {started && (
              <motion.button
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.2 }}
                onClick={reset}
                className="text-happi-muted hover:text-white transition-colors text-[11px] flex items-center gap-1.5"
              >
                <RotateCcw size={11} />
                {fr ? 'Recommencer' : 'Restart'}
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Messages */}
        <div
          ref={messagesContainerRef}
          className="px-4 pt-4 pb-2 min-h-[160px] max-h-[300px] overflow-y-auto space-y-3"
        >
          <AnimatePresence mode="popLayout">
            {!started ? (
              <motion.div
                key="start-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-28"
              >
                <MagneticButton
                  onClick={start}
                  className="bg-happi-blue/20 border border-happi-blue/40 hover:bg-happi-blue/30 hover:border-happi-blue/60 text-happi-blue text-sm font-medium px-6 py-2.5 rounded-xl transition-colors"
                  strength={0.25}
                >
                  {fr ? '▶  Lancer la démo' : '▶  Start demo'}
                </MagneticButton>
              </motion.div>
            ) : (
              <>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    layout
                    initial={{
                      opacity: 0,
                      x: msg.role === 'user' ? 20 : -20,
                      scale: 0.95,
                    }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 340, damping: 26 }}
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
                  </motion.div>
                ))}

                {/* Typing indicator */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      key="typing"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.2 }}
                      className="flex justify-start"
                    >
                      <div className="bg-happi-surface border border-happi-border px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-happi-muted rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 bg-happi-muted rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 bg-happi-muted rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Reply buttons — staggered entrance */}
        <AnimatePresence>
          {currentReplies.length > 0 && (
            <motion.div
              key="replies"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="px-4 pb-3 pt-1 flex flex-wrap gap-2"
            >
              {currentReplies.map((reply, i) => (
                <motion.button
                  key={reply}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.07, type: 'spring', stiffness: 320, damping: 22 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleReply(reply)}
                  className="bg-happi-dark border border-happi-border hover:border-happi-blue/50 hover:bg-happi-blue/10 text-white text-xs px-3.5 py-2 rounded-xl transition-colors text-left"
                >
                  {reply}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success banner — spring pop */}
        <AnimatePresence>
          {isDone && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.88, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 360, damping: 22 }}
              className="px-4 pb-4 pt-1"
            >
              <div className="flex items-center justify-center gap-2 bg-happi-green/10 border border-happi-green/30 rounded-xl py-2.5 px-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.12 }}
                >
                  <CheckCircle2 size={15} className="text-happi-green flex-shrink-0" />
                </motion.div>
                <span className="text-happi-green text-xs font-semibold">
                  {fr
                    ? 'Résolu en 2 minutes · Aucun appel nécessaire'
                    : 'Resolved in 2 minutes · No phone call needed'}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
