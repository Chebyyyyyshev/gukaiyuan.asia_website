# Content Inventory

本清单只统计需要迁移或需要判断去留的正式内容。导航文字、按钮文字、页脚版权文字、表单字段标签不作为正式内容计入。

## 1. 内容状态说明

| 状态 | 含义 |
| --- | --- |
| 必须保留 | 对个人网站定位有明确价值，迁移时应保留核心信息 |
| 整理后保留 | 内容有价值，但需要改写、拆分、补充元数据或调整归类 |
| 占位内容 | 当前不是可发布的真实内容，不应原样迁移 |
| 重复内容 | 与其他文件或内容重复，应合并或设置主版本 |
| 可能失效 | 依赖、链接、代码或描述可能无法正常工作，需要修复或验证 |
| 需要人工确认 | 无法从仓库判断真实性、归属或最终去留 |

## 2. 主要内容清单

| 内容 | 当前位置 | 类型 | 建议迁移到 | 状态 | 说明 |
| --- | --- | --- | --- | --- | --- |
| 博主介绍 | `index.html` | 个人介绍 | About，首页摘要可复用 | 整理后保留 | 内容较泛化，没有真实姓名、研究方向、项目定位等具体信息 |
| 网站当前为静态版本、后续补充文章与项目复盘 | `index.html` | 站点说明 | About 或首页更新说明 | 整理后保留 | 可作为旧站说明，不适合长期作为首页核心文案 |
| 物联网学习记录卡片 | `blogs.html` | 专题入口摘要 | Notes 入口，Projects 可交叉链接 | 必须保留 | 当前是物联网专题唯一主入口 |
| JavaScript 异步编程全解 | `blogs.html`、`md/article1.md` | 技术文章/学习笔记 | Notes 或 Blog | 整理后保留 | 内容偏知识库和教程，建议迁入 Notes；如保留 Blog，可改为文章形式 |
| CSS3 布局与动效实践 | `blogs.html`、`md/article2.md` | 技术文章/学习笔记 | Notes 或 Blog | 整理后保留 | 内容偏前端知识库，适合 Notes |
| HTML5 语义化与 SEO 基础 | `blogs.html`、`md/article3.md` | 技术文章/学习笔记 | Notes 或 Blog | 整理后保留 | 内容偏知识库，适合 Notes |
| 物联网学习专题引言 | `notes/iot/index.html` | 专题说明 | Notes: IoT 专题首页 | 必须保留 | 是物联网专题的总述 |
| 物联网定义与核心特征 | `notes/iot/index.html#chapter1-1` | 学习笔记 | Notes: IoT 基础 | 必须保留 | 可作为知识库基础条目 |
| 物联网三层架构 | `notes/iot/index.html#chapter1-2` | 学习笔记 | Notes: IoT 架构 | 必须保留 | 需要补充结构化图或更准确图片 |
| 短距离通信协议 | `notes/iot/index.html#chapter2-1` | 学习笔记 | Notes: IoT 通信协议 | 必须保留 | 当前只是简述，后续可扩展为协议对比表 |
| 广域网通信协议 | `notes/iot/index.html#chapter2-2` | 学习笔记 | Notes: IoT 通信协议 | 必须保留 | 当前适合迁移为知识库条目 |
| STM32/ESP32 开发板选型 | `notes/iot/index.html#chapter3-1` | 学习笔记 | Notes: 嵌入式开发 | 整理后保留 | 可补充选型依据、硬件照片或参数表 |
| 传感器数据采集与上传 | `notes/iot/index.html#chapter3-2` | 学习笔记/代码文档入口 | Notes，关联 Project 代码页 | 必须保留 | 与网关代码文档关联紧密 |
| 智能家居项目概况与目标 | `notes/iot/index.html#chapter4-1` | 项目案例 | Projects: 智能家居/IoT 项目 | 必须保留 | 是当前最明确的项目作品集内容 |
| 智能家居软硬件环境支撑 | `notes/iot/index.html#chapter4-2` | 项目案例/技术档案 | Projects，Research 可引用 | 整理后保留 | 涉及实验箱、虚拟机、云平台和工具链，需要确认是否可公开 |
| 智能家居系统设计与成果 | `notes/iot/index.html#chapter4-3` | 项目案例 | Projects | 必须保留 | 是项目展示核心内容 |
| 智能家居总结与未来展望 | `notes/iot/index.html#chapter4-4` | 项目复盘 | Projects 或 Blog | 整理后保留 | 可改写成项目复盘或阶段总结 |
| 网关/串口通信 C 代码 | `notes/iot/code_gateway.md` | 代码文档 | Projects: 智能家居项目代码页；Notes 可引用 | 整理后保留 | 当前是裸代码文本，没有 Markdown 标题和代码围栏；代码依赖页面目前渲染失败 |
| 联系方式说明 | `contact.html` | 联系方式 | About: Contact 区块 | 占位内容 | 邮箱、GitHub、微信均为占位符，不应原样迁移 |
| 留言反馈表单 | `contact.html` | 交互演示 | 暂不迁移，或后续作为项目/功能 | 占位内容 | 当前无后端提交能力 |

## 3. 物联网专题分类建议

