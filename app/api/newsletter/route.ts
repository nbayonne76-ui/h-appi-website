import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { email, locale } = await req.json();

    if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return NextResponse.json({ error: 'Invalid email' }, { status: 400 });

    const isFr = locale !== 'en';

    await resend.emails.send({
      from: "H'appi <contact@happi-bot.com>",
      to: 'contact@happi-bot.com',
      subject: `Newsletter H'appi — Nouvelle inscription : ${email}`,
      html: `<p style="font-family:sans-serif">Nouvelle inscription newsletter H'appi : <strong>${email}</strong> (locale : ${locale ?? 'fr'})</p>`,
    });

    await resend.emails.send({
      from: "H'appi <contact@happi-bot.com>",
      replyTo: 'contact@happi-bot.com',
      to: email,
      subject: isFr ? "Bienvenue dans la boucle H'appi" : "Welcome to the H'appi loop",
      html: `
        <div style="font-family:-apple-system,sans-serif;max-width:600px;margin:0 auto;background:#0D1117;color:#fff;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#3B82F6,#10B981);padding:24px 32px;">
            <h1 style="margin:0;font-size:20px;font-weight:700;">H'appi</h1>
          </div>
          <div style="padding:32px;">
            ${isFr ? `
            <h2 style="color:#fff;font-size:20px;font-weight:700;margin:0 0 12px;">C'est noté.</h2>
            <p style="color:#94A3B8;font-size:15px;line-height:1.7;margin:0 0 20px;">
              Chaque mois, on vous partage une astuce concrète sur l'IA et le digital appliqués aux PME. Pas de théorie : des cas réels, des résultats chiffrés.
            </p>
            <p style="color:#64748B;font-size:13px;margin:0;">
              Vous pouvez vous désabonner à tout moment en répondant à cet email.
            </p>
            ` : `
            <h2 style="color:#fff;font-size:20px;font-weight:700;margin:0 0 12px;">You're in.</h2>
            <p style="color:#94A3B8;font-size:15px;line-height:1.7;margin:0 0 20px;">
              Each month, we share a concrete tip on AI and digital applied to SMEs. No theory: real cases, measurable results.
            </p>
            <p style="color:#64748B;font-size:13px;margin:0;">
              You can unsubscribe at any time by replying to this email.
            </p>
            `}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
