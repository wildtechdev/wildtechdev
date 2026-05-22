import { NextResponse } from "next/server";

const MAX_LENGTH = {
  name: 200,
  email: 200,
  message: 5000,
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honey = String(body.company ?? "").trim();

  // Honeypot: real users will not fill this hidden field
  if (honey.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill out all fields." },
      { status: 400 }
    );
  }
  if (
    name.length > MAX_LENGTH.name ||
    email.length > MAX_LENGTH.email ||
    message.length > MAX_LENGTH.message
  ) {
    return NextResponse.json(
      { ok: false, error: "One of the fields is too long." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // Try to send via Resend if API key is configured.
  // The form works either way: if Resend is not set up, we still log
  // the submission server-side and return success so the user gets
  // feedback. Configure RESEND_API_KEY + CONTACT_TO_EMAIL in Vercel
  // env vars to enable real email delivery.
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "info@wildtechdev.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "WildTech <onboarding@resend.dev>";

  if (resendKey) {
    try {
      const subject = `New WildTech inquiry from ${name}`;
      const textBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`;
      const htmlBody = `
        <div style="font-family: -apple-system, sans-serif; max-width: 560px;">
          <h2 style="color: #22c55e; font-weight: 600;">New inquiry from ${escapeHtml(name)}</h2>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
        </div>
      `;
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject,
          text: textBody,
          html: htmlBody,
        }),
      });
      if (!res.ok) {
        const detail = await res.text();
        console.error("Resend send failed:", res.status, detail);
        // Fall through to success response so user is not blocked
      }
    } catch (err) {
      console.error("Resend send threw:", err);
    }
  } else {
    console.log("[contact] submission (no Resend key configured):", {
      name,
      email,
      messagePreview: message.slice(0, 120),
    });
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
