import Link from "next/link";

import { EmptyState } from "@/components/common/empty-state";

export default function NotFound() {
  return (
    <div className="page-stack">
      <EmptyState
        title="页面不存在"
        description="当前路径没有对应页面。可以返回首页，或通过导航进入 Projects、Notes 和 About。"
      />
      <Link
        href="/"
        className="inline-flex w-fit rounded-[var(--radius-control)] border border-border bg-surface px-4 py-2 text-sm font-medium text-text-primary hover:border-accent"
      >
        返回首页
      </Link>
    </div>
  );
}
