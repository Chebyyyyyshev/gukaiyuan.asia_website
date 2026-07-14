import { ArrowRight, BookOpenText, FolderKanban } from "lucide-react";
import Link from "next/link";

const publishedAreas = [
  {
    title: "Projects",
    description: "真实项目与系统实践",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Notes",
    description: "技术学习与实现细节",
    href: "/notes",
    icon: BookOpenText,
  },
] as const;

export function ContentOverview() {
  return (
    <section aria-labelledby="content-overview-title">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase text-accent">WHAT I BUILD</p>
        <h2
          id="content-overview-title"
          className="mt-2 text-2xl font-semibold leading-tight text-text-primary md:text-3xl"
        >
          我在这里整理什么
        </h2>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {publishedAreas.map((area) => {
          const Icon = area.icon;

          return (
            <Link
              key={area.href}
              href={area.href}
              className="group flex min-h-40 flex-col justify-between rounded-[var(--radius-card)] border border-border bg-surface p-5 shadow-[var(--shadow-soft)] transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-elevated focus-visible:outline-accent md:p-6"
              aria-label={`查看 ${area.title}：${area.description}`}
            >
              <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
              <div className="mt-8 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-6 text-text-secondary">
                    {area.description}
                  </p>
                </div>
                <ArrowRight
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                  size={19}
                  strokeWidth={1.8}
                />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-5 grid gap-2 border-l-2 border-accent pl-4 text-[15px] leading-7 text-text-secondary">
        <p>
          <span className="font-medium text-text-primary">Research：</span>
          未来有正式内容后再公开。
        </p>
        <p>
          <span className="font-medium text-text-primary">Blog：</span>
          未来有正式文章后再公开。
        </p>
      </div>
    </section>
  );
}
