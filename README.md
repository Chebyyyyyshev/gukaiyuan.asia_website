# gukaiyuan.asia website

个人网站新版重构工程，目标是建设“个人主页 + 项目作品集 + 科研档案 + 技术知识库”。

## 当前状态

当前分支为 `redesign`，用于新版 Next.js 重构和 Netlify Branch Deploy。`main` 分支对应正式网站。

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

## 部署关系

- `main`：正式网站分支。
- `redesign`：新版开发分支，对应 Netlify Branch Deploy。
- 当前阶段依赖 Netlify 对现代 Next.js 的自动识别，不创建 `netlify.toml`，不安装 Netlify 插件，不配置 API Route 或 Functions。

## 规则文档

项目规则见 `AGENTS.md`。详细规划与迁移依据见 `docs/`。
