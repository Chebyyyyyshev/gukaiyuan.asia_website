"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, useEffect, useRef, useState } from "react";

import { primaryNavigationItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    firstMobileLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex min-h-16 w-full max-w-[var(--content-width)] items-center justify-between gap-3 px-4 md:px-6">
        <Link
          href="/"
          className="rounded-[var(--radius-control)] text-sm font-semibold text-text-primary"
          aria-label={`${siteConfig.name} 首页`}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="主导航">
          {primaryNavigationItems.map((item) => (
            <NavLink key={item.href} item={item} pathname={pathname} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isOpen ? "关闭导航菜单" : "打开导航菜单"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="inline-flex size-10 items-center justify-center rounded-[var(--radius-control)] border border-border bg-surface text-text-primary shadow-sm transition-colors hover:border-accent md:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? (
              <X aria-hidden="true" size={19} strokeWidth={1.8} />
            ) : (
              <Menu aria-hidden="true" size={19} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "border-t border-border bg-background px-4 pb-4 pt-2 md:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <nav className="grid gap-1" aria-label="移动端主导航">
          {primaryNavigationItems.map((item, index) => (
            <NavLink
              key={item.href}
              item={item}
              pathname={pathname}
              ref={index === 0 ? firstMobileLinkRef : undefined}
              onNavigate={() => setIsOpen(false)}
              mobile
            />
          ))}
        </nav>
      </div>
    </header>
  );
}

type NavLinkProps = {
  item: (typeof primaryNavigationItems)[number];
  pathname: string;
  mobile?: boolean;
  onNavigate?: () => void;
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(
  { item, pathname, mobile, onNavigate },
  ref,
) {
  const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

  return (
    <Link
      ref={ref}
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
      className={cn(
        "rounded-[var(--radius-control)] px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-elevated hover:text-text-primary",
        isActive && "bg-elevated text-text-primary",
        mobile && "flex min-h-11 items-center",
      )}
    >
      {item.title}
    </Link>
  );
});
