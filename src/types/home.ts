export type HomeLink = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  name: {
    zh: string;
    en: string;
  };
  title: string[];
  description: string;
  actions: HomeLink[];
  focusLabel: string;
  focusText: string;
};

export type FocusItem = {
  title: string;
  description: string;
  label: string;
  icon: "radio" | "shield" | "cpu";
};

export type FeaturedProject = {
  eyebrow: string;
  projectSlug: string;
  description: string;
  systemLine: string;
  actionLabel: string;
  imageCaption: string;
};

export type KnowledgeCategory = {
  title: string;
  description: string;
  label: string;
  href: string;
};

export type AboutCtaContent = {
  title: string[];
  description: string;
  action: HomeLink;
};

export type HomeContent = {
  hero: HeroContent;
  focusItems: FocusItem[];
  featuredProject: FeaturedProject;
  knowledge: {
    title: string;
    eyebrow: string;
    description: string;
    categories: KnowledgeCategory[];
  };
  aboutCta: AboutCtaContent;
};
