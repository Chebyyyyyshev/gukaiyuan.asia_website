# Content Model

本文档记录新版内容模型。第三阶段已实现 Notes 的本地 MDX 内容系统；第四阶段已实现 Projects 的本地 MDX 内容系统。Blog、Research 仍只保留模型规划，不迁移正文。

## Project

- title
- slug
- englishTitle
- summary
- status
- statusLabel
- tags
- order
- featured
- coverImage
- coverAlt
- sourcePaths
- relatedNoteSlugs

已实现位置：

- 正文：`src/content/projects/smart-home-iot.mdx`
- registry：`src/lib/content/projects.ts`
- 类型：`src/types/project.ts`
- 详情路由：`src/app/projects/[slug]/page.tsx`

当前 Project 不使用虚构日期、完成百分比、访问量、仓库链接、在线 Demo、团队信息或角色信息。`sourcePaths` 只用于开发溯源，不在公开页面展示完整本地路径。

已迁移项目源：

- `legacy-site/notes/iot/index.html#chapter4-1` -> `/projects/smart-home-iot`
- `legacy-site/notes/iot/index.html#chapter4-2` -> `/projects/smart-home-iot`
- `legacy-site/notes/iot/index.html#chapter4-3` -> `/projects/smart-home-iot`
- `legacy-site/notes/iot/index.html#chapter4-4` -> `/projects/smart-home-iot`
- `legacy-site/notes/iot/code_gateway.md` -> 项目实现概述与 Notes 交叉链接
- `legacy-site/pictures/ui-interface.png` -> `public/images/projects/smart-home-interface.png`

Projects MDX 支持：

- 统一正文排版。
- 项目截图组件。
- 系统组成事实卡片。
- 系统流程图。
- 相关 Notes 卡片。
- 自动标题 slug、标题锚点和文章目录。

## Note

- title
- slug
- summary
- category
- categoryLabel
- englishCategory
- tags
- order
- sourcePaths
- featured

已实现位置：

- 正文：`src/content/notes/*.mdx`
- registry：`src/lib/content/notes.ts`
- 类型：`src/types/note.ts`
- 详情路由：`src/app/notes/[...slug]/page.tsx`

当前 Notes 不使用虚构日期、阅读量、阅读时长或作者信息。`sourcePaths` 只用于开发溯源，不在公开页面展示完整本地路径。

已迁移 Notes 来源：

- `legacy-site/md/article1.md` -> `/notes/web/javascript-async-programming`
- `legacy-site/md/article2.md` -> `/notes/web/css-layout-and-animation`
- `legacy-site/md/article3.md` -> `/notes/web/html5-semantics-and-seo`
- `legacy-site/notes/iot/index.html` 的 `chapter1-1`、`chapter1-2` -> `/notes/iot/fundamentals`
- `legacy-site/notes/iot/index.html` 的 `chapter2-1`、`chapter2-2` -> `/notes/iot/communication-protocols`
- `legacy-site/notes/iot/index.html` 的 `chapter3-1` -> `/notes/embedded/development-boards`
- `legacy-site/notes/iot/index.html` 的 `chapter3-2` 和 `legacy-site/notes/iot/code_gateway.md` -> `/notes/iot/data-acquisition-and-gateway`

Notes MDX 支持：

- 统一正文排版。
- 构建期代码高亮：`rehype-pretty-code` + `shiki`。
- 代码复制按钮。
- `Figure`、`Callout`、内部/外部链接组件。
- 自动标题 slug 和标题锚点。
- 文章目录、上一篇/下一篇、相关文章。

## Blog

- title
- slug
- summary
- publishedAt
- updatedAt
- tags
- cover
- draft

Blog 用于叙事型内容、复盘和观点文章。当前旧站三篇前端文章更偏 Notes，是否改写为 Blog 需要后续确认。

## Research

- title
- slug
- type
- date
- authors
- venueOrStatus
- abstract
- links
- tags

Research 必须基于真实研究资料。当前不创建具体研究条目。

## About

- displayName
- bio
- focusAreas
- contacts
- socialLinks

未提供的个人信息不得用占位符替代展示。
