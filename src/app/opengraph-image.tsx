import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Custom Orthotics & Pedorthic Care`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0f766e 0%, #115e59 55%, #134e4a 100%)",
          padding: "72px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "88px",
              height: "88px",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.12)",
              border: "2px solid rgba(94,234,212,0.5)",
            }}
          >
            <svg width="52" height="52" viewBox="0 0 48 48" fill="#ffffff">
              <path d="M23.6 12.2c3.1 0 5.2 2.8 5.2 6.7 0 3.1-1.4 5.3-1.4 8.2 0 2.6 1.2 3.9 1.2 6.4 0 2.7-2 4.6-4.9 4.6s-5-1.9-5-4.6c0-2.6 1.2-3.9 1.2-6.4 0-2.9-1.5-5.1-1.5-8.2 0-3.9 2.1-6.7 5.2-6.7Z" />
              <circle cx="32.4" cy="16.6" r="2.5" />
              <circle cx="33.7" cy="21.9" r="1.9" />
              <circle cx="14.8" cy="16.9" r="2.3" />
              <circle cx="13.7" cy="21.8" r="1.8" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "40px", fontWeight: 700, lineHeight: 1 }}>
              Schatz
            </div>
            <div
              style={{
                fontSize: "20px",
                letterSpacing: "6px",
                textTransform: "uppercase",
                color: "#99f6e4",
              }}
            >
              Pedorthics
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: "64px", fontWeight: 700, lineHeight: 1.1, maxWidth: "900px" }}>
            Custom orthotics that keep you moving without pain.
          </div>
          <div style={{ fontSize: "30px", color: "#ccfbf1" }}>
            {site.credentials}
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", fontSize: "24px", color: "#a7f3d0" }}>
          Custom Orthotics · Compression Socks · Bracing · Footwear
        </div>
      </div>
    ),
    { ...size },
  );
}
