import Image from "next/image";

type ProjectFigureProps = {
  src: string;
  alt: string;
  caption: string;
};

export function ProjectFigure({ src, alt, caption }: ProjectFigureProps) {
  return (
    <figure className="project-figure">
      <div className="project-figure-frame">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 820px, 100vw"
          className="object-contain p-3"
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
