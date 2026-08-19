# Khurafaati Sameer – Netlify Ready Astro Blog

## Deploy to Netlify in 1 Click
1. Push this folder to GitHub
2. Netlify → Add new site → Import from GitHub
3. Build command: npm run build
   Publish directory: dist
   Node version: 20 (already set in netlify.toml)

Or drag & drop dist after npm run build.

## Local Dev
npm install
npm run dev

## What was fixed from audit
- Single CSS system (no duplicate 9px text)
- No :global() and no CSS after </body>
- Real search with result count + no-results state
- Mobile menu closes on outside/Escape/link click
- Forms with validation + toast (no alert)
- SEO: meta, OG tags, semantic HTML
- Accessibility: labels, aria-expanded, focus states

## Next steps
- Connect newsletter to ConvertKit/Mailchimp webhook in src/pages/index.astro
- Replace emoji cards with real images in src/data/articles.js
- Add /blog/[slug] pages using Astro content collections
