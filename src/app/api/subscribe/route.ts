import { NextResponse } from "next/server";

// Newsletter subscription endpoint. Adds the email to a Resend Audience
// when RESEND_API_KEY and RESEND_AUDIENCE_ID are configured. Otherwise
// logs the submission server-side and returns success so the form does
// not appear broken to the user.

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

  const resendKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (resendKey && audienceId) {
    try {
      const res = await fetch(
        `https://api.resend.com/audiences/${audienceId}/contacts`,
        {
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
        }
      );
      if (!res.ok) {
        const detail = await res.text();
        console.error("Resend audience add failed:", res.status, detail);
        // 422 means the contact already exists, which from the user
        // perspective is the same as success. Fall through to ok.
        if (res.status !== 422) {
          return NextResponse.json(
            { ok: false, error: "Could not subscribe. Please try again." },
            { status: 500 }
          );
        }
      }
    } catch (err) {
      console.error("Resend audience threw:", err);
      return NextResponse.json(
        { ok: false, error: "Could not subscribe. Please try again." },
        { status: 500 }
      );
    }
  } else {
    console.log("[subscribe] submission (no Resend audience configured):", {
      email,
      name,
    });
  }

  return NextResponse.json({ ok: true });
}
