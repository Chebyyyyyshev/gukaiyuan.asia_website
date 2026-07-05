type ProjectFact = {
  title: string;
  description: string;
};

type ProjectFactListProps = {
  items: ProjectFact[];
};

export function ProjectFactList({ items }: ProjectFactListProps) {
  return (
    <div className="project-fact-list" aria-label="项目系统组成">
      {items.map((item) => (
        <article key={item.title} className="project-fact-card">
          <p className="project-fact-title">{item.title}</p>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
