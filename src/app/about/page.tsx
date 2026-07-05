import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/common/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="About"
        title="关于页面骨架"
        description="About 将承载个人介绍、技术方向、联系方式、GitHub 和网站说明。当前未提供真实联系方式，因此页面不展示邮箱、微信或社交账号。"
      />
      <section className="grid gap-4 md:grid-cols-2" aria-label="关于页面规划">
        <Card>
          <CardHeader>
            <CardTitle>个人介绍</CardTitle>
            <CardDescription>
              旧站仅包含泛化简介，后续需要在人工确认后整理为正式介绍。
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>网站说明</CardTitle>
            <CardDescription>
              新版网站定位为个人主页、项目作品集、科研档案和技术知识库。
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
      <EmptyState
        title="联系方式待确认"
        description="旧站联系方式为占位内容。本阶段不显示虚假邮箱、微信、GitHub 或其他联系渠道。"
      />
    </div>
  );
}
