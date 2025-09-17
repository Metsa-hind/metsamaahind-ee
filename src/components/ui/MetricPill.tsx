import * as React from "react";

export default function MetricPill({
  label,
  value,
  suffix,
  Icon,
  title,
}: {
  label: string;
  value: string | number;
  suffix?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title?: string;
}) {
  return (
    <div
      className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-emerald-900/90"
      title={title || label}
      aria-label={`${label}: ${value}${suffix ? ` ${suffix}` : ""}`}
    >
      <Icon className="h-4 w-4 text-emerald-700" aria-hidden />
      <div className="leading-tight">
        <span className="block text-xs text-emerald-700">{label}</span>
        <strong>
          {typeof value === "number" ? value.toLocaleString("et-EE") : value}
          {suffix}
        </strong>
      </div>
    </div>
  );
}


