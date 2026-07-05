import type { ElementType, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  variant?: "default" | "interactive";
};

export function Card({
  as: Comp = "article",
  className,
  children,
  variant = "default",
  ...props
}: CardProps) {
  return (
    <Comp
      className={cn(
        "rounded-[var(--radius-card)] border border-border bg-surface p-5 shadow-[var(--shadow-soft)]",
        variant === "interactive" &&
          "transition-colors hover:border-accent focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/30",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid gap-2", className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-lg font-semibold leading-7 text-text-primary", className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("leading-7 text-text-secondary", className)} {...props} />;
}
