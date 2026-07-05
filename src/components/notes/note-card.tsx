import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import type { NoteEntry } from "@/types/note";

type NoteCardProps = {
  note: NoteEntry;
};

export function NoteCard({ note }: NoteCardProps) {
  const { metadata } = note;

  return (
    <Card as="div" variant="interactive" className="p-0">
      <Link
        href={`/notes/${metadata.slug}`}
        className="group grid h-full gap-5 rounded-[var(--radius-card)] p-5 focus:outline-none"
      >
        <div>
          <p className="text-sm font-medium text-accent">{metadata.englishCategory}</p>
          <h3 className="mt-3 text-xl font-semibold leading-7 text-text-primary">
            {metadata.title}
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-text-secondary">
            {metadata.summary}
          </p>
        </div>
        <ul className="flex flex-wrap gap-2" aria-label={`${metadata.title} 标签`}>
          {metadata.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-elevated px-2.5 py-1 text-xs font-medium text-text-secondary"
            >
              {tag}
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-2 self-end text-sm font-semibold text-text-primary">
          阅读笔记
          <ArrowRight
            aria-hidden="true"
            size={17}
            strokeWidth={1.8}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </Link>
    </Card>
  );
}
