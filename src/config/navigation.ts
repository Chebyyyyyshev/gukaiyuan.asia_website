export type NavItem = {
  title: string;
  href: string;
  description: string;
  showInPrimaryNav: boolean;
};

export const navigationItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    description: "新版首页骨架",
    showInPrimaryNav: true,
  },
  {
    title: "Projects",
    href: "/projects",
    description: "项目作品集",
    showInPrimaryNav: true,
  },
  {
    title: "Research",
    href: "/research",
    description: "科研档案，等待真实内容补充",
    showInPrimaryNav: false,
  },
  {
    title: "Notes",
    href: "/notes",
    description: "技术知识库",
    showInPrimaryNav: true,
  },
  {
    title: "Blog",
    href: "/blog",
    description: "叙事型文章与阶段总结，等待内容迁移",
    showInPrimaryNav: false,
  },
  {
    title: "About",
    href: "/about",
    description: "个人介绍与公开联系方式",
    showInPrimaryNav: true,
  },
];

export const primaryNavigationItems = navigationItems.filter(
  (item) => item.showInPrimaryNav,
);
