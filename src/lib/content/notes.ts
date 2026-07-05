import type { NoteCategory, NoteCategoryGroup, NoteEntry } from "@/types/note";

export const noteCategoryGroups: NoteCategoryGroup[] = [
  {
    id: "web",
    anchor: "web",
    title: "前端基础",
    englishTitle: "Web Fundamentals",
    description: "JavaScript、CSS 和 HTML 语义化相关的基础知识条目。",
  },
  {
    id: "iot",
    anchor: "iot",
    title: "物联网基础",
    englishTitle: "IoT Foundations",
    description: "物联网概念、架构和通信协议相关学习记录。",
  },
  {
    id: "embedded",
    anchor: "embedded",
    title: "嵌入式系统",
    englishTitle: "Embedded Systems",
    description: "开发板选型与嵌入式系统实践相关笔记。",
  },
  {
    id: "data-gateway",
    anchor: "data-gateway",
    title: "数据采集与网关",
    englishTitle: "Data & Gateway",
    description: "传感器采集、串口通信和网关代码相关说明。",
  },
];

export const noteEntries: NoteEntry[] = [
  {
    metadata: {
      slug: "web/javascript-async-programming",
      title: "JavaScript 异步编程",
      summary: "整理回调、Promise、async/await 与常见异步流程陷阱。",
      category: "web",
      categoryLabel: "前端基础",
      englishCategory: "Web Fundamentals",
      tags: ["JavaScript", "Promise", "async/await"],
      order: 10,
      sourcePaths: ["legacy-site/md/article1.md"],
      featured: true,
    },
    load: () => import("@/content/notes/javascript-async-programming.mdx"),
  },
  {
    metadata: {
      slug: "web/css-layout-and-animation",
      title: "CSS 布局与动效",
      summary: "记录 Grid、Flex、响应式策略和动效使用边界。",
      category: "web",
      categoryLabel: "前端基础",
      englishCategory: "Web Fundamentals",
      tags: ["CSS", "Grid", "Flex", "Responsive"],
      order: 20,
      sourcePaths: ["legacy-site/md/article2.md"],
    },
    load: () => import("@/content/notes/css-layout-and-animation.mdx"),
  },
  {
    metadata: {
      slug: "web/html5-semantics-and-seo",
      title: "HTML5 语义化与 SEO",
      summary: "梳理页面语义结构、基础 SEO 和可访问性相关基线。",
      category: "web",
      categoryLabel: "前端基础",
      englishCategory: "Web Fundamentals",
      tags: ["HTML5", "SEO", "Accessibility"],
      order: 30,
      sourcePaths: ["legacy-site/md/article3.md"],
    },
    load: () => import("@/content/notes/html5-semantics-and-seo.mdx"),
  },
  {
    metadata: {
      slug: "iot/fundamentals",
      title: "物联网基础",
      summary: "整理物联网定义、核心特征、三层架构和专题背景。",
      category: "iot",
      categoryLabel: "物联网基础",
      englishCategory: "IoT Foundations",
      tags: ["IoT", "Architecture", "Sensors"],
      order: 40,
      sourcePaths: [
        "legacy-site/notes/iot/index.html#chapter1-1",
        "legacy-site/notes/iot/index.html#chapter1-2",
      ],
      featured: true,
    },
    load: () => import("@/content/notes/iot-fundamentals.mdx"),
  },
  {
    metadata: {
      slug: "iot/communication-protocols",
      title: "物联网通信协议",
      summary: "整理旧站中短距离通信和广域网通信协议的适用场景。",
      category: "iot",
      categoryLabel: "物联网基础",
      englishCategory: "IoT Foundations",
      tags: ["IoT", "Protocol", "Network"],
      order: 50,
      sourcePaths: [
        "legacy-site/notes/iot/index.html#chapter2-1",
        "legacy-site/notes/iot/index.html#chapter2-2",
      ],
    },
    load: () => import("@/content/notes/iot-communication-protocols.mdx"),
  },
  {
    metadata: {
      slug: "embedded/development-boards",
      title: "嵌入式开发板",
      summary: "整理 STM32 与 ESP32 在旧站中的开发板选型说明。",
      category: "embedded",
      categoryLabel: "嵌入式系统",
      englishCategory: "Embedded Systems",
      tags: ["Embedded", "STM32", "ESP32"],
      order: 60,
      sourcePaths: ["legacy-site/notes/iot/index.html#chapter3-1"],
    },
    load: () => import("@/content/notes/embedded-development-boards.mdx"),
  },
  {
    metadata: {
      slug: "iot/data-acquisition-and-gateway",
      title: "数据采集与网关",
      summary: "说明传感器采集、串口通信、网关转发和旧站代码片段之间的关系。",
      category: "data-gateway",
      categoryLabel: "数据采集与网关",
      englishCategory: "Data & Gateway",
      tags: ["Sensor", "UART", "Gateway", "C"],
      order: 70,
      sourcePaths: [
        "legacy-site/notes/iot/index.html#chapter3-2",
        "legacy-site/notes/iot/code_gateway.md",
      ],
      featured: true,
    },
    load: () => import("@/content/notes/data-acquisition-and-gateway.mdx"),
  },
];

export function getAllNotes(): NoteEntry[] {
  return [...noteEntries].sort((a, b) => a.metadata.order - b.metadata.order);
}

export function getNoteBySlug(slug: string | string[]): NoteEntry | undefined {
  const normalizedSlug = Array.isArray(slug) ? slug.join("/") : slug;
  return noteEntries.find((entry) => entry.metadata.slug === normalizedSlug);
}

export function getNotesByCategory(category: NoteCategory): NoteEntry[] {
  return getAllNotes().filter((entry) => entry.metadata.category === category);
}

export function getAdjacentNotes(note: NoteEntry): {
  previous?: NoteEntry;
  next?: NoteEntry;
} {
  const notes = getAllNotes();
  const index = notes.findIndex(
    (entry) => entry.metadata.slug === note.metadata.slug,
  );

  return {
    previous: index > 0 ? notes[index - 1] : undefined,
    next: index >= 0 && index < notes.length - 1 ? notes[index + 1] : undefined,
  };
}

export function getRelatedNotes(note: NoteEntry): NoteEntry[] {
  return getAllNotes()
    .filter(
      (entry) =>
        entry.metadata.slug !== note.metadata.slug &&
        entry.metadata.category === note.metadata.category,
    )
    .slice(0, 2);
}

export function getNoteStaticParams(): Array<{ slug: string[] }> {
  return getAllNotes().map((entry) => ({
    slug: entry.metadata.slug.split("/"),
  }));
}
