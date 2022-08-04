module.exports = {
  extends: [
    "./plugins/core",
    "./plugins/deprecation",
    "./plugins/es",
    "./plugins/escompat",
    "./plugins/eslint-comments",
    "./plugins/etc",
    "./plugins/github",
    "./plugins/import",
    "./plugins/jsdoc",
    "./plugins/no-type-assertion",
    "./plugins/no-use-extend-native",
    "./plugins/node",
    "./plugins/only-warn",
    "./plugins/pii",
    "./plugins/promise",
    "./plugins/regexp",
    "./plugins/security",
    "./plugins/skylib",
    "./plugins/sonarjs",
    "./plugins/sort-destructure-keys",
    "./plugins/sort-imports-requires",
    "./plugins/typescript-sort-keys",
    "./plugins/unicorn",
    "./plugins/vue",
    "./plugins/vue-scoped-css",
    "./plugins/xss",
    "./plugins/typescript-eslint",
    "./plugins/prettier",
    "./plugins/unused-imports"
  ],
  env: {
    browser: true,
    commonjs: true,
    es2022: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2017,
    extraFileExtensions: [".vue"],
    parser: "@typescript-eslint/parser",
    project: "tsconfig.json",
    sourceType: "module"
  },
  overrides: [
    { files: "**/__mocks__/**", extends: "./roles/mocks" },
    { files: "./src/test-utils/**", extends: "./roles/test-utils" },
    { files: "./tests/**", extends: "./roles/tests" },
    {
      files: [".eslintrc.*.js", ".eslintrc.js", "eslintrc.*.js", "eslintrc.js"],
      extends: "./roles/eslintrc"
    },
    {
      files: [".eslintrc.js"],
      rules: {
        "@skylib/config/eslintrc-no-disable": "warn",
        "@skylib/config/eslintrc-no-rules": "warn"
      }
    },
    {
      files: [".eslintrc.overrides.js"],
      rules: {
        "@skylib/config/eslintrc-no-disable": "warn",
        "@skylib/config/eslintrc-no-rules": "warn"
      }
    },
    {
      files: [".eslintrc.rule-overrides.js"],
      rules: {
        "@skylib/config/eslintrc-no-disable": "warn",
        "@skylib/config/eslintrc-no-overrides": "warn"
      }
    },
    {
      files: [".eslintrc.temp.js"],
      rules: {
        "@skylib/config/eslintrc-no-overrides": "warn",
        "@skylib/config/eslintrc-no-rules": "warn"
      }
    },
    { files: [".prettier.js"], rules: { "@skylib/config/prettier": "warn" } },
    {
      files: ["commitlint.scopes.js", "commitlint-all.scopes.js"],
      rules: { "@skylib/config/sort-commitlint": "warn" }
    }
  ]
};
