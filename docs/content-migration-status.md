# Content Migration Status

本文档记录 Notes 内容迁移状态。第三阶段只迁移已确认的学习笔记内容；第四阶段已将智能家居项目章节迁移到 Projects，不迁入 Notes 正文。

## 已迁移 Notes

| 内容 | 旧来源 | 新文件 | 新路由 | 状态 | 图片 | 代码 |
| --- | --- | --- | --- | --- | --- | --- |
| JavaScript 异步编程 | `legacy-site/md/article1.md` | `src/content/notes/javascript-async-programming.mdx` | `/notes/web/javascript-async-programming` | 已迁移 | 否 | JavaScript 示例 |
| CSS 布局与动效 | `legacy-site/md/article2.md` | `src/content/notes/css-layout-and-animation.mdx` | `/notes/web/css-layout-and-animation` | 已迁移 | 否 | CSS 示例 |
| HTML5 语义化与 SEO | `legacy-site/md/article3.md` | `src/content/notes/html5-semantics-and-seo.mdx` | `/notes/web/html5-semantics-and-seo` | 已迁移 | 否 | HTML 示例 |
| 物联网基础 | `legacy-site/notes/iot/index.html` 的 `chapter1-1`、`chapter1-2` | `src/content/notes/iot-fundamentals.mdx` | `/notes/iot/fundamentals` | 已迁移 | 否 | 否 |
| 物联网通信协议 | `legacy-site/notes/iot/index.html` 的 `chapter2-1`、`chapter2-2` | `src/content/notes/iot-communication-protocols.mdx` | `/notes/iot/communication-protocols` | 已迁移 | 否 | 否 |
| 嵌入式开发板 | `legacy-site/notes/iot/index.html` 的 `chapter3-1` | `src/content/notes/embedded-development-boards.mdx` | `/notes/embedded/development-boards` | 已迁移 | 否 | 否 |
| 数据采集与网关 | `legacy-site/notes/iot/index.html` 的 `chapter3-2`、`legacy-site/notes/iot/code_gateway.md` | `src/content/notes/data-acquisition-and-gateway.mdx` | `/notes/iot/data-acquisition-and-gateway` | 已迁移 | 是 | C 网关片段 |

## 图片迁移

| 旧资源 | 新资源 | 使用位置 | 状态 |
| --- | --- | --- | --- |
| `legacy-site/pictures/sensors_data.png` | `public/images/notes/uart-data-structure.png` | `/notes/iot/data-acquisition-and-gateway` | 已复制，未修改旧图 |

未迁入 Notes 的旧图：

- `legacy-site/pictures/ui-interface.png`：已在第二阶段复制为项目截图，并在第四阶段用于 `/projects/smart-home-iot`。
- `legacy-site/pictures/ui界面.png`：与项目截图重复，第四阶段未重复公开。

## 迁移处理原则

- 保留旧内容核心含义。
- 统一标题层级、Markdown 结构、中文标点和代码围栏。
- 删除旧站导航、按钮和页面说明类文字。
- 不添加未核实技术参数、行业数据、结果指标或部署结论。
- 不展示虚构日期、阅读量、阅读时长或作者信息。
- 网关代码标注为旧站保留的实现片段，不声明已在当前环境编译或可直接部署。

## 未迁入 Notes 的内容

以下旧站内容属于 Projects，已在第四阶段迁移到 `/projects/smart-home-iot`，不迁入 Notes：

- `legacy-site/notes/iot/index.html` 的智能家居项目章节。
- 智能家居系统目标、环境、功能、截图和项目复盘内容。

项目代码长片段仍由 `/notes/iot/data-acquisition-and-gateway` 承接，项目页只做概述和交叉链接。

以下新版栏目仍未实现正文：

- Blog 正文。
- Research 正文。
- 站内搜索。
- 后端、数据库、评论、收藏、阅读量、用户系统。

## 待人工确认

- 旧站三篇前端内容是否长期保留在 Notes，或未来改写为 Blog。
- `legacy-site/notes/iot/code_gateway.md` 是否为完整代码，是否有许可或来源约束。
- 物联网专题中的实验箱、平台、云服务、IP/端口字段等细节是否适合长期公开。
- 是否需要为旧图片路径提供兼容访问。
- `/contact.html` 到 `/about#contact` 的 hash 重定向在生产环境中的最终表现。
