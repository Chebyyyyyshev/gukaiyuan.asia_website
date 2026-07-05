# Route Migration Map

本文件盘点当前页面、访问路径、导航关系、断链情况和新版迁移建议。

## 0. 第三阶段已落地路由

当前 `redesign` 分支已实现 Notes 内容系统，以下路由已经由 Next.js App Router 静态生成：

| 新路由 | 内容 | 来源 |
| --- | --- | --- |
| `/notes` | 技术知识库索引 | Notes registry |
| `/notes/web/javascript-async-programming` | JavaScript 异步编程 | `legacy-site/md/article1.md` |
| `/notes/web/css-layout-and-animation` | CSS 布局与动效 | `legacy-site/md/article2.md` |
| `/notes/web/html5-semantics-and-seo` | HTML5 语义化与 SEO | `legacy-site/md/article3.md` |
| `/notes/iot/fundamentals` | 物联网基础 | `legacy-site/notes/iot/index.html` 的 `chapter1-1`、`chapter1-2` |
| `/notes/iot/communication-protocols` | 物联网通信协议 | `legacy-site/notes/iot/index.html` 的 `chapter2-1`、`chapter2-2` |
| `/notes/embedded/development-boards` | 嵌入式开发板 | `legacy-site/notes/iot/index.html` 的 `chapter3-1` |
| `/notes/iot/data-acquisition-and-gateway` | 数据采集与网关 | `legacy-site/notes/iot/index.html` 的 `chapter3-2` 和 `legacy-site/notes/iot/code_gateway.md` |

第三阶段已在 `next.config.ts` 中实现永久重定向：

| 旧路径 | 新路径 |
| --- | --- |
| `/blogs.html` | `/notes` |
| `/md/article1.md` | `/notes/web/javascript-async-programming` |
| `/md/article2.md` | `/notes/web/css-layout-and-animation` |
| `/md/article3.md` | `/notes/web/html5-semantics-and-seo` |
| `/notes/iot/` | `/notes/iot/fundamentals` |
| `/notes/iot` | `/notes/iot/fundamentals` |
| `/notes/iot/index.html` | `/notes/iot/fundamentals` |
| `/notes/iot/code_gateway.html` | `/notes/iot/data-acquisition-and-gateway` |
| `/index.html` | `/` |
| `/contact.html` | `/about#contact` |

未迁移内容：

- 物联网专题中的智能家居项目章节仍归属 Projects 阶段。
- Blog 正文、Research 正文、Projects 详情页、搜索和后端功能仍未实现。

## 1. 页面与路由盘点

| 当前文件 | 当前访问路由 | 页面标题 | 页面用途 | 当前导航入口 | 动态内容 | 新版建议 |
| --- | --- | --- | --- | --- | --- | --- |
| `index.html` | `/`、`/index.html` | 关于 - 技术空间 | 当前首页/关于页 | 主导航“关于”；其他主站页面和物联网页返回首页 | 无 | `/` 作为 Home；详细个人介绍迁入 `/about` |
| `blogs.html` | `/blogs.html` | 博客 - 技术空间 | 博客列表和 Markdown 文章阅读容器 | 主导航“博客”；物联网子页返回博客 | 点击按钮加载 `md/article1.md`、`md/article2.md`、`md/article3.md` | 第三阶段已将旧 `/blogs.html` 重定向到 `/notes`；旧站三篇前端文章已作为 Notes 迁移 |
| `contact.html` | `/contact.html` | 联系 - 技术空间 | 联系方式与留言表单演示 | 主导航“联系”；物联网专题页顶部导航 | 表单提交由 `js/app.js` 前端拦截，仅显示提示 | 不建议保留独立 Contact；迁到 `/about#contact`，旧路径重定向 |
| `notes/iot/index.html` | `/notes/iot/`、`/notes/iot/index.html` | 物联网学习记录 \| GUKAIYUAN.ASIA | 物联网专题、学习笔记和智能家居项目内容 | `blogs.html` 的“进入专题”；自身顶部导航 | 内联 JS 控制侧边目录、锚点滚动、高亮和移动端目录 | 第三阶段已拆分学习笔记到 Notes 详情路由；智能家居项目仍留给 Projects 阶段 |
| `notes/iot/code_gateway.html` | `/notes/iot/code_gateway.html?file=code_gateway.md` | 代码文档 - 物联网学习 | 通过 URL 参数渲染代码 Markdown | `notes/iot/index.html` 中“查看完整代码” | 读取 `file` 参数，只允许加载 `code_gateway.md` | 第三阶段已重定向到 `/notes/iot/data-acquisition-and-gateway`，作为旧站保留的实现片段展示；项目页交叉链接留给 Projects 阶段 |

