import { NextResponse } from "next/server";

// The newsletter was retired in July 2026 after a sustained subscription
// bombing campaign kept feeding bot signups through this endpoint (see
// PROJECT_LOG). The signup UI is gone site-wide; the journal offers RSS
// instead. This stub stays so lingering bots get a cheap, convincing
// "success" instead of a 404 that might prompt them to probe elsewhere.
// It sends NOTHING: no welcome email, no notification, no list write.
//
// The previous implementation (Resend sends, rate limiting, Gmail
// normalization, suppression list) lives in git history if the newsletter
// ever comes back; if it does, bring back double opt-in with it.

export async function POST() {
  return NextResponse.json({ ok: true });
}
