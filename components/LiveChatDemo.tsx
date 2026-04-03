'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp } from '@/components/ui/Animate';
import AnimatedMesh from '@/components/ui/AnimatedMesh';

type Msg = { role: 'bot' | 'user'; text: string; id: number };

// ── Conversation flows ──────────────────────────────────────────────────────

const FLOWS: Record<string, { user: string; bot: string[] }> = {
  rdv: {
    user:  '📅 Prendre un rendez-vous',
    bot:   [
      'Parfait ! Je consulte votre calendrier en temps réel...',
      "J'ai 3 créneaux disponibles cette semaine :\n• Mardi 14h\n• Jeudi 10h\n• Vendredi 16h\nLequel vous convient ?",
    ],
  },
  tarifs: {
    user:  '💬 Question sur les tarifs',
    bot:   [
      'Bien sûr ! Nos tarifs dépendent de votre profil.',
      'En 2 questions rapides, je vous donne une estimation précise. Êtes-vous un professionnel ou un particulier ?',
    ],
  },
  commande: {
    user:  '📦 Suivre ma commande',
    bot:   [
      'Je recherche votre commande. Pouvez-vous me donner votre numéro de commande ou votre email ?',
      "J'ai trouvé ! Commande #FR1247 — En transit 🚚\nLivraison estimée : demain entre 14h et 18h.",
    ],
  },
  projet: {
    user:  '🎯 Évaluer mon projet',
    bot:   [
      'Excellent ! Pour vous orienter au mieux, dites-moi : quel est votre secteur d\'activité ?',
      'Parfait. D\'après vos besoins, je vous recommande notre solution chatbot sur-mesure. Souhaitez-vous que je vous mette en contact avec notre équipe ?',
    ],
  },
};

const QUICK_REPLIES = [
  { key: 'rdv',      label: '📅 Prendre un rendez-vous' },
  { key: 'tarifs',   label: '💬 Question sur les tarifs' },
  { key: 'commande', label: '📦 Suivre ma commande' },
  { key: 'projet',   label: '🎯 Évaluer mon projet' },
];

const INTRO: string[] = [
  "Bonjour ! Je suis votre assistant H'appi. Comment puis-je vous aider aujourd'hui ?",
];

let idCounter = 100;
const uid = () => ++idCounter;

// ── Typing indicator ────────────────────────────────────────────────────────

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-happi-blue/60"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

// ── Component ───────────────────────────────────────────────────────────────

