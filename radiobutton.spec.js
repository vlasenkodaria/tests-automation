import { test, expect } from '@playwright/test';

test.describe('Radio Button page', () => {
  const options = ['Yes', 'Impressive', 'No'];

  for (const option of options) {
    test(`select "${option}" radio button`, async ({ page }) => {
      await page.goto('/radio-button');
      // Click the radio button label (some are disabled)
      const label = page.locator(`label[for="` + option.toLowerCase() + 'Radio"]');
      if (await label.isDisabled()) {
        // Skip disabled radio buttons (e.g., "No")
        test.skip();
      } else {
        await label.click();
        await expect(page.locator('.text-success')).toHaveText(option);
      }
    });
  }
});