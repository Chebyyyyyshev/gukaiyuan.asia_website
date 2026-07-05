import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import type { ProjectEntry } from "@/types/project";

import { ProjectStatus } from "./project-status";

type ProjectCardProps = {
  project: ProjectEntry;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { metadata } = project;

  return (
    <Card as="div" variant="interactive" className="max-w-4xl overflow-hidden p-0">
      <Link
        href={`/projects/${metadata.slug}`}
        className="group grid h-full rounded-[var(--radius-card)] focus:outline-none md:grid-cols-[0.96fr_1.04fr]"
      >
        <div className="border-b border-border bg-elevated p-4 md:border-b-0 md:border-r md:p-5">
          <div className="relative aspect-[823/526] overflow-hidden rounded-[calc(var(--radius-card)-0.35rem)] border border-border bg-white">
            <Image
              src={metadata.coverImage}
              alt={metadata.coverAlt}
              fill
              sizes="(min-width: 1024px) 430px, 100vw"
              className="object-contain p-3"
            />
          </div>
        </div>

        <div className="grid gap-5 p-5 md:p-6">
          <div>
            <ProjectStatus metadata={metadata} />
            <p className="mt-5 text-sm font-medium text-accent">
              {metadata.englishTitle}
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-text-primary md:text-3xl">
              {metadata.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-text-secondary">
              {metadata.summary}
            </p>
          </div>

          <ul className="flex flex-wrap gap-2" aria-label={`${metadata.title} 标签`}>
            {metadata.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border bg-elevated px-3 py-1 text-xs font-medium text-text-secondary"
              >
                {tag}
              </li>
            ))}
          </ul>

          <span className="inline-flex items-center gap-2 self-end text-sm font-semibold text-text-primary">
            查看项目
            <ArrowRight
              aria-hidden="true"
              size={17}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </Card>
  );
}
