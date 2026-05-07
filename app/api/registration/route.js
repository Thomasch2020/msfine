import { readFile } from 'fs/promises';
import { join } from 'path';
import nodemailer from 'nodemailer';
import {
  AUTO_REPLY_HTML,
  AUTO_REPLY_SUBJECT,
  AUTO_REPLY_TEXT,
  SIGNATURE_IMAGE_CID,
} from '../contact/autoReplyTemplate';

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
  const fullName = `${clean(payload.firstName)} ${clean(payload.lastName)}`.trim();

  return `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #111827; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">Neue makerstage Stage-Anmeldung</h2>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Unternehmen:</strong> ${escapeHtml(payload.company)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(payload.phone)}</p>
      <p><strong>Teilnahmestatus:</strong> ${escapeHtml(payload.status)}</p>
      <p><strong>Rechnungsadresse / Bemerkung:</strong></p>
      <div style="white-space: pre-wrap; padding: 16px; border: 1px solid #e5e7eb; border-radius: 12px; background: #f9fafb;">${escapeHtml(payload.message)}</div>
    </div>
  `;
}

function buildInternalText(payload) {
  const fullName = `${clean(payload.firstName)} ${clean(payload.lastName)}`.trim();

  return [
    'Neue makerstage Stage-Anmeldung',
    '',
    `Name: ${fullName}`,
    `Unternehmen: ${clean(payload.company)}`,
    `E-Mail: ${clean(payload.email)}`,
    `Telefon: ${clean(payload.phone)}`,
    `Teilnahmestatus: ${clean(payload.status)}`,
    '',
    'Rechnungsadresse / Bemerkung:',
    clean(payload.message),
  ].join('\n');
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const payload = Object.fromEntries(formData.entries());

    const firstName = clean(payload.firstName);
    const lastName = clean(payload.lastName);
    const email = clean(payload.email);
    const status = clean(payload.status);

    if (!firstName || !lastName || !email || !status) {
      return Response.json(
        { ok: false, message: 'Bitte Vorname, Nachname, E-Mail und Teilnahmestatus ausfüllen.' },
        { status: 400 }
      );
    }

    const transporter = getTransporter();
    const from = process.env.SMTP_FROM || RECIPIENT;
    const signatureImage = await readFile(join(process.cwd(), 'public/email/signature.png'));
    const fullName = `${firstName} ${lastName}`.trim();

    await transporter.sendMail({
      from,
      to: RECIPIENT,
      replyTo: email,
      subject: `Neue makerstage Stage-Anmeldung von ${fullName}`,
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
      message: 'Vielen Dank. Deine Anmeldung wurde erfolgreich gesendet.',
    });
  } catch (error) {
    console.error('makerstage registration form error:', error);
    return Response.json(
      {
        ok: false,
        message: 'Die Anmeldung konnte nicht gesendet werden. Bitte versuche es später erneut oder schreibe direkt an thomas.kral@icccon.ch.',
      },
      { status: 500 }
    );
  }
}
