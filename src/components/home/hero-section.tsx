import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { homeContent } from "@/config/home";
import { cn } from "@/lib/cn";

import { SignalVisual } from "./signal-visual";

const actionStyles = [
  "border-accent bg-accent text-white hover:bg-accent-strong",
  "border-border bg-surface text-text-primary hover:border-accent hover:bg-elevated",
];

export function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="home-section pt-4 md:pt-8" aria-labelledby="home-hero-title">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-12">
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase text-accent">{hero.eyebrow}</p>
          <p className="mt-6 text-lg font-semibold text-text-primary">
            {hero.name.zh}
            <span className="ml-3 text-base font-medium text-text-secondary">
              {hero.name.en}
            </span>
          </p>
          <h1
            id="home-hero-title"
            className="mt-5 text-[2.5rem] font-semibold leading-[1.04] text-text-primary text-balance sm:text-5xl lg:text-6xl 2xl:text-[5rem]"
          >
            {hero.title.map((line, index) => (
              <span key={line} className="md:block">
                {line}
                {index === 0 ? <span className="md:hidden"> </span> : null}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {hero.actions.map((action, index) => (
              <Link
                key={action.href}
                href={action.href}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-control)] border px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-accent",
                  actionStyles[index],
                )}
              >
                {action.label}
                <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
              </Link>
            ))}
          </div>
          <div className="mt-8 border-l-2 border-accent pl-4">
            <p className="text-xs font-medium uppercase text-accent">
              {hero.focusLabel}
            </p>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              {hero.focusText}
            </p>
          </div>
        </div>

        <SignalVisual />
      </div>
    </section>
  );
}
