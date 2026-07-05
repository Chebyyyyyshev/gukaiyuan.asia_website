import type { ReactNode } from "react";

import { TableOfContents } from "./table-of-contents";

type NoteLayoutProps = {
  children: ReactNode;
};

export function NoteLayout({ children }: NoteLayoutProps) {
  return (
    <div className="grid gap-12 xl:grid-cols-[minmax(0,var(--article-width))_240px] xl:items-start">
      <article data-note-body className="mdx-content min-w-0">
        {children}
      </article>
      <TableOfContents />
    </div>
  );
}
