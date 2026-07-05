import type { Metadata } from "next";

import { PageHeader } from "@/components/common/page-header";
import { NoteCard } from "@/components/notes/note-card";
import {
  getNotesByCategory,
  noteCategoryGroups,
} from "@/lib/content/notes";

export const metadata: Metadata = {
  title: {
    absolute: "技术知识库 | 顾开元",
  },
  description:
    "顾开元整理的技术笔记，涵盖前端基础、物联网、嵌入式系统、数据采集与通信网关。",
  openGraph: {
    title: "技术知识库 | 顾开元",
    description:
      "顾开元整理的技术笔记，涵盖前端基础、物联网、嵌入式系统、数据采集与通信网关。",
    type: "website",
  },
};

export default function NotesPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="NOTES"
        title="技术知识库"
        description="将课程学习、技术实践与问题解决过程整理为可长期检索和复用的知识条目。"
      />

      <div className="grid gap-12">
        {noteCategoryGroups.map((group) => {
          const notes = getNotesByCategory(group.id);

          if (notes.length === 0) {
            return null;
          }

          return (
            <section
              key={group.id}
              id={group.anchor}
              className="scroll-mt-24"
              aria-labelledby={`${group.anchor}-notes-title`}
            >
              <div className="mb-5 max-w-3xl">
                <p className="text-sm font-medium text-accent">
                  {group.englishTitle}
                </p>
                <h2
                  id={`${group.anchor}-notes-title`}
                  className="mt-2 text-2xl font-semibold leading-tight text-text-primary md:text-3xl"
                >
                  {group.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-text-secondary">
                  {group.description}
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {notes.map((note) => (
                  <NoteCard key={note.metadata.slug} note={note} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