## 2. 非 HTML 内容路径

| 当前路径 | 当前用途 | 是否有页面导航入口 | 新版建议 |
| --- | --- | --- | --- |
| `md/article1.md` | JavaScript 异步编程文章正文 | 无直接 `<a>` 入口；由 `blogs.html` 的按钮 `data-md` 动态加载 | 已迁移到 `/notes/web/javascript-async-programming` |
| `md/article2.md` | CSS3 布局与动效文章正文 | 无直接 `<a>` 入口；由 `blogs.html` 的按钮 `data-md` 动态加载 | 已迁移到 `/notes/web/css-layout-and-animation` |
| `md/article3.md` | HTML5 语义化与 SEO 文章正文 | 无直接 `<a>` 入口；由 `blogs.html` 的按钮 `data-md` 动态加载 | 已迁移到 `/notes/web/html5-semantics-and-seo` |
| `notes/iot/code_gateway.md` | 物联网网关 C 代码文档 | 由 `code_gateway.html?file=code_gateway.md` 间接加载 | 已迁移到 `/notes/iot/data-acquisition-and-gateway` |
| `pictures/sensors_data.png` | UART 数据结构截图 | 由物联网专题页 3 次引用 | 已复制为 `public/images/notes/uart-data-structure.png`，仅用于“数据采集与网关”笔记 |
| `pictures/ui-interface.png` | 智能家居客户端 UI 截图 | 由物联网专题页 3 次引用 | 迁到智能家居项目页 |
| `pictures/ui界面.png` | `ui-interface.png` 的重复文件 | 无 | 迁移时不建议作为独立资源保留；当前阶段不删除 |

## 3. 当前导航关系

| 来源 | 指向 | 说明 |
| --- | --- | --- |
| `index.html` | `index.html`、`blogs.html`、`contact.html` | 主站导航 |
| `blogs.html` | `index.html`、`blogs.html`、`contact.html` | 主站导航 |
| `blogs.html` | `notes/iot/index.html` | 物联网专题入口 |
| `blogs.html` | `md/article1.md`、`md/article2.md`、`md/article3.md` | 通过按钮和 JavaScript 动态加载，不是普通链接 |
| `contact.html` | `index.html`、`blogs.html`、`contact.html` | 主站导航 |
| `contact.html` | `https://github.com/yourname` | 占位 GitHub 外链，需人工确认 |
| `notes/iot/index.html` | `../../index.html`、`../../blogs.html`、`../../contact.html` | 子页顶部导航 |
| `notes/iot/index.html` | `#chapter1` 到 `#chapter4-4` | 侧边目录锚点 |
| `notes/iot/index.html` | `code_gateway.html?file=code_gateway.md` | 代码文档入口，新窗口打开 |
| `notes/iot/code_gateway.html` | `../../index.html`、`index.html`、`../../blogs.html` | 代码文档页顶部导航和返回链接 |

## 4. 断链与失效引用

本地 HTML、Markdown、CSS、JS、图片引用检查结果：

- 未发现本地文件断链。
- `notes/iot/index.html` 的章节锚点均能匹配对应 `id`。
- `blogs.html` 的 3 个 `data-md` 文件均存在。
- `notes/iot/code_gateway.html` 的 allowlist 文件 `code_gateway.md` 存在。

外部依赖问题：

