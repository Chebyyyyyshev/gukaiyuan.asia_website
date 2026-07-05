# Deployment Plan

## 当前分支关系

- `main`：正式网站分支，当前仍保留旧版静态网站。
- `redesign`：新版 Next.js 开发分支，对应 Netlify Branch Deploy。

## Netlify 项目背景

当前 Netlify 项目最初是为纯 HTML 静态网站创建的。由于站点架构已经从根目录静态 HTML 改为根目录 Next.js 应用，Netlify UI 中原有的构建命令和发布目录不会在架构改变后可靠地自动更新。

如果继续沿用旧静态站配置，Branch Deploy 可能发布错误目录，访问时会显示 Netlify 平台自己的通用 404，而不是项目中的 Next.js 404 页面。

## 当前 Netlify 配置

当前 Netlify Runtime 已设为 Next.js。

`redesign` Branch Deploy 的实际配置为：

- Build command：`npm run build`
- Publish directory：`.next`
- Runtime：Next.js

该配置只作用于 `redesign` 分支当前的 Branch Deploy，不修改 DNS、域名或 `main` 分支旧站部署。

## 文件化构建配置

仓库根目录使用 `netlify.toml` 明确声明构建命令和发布目录：

```toml
[build]
  command = "npm run build"
  publish = ".next"
```

该文件配置用于和当前 Netlify Branch Deploy 设置保持一致，确保 Netlify 对 `redesign` 分支执行 Next.js 构建，并发布 `.next` 目录。

## 当前阶段约束

- 不使用静态导出。
- 不配置 `output: "export"`。
- 不安装旧版 Netlify Next.js 插件。
- 不配置 `@netlify/plugin-nextjs`。
- 不创建 Netlify Functions。
- 不创建 API Route。
- 不添加不必要的 redirects。
- 不修改域名或 DNS。

## 分支影响

当前 `netlify.toml` 只存在于 `redesign` 分支，不影响 `main` 分支旧站部署。

当新版 Next.js 站点未来合并到 `main` 后，正式站将继续使用同一份 `netlify.toml`，以 `npm run build` 构建并发布 `.next`。

## 本地验证

上线前至少执行：

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm run check
git diff --check
```

还需要启动本地服务检查：

- `/`
- `/projects`
- `/research`
- `/notes`
- `/blog`
- `/about`
- 一个不存在的路径，确认 404 页面工作。

## 后续待确认

- Netlify Branch Deploy 的环境变量是否需要补充。
- 是否需要在后续阶段增加旧路径重定向规则。
- 是否需要外部服务承载联系表单。
