# Information Architecture

## 最终主路由

- `/`
- `/projects`
- `/research`
- `/notes`
- `/blog`
- `/about`

## 已实现 Notes 路由

- `/notes`
- `/notes/web/javascript-async-programming`
- `/notes/web/css-layout-and-animation`
- `/notes/web/html5-semantics-and-seo`
- `/notes/iot/fundamentals`
- `/notes/iot/communication-protocols`
- `/notes/embedded/development-boards`
- `/notes/iot/data-acquisition-and-gateway`

## 已实现 Projects 路由

- `/projects`
- `/projects/smart-home-iot`

## 主导航

当前主导航只展示：

- Home
- Projects
- Notes
- About

Research 和 Blog 路由已建立，但在没有真实内容前不显示在主导航中。

## 内容归属

### Projects

- 智能家居 IoT 项目。
- 项目系统设计。
- 项目截图。
- 网关代码。
- 项目成果与复盘。
- 未来在线工具和交互演示。

Projects 已通过本地 MDX、TypeScript registry 和静态详情路由实现。当前只有一个真实项目，不创建占位项目或虚构第二项目。

### Notes

- JavaScript 异步编程。
- CSS 布局与动效。
- HTML5 语义化与 SEO。
- 物联网基础概念。
- 物联网协议。
- 嵌入式与开发板内容。
- 传感器数据采集说明。

Notes 已通过本地 MDX、TypeScript registry 和静态详情路由实现。当前不包含搜索、评论、阅读量、收藏或用户系统。

### Blog

- 项目复盘。
- 研究阶段总结。
- 技术观点。
- AI 与开发工具思考。
- 学习经验。
- 独立叙事型文章。

### Research

- 真实研究方向。
- 论文与课题。
- 系统模型。
- 算法。
- 仿真结果。
- 研究进展。

当前仓库没有可确认 Research 正文，不得虚构 PASS 或其他研究细节。

### About

- 个人介绍。
- 技术方向。
- 联系方式。
- GitHub。
- 网站说明。

真实联系方式尚未在本任务中提供，因此不展示假邮箱、假微信或假社交账号。

## 旧路径规划

第三阶段已在 `next.config.ts` 中实现以下永久重定向：

- `/index.html` -> `/`
- `/blogs.html` -> `/notes`
- `/contact.html` -> `/about#contact`
- `/md/article1.md` -> `/notes/web/javascript-async-programming`
- `/md/article2.md` -> `/notes/web/css-layout-and-animation`
- `/md/article3.md` -> `/notes/web/html5-semantics-and-seo`
- `/notes/iot/` -> `/notes/iot/fundamentals`
- `/notes/iot` -> `/notes/iot/fundamentals`
- `/notes/iot/index.html` -> `/notes/iot/fundamentals`
- `/notes/iot/code_gateway.html` -> `/notes/iot/data-acquisition-and-gateway`

智能家居项目详情页和 Projects 内容系统已在第四阶段实现，旧站物联网专题中的项目章节迁移到 `/projects/smart-home-iot`，不迁入 Notes 正文。
