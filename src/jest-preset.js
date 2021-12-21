const fs = require("fs");

const setupFiles = fs.existsSync("./jest.setup.ts") ? ["./jest.setup.ts"] : [];

const setupFilesAfterEnv = fs.existsSync("./jest.setup-after-env.ts")
  ? ["./jest.setup-after-env.ts"]
  : [];

module.exports = {
  cacheDirectory: "./cache/jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx,vue}", "!**/*.d.ts"],
  coverageDirectory: ".",
  coverageReporters: ["lcov", "lcovonly"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
      tsconfig: "./tsconfig-min.json"
    }
  },
  haste: {
    throwOnModuleCollision: true
  },
  maxWorkers: 1,
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    [/^@\/(.*)/u.source]: "<rootDir>/src/$1",
    [/^@skylib\/([^/]+)\/es\/(.+)$/u.source]: "@skylib/$1/dist/$2",
    [/^lodash-es$/u.source]: "lodash",
    [/^quasar$/u.source]: "quasar/dist/quasar.esm.prod.js"
  },
  modulePathIgnorePatterns: [
    "/(?:\\.git|\\.quasar|\\.scannerwork|\\.vscode|cache|dist|docs|es|lcov-report|node_modules)/"
  ],
  resolver: "@skylib/config/src/jest-resolver",
  setupFiles,
  setupFilesAfterEnv,
  testEnvironment: "@skylib/config/src/jest-env-node",
  testMatch: ["<rootDir>/tests/**/*.ts"],
  testSequencer: "@skylib/config/src/jest-sequencer",
  testTimeout: 10_000,
  transform: {
    [/\.(?:css|jpg|less|png|sass|scss|styl|svg|ttf|woff|woff2)$/u.source]:
      "jest-transform-stub",
    [/\.(?:html|js|ts)$/u.source]: "ts-jest"
  },
  transformIgnorePatterns: ["node_modules/(?!lodash-es|quasar|quasar/lang)"]
};
