import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import type { NoteMetadata } from "@/types/note";

type NoteHeaderProps = {
  metadata: NoteMetadata;
};

export function NoteHeader({ metadata }: NoteHeaderProps) {
  return (
    <header className="max-w-[var(--article-width)]">
      <Link
        href="/notes"
        className="mb-8 inline-flex items-center gap-2 rounded-[var(--radius-control)] text-sm font-medium text-text-secondary underline decoration-border underline-offset-4 transition-colors hover:text-text-primary focus-visible:outline-accent"
      >
        <ArrowLeft aria-hidden="true" size={16} strokeWidth={1.8} />
        返回全部笔记
      </Link>
      <p className="text-sm font-medium text-accent">{metadata.englishCategory}</p>
      <h1 className="mt-3 text-3xl font-semibold leading-tight text-text-primary md:text-5xl">
        {metadata.title}
      </h1>
      <p className="mt-5 text-base leading-7 text-text-secondary md:text-lg md:leading-8">
        {metadata.summary}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label="笔记标签">
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
