import * as React from "react";

type Props = {
  diameter?: number; // px
  median: number; // €/ha
  max: number; // €
  maxDomainMedian: number; // for scaling median ring
  maxDomainMax: number; // for scaling max ring
  deals: number; // count
};

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const a = ((angle - 90) * Math.PI) / 180.0;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M",
    start.x,
    start.y,
    "A",
    r,
    r,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");
}

export default function GrowthRingsRadial({
  diameter = 220,
  median,
  max,
  maxDomainMedian,
  maxDomainMax,
  deals,
}: Props) {
  const rOuter = diameter / 2;
  // Outer (larger radius) should represent HIGHEST €/ha (max)
  const rMax = rOuter - 14;
  // Inner (smaller radius) should represent median €/ha
  const rMedian = rOuter - 34;
  const center = rOuter;

  const medianPct = Math.max(0, Math.min(1, median / Math.max(1, maxDomainMedian)));
  const maxPct = Math.max(0, Math.min(1, max / Math.max(1, maxDomainMax)));

  const medianAngle = 360 * medianPct;
  const maxAngle = 360 * maxPct;

  // Dotted outer markers removed by request; keep props for future use

  return (
    <svg width={diameter} height={diameter} viewBox={`0 0 ${diameter} ${diameter}`} aria-hidden>
      {/* Back rings */}
      <circle cx={center} cy={center} r={rMax} fill="none" stroke="#E2E8F0" strokeWidth={10} />
      <circle cx={center} cy={center} r={rMedian} fill="none" stroke="#DCFCE7" strokeWidth={10} />

      {/* Active arcs: outer = max €/ha, inner = median €/ha */}
      <path d={describeArc(center, center, rMax, 0, maxAngle)} stroke="#059669" strokeWidth={10} fill="none" strokeLinecap="round" />
      <path d={describeArc(center, center, rMedian, 0, medianAngle)} stroke="#10B981" strokeWidth={10} fill="none" strokeLinecap="round" />

      {/* Center labels */}
      <g fontFamily="ui-sans-serif, system-ui" textAnchor="middle">
        <text x={center} y={center - 2} fontSize={Math.round(18 * 0.8)} fontWeight={700} fill="#064E3B">
          {median.toLocaleString("et-EE")} €/ha
        </text>
        <text x={center} y={center + 18} fontSize={Math.round(12 * 0.8)} fill="#065F46">
          mediaan
        </text>
      </g>
    </svg>
  );
}


