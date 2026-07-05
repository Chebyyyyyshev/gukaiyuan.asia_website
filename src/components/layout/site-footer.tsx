import Link from "next/link";

import { footerNavigationItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background text-[14px] text-text-secondary">
      <div className="mx-auto grid w-full max-w-[var(--content-width)] gap-5 px-4 py-9 md:grid-cols-[1fr_auto] md:px-6">
        <div className="grid gap-2">
          <p className="font-medium text-text-primary">{siteConfig.name}</p>
          <p className="max-w-2xl leading-6">
            个人主页、项目作品集、科研档案与技术知识库的新版重构工程。
          </p>
          <p className="text-xs text-text-secondary">
            © {year} {siteConfig.name}
          </p>
        </div>
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
      </div>
    </footer>
  );
}
