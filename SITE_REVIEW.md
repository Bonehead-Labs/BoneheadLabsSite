# Website review — September 2026

The owner approved this redesign for publication on 7 September 2026, after reviewing the local preview.

## What changed

- Restored Bonehead Labs as the homepage, with an animated mascot, featured work, studio introduction and blog.
- Gave Apple Man Sam its own campaign at `/games/apple-man-sam`, with prominent homepage placement, Steam links and a keyboard-accessible screenshot gallery.
- Rebuilt all existing page layouts around charcoal, warm paper, cyan, local typography and the existing artwork. Instrumenta uses its own orange accent and existing product marks; Apple Man Sam uses green.
- Removed the research offering and its navigation. Removed invented premium-tool placeholders; retained the existing software repositories.
- Teased Ward Work and the next chapter of Bonehead Friend. Neither teaser contains prototype screenshots, detailed mechanics, release dates or a new download claim. The earlier public Bonehead Friend demo remains explicitly labelled as the original 2025 demo.
- Introduced Instrumenta and eight applications as an early software preview with a planned open source release. No licence, distribution package, model redistribution rights or availability is asserted.
- Added mobile navigation, reduced motion and animation pause, image enlargement, blog filtering/search, form labels and validation, a skip link and a not-found page.
- Added direct-route HTML files, per-page metadata, legacy link recovery, robots.txt and a sitemap.

## Copy and motion revision

The owner prefers direct, factual copy, with more artwork and icons and fewer words. Do not restore the repeating white text banner. Do not add numbered sections or decorative star/asterisk branding in future revisions. The current headings, marketing descriptions, navigation labels, teasers and page metadata have been rewritten in that voice. Historical blog articles retain their original text.

A large WebGL particle form now moves across the background, rotates and changes perspective as the reader scrolls. It uses cyan for the studio, green for games and orange for software. Rendering is capped at roughly 30 frames per second with fewer particles and lower pixel density on mobile; hidden tabs suspend rendering. Browsers without WebGL, or after graphics context loss, receive a static CSS fallback.

A mouse cursor with a trailing halo expands over links and buttons and contracts on press. Text fields, screenshot dialogs, keyboard use and touch devices retain native cursor behaviour. The global pause control and system reduced-motion setting disable the custom cursor and stop the particle animation.

## Artwork and density revision

Removed the repeating white banner and its animation/styles. Added three linked Apple Man Sam gameplay previews on the home and games pages, image cards for recent blog posts, and a gameplay image in the studio history. Instrumenta categories and prototype descriptions now use meaningful icons with short labels. The software artwork is larger, and studio, game and app descriptions are shorter. All imagery comes from existing site assets.

## Content sources inspected

All source-project work was read-only. No private source files, internal screenshots or project folders were copied into the website.

- Studio history: existing `src/pages/About.jsx` and the studio homepage before commit `c1d1680` (reviewed at `dae7230`). Founder identity, story, AI-assisted approach, existing demos, contact information and repository links are retained.
- Apple Man Sam: the site's existing version-three campaign art and screenshots, plus the [public Steam listing](https://store.steampowered.com/app/4293080/Apple_Man_Sam/) checked on 7 September 2026. Steam says “Coming soon” and offers a demo; the site's prior September release promise has been replaced accordingly.
- Ward Work: reviewed the project design and development notes. Public copy is limited to a working title, hospital setting, co-op play and physics-based interaction.
- Bonehead Friend: reviewed the project design and development notes. Public copy is limited to a desktop companion, physics and interaction. The visual uses the existing studio mascot.
- Instrumenta: reviewed suite documentation, individual application documentation and brand assets. The preview covers Imago, Motus, Ludere, Fabula, Forge3D, Luna, Discere and LearnChess. Product marks are optimized copies of the existing suite artwork.
- Journal articles remain historical. A dated archive note contextualizes old pricing, tools and project plans; shared article footers now point to software instead of the discontinued research offering.

## Assets and release boundaries

`public/media/` contains resized WebP versions of existing assets. Original source artwork remains intact. Local Inter and Space Grotesk fonts include their licence files in `public/fonts/`. No remote font or analytics service is introduced.

Instrumenta copy remains deliberately provisional. The owner approved the current teaser wording and future open source statement for publication; this does not constitute a software licensing review. The page supplies no unreviewed source/download link or promises about bundled voice/model rights.

## Preview

```bash
npm run build:review
npm run preview:review
```

Open http://localhost:4173. Output lives in `.preview-dist/`, separate from the checked-in deployment output. The active local preview server is left running for the owner's review.

## Validation

Browser captures and the local QA report are in the ignored `.review/` directory. These review files are not part of the published website. Validation includes production compilation, desktop/tablet/mobile layouts, image loading, page headings, accessibility checks, navigation, aliases, filters, search, gallery controls, dialog focus, contact validation and motion preferences.

Final validation completed:

- Production review build passed; 13 direct-route HTML entry pages and a 12-entry canonical sitemap generated.
- Inspected 10 routes at 1440, 768, 390 and 320 pixels wide. No broken images or browser runtime errors.
- Checked the rewritten pages across 40 route/viewport combinations; the accessibility audits at desktop and mobile widths reported no WCAG 2 A/AA or 2.1 AA axe violations. A narrow Instrumenta heading was corrected and rechecked at 320, 390 and 700 pixels.
- Passed software filters, blog search/filter/reset, screenshot navigation, full-screen dialog keyboard controls and focus return, mobile menu navigation, legacy route recovery, contact validation/draft handoff, and saved/live motion preferences.
- Passed 19 dedicated effect checks covering live scroll response, rendered animation frames, cursor following/hover/press, keyboard and text-field behaviour, touch devices, pause persistence, live reduced motion and missing/lost WebGL contexts.
- The artwork/density revision passed 16 checks across the home, games, software and about pages at 1440, 768, 390 and 320 pixels: no horizontal overflow, clipped headings, broken images, browser errors or axe violations. Gameplay preview links, blog image links and software filters also passed.
- Checked metadata in generated HTML and formatting/whitespace of the changed source.

These are local Chromium checks, not a claim of a complete assistive-technology or cross-browser audit. The owner has approved the visual design and content for publication. GitHub Actions records deployment status.
