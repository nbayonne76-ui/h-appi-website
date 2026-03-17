import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { email, locale } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const isFr = locale !== 'en';

    // Notify the founder
    await resend.emails.send({
      from: 'DropOS <contact@happi-bot.com>',
      to: 'contact@happi-bot.com',
      subject: `🚀 New DropOS Founding Member — ${email}`,
      html: `
        <div style="font-family:-apple-system,sans-serif;max-width:600px;margin:0 auto;background:#0F172A;color:#fff;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#f97316,#fb923c);padding:24px 32px;">
            <h1 style="margin:0;font-size:20px;font-weight:700;">DropOS — New Founding Member</h1>
          </div>
          <div style="padding:32px;">
            <p style="color:#94A3B8;font-size:14px;margin:0 0 8px;">Email</p>
            <p style="margin:0 0 24px;font-size:18px;font-weight:600;">
              <a href="mailto:${email}" style="color:#f97316;">${email}</a>
            </p>
            <p style="color:#94A3B8;font-size:13px;">Locale: ${locale ?? 'fr'}</p>
            <div style="margin-top:24px;">
              <a href="mailto:${email}" style="display:inline-block;background:#f97316;color:#000;padding:10px 20px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:700;">
                Reply to ${email}
              </a>
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation to the subscriber
    await resend.emails.send({
      from: 'DropOS <contact@happi-bot.com>',
      replyTo: 'contact@happi-bot.com',
      to: email,
      subject: isFr
        ? "Vous êtes sur la liste DropOS 🚀"
        : "You're on the DropOS list 🚀",
      html: `
        <div style="font-family:-apple-system,sans-serif;max-width:600px;margin:0 auto;background:#0F172A;color:#fff;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#f97316,#fb923c);padding:24px 32px;">
            <h1 style="margin:0;font-size:20px;font-weight:700;">DropOS Founding Member</h1>
          </div>
          <div style="padding:32px;">
            ${isFr ? `
            <h2 style="color:#fff;font-size:22px;font-weight:700;margin:0 0 12px;">Vous êtes dans les 100.</h2>
            <p style="color:#94A3B8;font-size:15px;line-height:1.7;margin:0 0 20px;">
              Merci d'avoir rejoint DropOS comme founding member. Vous aurez accès à la plateforme complète, gratuitement pendant 1 an, dès le lancement.
            </p>
            <p style="color:#94A3B8;font-size:15px;line-height:1.7;margin:0 0 28px;">
              En échange, je vous demande seulement 30 jours de retours honnêtes — ce qui est cassé, ce qui manque, ce que vous paieriez. Votre avis va façonner le produit.
            </p>
            <p style="color:#CBD5E1;font-size:14px;margin:0 0 4px;font-weight:600;">Je vous enverrai un email dès que l'accès est ouvert.</p>
            <p style="color:#64748B;font-size:13px;margin:0 0 28px;">D'ici là, n'hésitez pas à répondre à cet email directement.</p>
            ` : `
            <h2 style="color:#fff;font-size:22px;font-weight:700;margin:0 0 12px;">You're in the 100.</h2>
            <p style="color:#94A3B8;font-size:15px;line-height:1.7;margin:0 0 20px;">
              Thanks for joining DropOS as a founding member. You'll get full access to the platform, free for a full year, from day one.
            </p>
            <p style="color:#94A3B8;font-size:15px;line-height:1.7;margin:0 0 28px;">
              In return, I'm asking for 30 days of honest feedback — what's broken, what's missing, what you'd pay for. Your input will shape the product.
            </p>
            <p style="color:#CBD5E1;font-size:14px;margin:0 0 4px;font-weight:600;">I'll email you the moment access opens.</p>
            <p style="color:#64748B;font-size:13px;margin:0 0 28px;">Until then, feel free to reply to this email directly.</p>
            `}
            <div style="padding:20px 24px;background:#1E293B;border-radius:10px;border-left:3px solid #f97316;">
              <p style="margin:0;color:#94A3B8;font-size:13px;line-height:1.6;">
                ${isFr
                  ? '— Nicolas, fondateur de DropOS'
                  : '— Nicolas, founder of DropOS'}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json({ error: 'Failed to register' }, { status: 500 });
  }
}
