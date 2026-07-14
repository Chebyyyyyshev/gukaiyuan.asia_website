# Acceptance Checklist

## 分支与安全

- [ ] 当前分支为 `redesign`。
- [ ] 未执行 commit、push、merge、pull request 或 deploy。
- [ ] 未修改 Netlify 后台、域名或 DNS。

## 旧站归档

- [ ] `legacy-site/` 存在。
- [ ] 旧站 HTML、CSS、JavaScript、Markdown、图片和代码完整保留。
- [ ] `docs/` 未移入 `legacy-site/`。
- [ ] 未修复旧站 highlight.js 问题。
- [ ] 未删除重复图片。

## 新版工程

- [ ] Next.js App Router 可本地启动。
- [ ] 使用 TypeScript。
- [ ] 使用 Tailwind CSS。
- [ ] 使用 `src/` 目录。
- [ ] 路径别名 `@/*` 可用。
- [ ] 未配置 `output: "export"`。
- [ ] 未安装 Netlify 插件。
- [ ] 未创建 API Route 或后端功能。

## 页面骨架

- [ ] `/` 存在。
- [ ] `/projects` 存在。
- [ ] `/research` 存在。
- [ ] `/notes` 存在。
- [ ] `/blog` 存在。
- [ ] `/about` 存在。
- [ ] 不存在路径显示 404 页面。
- [ ] Research 和 Blog 在无真实内容前不显示在主导航和 Footer。

## 第五阶段 About 与 SEO

- [ ] 个人资料类型位于 `src/types/profile.ts`，公开字段集中在 `src/config/site.ts`。
- [ ] 姓名、英文名、身份、简介、关注方向、邮箱、GitHub、学校和所在地均来自用户确认信息。
- [ ] 微信与简历未配置且不渲染，不显示任何占位符。
- [ ] `/about` 只有一个 `h1`，标题层级连续。
- [ ] About 包含 Profile Summary、What I Build、Current Archive、Website Principles 与 Contact。
- [ ] Current Archive 的项目数和笔记数来自 Projects 与 Notes registry。
- [ ] Blog 和 Research 在 About 中只有非链接说明，没有空入口或 Coming soon 卡片。
- [ ] Contact 包含 `id="contact"`，邮箱使用 `mailto:`，GitHub 使用新窗口和安全 `rel`。
- [ ] Header 与 Footer 使用统一资料和导航配置。
- [ ] Footer 只显示已启用导航与确认过的 Email、GitHub，年份动态生成。
- [ ] `/contact.html` 永久重定向到 `/about#contact`，且本地最终 URL 与焦点区域正确。
- [ ] 根 metadataBase 为 `https://gukaiyuan.asia`。
- [ ] 默认 title、title template 与 description 符合第五阶段要求，页面标题不重复站点名。
- [ ] 公开页面都包含正式域名 canonical、Open Graph 与 `summary` Twitter Card。
- [ ] 不存在全站默认 OG 图片或虚构 Twitter/X 账号。
- [ ] Person JSON-LD 只包含确认过的姓名、英文名、URL、简介、GitHub 和公开邮箱。
- [ ] `/sitemap.xml` 包含 4 个固定公开页面、1 个项目详情和 7 个 Notes 详情。
- [ ] sitemap 不包含 Blog、Research、404、legacy-site、预览域名或未知 slug。
- [ ] `/robots.txt` 允许抓取公开页面，并指向正式域名 sitemap 与 host。
- [ ] Blog 与 Research 保持空状态，不进入 Header、Footer、About 主动链接或 sitemap。
- [ ] 320px、375px、768px、1024px、1440px、1920px 无横向滚动。
- [ ] Contact 在移动端为单列，长邮箱和 GitHub URL 不撑破布局。
- [ ] 深浅主题、skip link、focus-visible、移动导航焦点与 reduced motion 正常。

## 第四阶段 Projects

