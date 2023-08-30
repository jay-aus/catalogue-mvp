// jest.config.js
export default {
  // Ignore specified modules in node_modules from transformation
  // This is useful to prevent unnecessary transformation of specific dependencies
  transformIgnorePatterns: [
    'node_modules/(?!' +
    [
      'node-fetch',
      'fetch-blob',
      'data-uri-to-buffer',
      'jest-runtime',
      'formdata-polyfill'
    ].join('|') +
    ')',
  ],

  // Use CommonJS syntax for test files
  testEnvironment: 'node',

  // ... other Jest options ...
};
