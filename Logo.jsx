import React from "react";
import { brand } from "./data/brand.js";

// CEW wordmark rendered in brand type + color, per the Brand Guide.
// All-caps Lato Black; "CLEAN" and "WORKS" in New Navy, "ENERGY" in Throwback
// Blue, with an Electric Yellow node ring on the O of WORKS echoing the
// connector-node mark. Reproduces the lockup without distorting the raster
// logo (which the guide says never to alter/stretch).
export default function Logo({ onDark = false }) {
  const navy = onDark ? "#ffffff" : brand.color.newNavy;
  const blue = onDark ? brand.color.throwbackBlueLt : brand.color.throwbackBlue;
  return (
    <span
      style={{
        fontFamily: brand.font,
        fontWeight: 900,
        letterSpacing: "0.02em",
        fontSize: 20,
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
      }}
      aria-label="Clean Energy Works"
    >
      <span style={{ color: navy }}>CLEAN</span>
      <span style={{ color: blue }}>ENERGY</span>
      <span style={{ color: navy, display: "inline-flex", alignItems: "center" }}>
        W
        {/* yellow connector-node "O" */}
        <span
          style={{
            width: "0.62em",
            height: "0.62em",
            borderRadius: "50%",
            border: `0.16em solid ${brand.color.electricYellow}`,
            display: "inline-block",
            margin: "0 0.02em",
            boxSizing: "border-box",
          }}
        />
        RKS
      </span>
    </span>
  );
}
