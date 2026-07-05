import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NoteHeader } from "@/components/notes/note-header";
import { NoteLayout } from "@/components/notes/note-layout";
import { NoteNavigation } from "@/components/notes/note-navigation";
import { RelatedNotes } from "@/components/notes/related-notes";
import {
  getAdjacentNotes,
  getNoteBySlug,
  getNoteStaticParams,
  getRelatedNotes,
} from "@/lib/content/notes";

export const dynamicParams = false;

type NotePageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export function generateStaticParams(): Array<{ slug: string[] }> {
  return getNoteStaticParams();
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return {};
  }

  const { metadata } = note;
  const url = `/notes/${metadata.slug}`;

  return {
    title: {
      absolute: `${metadata.title} | 顾开元`,
    },
    description: metadata.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${metadata.title} | 顾开元`,
      description: metadata.summary,
      type: "article",
      url,
    },
  };
}

export default async function NoteDetailPage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  const { previous, next } = getAdjacentNotes(note);
  const relatedNotes = getRelatedNotes(note);
  const Content = (await note.load()).default;

  return (
    <div className="grid gap-12">
      <NoteHeader metadata={note.metadata} />
      <NoteLayout>
        <Content />
      </NoteLayout>
      <div className="grid max-w-[var(--article-width)] gap-10">
        <NoteNavigation previous={previous} next={next} />
        <RelatedNotes notes={relatedNotes} />
      </div>
    </div>
  );
}
