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
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontStyle: "italic",
            color: "#fafafa",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          WildTech Development
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#a1a1aa",
            letterSpacing: "0.05em",
          }}
        >
          Software &amp; Hardware Solutions | Charleston, SC
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 8,
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
          <span style={{ fontSize: 14, color: "#52525b", letterSpacing: "0.1em" }}>
            wildtechdev.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
