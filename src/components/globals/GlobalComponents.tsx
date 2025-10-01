"use client";

import * as React from "react";
import SmartBadge from "@/components/ui/SmartBadge";

/**
 * Global reusable components for consistent styling across sections
 * Use these when Johannes requests specific global elements by name
 */

// 1. HeadingBadge - The interactive badge component with company logo
export function HeadingBadge({ 
  label, 
  className = "" 
}: { 
  label: string; 
  className?: string; 
}) {
  return <SmartBadge label={label} className={className} />;
}

// 2. SectionH2 - Standard section headline styling (always h2 by default)
export function SectionH2({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <h2 className={`mt-5 font-adcreative font-semibold text-3xl text-slate-900 sm:text-4xl ${className}`}>
      {children}
    </h2>
  );
}

// 3. SectionSubheading - Standard section subheading/description styling
export function SectionSubheading({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <p className={`mt-4 mb-[50px] px-0 md:px-[140px] text-[1.1rem] leading-7 text-slate-700 sm:text-[1.24rem] ${className}`}>
      {children}
    </p>
  );
}

/**
 * Usage Examples:
 * 
 * <HeadingBadge label="Your badge text here" />
 * <SectionH2>Your section headline</SectionH2>
 * <SectionSubheading>Your section description text</SectionSubheading>
 */
