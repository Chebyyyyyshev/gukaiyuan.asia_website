import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { SectionHeading } from "@/components/home/section-heading";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { homeContent } from "@/config/home";

export function KnowledgeSection() {
  const { knowledge } = homeContent;

  return (
    <section className="home-section" aria-labelledby="knowledge-title">
      <SectionHeading
        id="knowledge-title"
        title={knowledge.title}
        eyebrow={knowledge.eyebrow}
        description={knowledge.description}
      />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {knowledge.categories.map((category) => (
          <Card
            key={category.title}
            as="div"
            variant="interactive"
            className="p-0"
          >
            <Link
              href={category.href}
              className="group grid h-full gap-6 rounded-[var(--radius-card)] p-5 focus:outline-none"
            >
              <CardHeader>
                <p className="text-sm font-medium text-accent">{category.label}</p>
                <CardTitle as="h3">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <span className="inline-flex items-center gap-2 self-end text-sm font-semibold text-text-primary">
                浏览笔记
                <ArrowRight
                  aria-hidden="true"
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
