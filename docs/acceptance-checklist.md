# Acceptance Checklist

## 分支与安全

- [ ] 当前分支为 `redesign`。
- [ ] 未执行 commit、push、merge、pull request 或 deploy。
- [ ] 未修改 Netlify 后台、域名或 DNS。

## 旧站归档

- [ ] `legacy-site/` 存在。
- [ ] 旧站 HTML、CSS、JavaScript、Markdown、图片和代码完整保留。
- [ ] `docs/` 未移入 `legacy-site/`。
- [ ] 未修复旧站 highlight.js 问题。
- [ ] 未删除重复图片。

## 新版工程

- [ ] Next.js App Router 可本地启动。
- [ ] 使用 TypeScript。
- [ ] 使用 Tailwind CSS。
- [ ] 使用 `src/` 目录。
- [ ] 路径别名 `@/*` 可用。
- [ ] 未配置 `output: "export"`。
- [ ] 未安装 Netlify 插件。
- [ ] 未创建 API Route 或后端功能。

## 页面骨架

- [ ] `/` 存在。
- [ ] `/projects` 存在。
- [ ] `/research` 存在。
- [ ] `/notes` 存在。
- [ ] `/blog` 存在。
- [ ] `/about` 存在。
- [ ] 不存在路径显示 404 页面。
- [ ] Research 和 Blog 在无真实内容前不显示在主导航和 Footer。

## 第二阶段首页

- [ ] 首页已替换第一阶段占位内容。
- [ ] 首页文案集中定义在 `src/config/home.ts`。
- [ ] Hero Section 已完成。
- [ ] Signal Visual 使用内联 SVG，且不使用外部图片、Canvas、WebGL 或 3D 库。
- [ ] Current Focus 三张卡片不是链接，不使用 interactive Card。
- [ ] Featured Project 使用真实截图 `public/images/projects/smart-home-interface.png`。
- [ ] Knowledge Base 三张卡片链接到 `/notes`，不虚构分类路由。
- [ ] About CTA 链接到 `/about`，不展示未经确认的联系方式。
- [ ] 首页只有一个 `h1`。
- [ ] 首页 section 使用 `aria-labelledby`。
- [ ] 深浅主题下首页均完整可读。
- [ ] 320px、375px、768px、1440px、1920px 视口无横向滚动。

## 交互与可访问性

- [ ] Header、nav、main、footer 层级正确。
- [ ] Skip to content 可用。
- [ ] 主题切换可用。
- [ ] 移动导航可用。
- [ ] 键盘可操作导航和主题切换。
- [ ] focus-visible 清晰。
- [ ] 320px 宽度无横向滚动。
- [ ] 支持 `prefers-reduced-motion`。
- [ ] 移动导航打开后聚焦第一个链接，Escape 关闭后焦点回到菜单按钮。
- [ ] Theme Toggle 可在深浅主题之间切换。
- [ ] 项目、笔记、关于 CTA 链接可用。

## 验证命令

- [ ] `npm install`
- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run build`
- [ ] `npm run check`
- [ ] `git diff --check`
- [ ] `git status --short`
