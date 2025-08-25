import { test, expect } from '@playwright/test';

test.describe('Modal Dialogs page', () => {
  test('should open and close small modal', async ({ page }) => {
    await page.goto('/modal-dialogs');
    await page.click('#showSmallModal');
    await expect(page.locator('.modal-content')).toBeVisible();
    await expect(page.locator('#example-modal-sizes-title-sm')).toHaveText('Small Modal');
    await page.click('#closeSmallModal');
    await expect(page.locator('.modal-content')).toBeHidden();
  });

  test('should open and close large modal', async ({ page }) => {
    await page.goto('/modal-dialogs');
    await page.click('#showLargeModal');
    await expect(page.locator('.modal-content')).toBeVisible();
    await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Large Modal');
    await page.click('#closeLargeModal');
    await expect(page.locator('.modal-content')).toBeHidden();
  });
});