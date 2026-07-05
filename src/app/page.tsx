import type { Metadata } from "next";

import { AboutCta } from "@/components/home/about-cta";
import { FeaturedProject } from "@/components/home/featured-project";
import { FocusSection } from "@/components/home/focus-section";
import { HeroSection } from "@/components/home/hero-section";
import { KnowledgeSection } from "@/components/home/knowledge-section";

export const metadata: Metadata = {
  title: "顾开元 | 通信工程、项目与技术笔记",
  description:
    "顾开元的个人网站，记录无线通信、物理层安全、嵌入式系统、物联网项目与技术学习笔记。",
  openGraph: {
    title: "顾开元 | 通信工程、项目与技术笔记",
    description:
      "顾开元的个人网站，记录无线通信、物理层安全、嵌入式系统、物联网项目与技术学习笔记。",
  },
  twitter: {
    title: "顾开元 | 通信工程、项目与技术笔记",
    description:
      "顾开元的个人网站，记录无线通信、物理层安全、嵌入式系统、物联网项目与技术学习笔记。",
  },
};

export default function Home() {
  return (
    <div className="home-stack">
      <HeroSection />
      <FocusSection />
      <FeaturedProject />
      <KnowledgeSection />
      <AboutCta />
    </div>
  );
}
