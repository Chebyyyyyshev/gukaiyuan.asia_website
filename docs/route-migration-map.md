# Route Migration Map

本文件盘点当前页面、访问路径、导航关系、断链情况和新版迁移建议。

## 1. 页面与路由盘点

| 当前文件 | 当前访问路由 | 页面标题 | 页面用途 | 当前导航入口 | 动态内容 | 新版建议 |
| --- | --- | --- | --- | --- | --- | --- |
| `index.html` | `/`、`/index.html` | 关于 - 技术空间 | 当前首页/关于页 | 主导航“关于”；其他主站页面和物联网页返回首页 | 无 | `/` 作为 Home；详细个人介绍迁入 `/about` |
| `blogs.html` | `/blogs.html` | 博客 - 技术空间 | 博客列表和 Markdown 文章阅读容器 | 主导航“博客”；物联网子页返回博客 | 点击按钮加载 `md/article1.md`、`md/article2.md`、`md/article3.md` | 拆分为 `/blog` 与 `/notes`；旧 `/blogs.html` 重定向到 `/blog` 或内容索引页 |
| `contact.html` | `/contact.html` | 联系 - 技术空间 | 联系方式与留言表单演示 | 主导航“联系”；物联网专题页顶部导航 | 表单提交由 `js/app.js` 前端拦截，仅显示提示 | 不建议保留独立 Contact；迁到 `/about#contact`，旧路径重定向 |
| `notes/iot/index.html` | `/notes/iot/`、`/notes/iot/index.html` | 物联网学习记录 \| GUKAIYUAN.ASIA | 物联网专题、学习笔记和智能家居项目内容 | `blogs.html` 的“进入专题”；自身顶部导航 | 内联 JS 控制侧边目录、锚点滚动、高亮和移动端目录 | 拆分：基础/协议/嵌入式内容到 `/notes/iot`；智能家居项目到 `/projects/smart-home-iot` |
| `notes/iot/code_gateway.html` | `/notes/iot/code_gateway.html?file=code_gateway.md` | 代码文档 - 物联网学习 | 通过 URL 参数渲染代码 Markdown | `notes/iot/index.html` 中“查看完整代码” | 读取 `file` 参数，只允许加载 `code_gateway.md` | 迁到 `/projects/smart-home-iot/gateway-code` 或 `/notes/iot/gateway-code`，并从项目页/笔记页交叉链接 |

## 2. 非 HTML 内容路径

| 当前路径 | 当前用途 | 是否有页面导航入口 | 新版建议 |
| --- | --- | --- | --- |
| `md/article1.md` | JavaScript 异步编程文章正文 | 无直接 `<a>` 入口；由 `blogs.html` 的按钮 `data-md` 动态加载 | 迁为 `/notes/javascript-async` 或 `/blog/javascript-async-programming` |
| `md/article2.md` | CSS3 布局与动效文章正文 | 无直接 `<a>` 入口；由 `blogs.html` 的按钮 `data-md` 动态加载 | 迁为 `/notes/css-layout-animation` |
| `md/article3.md` | HTML5 语义化与 SEO 文章正文 | 无直接 `<a>` 入口；由 `blogs.html` 的按钮 `data-md` 动态加载 | 迁为 `/notes/html5-semantics-seo` |
| `notes/iot/code_gateway.md` | 物联网网关 C 代码文档 | 由 `code_gateway.html?file=code_gateway.md` 间接加载 | 迁为项目代码文档内容源 |
| `pictures/sensors_data.png` | UART 数据结构截图 | 由物联网专题页 3 次引用 | 迁到代码文档或串口通信说明 |
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
| `/blogs.html` | `/blog` 或 `/notes` 索引 | 根据最终信息架构确认；至少保留重定向 |
| `/contact.html` | `/about#contact` | 旧路径重定向 |
| `/notes/iot/` | `/notes/iot` | 保留或规范化为无 `.html` 路径 |
| `/notes/iot/index.html` | `/notes/iot` | 旧路径重定向 |
| `/notes/iot/code_gateway.html?file=code_gateway.md` | `/projects/smart-home-iot/gateway-code` | 旧路径重定向；同时从 `/notes/iot` 交叉链接 |
| `/md/article1.md` | `/notes/javascript-async` 或 `/blog/javascript-async-programming` | 如曾被索引，保留重定向；否则不公开原始 `.md` |
| `/md/article2.md` | `/notes/css-layout-animation` | 如曾被索引，保留重定向 |
| `/md/article3.md` | `/notes/html5-semantics-seo` | 如曾被索引，保留重定向 |
| `/pictures/sensors_data.png` | 新图片资源路径 | 若外部可能引用，保留静态资源或提供兼容路径 |
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
- 是否需要保留 `/contact.html` 作为可访问旧路径。
- 是否需要为所有旧 `.html` 和 `.md` 路径做静态重定向文件。
