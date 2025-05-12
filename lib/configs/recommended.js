export default {
  languageOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    globals: {
      browser: true,
    },
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
    "a11y-audit-after-test-helper": 'error',
    "a11y-audit-no-expression": 'error',
    "a11y-audit-no-globals": 'error',
  },
};
