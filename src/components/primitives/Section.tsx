import * as React from "react";

type Size = "sm" | "md" | "lg" | undefined;

export function Section({
  size = "lg",
  className = "",
  children,
}: React.PropsWithChildren<{ size?: Size; className?: string }>) {
  const paddings: Record<NonNullable<Size>, string> = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
  };
  const pad = size ? paddings[size] : "py-12";
  return <section className={`${pad} ${className}`}>{children}</section>;
}

export default Section;

