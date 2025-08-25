// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://demoqa.com',
  },
  testDir: './tests',
  retries: 1,
});
