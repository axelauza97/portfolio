// @ts-check
const { defineConfig } = require('@playwright/test');

const PORT = process.env.PORT || 3001;

module.exports = defineConfig({
  testDir: './tests/visual',
  workers: 1,
  use: {
    baseURL: `http://localhost:${PORT}`,
  },
  webServer: {
    command: `npm run dev -- -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: true,
    timeout: 30000,
  },
});
