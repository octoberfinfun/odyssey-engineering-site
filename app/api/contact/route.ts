import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

function clean(value: unknown, max = 4000) {
  return String(value ?? '').trim().slice(0, max);
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#039;',
    '"': '&quot;'
  }[char] || char));
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const data = {
    name: clean(body.name, 120),
    email: clean(body.email, 180),
    phone: clean(body.phone, 50),
    projectType: clean(body.projectType, 160),
    message: clean(body.message, 5000)
  };

  if (!data.name || !data.email || !data.phone || !data.projectType || !data.message) {
    return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
  }

  if (!validEmail(data.email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'] as const;
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length) {
    console.error('Odyssey contact SMTP configuration missing:', missing.join(', '));
    return NextResponse.json(
      { error: 'Email delivery is not configured. Please email justin@odysseyengineeringgrp.com directly.' },
      { status: 503 }
    );
  }

  const port = Number(process.env.SMTP_PORT);
  const secure = process.env.SMTP_SECURE
    ? String(process.env.SMTP_SECURE).toLowerCase() === 'true'
    : port === 465;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const to = process.env.CONTACT_TO_EMAIL || 'justin@odysseyengineeringgrp.com';
  const from = process.env.SMTP_FROM || 'Odyssey Engineering Group <justin@odysseyengineeringgrp.com>';

  const subject = `Website inquiry: ${data.projectType}`;
  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Project type: ${data.projectType}`,
    '',
    data.message
  ].join('\n');

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#24333a;line-height:1.55">
      <h2 style="margin:0 0 18px;color:#17333e">New Odyssey website inquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:760px">
        <tr><td style="padding:9px 12px;border:1px solid #d7ded9;font-weight:700">Name</td><td style="padding:9px 12px;border:1px solid #d7ded9">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding:9px 12px;border:1px solid #d7ded9;font-weight:700">Email</td><td style="padding:9px 12px;border:1px solid #d7ded9">${escapeHtml(data.email)}</td></tr>
        <tr><td style="padding:9px 12px;border:1px solid #d7ded9;font-weight:700">Phone</td><td style="padding:9px 12px;border:1px solid #d7ded9">${escapeHtml(data.phone)}</td></tr>
        <tr><td style="padding:9px 12px;border:1px solid #d7ded9;font-weight:700">Project type</td><td style="padding:9px 12px;border:1px solid #d7ded9">${escapeHtml(data.projectType)}</td></tr>
        <tr><td style="padding:9px 12px;border:1px solid #d7ded9;font-weight:700;vertical-align:top">Message</td><td style="padding:9px 12px;border:1px solid #d7ded9;white-space:pre-wrap">${escapeHtml(data.message)}</td></tr>
      </table>
    </div>
  `;

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: data.email,
      subject,
      text,
      html
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Odyssey contact form email error:', error);
    return NextResponse.json(
      { error: 'The message could not be delivered. Please try again or email justin@odysseyengineeringgrp.com directly.' },
      { status: 500 }
    );
  }
}
