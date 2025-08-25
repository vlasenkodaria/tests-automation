import { test, expect } from '@playwright/test';

test.describe('Buttons page', () => {
  test('double click button', async ({ page }) => {
    await page.goto('/buttons');
    await page.dblclick('#doubleClickBtn');
    await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click');
  });

  test('right click button', async ({ page }) => {
    await page.goto('/buttons');
    await page.click('#rightClickBtn', { button: 'right' });
    await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click');
  });

  test('dynamic click button', async ({ page }) => {
    await page.goto('/buttons');
    // The third button does not have an id, so select by text
    await page.getByRole('button', { name: 'Click Me' }).click();
    await expect(page.locator('#dynamicClickMessage')).toHaveText('You have done a dynamic click');
  });
  });