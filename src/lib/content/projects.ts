import { getNoteBySlug } from "@/lib/content/notes";
import type { NoteEntry } from "@/types/note";
import type { ProjectEntry } from "@/types/project";

export const projectEntries: ProjectEntry[] = [
  {
    metadata: {
      slug: "smart-home-iot",
      title: "智能家居 IoT 系统",
      englishTitle: "Smart Home IoT System",
      summary:
        "围绕传感器数据采集、串口通信、网关传输与客户端展示构建的物联网系统实践。",
      status: "prototype",
      statusLabel: "项目原型",
      tags: ["IoT", "Embedded", "Data Acquisition", "Gateway"],
      order: 10,
      featured: true,
      coverImage: "/images/projects/smart-home-interface.png",
      coverAlt: "智能家居客户端原型界面截图",
      sourcePaths: [
        "legacy-site/notes/iot/index.html#chapter4-1",
        "legacy-site/notes/iot/index.html#chapter4-2",
        "legacy-site/notes/iot/index.html#chapter4-3",
        "legacy-site/notes/iot/index.html#chapter4-4",
        "legacy-site/notes/iot/code_gateway.md",
        "legacy-site/pictures/ui-interface.png",
      ],
      relatedNoteSlugs: [
        "iot/data-acquisition-and-gateway",
        "iot/communication-protocols",
        "embedded/development-boards",
      ],
    },
    load: () => import("@/content/projects/smart-home-iot.mdx"),
  },
];

export function getAllProjects(): ProjectEntry[] {
  return [...projectEntries].sort((a, b) => a.metadata.order - b.metadata.order);
}

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projectEntries.find((entry) => entry.metadata.slug === slug);
}

export function getFeaturedProjects(): ProjectEntry[] {
  return getAllProjects().filter((entry) => entry.metadata.featured);
}

export function getProjectStaticParams(): Array<{ slug: string }> {
  return getAllProjects().map((entry) => ({
    slug: entry.metadata.slug,
  }));
}

export function getRelatedNotesForProject(project: ProjectEntry): NoteEntry[] {
  return project.metadata.relatedNoteSlugs
    .map((slug) => getNoteBySlug(slug))
    .filter((note): note is NoteEntry => Boolean(note));
}
