# Notes App

A modern React + TypeScript application for viewing and navigating learning notes. Built with Vite for fast development and optimized builds.

## Features

- **📚 Static Markdown Loading** - Notes are loaded at build time using Vite's glob imports
- **🔗 Internal Navigation** - Click links within notes to navigate seamlessly
- **↩️ Navigation History** - Back button to return to previously viewed notes
- **📊 Table Support** - GitHub Flavored Markdown with proper table rendering
- **🎨 Syntax Highlighting** - Code blocks with syntax highlighting
- **📱 Responsive Design** - Fixed header with scrollable content areas

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── notes/
│   └── sql/              # All SQL learning notes
├── data/
│   ├── notes.ts          # Notes configuration and loader
│   └── data.ts           # Navigation links
├── Components/
│   ├── LeftNav.tsx       # Navigation sidebar
│   └── SpinLoader.tsx    # Loading spinner
└── App.tsx               # Main application
```

## How It Works

The app uses Vite's static import capabilities to load all markdown files at build time:

1. **Build Time**: Vite's `import.meta.glob()` finds all `.md` files in `src/notes/sql/`
2. **Runtime**: Notes are instantly available without network requests
3. **Navigation**: Internal markdown links are intercepted and handled by React Router-like navigation
4. **Rendering**: React Markdown renders content with table support and syntax highlighting

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
