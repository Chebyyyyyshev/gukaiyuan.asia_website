import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type CalloutProps = {
  type?: "note" | "info" | "warning";
  title?: string;
  children: ReactNode;
};

export function Callout({ type = "note", title, children }: CalloutProps) {
  return (
    <aside className={cn("mdx-callout", `mdx-callout-${type}`)}>
      {title ? <p className="mdx-callout-title">{title}</p> : null}
      <div>{children}</div>
    </aside>
  );
}
