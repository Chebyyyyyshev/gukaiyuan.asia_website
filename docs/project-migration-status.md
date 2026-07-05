# Project Migration Status

本文档记录第四阶段 Projects 内容迁移状态。当前只迁移一个可核查项目案例：智能家居 IoT 系统。

## 已迁移项目

| 项目 | 旧内容来源 | 新路由 | 状态 | 是否包含代码 | 是否修改 legacy |
| --- | --- | --- | --- | --- | --- |
| 智能家居 IoT 系统 | `legacy-site/notes/iot/index.html#chapter4-1` 到 `#chapter4-4`；`legacy-site/notes/iot/code_gateway.md` | `/projects/smart-home-iot` | 已迁移为项目原型案例 | 项目页只概述，详细代码由 Notes 承接 | 否 |

## 图片迁移

| 旧资源 | 新资源 | 状态 | 说明 |
| --- | --- | --- | --- |
| `legacy-site/pictures/ui-interface.png` | `public/images/projects/smart-home-interface.png` | 已存在且哈希一致 | 作为智能家居客户端原型界面截图使用 |
| `legacy-site/pictures/ui界面.png` | 未单独公开 | 重复图片 | 与 `ui-interface.png` 哈希一致，当前不重复复制 |

截图中包含旧界面的服务器 IP 与端口字段。仓库资料无法确认其性质，因此项目页只将其描述为旧界面字段，不推断部署状态，不伪造替代信息。

## 相关 Notes

项目通过 Projects registry 关联以下 Notes：

- `/notes/iot/data-acquisition-and-gateway`
- `/notes/iot/communication-protocols`
- `/notes/embedded/development-boards`

三篇 Notes 已加入克制的“相关项目”入口，指向 `/projects/smart-home-iot`。

## 迁移内容

已迁移为项目案例的内容：

- 项目概况与目标。
- 可核查的系统组成。
- 数据流与模块关系。
- 客户端原型界面。
- 网关与数据采集实现概述。
- 当前局限。
- 可继续改进方向。

未迁移或未重复迁移的内容：

- 物联网基础、通信协议和嵌入式开发板知识不重复写入项目正文，由 Notes 承接。
- 网关 C 代码不在项目页重复大段复制，由 `/notes/iot/data-acquisition-and-gateway` 承接。
- 未创建第二个虚构项目。
- 未创建在线演示、后端、数据库、搜索、评论、用户系统或实时 IoT 数据接入。

## 待人工核查

- 旧资料中提到的实验箱、平台、云服务和工具链是否均适合长期公开展示。
- 旧截图中的服务器 IP 与端口字段是否需要在未来版本中做非破坏性遮挡。
- 网关代码是否完整，是否存在许可或来源约束。
- 是否需要为旧图片路径提供兼容访问。
