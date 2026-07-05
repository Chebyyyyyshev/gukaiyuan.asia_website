import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { homeContent } from "@/config/home";

export function AboutCta() {
  const { aboutCta } = homeContent;

  return (
    <section className="home-section pb-0" aria-labelledby="about-cta-title">
      <div className="rounded-[var(--radius-card)] border border-border bg-elevated p-6 shadow-[var(--shadow-soft)] md:flex md:items-center md:justify-between md:gap-10 md:p-8">
        <div className="max-w-3xl">
          <h2
            id="about-cta-title"
            className="text-2xl font-semibold leading-tight md:text-4xl"
          >
            {aboutCta.title.map((line) => (
              <span key={line} className="md:block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
            {aboutCta.description}
          </p>
        </div>
        <Link
          href={aboutCta.action.href}
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-control)] border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors duration-200 hover:border-accent hover:bg-elevated focus-visible:outline-accent md:mt-0"
        >
          {aboutCta.action.label}
          <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
        </Link>
      </div>
    </section>
  );
}
