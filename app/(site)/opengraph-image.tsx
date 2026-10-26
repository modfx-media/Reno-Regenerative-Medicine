import { ImageResponse } from "next/og";

export const alt = "Reno Regenerative Medicine — Integrative & Regenerative Care";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0b3b3c 0%, #155e63 55%, #1f7a7c 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            opacity: 0.95,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#7fe3c4",
              marginRight: 16,
            }}
          />
          Reno Regenerative Medicine
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 980,
            }}
          >
            Natural relief for chronic knee, back &amp; joint pain.
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 400,
              lineHeight: 1.3,
              opacity: 0.85,
              maxWidth: 900,
            }}
          >
            Integrative &amp; regenerative medicine in Reno, NV.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            opacity: 0.85,
          }}
        >
          <div style={{ display: "flex" }}>renoregen.com</div>
          <div style={{ display: "flex" }}>(775) 683-9026</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
