import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/blogs.html",
        destination: "/notes",
        permanent: true,
      },
      {
        source: "/md/article1.md",
        destination: "/notes/web/javascript-async-programming",
        permanent: true,
      },
      {
        source: "/md/article2.md",
        destination: "/notes/web/css-layout-and-animation",
        permanent: true,
      },
      {
        source: "/md/article3.md",
        destination: "/notes/web/html5-semantics-and-seo",
        permanent: true,
      },
      {
        source: "/notes/iot/",
        destination: "/notes/iot/fundamentals",
        permanent: true,
      },
      {
        source: "/notes/iot",
        destination: "/notes/iot/fundamentals",
        permanent: true,
      },
      {
        source: "/notes/iot/index.html",
        destination: "/notes/iot/fundamentals",
        permanent: true,
      },
      {
        source: "/notes/iot/code_gateway.html",
        destination: "/notes/iot/data-acquisition-and-gateway",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/about#contact",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      [
        "rehype-autolink-headings",
        {
          behavior: "append",
          properties: {
            className: ["heading-anchor"],
            ariaLabel: "链接到本节",
          },
          content: {
            type: "text",
            value: "#",
          },
        },
      ],
      [
        "rehype-pretty-code",
        {
          theme: {
            light: "github-light",
            dark: "github-dark-dimmed",
          },
          keepBackground: false,
          defaultLang: {
            block: "plaintext",
            inline: "plaintext",
          },
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
