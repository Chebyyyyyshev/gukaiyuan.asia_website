import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id: string;
  title: string;
  eyebrow: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  id,
  title,
  eyebrow,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="text-sm font-medium uppercase text-accent">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
