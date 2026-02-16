## Repository Context
- Single-page planner app for Blender/Unity workflow; pure HTML/CSS/vanilla JS with LocalStorage persistence and no build tooling.
- UI and docs are Czech; keep developer names Jack (dev1) and Joker (dev2), and retain existing LocalStorage keys/data shape.
- Deployed via GitHub Pages; avoid adding dependencies or breaking static hosting (no bundlers/frameworks).

## Coding Guidelines
- Keep text in Czech; match existing tone/emojis; do not introduce English UI copy.
- Prefer minimal, direct DOM/JS; avoid new libraries; keep CSS responsive behavior intact.
- Preserve current data model and LocalStorage keys; avoid schema changes unless required.
- Stay consistent with existing file layout: main app in `index.html`, logic in `script.js`, styles in `styles.css`.

## Testing & Validation
- No automated tests; after changes, load `index.html` via `python3 -m http.server 8000` and sanity-check task creation, aspect filters, and persistence in the browser.
