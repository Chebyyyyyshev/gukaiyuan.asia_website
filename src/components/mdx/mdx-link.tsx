import { ExternalLink } from "lucide-react";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type MdxLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
};

export function MdxLink({ href, children, className, ...props }: MdxLinkProps) {
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href} className={cn("mdx-link", className)} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={cn("mdx-link mdx-external-link", className)}
      {...props}
    >
      {children}
      <ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} />
      <span className="sr-only">（在新窗口打开）</span>
    </a>
  );
}
