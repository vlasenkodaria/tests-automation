import { test, expect } from '@playwright/test';

test.describe('Broken Links - Images page', () => {
  test('valid image loads successfully', async ({ page }) => {
    await page.goto('/broken');
    const validImg = page.locator('img[src="/images/Toolsqa_1.jpg"]');
    const isLoaded = await validImg.evaluate(img => img.complete && img.naturalWidth > 0);
    expect(isLoaded).toBe(true);
  });

  test('broken image does not load', async ({ page }) => {
    await page.goto('/broken');
    const brokenImg = page.locator('img[src="/images/Toolsqa_2.jpg"]');
    const isLoaded = await brokenImg.evaluate(img => img.complete && img.naturalWidth > 0);
    expect(isLoaded).toBe(false);
  });

  test('valid link returns 200', async ({ page, request }) => {
    await page.goto('/broken');
    const response = await request.get('https://demoqa.com/');
    expect(response.status()).toBe(200);
  });

  test('broken link returns 500', async ({ page, request }) => {
    await page.goto('/broken');
    const response = await request.get('http://the-internet.herokuapp.com/status_codes/500');
    expect(response.status()).toBe(500);
  });
});