import { NextResponse } from "next/server";

// Newsletter subscription endpoint.
//
// For each new subscriber we:
//   1) Send a welcome email so the subscriber sees confirmation in their inbox
//   2) Send a notification email to the WildTech inbox so we have a running
//      list of subscribers without needing any external dashboard
//   3) Best-effort add the contact to a Resend Audience if RESEND_AUDIENCE_ID
//      is configured (lets the user run actual broadcasts from the Resend UI)
//
// The "newsletter itself" is sent manually via Resend's Broadcasts UI when
// there is something to say. There is no scheduled trigger.
//
// Abuse defenses (added July 2026 after a live subscription-bombing attack
// that used dotted-Gmail variants to flood both the victim's inbox and ours):
// per-IP rate limit, Gmail dot/plus normalization with per-instance dedupe,
// a suppression list for weaponized addresses, and an origin check. All are
// best-effort per serverless instance, same trade-off as the contact API.

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Best-effort in-memory rate limit, same pattern as the contact API: max
// signups per IP per window. Serverless instances each keep their own map,
// so this is a speed bump rather than a guarantee, but it strangles bursts.
const RATE_LIMIT = 3;
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
  if (submissions.size > 500) {
    for (const [key, times] of submissions) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) {
        submissions.delete(key);
      }
    }
  }
  return false;
}

// Gmail delivers a.b.c+tag@gmail.com to abc@gmail.com: dots and plus tags in
// the local part are ignored. Bots exploit that to mint endless "unique"
// addresses that all land in one inbox. Normalizing collapses the variants to
// a single key. The normalized form is only ever a lookup key; real sends
// always go to the address as typed.
function normalizeEmail(email: string): string {
  const [rawLocal, rawDomain] = email.toLowerCase().split("@");
  const domain = rawDomain === "googlemail.com" ? "gmail.com" : rawDomain;
  let local = rawLocal.split("+")[0];
  if (domain === "gmail.com") {
    local = local.replace(/\./g, "");
  }
  return `${local}@${domain}`;
}

// Addresses that have been weaponized against this form in subscription
// bombing attacks. Never send anything to these again (compared normalized).
const SUPPRESSED = new Set(["annehenderson611@gmail.com"]);

