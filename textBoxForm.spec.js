
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('/text-box');

  await page.fill('#userName', 'Automation Test');
  await page.fill('#userEmail', 'test@test.com');
  await page.fill('#currentAddress', 'Frankfurt, Germany');
  await page.fill('#permanentAddress', 'Frankfurt, Germany');

  await page.click('#submit');

  await expect(page.locator('#output')).toBeVisible();
  await expect(page.locator('#name')).toContainText('Automation Test');
  await expect(page.locator('#email')).toContainText('test@test.com');
});
