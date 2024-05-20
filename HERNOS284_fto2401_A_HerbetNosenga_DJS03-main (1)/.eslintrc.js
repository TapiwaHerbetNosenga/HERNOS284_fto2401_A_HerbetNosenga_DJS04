module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['eslint:recommended'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      // Your custom rules
    },
    overrides: [
        {
          files: ['*.mjs', '*.js'], // Apply to .mjs and .js files
          parserOptions: {
            sourceType: 'module', // Override to module for these files
          },
        },
      ],
  };