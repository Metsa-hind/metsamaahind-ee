import * as React from "react";

export function Container({
  className = "",
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-[10px] ${className}`}>
      {children}
    </div>
  );
}

export default Container;