import { cn } from "@/lib/cn";

export type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
};

export function PageHeader({ eyebrow, title, description, className }: PageHeaderProps) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase text-accent">{eyebrow}</p>
      ) : null}
      <h1 className="text-3xl font-semibold leading-tight text-text-primary md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
        {description}
      </p>
    </header>
  );
}
