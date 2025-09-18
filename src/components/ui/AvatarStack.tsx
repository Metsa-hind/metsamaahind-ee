"use client";

import * as React from "react";
import Image from "next/image";

type Files4 = [string, string, string, string];

export default function AvatarStack({
  files,
  alts,
  size = 36,
  overlap = -12,
  ringClass = "ring-2 ring-white/90 dark:ring-neutral-900",
  direction = "ltr",
}: {
  files: Files4;
  alts: Files4;
  size?: number; // pixels; clamped to 36 (visual tweak)
  overlap?: number; // negative margin to overlap avatars
  ringClass?: string; // tailwind ring classes
  direction?: "ltr" | "rtl";
}) {
  if (!Array.isArray(files) || files.length !== 4 || !Array.isArray(alts) || alts.length !== 4) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.error("AvatarStack: 'files' and 'alts' must both be arrays of exactly length 4.");
    }
  }
  // Guard: if invalid counts, render nothing
  if (!Array.isArray(files) || files.length !== 4 || !Array.isArray(alts) || alts.length !== 4) {
    return null;
  }

  const clamped = Math.min(36, Math.max(0, Math.floor(size)) || 36);
  const items = direction === "rtl"
    ? (files.map((f, i) => ({ src: "/" + f, alt: alts[i] })) as Array<{src: string; alt: string}>).reverse()
    : (files.map((f, i) => ({ src: "/" + f, alt: alts[i] })) as Array<{src: string; alt: string}>);

  return (
    <div aria-label="Avatar stack" className="inline-flex items-center" style={{ maxHeight: clamped }}>
      {items.map((item, index) => {
        const ml = direction === "rtl" ? 0 : index === 0 ? 0 : overlap;
        const mr = direction === "rtl" ? (index === 0 ? 0 : overlap) : 0;
        return (
          <span
            key={`${item.src}-${index}`}
            className={`relative inline-flex overflow-hidden rounded-full ${ringClass} bg-white`}
            style={{
              width: clamped,
              height: clamped,
              marginLeft: ml,
              marginRight: mr,
              zIndex: 10 + index,
            }}
            title={item.alt}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={clamped}
              height={clamped}
              className="h-full w-full object-cover transition-transform duration-150 hover:-translate-y-px hover:z-20"
              sizes={`${clamped}px`}
            />
          </span>
        );
      })}
    </div>
  );
}


