/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";

// Dynamic Open Graph image generator.
// Usage: /api/og?title=Something&kind=Journal
// The image renders the WildTech wordmark, an optional kind label, and the
// title in serif italic on the dark brand background with a green accent.

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const titleParam = searchParams.get("title") ?? "WildTech Development";
  const kind = searchParams.get("kind"); // e.g. "Journal", "Work", "Page"

  const title = titleParam.length > 120 ? titleParam.slice(0, 117) + "..." : titleParam;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #06070a 0%, #0a0c10 50%, #06070a 100%)",
          color: "#f5f6f8",
          padding: 80,
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 120,
            height: 4,
            background: "#22c55e",
          }}
        />
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 60%)",
          }}
        />

        {/* Wordmark + kind */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              fontSize: 42,
              fontStyle: "italic",
              color: "#f5f6f8",
              letterSpacing: -1,
            }}
          >
            WildTech
          </span>
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: 9999,
              background: "#22c55e",
              boxShadow: "0 0 16px rgba(34,197,94,0.7)",
            }}
          />
          {kind && (
            <span
              style={{
                marginLeft: 18,
                fontSize: 14,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#6b7180",
                fontFamily: "system-ui, sans-serif",
                fontStyle: "normal",
              }}
            >
              {kind}
            </span>
          )}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? 56 : 76,
            lineHeight: 1.08,
            fontStyle: "italic",
            color: "#f5f6f8",
            maxWidth: 1000,
            display: "flex",
          }}
        >
          {title}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span
            style={{
              fontSize: 22,
              color: "#a8acb7",
              fontFamily: "system-ui, sans-serif",
              fontStyle: "normal",
            }}
          >
            wildtechdev.com
          </span>
          <span
            style={{
              fontSize: 14,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#6b7180",
              fontFamily: "system-ui, sans-serif",
              fontStyle: "normal",
            }}
          >
            Charleston, SC
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
