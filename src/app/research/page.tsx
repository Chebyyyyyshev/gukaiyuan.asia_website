import type { Metadata } from "next";

import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/common/page-header";

export const metadata: Metadata = {
  title: "Research",
  description: "Research 栏目尚未公开正式研究内容。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResearchPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Research"
        title="科研档案骨架"
        description="Research 用于真实研究方向、论文、课题、系统模型、算法、仿真结果与研究进展。当前仓库没有可确认的科研内容。"
      />
      <EmptyState
        title="等待真实研究内容"
        description="后续内容需要由用户提供或从可核验资料迁移。本阶段不创建虚构研究方向、论文、机构、成果或数据。"
      />
    </div>
  );
}
