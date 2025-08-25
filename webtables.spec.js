import { test, expect } from '@playwright/test';

test.describe('Web Tables page', () => {
  test('add a new record', async ({ page }) => {
    await page.goto('/webtables');
    await page.click('#addNewRecordButton');
    await page.fill('#firstName', 'John');
    await page.fill('#lastName', 'Doe');
    await page.fill('#userEmail', 'john.doe@example.com');
    await page.fill('#age', '30');
    await page.fill('#salary', '5000');
    await page.fill('#department', 'QA');
    await page.click('#submit');

    // Check that the new record appears in the table
    const row = page.locator('.rt-tbody .rt-tr-group').last();
    await expect(row).toContainText('John');
    await expect(row).toContainText('Doe');
    await expect(row).toContainText('john.doe@example.com');
    await expect(row).toContainText('30');
    await expect(row).toContainText('5000');
    await expect(row).toContainText('QA');
  });

  test('search for a record', async ({ page }) => {
    await page.goto('/webtables');
    await page.fill('#searchBox', 'Cierra');
    const rows = page.locator('.rt-tbody .rt-tr-group');
    await expect(rows).toContainText('Cierra');
  });

  test('delete a record', async ({ page }) => {
    await page.goto('/webtables');
    // Delete the first record
    await page.click('span[title="Delete"]');
    // Optionally, check that the row count decreased
    // or that the deleted name is no longer present
  });
});