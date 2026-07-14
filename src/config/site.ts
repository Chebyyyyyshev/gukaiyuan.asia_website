import type { PublicProfile } from "@/types/profile";

export const profileConfig: Readonly<PublicProfile> = {
  name: "顾开元",
  englishName: "Kaiyuan Gu",
  role: "通信工程方向学生",
  shortBio:
    "通信工程方向学生，关注无线通信、物理层安全、信号处理、嵌入式系统与物联网。",
  focusAreas: ["无线通信", "物理层安全", "信号处理", "嵌入式系统", "物联网"],
  email: "hid67728675@petalmail.com",
  githubUrl: "https://github.com/Chebyyyyyshev",
  school: "同济大学",
  location: "上海",
};

export const siteConfig = {
  name: profileConfig.name,
  domain: "gukaiyuan.asia",
  title: `${profileConfig.name} | 通信工程、项目与技术笔记`,
  titleTemplate: `%s | ${profileConfig.name}`,
  url: "https://gukaiyuan.asia",
  locale: "zh_CN",
  tagline: "个人主页 + 项目作品集 + 科研档案 + 技术知识库",
  description: `${profileConfig.name}的个人网站，记录无线通信、物理层安全、嵌入式系统、物联网项目与技术学习笔记。`,
  legacySource: "legacy-site",
} as const;
