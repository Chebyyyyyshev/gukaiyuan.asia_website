import { profileConfig } from "@/config/site";
import type { HomeContent } from "@/types/home";

export const homeContent = {
  hero: {
    eyebrow: "COMMUNICATION · RESEARCH · ENGINEERING",
    name: {
      zh: profileConfig.name,
      en: profileConfig.englishName,
    },
    title: ["在通信、算法与系统之间，", "持续构建可验证的成果。"],
    description: `${profileConfig.shortBio}这里记录项目实践、研究过程与长期维护的技术笔记。`,
    actions: [
      {
        label: "查看项目",
        href: "/projects",
      },
      {
        label: "浏览笔记",
        href: "/notes",
      },
    ],
    focusLabel: "CURRENT FOCUS",
    focusText:
      "Wireless Communications · Physical Layer Security · Embedded Systems",
  },
  focusItems: [
    {
      title: "无线通信",
      description:
        "从系统模型、信道特性与性能指标出发，理解复杂通信系统的设计边界。",
      label: "Wireless Communications",
      icon: "radio",
    },
    {
      title: "物理层安全",
      description:
        "关注窃听场景、鲁棒建模与优化算法如何提升无线传输安全性。",
      label: "Physical Layer Security",
      icon: "shield",
    },
    {
      title: "嵌入式与物联网",
      description:
        "围绕传感器、数据采集、通信网关与软硬件协同完成系统实践。",
      label: "Embedded & IoT",
      icon: "cpu",
    },
  ],
  featuredProject: {
    eyebrow: "Featured Project",
    projectSlug: "smart-home-iot",
    description:
      "围绕传感器数据采集、串口通信、网关传输与客户端展示构建的物联网系统实践。",
    systemLine: "传感器采集 · 串口通信 · 网关传输 · 客户端展示",
    actionLabel: "查看项目",
    imageCaption: "智能家居客户端原型界面",
  },
  knowledge: {
    title: "知识库",
    eyebrow: "Knowledge Base",
    description:
      "将课程学习、技术实践与问题解决过程整理为可长期检索的知识条目。",
    categories: [
      {
        title: "前端基础",
        description:
          "JavaScript 异步编程、CSS 布局与动效、HTML5 语义化与 SEO。",
        label: "Web Fundamentals",
        href: "/notes#web",
      },
      {
        title: "物联网基础",
        description:
          "物联网基础概念、通信协议、系统架构与嵌入式开发板内容。",
        label: "IoT Foundations",
        href: "/notes#iot",
      },
      {
        title: "数据采集与网关",
        description: "传感器数据采集、串口通信与网关代码相关说明。",
        label: "Data & Gateway",
        href: "/notes#data-gateway",
      },
    ],
  },
  aboutCta: {
    title: [
      "不仅是一个作品集，",
      "也是一份持续更新的学习与研究档案。",
    ],
    description:
      "网站用于整理项目、研究过程与技术笔记，并记录每一次真实的问题分析与实现过程。",
    action: {
      label: "了解更多",
      href: "/about",
    },
  },
} satisfies HomeContent;
