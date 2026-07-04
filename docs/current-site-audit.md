# Current Site Audit

审计对象：`redesign` 分支当前工作区。审计日期：2026-07-04。

本次审计只读取和验证现有文件，未重构网站、未安装依赖、未修改部署配置。

## 1. 技术栈结论

| 项目 | 当前状态 |
| --- | --- |
| 前端技术 | HTML5、CSS3、原生 JavaScript |
| 页面形态 | 静态 HTML 页面为主，部分 Markdown 内容由浏览器端 JavaScript 动态 fetch 后渲染 |
| 项目入口 | `index.html`，对应站点根路径 `/` 和旧路径 `/index.html` |
| 构建工具 | 无构建工具；未发现 Vite、Webpack、Next.js、Astro、Docusaurus 等配置 |
| 依赖管理 | 运行时依赖通过 CDN 引入；仓库没有 `package.json`；当前工作区存在未跟踪的 `package-lock.json`，但它不参与现有站点运行 |
| CSS 组织 | `css/style.css` 是主站全局样式；`notes/iot/index.html` 和 `notes/iot/code_gateway.html` 内含大量页面级内联样式 |
| JavaScript 组织 | `js/app.js` 是主站公共脚本；物联网专题和代码文档页还有各自内联脚本 |
| 当前部署方式 | 仓库远端为 GitHub；未发现 CI 工作流或构建产物配置。基于现有文件形态，当前部署应为 GitHub Pages 或其他静态托管直接发布 HTML 文件。GitHub Pages source 仍需人工确认 |
| 本地运行方法 | README 未写明具体命令。普通页面可直接打开 HTML；但 Markdown 动态加载依赖 `fetch`，建议通过本地静态 HTTP 服务运行，例如 `python -m http.server 8000` 或编辑器 Live Server |

## 2. 目录与职责

| 路径 | 作用 |
| --- | --- |
| `index.html` | 当前首页/关于页，包含简短博主介绍 |
| `blogs.html` | 博客列表页，包含 1 个物联网专题入口和 3 个 Markdown 文章按钮 |
| `contact.html` | 联系方式与前端留言表单演示 |
| `notes/iot/index.html` | 物联网学习专题，含章节目录、图片和智能家居项目内容 |
| `notes/iot/code_gateway.html` | 代码文档展示页，通过 URL 参数加载 `code_gateway.md` |
| `md/article1.md` | JavaScript 异步编程文章内容 |
| `md/article2.md` | CSS3 布局与动效文章内容 |
| `md/article3.md` | HTML5 语义化与 SEO 文章内容 |
| `notes/iot/code_gateway.md` | 物联网网关/串口通信 C 代码文档 |
| `css/style.css` | 主站公共样式 |
| `js/app.js` | 暗黑模式、滚动进度、回到顶部、博客 Markdown 渲染、搜索、表单演示 |
| `pictures/` | 物联网专题图片资源 |

## 3. 外部依赖

| 依赖 | 引用位置 | 验证结果 | 风险 |
| --- | --- | --- | --- |
| `https://cdn.jsdelivr.net/npm/marked/marked.min.js` | `blogs.html`、`notes/iot/code_gateway.html` | HTTP 200 | 未锁定明确小版本，长期可复现性一般 |
| `https://cdn.jsdelivr.net/npm/dompurify@3.0.6/dist/purify.min.js` | `blogs.html`、`notes/iot/code_gateway.html` | HTTP 200 | 由 CDN 运行时加载，离线不可用 |
| `https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github.min.css` | `blogs.html`、`notes/iot/code_gateway.html` | HTTP 200 | 仅样式可用 |
| `https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/lib/highlight.min.js` | `blogs.html`、`notes/iot/code_gateway.html` | HTTP 404 | 失效依赖。导致 `hljs` 全局对象不可用 |

## 4. 运行与错误验证

已执行验证：

- `node --check js/app.js`：通过。
- 对 `notes/iot/index.html` 和 `notes/iot/code_gateway.html` 的内联脚本做语法检查：通过。
- 启动临时本地静态 HTTP 服务，逐页访问 5 个 HTML 页面。
- 点击 `blogs.html` 中 `md/article1.md` 的“阅读全文”按钮：文章可以动态渲染，复制按钮出现。
- 访问 `notes/iot/code_gateway.html?file=code_gateway.md`：页面打开，但 Markdown 代码文档渲染失败。

浏览器验证发现的错误：

```text
MD加载失败： ReferenceError: hljs is not defined
at notes/iot/code_gateway.html?file=code_gateway.md:256
```

原因是 highlight.js 脚本 URL 返回 404。`blogs.html` 中的公共脚本对 `hljs` 做了存在性判断，因此博客文章仍可渲染，但代码高亮不会可靠工作。`code_gateway.html` 没有同样的保护，直接调用 `hljs.highlightElement`，因此失败并替换为错误提示。

## 5. 当前主要问题

| 严重度 | 问题 | 影响 |
| --- | --- | --- |
| 高 | highlight.js 脚本 URL 失效 | 代码文档页渲染失败；博客代码高亮不可用 |
| 高 | 内容模型混杂 | 博客、笔记、项目案例和代码文档混在 `blogs.html` 与 `notes/iot/` 中，后续扩展成本高 |
| 中 | 联系方式为占位内容 | `your_email@example.com`、`https://github.com/yourname`、`your_wechat_id` 不能作为真实个人信息迁移 |
| 中 | SEO 基础不完整 | 物联网子页缺少 meta description；无 canonical、Open Graph、Twitter Card、sitemap、robots |
| 中 | 图片复用和说明不一致 | `sensors_data.png` 实际是 UART 数据结构截图，却被用作架构图、协议对比、开发板对比；`ui-interface.png` 也被重复用于多个不同说明 |
| 中 | 页面样式分散 | 主样式、内联样式、局部脚本混杂，难以统一新版设计系统 |
| 低 | 留言表单仅前端演示 | 提交后只显示本地提示，不会发送数据 |
| 低 | README 运行方法不完整 | 没有明确说明 Markdown 动态加载需要 HTTP 服务 |

## 6. 部署与本地运行判断

当前仓库适合静态托管。没有构建步骤，所以部署复杂度很低，但也缺少内容管线、路由层、元数据生成和自动化检查。

如果继续保留现有技术栈，本地预览应使用静态 HTTP 服务，而不是直接 `file://` 打开，因为博客 Markdown 和代码文档都依赖 `fetch` 读取 `.md` 文件。

## 7. 待确认项

- GitHub Pages 当前发布源是 `main`、`redesign`，还是其他分支/目录。
- 域名 `gukaiyuan.asia` 的 DNS 和 Pages 自定义域名配置是否在仓库外维护。
- `package-lock.json` 是否是误生成文件；它当前未被 Git 跟踪，也不参与站点运行。
- 是否希望保留当前 `contact.html` 路径，还是迁移到新版 `About` 页的联系方式区块。
- 是否需要为后续重构加入自动化检查，例如链接检查、HTML 校验、Lighthouse/Playwright smoke test。
