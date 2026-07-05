import type { ComponentType } from "react";

export type NoteCategory = "web" | "iot" | "embedded" | "data-gateway";

export interface NoteMetadata {
  slug: string;
  title: string;
  summary: string;
  category: NoteCategory;
  categoryLabel: string;
  englishCategory: string;
  tags: string[];
  order: number;
  sourcePaths: string[];
  featured?: boolean;
}

export interface NoteEntry {
  metadata: NoteMetadata;
  load: () => Promise<{
    default: ComponentType;
  }>;
}

export interface NoteCategoryGroup {
  id: NoteCategory;
  anchor: string;
  title: string;
  englishTitle: string;
  description: string;
}
