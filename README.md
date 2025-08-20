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

### Scopes

Scopes are **required** and must be one of:

- `client`: Frontend/React app changes
- `server`: Backend/Express server changes  
- `infra`: Infrastructure, deployment, config changes
- `global`: Changes affecting the entire monorepo

### Examples

```bash
# Feature with scope
git commit -m "feat(client): add user authentication"

# Bug fix with scope
git commit -m "fix(server): resolve database connection issue"

# Documentation with scope
git commit -m "docs(global): update API documentation"

# Style changes with scope
git commit -m "style(client): format components with prettier"

# Infrastructure changes
git commit -m "chore(infra): update docker configuration"

# Global changes
git commit -m "feat(global): setup commitlint and husky"
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




