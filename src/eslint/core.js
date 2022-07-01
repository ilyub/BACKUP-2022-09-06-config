module.exports = {
  extends: "eslint:all",
  overrides: [
    {
      files: "*.{ts,vue}",
      rules: {
        "consistent-return": "off",
        "default-case": "off",
        "no-undef": "off"
      }
    }
  ],
  rules: {
    "array-callback-return": "off",
    "arrow-body-style": [
      "warn",
      "as-needed",
      { requireReturnForObjectLiteral: true }
    ],
    "camelcase": "off",
    "capitalized-comments": "off",
    "class-methods-use-this": ["warn", { enforceForClassFields: false }],
    "func-names": ["warn", "never"],
    "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
    "id-length": [
      "warn",
      {
        exceptionPatterns: [],
        exceptions: [],
        max: 50,
        min: 1,
        properties: "always"
      }
    ],
    "line-comment-position": ["warn", { ignorePattern: "NOSONAR" }],
    "max-lines": ["warn", 1500],
    "max-lines-per-function": ["warn", 500],
    "max-params": ["warn", 5],
    "max-statements": ["warn", 100],
    "multiline-comment-style": "off",
    "new-cap": "off",
    "no-inline-comments": ["warn", { ignorePattern: "NOSONAR" }],
    "no-lone-blocks": "off",
    "no-magic-numbers": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-shadow": [
      "warn",
      {
        allow: ["event", "name"],
        builtinGlobals: true,
        hoist: "all"
      }
    ],
    "no-ternary": "off",
    "no-undef": ["warn", { typeof: true }],
    "no-undefined": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: /^(?:_|omit)/u.source,
        varsIgnorePattern: /^(?:_|omit)/u.source
      }
    ],
    "no-use-before-define": "off",
    "object-shorthand": ["warn", "properties"],
    "one-var": ["warn", "never"],
    "prefer-destructuring": "off",
    "prefer-named-capture-group": "off",
    "prefer-object-has-own": "off",
    "sort-imports": ["warn", { ignoreDeclarationSort: true }],
    "sort-keys": "off",
    "spaced-comment": [
      "warn",
      "always",
      {
        // eslint-disable-next-line xss/no-mixed-html -- Ok
        markers: ["/ <reference"]
      }
    ]
  }
};
