import type { ProjectMetadata } from "@/types/project";

type ProjectStatusProps = {
  metadata: ProjectMetadata;
};

export function ProjectStatus({ metadata }: ProjectStatusProps) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-accent/30 bg-accent-muted px-3 py-1 text-xs font-semibold text-accent">
      {metadata.statusLabel}
    </span>
  );
}
