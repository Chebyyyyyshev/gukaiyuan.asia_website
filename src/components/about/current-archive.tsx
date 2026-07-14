import { ArrowRight } from "lucide-react";
import Link from "next/link";

type CurrentArchiveProps = {
  projectCount: number;
  noteCount: number;
};

export function CurrentArchive({
  projectCount,
  noteCount,
}: CurrentArchiveProps) {
  const archiveRows = [
    {
      label: "Projects",
      value: `${projectCount} 个已整理项目`,
      href: "/projects",
    },
    {
      label: "Notes",
      value: `${noteCount} 篇技术笔记`,
      href: "/notes",
    },
  ] as const;

  return (
    <section aria-labelledby="current-archive-title">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase text-accent">CURRENT ARCHIVE</p>
        <h2
          id="current-archive-title"
          className="mt-2 text-2xl font-semibold leading-tight text-text-primary md:text-3xl"
        >
          当前档案
        </h2>
        <p className="mt-3 text-base leading-7 text-text-secondary">
          数量直接来自当前公开内容索引，不包含空栏目或占位条目。
        </p>
      </div>

      <div className="mt-6 border-y border-border">
        {archiveRows.map((row) => (
          <Link
            key={row.href}
            href={row.href}
            className="group flex min-h-16 items-center justify-between gap-4 border-b border-border px-1 py-4 transition-colors duration-200 last:border-b-0 hover:text-accent focus-visible:outline-accent sm:px-3"
          >
            <span className="font-medium text-text-primary">{row.label}</span>
            <span className="flex min-w-0 items-center justify-end gap-3 text-right text-[15px] text-text-secondary">
              {row.value}
              <ArrowRight
                aria-hidden="true"
                className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                size={18}
                strokeWidth={1.8}
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
