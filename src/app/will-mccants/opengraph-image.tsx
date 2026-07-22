import { ImageResponse } from "next/og";

export const alt = "Will McCants, founder of WildTech Ventures, LLC";
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
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(201, 81, 92,0.18), transparent 70%)",
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
          Founder
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 144,
              fontStyle: "italic",
              color: "#f5f6f8",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              fontWeight: 400,
            }}
          >
            Will McCants
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a8acb7",
            }}
          >
            Founder of WildTech Ventures, LLC
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#6b7180",
              marginTop: 24,
              maxWidth: 900,
              lineHeight: 1.5,
            }}
          >
            Charleston, SC native. Builder of Churchd, Viking Sensors, and
            WildTech Development.
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
          wildtechdev.com/will-mccants
        </div>
      </div>
    ),
    { ...size }
  );
}
