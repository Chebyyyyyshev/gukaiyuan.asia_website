import type { Metadata } from "next";

import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/common/page-header";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog 栏目尚未公开正式文章。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BlogPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Blog"
        title="文章栏目骨架"
        description="Blog 用于项目复盘、研究阶段总结、技术观点、AI 与开发工具思考、学习经验和独立叙事型文章。"
      />
      <EmptyState
        title="等待文章迁移或新内容"
        description="当前旧站的三篇前端内容更适合优先归入 Notes。Blog 路由已建立，但暂不显示在主导航中。"
      />
    </div>
  );
}
