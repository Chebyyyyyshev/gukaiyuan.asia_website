import Link from "next/link";

import { PageHeader } from "@/components/common/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const sections = [
  {
    title: "Projects",
    href: "/projects",
    description: "整理已确认的项目案例，并为未来在线工具、交互演示和可视化功能保留统一入口。",
  },
  {
    title: "Notes",
    href: "/notes",
    description: "承载物联网、前端基础、嵌入式开发等可复用技术知识。",
  },
  {
    title: "About",
    href: "/about",
    description: "放置个人介绍、技术方向、公开联系方式和网站说明；未确认信息不会展示。",
  },
];

export default function Home() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Redesign phase 1"
        title={siteConfig.tagline}
        description="当前阶段只建立新版工程基础、项目规则、视觉变量、主题切换、导航结构与页面骨架。正式内容将在后续迁移阶段逐项核对后进入页面。"
      />

      <section className="grid gap-4 md:grid-cols-3" aria-label="新版栏目入口">
        {sections.map((section) => (
          <Card key={section.href} variant="interactive">
            <Link
              href={section.href}
              className="block rounded-[calc(var(--radius-card)-0.25rem)] focus:outline-none"
            >
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </section>
    </div>
  );
}
