import { ImageResponse } from "next/og";

export const alt = "Tiger's Physical Academy: Kashmir's First Calisthenics & Physical Academy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #232d18 0%, #050505 60%)",
          color: "#e6dece",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 84,
              height: 84,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#d4aa3a",
              color: "#050505",
              fontSize: 30,
              fontWeight: 800,
              clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
            }}
          >
            TPA
          </div>
          <div style={{ fontSize: 24, letterSpacing: 8, color: "#d4aa3a", textTransform: "uppercase" }}>Srinagar · Kashmir · Est. 2021</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 0.95, textTransform: "uppercase" }}>Kashmir&apos;s First</div>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 0.95, textTransform: "uppercase", color: "#d4aa3a" }}>Calisthenics</div>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 0.95, textTransform: "uppercase" }}>&amp; Physical Academy</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "rgba(230,222,206,0.7)" }}>
          <span>Founded by Imran Ahmad “Tiger”</span>
          <span>@tigers_physical_academy</span>
        </div>
      </div>
    ),
    size,
  );
}
