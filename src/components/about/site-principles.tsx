const principles = [
  "只展示可核查内容",
  "区分项目、笔记与研究",
  "保留问题分析与实现过程",
  "不用虚假数据填充页面",
] as const;

export function SitePrinciples() {
  return (
    <section aria-labelledby="site-principles-title">
      <p className="text-sm font-medium uppercase text-accent">WEBSITE PRINCIPLES</p>
      <h2
        id="site-principles-title"
        className="mt-2 text-2xl font-semibold leading-tight text-text-primary md:text-3xl"
      >
        网站原则
      </h2>

      <ol className="mt-6 grid border-t border-border md:grid-cols-2">
        {principles.map((principle, index) => (
          <li
            key={principle}
            className="flex min-h-20 items-center gap-4 border-b border-border py-4 md:px-4 md:odd:border-r"
          >
            <span className="font-mono text-xs text-accent" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-base font-medium leading-7 text-text-primary">
              {principle}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
