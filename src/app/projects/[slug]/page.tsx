import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectHeader } from "@/components/projects/project-header";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ProjectNavigation } from "@/components/projects/project-navigation";
import { ProjectRelatedNotes } from "@/components/projects/related-notes";
import {
  getProjectBySlug,
  getProjectStaticParams,
  getRelatedNotesForProject,
} from "@/lib/content/projects";
import { createPageMetadata } from "@/lib/seo/metadata";

export const dynamicParams = false;

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams(): Array<{ slug: string }> {
  return getProjectStaticParams();
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const { metadata } = project;

  return createPageMetadata({
    title: metadata.title,
    description: metadata.summary,
    path: `/projects/${metadata.slug}`,
    type: "article",
    image: {
      url: metadata.coverImage,
      alt: metadata.coverAlt,
    },
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const Content = (await project.load()).default;
  const relatedNotes = getRelatedNotesForProject(project);

  return (
    <div className="grid gap-12">
      <ProjectHeader metadata={project.metadata} />
      <ProjectLayout>
        <Content />
        <ProjectRelatedNotes notes={relatedNotes} />
      </ProjectLayout>
      <ProjectNavigation />
    </div>
  );
}