- [ ] Projects registry 位于 `src/lib/content/projects.ts`。
- [ ] Projects 类型位于 `src/types/project.ts`。
- [ ] 智能家居项目正文位于 `src/content/projects/smart-home-iot.mdx`。
- [ ] `/projects` 索引页只展示一个真实项目。
- [ ] `/projects/smart-home-iot` 可直接访问和刷新。
- [ ] 未知项目 slug 显示自定义 404。
- [ ] 项目页不展示虚构日期、完成进度、团队、角色、访问量、仓库链接或在线 Demo。
- [ ] 项目图片使用 `public/images/projects/smart-home-interface.png`。
- [ ] `legacy-site/pictures/ui-interface.png`、`legacy-site/pictures/ui界面.png` 和公开项目图哈希一致。
- [ ] 未重复公开 `ui界面.png`。
- [ ] 系统流程图只表达模块关系，不显示虚假实时数据或指标。
- [ ] 相关 Notes 来自 Notes registry。
- [ ] 首页 Featured Project 链接到 `/projects/smart-home-iot`。
- [ ] 三篇相关 Notes 链接回 `/projects/smart-home-iot`。
- [ ] 未创建第二个虚构项目或占位项目。
- [ ] 未创建后端、搜索、评论、用户系统、数据库或实时 IoT 接入。

## 第三阶段 Notes

- [ ] 已安装且仅安装允许的 MDX 相关依赖。
- [ ] `next.config.ts` 支持 `.md` 和 `.mdx`，且未配置 `output: "export"`。
- [ ] `mdx-components.tsx` 已建立统一 MDX 组件映射。
- [ ] Notes registry 位于 `src/lib/content/notes.ts`。
- [ ] Notes 类型位于 `src/types/note.ts`。
- [ ] 7 篇 Notes 正文位于 `src/content/notes/`。
- [ ] `/notes` 索引页显示 Web、IoT、Embedded、Data & Gateway 四组内容。
- [ ] `/notes/web/javascript-async-programming` 可直接访问。
- [ ] `/notes/web/css-layout-and-animation` 可直接访问。
- [ ] `/notes/web/html5-semantics-and-seo` 可直接访问。
- [ ] `/notes/iot/fundamentals` 可直接访问。
- [ ] `/notes/iot/communication-protocols` 可直接访问。
- [ ] `/notes/embedded/development-boards` 可直接访问。
- [ ] `/notes/iot/data-acquisition-and-gateway` 可直接访问。
- [ ] 未知 Notes slug 显示自定义 404。
- [ ] Notes 页面不展示虚构日期、阅读量、阅读时长或作者。
- [ ] 代码高亮在构建期完成。
- [ ] 代码复制按钮可键盘操作并有 `aria-label`。
- [ ] 标题锚点可访问。
- [ ] 桌面端文章目录可用，移动端隐藏。
- [ ] 上一篇/下一篇来自 registry 顺序。
- [ ] 相关文章最多展示 2 篇同分类文章。
- [ ] `public/images/notes/uart-data-structure.png` 只用于“数据采集与网关”笔记。
- [ ] 未迁移智能家居项目章节到 Notes。
- [ ] 未创建搜索、评论、收藏、阅读量、用户系统、数据库或后端。
- [ ] Notes 相关旧路径重定向可用。
- [ ] 首页 Knowledge Base 三个入口指向 `/notes#web`、`/notes#iot` 和 `/notes#data-gateway`。

## 第二阶段首页

- [ ] 首页已替换第一阶段占位内容。
- [ ] 首页文案集中定义在 `src/config/home.ts`。
- [ ] Hero Section 已完成。
- [ ] Signal Visual 使用内联 SVG，且不使用外部图片、Canvas、WebGL 或 3D 库。
- [ ] Current Focus 三张卡片不是链接，不使用 interactive Card。
- [ ] Featured Project 使用真实截图 `public/images/projects/smart-home-interface.png`。
- [ ] Knowledge Base 三张卡片链接到 Notes 分类锚点，不虚构不存在的详情内容。
- [ ] About CTA 链接到 `/about`，不展示未经确认的联系方式。
- [ ] 首页只有一个 `h1`。
- [ ] 首页 section 使用 `aria-labelledby`。
- [ ] 深浅主题下首页均完整可读。
- [ ] 320px、375px、768px、1440px、1920px 视口无横向滚动。

## 交互与可访问性

- [ ] Header、nav、main、footer 层级正确。
- [ ] Skip to content 可用。
- [ ] 主题切换可用。
- [ ] 移动导航可用。
- [ ] 键盘可操作导航和主题切换。
- [ ] focus-visible 清晰。
- [ ] 320px 宽度无横向滚动。
- [ ] 支持 `prefers-reduced-motion`。
- [ ] 移动导航打开后聚焦第一个链接，Escape 关闭后焦点回到菜单按钮。
- [ ] Theme Toggle 可在深浅主题之间切换。
- [ ] 项目、笔记、关于 CTA 链接可用。

## 验证命令

- [ ] `npm install`
- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run build`
- [ ] `npm run check`
- [ ] `git diff --check`
- [ ] `git status --short`
