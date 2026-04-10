'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, RefreshCw } from 'lucide-react';

const BOT_URL = 'https://proactive-nurturing-production.up.railway.app/chat';

export function BotDemo({ fr }: { fr?: boolean }) {
  const [key, setKey] = useState(0);
  const [errored, setErrored] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Browser chrome */}
      <div className="rounded-2xl overflow-hidden border border-happi-border shadow-2xl">

        {/* Title bar */}
        <div className="bg-happi-darker flex items-center gap-3 px-4 py-3 border-b border-happi-border">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>

          {/* URL bar */}
          <div className="flex-1 bg-happi-surface/60 border border-happi-border rounded-lg px-3 py-1.5 flex items-center gap-2 min-w-0">
            <span className="text-happi-green text-[10px] flex-shrink-0">●</span>
            <span className="text-happi-muted text-[11px] truncate font-mono">
              {BOT_URL.replace('https://', '')}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => { setKey((k) => k + 1); setErrored(false); }}
              className="text-happi-muted hover:text-white transition-colors"
              title={fr ? 'Recharger' : 'Reload'}
            >
              <RefreshCw size={13} />
            </button>
            <a
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-happi-muted hover:text-happi-blue transition-colors"
              title={fr ? 'Ouvrir dans un onglet' : 'Open in new tab'}
            >
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* iframe or fallback */}
        {errored ? (
          <div className="bg-happi-dark flex flex-col items-center justify-center py-16 px-6 text-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-happi-blue/10 border border-happi-blue/20 flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">
                {fr ? 'Testez le bot en direct' : 'Try the live bot'}
              </p>
              <p className="text-happi-muted text-sm mb-5">
                {fr
                  ? 'Le bot SAV Mobilier de France est disponible en ligne.'
                  : 'The Mobilier de France after-sales bot is available online.'}
              </p>
              <a
                href={BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-happi-blue text-white text-sm font-semibold hover:bg-happi-blue/90 transition-colors"
              >
                {fr ? 'Ouvrir le bot' : 'Open the bot'}
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ) : (
          <motion.iframe
            key={key}
            src={BOT_URL}
            title={fr ? 'Bot SAV Mobilier de France' : 'Mobilier de France After-Sales Bot'}
            className="w-full bg-happi-dark"
            style={{ height: '520px', border: 'none', display: 'block' }}
            onError={() => setErrored(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        )}
      </div>

      {/* Caption */}
      <p className="text-center text-[11px] text-happi-muted/50 mt-3">
        {fr
          ? 'Bot en production chez Mobilier de France — aucune inscription requise'
          : 'Live bot deployed at Mobilier de France — no sign-up required'}
      </p>
    </div>
  );
}
