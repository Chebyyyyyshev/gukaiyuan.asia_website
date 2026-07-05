"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const headings: TocItem[] = Array.from(
        document.querySelectorAll<HTMLElement>(
          "[data-note-body] h2[id], [data-note-body] h3[id]",
        ),
      )
        .map((heading) => ({
          id: heading.id,
          text: heading.textContent?.replace("#", "").trim() ?? "",
          level: heading.tagName === "H3" ? 3 : 2,
        }))
        .filter((item): item is TocItem => Boolean(item.id && item.text));

      setItems(headings);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-auto border-l border-border pl-4 text-sm text-text-secondary xl:block"
      aria-label="文章目录"
    >
      <p className="mb-3 text-xs font-semibold uppercase text-text-primary">
        On this page
      </p>
      <ol className="grid gap-2">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-4" : undefined}>
            <a
              href={`#${item.id}`}
              className="rounded-sm underline-offset-4 transition-colors hover:text-text-primary hover:underline focus-visible:outline-accent"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
