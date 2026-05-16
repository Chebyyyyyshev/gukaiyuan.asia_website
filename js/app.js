document.addEventListener("DOMContentLoaded", () => {
    const THEME_KEY = "siteMode";
    const modeBtn = document.querySelector(".mode-btn");
    const html = document.documentElement;

    const updateModeLabel = () => {
        if (!modeBtn) {
            return;
        }
        modeBtn.textContent = html.classList.contains("dark") ? "☀️ 亮色模式" : "🌙 暗黑模式";
    };

    if (localStorage.getItem(THEME_KEY) === "dark") {
        html.classList.add("dark");
    }
    updateModeLabel();

    if (modeBtn) {
        modeBtn.addEventListener("click", () => {
            html.classList.toggle("dark");
            localStorage.setItem(THEME_KEY, html.classList.contains("dark") ? "dark" : "light");
            updateModeLabel();
        });
    }

    const backTop = document.querySelector(".back-to-top");
    const progressBar = document.querySelector(".progress-bar");
    const syncScrollUi = () => {
        const scrollHeight = Math.max(document.body.scrollHeight - window.innerHeight, 0);
        const percent = scrollHeight === 0 ? 0 : Math.min((window.scrollY / scrollHeight) * 100, 100);

        if (progressBar) {
            progressBar.style.width = `${percent}%`;
        }
        if (backTop) {
            backTop.classList.toggle("show", window.scrollY > 320);
        }
    };

    window.addEventListener("scroll", syncScrollUi, { passive: true });
    syncScrollUi();

    if (backTop) {
        backTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            const target = targetId ? document.querySelector(targetId) : null;
            if (!target) {
                return;
            }
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    const mdButtons = Array.from(document.querySelectorAll("button[data-md]"));
    const mdContent = document.querySelector(".markdown-content");
    if (mdButtons.length > 0 && mdContent) {
        const allowedMarkdownFiles = new Set(
            mdButtons
                .map((button) => button.getAttribute("data-md"))
                .filter((path) => typeof path === "string" && path.length > 0),
        );

        const appendCopyButtons = () => {
            mdContent.querySelectorAll("pre").forEach((pre) => {
                if (pre.querySelector(".copy-code")) {
                    return;
                }
                const codeNode = pre.querySelector("code");
                if (!codeNode) {
                    return;
                }
                const copyBtn = document.createElement("button");
                copyBtn.type = "button";
                copyBtn.className = "copy-code";
                copyBtn.textContent = "复制代码";
                copyBtn.addEventListener("click", async () => {
                    try {
                        await navigator.clipboard.writeText(codeNode.textContent || "");
                        copyBtn.textContent = "复制成功";
                        setTimeout(() => {
                            copyBtn.textContent = "复制代码";
                        }, 1500);
                    } catch {
                        copyBtn.textContent = "复制失败";
                        setTimeout(() => {
                            copyBtn.textContent = "复制代码";
                        }, 1500);
                    }
                });
                pre.appendChild(copyBtn);
            });
        };

        mdButtons.forEach((button) => {
            button.addEventListener("click", async () => {
                const mdPath = button.getAttribute("data-md");
                if (!mdPath || !allowedMarkdownFiles.has(mdPath)) {
                    mdContent.innerHTML = "<h3>加载失败</h3><p>文章路径不在允许列表中。</p>";
                    mdContent.classList.add("show");
                    return;
                }

                try {
                    const response = await fetch(mdPath);
                    if (!response.ok) {
                        throw new Error("文章加载失败，请检查文件路径");
                    }
                    const mdText = await response.text();

                    marked.setOptions({
                        gfm: true,
                        breaks: true,
                    });

                    const rawHtml = marked.parse(mdText);
                    const safeHtml =
                        typeof DOMPurify !== "undefined" ? DOMPurify.sanitize(rawHtml) : rawHtml;
                    mdContent.innerHTML = safeHtml;

                    if (typeof hljs !== "undefined") {
                        mdContent.querySelectorAll("pre code").forEach((block) => {
                            hljs.highlightElement(block);
                        });
                    }
                    appendCopyButtons();
                    mdContent.classList.add("show");
                    mdContent.scrollIntoView({ behavior: "smooth", block: "start" });
                } catch (error) {
                    const message = error instanceof Error ? error.message : "未知错误";
                    mdContent.innerHTML = `<h3>加载失败</h3><p>${message}</p>`;
                    mdContent.classList.add("show");
                }
            });
        });
    }

    const searchInput = document.getElementById("article-search");
    if (searchInput) {
        searchInput.addEventListener("input", (event) => {
            const keyword = String(event.target.value || "").trim().toLowerCase();
            document.querySelectorAll(".article-card").forEach((card) => {
                const title = (card.querySelector("h3")?.textContent || "").toLowerCase();
                const desc = (card.querySelector("p")?.textContent || "").toLowerCase();
                card.style.display = title.includes(keyword) || desc.includes(keyword) ? "" : "none";
            });
        });
    }

    const msgForm = document.getElementById("msg-form");
    const formStatus = document.getElementById("form-status");
    if (msgForm) {
        msgForm.addEventListener("submit", (event) => {
            event.preventDefault();
            if (formStatus) {
                formStatus.textContent = "留言已收到，感谢你的反馈。";
            }
            msgForm.reset();
        });
    }

    const footerText = document.querySelector("footer p");
    if (footerText) {
        const year = new Date().getFullYear();
        footerText.textContent = `© ${year} gukaiyuan.asia - 所有权利保留`;
    }
});

