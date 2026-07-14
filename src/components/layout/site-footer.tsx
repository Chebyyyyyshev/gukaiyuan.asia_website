import { ExternalLink, Mail } from "lucide-react";
import Link from "next/link";

import { footerNavigationItems } from "@/config/navigation";
import { profileConfig, siteConfig } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background text-[14px] text-text-secondary">
      <div className="mx-auto grid w-full max-w-[var(--content-width)] gap-7 px-4 py-9 md:grid-cols-[minmax(0,1fr)_auto] md:px-6">
        <div className="min-w-0">
          <p className="font-semibold text-text-primary">
            {profileConfig.name}
            <span className="ml-2 font-medium text-text-secondary">
              / {profileConfig.englishName}
            </span>
          </p>
          <p className="mt-2 max-w-2xl leading-6">
            {profileConfig.shortBio}
          </p>
          <p className="mt-3 text-[13px] leading-5 text-text-secondary">
            © {year} {profileConfig.name} · {siteConfig.domain}
          </p>
        </div>

        <div className="grid min-w-0 gap-4 md:justify-items-end">
          <nav
            className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end"
            aria-label="页脚导航"
          >
            {footerNavigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm transition-colors duration-200 hover:text-text-primary focus-visible:outline-accent"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div
            role="group"
            className="flex min-w-0 flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:gap-x-4 md:justify-end"
            aria-label="公开联系方式"
          >
            {profileConfig.email ? (
              <a
                href={`mailto:${profileConfig.email}`}
                className="inline-flex max-w-full items-center gap-2 rounded-sm transition-colors duration-200 hover:text-text-primary focus-visible:outline-accent"
              >
                <Mail
                  aria-hidden="true"
                  className="shrink-0"
                  size={15}
                  strokeWidth={1.8}
                />
                <span className="[overflow-wrap:anywhere]">
                  {profileConfig.email}
                </span>
              </a>
            ) : null}
            {profileConfig.githubUrl ? (
              <a
                href={profileConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm transition-colors duration-200 hover:text-text-primary focus-visible:outline-accent"
                aria-label={`${profileConfig.name} 的 GitHub 主页（在新窗口打开）`}
              >
                <span>GitHub</span>
                <ExternalLink aria-hidden="true" size={13} strokeWidth={1.8} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
