export type ContentStatus =
  | "planned"
  | "needs-confirmation"
  | "ready-for-migration";

export type ContentSummary = {
  title: string;
  description: string;
  source?: string;
  status: ContentStatus;
};
