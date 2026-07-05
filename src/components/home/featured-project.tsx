import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/home/section-heading";
import { Card } from "@/components/ui/card";
import { homeContent } from "@/config/home";

export function FeaturedProject() {
  const project = homeContent.featuredProject;

  return (
    <section className="home-section" aria-labelledby="featured-project-title">
      <SectionHeading
        id="featured-project-title"
        title="精选项目"
        eyebrow={project.eyebrow}
      />
      <Card className="mt-8 overflow-hidden p-0">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between gap-8 p-6 md:p-8">
            <div>
              <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-text-secondary">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="项目标签">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-elevated px-3 py-1 text-xs font-medium text-text-secondary"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={project.href}
              className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-[var(--radius-control)] border border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-strong focus-visible:outline-accent"
            >
              {project.actionLabel}
              <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
            </Link>
          </div>
          <div className="border-t border-border bg-elevated p-3 lg:border-l lg:border-t-0 md:p-5">
            <div className="relative aspect-[16/10] min-h-[220px] overflow-hidden rounded-[calc(var(--radius-card)-0.25rem)] border border-border bg-surface">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
