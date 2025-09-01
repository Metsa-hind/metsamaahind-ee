"use client";
import { useEffect, useRef } from "react";

// Global, fluid, neutral green background with very few vectors
export default function SiteBackground() {
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      const mx = (e.clientX / w - 0.5) * 2; // -1..1
      const my = (e.clientY / h - 0.5) * 2;
      el.style.setProperty("--mx", mx.toFixed(3));
      el.style.setProperty("--my", my.toFixed(3));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 -z-50 overflow-hidden">
      {/* Fluid green gradient across the whole site */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_-10%,#c7f9cc_0%,#a7f3d0_20%,#d1fae5_40%,#ecfdf5_65%,#f7fdf9_100%)]" />

      {/* A FEW decorative vectors with gentle parallax */}
      <div
        ref={layerRef}
        className="absolute inset-0 pointer-events-none [transform:translate3d(calc(var(--mx,0)*6px),calc(var(--my,0)*6px),0)] transition-transform duration-100 ease-linear"
        style={{ willChange: "transform" }}
      >
        <svg className="absolute -left-16 top-24 h-56 w-56 opacity-20 text-emerald-700" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 2l18 20h-10l14 16h-10l10 12H28l10-12H28l14-16H32z" />
        </svg>
        <svg className="absolute right-[-40px] top-[55%] h-64 w-64 opacity-15 text-emerald-800" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="42" />
        </svg>
        <svg className="absolute left-[55%] -bottom-16 h-72 w-72 opacity-10 text-emerald-900" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5l12 16H56l10 12H56l8 10H36l8-10H34l10-12H38z" />
        </svg>
      </div>
    </div>
  );
}
