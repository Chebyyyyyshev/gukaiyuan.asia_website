# Redesign Recommendation

目标定位：个人主页 + 项目作品集 + 科研档案 + 技术知识库。

计划栏目：Home、Projects、Research、Notes、Blog、About。未来在线工具、交互演示和可视化功能统一作为 Projects 展示，不设置独立实验室页面。

## 1. 两种方案比较

| 维度 | A. 保留当前技术栈重构 | B. Next.js + TypeScript + 现代组件体系重建 |
| --- | --- | --- |
| 迁移风险 | 低。文件少，直接改 HTML/CSS/JS 即可 | 中。需要建立新工程、路由、内容模型、部署流程 |
| 内容保留 | 可保留，但需要手工复制和维护路径 | 可系统化迁移，适合把 Markdown、图片、项目元数据结构化 |
| 开发难度 | 初期低，后期随着栏目增多快速升高 | 初期中等，需要搭建框架；后期扩展更稳定 |
| 后续维护 | 不利于多栏目、多内容类型、统一布局和元数据 | 更适合长期维护，页面、组件、内容源、SEO 元数据可复用 |
| 响应式设计 | 需要手写并重复维护；当前已有全局样式和大量内联样式混杂 | 可组件化实现统一布局、导航、卡片、文章页、项目页 |
| SEO | 当前依赖手写 meta，子页缺失较多；动态 Markdown 不利于索引 | 可为每个路由生成 title、description、canonical、OG、sitemap |
| 性能 | 静态 HTML 本身轻，但 CDN 运行时依赖和客户端 Markdown 渲染有风险 | 静态生成后性能好；可减少运行时 Markdown 解析和失效 CDN |
| 后端扩展 | 基本没有，需要额外服务 | 如果部署到 Vercel/Node 环境可用 API routes；若静态导出到 GitHub Pages，则仍需外部后端 |
| 部署复杂度 | 最低。继续静态托管即可 | 中。GitHub Pages 需要构建并发布静态导出；Vercel/Cloudflare Pages 更顺滑 |
| 当前问题修复 | 能快速修复 highlight.js 404、图片重复、占位联系信息 | 可在迁移时一起解决依赖、内容结构、路由、SEO、组件一致性 |
| 与目标匹配度 | 适合小型静态名片站，不适合长期知识库和作品集扩展 | 更匹配“作品集 + 科研档案 + 技术知识库”的长期结构 |

## 2. 明确推荐

推荐选择 B：使用 Next.js、TypeScript 和现代组件体系重新搭建。

推荐依据：

- 当前内容量小，迁移成本可控：5 个 HTML 页面、4 个 Markdown 内容文件、2 个唯一图片、1 个明确项目案例。
- 新版目标已经超过当前静态站的复杂度。Projects、Research、Notes、Blog、About 需要清晰内容模型和独立路由。
- 当前站点已经出现静态手写结构的典型问题：内联样式分散、客户端 Markdown 渲染、失效 CDN、SEO 不完整、图片和内容语义不一致。
- 未来在线工具、交互演示、可视化项目更适合组件化和路由化组织。
- Next.js 静态生成可以保留静态托管优势，同时给每篇文章、每个项目和每个研究条目生成稳定页面。

不建议在当前 HTML 结构上做大规模原地重构。原地重构短期更快，但会继续积累手写导航、手写 SEO、手写内容索引和样式分散的问题。

## 3. 建议的新版信息架构

| 栏目 | 内容来源 | 说明 |
| --- | --- | --- |
| Home | `index.html` 简介、项目/文章摘要 | 首页应做导航枢纽，而不是完整 About 页 |
| Projects | 物联网智能家居项目、代码文档、截图 | 当前最明确项目是智能家居/IoT 项目 |
| Research | 当前仓库无明确内容 | 需要人工补充论文、课题、项目档案或研究方向 |
| Notes | 物联网基础、协议、嵌入式、前端知识条目 | 适合长期知识库 |
| Blog | 项目复盘、阶段记录、普通文章 | 当前前端三篇更偏 Notes；也可改写为 Blog |
| About | 个人介绍、真实联系方式、站点说明 | 联系页应合并进 About |

## 4. 建议的内容模型

| 内容类型 | 建议字段 |
| --- | --- |
| Project | title、slug、summary、status、date、tags、cover、links、techStack、sections |
| Research | title、slug、type、date、authors、venue/status、abstract、links、tags |
| Note | title、slug、summary、updatedAt、tags、series、order、readingTime |
| Blog | title、slug、summary、publishedAt、updatedAt、tags、cover、draft |
| About | displayName、bio、focusAreas、contacts、socialLinks |

这些字段应优先从当前内容中提取；仓库没有的个人信息不要虚构。

## 5. 迁移优先级

| 优先级 | 工作 | 原因 |
| --- | --- | --- |
| P0 | 固定旧路径映射和重定向策略 | 避免新版上线后丢失旧入口 |
| P0 | 确认真实个人信息、GitHub、邮箱、微信是否公开 | 当前联系方式均为占位 |
| P0 | 修复或替换 highlight.js 依赖策略 | 当前代码文档页实际不可用 |
| P1 | 建立 Projects/Notes/Blog 内容模型 | 解决当前内容混杂问题 |
| P1 | 迁移物联网专题并拆分项目案例 | 当前最有价值内容在这里 |
| P1 | 为所有页面生成 SEO 元数据 | 当前 SEO 缺口明显 |
| P2 | 整理图片资产和 alt 文案 | 当前图片复用不准确 |
| P2 | 添加 sitemap、robots、canonical、Open Graph | 上线前基础 SEO |
| P2 | 增加链接检查和页面 smoke test | 防止迁移后重复出现断链和 CDN 问题 |

## 6. 部署建议

如果继续使用 GitHub Pages：

- 可以使用 Next.js 静态导出。
- 需要配置构建输出和 Pages 发布目录。
- 动态后端能力不可用，留言表单应接入外部表单服务、serverless 服务或暂不提供。

如果接受更现代的静态/边缘平台：

- Vercel 或 Cloudflare Pages 会降低 Next.js 部署复杂度。
- 后续 API、预览部署、表单处理和图片优化更容易扩展。

当前阶段不要修改部署配置。部署选择应在设计和内容模型确认后再定。

## 7. 风险与约束

| 风险 | 控制方式 |
| --- | --- |
| 内容迁移时误填个人信息 | 只迁移仓库已有事实；联系方式待人工确认 |
| 旧路径丢失 | 按 `route-migration-map.md` 维护重定向 |
| 图片语义错误 | 迁移前重新审核每张图的真实含义和 alt |
| Research 栏目空缺 | 先保留栏目结构，内容由人工补充；不要虚构科研经历 |
| GitHub Pages 部署复杂度上升 | 先验证静态导出方案；必要时改用 Vercel/Cloudflare Pages |

## 8. 最终建议摘要

短期修补当前站点可解决 highlight.js 失效和部分文案问题，但无法根本解决内容组织、路由、SEO 和维护性问题。

基于新版定位和当前仓库体量，建议重新搭建 Next.js + TypeScript 版本，并把当前有效内容作为迁移源，而不是在现有 HTML 文件上继续扩展。
