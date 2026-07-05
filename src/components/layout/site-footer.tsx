import Link from "next/link";

import { navigationItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-[var(--content-width)] gap-4 px-4 py-8 text-sm text-text-secondary md:grid-cols-[1fr_auto] md:px-6">
        <p>
          {siteConfig.name} is being rebuilt as a personal homepage, portfolio,
          research archive, and technical knowledge base.
        </p>
        <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="页脚导航">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-text-primary">
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
