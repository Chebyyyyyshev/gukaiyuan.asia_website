import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ProjectNavigation() {
  return (
    <nav className="max-w-[var(--project-article-width)]" aria-label="项目导航">
      <Link
        href="/projects"
        className="inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-control)] border border-border bg-surface px-4 py-2 text-sm font-semibold text-text-primary transition-colors hover:border-accent hover:bg-elevated focus-visible:outline-accent"
      >
        <ArrowLeft aria-hidden="true" size={17} strokeWidth={1.8} />
        返回项目列表
      </Link>
    </nav>
  );
}
