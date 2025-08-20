import { config } from "../../packages/eslint-config/base.js";

export default [
  ...config,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
];
