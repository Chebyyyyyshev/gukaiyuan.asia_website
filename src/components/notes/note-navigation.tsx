import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import type { NoteEntry } from "@/types/note";

type NoteNavigationProps = {
  previous?: NoteEntry;
  next?: NoteEntry;
};

export function NoteNavigation({ previous, next }: NoteNavigationProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav className="grid gap-3 md:grid-cols-2" aria-label="上一篇和下一篇">
      {previous ? (
        <Link
          href={`/notes/${previous.metadata.slug}`}
          className="rounded-[var(--radius-card)] border border-border bg-surface p-4 transition-colors hover:border-accent focus-visible:outline-accent"
        >
          <span className="inline-flex items-center gap-2 text-sm text-text-secondary">
            <ArrowLeft aria-hidden="true" size={16} strokeWidth={1.8} />
            上一篇
          </span>
          <span className="mt-2 block font-semibold text-text-primary">
            {previous.metadata.title}
          </span>
        </Link>
      ) : null}
      {next ? (
        <Link
          href={`/notes/${next.metadata.slug}`}
          className="rounded-[var(--radius-card)] border border-border bg-surface p-4 transition-colors hover:border-accent focus-visible:outline-accent md:text-right"
        >
          <span className="inline-flex items-center gap-2 text-sm text-text-secondary md:justify-end">
            下一篇
            <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
          </span>
          <span className="mt-2 block font-semibold text-text-primary">
            {next.metadata.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
