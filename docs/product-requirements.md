# Product Requirements

## 定位

新版网站定位为：个人主页 + 项目作品集 + 科研档案 + 技术知识库。

## 第一阶段目标

- 建立 Next.js App Router 工程基础。
- 归档旧站到 `legacy-site/`，保留迁移来源。
- 建立项目规则与规划文档。
- 创建 Home、Projects、Research、Notes、Blog、About 六个路由。
- 建立全局 Header、Footer、Theme Toggle、Skip to content、页面标题、卡片和空状态组件。
- 验证本地开发、lint、typecheck 和 build。

## 第五阶段目标

- 使用用户确认的信息完成 About 与 Contact 区域。
- 将姓名、简介、关注方向和公开联系方式集中为类型安全配置。
- 公开已确认的邮箱、GitHub、学校与所在地；隐藏微信和简历。
- 建立 canonical、Open Graph、Twitter Card 与 Person JSON-LD。
- 从固定公开页面、Projects registry 和 Notes registry 生成 sitemap。
- 建立只引用正式域名的 robots 配置。
- 检查公开页面的 title、description、h1、canonical、内部链接、响应式和可访问性。

## 非目标

- 不迁移正式文章正文。
- 不创建独立 Lab 页面。
- 不虚构个人信息、联系方式、研究成果、项目数量或访问数据。
- 不接入数据库、邮件、后端 API、Analytics 或搜索服务。
- 不修改 Netlify 后台、DNS 或生产环境。
- 不实现联系表单、Blog 正文、Research 正文、RSS 或多语言系统。

## 页面范围

- `/`：正式首页。
- `/projects`：项目作品集索引与一个真实项目详情。
- `/research`：科研档案空状态，不进入导航、Footer 或 sitemap。
- `/notes`：技术知识库索引与 7 篇 Notes 详情。
- `/blog`：文章栏目空状态，不进入导航、Footer 或 sitemap。
- `/about`：个人介绍、网站说明与公开联系方式。
- `/sitemap.xml`：公开页面、项目与笔记路由索引。
- `/robots.txt`：公开抓取规则。

## 成功标准

- 旧站完整位于 `legacy-site/`。
- 新版工程可安装、可运行、可构建。
- 六个规划路由存在。
- 深浅主题和移动导航可用。
- 无虚构内容。
- About 只显示用户确认的个人资料与联系方式。
- 公开页面 canonical 使用 `https://gukaiyuan.asia`。
- sitemap 不包含空 Blog、Research、404、旧站或预览域名。
- `npm run lint`、`npm run typecheck`、`npm run build`、`npm run check` 通过。
