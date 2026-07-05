import Image from "next/image";

type FigureProps = {
  src: string;
  alt: string;
  caption: string;
};

export function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className="mdx-figure">
      <div className="mdx-figure-image">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 760px, 100vw"
          className="object-contain"
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
