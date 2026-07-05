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

## 非目标

- 不迁移正式文章正文。
- 不创建独立 Lab 页面。
- 不虚构个人信息、联系方式、研究成果、项目数量或访问数据。
- 不接入数据库、邮件、后端 API、Analytics 或搜索服务。
- 不修改 Netlify 后台、DNS 或生产环境。

## 页面范围

- `/`：首页骨架。
- `/projects`：项目作品集骨架。
- `/research`：科研档案骨架，当前为空状态。
- `/notes`：技术知识库骨架。
- `/blog`：文章栏目骨架，当前不显示在主导航。
- `/about`：关于页面骨架。

## 成功标准

- 旧站完整位于 `legacy-site/`。
- 新版工程可安装、可运行、可构建。
- 六个规划路由存在。
- 深浅主题和移动导航可用。
- 无虚构内容。
- `npm run lint`、`npm run typecheck`、`npm run build`、`npm run check` 通过。
