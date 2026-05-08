# Spec Viewer Workspace App

SpecForge workspace shell with module-based navigation over one shared filesystem-first project registry.

## Route Map

- `/` → `WorkspaceHomePage`
- `/idea-validator` → `IdeaValidatorHomePage`
- `/idea-validator/:projectId` → `IdeaValidatorProjectPage`
- `/spec-viewer` → `SpecViewerHomePage`
- `/spec-viewer/:projectId` → `SpecViewerProjectPage`
- `/design-tokens` → `DesignTokensHomePage`
- `/design-tokens/:projectId` → `DesignTokensProjectPage`
- `/poc-builder` → `PocBuilderHomePage`
- `/poc-builder/:projectId` → `PocBuilderProjectPage`
- `/project/:projectId` → legacy redirect to `/spec-viewer/:projectId`

Router source: `src/router.tsx`

## Shared Source of Truth

All modules read from one shared registry:

- `src/workspace/registry/project-registry.ts`
- `src/workspace/registry/spec-selectors.ts`

Registry inputs:

- `projects/*/metadata.json`
- `projects/*/specs/*.md`

No module should implement its own project/spec registry.

## Layout and Shared UI

Shared workspace primitives:

- `WorkspaceShell`
- `ProjectGrid`
- `ProjectDetailLayout`
- `MarkdownPane`

Defined in: `src/workspace/components/*`

## Module Boundaries

Shared:

- project/spec loading
- navigation shell
- metadata/status presentation
- markdown rendering helpers

Module-specific:

- idea summary composition
- full spec browsing
- design token section projection
- poc brief section projection

## Adding a New Module

1. Add module definition in `src/workspace/modules.ts`.
2. Add home/detail pages under `src/modules/<module-id>/`.
3. Register routes in `src/router.tsx`.
4. Reuse shared registry and shared layout components.
5. Do not add backend, db, auth, or global state libraries.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
