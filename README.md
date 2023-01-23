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

Or with surge: 

```bash
./deploy_surge.sh <domain_name>
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
