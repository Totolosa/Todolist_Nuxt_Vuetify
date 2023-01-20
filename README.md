# Todo List SPA

Project build with [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) and [Vuetify](https://next.vuetifyjs.com/en/). Read documentations for more informations.

## Setup

MANDATORY: Make sure to install the dependencies:
```bash
yarn install
```

OPTIONNAL: If you want to deploy with [Surge.sh](https://surge.sh/):
```bash
npm i -g surge
```
To install surge, then
```bash
surge
```
and ollow instruction to create your account.


## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

Or with surge: You can change the name of url you want to use in line 2 of deploy_surge.sh

```bash
./deploy_surge.sh
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
