import { ImageResponse } from "next/og";

export const alt = "WildTech Development - Software & Hardware Solutions";
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
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(201, 81, 92,0.18), transparent 70%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
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
            fontSize: 18,
            color: "#c9515c",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#c9515c",
            }}
          />
          Charleston, SC
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 132,
              fontStyle: "italic",
              color: "#f5f6f8",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              fontWeight: 400,
            }}
          >
            WildTech
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a8acb7",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Development
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#f5f6f8",
              marginTop: 40,
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Custom iOS apps, web platforms, and precision IoT hardware.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            color: "#6b7180",
          }}
        >
          wildtechdev.com
        </div>
      </div>
    ),
    { ...size }
  );
}
