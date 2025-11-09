# YouTube Video Summaries Blog

A multilingual static blog for YouTube video summaries with support for English, Russian, and Polish. Features optional translations per post and automatic GitHub Pages deployment.

## Features

- **Multilingual support** - Easily extensible language system
- **Optional translations** - Posts can have 1, 2, or 3 language versions
- **Smart fallback** - Shows available translation if requested language not available
- **Static site generation** - Fast, SEO-friendly with Next.js
- **GitHub Pages ready** - Automatic deployment via GitHub Actions
- **Clean UI** - Responsive design with Tailwind CSS
- **Language indicators** - See which translations are available for each post

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Production Build

```bash
npm run build
```

This generates a static site in the `out/` directory.

## Content Structure

All content files live in the `content/` directory with language-specific extensions:

```
content/
├── my-post.en.md       # English version
├── my-post.ru.md       # Russian version (optional)
├── my-post.pl.md       # Polish version (optional)
├── another-post.en.md  # This post only in English
└── third-post.ru.md    # This post only in Russian
```

### Adding a New Summary

Create markdown files with the pattern `slug.lang.md`:

**Example:** `content/productivity-tips.en.md`

```markdown
---
title: "10 Productivity Tips from YouTube"
date: "2024-01-15"
videoUrl: "https://www.youtube.com/watch?v=example"
---

# Summary

Your summary content here in markdown format.

## Key Points

* Point 1
* Point 2
* Point 3

## Detailed Notes

More content...
```

**Optional translations:** Create `productivity-tips.ru.md` and/or `productivity-tips.pl.md` with the same structure but translated content.

### Front Matter Fields

- `title` - The title of your summary (required)
- `date` - Publication date in YYYY-MM-DD format (required)
- `videoUrl` - YouTube video URL (optional)

## Project Structure

```
youtube-summaries/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── app/
│   ├── [lang]/             # Language-specific routes
│   │   ├── [slug]/         # Individual post pages
│   │   │   └── page.tsx
│   │   └── page.tsx        # Post listing
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (language selector)
│   └── globals.css         # Global styles
├── config/
│   └── languages.ts        # Language configuration
├── content/
│   └── *.{lang}.md         # Markdown files (e.g., post.en.md)
├── lib/
│   ├── posts.ts            # Post fetching logic
│   └── i18n.ts             # Translations
└── next.config.ts          # Next.js config (static export)
```

## GitHub Pages Deployment

### Setup

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. Push to `main` branch to trigger deployment

The workflow automatically builds and deploys on every push to `main`.

### Custom Domain

If using a custom domain, add a `CNAME` file to the `public/` directory:

```bash
echo "yourdomain.com" > public/CNAME
```

### Repository Name Setup

If deploying to `https://username.github.io/repo-name/`, update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/repo-name',
  assetPrefix: '/repo-name',
};
```

## Adding More Languages

All language configuration is centralized in `config/languages.ts`:

1. **Add to language config:**
   ```typescript
   export const languages: LanguageConfig[] = [
     { code: 'en', name: 'English', flag: '🇬🇧' },
     { code: 'ru', name: 'Русский', flag: '🇷🇺' },
     { code: 'pl', name: 'Polski', flag: '🇵🇱' },
     { code: 'de', name: 'Deutsch', flag: '🇩🇪' },  // New language
   ];
   ```

2. **Add translations in `lib/i18n.ts`:**
   ```typescript
   const translations: Translations = {
     // ... existing translations
     de: {
       title: 'YouTube Video Zusammenfassungen',
       allPosts: 'Alle Zusammenfassungen',
       // ... other translations
     },
   };
   ```

3. **Create content files:**
   ```
   content/post-name.de.md
   ```

That's it! No need to modify routes or components.

## Customization

### Styling

Edit `app/globals.css` to customize colors, fonts, and layout.

### Markdown Rendering

The simple markdown renderer is in `app/[lang]/[slug]/page.tsx`. For more features, consider installing a library like `react-markdown` or `marked`.

## Local Development Tips

- Content files are read at build time, so restart dev server after adding new posts
- The site automatically generates all language/post combinations
- Posts without a translation fall back to any available language

## Deployment Options

Besides GitHub Pages, you can deploy to:
- **Vercel** - Connect your GitHub repo
- **Netlify** - Drag & drop the `out/` folder
- **Cloudflare Pages** - Connect to Git
- **Any static host** - Upload `out/` directory

## License

MIT

---

Generated with [Claude Code](https://claude.ai/code) via [Happy](https://happy.engineering)
