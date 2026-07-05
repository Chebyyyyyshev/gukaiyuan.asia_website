import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import type { ProjectMetadata } from "@/types/project";

import { ProjectStatus } from "./project-status";

type ProjectHeaderProps = {
  metadata: ProjectMetadata;
};

export function ProjectHeader({ metadata }: ProjectHeaderProps) {
  return (
    <header className="max-w-[var(--project-article-width)]">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 rounded-[var(--radius-control)] text-sm font-medium text-text-secondary underline decoration-border underline-offset-4 transition-colors hover:text-text-primary focus-visible:outline-accent"
      >
        <ArrowLeft aria-hidden="true" size={16} strokeWidth={1.8} />
        返回全部项目
      </Link>
      <ProjectStatus metadata={metadata} />
      <p className="mt-5 text-sm font-medium text-accent">{metadata.englishTitle}</p>
      <h1 className="mt-3 text-3xl font-semibold leading-tight text-text-primary md:text-5xl">
        {metadata.title}
      </h1>
      <p className="mt-5 text-base leading-7 text-text-secondary md:text-lg md:leading-8">
        {metadata.summary}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label="项目标签">
        {metadata.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border bg-elevated px-3 py-1 text-xs font-medium text-text-secondary"
          >
            {tag}
          </li>
        ))}
      </ul>
    </header>
  );
}
