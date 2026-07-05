# Implementation Roadmap

## Phase 1: 工程基础与页面骨架

- 归档旧站到 `legacy-site/`。
- 初始化 Next.js App Router、TypeScript、Tailwind CSS 和 ESLint。
- 增加 Node 版本文件 `.nvmrc`。
- 建立项目规则 `AGENTS.md`。
- 建立规划文档。
- 建立全局布局、导航、主题、基础组件和六个路由。
- 完成 lint、typecheck、build、check 和本地路由检查。

## Phase 2: 首页正式视觉设计

- 完成首页正式文案集中配置：`src/config/home.ts`。
- 新增首页专用组件目录：`src/components/home/`。
- 完成 Hero、Signal Visual、Current Focus、Featured Project、Knowledge Base 和 About CTA。
- 复制真实旧站项目截图：`legacy-site/pictures/ui-interface.png` -> `public/images/projects/smart-home-interface.png`。
- 精修 Header、Footer、Card、PageHeader 和全局视觉变量。
- 保持 Research 和 Blog 暂不显示在主导航与 Footer。
- 不迁移 Notes 正文，不创建项目详情页，不添加后端功能。

## Phase 3: 内容源与迁移管线

- 建立本地 MDX 内容目录：`src/content/notes/`。
- 建立 Notes 类型定义：`src/types/note.ts`。
- 建立 TypeScript Notes registry：`src/lib/content/notes.ts`。
- 完成 Notes 索引页和 7 个静态详情页。
- 使用 `@next/mdx`、`remark-gfm`、`rehype-slug`、`rehype-autolink-headings`、`rehype-pretty-code` 和 `shiki` 建立构建期 MDX 管线。
- 完成统一文章排版、代码高亮、代码复制、标题锚点、文章目录、上一篇/下一篇和相关文章。
- 迁移 7 篇已确认旧站学习笔记，不改写事实。
- 复制 `legacy-site/pictures/sensors_data.png` 到 `public/images/notes/uart-data-structure.png`，仅用于“数据采集与网关”笔记。
- 在 `next.config.ts` 中实现 Notes 相关旧路径永久重定向。
- 更新首页 Knowledge Base 三个入口锚点。
- 更新内容迁移和路由文档。

## Phase 4: 页面深化

- 完成 Projects 列表和智能家居 IoT 项目详情页。
- 完成 About 页面。
- 视真实内容准备情况完善 Blog 正文。
- 视真实研究资料准备情况完善 Research 正文。
- 评估是否需要 Notes 搜索。
- Research 和 Blog 只在真实内容准备好后完善。

## Phase 5: SEO 与质量检查

- 增加 sitemap、robots、canonical、Open Graph。
- 增加链接检查和页面 smoke test。
- 检查移动端、深浅主题、键盘导航和可访问性。

## Phase 6: 发布准备

- 在 Netlify Branch Deploy 验证。
- 人工核对旧站路径和内容迁移。
- 确认生产切换计划。
