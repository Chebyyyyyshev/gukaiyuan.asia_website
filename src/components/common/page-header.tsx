import { cn } from "@/lib/cn";

export type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
};

export function PageHeader({ eyebrow, title, description, className }: PageHeaderProps) {
  return (
    <header className={cn("max-w-[var(--article-width)]", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium text-accent">{eyebrow}</p>
      ) : null}
      <h1 className="text-3xl font-semibold leading-tight text-text-primary md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-7 text-text-secondary md:text-lg">
        {description}
      </p>
    </header>
  );
}