export default function LiveChatDemo({ fr }: { fr: boolean }) {
  const [messages, setMessages]   = useState<Msg[]>([]);
  const [typing, setTyping]       = useState(false);
  const [used, setUsed]           = useState<string[]>([]);
  const [disabled, setDisabled]   = useState(false);
  const bottomRef                 = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  // Send intro message on mount
  useEffect(() => {
    const t = setTimeout(() => {
      setMessages([{ role: 'bot', text: INTRO[0], id: uid() }]);
    }, 600);
    return () => clearTimeout(t);
  }, []);

  async function handleQuickReply(key: string) {
    if (disabled) return;
    const flow = FLOWS[key];
    if (!flow) return;

    setUsed(u => [...u, key]);
    setDisabled(true);

    // User message
    setMessages(prev => [...prev, { role: 'user', text: flow.user, id: uid() }]);

    // Bot replies with typing indicator between each
    for (const reply of flow.bot) {
      setTyping(true);
      await delay(1100 + Math.random() * 400);
      setTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: reply, id: uid() }]);
      await delay(200);
    }

    setDisabled(false);
  }

  const availableReplies = QUICK_REPLIES.filter(r => !used.includes(r.key));

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-happi-darker relative overflow-hidden border-t border-happi-border">
      <AnimatedMesh variant="blue" />
      <div className="max-w-6xl mx-auto relative z-10">

        <FadeInUp className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-happi-blue/10 text-happi-blue rounded-full text-xs font-semibold uppercase tracking-wide mb-4 border border-happi-blue/20">
            {fr ? 'Simulation live' : 'Live demo'}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            {fr
              ? <><span className="gradient-text">Voyez-le en action</span>, maintenant.</>
              : <><span className="gradient-text">See it in action</span>, right now.</>}
          </h2>
          <p className="text-happi-muted max-w-xl mx-auto text-sm leading-relaxed">
            {fr
              ? 'Cliquez sur un sujet. Le bot répond comme il le ferait avec vos clients.'
              : 'Click a topic. The bot replies exactly as it would with your clients.'}
          </p>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Chat window ── */}
          <FadeInUp delay={0.1}>
            <div className="bg-happi-surface border border-happi-border rounded-2xl overflow-hidden shadow-2xl shadow-black/30">

              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-happi-border bg-happi-dark/60">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-happi-blue to-happi-green flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🤖</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-white">Assistant H'appi</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-happi-green animate-pulse" />
                    <span className="text-[11px] text-happi-green font-medium">{fr ? 'En ligne' : 'Online'}</span>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  {['#EF4444', '#FBBF24', '#22C55E'].map(c => (
                    <div key={c} className="w-2.5 h-2.5 rounded-full opacity-60" style={{ background: c }} />
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="flex flex-col gap-3 p-5 min-h-[280px] max-h-[380px] overflow-y-auto">
                <AnimatePresence initial={false}>
                  {messages.map(msg => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.role === 'bot' && (
                        <div className="w-6 h-6 rounded-full bg-happi-blue/20 flex items-center justify-center text-xs flex-shrink-0 mr-2 mt-0.5">🤖</div>
                      )}
                      <div
                        className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed max-w-[80%] whitespace-pre-line ${
                          msg.role === 'bot'
                            ? 'bg-white/6 text-white rounded-tl-sm'
                            : 'text-white rounded-tr-sm'
                        }`}
                        style={msg.role === 'user' ? { background: 'linear-gradient(135deg, #3B82F6, #2563EB)' } : undefined}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}

                  {typing && (
                    <motion.div
                      key="typing"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-6 h-6 rounded-full bg-happi-blue/20 flex items-center justify-center text-xs">🤖</div>
                      <div className="bg-white/6 rounded-2xl rounded-tl-sm">
                        <TypingDots />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={bottomRef} />
              </div>

              {/* Input bar */}
              <div className="px-5 pb-5">
                <div className="bg-happi-dark rounded-xl px-4 py-3 flex items-center gap-3 border border-happi-border/60">
                  <span className="text-xs text-happi-muted/50 flex-1">{fr ? 'Utilisez les suggestions ci-dessous...' : 'Use the suggestions below...'}</span>
                  <div className="w-7 h-7 rounded-lg bg-happi-blue/20 flex items-center justify-center">
                    <span className="text-happi-blue text-sm">↑</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* ── Quick replies + info ── */}
          <FadeInUp delay={0.2} className="flex flex-col gap-5">
            <div>
              <p className="text-xs font-semibold text-happi-muted/60 uppercase tracking-widest mb-3">
                {fr ? 'Choisissez un sujet' : 'Choose a topic'}
              </p>
              <div className="flex flex-col gap-2.5">
                <AnimatePresence>
                  {QUICK_REPLIES.map(r => {
                    const isUsed = used.includes(r.key);
                    return (
                      <motion.button
                        key={r.key}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: isUsed ? 0.4 : 1, x: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => handleQuickReply(r.key)}
                        disabled={isUsed || disabled}
                        className={`flex items-center gap-3 px-5 py-3.5 rounded-xl border text-left text-sm font-medium transition-all ${
                          isUsed
                            ? 'border-happi-border/40 text-happi-muted/40 cursor-not-allowed'
                            : 'border-happi-border text-happi-muted hover:border-happi-blue/40 hover:text-white hover:bg-happi-blue/5 active:scale-[0.98]'
                        }`}
                      >
                        <span className="text-base">{r.label.split(' ')[0]}</span>
                        <span>{r.label.split(' ').slice(1).join(' ')}</span>
                        {!isUsed && (
                          <span className="ml-auto text-happi-blue/50 text-xs">→</span>
                        )}
                        {isUsed && (
                          <span className="ml-auto text-happi-muted/40 text-xs">✓</span>
                        )}
                      </motion.button>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            {/* Stats mini */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { value: '<2s',  label: fr ? 'Temps de réponse' : 'Response time',     color: '#3B82F6' },
                { value: '98%',  label: fr ? 'Taux de résolution' : 'Resolution rate', color: '#10B981' },
                { value: '24/7', label: fr ? 'Disponibilité' : 'Availability',         color: '#8B5CF6' },
                { value: '0',    label: fr ? 'Appels manqués' : 'Missed calls',         color: '#FBBF24' },
              ].map(({ value, label, color }) => (
                <div key={label} className="bg-happi-surface border border-happi-border rounded-xl p-4 text-center">
                  <div className="text-xl font-extrabold mb-0.5" style={{ color }}>{value}</div>
                  <div className="text-[11px] text-happi-muted leading-tight">{label}</div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-happi-muted/50 leading-relaxed">
              {fr
                ? 'Cette démonstration simule un vrai bot H\'appi. Votre bot sera configuré selon votre secteur et vos besoins spécifiques.'
                : 'This demo simulates a real H\'appi bot. Your bot will be configured for your sector and specific needs.'}
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

function delay(ms: number) {
  return new Promise(r => setTimeout(r, ms));
}
