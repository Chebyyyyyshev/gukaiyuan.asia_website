# About and SEO Status

本文档记录第五阶段 About、公开联系方式与 SEO 基础能力的实现状态。所有个人资料均来自用户在本阶段明确确认的信息；旧站占位符、仓库用户名、截图和域名不作为个人信息来源。

## About 页面结构

`/about` 由以下语义区块组成：

1. About Header：`ABOUT`、唯一 `h1`“关于我”和已确认简介。
2. Profile Summary：姓名、英文名、身份、学校、所在地与关注方向。
3. What I Build：可点击的 Projects、Notes，以及不带链接的 Research、Blog 公开边界说明。
4. Current Archive：从 registry 计算当前项目数和笔记数，不手写数量或使用递增动画。
5. Website Principles：只展示可核查内容、区分内容类型、保留实现过程、不用虚假数据填充页面。
6. Contact：包含 `id="contact"`，展示已确认的公开邮箱和 GitHub。

页面拆分到 `src/components/about/`，`src/app/about/page.tsx` 只负责组合页面、读取 registry 数量和声明 metadata。

## 已确认公开字段

| 字段 | 公开值 | 使用位置 |
| --- | --- | --- |
| 姓名 | 顾开元 | Header、Footer、About、metadata、JSON-LD |
| 英文名 | Kaiyuan Gu | Header、Footer、About、JSON-LD |
| 身份 | 通信工程方向学生 | About |
| 简介 | 通信工程方向学生，关注无线通信、物理层安全、信号处理、嵌入式系统与物联网。 | Home、About、Footer、JSON-LD |
| 关注方向 | 无线通信、物理层安全、信号处理、嵌入式系统、物联网 | About |
| 公开邮箱 | `hid67728675@petalmail.com` | About Contact、Footer、JSON-LD |
| GitHub | `https://github.com/Chebyyyyyshev` | About Contact、Footer、JSON-LD |
| 学校 | 同济大学 | About Profile Summary |
| 所在地 | 上海 | About Profile Summary |

统一类型定义位于 `src/types/profile.ts`，公开值集中位于 `src/config/site.ts`。组件不重复硬编码姓名、简介或联系方式。

## 隐藏字段

- 微信：用户明确选择不公开；未配置微信号或二维码路径，页面不渲染微信区块。
- 简历：用户明确选择不公开；未配置简历 URL，页面不渲染简历入口。
- Twitter/X：未提供账号，不设置 metadata creator，也不进入 JSON-LD。
- 手机号、家庭地址、私人邮箱、头像和其他社交账号：未提供，不展示、不推断。

## Contact 实现

- 邮箱使用 `mailto:hid67728675@petalmail.com`。
- GitHub 使用完整确认 URL，在新窗口打开，并设置 `rel="noopener noreferrer"`。
- GitHub 链接包含 `aria-label` 和 `aria-hidden` 外链图标。
- 联系卡片支持键盘访问与清晰 `focus-visible`。
- 邮箱与 URL 使用可换行文本规则，移动端为单列。
- 未实现联系表单、邮件发送、数据库或任何后端接口。

## 旧 Contact 路径

`next.config.ts` 保留永久重定向：

```text
/contact.html -> /about#contact
```

该跳转由 Next.js redirect 实现，不使用客户端定时器、`location.replace`、SPA 通配 rewrite 或重复 `_redirects`。第五阶段本地响应为 `308 Permanent Redirect`，`Location` 为 `/about#contact`，浏览器最终 URL、hash 和 Contact 锚点均正确。未来生产切换前仍需在 Netlify 正式环境复核。

## Sitemap

`src/app/sitemap.ts` 从固定公开页面配置、Projects registry 和 Notes registry 生成以下 12 个 URL：

- `/`
- `/projects`
- `/projects/smart-home-iot`
- `/notes`
- `/notes/web/javascript-async-programming`
- `/notes/web/css-layout-and-animation`
- `/notes/web/html5-semantics-and-seo`
- `/notes/iot/fundamentals`
- `/notes/iot/communication-protocols`
- `/notes/embedded/development-boards`
- `/notes/iot/data-acquisition-and-gateway`
- `/about`

