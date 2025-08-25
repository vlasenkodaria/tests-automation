import { test, expect } from '@playwright/test';

test.describe('Browser Windows page', () => {
  test('New Tab button opens a new tab with correct content', async ({ page, context }) => {
    await page.goto('/browser-windows');
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('#tabButton'),
    ]);
    await newPage.waitForLoadState();
    await expect(newPage.locator('#sampleHeading')).toHaveText('This is a sample page');
    await newPage.close();
  });

  test('New Window button opens a new window with correct content', async ({ page, context }) => {
    await page.goto('/browser-windows');
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('#windowButton'),
    ]);
    await newPage.waitForLoadState();
    await expect(newPage.locator('#sampleHeading')).toHaveText('This is a sample page');
    await newPage.close();
  });

  test('New Window Message button opens a new window', async ({ page, context }) => {
    await page.goto('/browser-windows');
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('#messageWindowButton'),
    ]);
    await newPage.waitForLoadState();
    // The new window contains only text, so check for any content
    const content = await newPage.content();
    expect(content.length).toBeGreaterThan(0);
    await newPage.close();
  });
});