import { ImageResponse } from "next/og";

export const alt = "About WildTech Development";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#06070a",
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(34,197,94,0.18), transparent 70%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 16,
            color: "#22c55e",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 24, height: 1, background: "#22c55e" }} />
          About
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 120,
              fontStyle: "italic",
              color: "#f5f6f8",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              fontWeight: 400,
            }}
          >
            WildTech Development
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a8acb7",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            A Charleston, SC technology company. iOS apps, web platforms, and
            precision IoT hardware. Founded by Will McCants in 2024.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 20,
            color: "#6b7180",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          wildtechdev.com/about
        </div>
      </div>
    ),
    { ...size }
  );
}
