import { test, expect } from '@playwright/test';

test.describe('Swagger page', () => {
  test('should display Swagger UI', async ({ page }) => {
    await page.goto('/swagger/');
    // Check for Swagger UI header
    await expect(page.locator('.swagger-ui .topbar')).toBeVisible();
    await expect(page.locator('.swagger-ui')).toContainText('Swagger');
  });

  test('should list API endpoints', async ({ page }) => {
    await page.goto('/swagger/');
    // Check that at least one API endpoint is listed
    await expect(page.locator('.opblock')).toHaveCountGreaterThan(0);
  });
});