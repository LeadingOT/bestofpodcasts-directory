# 🎧 Best of Podcasts Directory (2026)

This is a comprehensive podcast directory built with Astro and TailwindCSS. It includes detailed listings for 30+ top podcasts, pSEO pages for categories, and a blog section.

## 🚀 Deployment Instructions

### 1. GitHub Repository
Create a new repository and push the code:
```bash
cd bestofpodcasts-directory
# Initialize git (already done)
# Add remote
git remote add origin git@github.com:yourusername/bestofpodcasts-directory.git
# Push
git push -u origin main
```

### 2. Vercel Deployment
Deploy using Vercel CLI or connect your GitHub repo:
```bash
vercel --prod
```
Or via dashboard: New Project -> Import Git Repo.

### 3. Environment Configuration
Update `astro.config.mjs` with your production URL:
```js
export default defineConfig({
  site: 'https://bestofpodcasts.com',
  // ...
});
```

### 4. SEO & Analytics
- **GA4:** Replace `G-XXXXXXXXXX` in `src/layouts/BaseLayout.astro`.
- **GSC:** Add verification meta tag in `src/layouts/BaseLayout.astro`.
- **IndexNow:** Verify `public/a7b8c9d0e1f234567890abcdef123456.txt` with Bing/Yandex.

## 📁 Project Structure
- `src/content/listings/`: JSON files for each podcast (30+ generated).
- `src/pages/category/[category].astro`: Dynamic category pages.
- `src/pages/best-podcasts-for-[category].astro`: pSEO template #1.
- `src/pages/top-[category]-podcasts-2026.astro`: pSEO template #2.
- `src/pages/blog/`: 4 SEO-optimized blog posts.

## 📝 Generated Content
- **Categories:** True Crime, Business, Comedy, Technology, Health, Education, News, Sports.
- **Top Podcasts:** Serial, Huberman Lab, Joe Rogan, The Daily, etc.

## 🛠 Tech Stack
- **Framework:** Astro 5.0
- **Styling:** TailwindCSS 4.0
- **Content:** Markdown & JSON Collections
- **Deployment:** Vercel (Serverless/Static)
