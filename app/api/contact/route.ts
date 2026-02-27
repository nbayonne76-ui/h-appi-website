import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, company, message, locale } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const isFr = locale !== 'en';
    const subject = isFr
      ? `Nouvelle demande de démo — ${name}${company ? ` (${company})` : ''}`
      : `New demo request — ${name}${company ? ` (${company})` : ''}`;

    const html = `
      <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; background: #0F172A; color: #fff; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #3B82F6, #10B981); padding: 24px 32px;">
          <h1 style="margin: 0; font-size: 20px; font-weight: 700;">H'appi — ${isFr ? 'Nouvelle demande de démo' : 'New demo request'}</h1>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #94A3B8; font-size: 13px; width: 120px;">${isFr ? 'Nom' : 'Name'}</td>
              <td style="padding: 10px 0; color: #fff; font-size: 15px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94A3B8; font-size: 13px;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #3B82F6;">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; color: #94A3B8; font-size: 13px;">${isFr ? 'Entreprise' : 'Company'}</td>
              <td style="padding: 10px 0; color: #fff; font-size: 15px;">${company}</td>
            </tr>` : ''}
            <tr>
              <td colspan="2" style="padding: 16px 0 4px; color: #94A3B8; font-size: 13px;">${isFr ? 'Message' : 'Message'}</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 8px 16px; background: #1E293B; border-radius: 8px; color: #CBD5E1; font-size: 14px; line-height: 1.6;">
                ${message.replace(/\n/g, '<br/>')}
              </td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #334155;">
            <a href="mailto:${email}" style="display: inline-block; background: #3B82F6; color: #fff; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600;">
              ${isFr ? `Répondre à ${name}` : `Reply to ${name}`}
            </a>
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: 'H\'appi Contact <contact@happi-bot.com>',
      to: 'nbayonne76@gmail.com',
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
