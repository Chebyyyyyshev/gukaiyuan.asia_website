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
          "transition-[border-color,background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-elevated focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/30",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid gap-3", className)} {...props} />;
}

type CardTitleProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h2" | "h3" | "h4";
};

export function CardTitle({
  as: Comp = "h2",
  className,
  ...props
}: CardTitleProps) {
  return (
    <Comp
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
