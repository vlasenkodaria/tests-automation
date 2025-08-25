import { test, expect } from '@playwright/test';

test.describe('Frames page', () => {
  test('should get text from frame1', async ({ page }) => {
    await page.goto('/frames');
    const frame1 = await page.frameLocator('#frame1');
    await expect(frame1.locator('#sampleHeading')).toHaveText('This is a sample page');
  });

  test('should get text from frame2', async ({ page }) => {
    await page.goto('/frames');
    const frame2 = await page.frameLocator('#frame2');
    await expect(frame2.locator('#sampleHeading')).toHaveText('This is a sample page');
  });
});