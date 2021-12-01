# Simple Hapi TypeScript Starter | 2021

> Inspired by **Khalil Stemmler**'s [Simple TypeScript Starter | 2020](https://github.com/stemmlerjs/simple-typescript-starter)

### Features

- Minimal
- TypeScript v4
- Testing with Jest and Supertest
- Linting with Eslint and Prettier
- Pre-commit hooks with Husky
- Commit messages with git-cz
- Local development with Nodemon

### Scripts

#### `yarn run dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `yarn run start`

Starts the app in production by first building the project with `yarn run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `yarn run build`

Builds the app at `build`, cleaning the folder first.

#### `yarn run test`

Run unit tests inside `src`.

#### `yarn run test:e2e`

Run e2e tests inside `e2e`.

#### `yarn run pretty`

Format your code.

#### `yarn run lint`

Lint your code.

#### `yarn run cs`

Prepare changeset for commit.

#### `yarn run cz`

Commit changes.

#### `yarn run csv`

Consume changesets and apply the most appropriate semver version based on those.
