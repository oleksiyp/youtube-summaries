# YouTube Summaries Blog - Development Guide

Multilingual static blog for YouTube video summaries with GitHub Pages deployment.

## Tech Stack

- **Framework:** Next.js 16 (App Router) with TypeScript
- **Styling:** Tailwind CSS 4
- **Content:** Markdown with gray-matter frontmatter parsing
- **Deployment:** GitHub Actions → GitHub Pages (static export)
- **Languages:** English, Russian, Polish (easily extensible)

## Architecture

### Content System

**File Structure:** `content/slug.lang.md`
- Single directory for all content
- Language extension pattern (`.en.md`, `.ru.md`, `.pl.md`)
- Optional translations - posts can exist in 1, 2, or all languages
- Smart fallback to available language if requested translation missing

**Post Schema:**
```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
videoUrl: "https://youtube.com/watch?v=..."
---
Markdown content here
```

### Language Configuration

All language config centralized in `config/languages.ts`:

```typescript
export const languages: LanguageConfig[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
];
```

**To add a language:**
1. Add entry to `languages` array
2. Add translations in `lib/i18n.ts`
3. Create content files with new language code

No route or component changes needed!

### Routing

- `/` - Language selector (home page)
- `/[lang]` - Post listing for language
- `/[lang]/[slug]` - Individual post

Static params generated for all combinations of languages × posts at build time.

### Data Flow

```
Build Time:
  content/*.md → lib/posts.ts → generateStaticParams() → Static HTML

Runtime (Static):
  User requests → Pre-rendered HTML from /out directory
```

## Development

### Setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Static export to /out
```

### Adding Content

Create files following pattern: `content/my-post.en.md`

Required frontmatter: `title`, `date`
Optional: `videoUrl`

Translations are optional - just create additional `.ru.md` or `.pl.md` files.

### Key Files

- `config/languages.ts` - Language definitions
- `lib/posts.ts` - Content loading logic
- `lib/i18n.ts` - UI translations
- `app/[lang]/page.tsx` - Post listing
- `app/[lang]/[slug]/page.tsx` - Post detail with markdown rendering

## Deployment

### GitHub Pages

Automatic deployment via `.github/workflows/deploy.yml`:
1. Triggers on push to `main`
2. Builds static site with `npm run build`
3. Deploys `/out` directory to GitHub Pages

**Setup:**
- Repository Settings → Pages → Source: "GitHub Actions"
- Pushes to `main` auto-deploy
- Available at `https://username.github.io/repo-name/`

**For repository path deployment:**
Update `next.config.ts` with `basePath` and `assetPrefix`.

**For custom domain:**
Add `public/CNAME` file with domain name.

### CI/CD

- `deploy.yml` - Production deployment to Pages
- `test.yml` - PR build validation

## Features

### Multilingual Support
- Language switcher on all pages
- Shows available translations with flags
- Automatic fallback with warning banner
- Post listing shows translation availability

### Content Management
- Single directory structure
- Optional translations per post
- Markdown with basic HTML rendering
- Frontmatter metadata

### Static Generation
- All pages pre-rendered at build time
- SEO-friendly
- Fast loading
- No runtime dependencies

## Customization

### Styling
Edit `app/globals.css` for design changes.

### Markdown Rendering
Simple converter in `app/[lang]/[slug]/page.tsx`.
For advanced features, consider `react-markdown` or `marked`.

### Adding Features
- RSS feed: Create `app/rss.xml/route.ts`
- Search: Add client-side search component
- Analytics: Add to `app/layout.tsx`
- Comments: Integrate Giscus or similar

## Project Patterns

### Language Abstraction
Never hardcode language codes. Always:
- Import from `config/languages.ts`
- Use helper functions from `lib/i18n.ts`
- Map over `languages` array for UI elements

### Type Safety
- String-based language codes (not enum) for extensibility
- Post interface includes `availableLanguages` array
- Promise-based params for Next.js 15+ compatibility

### Build Optimization
- Static export (`output: 'export'`)
- Unoptimized images (no Image Optimization API on static hosts)
- All paths generated at build time

## Common Tasks

**Add new language:**
1. `config/languages.ts` - Add to array
2. `lib/i18n.ts` - Add translation object
3. Create content: `content/*.{newlang}.md`

**Change design:**
- Colors/fonts: `app/globals.css`
- Layout: Individual page files in `app/`
- Components: Extract to `components/` if needed

**Debug build:**
```bash
npm run build
cd out
python3 -m http.server 8000
```

## Notes

- Content loaded at build time only - restart dev server after content changes
- Uses React 19 + Next.js 16 `use()` API for async params
- Tailwind CSS 4 with PostCSS plugin (`@tailwindcss/postcss`)
- ES Modules (`"type": "module"` in package.json)

## Future Enhancements

- Replace simple markdown parser with full-featured library
- Add RSS/Atom feed generation
- Implement search functionality
- Add tag/category system
- Create admin panel for content management
- Add reading time estimates
- Implement share buttons

---

Generated with [Claude Code](https://claude.ai/code)
via [Happy](https://happy.engineering)
