# Southern Clarity Website (Quarto)

This repository uses **Quarto** as the single source of truth for the website.

## Repository structure

- `_quarto.yml` — site configuration (navbar, footer, format)
- `index.qmd` — home page source
- `contact.qmd` — contact page source
- `blog.css` — shared styling
- `docs/` — generated static site output (commit this folder)

## Local development

1. Install Quarto: <https://quarto.org/docs/get-started/>
2. In this folder, run:
   - `quarto preview`
3. Edit `.qmd` files and `blog.css`.

## Publishing

- Render locally with `quarto render`.
- Quarto writes static output to `docs/`.
- Commit and push `docs/` to publish changes.
- In GitHub Pages settings, use **Deploy from a branch** with `main` and `/docs`.
- No GitHub Actions workflow is required for publishing.
- See `PUBLISHING.md` for the step-by-step checklist (repo documentation only; not rendered to the website).

## Important

Do not edit generated HTML directly. Edit `.qmd` source files instead.
