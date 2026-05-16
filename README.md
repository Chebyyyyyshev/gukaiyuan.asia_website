# gukaiyuan.asia_website

个人技术网站（静态站点），用于展示技术文章、专题笔记和联系方式。

## 当前技术栈
- HTML5
- CSS3
- JavaScript（原生）
- Markdown 渲染：marked + DOMPurify + highlight.js

## 目录结构
- `index.html`：主页（简介）
- `blogs.html`：博客列表与 Markdown 阅读
- `contact.html`：联系方式与留言表单（前端演示）
- `css/style.css`：全站公共样式
- `js/app.js`：全站公共交互逻辑
- `md/`：博客 Markdown 内容
- `notes/iot/`：物联网专题页面与代码文档页

## 已完成优化（2026-05-16）
- 修复博客 Markdown 死链，补齐 `md/article1~3.md`
- 修复 `notes/iot` 子页资源 404
- 增强 Markdown 渲染安全（DOMPurify + 白名单文件校验）
- 统一暗黑模式存储键，跨页面状态一致
- 优化主页面脚本加载，移除无用依赖
- 增强可访问性（skip link、语义化按钮、表单 label）

## 后续可选增强
- 增加 sitemap.xml 与 robots.txt
- 将留言表单接入后端接口（当前为前端演示）
- 增加自动化测试（链接检查、HTML 校验）
