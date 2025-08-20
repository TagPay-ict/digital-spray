# Digital Spray Monorepo

This is a monorepo built with [Turborepo](https://turborepo.com) containing a React client and Express server.

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps

- `client`: a [React](https://reactjs.org) app with [TypeScript](https://www.typescriptlang.org/) and [Vite](https://vitejs.dev/)
- `server`: an [Express](https://expressjs.com/) server with [TypeScript](https://www.typescriptlang.org/)

### Packages

- `eslint-config`: ESLint configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `typescript-config`: TypeScript configurations
- `ui`: a stub React component library shared by both `web` and `docs` applications

### Utilities

This turborepo has some additional tools already set up for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Husky](https://typicode.github.io/husky/) for Git hooks
- [Commitlint](https://commitlint.js.org/) for commit message validation

## Setup

This repository is used in the `npx create-turbo@latest` command, and selected when choosing which package manager you wish to use with your monorepo (npm).

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```

## Commit Conventions

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for commit messages. All commits are automatically validated using commitlint and husky.

### Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation
- `ci`: Changes to CI configuration files and scripts
- `build`: Changes that affect the build system or external dependencies
- `revert`: Reverts a previous commit

### Examples

```bash
# Feature
git commit -m "feat: add user authentication"

# Bug fix
git commit -m "fix: resolve login form validation issue"

# Documentation
git commit -m "docs: update API documentation"

# Style changes
git commit -m "style: format code with prettier"

# With scope
git commit -m "feat(client): add dark mode toggle"
git commit -m "fix(server): handle database connection errors"
```

### Pre-commit Hooks

Before each commit, the following checks are automatically run:

1. **Linting**: ESLint checks for code quality issues
2. **Type Checking**: TypeScript validates type safety
3. **Commit Message Validation**: Commitlint ensures proper commit message format

If any of these checks fail, the commit will be blocked.

**Note**: The pre-commit hooks are automatically installed when you run `npm install` due to the `prepare` script.

### Manual Validation

You can manually validate a commit message using:

```bash
npm run commitlint
```

### Easy Commit Creation

To create commits with an interactive prompt that ensures proper formatting:

```bash
npm run commit
```

This will guide you through creating a properly formatted commit message step by step.

## Remote Caching

Turborepo can use a remote cache to share build caches across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

To link your Turborepo to your Remote Cache, run the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turborepo.com/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
