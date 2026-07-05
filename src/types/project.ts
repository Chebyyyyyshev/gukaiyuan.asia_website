import type { ComponentType } from "react";

export type ProjectStatus = "prototype" | "archived" | "ongoing";

export interface ProjectMetadata {
  slug: string;
  title: string;
  englishTitle: string;
  summary: string;
  status: ProjectStatus;
  statusLabel: string;
  tags: string[];
  order: number;
  featured?: boolean;
  coverImage: string;
  coverAlt: string;
  sourcePaths: string[];
  relatedNoteSlugs: string[];
}

export interface ProjectEntry {
  metadata: ProjectMetadata;
  load: () => Promise<{ default: ComponentType }>;
}
