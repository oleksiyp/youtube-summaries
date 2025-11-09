# Quick Start Guide

## Create Your First Post

1. **Create a new file in the `content/` directory:**

   ```bash
   touch content/my-first-post.en.md
   ```

2. **Add content:**

   ```markdown
   ---
   title: "My First YouTube Summary"
   date: "2024-11-09"
   videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
   ---

   # What I Learned

   This video taught me about...

   ## Key Takeaways

   * First important point
   * Second important point
   * Third important point
   ```

3. **Add translations (optional):**

   ```bash
   # Russian version
   touch content/my-first-post.ru.md

   # Polish version
   touch content/my-first-post.pl.md
   ```

   Use the same frontmatter structure but translate the content.

4. **Run development server:**

   ```bash
   npm run dev
   ```

   Visit http://localhost:3000

## Deploy to GitHub Pages

1. **Create a new repository on GitHub**

2. **Initialize git and push:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Under "Source", select "GitHub Actions"

4. **That's it!** Your site will be available at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## File Naming Convention

```
content/
  slug.en.md     # English (required for this slug)
  slug.ru.md     # Russian (optional)
  slug.pl.md     # Polish (optional)
```

The `slug` becomes the URL: `https://yoursite.com/en/slug`

## Tips

- **Date format:** Always use `YYYY-MM-DD` format
- **Video URLs:** Can be any YouTube URL format
- **Markdown:** Supports headings, bold, italic, lists, and links
- **Build time:** Content is read during build, so restart dev server after changes
- **Translations:** Don't need all languages for every post - add what you have

## Common Issues

**Build fails?**
- Check your markdown frontmatter syntax (YAML)
- Ensure dates are in correct format
- Make sure all quote marks are properly closed

**Changes not showing?**
- Restart the dev server (`Ctrl+C` then `npm run dev`)
- Content is loaded at build time, not runtime

**GitHub Pages not updating?**
- Check the Actions tab in your repository for build errors
- Make sure you selected "GitHub Actions" as the source in Pages settings

## Next Steps

1. Add your own video summaries
2. Customize the design in `app/globals.css`
3. Add more languages in `config/languages.ts`
4. Share with friends!
