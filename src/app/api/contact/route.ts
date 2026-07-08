import { NextResponse } from "next/server";

const MAX_LENGTH = {
  name: 200,
  email: 200,
  message: 5000,
};

// Best-effort in-memory rate limit: max submissions per IP per window.
// Serverless instances each keep their own map, so this is a speed bump
// rather than a guarantee, but combined with the honeypot it stops the
// casual abuse case at zero infrastructure cost.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const submissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );
  if (recent.length >= RATE_LIMIT) {
    submissions.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissions.set(ip, recent);
  // Opportunistic cleanup so the map cannot grow unbounded.
  if (submissions.size > 500) {
    for (const [key, times] of submissions) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) {
        submissions.delete(key);
      }
    }
  }
  return false;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Too many messages in a short time. Please wait a few minutes, or email info@wildtechdev.com directly.",
      },
      { status: 429 }
    );
  }

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
      // 1) Notification to the WildTech inbox
      const inquirySubject = `New WildTech inquiry from ${name}`;
      const inquiryText = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`;
      const inquiryHtml = `
        <div style="font-family: -apple-system, sans-serif; max-width: 560px;">
          <h2 style="color: #22c55e; font-weight: 600;">New inquiry from ${escapeHtml(name)}</h2>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
        </div>
      `;

      // 2) Confirmation back to the submitter
      const firstName = name.split(/\s+/)[0] || name;
      const confirmationSubject = `Thanks ${firstName}, we got your message`;
      const confirmationText =
        `Hi ${firstName},\n\n` +
        `Thanks for reaching out to WildTech Development. Your message landed in our inbox and we will get back to you within one business day.\n\n` +
        `If anything is time sensitive or you want to share more, just reply to this email and it will come straight to us.\n\n` +
        `Will McCants\n` +
        `Founder, WildTech Development\n` +
        `Charleston, SC\n\n` +
        `wildtechdev.com  |  info@wildtechdev.com\n`;
      const confirmationHtml = buildConfirmationHtml(firstName);

      const sendInquiry = fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: inquirySubject,
          text: inquiryText,
          html: inquiryHtml,
        }),
      });

      const sendConfirmation = fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [email],
          reply_to: toEmail,
          subject: confirmationSubject,
          text: confirmationText,
          html: confirmationHtml,
          // Headers that improve inbox placement under the 2024
          // Gmail/Yahoo bulk sender rules and reduce spam folder hits.
          headers: {
            "List-Unsubscribe":
              "<mailto:info@wildtechdev.com?subject=unsubscribe>",
            "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
          },
        }),
      });

      const [inquiryRes, confirmationRes] = await Promise.all([
        sendInquiry,
        sendConfirmation,
      ]);
      if (!inquiryRes.ok) {
        console.error(
          "Resend inquiry send failed:",
          inquiryRes.status,
          await inquiryRes.text()
        );
        // The message did NOT reach the inbox. Telling the visitor it was
        // sent would be a lie, so return an honest error with a fallback.
        return NextResponse.json(
          {
            ok: false,
            error:
              "Your message could not be delivered right now. Please email info@wildtechdev.com directly.",
          },
          { status: 502 }
        );
      }
      if (!confirmationRes.ok) {
        // The inquiry itself was delivered; a failed confirmation copy is
        // not worth failing the whole submission over.
        console.error(
          "Resend confirmation send failed:",
          confirmationRes.status,
          await confirmationRes.text()
        );
      }
    } catch (err) {
      console.error("Resend send threw:", err);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Your message could not be delivered right now. Please email info@wildtechdev.com directly.",
        },
        { status: 502 }
      );
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

function buildConfirmationHtml(firstName: string) {
  const safeName = escapeHtml(firstName);
  // Email-safe HTML. Light background, system + Georgia fonts (universally
  // available), inline styles, no images. WildTech green accent at top.
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>We got your message, WildTech Development</title>
  </head>
  <body style="margin:0; padding:0; background:#f5f5f4; color:#1a1a1a; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f5f4; padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px; width:100%; background:#ffffff; border:1px solid #e5e5e3;">
            <tr>
              <td style="background:#06070a; padding:28px 36px; border-bottom:3px solid #22c55e;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="font-family:Georgia, 'Times New Roman', serif; font-style:italic; font-size:22px; color:#f5f6f8; letter-spacing:0.3px;">
                      WildTech
                      <span style="display:inline-block; width:6px; height:6px; background:#22c55e; border-radius:50%; margin-left:6px; vertical-align:middle;"></span>
                    </td>
                    <td align="right" style="font-family:-apple-system, BlinkMacSystemFont, sans-serif; font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:#6b7180;">
                      Charleston, SC
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:48px 36px 16px 36px;">
                <p style="margin:0 0 8px 0; font-family:-apple-system, BlinkMacSystemFont, sans-serif; font-size:11px; letter-spacing:0.22em; text-transform:uppercase; color:#6b7180;">
                  Confirmation
                </p>
                <h1 style="margin:0 0 24px 0; font-family:Georgia, 'Times New Roman', serif; font-style:italic; font-weight:400; font-size:36px; line-height:1.1; color:#1a1a1a;">
                  Message received.
                </h1>
                <p style="margin:0 0 16px 0; font-size:16px; line-height:1.65; color:#3a3a3a;">
                  Hi ${safeName},
                </p>
                <p style="margin:0 0 16px 0; font-size:16px; line-height:1.65; color:#3a3a3a;">
                  Thanks for reaching out to WildTech Development. Your message landed in our inbox and we will get back to you within one business day.
                </p>
                <p style="margin:0 0 32px 0; font-size:16px; line-height:1.65; color:#3a3a3a;">
                  If anything is time sensitive or you want to share more, just reply to this email and it will come straight to us.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 36px;">
                <div style="height:1px; background:#e5e5e3;"></div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 36px 40px 36px;">
                <p style="margin:0 0 4px 0; font-family:Georgia, 'Times New Roman', serif; font-style:italic; font-size:18px; color:#1a1a1a;">
                  Will McCants
                </p>
                <p style="margin:0 0 2px 0; font-size:13px; color:#6b7180;">
                  Founder, WildTech Development
                </p>
                <p style="margin:0; font-size:13px; color:#6b7180;">
                  Charleston, SC
                </p>
              </td>
            </tr>
            <tr>
              <td style="background:#fafaf9; padding:20px 36px; border-top:1px solid #e5e5e3;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="font-size:12px; color:#6b7180;">
                      <a href="https://www.wildtechdev.com" style="color:#16a34a; text-decoration:none; font-weight:500;">wildtechdev.com</a>
                      <span style="color:#cccccc; margin:0 8px;">|</span>
                      <a href="mailto:info@wildtechdev.com" style="color:#16a34a; text-decoration:none;">info@wildtechdev.com</a>
                    </td>
                    <td align="right" style="font-size:11px; color:#9ca3af; letter-spacing:0.1em;">
                      Custom software, hardware, and integration
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <p style="margin:16px 0 0 0; font-size:11px; color:#9ca3af; font-family:-apple-system, BlinkMacSystemFont, sans-serif;">
            You are receiving this because you submitted a message at wildtechdev.com/contact.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
