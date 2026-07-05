import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { NoteEntry } from "@/types/note";

type ProjectRelatedNotesProps = {
  notes: NoteEntry[];
};

export function ProjectRelatedNotes({ notes }: ProjectRelatedNotesProps) {
  if (notes.length === 0) {
    return null;
  }

  return (
    <section className="project-related-notes" aria-labelledby="project-related-notes-title">
      <h2 id="project-related-notes-title">相关技术笔记</h2>
      <p>
        以下笔记用于承接项目中的通信、嵌入式与数据采集说明，避免在项目案例中重复大段知识库内容。
      </p>
      <div className="project-related-notes-grid">
        {notes.map((note) => (
          <Link
            key={note.metadata.slug}
            href={`/notes/${note.metadata.slug}`}
            className="project-related-note-card"
          >
            <span>{note.metadata.englishCategory}</span>
            <p className="project-related-note-title">{note.metadata.title}</p>
            <p>{note.metadata.summary}</p>
            <strong>
              阅读笔记
              <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
            </strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
