# Implementation Roadmap

## Phase 1: 工程基础与页面骨架

- 归档旧站到 `legacy-site/`。
- 初始化 Next.js App Router、TypeScript、Tailwind CSS 和 ESLint。
- 增加 Node 版本文件 `.nvmrc`。
- 建立项目规则 `AGENTS.md`。
- 建立规划文档。
- 建立全局布局、导航、主题、基础组件和六个路由。
- 完成 lint、typecheck、build、check 和本地路由检查。

## Phase 2: 内容源与迁移管线

- 设计 Markdown 或结构化内容目录。
- 建立 Projects、Notes、Blog、Research 的内容读取方式。
- 迁移旧站有效内容，不改写事实。
- 为旧路径制定可执行重定向。

## Phase 3: 页面深化

- 完成 Home 首页内容。
- 完成 Projects 列表和智能家居 IoT 项目详情页。
- 完成 Notes 索引和详情页。
- 完成 About 页面。
- Research 和 Blog 只在真实内容准备好后完善。

## Phase 4: SEO 与质量检查

- 增加 sitemap、robots、canonical、Open Graph。
- 增加链接检查和页面 smoke test。
- 检查移动端、深浅主题、键盘导航和可访问性。

## Phase 5: 发布准备

- 在 Netlify Branch Deploy 验证。
- 人工核对旧站路径和内容迁移。
- 确认生产切换计划。
