# gukaiyuan.asia website

个人网站新版重构工程，目标是建设“个人主页 + 项目作品集 + 科研档案 + 技术知识库”。

## 当前状态

当前分支为 `redesign`，用于新版 Next.js 重构和 Netlify Branch Deploy。`main` 分支对应正式网站，当前仍保留旧版静态网站。

当前 `redesign` 分支已完成工程基础、项目规则、全局布局、主题切换、导航结构、页面骨架、第二阶段首页正式视觉设计、第三阶段 Notes 内容系统，以及第四阶段 Projects 内容系统。旧站内容已完整归档到 `legacy-site/`，作为后续迁移的只读来源。

首页已使用已确认的真实内容：

- 姓名：顾开元 / Kaiyuan Gu。
- 身份描述：通信工程方向学生。
- 关注方向：无线通信、物理层安全、信号处理、嵌入式系统、物联网。
- 真实项目：智能家居 IoT 系统。
- 项目截图：从 `legacy-site/pictures/ui-interface.png` 复制到 `public/images/projects/smart-home-interface.png`。

当前已迁移 7 篇确认的 Notes 正文，并建立本地 MDX 管线、Notes registry、索引页、详情页、代码高亮、代码复制、目录、上一篇/下一篇、相关文章和旧路径重定向。Projects 已建立 registry、索引页和智能家居 IoT 系统详情页。Blog 正文、Research 详情、搜索、评论、联系表单后端、数据库或管理后台仍未实现。

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Server Components 优先
- 本地 MDX：`@next/mdx`
- 构建期代码高亮：`rehype-pretty-code` + `shiki`
- TypeScript Notes registry
- TypeScript Projects registry
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
    home/
    layout/
    mdx/
    notes/
    projects/
    ui/
  config/
  content/
  lib/
  types/
docs/
legacy-site/
public/
```

## Notes 内容系统

Notes 正文位于 `src/content/notes/`，内容索引位于 `src/lib/content/notes.ts`，类型定义位于 `src/types/note.ts`。当前公开的 Notes 路由包括：

- `/notes`
- `/notes/web/javascript-async-programming`
- `/notes/web/css-layout-and-animation`
- `/notes/web/html5-semantics-and-seo`
- `/notes/iot/fundamentals`
- `/notes/iot/communication-protocols`
- `/notes/embedded/development-boards`
- `/notes/iot/data-acquisition-and-gateway`

旧站 `blogs.html`、三篇 `md/article*.md`、物联网专题和网关代码文档的相关路径已在 `next.config.ts` 中配置永久重定向。当前阶段未迁移智能家居项目章节到 Notes，相关内容保留给 Projects 阶段。

## Projects 内容系统

Projects 正文位于 `src/content/projects/`，内容索引位于 `src/lib/content/projects.ts`，类型定义位于 `src/types/project.ts`。当前只有一个真实项目：

- `/projects`
- `/projects/smart-home-iot`

智能家居 IoT 系统项目来自旧站物联网专题第四章和网关代码文档。项目页只整理可核查的系统关系、项目截图、实现概述、局限和后续整理方向；不声明当前在线运行，不创建虚构项目，不重复大段 Notes 内容。

## legacy-site

`legacy-site/` 保存旧版 HTML/CSS/JavaScript/Markdown/图片内容。它是后续迁移与核对的只读来源，不应在新版开发中直接改写旧站正文。

## Netlify 部署关系

- `main`：正式网站分支，当前仍是旧版静态站。
- `redesign`：新版开发分支，对应 Netlify Branch Deploy。
- 当前 Netlify 项目最初为纯 HTML 静态站创建，架构变为 Next.js 后需要明确构建配置。
- 当前 Netlify Runtime 已设为 Next.js。
- `redesign` Branch Deploy 的构建命令为 `npm run build`，发布目录为 `.next`。
- 根目录 `netlify.toml` 同步声明 `npm run build` 和 `.next`，确保文件配置与 Netlify 当前 Branch Deploy 设置一致。
- 该配置当前只存在于 `redesign` 分支，不影响 `main` 的旧站部署。
- 未来新版合并到 `main` 后，正式 Next.js 站点继续使用同一配置。
- 不安装 `@netlify/plugin-nextjs`，不配置静态导出，不创建不必要的 Functions 或 redirects。

## 规则文档

项目规则见 `AGENTS.md`。详细规划与迁移依据见 `docs/`。
