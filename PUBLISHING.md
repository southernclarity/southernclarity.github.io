# Publishing Checklist (Repo Only)

This file is for repository workflow documentation and is **not rendered into the website**.

## Before publishing

- Update content in `index.qmd` and/or `contact.qmd`.
- If needed, update shared styles in `blog.css`.
- Run a local preview: `quarto preview`.

## Build static output

- Render the site: `quarto render`.
- Confirm output files are updated in `docs/`.

## Commit and publish

- Commit source changes and `docs/` output.
- Push to `main`.
- GitHub Pages should be configured as:
  - Source: **Deploy from a branch**
  - Branch: `main`
  - Folder: `/docs`
- Do not use GitHub Actions for deployment; this repo publishes directly from committed static files.

## Notes

- Do not edit files inside `docs/` manually.
- Do not edit files inside `_site/`; it is local transient output.
