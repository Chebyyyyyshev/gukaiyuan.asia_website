import { profileConfig, siteConfig } from "@/config/site";

export function PersonJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileConfig.name,
    alternateName: profileConfig.englishName,
    url: siteConfig.url,
    description: profileConfig.shortBio,
    ...(profileConfig.githubUrl
      ? { sameAs: [profileConfig.githubUrl] }
      : {}),
    ...(profileConfig.email ? { email: profileConfig.email } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person).replace(/</g, "\\u003c"),
      }}
    />
  );
}
