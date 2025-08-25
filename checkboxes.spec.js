import { test, expect } from '@playwright/test';

test('check all checkboxes', async ({ page }) => {
  await page.goto('/checkbox');

  // Expand all nodes
  await page.click('.rct-option-expand-all');

  // Select all checkboxes
  const checkboxes = await page.$$('.rct-checkbox');
  for (const checkbox of checkboxes) {
    await checkbox.click();
  }

  // Assert all checkboxes are checked
  const checked = await page.$$('.rct-icon-check');
  expect(checked.length).toBe(checkboxes.length);
});