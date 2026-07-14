import { AboutCta } from "@/components/home/about-cta";
import { FeaturedProject } from "@/components/home/featured-project";
import { FocusSection } from "@/components/home/focus-section";
import { HeroSection } from "@/components/home/hero-section";
import { KnowledgeSection } from "@/components/home/knowledge-section";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

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