| 当前章节/内容 | 建议分类 | 理由 |
| --- | --- | --- |
| 第一章：物联网基础概念 | Notes | 概念解释和架构说明，属于长期知识库 |
| 第二章：通信协议与网络 | Notes | 协议对比和学习资料，属于知识库 |
| 第三章 3.1：开发板选型 | Notes | 嵌入式学习笔记，可扩展为硬件选型条目 |
| 第三章 3.2：传感器数据采集与上传 | Notes + 代码文档入口 | 是技术流程说明，同时连接代码实现 |
| `code_gateway.md` | 代码文档 | 应归入智能家居项目的技术实现页，并从 Notes 中交叉引用 |
| 第四章：智能家居项目实战 | Projects | 包含项目目标、环境、系统设计、成果和复盘，是作品集内容 |
| 物联网专题总述 | Notes 专题首页 | 作为知识库专题 landing 页面，不建议作为独立实验室页面 |
| 后续展望 | Blog 或 Projects 复盘 | 若改写为阶段总结，可放 Blog；若保留在项目页，可作为 Project Roadmap |

## 4. 图片与图标

| 资源 | 当前使用 | 状态 | 迁移建议 |
| --- | --- | --- | --- |
| `pictures/sensors_data.png` | 在物联网基础、协议、开发板小节重复使用 3 次 | 整理后保留 / 需要人工确认 | 实际内容是 UART 数据结构截图，不符合当前 alt 描述。适合迁到代码文档或串口通信说明，不适合作为架构图或协议图 |
| `pictures/ui-interface.png` | 在智能家居项目 3 个小节重复使用 | 必须保留 / 整理后保留 | 实际是智能家居 PC 客户端界面截图，适合作为项目成果图；重复使用处应补充不同阶段图片或只保留一次 |
| `pictures/ui界面.png` | 未被页面引用 | 重复内容 | 与 `ui-interface.png` 哈希完全相同。迁移时保留一个规范文件名即可，但当前阶段不删除 |
| Emoji/箭头按钮 | 暗黑模式、回到顶部、返回按钮 | 不作为正式图标内容 | 新版可用统一图标库或组件替换 |

图片尺寸与重复性：

| 资源 | 尺寸 | 说明 |
| --- | --- | --- |
| `sensors_data.png` | 942 x 562 | UART 结构说明截图 |
| `ui-interface.png` | 823 x 526 | 智能家居 UI 截图 |
| `ui界面.png` | 823 x 526 | 与 `ui-interface.png` 完全相同 |

## 5. 代码示例

| 内容 | 位置 | 状态 | 说明 |
| --- | --- | --- | --- |
| JavaScript fetch/async 示例 | `md/article1.md` | 整理后保留 | 适合知识库文章；示例使用 `/api/users/:id`，属于说明性示例 |
| CSS Grid/Flex/响应式示例 | `md/article2.md` | 整理后保留 | 适合 Notes |
| 物联网串口 C 代码 | `notes/iot/code_gateway.md` | 整理后保留 / 可能失效 | 代码需要格式化成 Markdown code fence；是否完整、是否可编译需要人工确认 |

## 6. 下载文件

未发现 PDF、ZIP、DOCX、XLSX、PPTX 或其他下载文件。当前没有需要迁移的下载资源。

## 7. 联系方式

| 内容 | 位置 | 状态 | 说明 |
| --- | --- | --- | --- |
| `your_email@example.com` | `contact.html` | 占位内容 | 不迁移为真实联系方式 |
| `https://github.com/yourname` | `contact.html` | 占位内容 / 需要人工确认 | 链接本身 HTTP 可访问，但不能确认是否属于站点作者 |
| `your_wechat_id` | `contact.html` | 占位内容 | 不迁移为真实联系方式 |

## 8. SEO 信息

| 页面 | 当前 SEO 状态 | 迁移建议 |
| --- | --- | --- |
| `index.html` | 有 `title` 和 `meta description` | 需要重写为新版 Home/About 的准确描述 |
| `blogs.html` | 有 `title` 和 `meta description` | 新版 Blog/Notes 分流后需要分别设置元数据 |
| `contact.html` | 有 `title` 和 `meta description` | 若迁移到 About，应合并为 About 页元数据 |
| `notes/iot/index.html` | 有 `title`，无 `meta description` | 必须补充专题描述 |
| `notes/iot/code_gateway.html` | 有 `title`，无 `meta description` | 若保留独立代码页，应补充描述并修复代码渲染 |

全站未发现：

- `sitemap.xml`
- `robots.txt`
- canonical URL
- Open Graph 元数据
- Twitter Card 元数据
- 结构化数据

## 9. 内容数量汇总

| 类型 | 数量 |
| --- | --- |
| HTML 页面 | 5 |
| Markdown 内容文件 | 4 个正式内容文件，另有 README |
| 当前博客/文章卡片 | 4 个，其中 1 个是物联网专题入口 |
| 物联网专题章节 | 4 章 |
| 物联网专题小节 | 10 个小节 |
| 明确项目案例 | 1 个：智能家居/IoT 项目 |
| 代码文档 | 1 个：`code_gateway.md` |
| 图片文件 | 3 个文件，2 个唯一图片 |
| 下载文件 | 0 |
