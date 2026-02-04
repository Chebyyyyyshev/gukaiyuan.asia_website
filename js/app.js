// 页面所有功能入口 - DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // ========== 1. 暗黑/亮色模式切换 + 本地记忆 【核心新增】 ==========
    const modeBtn = document.querySelector('.mode-btn');
    const html = document.documentElement;
    // 读取本地存储的模式
    const saveMode = localStorage.getItem('siteMode');
    if (saveMode === 'dark') {
        html.classList.add('dark');
        modeBtn.textContent = '☀️ 亮色模式';
    }
    // 切换模式
    modeBtn.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            modeBtn.textContent = '🌙 暗黑模式';
            localStorage.setItem('siteMode', 'light');
        } else {
            html.classList.add('dark');
            modeBtn.textContent = '☀️ 亮色模式';
            localStorage.setItem('siteMode', 'dark');
        }
    });

    // ========== 2. 回到顶部 + 阅读进度条 【核心新增】 ==========
    const backTop = document.querySelector('.back-to-top');
    const progressBar = document.querySelector('.progress-bar');
    window.addEventListener('scroll', () => {
        // 回到顶部显隐
        if (window.scrollY > 300) {
            backTop.classList.add('show');
        } else {
            backTop.classList.remove('show');
        }
        // 阅读进度条计算
        const scrollH = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (window.scrollY / scrollH) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
    // 点击回到顶部 + 平滑滚动
    backTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ========== 3. 全局平滑滚动 【新增】 ==========
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ========== 4. 博客页核心功能：加载解析MD文章+代码高亮+代码复制 【核心新增】 ==========
    const readBtns = document.querySelectorAll('.read-btn');
    const mdContent = document.querySelector('.markdown-content');
    if (readBtns.length > 0) {
        readBtns.forEach(btn => {
            btn.addEventListener('click', async () => {
                const mdPath = btn.getAttribute('data-md');
                try {
                    const res = await fetch(mdPath);
                    if (!res.ok) throw new Error('文章加载失败，请检查文件路径');
                    const mdText = await res.text();
                    // 解析MD并高亮代码
                    marked.setOptions({
                        highlight: (code, lang) => lang ? hljs.highlight(code, { language: lang }).value : hljs.highlightAuto(code).value
                    });
                    const safeHtml = DOMPurify.sanitize(marked.parse(mdText));
                    mdContent.innerHTML = safeHtml;
                    mdContent.classList.add('show');
                    // 滚动到文章区域
                    mdContent.scrollIntoView({ behavior: 'smooth' });
                    // 给代码块加复制按钮
                    document.querySelectorAll('pre').forEach(pre => {
                        const copyBtn = document.createElement('button');
                        copyBtn.className = 'copy-code';
                        copyBtn.textContent = '复制代码';
                        copyBtn.onclick = () => {
                            const code = pre.querySelector('code').textContent;
                            navigator.clipboard.writeText(code);
                            copyBtn.textContent = '复制成功!';
                            setTimeout(() => copyBtn.textContent = '复制代码', 2000);
                        };
                        pre.appendChild(copyBtn);
                    });
                } catch (err) {
                    mdContent.innerHTML = `<h3>加载失败</h3><p>${err.message}</p>`;
                    mdContent.classList.add('show');
                }
            });
        });
    }

    // ========== 5. 博客页：文章关键词搜索功能 【新增】 ==========
    const searchInput = document.getElementById('article-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase();
            document.querySelectorAll('.article-card').forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();
                card.style.display = (title.includes(keyword) || desc.includes(keyword)) ? 'block' : 'none';
            });
        });
    }

    // ========== 6. 联系页：留言表单提交提示 【新增】 ==========
    const msgForm = document.getElementById('msg-form');
    if (msgForm) {
        msgForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('留言发送成功！感谢您的反馈，我会尽快回复您～');
            msgForm.reset();
        });
    }

    // ========== 7. 版权年份自动更新 【保留+优化】 ==========
    const footerText = document.querySelector('footer p');
    if (footerText) {
        const year = new Date().getFullYear();
        footerText.textContent = `© ${year} gukaiyuan.asia - 所有权利保留`;
    }

    console.log('技术空间 - 所有功能加载完成 ✔️');
});

