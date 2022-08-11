const fs = require("node:fs");

module.exports = {
  cacheDirectory: "./cache/jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx,vue}", "!**/*.d.ts"],
  coverageDirectory: ".",
  coverageReporters: ["lcov", "lcovonly"],
  errorOnDeprecated: true,
  globals: {
    "ts-jest": { isolatedModules: true, tsconfig: "./tsconfig-min.json" }
  },
  haste: { throwOnModuleCollision: true },
  maxWorkers: 1,
  moduleFileExtensions: ["js", "ts", "vue"],
  moduleNameMapper: {
    [/^@$/u.source]: "<rootDir>/src",
    [/^@\/(.+)/u.source]: "<rootDir>/src/$1",
    [/^lodash-es$/u.source]: "lodash",
    [/^quasar$/u.source]:
      "<rootDir>/node_modules/quasar/dist/quasar.esm.prod.js",
    [/^uuid$/u.source]: "<rootDir>/node_modules/uuid/dist/index.js"
  },
  modulePathIgnorePatterns: [
    "/(?:\\.git|\\.quasar|\\.scannerwork|\\.vscode|cache|dist|docs|es|lcov-report|node_modules)/"
  ],
  resolver: "@skylib/config/jest/resolver",
  setupFiles: fs.existsSync("./jest.setup.ts") ? ["./jest.setup.ts"] : [],
  setupFilesAfterEnv: fs.existsSync("./jest.setup-after-env.ts")
    ? ["./jest.setup-after-env.ts"]
    : [],
  testEnvironment: "@skylib/config/jest/environments/node",
  testMatch: ["<rootDir>/tests/**/*.ts"],
  testSequencer: "@skylib/config/jest/sequencer",
  testTimeout: 10_000,
  transform: {
    [/\.(?:css|gif|jpg|less|png|sass|scss|styl|svg|ttf|woff|woff2)$/u.source]:
      "jest-transform-stub",
    [/\.(?:html|js|ts)$/u.source]: "ts-jest",
    [/\.vue$/u.source]: "@vue/vue3-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!@skylib/quasar-extension|is-obj|is-regexp|quasar|stringify-object)"
  ]
};
