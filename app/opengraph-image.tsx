import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Siwan Kim — Building AI products in public";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const projects = [
  { name: "FarmPosts", status: "Paying", color: "#4ADE80" },
  { name: "US Kids Golf Status", status: "Growing", color: "#F0B95C" },
  { name: "DocAPI", status: "Live", color: "#6E93FF" },
  { name: "ShipLoud", status: "Live", color: "#6E93FF" },
  { name: "PlayEpisodes", status: "Live", color: "#6E93FF" },
];

export default function Image() {
  const fontBold = readFileSync(
    join(process.cwd(), "app/fonts/Syne-ExtraBold.ttf"),
  );

  return new ImageResponse(
    <div
      style={{
        background: "#0B0B0D",
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
            color: "#A6A29A",
          }}
        >
          Building in public
        </span>
        <span
          style={{
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#F2F0EA",
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
        {/* Left: name + premise */}
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
              fontSize: 100,
              fontWeight: 800,
              letterSpacing: "-4px",
              lineHeight: 0.88,
              color: "#F2F0EA",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Siwan</span>
            <span>
              Kim<span style={{ color: "#6E93FF" }}>.</span>
            </span>
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: "#A6A29A",
              lineHeight: 1.6,
              maxWidth: 430,
            }}
          >
            Dad of three in Los Angeles. Building AI products to $10K MRR —
            and posting the receipts.
          </div>
        </div>

        {/* Vertical divider */}
        <div
          style={{
            width: "1px",
            height: "340px",
            background: "#232329",
            flexShrink: 0,
            display: "flex",
          }}
        />

        {/* Right: the ledger */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            width: "430px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#A6A29A",
              marginBottom: "16px",
            }}
          >
            The products
          </div>
          {projects.map((p, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "13px 0",
                borderTop: "1.5px solid #232329",
                borderBottom:
                  i === projects.length - 1 ? "1.5px solid #232329" : "none",
              }}
            >
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "#F2F0EA",
                }}
              >
                {p.name}
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: p.color,
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: p.color,
                    display: "flex",
                  }}
                />
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Accent stripe at bottom */}
      <div
        style={{
          height: "10px",
          background: "#6E93FF",
          width: "100%",
          display: "flex",
        }}
      />
    </div>,
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
    },
  );
}
