# About
This is a demo for a proposed software architecture on frontend and backend for small to medium companies / projects

## demo-app

This template should help get you started developing with Vue 3 in Vite.

### Project Setup

```sh
docker compose build
```

### Compile and Hot-Reload for Development

```sh
docker compose up app
```

### Type-Check, Compile and Minify for Production

```sh
docker compose run --rm app npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
docker compose run --rm app npm run test:unit
```

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## E2E with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
docker compose run --rm e2e npm run test