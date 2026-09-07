# Bonehead Labs

The independent studio website, built with React, Vite and Framer Motion. Bonehead Labs has the homepage; Apple Man Sam has its own campaign page. The site also contains games, the Instrumenta software preview, the studio story, a journal and contact details.

## Local development

Use Node.js 22 and npm, matching the deployment workflow.

```bash
npm ci
npm run dev
```

Development runs at http://localhost:3000.

## Review before publishing

```bash
npm run build:review
npm run preview:review
```

Open **http://localhost:4173**. When running in WSL, this address is also available from the Windows browser through WSL localhost forwarding. Vite also prints a network address if needed.

The review build goes into `.preview-dist/`, which is ignored by Git. The review server binds to all interfaces so the preview can be reached from the host machine. Stop it with Ctrl+C. These commands do not publish or modify the existing `dist/` deployment output.

After editing, run `npm run build:review` again and refresh the browser. Use the development server when you want live reload.

## Pages and content

| Address                | Content                                                     |
| ---------------------- | ----------------------------------------------------------- |
| `/`                    | Bonehead Labs studio homepage and featured work             |
| `/games`               | Apple Man Sam, early prototype teasers and previous demos   |
| `/games/apple-man-sam` | Dedicated Apple Man Sam campaign and gameplay gallery       |
| `/software`            | Instrumenta preview, tool filters and existing repositories |
| `/about`               | Founder, studio history and working philosophy              |
| `/blog`                | Searchable journal                                          |
| `/blog/:slug`          | Archived Markdown article                                   |
| `/contact`             | Email address, social links and email-draft helper          |

The earlier `/projects` address redirects to `/software`; `/apple-man-sam` redirects to the game campaign. Legacy hash links are recovered. Unknown pages have a designed not-found screen.

- `src/data/site.js`: external links, software descriptions and game gallery.
- `src/components/ProjectFeatures.jsx`: featured projects and intentionally brief game teasers.
- `src/components/UI.jsx`: shared controls, reveals and page metadata.
- `src/index.css`: design tokens, layouts, animation and responsive styles.
- `src/blog/posts/`: historical journal content. Filenames are permanent article URLs.
- `public/media/`: optimized copies of existing studio, game and Instrumenta artwork.
- `public/fonts/`: self-hosted fonts and their licences.

The contact form opens the visitor's email application with a draft; it does not submit to a server. Site motion respects the operating-system preference and can also be paused from the header.

## Production

```bash
npm run build
```

This builds `dist/`. The post-build script creates HTML entry pages with page-specific metadata and a sitemap, so direct links work on GitHub Pages. `public/404.html` handles uncatalogued paths and older links through the React router.

The GitHub Actions workflow builds and publishes on pushes to `main`. Commit the reviewed source changes and generated `dist/` output before pushing. The legacy `npm run deploy` helper stages only generated output, so source changes must already be committed when using it.

## Content review

See [SITE_REVIEW.md](SITE_REVIEW.md) for the design scope, source notes, teaser boundaries and validation notes.
