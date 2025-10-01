"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function SmartBadge({
  label,
  className = "",
  title,
}: {
  label: string;
  className?: string;
  title?: string;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <div className={`relative inline-flex ${className}`}>
      <motion.div
        role="status"
        aria-label={label}
        tabIndex={0}
        className="relative inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900 ring-1 ring-emerald-400/40 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:bg-emerald-900/20 dark:text-emerald-100 dark:ring-emerald-700/40"
        whileHover={{ scale: prefersReduced ? 1 : 1.02 }}
        whileTap={{ scale: prefersReduced ? 1 : 0.99 }}
        title={title || label}
      >
        {/* Company logo */}
        <Image
          src="/metsa-hind-ikoon.png"
          alt="Metsa Hind"
          width={14}
          height={14}
          className="h-3.5 w-3.5 object-contain -mx-1"
        />
        <span>{label}</span>

        {/* Shimmer highlight on hover */}
        {!prefersReduced && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full"
            initial={{ x: "-120%", opacity: 0 }}
            whileHover={{ x: "120%", opacity: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop", ease: "linear" }}
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 100%)",
              mixBlendMode: "overlay",
            }}
          />
        )}
      </motion.div>
    </div>
  );
}


