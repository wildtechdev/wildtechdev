import { ImageResponse } from "next/og";

export const alt = "Contact WildTech Development";
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
            "radial-gradient(ellipse 60% 50% at 30% 70%, rgba(201, 81, 92,0.2), transparent 70%)",
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
            color: "#c9515c",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 24, height: 1, background: "#c9515c" }} />
          Let&apos;s talk
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 140,
              fontStyle: "italic",
              color: "#f5f6f8",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              fontWeight: 400,
            }}
          >
            Have an idea?
          </div>
          <div
            style={{
              fontSize: 140,
              fontStyle: "italic",
              color: "#c9515c",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              fontWeight: 400,
            }}
          >
            Let&apos;s build it.
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
              background: "#c9515c",
            }}
          />
          wildtechdev.com/contact
        </div>
      </div>
    ),
    { ...size }
  );
}
