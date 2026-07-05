# Deployment Plan

## 当前分支关系

- `main`：正式网站分支。
- `redesign`：新版开发分支，对应 Netlify Branch Deploy。

## Netlify 策略

本项目将通过 Netlify 部署完整 Next.js 应用。

当前阶段：

- 不使用静态导出。
- 不安装旧版 Netlify Next.js 插件。
- 不配置 `@netlify/plugin-nextjs`。
- 不创建 Netlify Functions。
- 不创建 API Route。
- 不修改 Netlify 后台设置。
- 不修改域名或 DNS。
- 不创建 `netlify.toml`，优先依赖 Netlify 对现代 Next.js 的自动识别。

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

- Netlify Branch Deploy 的具体环境变量和构建设置。
- 是否需要在后续阶段增加重定向规则。
- 是否需要外部服务承载联系表单。
