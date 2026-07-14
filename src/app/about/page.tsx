import { ContactSection } from "@/components/about/contact-section";
import { ContentOverview } from "@/components/about/content-overview";
import { CurrentArchive } from "@/components/about/current-archive";
import { ProfileSummary } from "@/components/about/profile-summary";
import { SitePrinciples } from "@/components/about/site-principles";
import { PageHeader } from "@/components/common/page-header";
import { PersonJsonLd } from "@/components/seo/person-json-ld";
import { profileConfig } from "@/config/site";
import { getAllNotes } from "@/lib/content/notes";
import { getAllProjects } from "@/lib/content/projects";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "关于我",
  description: `了解${profileConfig.name}的技术方向、项目与知识库，以及公开联系方式。`,
  path: "/about",
});

export default function AboutPage() {
  const projectCount = getAllProjects().length;
  const noteCount = getAllNotes().length;

  return (
    <div className="grid gap-16 md:gap-20">
      <PersonJsonLd />
      <PageHeader
        eyebrow="ABOUT"
        title="关于我"
        description={profileConfig.shortBio}
        className="max-w-4xl"
      />
      <ProfileSummary />
      <ContentOverview />
      <CurrentArchive projectCount={projectCount} noteCount={noteCount} />
      <SitePrinciples />
      <ContactSection />
    </div>
  );
}
