import { PageHeader } from "@/components/common/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ContentSummary } from "@/types/content";

const plannedProjects: ContentSummary[] = [
  {
    title: "智能家居 IoT 项目",
    description:
      "来自旧站物联网专题的已确认项目案例。后续阶段将迁移系统设计、项目截图、网关代码、成果与复盘。",
    source: "legacy-site/notes/iot/index.html",
    status: "ready-for-migration",
  },
];

export default function ProjectsPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Projects"
        title="项目作品集骨架"
        description="项目页将统一承载已确认项目、未来在线工具、交互演示与可视化功能。本阶段只建立结构，不补写未核实的项目经历。"
      />
      <section className="grid gap-4 md:grid-cols-2" aria-label="待迁移项目">
        {plannedProjects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <p className="text-sm text-text-secondary">迁移源：{project.source}</p>
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  );
}
