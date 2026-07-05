# gukaiyuan.asia website

个人网站新版重构工程，目标是建设“个人主页 + 项目作品集 + 科研档案 + 技术知识库”。

## 当前状态

当前分支为 `redesign`，用于新版 Next.js 重构和 Netlify Branch Deploy。`main` 分支对应正式网站，当前仍保留旧版静态网站。

本阶段已建立工程基础、项目规则、规划文档、全局布局、主题切换、导航结构和页面骨架。旧站内容已完整归档到 `legacy-site/`，作为后续迁移的只读来源。

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Server Components 优先
- next-themes
- lucide-react
- npm

## 本地运行

```bash
npm install
npm run dev
```

默认开发地址为 `http://localhost:3000`。如端口被占用，Next.js 会提示使用其他端口。

## npm 命令

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run check
```

`npm run check` 会依次执行 lint、typecheck 和 build。

## 目录结构

```text
src/
  app/
  components/
    common/
    layout/
    ui/
  config/
  lib/
  types/
docs/
legacy-site/
```

## legacy-site

`legacy-site/` 保存旧版 HTML/CSS/JavaScript/Markdown/图片内容。它是后续迁移与核对的只读来源，不应在新版开发中直接改写旧站正文。

## Netlify 部署关系

- `main`：正式网站分支，当前仍是旧版静态站。
- `redesign`：新版开发分支，对应 Netlify Branch Deploy。
- 当前 Netlify 项目最初为纯 HTML 静态站创建，旧的 Netlify UI 构建设置不会在架构变为 Next.js 后可靠自动更新。
- 根目录 `netlify.toml` 明确指定 `npm run build` 和 `.next` 发布目录，用文件配置覆盖 Netlify UI 中可能残留的旧静态站配置。
- 该配置当前只存在于 `redesign` 分支，不影响 `main` 的旧站部署。
- 未来新版合并到 `main` 后，正式 Next.js 站点继续使用同一配置。
- 不安装 `@netlify/plugin-nextjs`，不配置静态导出，不创建不必要的 Functions 或 redirects。

## 规则文档

项目规则见 `AGENTS.md`。详细规划与迁移依据见 `docs/`。
