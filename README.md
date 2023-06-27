# Photography Web Template built with Nuxt 3

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Coding Style

Please refer to this [Style Guide](https://google.github.io/styleguide/tsguide.html)

## Dependencies

We use [vscode](https://code.visualstudio.com/download).
once installed, head over to Extensions, then install:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## Installation

```bash
git clone git@github.com:caviezel/nuxt-playground-photography
```

## Setup

In your vscode settings.json, add these lines:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
"[json]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[markdown]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[vue]": {
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "Vue.volar"
},
"css.lint.unknownAtRules": "ignore",
"prettier.semi": false,
"prettier.singleQuote": true
```

Make sure to install the dependencies:

```bash
# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
