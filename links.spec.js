import { test, expect } from '@playwright/test';

test.describe('Links page', () => {
  test('Home link opens correct URL', async ({ page, context }) => {
    await page.goto('/links');
    // Intercept new tab
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('#simpleLink'),
    ]);
    await newPage.waitForLoadState();
    expect(newPage.url()).toBe('https://demoqa.com/');
    await newPage.close();
  });

  test('Dynamic Home link opens correct URL', async ({ page, context }) => {
    await page.goto('/links');
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('#dynamicLink'),
    ]);
    await newPage.waitForLoadState();
    expect(newPage.url()).toBe('https://demoqa.com/');
    await newPage.close();
  });

  test('Created link returns status message', async ({ page }) => {
    await page.goto('/links');
    await page.click('a#created');
    await expect(page.locator('#linkResponse')).toContainText('Created');
  });

  test('No Content link returns status message', async ({ page }) => {
    await page.goto('/links');
    await page.click('a#no-content');
    await expect(page.locator('#linkResponse')).toContainText('No Content');
  });

  test('Moved link returns status message', async ({ page }) => {
    await page.goto('/links');
    await page.click('a#moved');
    await expect(page.locator('#linkResponse')).toContainText('Moved');
  });

  test('Bad Request link returns status message', async ({ page }) => {
    await page.goto('/links');
    await page.click('a#bad-request');
    await expect(page.locator('#linkResponse')).toContainText('Bad Request');
  });

  test('Unauthorized link returns status message', async ({ page }) => {
    await page.goto('/links');
    await page.click('a#unauthorized');
    await expect(page.locator('#linkResponse')).toContainText('Unauthorized');
  });

  test('Forbidden link returns status message', async ({ page }) => {
    await page.goto('/links');
    await page.click('a#forbidden');
    await expect(page.locator('#linkResponse')).toContainText('Forbidden');
  });

  test('Not Found link returns status message', async ({ page }) => {
    await page.goto('/links');
    await page.click('a#invalid-url');
    await expect(page.locator('#linkResponse')).toContainText('Not Found');
  });
});