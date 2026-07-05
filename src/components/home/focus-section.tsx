import { Cpu, Radio, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { homeContent } from "@/config/home";

const focusIcons = {
  radio: Radio,
  shield: ShieldCheck,
  cpu: Cpu,
} as const;

export function FocusSection() {
  return (
    <section className="home-section" aria-labelledby="current-focus-title">
      <SectionHeading
        id="current-focus-title"
        title="当前关注"
        eyebrow="Current Focus"
      />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {homeContent.focusItems.map((item) => {
          const Icon = focusIcons[item.icon];

          return (
            <Card key={item.title} className="h-full overflow-hidden p-0">
              <div className="h-px bg-accent/70" aria-hidden="true" />
              <CardHeader className="p-5">
                <div className="mb-2 flex size-12 items-center justify-center rounded-[var(--radius-control)] border border-accent/20 bg-accent/10 text-accent">
                  <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
                </div>
                <p className="text-sm font-medium text-accent">{item.label}</p>
                <CardTitle as="h3">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
