# UI-with-Tailwind-Typescript-
### TECH stack
- Convert the existing starter into a modern Vite app using React and TypeScript and satisfy the requested feature set (Tailwind CSS, reusable components, counter, search/filter, form validation, fetch example, debounce, todo app, and modal).

A React + TypeScript component playground showcasing reusable UI patterns, interactive examples, and foundational building blocks for scalable frontend development.

### Description
Configured the development toolchain, including Vite, TypeScript, Tailwind CSS, PostCSS, and Autoprefixer, along with standardized build, development, and preview scripts.
Established a scalable project structure with dedicated configuration files (vite.config.ts, tsconfig.json, tsconfig.app.json, tsconfig.node.json, postcss.config.js, and tailwind.config.js).
Replaced the legacy JavaScript entry point with a TypeScript-based application setup (src/main.tsx and src/App.tsx) and implemented a responsive component showcase using reusable UI primitives.
Developed a collection of reusable components and utilities, including Button, Card, Counter, Search Filter, Form Validation, Fetch API Integration, Debounced Search, Todo Application, Modal, and a custom useDebounce hook.

# React + TypeScript + Vite Component Playground

This project is a Vite application built with React, TypeScript, and Tailwind CSS.

## Included components

- Reusable `Button` and `Card` components
- Counter component
- Search filter component
- Form validation component
- Fetch API component
- Debounced search component
- Todo application
- Modal component

## Scripts

```bash
npm install
npm run dev
npm run build
```
=======
# UI components

Counter — increment, decrement, reset
Search filter — type to filter the frameworks list
Form validation — live inline errors; submit only enables when all fields are valid
Fetch API — loads real posts from JSONPlaceholder, with a refresh button
Debounced search — 500ms delay before filtering the cities list
Todo app — add tasks (Enter key works too), check off, delete
Modal — opens an overlay; closes via button, clicking outside, or Escape
