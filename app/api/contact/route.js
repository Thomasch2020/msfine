import { readFile } from 'fs/promises';
import { join } from 'path';
import nodemailer from 'nodemailer';
import {
  AUTO_REPLY_HTML,
  AUTO_REPLY_SUBJECT,
  AUTO_REPLY_TEXT,
  SIGNATURE_IMAGE_CID,
} from './autoReplyTemplate';

export const runtime = 'nodejs';

const RECIPIENT = 'thomas.kral@icccon.ch';

function clean(value) {
  return String(value || '').trim();
}

function escapeHtml(value) {
  return clean(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.office365.com';
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error('SMTP_USER und SMTP_PASS müssen in Vercel als Environment Variables hinterlegt sein.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user, pass },
  });
}

function buildInternalHtml(payload) {
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #111827; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">Neue makerstage Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Unternehmen:</strong> ${escapeHtml(payload.company)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Interesse:</strong> ${escapeHtml(payload.interest)}</p>
      <p><strong>Nachricht:</strong></p>
      <div style="white-space: pre-wrap; padding: 16px; border: 1px solid #e5e7eb; border-radius: 12px; background: #f9fafb;">${escapeHtml(payload.message)}</div>
    </div>
  `;
}

function buildInternalText(payload) {
  return [
    'Neue makerstage Kontaktanfrage',
    '',
    `Name: ${clean(payload.name)}`,
    `Unternehmen: ${clean(payload.company)}`,
    `E-Mail: ${clean(payload.email)}`,
    `Interesse: ${clean(payload.interest)}`,
    '',
    'Nachricht:',
    clean(payload.message),
  ].join('\n');
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const payload = Object.fromEntries(formData.entries());

    const name = clean(payload.name);
    const email = clean(payload.email);
    const message = clean(payload.message);

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, message: 'Bitte Name, E-Mail und Nachricht ausfüllen.' },
        { status: 400 }
      );
    }

    const transporter = getTransporter();
    const from = process.env.SMTP_FROM || RECIPIENT;
    const signatureImage = await readFile(join(process.cwd(), 'public/email/signature.png'));

    await transporter.sendMail({
      from,
      to: RECIPIENT,
      replyTo: email,
      subject: `Neue makerstage Anfrage von ${name}`,
      text: buildInternalText(payload),
      html: buildInternalHtml(payload),
    });

    await transporter.sendMail({
      from,
      to: email,
      subject: AUTO_REPLY_SUBJECT,
      text: AUTO_REPLY_TEXT,
      html: AUTO_REPLY_HTML,
      attachments: [
        {
          filename: 'signature.png',
          content: signatureImage,
          cid: SIGNATURE_IMAGE_CID,
        },
      ],
    });

    return Response.json({
      ok: true,
      message: 'Vielen Dank. Deine Nachricht wurde erfolgreich gesendet.',
    });
  } catch (error) {
    console.error('makerstage contact form error:', error);
    return Response.json(
      {
        ok: false,
        message: 'Die Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut oder schreibe direkt an thomas.kral@icccon.ch.',
      },
      { status: 500 }
    );
  }
}
