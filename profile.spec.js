import { test, expect } from '@playwright/test';

test.describe('Profile page', () => {
  test('should redirect to login if not authenticated', async ({ page }) => {
    await page.goto('/profile');
    await expect(page.locator('.main-header')).toHaveText('Login');
  });

  test('should display user info when logged in', async ({ page }) => {
    // Replace with valid credentials
    await page.goto('/login');
    await page.fill('#userName', 'testuser');
    await page.fill('#password', 'Test@123');
    await page.click('#login');
    await expect(page.locator('.main-header')).toHaveText('Profile');
    await expect(page.locator('#userName-value')).toBeVisible();
  });

  test('should log out successfully', async ({ page }) => {
    // Replace with valid credentials
    await page.goto('/login');
    await page.fill('#userName', 'testuser');
    await page.fill('#password', 'Test@123');
    await page.click('#login');
    await expect(page.locator('.main-header')).toHaveText('Profile');
    await page.click('#submit'); // Logout button
    await expect(page.locator('.main-header')).toHaveText('Login');
  });
});