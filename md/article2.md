# CSS3 布局与动效实践

布局和动效要服务信息传达，而不是增加认知成本。

## 1. Grid 与 Flex 如何分工

- Grid 负责页面级二维结构。
- Flex 负责组件级一维对齐。

```css
.page {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
```

## 2. 响应式策略

优先采用移动端优先（mobile first）：先写小屏规则，再通过 `min-width` 扩展。

```css
.card {
  padding: 14px;
}

@media (min-width: 768px) {
  .card {
    padding: 20px;
  }
}
```

## 3. 动效使用原则

- 只给可交互元素加动效。
- 避免 `transition: all`，按属性精确声明。
- 位移动效优先用 `transform`，性能更稳定。

## 4. 交付检查清单

- 320px 到 1440px 是否都可读。
- 键盘焦点是否可见。
- 颜色对比度是否满足可访问性要求。
