// @ts-check
const { defineConfig } = require('@playwright/test');

const PORT = process.env.PORT || 3001;

module.exports = defineConfig({
  testDir: './tests/visual',
  use: {
    baseURL: `http://localhost:${PORT}`,
  },
});
