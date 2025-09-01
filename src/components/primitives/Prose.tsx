import * as React from "react";

export function Prose({
  className = "",
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={["prose max-w-none", className].join(" ")}>{children}</div>;
}

export default Prose;

