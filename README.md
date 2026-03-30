# Craft Beer and Code

This branch is an Astro rewrite of the original GitHub Pages Jekyll blog, keeping the current Clean Blog look and feel while moving the site onto a more flexible component-based stack.

## Local development

Use `mise` to activate Node `22.12.0` for this repository. The project includes [mise.toml](/Users/harryaustin/code/htsaustin.github.io/mise.toml):

```bash
mise install
mise trust
mise exec -- node --version
```

Install dependencies:

```bash
mise exec -- npm install
```

Start the Astro dev server:

```bash
mise exec -- npm run dev
```

The site will be available at `http://localhost:4321`.

## Production build

Build the static site:

```bash
mise exec -- npm run build
```

Preview the generated output locally:

```bash
mise exec -- npm run preview
```

## Deployment

GitHub Pages deployment is configured in `.github/workflows/deploy.yml` using Astro's official GitHub Action.

This repository is a user site repository (`htsaustin.github.io`), so Astro does not need a `base` path. The custom domain is configured via `public/CNAME`, and `astro.config.mjs` sets `site` to `https://www.craftbeerandcode.dev`.