// Normalized addresses this instance has already processed. Repeat signups
// are answered with success and no email, which also makes double-clicks
// polite. Best-effort per instance, like the rate limit.
const seen = new Set<string>();

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildWelcomeHtml(firstName: string) {
  const safeName = escapeHtml(firstName) || "there";
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Welcome to the WildTech Development journal</title>
  </head>
  <body style="margin:0; padding:0; background:#f5f5f4; color:#1a1a1a; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f5f4; padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px; width:100%; background:#ffffff; border:1px solid #e5e5e3;">
            <tr>
              <td style="background:#06070a; padding:28px 36px; border-bottom:3px solid #c9515c;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="font-family:Georgia, 'Times New Roman', serif; font-style:italic; font-size:22px; color:#f5f6f8; letter-spacing:0.3px;">
                      WildTech
                      <span style="display:inline-block; width:6px; height:6px; background:#c9515c; border-radius:50%; margin-left:6px; vertical-align:middle;"></span>
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
                  Confirmed
                </p>
                <h1 style="margin:0 0 24px 0; font-family:Georgia, 'Times New Roman', serif; font-style:italic; font-weight:400; font-size:36px; line-height:1.1; color:#1a1a1a;">
                  You are on the list.
                </h1>
                <p style="margin:0 0 16px 0; font-size:16px; line-height:1.65; color:#3a3a3a;">
                  Hi ${safeName},
                </p>
                <p style="margin:0 0 16px 0; font-size:16px; line-height:1.65; color:#3a3a3a;">
                  Thanks for subscribing to the WildTech Development journal. You will get a short note when something new ships. No spam, no marketing automation, no daily digest. We only send when there is actually something to say.
                </p>
                <p style="margin:0 0 16px 0; font-size:16px; line-height:1.65; color:#3a3a3a;">
                  If you ever want to stop receiving these, reply with "unsubscribe" and you are off the list permanently. No friction.
                </p>
                <p style="margin:0 0 32px 0; font-size:16px; line-height:1.65; color:#3a3a3a;">
                  In the meantime, the existing journal is at <a href="https://www.wildtechdev.com/journal" style="color:#7d2730; text-decoration:none;">wildtechdev.com/journal</a>. Recent posts cover Resend on Namecheap, the real cost of an iOS app, naked-domain DNS fixes, and how to keep small-business email out of spam.
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
                      <a href="https://www.wildtechdev.com" style="color:#7d2730; text-decoration:none; font-weight:500;">wildtechdev.com</a>
                      <span style="color:#cccccc; margin:0 8px;">|</span>
                      <a href="mailto:info@wildtechdev.com" style="color:#7d2730; text-decoration:none;">info@wildtechdev.com</a>
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
            You are receiving this because you subscribed at wildtechdev.com. Reply "unsubscribe" to opt out.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many signups in a short time. Please try again later.",
      },
      { status: 429 }
    );
  }

  // Browsers include an Origin header on fetch POSTs; a cross-site origin
  // means the request did not come from our own form. Answer success and do
  // nothing, honeypot-style.
  const origin = request.headers.get("origin");
  if (
    origin &&
    !/^https:\/\/(www\.)?wildtechdev\.com$/.test(origin) &&
    !origin.startsWith("http://localhost")
  ) {
    return NextResponse.json({ ok: true });
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

  const email = String(body.email ?? "").trim();
  const name = String(body.name ?? "").trim();
  const honey = String(body.company ?? "").trim();

  // Honeypot: treat as success without doing anything
  if (honey.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (email.length > 200 || name.length > 100) {
    return NextResponse.json(
      { ok: false, error: "Input too long." },
      { status: 400 }
    );
  }

  // Suppressed or already-processed (normalized) addresses get a friendly
  // success and no email of any kind.
  const normalized = normalizeEmail(email);
  if (SUPPRESSED.has(normalized) || seen.has(normalized)) {
    return NextResponse.json({ ok: true });
  }
  seen.add(normalized);
  if (seen.size > 2000) {
    seen.clear();
    seen.add(normalized);
  }

  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ??
    "WildTech Development <noreply@wildtechdev.com>";
  const notifyEmail = process.env.CONTACT_TO_EMAIL ?? "info@wildtechdev.com";
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  const firstName = name.split(/\s+/)[0] || "";

  if (!resendKey) {
    // No Resend at all. Log and return success so the form does not look
    // broken to the user during local dev or pre-config.
    console.log("[subscribe] submission (no RESEND_API_KEY configured):", {
      email,
      name,
    });
    return NextResponse.json({ ok: true });
  }

  // 1) Welcome email to the subscriber
  const welcomeSubject = `Welcome to the WildTech journal${
    firstName ? `, ${firstName}` : ""
  }`;
  const welcomeText =
    `Hi ${firstName || "there"},\n\n` +
    `Thanks for subscribing to the WildTech Development journal. You will get a short note when something new ships. No spam, no marketing automation, no daily digest.\n\n` +
    `If you ever want to stop, reply with "unsubscribe" and you are off the list permanently.\n\n` +
    `The journal is at https://www.wildtechdev.com/journal.\n\n` +
    `Will McCants\n` +
    `Founder, WildTech Development\n` +
    `Charleston, SC\n`;
  const welcomeHtml = buildWelcomeHtml(firstName);

  const sendWelcome = fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendKey}`,
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [email],
      reply_to: notifyEmail,
      subject: welcomeSubject,
      text: welcomeText,
      html: welcomeHtml,
      headers: {
        "List-Unsubscribe": `<mailto:${notifyEmail}?subject=unsubscribe>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    }),
  });

  // 2) Notification email to the WildTech inbox so Will has a running list
  const notifySubject = `New newsletter subscriber: ${email}`;
  const notifyText =
    `A new person just subscribed to the WildTech journal.\n\n` +
    `Email: ${email}\n` +
    `Name: ${name || "(not provided)"}\n` +
    `When: ${new Date().toISOString()}\n` +
    `Source: wildtechdev.com newsletter signup\n`;
  const notifyHtml = `
    <div style="font-family: -apple-system, sans-serif; max-width: 520px;">
      <h2 style="color: #7d2730; font-weight: 600; margin: 0 0 12px 0;">New newsletter subscriber</h2>
      <p style="margin: 6px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(
        email
      )}">${escapeHtml(email)}</a></p>
      <p style="margin: 6px 0;"><strong>Name:</strong> ${escapeHtml(
        name || "(not provided)"
      )}</p>
      <p style="margin: 6px 0;"><strong>When:</strong> ${new Date().toLocaleString(
        "en-US",
        { timeZone: "America/New_York" }
      )} ET</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 18px 0;" />
      <p style="font-size: 12px; color: #6b7180;">Your full subscriber list is the set of these notification emails in your info@ inbox. To send the actual newsletter, log into Resend, click Broadcasts, compose, and send to your audience.</p>
    </div>
  `;

  const sendNotify = fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendKey}`,
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [notifyEmail],
      reply_to: email,
      subject: notifySubject,
      text: notifyText,
      html: notifyHtml,
    }),
  });

  // 3) Best-effort add to Resend Audience if configured
  const sendAudienceAdd = audienceId
    ? fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          email,
          first_name: name || undefined,
          unsubscribed: false,
        }),
      })
    : Promise.resolve(null);

  try {
    const [welcomeRes, notifyRes, audienceRes] = await Promise.all([
      sendWelcome,
      sendNotify,
      sendAudienceAdd,
    ]);
    if (!welcomeRes.ok) {
      console.error(
        "[subscribe] welcome send failed:",
        welcomeRes.status,
        await welcomeRes.text()
      );
    }
    if (!notifyRes.ok) {
      console.error(
        "[subscribe] notification send failed:",
        notifyRes.status,
        await notifyRes.text()
      );
    }
    // Audience add: 422 means contact already exists which is fine
    if (audienceRes && !audienceRes.ok && audienceRes.status !== 422) {
      console.error(
        "[subscribe] audience add failed:",
        audienceRes.status,
        await audienceRes.text()
      );
    }
  } catch (err) {
    console.error("[subscribe] threw:", err);
    // Let the subscriber retry: a failed attempt should not burn their slot
    // in the dedupe set.
    seen.delete(normalized);
    return NextResponse.json(
      { ok: false, error: "Could not subscribe. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
