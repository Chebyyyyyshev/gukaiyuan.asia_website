import type { MDXComponents } from "mdx/types";

import { CodeBlock } from "@/components/mdx/code-block";
import { Callout } from "@/components/mdx/callout";
import { Figure } from "@/components/mdx/figure";
import { MdxLink } from "@/components/mdx/mdx-link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h2>{children}</h2>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
    p: ({ children }) => <p>{children}</p>,
    a: ({ href = "", children, ...props }) => (
      <MdxLink href={href} {...props}>
        {children}
      </MdxLink>
    ),
    ul: ({ children }) => <ul>{children}</ul>,
    ol: ({ children }) => <ol>{children}</ol>,
    li: ({ children }) => <li>{children}</li>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    table: ({ children }) => (
      <div className="mdx-table-scroll">
        <table>{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead>{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    th: ({ children }) => <th>{children}</th>,
    td: ({ children }) => <td>{children}</td>,
    code: ({ children, ...props }) => <code {...props}>{children}</code>,
    pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
    hr: () => <hr />,
    strong: ({ children }) => <strong>{children}</strong>,
    Figure,
    Callout,
    ...components,
  };
}
