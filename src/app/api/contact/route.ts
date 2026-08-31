import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  reason?: string;
  message?: string;
  // Honeypot field — real users never fill this in.
  company?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Silently accept honeypot submissions so bots think they succeeded.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const reason = body.reason?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
    CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL,
  } = process.env;

  const toEmail = CONTACT_TO_EMAIL || site.email;

  // If SMTP isn't configured yet, log the enquiry so nothing is lost in dev,
  // and let the visitor know their message was received.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn(
      "[contact] SMTP not configured — logging submission instead of emailing.",
      { name, email, phone, reason, message, toEmail },
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: SMTP_SECURE === "true",
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const rows = [
      ["Name", name],
      ["Email", email],
      ["Phone", phone || "—"],
      ["Reason", reason || "—"],
    ]
      .map(
        ([label, value]) =>
          `<tr><td style="padding:6px 12px;font-weight:600;color:#0f2a33">${label}</td><td style="padding:6px 12px;color:#38535d">${value}</td></tr>`,
      )
      .join("");

    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL || `${site.name} <${SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: `New enquiry from the Schatz Pedorthics website\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nReason: ${reason || "—"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px">
          <h2 style="color:#0f766e">New website enquiry</h2>
          <table style="border-collapse:collapse;margin-bottom:16px">${rows}</table>
          <p style="font-weight:600;color:#0f2a33;margin-bottom:4px">Message</p>
          <p style="color:#38535d;white-space:pre-wrap;line-height:1.5">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[contact] Failed to send email:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 },
    );
  }
}
