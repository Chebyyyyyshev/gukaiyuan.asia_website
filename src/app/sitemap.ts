import type { MetadataRoute } from "next";

import { sitemapNavigationItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getAllNotes } from "@/lib/content/notes";
import { getAllProjects } from "@/lib/content/projects";

function toSitemapEntry(path: string): MetadataRoute.Sitemap[number] {
  return {
    url: new URL(path, siteConfig.url).toString(),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapNavigationItems.flatMap((item) => {
    const entries = [toSitemapEntry(item.href)];

    if (item.href === "/projects") {
      entries.push(
        ...getAllProjects().map((project) =>
          toSitemapEntry(`/projects/${project.metadata.slug}`),
        ),
      );
    }

    if (item.href === "/notes") {
      entries.push(
        ...getAllNotes().map((note) =>
          toSitemapEntry(`/notes/${note.metadata.slug}`),
        ),
      );
    }

    return entries;
  });
}
