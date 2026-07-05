import Link from "next/link";

import type { NoteEntry } from "@/types/note";

type RelatedNotesProps = {
  notes: NoteEntry[];
};

export function RelatedNotes({ notes }: RelatedNotesProps) {
  if (notes.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="related-notes-title" className="grid gap-4">
      <h2 id="related-notes-title" className="text-2xl font-semibold">
        相关文章
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {notes.map((note) => (
          <Link
            key={note.metadata.slug}
            href={`/notes/${note.metadata.slug}`}
            className="rounded-[var(--radius-card)] border border-border bg-surface p-4 transition-colors hover:border-accent focus-visible:outline-accent"
          >
            <p className="text-sm font-medium text-accent">
              {note.metadata.englishCategory}
            </p>
            <h3 className="mt-2 font-semibold text-text-primary">
              {note.metadata.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              {note.metadata.summary}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
