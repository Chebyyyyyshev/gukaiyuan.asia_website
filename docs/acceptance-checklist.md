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
- [ ] Research 和 Blog 在无真实内容前不显示在主导航。

## 交互与可访问性

- [ ] Header、nav、main、footer 层级正确。
- [ ] Skip to content 可用。
- [ ] 主题切换可用。
- [ ] 移动导航可用。
- [ ] 键盘可操作导航和主题切换。
- [ ] focus-visible 清晰。
- [ ] 320px 宽度无横向滚动。
- [ ] 支持 `prefers-reduced-motion`。

## 验证命令

- [ ] `npm install`
- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run build`
- [ ] `npm run check`
- [ ] `git diff --check`
- [ ] `git status --short`
