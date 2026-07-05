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
    <section className="home-section pt-3 md:pt-7" aria-labelledby="home-hero-title">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-14 xl:gap-16">
        <div className="max-w-[760px]">
          <p className="text-sm font-medium uppercase text-accent">{hero.eyebrow}</p>
          <p className="mt-6 text-lg font-semibold text-text-primary">
            {hero.name.zh}
            <span className="ml-3 text-base font-medium text-text-secondary">
              {hero.name.en}
            </span>
          </p>
          <h1
            id="home-hero-title"
            className="mt-5 max-w-[12.8em] text-[clamp(2.55rem,3.45vw,4.15rem)] font-semibold leading-[1.03] text-text-primary text-balance"
          >
            {hero.title.map((line, index) => (
              <span key={line} className="lg:block lg:whitespace-nowrap">
                {line}
                {index === 0 ? <span className="lg:hidden"> </span> : null}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-[640px] text-base leading-7 text-text-secondary md:text-lg md:leading-8">
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