sitemap 不包含 `/research`、`/blog`、404、`legacy-site`、Netlify preview URL 或未知 slug。没有可靠更新时间，因此不生成 `lastModified`。

## Robots

`src/app/robots.ts`：

- 对所有 user agent 允许抓取 `/` 下的公开内容。
- sitemap 指向 `https://gukaiyuan.asia/sitemap.xml`。
- host 为 `https://gukaiyuan.asia`。
- 不屏蔽 Notes、Projects、CSS、JavaScript 或图片。
- 不包含 Netlify preview URL。

## Metadata 与 Canonical

- `metadataBase`：`https://gukaiyuan.asia`。
- 默认标题：`顾开元 | 通信工程、项目与技术笔记`。
- 标题模板：`%s | 顾开元`。
- 默认描述：`顾开元的个人网站，记录无线通信、物理层安全、嵌入式系统、物联网项目与技术学习笔记。`
- 公开页面 metadata 由 `src/lib/seo/metadata.ts` 统一生成。
- 首页、Projects、项目详情、Notes、7 篇 Notes 详情和 About 均声明正式域名 canonical。
- Open Graph 包含 type、`zh_CN` locale、siteName、title、description 和正式 URL。
- Twitter Card 使用 `summary`，不设置未确认的 creator。
- 没有全站默认 OG 图片；项目截图只用于对应项目详情页，不作为站点默认图。
- 空 Blog 与 Research 路由设置 `noindex, nofollow`，且不进入导航、Footer、About 主动链接或 sitemap。

## Person JSON-LD

`src/components/seo/person-json-ld.tsx` 只在 About 页面输出以下字段：

- `@context`
- `@type: Person`
- `name`
- `alternateName`
- `url`
- `description`
- `sameAs`：仅确认的 GitHub URL
- `email`：仅确认的公开邮箱

JSON-LD 使用 `JSON.stringify` 生成并转义 `<`。即使学校与所在地已获页面展示授权，也不把它们扩展为未要求的 `affiliation` 或 `address`；同时不包含 jobTitle、image、微信、简历或其他账号。

## 内容一致性边界

- Header、Footer 与 About 使用同一资料配置。
- Header、Footer 只显示 Home、Projects、Notes、About。
- About 只链接已有正式内容的 Projects 与 Notes。
- 首页仍链接项目详情、Notes 分类锚点和 About。
- Projects 与 Notes 保留双向交叉链接。
- `sourcePaths` 只用于开发溯源，不在公开页面展示。
- Blog 与 Research 正文、搜索、RSS、Analytics、GitHub API、多语言和联系表单后端均未实现。

## 验证状态

浏览器检查结果：

- 12 个公开页面的 title 均唯一，每页只有一个 `h1`，description、canonical、Open Graph URL 与 `summary` Twitter Card 均存在。
- canonical 全部使用 `https://gukaiyuan.asia`；页面未出现 Netlify preview URL。
- 公开页面没有空 href、单独 `#`、`javascript:`、`legacy-site` 链接、Blog/Research 主动链接、嵌套链接或 `sourcePaths` 泄露。
- 50 个页内锚点和首页 3 个 Notes 分类锚点均有对应目标。
- 公开项目图、Notes 图片与 favicon 请求均返回 200，图片 alt 准确。
- `/contact.html`、`/about#contact`、Email、GitHub、Person JSON-LD、sitemap 与 robots 均按本文档配置输出。
- 320px、375px、768px、1024px、1440px、1920px 无横向滚动；320px 与 375px Contact 为单列，宽屏内容保持 1220px 上限。
- 深色和浅色主题的页面背景、正文、边框和联系卡片均清晰；移动菜单焦点和 skip link 行为正常。
- 新浏览器会话检查 Home、Projects、项目详情与 About 后，控制台没有 warning 或 error。

最终 `npm install` 显示依赖已是最新且未安装新包；lint、typecheck、独立 build 与 `npm run check` 全部通过，构建输出包含 About、12 个公开内容 URL 对应页面、`/sitemap.xml` 和 `/robots.txt`。`npm install` 仍报告 2 个 moderate audit 问题，本阶段未使用可能引入破坏性升级的 `npm audit fix --force`。`git diff --check` 与最终 Git 状态结果以本次任务最终汇报为准。
