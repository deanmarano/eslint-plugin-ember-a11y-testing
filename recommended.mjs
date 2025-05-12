import * as emberA11yTesting from "./lib/index.js";

const { rules } = emberA11yTesting.default;

export default [
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      globals: {
        browser: true,
      },
    },
    plugins: {
      "ember-a11y-testing": emberA11yTesting,
    },
    settings: {
      "ember-a11y-testing": {
        auditModule: {
          package: "ember-a11y-testing/test-support/audit",
          exportName: "default",
        },
      },
    },
    rules: {
      "ember-a11y-testing/a11y-audit-after-test-helper": rules["a11y-audit-after-test-helper"],
      "ember-a11y-testing/a11y-audit-no-expression": rules["a11y-audit-no-expression"],
      "ember-a11y-testing/a11y-audit-no-globals": rules["a11y-audit-no-globals"],
    },
  },
];
