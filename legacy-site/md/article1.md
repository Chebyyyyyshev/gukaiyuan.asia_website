# JavaScript 异步编程全解

异步编程的核心不是语法，而是对执行顺序和错误传播的掌控。

## 1. 从回调到 Promise

早期的回调函数在流程增长后会出现可读性下降和错误处理分散的问题。Promise 把状态（pending/fulfilled/rejected）标准化，并允许链式组织逻辑。

```js
function fetchUser(id) {
  return fetch(`/api/users/${id}`).then((res) => {
    if (!res.ok) throw new Error("请求失败");
    return res.json();
  });
}
```

## 2. async/await 的价值

`async/await` 在语义上更接近同步代码，尤其适合处理串行任务和统一异常捕获。

```js
async function loadDashboard() {
  try {
    const user = await fetchUser(1001);
    console.log("当前用户", user);
  } catch (error) {
    console.error("加载失败", error);
  }
}
```

## 3. 常见陷阱

- `await` 只会等待 Promise，不会阻塞整个线程。
- `forEach` 配合 `await` 不会按预期串行执行，应使用 `for...of`。
- 需要并发时优先使用 `Promise.all`，但要注意任一失败会整体 reject。

## 4. 实战建议

- 约定接口层统一抛出异常，页面层统一提示。
- 并发请求用 `Promise.allSettled` 可提升容错。
- 给关键异步链加超时和重试策略。
