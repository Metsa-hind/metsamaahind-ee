"use client";
import React from "react";

// Minimal, subtle backdrop (keeps things calm and SSR-safe)
export default function ForestBackground() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        className="opacity-10 text-emerald-900"
      >
        <defs>
          <radialGradient id="fade" r="0.9">
            <stop offset="0" stopColor="currentColor" stopOpacity="1" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="60" fill="url(#fade)" />
      </svg>
    </div>
  );
}
