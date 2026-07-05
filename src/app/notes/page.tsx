import { PageHeader } from "@/components/common/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const noteGroups = [
  {
    title: "前端基础",
    description: "JavaScript 异步编程、CSS 布局与动效、HTML5 语义化与 SEO。",
  },
  {
    title: "物联网基础",
    description: "物联网基础概念、通信协议、嵌入式与开发板内容。",
  },
  {
    title: "数据采集说明",
    description: "传感器数据采集流程和网关代码文档的交叉引用将在后续阶段整理。",
  },
];

export default function NotesPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Notes"
        title="技术知识库骨架"
        description="Notes 用于长期可复用的技术笔记。本阶段先确定分类边界，不迁移正文。"
      />
      <section className="grid gap-4 md:grid-cols-3" aria-label="笔记分类">
        {noteGroups.map((group) => (
          <Card key={group.title}>
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
              <CardDescription>{group.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  );
}
