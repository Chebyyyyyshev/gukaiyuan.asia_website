import type { ReactElement, ReactNode } from "react";

import { CopyCodeButton } from "./copy-code-button";

function isReactElement(value: ReactNode): value is ReactElement<{ children?: ReactNode }> {
  return typeof value === "object" && value !== null && "props" in value;
}

function extractText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }

  if (isReactElement(node)) {
    return extractText(node.props.children);
  }

  return "";
}

function findLanguage(node: ReactNode): string | undefined {
  if (isReactElement(node)) {
    const props = node.props as {
      "data-language"?: string;
      className?: string;
      children?: ReactNode;
    };

    if (props["data-language"]) {
      return props["data-language"];
    }

    const languageClass = props.className
      ?.split(" ")
      .find((className) => className.startsWith("language-"));

    if (languageClass) {
      return languageClass.replace("language-", "");
    }

    return findLanguage(props.children);
  }

  if (Array.isArray(node)) {
    return node.map(findLanguage).find(Boolean);
  }

  return undefined;
}

export function CodeBlock({ children }: { children: ReactNode }) {
  const code = extractText(children).trimEnd();
  const language = findLanguage(children) ?? "plaintext";

  return (
    <figure className="mdx-code-block">
      <figcaption className="mdx-code-caption">
        <span>{language}</span>
        <CopyCodeButton code={code} />
      </figcaption>
      <pre>{children}</pre>
    </figure>
  );
}
