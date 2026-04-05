import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = "H'appi — AI chatbot sur-mesure";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const fr = locale === 'fr';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0D1117 0%, #111827 50%, #0A1628 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Blue orb top-left */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: -120,
            width: 500,
            height: 500,
            background:
              'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        {/* Green orb bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: -120,
            right: -120,
            width: 500,
            height: 500,
            background:
              'radial-gradient(circle, rgba(16,185,129,0.28) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(59,130,246,0.15)',
            border: '1px solid rgba(59,130,246,0.4)',
            borderRadius: 999,
            padding: '8px 24px',
            marginBottom: 36,
            color: '#93C5FD',
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          {fr ? 'Startup French-Égyptienne · IA sur-mesure' : 'French-Egyptian Startup · Custom AI'}
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            letterSpacing: '-0.04em',
            marginBottom: 20,
            background: 'linear-gradient(90deg, #3B82F6 0%, #10B981 100%)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          H&apos;appi
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: 'rgba(255,255,255,0.65)',
            textAlign: 'center',
            maxWidth: 720,
            lineHeight: 1.5,
            padding: '0 40px',
          }}
        >
          {fr
            ? 'Votre chatbot IA sur-mesure, déployé en 3 semaines. 4× moins cher que les agences.'
            : 'Your custom AI chatbot, deployed in 3 weeks. 4× cheaper than agencies.'}
        </div>

        {/* Bottom pills */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 44,
          }}
        >
          {[
            fr ? '⚡ Déploiement 3 sem.' : '⚡ 3-week deployment',
            fr ? '🌍 Hébergé en France & Europe' : '🌍 Hosted in France & Europe',
            '24/7',
          ].map((pill) => (
            <div
              key={pill}
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 999,
                padding: '8px 20px',
                color: 'rgba(255,255,255,0.75)',
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              {pill}
            </div>
          ))}
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            right: 40,
            color: 'rgba(255,255,255,0.3)',
            fontSize: 15,
            letterSpacing: '0.05em',
          }}
        >
          happi-bot.com
        </div>
      </div>
    ),
    { ...size }
  );
}
