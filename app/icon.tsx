import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0047FF",
          borderRadius: 7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#FFFFFF",
            fontSize: 19,
            fontWeight: 700,
            fontFamily: "sans-serif",
            lineHeight: 1,
            letterSpacing: "-0.5px",
            marginTop: 1,
          }}
        >
          S
        </span>
      </div>
    ),
    { ...size }
  );
}
