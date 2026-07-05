import { CircleDashed } from "lucide-react";

import { cn } from "@/lib/cn";

type EmptyStateProps = {
  title: string;
  description: string;
  className?: string;
  titleAs?: "h1" | "h2";
};

export function EmptyState({
  title,
  description,
  className,
  titleAs: Heading = "h2",
}: EmptyStateProps) {
  return (
    <section
      className={cn(
        "rounded-[var(--radius-card)] border border-dashed border-border bg-surface p-6 text-text-secondary",
        className,
      )}
      aria-label={title}
    >
      <CircleDashed className="mb-4 text-accent" aria-hidden="true" size={24} />
      <Heading className="text-lg font-semibold text-text-primary">{title}</Heading>
      <p className="mt-2 max-w-2xl leading-7">{description}</p>
    </section>
  );
}
