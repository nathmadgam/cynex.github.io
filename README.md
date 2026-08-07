# Cynex — Roblox programmer portfolio

Personal portfolio for Nathaniel Madrid (Cynex), published at
<https://nathmadgam.github.io/>.

Plain HTML, CSS, and ES modules. No framework, no build step, no dependencies.

## Structure

```
index.html            markup, metadata, and the inline SVG icon sprite
assets/css/styles.css design tokens and all component styles
assets/js/app.js      rendering and behaviour (ES module)
assets/js/data.js     project, experience, capability, network, and review content
assets/posters/       video poster frames (960×540)
assets/cached-media/  Roblox and Discord avatars
assets/contract-pages/ contract page previews
assets/fallbacks/     SVG placeholders used if a bitmap fails to load
images/               portrait
videos/               project demo recordings
downloads/            the client agreement PDF
```

## Editing content

Content lives in `assets/js/data.js`. Adding a project means adding one entry
plus a poster image and an MP4; no other file needs to change.

## Local preview

`index.html` loads `app.js` as an ES module, so it needs to be served over HTTP
rather than opened from the filesystem. Any static server works, for example:

```
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Deployment

`.github/workflows/deploy-pages.yml` stages the site files into `_site` and
publishes them with GitHub Pages on every push to `main`. Because this is a user
site served from the domain root, all asset paths are relative and no base path
is configured. `.nojekyll` keeps Pages from running Jekyll over the output.

Note that GitHub Pages is case-sensitive: filenames in `data.js` and `index.html`
must match the files on disk exactly.

## Icons

Interface icons are [Lucide](https://lucide.dev) (ISC) and brand icons are
[Simple Icons](https://simpleicons.org) (CC0), inlined as a single `<symbol>`
sprite in `index.html` so there is no icon dependency or extra request.

## Contact form

The inquiry form is static. It composes a `mailto:` message to
`nathanielmadridgaminde@proton.me` and stores nothing.
