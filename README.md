# React Web Boilerplate

A modern React web application boilerplate using Webpack, Babel, ESLint, Prettier, and Jest.

## Features

- **React 19** with functional components
- **Webpack 5** for bundling and dev server
- **Babel** for ESNext and JSX transpilation
- **Sass** support for styling
- **ESLint** (Airbnb + Prettier) for code linting
- **Prettier** for code formatting
- **Jest** for unit testing
- **React Router v5** for routing
- **Redux** and **Redux Saga** for state management
- **Husky** and **lint-staged** for pre-commit hooks
- **Commitlint** for commit message linting

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:8080](http://localhost:8080).

### Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

### Lint & Format

```bash
npm run lint
npm run format
```

### Test

```bash
npm test
```

## Project Structure

```
src/
    Pages/
        Home/
            Home.component.jsx
            index.js
    App.component.jsx
    Router.component.jsx
    index.jsx
    index.sass
    routes.js
    __tests__/
        index.test.js
```

## Scripts

- `npm start` — Start dev server
- `npm run build` — Build for production
- `npm run lint` — Lint code
- `npm run format` — Format code
- `npm test` — Run tests

## License

ISC

---

> Boilerplate by [Nick Pray](https://github.com/nwpray)
