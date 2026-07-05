import type { ReactNode } from "react";

import { TableOfContents } from "@/components/notes/table-of-contents";

type ProjectLayoutProps = {
  children: ReactNode;
};

export function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <div className="grid gap-12 xl:grid-cols-[minmax(0,var(--project-article-width))_260px] xl:items-start">
      <article data-note-body className="mdx-content project-content min-w-0">
        {children}
      </article>
      <TableOfContents />
    </div>
  );
}
