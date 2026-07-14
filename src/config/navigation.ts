export type NavItem = {
  title: string;
  href: string;
  description: string;
  showInPrimaryNav: boolean;
  showInFooter: boolean;
  includeInSitemap: boolean;
};

export const navigationItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    description: "个人主页",
    showInPrimaryNav: true,
    showInFooter: true,
    includeInSitemap: true,
  },
  {
    title: "Projects",
    href: "/projects",
    description: "项目作品集",
    showInPrimaryNav: true,
    showInFooter: true,
    includeInSitemap: true,
  },
  {
    title: "Research",
    href: "/research",
    description: "科研档案，等待真实内容补充",
    showInPrimaryNav: false,
    showInFooter: false,
    includeInSitemap: false,
  },
  {
    title: "Notes",
    href: "/notes",
    description: "技术知识库",
    showInPrimaryNav: true,
    showInFooter: true,
    includeInSitemap: true,
  },
  {
    title: "Blog",
    href: "/blog",
    description: "叙事型文章与阶段总结，等待内容迁移",
    showInPrimaryNav: false,
    showInFooter: false,
    includeInSitemap: false,
  },
  {
    title: "About",
    href: "/about",
    description: "个人介绍、网站说明与公开联系方式",
    showInPrimaryNav: true,
    showInFooter: true,
    includeInSitemap: true,
  },
];

export const primaryNavigationItems = navigationItems.filter(
  (item) => item.showInPrimaryNav,
);

export const footerNavigationItems = navigationItems.filter(
  (item) => item.showInFooter,
);

export const sitemapNavigationItems = navigationItems.filter(
  (item) => item.includeInSitemap,
);
