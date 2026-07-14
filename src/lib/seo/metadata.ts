import type { Metadata } from "next";

import { profileConfig, siteConfig } from "@/config/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  type?: "website" | "article";
  image?: {
    url: string;
    alt: string;
  };
};

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  image,
}: PageMetadataOptions): Metadata {
  const fullTitle = path === "/" ? siteConfig.title : `${title} | ${profileConfig.name}`;
  const images = image ? [image] : undefined;

  return {
    title: path === "/" ? { absolute: fullTitle } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      url: path,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
      ...(images ? { images } : {}),
    },
  };
}
