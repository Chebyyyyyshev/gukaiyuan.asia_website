import { ExternalLink, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

import { profileConfig } from "@/config/site";

export function ContactSection() {
  const hasWechat = Boolean(
    profileConfig.wechatId || profileConfig.wechatQrImage,
  );

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border pt-10 md:pt-12"
      aria-labelledby="contact-title"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase text-accent">CONTACT</p>
        <h2
          id="contact-title"
          className="mt-2 text-2xl font-semibold leading-tight text-text-primary md:text-3xl"
        >
          联系
        </h2>
        <p className="mt-3 text-base leading-7 text-text-secondary">
          可通过以下公开方式联系我。
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {profileConfig.email ? (
          <a
            href={`mailto:${profileConfig.email}`}
            className="group flex min-w-0 items-start gap-4 rounded-[var(--radius-card)] border border-border bg-surface p-5 shadow-[var(--shadow-soft)] transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-elevated focus-visible:outline-accent md:p-6"
            aria-label={`发送邮件至 ${profileConfig.email}`}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-control)] border border-border bg-elevated text-accent">
              <Mail aria-hidden="true" size={19} strokeWidth={1.8} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium text-text-secondary">
                Email
              </span>
              <span className="mt-2 block [overflow-wrap:anywhere] text-[15px] font-medium leading-6 text-text-primary underline decoration-accent/60 underline-offset-4">
                {profileConfig.email}
              </span>
            </span>
          </a>
        ) : null}

        {profileConfig.githubUrl ? (
          <a
            href={profileConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-w-0 items-start gap-4 rounded-[var(--radius-card)] border border-border bg-surface p-5 shadow-[var(--shadow-soft)] transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-elevated focus-visible:outline-accent md:p-6"
            aria-label={`${profileConfig.name} 的 GitHub 主页（在新窗口打开）`}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-control)] border border-border bg-elevated text-accent">
              <ExternalLink aria-hidden="true" size={19} strokeWidth={1.8} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2 text-sm font-medium text-text-secondary">
                GitHub
                <ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} />
              </span>
              <span className="mt-2 block [overflow-wrap:anywhere] text-[15px] font-medium leading-6 text-text-primary underline decoration-accent/60 underline-offset-4">
                {profileConfig.githubUrl}
              </span>
            </span>
          </a>
        ) : null}

        {hasWechat ? (
          <div className="min-w-0 rounded-[var(--radius-card)] border border-border bg-surface p-5 md:col-span-2 md:p-6">
            <div className="flex items-center gap-3">
              <MessageCircle aria-hidden="true" size={19} strokeWidth={1.8} />
              <h3 className="text-base font-semibold text-text-primary">微信</h3>
            </div>
            {profileConfig.wechatId ? (
              <p className="mt-4 [overflow-wrap:anywhere] text-[15px] leading-7 text-text-secondary">
                {profileConfig.wechatId}
              </p>
            ) : null}
            {profileConfig.wechatQrImage ? (
              <Image
                className="mt-4 h-auto max-w-full rounded-[var(--radius-control)] border border-border"
                src={profileConfig.wechatQrImage}
                alt={`${profileConfig.name} 的微信二维码`}
                width={192}
                height={192}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
