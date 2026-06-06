# UI with Tailwind TypeScript Components

A React + TypeScript + Vite component playground that demonstrates common UI patterns styled with Tailwind CSS.

## Features

- Tailwind CSS utility styling with shared component classes.
- Reusable React components written in strict TypeScript.
- Counter component for local state updates.
- Search filter component for instant list filtering.
- Form validation component with accessible error messages.
- Fetch API component that loads posts from JSONPlaceholder.
- Debounced search component powered by a reusable `useDebounce` hook.
- Todo application with add, complete, remove, and remaining-count behavior.
- Modal component controlled by props with focus management.

## Project structure

```text
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── src
    ├── App.tsx
    ├── main.tsx
    ├── styles.css
    ├── components
    │   ├── Counter.tsx
    │   ├── DebouncedSearch.tsx
    │   ├── FetchApi.tsx
    │   ├── FormValidation.tsx
    │   ├── Modal.tsx
    │   ├── SearchFilter.tsx
    │   └── TodoApp.tsx
    ├── hooks
    │   └── useDebounce.ts
    ├── services
    │   └── posts.ts
    └── types
        └── index.ts
```

## Getting started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## GitHub deployment instructions

You can deploy this Vite app to GitHub Pages with GitHub Actions.

1. Push this repository to GitHub.
2. In GitHub, open **Settings → Pages**.
3. Set **Build and deployment → Source** to **GitHub Actions**.
4. Create `.github/workflows/deploy.yml` with the workflow below.
5. Commit and push the workflow to the default branch.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

> The Vite config uses `base: './'`, so the app works from a repository subpath on GitHub Pages without additional configuration.