| 引用 | 状态 | 影响 |
| --- | --- | --- |
| `https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/lib/highlight.min.js` | HTTP 404 | `hljs` 不存在；代码文档页报错；博客文章无法可靠高亮 |

外部内容待确认：

| 引用 | 状态 | 说明 |
| --- | --- | --- |
| `https://github.com/yourname` | HTTP 可访问 | 但明显是占位用户名，不能确认属于站点作者 |

## 5. 没有普通导航入口的内容

| 内容 | 当前入口状态 | 迁移注意 |
| --- | --- | --- |
| `md/article1.md` | 只有 `blogs.html` 的按钮动态加载 | 新版应有独立文章/笔记路由 |
| `md/article2.md` | 只有 `blogs.html` 的按钮动态加载 | 新版应有独立文章/笔记路由 |
| `md/article3.md` | 只有 `blogs.html` 的按钮动态加载 | 新版应有独立文章/笔记路由 |
| `notes/iot/code_gateway.md` | 只有代码展示页通过 URL 参数加载 | 新版应有独立可索引页面 |
| `pictures/ui界面.png` | 无引用 | 与 `ui-interface.png` 重复；迁移时人工确认主文件名 |

## 6. 旧路径保留与重定向建议

| 旧路径 | 新版目标建议 | 动作 |
| --- | --- | --- |
| `/` | `/` | 保留为 Home |
| `/index.html` | `/` | 301 或静态重定向到 Home |
| `/blogs.html` | `/notes` | 已在 `next.config.ts` 实现永久重定向 |
| `/contact.html` | `/about#contact` | 旧路径重定向 |
| `/notes/iot` | `/notes/iot/fundamentals` | 已在 `next.config.ts` 实现永久重定向 |
| `/notes/iot/` | `/notes/iot/fundamentals` | 已在 `next.config.ts` 实现永久重定向 |
| `/notes/iot/index.html` | `/notes/iot/fundamentals` | 已在 `next.config.ts` 实现永久重定向 |
| `/notes/iot/code_gateway.html` | `/notes/iot/data-acquisition-and-gateway` | 已在 `next.config.ts` 实现永久重定向；查询参数不是新路由的一部分 |
| `/md/article1.md` | `/notes/web/javascript-async-programming` | 已在 `next.config.ts` 实现永久重定向 |
| `/md/article2.md` | `/notes/web/css-layout-and-animation` | 已在 `next.config.ts` 实现永久重定向 |
| `/md/article3.md` | `/notes/web/html5-semantics-and-seo` | 已在 `next.config.ts` 实现永久重定向 |
| `/pictures/sensors_data.png` | `public/images/notes/uart-data-structure.png` | 已复制新公开资源；旧资源是否保留兼容路径需后续确认 |
| `/pictures/ui-interface.png` | 新项目图片资源路径 | 若外部可能引用，保留静态资源或提供兼容路径 |

## 7. 新版栏目归属建议

| 新版栏目 | 迁入内容 |
| --- | --- |
| Home | 简短个人定位、最新项目/文章入口、Projects/Research/Notes/Blog/About 导航 |
| Projects | 智能家居/IoT 项目、项目目标、环境、系统设计、成果截图、网关代码文档入口 |
| Research | 当前仓库没有明确科研论文、课题、发表物或实验记录；需人工补充 |
| Notes | 物联网基础、通信协议、嵌入式开发、JavaScript/CSS/HTML/SEO 知识条目 |
| Blog | 项目复盘、阶段总结、普通技术文章；当前 3 篇前端文章更偏 Notes，但也可改写为 Blog |
| About | 个人介绍、真实联系方式、站点说明 |

## 8. 待确认项

- 3 篇前端文章最终放 Notes 还是 Blog。
- 物联网专题中的智能家居项目是否可以公开所有硬件、平台、IP、截图信息。
- `code_gateway.md` 是否是完整代码，是否有许可证或来源约束。
- `/contact.html` 到 `/about#contact` 的 hash 重定向在生产环境中的最终表现。
- 是否需要为旧图片路径提供兼容访问或额外重定向。
