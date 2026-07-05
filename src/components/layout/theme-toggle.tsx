"use client";

import { Monitor, Moon, Sun } from "lucide-react";

import { cn } from "@/lib/cn";

import { useSiteTheme } from "./theme-provider";

const themeCycle = ["system", "light", "dark"] as const;

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme, theme } = useSiteTheme();
  const currentTheme = theme ?? "system";
  const currentIndex = themeCycle.indexOf(
    currentTheme as (typeof themeCycle)[number],
  );
  const nextTheme = themeCycle[(currentIndex + 1) % themeCycle.length];
  const label = `切换主题，当前为${
    currentTheme === "system"
      ? "系统"
      : currentTheme === "dark"
        ? "深色"
        : "浅色"
  }`;

  const Icon =
    currentTheme === "system"
      ? Monitor
      : resolvedTheme === "dark"
        ? Moon
        : Sun;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-[var(--radius-control)] border border-border bg-surface text-text-primary shadow-sm transition-colors duration-200 hover:border-accent focus-visible:outline-accent",
        className,
      )}
      onClick={() => setTheme(nextTheme)}
    >
      <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
    </button>
  );
}
