"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

type CopyCodeButtonProps = {
  code: string;
};

export function CopyCodeButton({ code }: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return undefined;
    }

    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = code;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.inset = "0";
        textarea.style.opacity = "0";
        document.body.append(textarea);
        textarea.select();
        const copiedWithFallback = document.execCommand("copy");
        textarea.remove();

        if (!copiedWithFallback) {
          throw new Error("Copy command failed");
        }
      }
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      className="inline-flex min-h-9 items-center gap-2 rounded-[var(--radius-control)] border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent hover:text-text-primary focus-visible:outline-accent"
      aria-label={copied ? "代码已复制" : "复制代码"}
      onClick={handleCopy}
    >
      {copied ? (
        <Check aria-hidden="true" size={15} strokeWidth={1.8} />
      ) : (
        <Copy aria-hidden="true" size={15} strokeWidth={1.8} />
      )}
      {copied ? "已复制" : "复制"}
    </button>
  );
}
