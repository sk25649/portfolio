import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Siwan Kim — Builder & Indie Hacker";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const projects = ["FarmPosts", "DocAPI", "US Kids Golf Status"];

export default function Image() {
  const fontBold = readFileSync(
    join(process.cwd(), "app/fonts/Syne-ExtraBold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFFFFF",
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Syne",
        }}
      >
        {/* Top bar: label + URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "40px 72px 0",
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#AAAAAA",
            }}
          >
            Portfolio
          </span>
          <span
            style={{
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#0A0A0A",
            }}
          >
            siwan.io
          </span>
        </div>

        {/* Main content: two columns */}
        <div
          style={{
            display: "flex",
            flex: 1,
            padding: "0 72px",
            alignItems: "center",
            gap: "80px",
          }}
        >
          {/* Left: name + bio */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              flex: 1,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontSize: 108,
                fontWeight: 800,
                letterSpacing: "-4px",
                lineHeight: 0.88,
                color: "#0A0A0A",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>siwan</span>
              <span style={{ color: "#0047FF" }}>kim.</span>
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: "#888888",
                lineHeight: 1.6,
                maxWidth: 420,
              }}
            >
              builder and indie hacker. shipping things at the intersection of
              AI and useful tools.
            </div>
          </div>

          {/* Vertical divider */}
          <div
            style={{
              width: "1px",
              height: "320px",
              background: "#E8E8E8",
              flexShrink: 0,
              display: "flex",
            }}
          />

          {/* Right: project list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
          width: "420px",
            flexShrink: 0,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#AAAAAA",
                marginBottom: "20px",
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
                  padding: "18px 0",
                  borderTop: "1.5px solid #E8E8E8",
                  borderBottom:
                    i === projects.length - 1
                      ? "1.5px solid #E8E8E8"
                      : "none",
                }}
              >
                <span
                  style={{
                  fontSize: 24,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "#0A0A0A",
                  }}
                >
                  {name}
                </span>
                <span
                  style={{
                    fontSize: 22,
                    color: "#0047FF",
                    fontWeight: 800,
                  }}
                >
                  →
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Blue stripe at bottom */}
        <div
          style={{
            height: "10px",
            background: "#0047FF",
            width: "100%",
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
          data: fontBold,
          style: "normal",
          weight: 800,
        },
      ],
    }
  );
}
