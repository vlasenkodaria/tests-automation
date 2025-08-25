import { test, expect } from '@playwright/test';

test.describe('Login page', () => {
  test('should show error for invalid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('#userName', 'invalidUser');
    await page.fill('#password', 'invalidPass');
    await page.click('#login');
    await expect(page.locator('#name')).toContainText('Invalid username or password!');
  });

  test('should login with valid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('#userName', 'testuser'); // replace with a real username
    await page.fill('#password', 'Test@123'); // replace with a real password
    await page.click('#login');
    await expect(page.locator('.main-header')).toHaveText('Profile');
  });
});