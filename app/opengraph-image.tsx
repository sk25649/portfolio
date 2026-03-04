import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Siwan Kim — Builder & Indie Hacker";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const projects = ["FarmPosts", "DocAPI", "US Kids Golf Status"];

export default function Image() {
  const fontData = readFileSync(
    join(
      process.cwd(),
      "node_modules/@fontsource/syne/files/syne-latin-800-normal.woff"
    )
  );

  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFFFFF",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px 80px",
          position: "relative",
          fontFamily: "Syne",
        }}
      >
        {/* Top row: label left, siwan.io right */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8A8A8A",
            }}
          >
            Portfolio
          </span>
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#0A0A0A",
            }}
          >
            siwan.io
          </span>
        </div>

        {/* Middle: name left + projects right */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "40px",
          }}
        >
          {/* Name + bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              style={{
                fontSize: 108,
                fontWeight: 800,
                letterSpacing: "-5px",
                lineHeight: 0.88,
                color: "#0A0A0A",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>siwan</span>
              <span>kim.</span>
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: "#8A8A8A",
                maxWidth: 400,
                lineHeight: 1.6,
              }}
            >
              builder & indie hacker. shipping things at the intersection of AI
              and useful tools.
            </div>
          </div>

          {/* Project list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0px",
              minWidth: 320,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#8A8A8A",
                marginBottom: "16px",
              }}
            >
              Selected Projects
            </div>
            {projects.map((name, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 0",
                  borderTop: "1px solid #E8E8E8",
                  borderBottom:
                    i === projects.length - 1 ? "1px solid #E8E8E8" : "none",
                  gap: "24px",
                }}
              >
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#0A0A0A",
                  }}
                >
                  {name}
                </span>
                <span style={{ fontSize: 18, color: "#0047FF" }}>→</span>
              </div>
            ))}
          </div>
        </div>

        {/* Blue accent bar at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#0047FF",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Syne",
          data: fontData,
          style: "normal",
          weight: 800,
        },
      ],
    }
  );
}
