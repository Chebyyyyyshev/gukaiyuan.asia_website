import { PageHeader } from "@/components/common/page-header";
import { ProjectCard } from "@/components/projects/project-card";
import { profileConfig } from "@/config/site";
import { getAllProjects } from "@/lib/content/projects";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "项目与实践",
  description: `${profileConfig.name}的项目与工程实践，记录物联网、嵌入式系统、数据采集与通信网关相关实现。`,
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="PROJECTS"
        title="项目与实践"
        description="记录从问题分析、系统设计到实现验证的技术项目与工程实践。"
      />

      <section className="grid gap-5" aria-label="项目列表">
        {projects.map((project) => (
          <ProjectCard key={project.metadata.slug} project={project} />
        ))}
      </section>

      <section
        className="max-w-3xl border-l-2 border-accent pl-4 text-[15px] leading-7 text-text-secondary"
        aria-labelledby="projects-notes-boundary-title"
      >
        <h2 id="projects-notes-boundary-title" className="sr-only">
          Projects 与 Notes 的边界
        </h2>
        <p>
          Projects 记录已经有真实实现痕迹的项目案例；更细的通信、嵌入式与代码说明由 Notes 承接，避免把知识库内容重复包装成项目成果。
        </p>
      </section>
    </div>
  );
}
