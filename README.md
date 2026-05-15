# AI Daily Archive

本项目是一个纯静态的 AI Daily 网页归档，可以托管到 GitHub Pages、Vercel、Netlify 或 Cloudflare Pages。

## 本地预览

```bash
python3 -m http.server 8765
```

打开：

```text
http://localhost:8765/
```

## 推荐部署方式

### 方式一：GitHub Pages

适合想要一个稳定免费 URL，并且每天通过 git push 更新网页内容。

1. 在 GitHub 创建一个新仓库。
2. 把本目录 push 到该仓库。
3. 在 GitHub 仓库设置里打开 `Pages`。
4. Source 选择 `Deploy from a branch`，分支选择 `main`，目录选择 `/root`。
5. GitHub 会生成一个类似 `https://<username>.github.io/<repo>/` 的网址。

如果未来定时任务要自动刷新云端网页，需要在任务生成日报后提交并 push 更新后的 `app.js`。

### 方式二：Vercel

适合想要简单绑定域名、自动部署。

1. 把项目推到 GitHub。
2. 在 Vercel 导入该仓库。
3. Framework 选择 `Other` 或保留默认静态站。
4. Build command 留空，Output directory 使用项目根目录。

### 方式三：Netlify

适合静态站，配置文件已包含 `netlify.toml`。

1. 把项目推到 GitHub。
2. 在 Netlify 导入该仓库。
3. Publish directory 使用项目根目录。
4. Build command 留空。

## 自动更新云端的关键点

当前日报定时任务会把新内容写入本地 `app.js`。如果网页托管到云端，还需要增加一个同步步骤：

```bash
git add app.js
git commit -m "Update AI daily archive"
git push
```

平台会在 push 后自动部署新版本。
